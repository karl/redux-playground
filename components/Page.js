import React, { PropTypes, Component } from 'react'
import './Page.css'

class Page extends Component {
  render() {
    return (
      <div className="Page">
        {this.props.children}
      </div>
    )
  }
}

export default Page
