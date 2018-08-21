## Exemplo simples de login em DApp

Instalar dependências (node, truffle...)

Baixar uport box => https://truffleframework.com/boxes/react-uport

Criar uma dapp em => https://appmanager.uport.me/
- salvar signing key, exibida na linha
- signer: SimpleSigner('SIGNING KEY')

Editar connector.js, adicionando:
- https://pastebin.com/raw/0wEZ5fZs
- ao criar sua dapp, deve-se anotar a SIGNING_KEY
- o address sempre estará disponível no appmanager

Em LoginButtonAction.js, definir o que se quer requisitar do usuário:
- https://pastebin.com/raw/ghhaYqw0

Em Dashboard.js, se exibe os dados requisitados:
- https://pastebin.com/raw/QQ1fXRJQ
