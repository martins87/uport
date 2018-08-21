## Exemplo simples de login em DApp

Instalar dependências (node, truffle...)

Baixar uport box => https://truffleframework.com/boxes/react-uport

Criar uma dapp em => https://appmanager.uport.me/
- salvar signing key, exibida na linha
- signer: SimpleSigner('SIGNING KEY')

Editar connector.js, adicionando:
- '''
import { Connect, SimpleSigner } from 'uport-connect'

export let uport = new Connect('GoBlockchain Uport DApp', {
  clientId: 'APP_ADDRESS',
  network: 'rinkeby',
  signer: SimpleSigner('SIGNING_KEY')
})

export const web3 = uport.getWeb3()
'''
- ao criar sua dapp, deve-se anotar a SIGNING_KEY
- o address sempre estará disponível no appmanager

Em LoginButtonAction.js, definir o que se quer requisitar do usuário:

'''
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
'''

Em Dashboard.js, se exibe os dados requisitados:
- https://pastebin.com/raw/QQ1fXRJQ
