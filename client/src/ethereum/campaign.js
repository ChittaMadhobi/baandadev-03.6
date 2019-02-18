import web3 from './web3';
import Campaign from './build/CampaignFunding.json'; // This is our ABI
// In factory, we hardcoded the address. But, in here, we need the address of the particular campaign.
// It will get address as  input. We could do this in reactjs similarly
export default (address) => {

	return new web3.eth.Contract(JSON.parse(Campaign.interface), address);
};
