// FOR FUTURE RESEARCH AND IF THINGS DON't WORK RIGHT WITH THE FIX


// import Web3 from 'web3';

// //Deleted for it creates error when run on server or if browser does not have metamask
// //const web3 = new Web3(window.web3.currentProvider);

// let web3;

// if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
//   // We are in the browser && and metamask is running
//   // we are using our import web3 to be consistent with the version we want instead
//   // of Metamask injecting whatever version it wants.
  
  
//   // ********** It wasweb3 = new Web3(window.web3.currentProvider);
// } else {
//   // We are on the server *OR* the user is not running metamask
//   const provider = new Web3.providers.HttpProvider(
//     'https://rinkeby.infura.io/v3/a3c844b48fc84bf4afc604e85a0b65d6'
//   );
//   web3 = new Web3(provider);
// }


// export default web3;


// window.addEventListener('load', async () => {
//   // Modern dapp browsers...
//   if (window.ethereum) {
//       window.web3 = new Web3(ethereum);
//       try {
//           // Request account access if needed
//           await ethereum.enable();
//           // Acccounts now exposed
//           web3.eth.sendTransaction({/* ... */});
//       } catch (error) {
//           // User denied account access...
//       }
//   }
//   // Legacy dapp browsers...
//   else if (window.web3) {
//       window.web3 = new Web3(web3.currentProvider);
//       // Acccounts always exposed
//       web3.eth.sendTransaction({/* ... */});
//   }
//   // Non-dapp browsers...
//   else {
//       console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
//   }
// });