# HOW TO

instalar dependências (node, truffle...)
baixar uport box => https://truffleframework.com/boxes/react-uport
criar uma dapp em => https://appmanager.uport.me/
	salvar signing key, exibida na linha
	signer: SimpleSigner('SIGNING KEY')
editar connector.js, adicionando:
	https://pastebin.com/raw/0wEZ5fZs
!	ao criar sua dapp, deve-se anotar a SIGNING_KEY
	o address sempre estará disponível no appmanager
em LoginButtonAction.js, definir o que se quer requisitar do usuário:
	https://pastebin.com/raw/ghhaYqw0
em Dashboard.js, se exibe os dados requisitados:
	https://pastebin.com/raw/QQ1fXRJQ
