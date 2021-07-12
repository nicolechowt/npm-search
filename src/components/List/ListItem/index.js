import React from 'react'

import './styles.css'

const Component = ({ description, name, npmLink }) => (
  <li className="list-item">
    {npmLink ? (
      <a className="list-item__link" href={npmLink}>
        <h3>{name ? name : npmLink}</h3>
      </a>
    ) : (
      name && <h3>{name}</h3>
    )}

    {description && (
      <p className="list-item__description">
        {description}
      </p>
    )}
  </li>
)

export default Component
