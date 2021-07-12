import React from 'react'

import enhance from './enhance'
import './styles.css'

const Component = ({
  checkboxValue,
  handleCheckboxChange,
  handleSubmit,
  handleTextChange,
  hasValidationErrors,
  inputValue
}) => {
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          className="search-form__input-field"
          name="package name"
          onChange={handleTextChange}
          placeholder="Search NPM"
          type="text"
          value={inputValue}
        />
        <input
          className="search-form__input-submit"
          type="submit"
          value="Search"
        />
      </form>

      <label>
        <input
          name="fail api"
          onChange={handleCheckboxChange}
          type="checkbox"
          value={checkboxValue}
        />
        Simulate failed API call
      </label>

      {hasValidationErrors && (
        <p className="search-form__validation-error">
          Please enter a package name.
        </p>
      )}
    </React.Fragment>
  )
}

export default enhance(Component)
