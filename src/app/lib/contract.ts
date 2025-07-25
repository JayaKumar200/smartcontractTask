import { ethers } from 'ethers';
import { contractABI } from '../constant/abi';
declare global {
  interface Window {
    ethereum?: any;
  }
}

export const contractFunction = async () => {
  if (!window.ethereum) throw new Error("Please install MetaMask!");

  const contractAddress = await process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;
  console.log(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS)
  if (!contractAddress) throw new Error("Contract address is missing!");

  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  const userAddress = await signer.getAddress();
   console.log("signer:", signer)
      console.log("userAddress:", userAddress)
  const contract = new ethers.Contract(contractAddress, contractABI, signer);

  const name = await contract.name();
  const symbol = await contract.symbol();
  const rawBalance = await contract.balanceOf(userAddress);// //token balance or give the native token 

  console.log('userBalance',rawBalance)

  const decimal = ethers.formatUnits(rawBalance,18)

  console.log("token balance:",decimal)

  return {
    contract,
    name,
    symbol,
    decimal,
    userAddress
  };
};




export const transferBalance = async (amount: any) => {
  if (!window.ethereum) throw new Error("Please install MetaMask!");

  var contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;
  const to = process.env.NEXT_PUBLIC_TO;
  

  if (!contractAddress || !to) throw new Error("Environment variables missing!");



  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  const address = await signer.getAddress();

  const contract = new ethers.Contract(contractAddress, contractABI,signer);
  const balance = await contract.balanceOf(address);

  if (!amount ) {
    throw new Error("Invalid amount to transfer.");
  }

  const  parsedAmount = ethers.parseUnits(amount.toString(), 18);
  


  if (balance >= parsedAmount) {
    const tx = await contract.transfer(to,parsedAmount);
    await tx.wait();
    return {
      contract,
      message: "Transfer successfully completed!",
      status: true
    };
  } else {
    return {
      contract,
      message: "Insufficient balance. Transfer rejected!",
      status: false
    };
  }
};
 
