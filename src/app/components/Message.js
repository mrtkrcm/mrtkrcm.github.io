import PropTypes from 'prop-types'
import { Modal } from 'rbx/components'
import { Content, Title } from 'rbx/elements'
import CustomButton from 'dmi-ui/components/Button'

const Message = ({ active, cardTitle, contentTitle, content, controls }) => (
  <Modal active={active}>
    <Modal.Background />
    <Modal.Card>
      {cardTitle && (
        <Modal.Card.Head>
          <Modal.Card.Title>{cardTitle}</Modal.Card.Title>
        </Modal.Card.Head>
      )}
      <Modal.Card.Body>
        <Content>
          {contentTitle && (
            <Title>{contentTitle}</Title>
          )}
          {content && (
            <p>{content}</p>
          )}
        </Content>
      </Modal.Card.Body>
      <Modal.Card.Foot>
        {/* Actions are passed from parent component */}
        {controls.map(control => (
          <CustomButton
            key={control.key}
            type={control.type || null}
            onClick={control.onClick}
          >
            <span>{control.text}</span>
          </CustomButton>
        ))}
      </Modal.Card.Foot>
    </Modal.Card>
  </Modal>
)

Message.propTypes = {
  active: PropTypes.bool,
  cardTitle: PropTypes.string,
  contentTitle: PropTypes.string,
  content: PropTypes.string,
  controls: PropTypes.array
}


export default Message
