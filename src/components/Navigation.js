import React from "react"
import logo from '../img/logo.jpg'

const Navigation = () => {

  return (
    <nav className="level navigation pb-3 mb-0">
      <p className="level-item has-text-centered">
        <a href="index.html" className="link is-info">Home</a>
      </p>

      <p className="level-item has-text-centered">
        <img src={logo} alt="simple blog" />
      </p>

      <p className="level-item has-text-centered">
        <a href="index.html" className="link is-info">Settings</a>
      </p>
    </nav>
  )
}

export default Navigation;