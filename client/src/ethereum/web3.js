import Web3 from 'web3';

//Deleted for it creates error when run on server or if browser does not have metamask
//const web3 = new Web3(window.web3.currentProvider);

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the browser && and metamask is running
  // we are using our import web3 to be consistent with the version we want instead
  // of Metamask injecting whatever version it wants.
  web3 = new Web3(window.web3.currentProvider);
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/a3c844b48fc84bf4afc604e85a0b65d6'
  );
  web3 = new Web3(provider);
}


export default web3;