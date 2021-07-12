import React from 'react'
import {
  branch,
  compose,
  lifecycle,
  renderComponent,
  withState,
} from 'recompose'
import { connect } from 'react-redux'

import isEmpty from '../../utils/isEmpty'

const enhance = compose(
  connect(
    ({ search }) => ({
      busy: search.busy,
      error: search.error,
      searchResults: search.entities,
    }),
    null
  ),
  withState('hasNoResults', 'setHasNoResults', false),
  lifecycle({
    componentDidUpdate(prevProps) {
      const { props } = this

      if (props.error) return

      if (prevProps.busy && !props.busy && isEmpty(props.searchResults)) {
        props.setHasNoResults(true)
      }

      if (prevProps.hasNoResults && !isEmpty(props.searchResults)) {
        props.setHasNoResults(false)
      }
    },
  }),
  branch(
    ({ error }) => error,
    renderComponent(({ error }) => <p style={{ color: `#cb3837` }}>{error}</p>)
  ),
  branch(
    ({ busy }) => busy,
    renderComponent(() => <p>Loading...</p>)
  ),
  branch(
    ({ hasNoResults }) => hasNoResults,
    renderComponent(() => <p style={{ color: `#cb3837` }}>0 packages found</p>)
  )
)

export default enhance
