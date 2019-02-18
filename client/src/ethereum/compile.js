const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

// Task: Delete the contents of the build folder. 
// First __dirname resolves to ethereum. 
// Then 'build' resolves to ethereum/build directory
const buildPath = path.resolve(__dirname, 'build');
console.log('buildPath:' + buildPath);
// Delete the contents of the folder
fs.removeSync(buildPath);    // This was commented in my last try.

// Get to the Campaign.sol fro compilation
const campaignPath = path.resolve(__dirname, 'contracts', 'CampaignFunding.sol');

// Read the sol file into the 'source' variable
const source = fs.readFileSync(campaignPath, 'utf8');

// Compile 1 source with solc and extract only the contract into the output
const output = solc.compile(source, 1).contracts;

// Create build directory (if does not exist)
fs.ensureDirSync(buildPath);

// loop thru 'output' of compile and extract two contract 
// replacing : in :Campaign or :CampaignFactor is needed because 
// console.log(output);  // Just to see what output is ... to be commented out.
// windows use : for directory.
for (let contract in output) {
  //console.log('for ----buildPath:' + buildPath + '  contract:' + contract );
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(':', '') + '.json'),
    output[contract]
  )
}