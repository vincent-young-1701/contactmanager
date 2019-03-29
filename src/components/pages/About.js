import React from 'react'

export default props => {
  return (
    <div>
      <h1 className="display-4">
        <span>About Contact Manager</span>
        <span>{props.match.params.id}</span>
      </h1>
      <p className="lead">Simple app to manage contacts</p>
      <p className="text-secondary">Version 1.0</p>
    </div>
  )
}
