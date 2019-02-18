import web3 from './web3';

import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x56829CE3C06d5Da37ef533CFFC9c71C6c8f30B60'  // Address of factory deployment
);

export default instance;