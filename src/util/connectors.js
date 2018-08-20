import { Connect } from 'uport-connect'

export let uport = new Connect('GoBlockchain  Uport DApp', {
  clientId: '2odXFTyZ4UgtESJQHewsohWFiQKehiGjeti',
  network: 'rinkeby',
  signer: '11b358a3ead794fd66b6882ae877eb6bf6a079659047efd48c7758527d426f15'
})


export const web3 = uport.getWeb3()
