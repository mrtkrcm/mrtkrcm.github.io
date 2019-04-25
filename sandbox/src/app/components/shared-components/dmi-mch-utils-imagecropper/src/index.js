import ReactCrop, { makeAspectCrop } from 'react-image-crop'
import styled, { createGlobalStyle } from 'styled-components'
import { Button, Modal } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { Fragment } from 'react'
// import reactCrop from 'react-image-crop/dist/ReactCrop.css'

// import cloudinaryUpload from '../utils/cloudinary-upload'

const cloudinaryUpload = (file, preset) => {
  const formData = new FormData()
  const { cloudinary } = getEnvConfig.fe
  formData.append('file', file)
  formData.append('upload_preset', preset)
  formData.append('api_key', getEnvConfig.fe.cloudinary.apiKey)
  formData.append('timestamp', Date.now() / 1000)

  return axios.post(`https://api.cloudinary.com/v1_1/${cloudinary.name}/image/upload`, formData, {
    headers: { 'X-Requested-With': 'XMLHttpRequest' }
  })
}


// const GlobalStyle = createGlobalStyle`
//   ${reactCrop}
// `

class ImageCropperModal extends React.Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    file: PropTypes.object,
    fileUrl: PropTypes.string,
    resizeWidth: PropTypes.number,
    resizeHeight: PropTypes.number,
    uploadPreset: PropTypes.string.isRequired,
    onCropConfirmed: PropTypes.func,
    labels: PropTypes.object
  }

  state = { ...this.defaultState }

  defaultState = {
    // eslint-disable-line react/sort-comp
    open: null,
    crop: {
      x: 0,
      y: 0,
      aspect: 1,
      width: 0,
      height: 0
    },
    pixelCrop: {},
    processing: false
  }

  componentDidMount() {
    this.setState({ open: this.props.open })
  }

  onConfirmCrop = async () => {
    this.setState({ processing: true })

    cloudinaryUpload(this.props.file, this.props.uploadPreset).then((response) => {
      const { data } = response
      const { x, y, width, height } = this.state.pixelCrop
      const { resizeWidth, resizeHeight } = this.props

      let resizeParams = []
      resizeWidth && resizeParams.push(`w_${resizeWidth}`)
      resizeHeight && resizeParams.push(`h_${resizeHeight}`)

      if (resizeWidth || resizeHeight) {
        resizeParams = `/${resizeParams.join(',')}`
      } else {
        resizeParams = ''
      }

      const cropParams = `/x_${x},y_${y},c_crop,w_${width},h_${height}`

      const CLOUDINARY_NAME = getEnvConfig.fe.cloudinary.name
      const imageUrl = `https://res.cloudinary.com/${CLOUDINARY_NAME}/image/upload${cropParams}${resizeParams}`
        + `/v${data.version}/${data.public_id}.${data.format}`

      axios
        .get(imageUrl, { responseType: 'blob' })
        .then(imageContent => imageContent.data)
        .then((blob) => {
          this.props.onCropConfirmed({ url: imageUrl, blob })
        })
        .then(() => {
          this.setState({ ...this.defaultState })
        })
    })
  }

  onModalClose = () => {
    this.setState({ ...this.defaultState })
  }

  render() {
    const { state, props, onModalClose, onConfirmCrop } = this

    return (
      <Fragment>
        <Modal open={state.open} onClose={onModalClose} closeOnEscape={false} closeonrootnodeclick='false'>
          <Modal.Content className={props.className}>
            {props.fileUrl && (
              <ReactCrop
                src={props.fileUrl}
                onChange={(crop, pixelCrop) => {
                  this.setState({ crop, pixelCrop })
                }}
                onImageLoaded={(image) => {
                  const crop = makeAspectCrop(
                    {
                      x: 20,
                      y: 20,
                      width: 60,
                      height: 60,
                      aspect: 1
                    },
                    image.width / image.height
                  )
                  this.setState({
                    crop,
                    pixelCrop: {
                      x: Math.round(image.naturalWidth * (crop.x / 100)),
                      y: Math.round(image.naturalHeight * (crop.y / 100)),
                      width: Math.round(image.naturalWidth * (crop.width / 100)),
                      height: Math.round(image.naturalHeight * (crop.height / 100))
                    }
                  })
                }}
                keepSelection
                crop={state.crop}
              />
            )}
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={onModalClose} size='small'>Cancel</Button>
            <Button
              primary
              onClick={onConfirmCrop}
              disabled={state.crop && (state.crop.width === 0 || state.crop.height === 0 || state.processing)}
              loading={state.processing}
              size='small'
            >Confirm
            </Button>
            {/* <GlobalStyle /> */}
          </Modal.Actions>
        </Modal>
      </Fragment>
    )
  }
}

export default styled(ImageCropperModal)`
  display: flex !important;
  align-items: center;
  justify-content: center;
`
