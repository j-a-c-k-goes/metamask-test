// METAMASK

// ----------------------------------------/
// Detect MetaMask Eth Provider
// ----------------------------------------/
// import {detectEthereumProvider from "./@metamask/detect-provider";
// const provider = await detectEthereumProvider();
// if (provider){
// 	console.log("MetaMask is installed!");
// 	startApp(provider);
// } else {
// 	console.log("Please install MetaMask");
// }
// function startApp(provider){
// 	if(provider !== window.ethereum){
// 		console.error("Are there multiple wallets installed?");
// 	}
// }

// ----------------------------------------/
// Connect To MetaMask
// ----------------------------------------/
const ethereumButton = document.querySelector("#eth-btn");
const showAccount = document.querySelector(".showAccount");
ethereumButton.addEventListener("click", () => { 
	console.log("ok.");
	getAccount(); 
});
async function getAccount() {
  const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  const account = accounts[0];
  showAccount.innerHTML = account;
}