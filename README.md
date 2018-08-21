## Exemplo simples de login em DApp

Instalar dependências (node, truffle...)

Baixar uport box em https://truffleframework.com/boxes/react-uport

Criar uma dapp em https://appmanager.uport.me/

Salvar signing key, exibida na linha
```javascript
signer: SimpleSigner('SIGNING KEY')
```

### connector.js

Editar connector.js, adicionando:

```javascript
import { Connect, SimpleSigner } from 'uport-connect'

export let uport = new Connect('GoBlockchain Uport DApp', {
  clientId: 'APP_ADDRESS',
  network: 'rinkeby',
  signer: SimpleSigner('SIGNING_KEY')
})

export const web3 = uport.getWeb3()
```

Ao criar sua dapp, deve-se anotar a SIGNING_KEY. Ela só será exibida uma única vez, na criação da DApp.

O endereço da aplicação sempre estará disponível no appmanager.


### LoginButtonAction.js

Em LoginButtonAction.js, definir o que se quer requisitar do usuário.

No exemplo abaixo, estamos requisitando nome, telefone, país, public key, encrypted public key:

```javascript
import { uport } from './../../../util/connectors.js'
import { browserHistory } from 'react-router'

export const USER_LOGGED_IN = 'USER_LOGGED_IN'
function userLoggedIn(user) {
  return {
    type: USER_LOGGED_IN,
    payload: user
  }
}

export function loginUser() {
  return function(dispatch) {
    // UPort and its web3 instance are defined in ./../../../util/wrappers.
    // Request uPort persona of account passed via QR
    uport.requestCredentials({
      requested: ['name', 'phone', 'country', 'publicKey', 'publicEncKey'],
      notifications: true
    }).then((credentials) => {
      dispatch(userLoggedIn(credentials))

      // Used a manual redirect here as opposed to a wrapper.
      // This way, once logged in a user can still access the home page.
      var currentLocation = browserHistory.getCurrentLocation()

      if ('redirect' in currentLocation.query)
      {
        return browserHistory.push(decodeURIComponent(currentLocation.query.redirect))
      }

      return browserHistory.push('/dashboard')
    })
  }
}
```

### Dashboard.js

Em Dashboard.js, se exibe os dados requisitados:
```javascript
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
```
