import { compose, withHandlers, withState } from 'recompose'
import { connect } from 'react-redux'

import { searchPackage } from '../../store/Search'

const enhance = compose(
  connect(null, {
    searchPackage
  }),
  withState('inputValue', 'setInputValue', ''),
  withState('checkboxValue', 'setCheckboxValue', false),
  withState(
    'hasValidationErrors',
    'setHasValidationErrors',
    false
  ),
  withHandlers({
    handleSubmit: props => event => {
      event.preventDefault()

      if (!props.inputValue) {
        return props.setHasValidationErrors(true)
      }

      if (props.hasValidationErrors) {
        props.setHasValidationErrors(false)
      }

      props.searchPackage({
        query: props.inputValue,
        simulateError: props.checkboxValue
      })
    },
    handleTextChange: props => event => {
      props.setInputValue(event.target.value)
    },
    handleCheckboxChange: props => event => {
      props.setCheckboxValue(event.target.checked)
    }
  })
)

export default enhance
