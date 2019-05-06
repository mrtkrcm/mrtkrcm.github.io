/* eslint-disable react/destructuring-assignment */
import ReactCrop, { makeAspectCrop } from 'react-image-crop'
import styled from 'styled-components'
import { Button, Modal } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import axios from 'axios'
import React, { Fragment } from 'react'

// TODO: IT'S ONLY USED HERE, BUT NICE TO HAVE AS A SEPARATED COMPONENT
const cloudinaryUpload = (file, preset, cloudinaryObj) => {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('upload_preset', preset)
  formData.append('api_key', cloudinaryObj.apiKey)
  formData.append('timestamp', Date.now() / 1000)

  return axios.post(`https://api.cloudinary.com/v1_1/${cloudinaryObj.name}/image/upload`, formData, {
    headers: { 'X-Requested-With': 'XMLHttpRequest' }
  })
}

class ImageCropperModal extends React.Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    file: PropTypes.object,
    fileUrl: PropTypes.string,
    resizeWidth: PropTypes.number,
    resizeHeight: PropTypes.number,
    uploadPreset: PropTypes.string.isRequired,
    onCropConfirmed: PropTypes.func,
    labels: PropTypes.object,
    cloudinary: PropTypes.object
  }

  state = { ...this.defaultState }

  defaultState = {
    open: null,
    cloudinary: null,
    crop: {
      x: 0,
      y: 0,
      aspect: 1.6,
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
    cloudinaryUpload(this.props.file, this.props.uploadPreset, this.props.cloudinary).then((response) => {
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

      const CLOUDINARY_NAME = this.props.cloudinary.name
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
                    props.cropProperties,
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

  .ReactCrop {
    position: relative;
    display: inline-block;
    cursor: crosshair;
    overflow: hidden;
    max-width: 100%;
    background-color: #000;
  }
  .ReactCrop:focus {
    outline: none;
  }
  .ReactCrop--disabled, .ReactCrop--locked {
    cursor: inherit;
  }
  .ReactCrop__image {
    /* autoprefixer: off */
    display: block;
    max-width: 100%;
    max-height: -webkit-fill-available;
    max-height: -moz-available;
    max-height: fill-available;
  }
  .ReactCrop--crop-invisible .ReactCrop__image {
    opacity: 0.5;
  }
  .ReactCrop__crop-selection {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate3d(0, 0, 0);
    box-sizing: border-box;
    cursor: move;
    box-shadow: 0 0 0 9999em rgba(0, 0, 0, 0.5);
    border: 1px solid;
    border-image-source: url("data:image/gif;base64,R0lGODlhCgAKAJECAAAAAP///////wAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAg
    RGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6
    bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJk
    ZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJv
    dXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hh
    cC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9Inht
    cC5kaWQ6OEI5RDc5MTFDNkE2MTFFM0JCMDZEODI2QTI4MzJBOTIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEI5RDc5MTBDNkE2MTFFM0JCMDZE
    ODI2QTI4MzJBOTIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJl
    ZjppbnN0YW5jZUlEPSJ4bXAuZGlkOjAyODAxMTc0MDcyMDY4MTE4MDgzQzNDMjA5MzREQ0ZDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjAyODAx
    MTc0MDcyMDY4MTE4MDgzQzNDMjA5MzREQ0ZDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5k
    PSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGw
    r66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZ
    WFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMC
    AQAAIfkEBQoAAgAsAAAAAAoACgAAAhWEERkn7W3ei7KlagMWF/dKgYeyGAUAIfkEBQoAAgAsAAAAAAoACgAAAg+UYwLJ7RnQm7QmsCyVKhUAIfkEBQoA
    AgAsAAAAAAoACgAAAhCUYgLJHdiinNSAVfOEKoUCACH5BAUKAAIALAAAAAAKAAoAAAIRVISAdusPo3RAzYtjaMIaUQAAIfkEBQoAAgAsAAAAAAoACgAA
    Ag+MDiem7Q8bSLFaG5il6xQAIfkEBQoAAgAsAAAAAAoACgAAAg+UYRLJ7QnQm7SmsCyVKhUAIfkEBQoAAgAsAAAAAAoACgAAAhCUYBLJDdiinNSEVfOE
    KoECACH5BAUKAAIALAAAAAAKAAoAAAIRFISBdusPo3RBzYsjaMIaUQAAOw==");
    border-image-slice: 1;
    border-image-repeat: repeat;
  }
  .ReactCrop--disabled .ReactCrop__crop-selection {
    cursor: inherit;
  }
  .ReactCrop__drag-handle {
    position: absolute;
    width: 9px;
    height: 9px;
    background-color: rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.7);
    box-sizing: border-box;
    outline: 1px solid transparent;
  }
  .ReactCrop .ord-nw {
    top: 0;
    left: 0;
    margin-top: -5px;
    margin-left: -5px;
    cursor: nw-resize;
  }
  .ReactCrop .ord-n {
    top: 0;
    left: 50%;
    margin-top: -5px;
    margin-left: -5px;
    cursor: n-resize;
  }
  .ReactCrop .ord-ne {
    top: 0;
    right: 0;
    margin-top: -5px;
    margin-right: -5px;
    cursor: ne-resize;
  }
  .ReactCrop .ord-e {
    top: 50%;
    right: 0;
    margin-top: -5px;
    margin-right: -5px;
    cursor: e-resize;
  }
  .ReactCrop .ord-se {
    bottom: 0;
    right: 0;
    margin-bottom: -5px;
    margin-right: -5px;
    cursor: se-resize;
  }
  .ReactCrop .ord-s {
    bottom: 0;
    left: 50%;
    margin-bottom: -5px;
    margin-left: -5px;
    cursor: s-resize;
  }
  .ReactCrop .ord-sw {
    bottom: 0;
    left: 0;
    margin-bottom: -5px;
    margin-left: -5px;
    cursor: sw-resize;
  }
  .ReactCrop .ord-w {
    top: 50%;
    left: 0;
    margin-top: -5px;
    margin-left: -5px;
    cursor: w-resize;
  }
  .ReactCrop__disabled .ReactCrop__drag-handle {
    cursor: inherit;
  }
  .ReactCrop__drag-bar {
    position: absolute;
  }
  .ReactCrop__drag-bar.ord-n {
    top: 0;
    left: 0;
    width: 100%;
    height: 6px;
    margin-top: -3px;
  }
  .ReactCrop__drag-bar.ord-e {
    right: 0;
    top: 0;
    width: 6px;
    height: 100%;
    margin-right: -3px;
  }
  .ReactCrop__drag-bar.ord-s {
    bottom: 0;
    left: 0;
    width: 100%;
    height: 6px;
    margin-bottom: -3px;
  }
  .ReactCrop__drag-bar.ord-w {
    top: 0;
    left: 0;
    width: 6px;
    height: 100%;
    margin-left: -3px;
  }
  .ReactCrop--new-crop .ReactCrop__drag-bar,
  .ReactCrop--new-crop .ReactCrop__drag-handle,
  .ReactCrop--fixed-aspect .ReactCrop__drag-bar {
    display: none;
  }
  .ReactCrop--fixed-aspect .ReactCrop__drag-handle.ord-n,
  .ReactCrop--fixed-aspect .ReactCrop__drag-handle.ord-e,
  .ReactCrop--fixed-aspect .ReactCrop__drag-handle.ord-s,
  .ReactCrop--fixed-aspect .ReactCrop__drag-handle.ord-w {
    display: none;
  }
  @media (max-width: 768px), (pointer: coarse) {
    .ReactCrop__drag-handle {
      width: 17px;
      height: 17px; }
    .ReactCrop .ord-nw {
      margin-top: -9px;
      margin-left: -9px; }
    .ReactCrop .ord-n {
      margin-top: -9px;
      margin-left: -9px; }
    .ReactCrop .ord-ne {
      margin-top: -9px;
      margin-right: -9px; }
    .ReactCrop .ord-e {
      margin-top: -9px;
      margin-right: -9px; }
    .ReactCrop .ord-se {
      margin-bottom: -9px;
      margin-right: -9px; }
    .ReactCrop .ord-s {
      margin-bottom: -9px;
      margin-left: -9px; }
    .ReactCrop .ord-sw {
      margin-bottom: -9px;
      margin-left: -9px; }
    .ReactCrop .ord-w {
      margin-top: -9px;
      margin-left: -9px; }
    .ReactCrop__drag-bar.ord-n {
      height: 14px;
      margin-top: -7px; }
    .ReactCrop__drag-bar.ord-e {
      width: 14px;
      margin-right: -7px; }
    .ReactCrop__drag-bar.ord-s {
      height: 14px;
      margin-bottom: -7px; }
    .ReactCrop__drag-bar.ord-w {
      width: 14px;
      margin-left: -7px; }
  }
`
