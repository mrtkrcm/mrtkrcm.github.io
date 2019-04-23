import PropTypes from 'prop-types'

let CKEditor = null
if (typeof window !== 'undefined') {
  CKEditor = require('ckeditor4-react') // eslint-disable-line global-require
}

const btns = {
  toolbar: [
    {
      items: [
        'Source', 'Bold', 'Italic', 'Underline', 'Strike', 'list', 'indent', 'blocks', 'align', 'bidi',
        'NumberedList', 'BulletedList', 'Outdent', 'Indent', 'Blockquote',
        'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock',
        'BidiLtr', 'BidiRtl', 'Language', 'Link', 'Unlink', 'Table', 'HorizontalRule',
        'SpecialChar', 'PasteText', 'PasteFromWord', 'Maximize',
        'ShowBlocks', 'CopyFormatting', 'RemoveFormat'
      ]
    }
  ]
}

const RichTextEditor = ({ name, data, customHandler }) => (
  <CKEditor
    name={name}
    data={data}
    onChange={e => customHandler(e, name)}
    config={btns}
  />
)

RichTextEditor.propTypes = {
  name: PropTypes.string,
  data: PropTypes.string,
  customHandler: PropTypes.func
}

export default RichTextEditor
