import React, { Component } from 'react'

class Dashboard extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props
  }

  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Dashboard</h1>
            <p><strong>{this.props.authData.name}</strong>, you have logged in with UPort. Your data:<br/>
            phone: {this.props.authData.phone}<br/>
            country: {this.props.authData.country}<br/>
            public key: {this.props.authData.publicKey}<br/>
            public encrypted key: {this.props.authData.publicEncKey}</p>
          </div>
        </div>
      </main>
    )
  }
}

export default Dashboard
