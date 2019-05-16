/* eslint-disable react/destructuring-assignment */
import Dropzone from 'react-dropzone'
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Modal, Button, Input, CrossIcon } from 'semantic-ui-react'
import axios from 'axios'
import shortid from 'shortid'
import loadImage, { parseMetaData } from 'blueimp-load-image'


// import { PressAcc as PressAccService } from '../services'
// import CrossIcon from './icons/Cross'
// import Text from '../components/Text'
// import Close from '../components/icons/Close'
// import px2rem from '../utils/px2rem'

class Uploader extends React.Component {
  static propTypes = {
    dropzone: PropTypes.object,
    children: PropTypes.func,
    minWidth: PropTypes.number,
    minHeight: PropTypes.number,
    maxSize: PropTypes.number,
    multiple: PropTypes.bool,
    api: PropTypes.string,
    apiFormData: PropTypes.object,
    apiHeaders: PropTypes.object,
    uploadOnFileSelect: PropTypes.bool,
    uploadToFuturetek: PropTypes.bool,
    uploadButtonLabel: PropTypes.string,
    defaultInputValue: PropTypes.string,
    onFileInputReset: PropTypes.func,
    onFileUploadSuccess: PropTypes.func,
    resetCallback: PropTypes.func
  }

  static defaultProps = {
    minWidth: 0,
    minHeight: 0,
    multiple: false,
    apiFormData: {}
  }

  defaultMessageState = { // eslint-disable-line react/sort-comp
    open: false,
    header: '',
    content: ''
  }

  state = {
    file: null,
    ref: null,
    message: { ...this.defaultMessageState },
    uploadedFile: null,
    uploadInProgress: false
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (JSON.stringify(this.props) !== JSON.stringify(nextProps)) {
      return true
    }
    if (this.state.ref === null && nextState.ref !== null) {
      return true
    }
    if (this.state.file === null && this.state.ref !== null) {
      return false
    }
    if (this.state.uploadedFile === null && (nextState.uploadedFile && nextState.uploadedFile[0].name !== null)) {
      return true
    }
    if (this.state.file !== null && (nextState.file && this.state.file[0].size === nextState.file[0].size)) {
      return false
    }
    return true
  }

  onFileSelect = (accepted, rejected) => {
    const { minWidth, minHeight, maxSize } = this.props

    if (this.state.file !== null) {
      this.resetUploader()
    }

    if (accepted.length > 0) {
      // Image dimension check
      if ((accepted[0].type.includes('image/') && accepted[0].preview) && (minWidth || minHeight)) {
        const img = new Image()
        img.src = accepted[0].preview

        img.addEventListener('load', (loaded) => {
          // browser fallback: Edge handles 'target' not 'path'
          const { naturalWidth, naturalHeight } = loaded.path ? loaded.path[0] : loaded.target
          if (naturalWidth >= minWidth && naturalHeight >= minHeight) {
            const loadImageOptions = { canvas: true }
            parseMetaData(accepted[0], (data) => {
              if (data.exif && data.exif.get('Orientation')) {
                loadImageOptions.orientation = data.exif.get('Orientation')
              }
              loadImage(accepted[0], (canvas) => {
                accepted[0].preview = canvas.toDataURL(accepted[0].type) // eslint-disable-line no-param-reassign
                this.setState({ file: accepted })
              }, loadImageOptions)
            })
          } else {
            this.setState({
              message: {
                open: true,
                header: 'Error',
                content: () => (
                  <Modal.Content>
                    <ul className='error-list'>
                      <li key={shortid.generate()}>
                        <p>Minimum required dimensions: {minWidth}x{minHeight}px.
                          Please upload an image with a higher resolution.
                        </p>
                      </li>
                    </ul>
                  </Modal.Content>
                )
              }
            })
          }
        })
      } else {
        this.setState({ file: accepted }, () => {
          if (this.props.uploadOnFileSelect) {
            if (this.props.uploadToFuturetek) {
              this.uploadFilesToFuturetek()
            } else {
              this.uploadFilesToServer()
            }
          }
        })
      }
    }

    // Check rejected files, e.g. file size exceed
    if (rejected.length > 0) {
      const overSizedFiles = []

      rejected.forEach((file) => {
        if (file.size > maxSize) {
          overSizedFiles.push(file)
        }
      })

      if (overSizedFiles) {
        this.setState({
          message: {
            open: true,
            header: `Maximum file size is ${Math.round(maxSize * 0.000001)}Mb(s)`,
            content: () => (
              <Modal.Content>
                <ul className='error-list'>
                  {
                    overSizedFiles.map((file) => {
                      if (file.size > maxSize) {
                        return (
                          <li key={shortid.generate()}>
                            {file.name} <strong>({Math.round(file.size * 0.000001)}Mb)</strong>
                          </li>
                        )
                      }
                      return null
                    })
                  }
                </ul>
              </Modal.Content>
            )
          }
        })
      }
    }
  }

  uploadFilesToServer = () => {
    this.setState({ uploadInProgress: true })

    const formData = new FormData()
    const { api, apiFormData, apiHeaders } = this.props
    let headers = { 'X-Requested-With': 'XMLHttpRequest' }

    if (apiHeaders) {
      headers = { headers, ...apiHeaders }
    }

    const uploaders = this.state.file.map((file) => {
      formData.append('file', file)

      Object.keys(apiFormData).forEach((key) => {
        formData.append(key, apiFormData[key])
      })

      return axios.post(api, formData, headers)
    })

    axios.all(uploaders).then((resolve) => {
      this.setState({ uploadedFile: resolve, uploadInProgress: false })
    })
  }

  onMessageModalClose = () => {
    this.setState({ message: { ...this.defaultMessageState } })
  }

  resetUploader = (e) => {
    if (typeof this.props.onFileInputReset === 'function') {
      this.props.onFileInputReset(this.props).then((response) => {
        if (response.ok) {
          this.setState({ file: null, uploadedFile: null })
          typeof this.props.resetCallback === 'function' && this.props.resetCallback()
        }
      })
    } else {
      this.setState({ file: null, uploadedFile: null })
    }
    e && e.preventDefault()
  }

  render() {
    const { props, state } = this
    const documentName = (state.uploadedFile && (state.file && state.file[0].name)) || props.defaultInputValue || ''

    return (
      <div className={props.className}>
        <Dropzone
          name={props.name}
          id={props.id}
          accept={props.accept}
          maxSize={props.maxSize}
          multiple={props.multiple}
          ref={(node) => {
            state.ref === null && this.setState({ ref: node })
          }}
          onDrop={this.onFileSelect}
          style={{ display: 'none' }}
          {...props.dropzone}
        />
        {
          typeof props.children === 'function'
          && props.children(
            state.ref,
            state.file,
            state.uploadedFile,
            state.uploadInProgress,
            this.resetUploader,
            this.uploadFilesToServer
          )
        }

        {
          props.showFileInput && (
            <Fragment>
              <Input action>
                <Input
                  value={documentName}
                  icon={
                    documentName
                    && (
                    <a
                      href='#'
                      onClick={(e) => {
                        this.resetUploader(e)
                      }}
                    >
                      <CrossIcon className='removeApplicationFile' />
                    </a>
                    )
                  }
                />
                <Button
                  primary
                  onClick={() => { state.ref.open() }}
                  disabled={state.uploadInProgress}
                  loading={state.uploadInProgress}
                  type='button'
                  size='small'
                >
                  {this.props.uploadButtonLabel || 'Upload'}
                </Button>
              </Input>
            </Fragment>
          )}

        <Modal
          open={state.message.open}
          header={state.message.header}
          content='Text content'
          size='small'
          closeOnEscape
          onClose={this.onMessageModalClose}
          actions={[
            { key: 'ok', content: 'OK' }
          ]}
          closeIcon={(
            <div
              role='button'
              tabIndex={0}
              className='modal-icon-close'
              onClick={this.closeModal}
              onKeyDown={this.closeModal}
            />
          )}
        />
      </div>
    )
  }
}

export default Uploader
