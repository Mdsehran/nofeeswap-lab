let provider;
let signer;
let userAddress;

const tokenA = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
const tokenB = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9";

const liquidityAddress = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8";

const erc20ABI = [
"function balanceOf(address) view returns (uint256)",
"function transfer(address,uint256)"
];

document.getElementById("connect").onclick = connectWallet;
document.getElementById("transfer").onclick = swapTokens;

async function connectWallet(){

provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");

const privateKey =
"0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";

signer = new ethers.Wallet(privateKey,provider);

userAddress = await signer.getAddress();

document.getElementById("wallet").innerText = userAddress;

await loadBalances();

}

async function loadBalances(){

const tokenAContract = new ethers.Contract(tokenA,erc20ABI,provider);
const tokenBContract = new ethers.Contract(tokenB,erc20ABI,provider);

const balanceA = await tokenAContract.balanceOf(userAddress);
const balanceB = await tokenBContract.balanceOf(userAddress);

document.getElementById("balanceA").innerText =
ethers.formatUnits(balanceA,18);

document.getElementById("balanceB").innerText =
ethers.formatUnits(balanceB,18);

}

async function swapTokens(){

try{

const amount = document.getElementById("amount").value;

if(!amount){
alert("Enter amount");
return;
}

const parsedAmount = ethers.parseUnits(amount,18);

const tokenAContract =
new ethers.Contract(tokenA,erc20ABI,signer);

document.getElementById("transfer").innerText="Swapping...";

/* send TokenA to liquidity wallet */
const tx =
await tokenAContract.transfer(
liquidityAddress,
parsedAmount
);

await tx.wait();

/* reload TokenA balance */
const tokenAContractRead =
new ethers.Contract(tokenA,erc20ABI,provider);

const newBalanceA =
await tokenAContractRead.balanceOf(userAddress);

document.getElementById("balanceA").innerText =
ethers.formatUnits(newBalanceA,18);

/* simulate AMM output */
const currentB =
Number(document.getElementById("balanceB").innerText);

const output = Number(amount); // 1:1 rate

const newBalanceB = currentB + output;

document.getElementById("balanceB").innerText =
newBalanceB.toFixed(1);

document.getElementById("transfer").innerText =
"Transfer TokenA → TokenB";

alert("Swap successful");

}catch(error){

console.error(error);
alert("Swap failed");

}

}