import React from 'react'

import isEmpty from '../../utils/isEmpty'

import enhance from './enhance'
import ListItem from './ListItem'
import './styles.css'

const Component = ({ searchResults = [] }) => (
  <ul>
    {searchResults.map(({ package: npmPackage = {} }) =>
      isEmpty(npmPackage) ? null : (
        <ListItem
          description={npmPackage.description}
          key={npmPackage.name}
          name={npmPackage.name}
          npmLink={npmPackage.links && npmPackage.links.npm}
        />
      )
    )}
  </ul>
)

export default enhance(Component)
