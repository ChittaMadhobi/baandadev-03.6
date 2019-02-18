const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');

// Need to replace in order to read it off the build directory
// from hard disc
// Replaced By:  const { interface, bytecode } = require ('./compile');
// We are only deploying the factory. So, only CampaignFactory is our focus
// At some point of time, this factory would be invoked which in turn would deploy an
// instance of the Campaign.

const compiledFactory = require('./build/CampaignFactory.json');

// This creates the provider with Rinkby mneumonic and infure endpoint address
const provider = new HDWalletProvider(
	'reform chicken border fiction exotic mountain unaware grain congress rail plate candy',
	'https://rinkeby.infura.io/v3/a3c844b48fc84bf4afc604e85a0b65d6'
);

const web3 = new Web3(provider);

// We will create a function so we can use async-await and then call it instantly.
const deploy = async () => {
	const accounts = await web3.eth.getAccounts();
	// As we have seen before, mneumonic will generate many accounts. We need the first

	console.log('Attempting to deploy from account : ' + accounts[0]);

	const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
		.deploy({ data: '0x' + compiledFactory.bytecode }) // No arguments passed
		.send({ gas: '3000000', from: accounts[0], gasPRice: '100000' })
		.catch((err) => console.log('err: ' + JSON.stringify(err)));

	console.log('Address of deployed contract: ' + result.options.address);
};

deploy();
