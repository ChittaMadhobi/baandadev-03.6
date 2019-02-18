pragma solidity ^0.4.25;

contract CampaignFactory {
    
    struct CFCampaign {
        string mgrName; 
        string campaignName;
        address createdCampaign;
        address mgrAddress;
    }
    mapping (address => CFCampaign) cfcampaigns; 
    address[] public cfcampaignAccts;
    
    function createCampaign(uint minimum, uint _mgrBaandaId, uint _campBaandaId, string memory _mgrName, string memory _campName) public {
        address newCampaign = new  CampaignFunding(msg.sender, minimum, _mgrBaandaId, _campBaandaId);
        
        CFCampaign storage camp = cfcampaigns[newCampaign];
        camp.mgrName = _mgrName;
        camp.campaignName = _campName;
        camp.createdCampaign = newCampaign;
        camp.mgrAddress = msg.sender;
        cfcampaignAccts.push(newCampaign) - 1;
    }
    
    function getCreatedCampList() public view returns (address[] memory) {
        return cfcampaignAccts;
    } 
    
    function getNoOfCampaings() public view returns (uint) {
        return cfcampaignAccts.length;
    }
    function getCreatedCampDetails(address index) public view returns (string memory, string memory, address, address) {
        return (cfcampaigns[index].mgrName, cfcampaigns[index].campaignName, cfcampaigns[index].createdCampaign, cfcampaigns[index].mgrAddress);
    } 
}


contract CampaignFunding {
    
    // Campaign level variables: camp to denote campaign in variable naming
    address public  campManager;        // For human readibility. 
    uint    public  mgrBaandaId;        // Represents this instance in non-blockchain side (webapp)
    uint    public  campBaandaId;       // BaandaId of the campaign 
    uint    public  noOfContributors;   // Total number of Contributors
    uint    public  minAmt;             // Minimum amout in dollars
    // Financial chests/coffers for various financial states
    uint    public fiatCoffer;         // For holding total dollar conribution
    uint    public cryptoCoffer;       // For holding total eth (balance gives eth at a time) 
    uint    public availableFiatCoffer;         // For holding total dollar conribution
    uint    public availableCryptoCoffer;       // For holding total eth (balance gives eth at a time) 
    uint    public coffer;              // Total dollar value of the campaign
    uint    public fiatCofferOnHold;   // Value of Fiat expense raised and hence not available
    uint    public cryptoCofferOnHold; // Value of Crypto expense raised
    mapping(address => bool) public approvers;  // Quick check place for approver
    // ---
    struct Request {
        string  desc;
        uint    byDay;
        uint    yesCnt;
        uint    noCnt;
        // uint    yesCntValue;
        // uint    noCntValue;
        address recipientC;
        uint    recipientF;
        uint    valueInC;  // In ether
        uint    valueInF;  // In dollar
        uint    status;
        uint    id;
    }
    // mapping (address => Request) requests;
    mapping (uint => Request) requests;
    // address[] public requestAccts;
    uint[] public requestAccts;
    
    // Contributor structure ==============================================
    struct Contributor {
        uint baandaId;          // BaandaId of the contributor
        uint dollarAmt;         // DollarAmt contributed 
        uint ethAmt;            // Ethereum amount contributed
        uint coffer;
    }                           // Address of this is the  eth contributor address
    mapping (address => Contributor) contributors;
    address[] public contributorAccts;
    
    // CONSTRUCTOR=========================================================
    constructor(address creator,  uint _minAmt, uint _mgrBaandaId, uint _campBaandaId) public {
        campManager = creator;          // This should be in place when generated via a factory
        minAmt = _minAmt;               // In dollar
        mgrBaandaId = _mgrBaandaId;     // The baandaId which holds Campaign Points
        campBaandaId = _campBaandaId;   // This is the baandaid of the campaign account.
    }

    function contributeCrypto(uint _baandaid, uint dollarValue) public payable {    
        Contributor storage con = contributors[msg.sender];
        con.baandaId = _baandaid;       // Enter BaandaId of the contributor
        con.dollarAmt = 0;              // Enter the dollar amount contributed
        con.ethAmt = msg.value;         // Enter there amount contributed 
        con.coffer = con.coffer + dollarValue;
        contributorAccts.push(msg.sender) -1;
        // Update campaign level values. 
        cryptoCoffer = cryptoCoffer + msg.value;// Update cryptoCoffer with eth contribution
        availableCryptoCoffer = availableCryptoCoffer + msg.value;
        coffer = coffer + dollarValue;       // Convert eth contribution to dollar in frontend and send. 
        noOfContributors++;                 // Update number of Contributor
        approvers[msg.sender] = true;       // Set the contriutor to be an approver
    }
    
    modifier restricted() {
        require(msg.sender == campManager, "Not authorized.");
        _;
    }
    
    function contributeFiat(uint _baandaid, uint dollarValue) public {    
        Contributor storage contributor = contributors[msg.sender];
        contributor.baandaId = _baandaid;       // Enter BaandaId of the contributor
        contributor.dollarAmt = dollarValue;              // Enter the dollar amount contributed
        contributor.ethAmt = 0;                 // Enter there amount contributed 
        contributor.coffer = contributor.coffer + dollarValue;
        contributorAccts.push(msg.sender) -1;
        // Update campaign level values. 
        fiatCoffer = fiatCoffer + dollarValue;  // Update cryptoCoffer with eth contribution
        availableFiatCoffer = availableFiatCoffer + dollarValue; // This fund is available to spend
        coffer = coffer + dollarValue;          // Convert eth contribution to dollar in frontend and send. 
        noOfContributors++;     // Update number of Contributor
        approvers[msg.sender] = true;           // Set the contriutor to be an approver
    }
    

    // --- Contributor ... will not be needed by DApp but for testing purposes
    function getContributors() public view returns(address[]) {
        return contributorAccts;
    }
    function getContributor() public view returns (uint, uint, uint) {    
        return (contributors[msg.sender].baandaId, contributors[msg.sender].dollarAmt, contributors[msg.sender].ethAmt);
    } 
    function getContributorCoffer() private view returns (uint) {
        return contributors[msg.sender].coffer;
    } 
    function getBalance() public view returns (uint, address) {
        return (address(this).balance, address(this));
    }
    
    
    function createRequest (string _desc, uint _byDay, address _rC, uint _rF, uint _vC, uint _vF, uint _id) public restricted {
        
        // bool errmsg = false;   
        // if ((availableFiatCoffer - fiatCofferOnHold) <= _vF 
        //         || (availableCryptoCoffer - cryptoCofferOnHold ) <= _vC) {
        //     errmsg = true;
        // }
        // require(!errmsg, "Insufficient Funds to raise this request.");
        // Request storage req = requests[msg.sender]; 
        Request storage req = requests[_id]; 
        
        req.desc = _desc;
        req.byDay = _byDay;
        req.yesCnt = 0;
        req.noCnt = 0;
        req.recipientC = _rC;
        req.recipientF = _rF;
        req.valueInC = _vC;
        req.valueInF = _vF;
        req.id = _id;
        req.status = 0;
        
        // requestAccts.push(msg.sender) -1;    // msg.sender must be campign mgr. ... who creates the req.
        requestAccts.push(_id) - 1;    // msg.sender must be campign mgr. ... who creates the req.
        
        fiatCofferOnHold = fiatCofferOnHold + _vF;
        cryptoCofferOnHold = cryptoCofferOnHold + _vC;
        availableFiatCoffer = availableFiatCoffer - cryptoCofferOnHold;
        availableCryptoCoffer = availableCryptoCoffer - availableCryptoCoffer;
    }
    
    // function getReqAddrs() public view returns(address[]) {
    function getReqAddrs() public view returns(uint[]) {
        return requestAccts;
    }
    
    // function getRequest(address ins) public view returns(string, uint, address, uint, uint, uint) {
    function getRequest(uint ins) public view returns(string, uint, address, uint, uint, uint, uint) {    
        return (
            requests[ins].desc,
            requests[ins].byDay,
            requests[ins].recipientC,
            requests[ins].recipientF,
            requests[ins].valueInC,
            requests[ins].valueInF,
            requests[ins].status
        );
    }
    
    // function getReqVotes(address ins) public view returns(uint, uint) {
    function getReqVotes(uint ins) public view returns(uint, uint) {
        return (
            requests[ins].yesCnt,
            requests[ins].noCnt
            // requests[ins].yesCntValue,
            // requests[ins].noCntValue
        );
    }
    
    function getCampaignSummary() public view returns (address, uint, uint, uint, uint, uint, uint, uint, uint, uint, uint, uint, uint, uint) {
        
        return (campManager, mgrBaandaId, campBaandaId, noOfContributors, minAmt, fiatCoffer, cryptoCoffer, 
        availableFiatCoffer, availableCryptoCoffer, coffer, fiatCofferOnHold, cryptoCofferOnHold, address(this).balance, requestAccts.length);
    }
    
}