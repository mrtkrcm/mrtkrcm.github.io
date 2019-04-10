import PropTypes from 'prop-types'
import { Navbar } from 'rbx/components'
import { Button } from 'rbx/elements'
import CustomButton from 'dmi-ui/components/Button'
import styled from 'styled-components'

const ActionsBar = ({ title, controls, className, isLoading }) => (
  <>
    <Navbar className={className}>
      <Navbar.Menu>
        <Navbar.Brand>
          <Navbar.Item as='span' className='action-title'>
            {title}
          </Navbar.Item>
        </Navbar.Brand>
        <Navbar.Segment align='end'>
          <Navbar.Item as='div'>
            <Button.Group>
              {/* Actions are passed from parent component */}
              {controls.map(control => (
                <CustomButton
                  key={control.key}
                  type={control.type || null}
                  onClick={control.onClick}
                  isLoading={isLoading}
                  isDisabled={control.isDisabled}
                >
                  <span>{control.text}</span>
                </CustomButton>
              ))}
            </Button.Group>
          </Navbar.Item>
        </Navbar.Segment>
      </Navbar.Menu>
    </Navbar>
    <Separator marginBottom={25} />
  </>
)

const StyledActionsBar = styled(ActionsBar)`
  margin: 4px 0;
  background: transparent;

  .button {
    height: 44px;
    line-height: 44px;
    padding-top: 0;
    padding-bottom: 0;
  }

  .action-title {
    font-size: 17px;
    font-weight: bold;
    color: ${props => props.theme.colorDark};
  }
`

ActionsBar.propTypes = {
  title: PropTypes.string,
  controls: PropTypes.array,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool
}

export default StyledActionsBar
