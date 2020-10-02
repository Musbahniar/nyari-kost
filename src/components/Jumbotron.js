import React from 'react'

const Jumbotron = ({ children, jumbotron }) => {
return <header className={jumbotron}>{children}</header>
}

export default Jumbotron

Jumbotron.defaultProps = {
  jumbotron: "defaultHero"
}
