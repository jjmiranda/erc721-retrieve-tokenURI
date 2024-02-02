import { ethers } from "ethers";


const RPC = String(process.env.RPC);
// The Contract interface
const abi = [
    "function tokenURI(uint256 _tokenId) external view returns (string)",
];

const provider = new ethers.providers.JsonRpcProvider(RPC);

// the contract interface         
const contractAddress = "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"; //BAYC contract address

// We connect to the Contract using a Provider, so we will only
// have read-only access to the Contract
const contract = new ethers.Contract(contractAddress, abi, provider);


// simple sleep function
function promiseSleep(milliseconds:number) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

(async () => {
    try {
        await promiseSleep(2.5 * 1000);

        const currentValue = await contract.tokenURI(101);
        console.log(currentValue);

    } catch (e) {
        console.error('Contract tokenURI failed: ', e);
      }
})();
