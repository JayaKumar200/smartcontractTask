
export const contractABI = [
  {
     name: "name",
     inputs: [], outputs: 
     [{ type: "string" }],
      stateMutability: "view", 
      type: "function" 
    },
  {
     name: "symbol", 
    inputs: [],
     outputs: [{ type: "string" }],
      stateMutability: "view",
       type: "function"
       },
  { 
    name: "balanceOf",
     inputs: [{ type: "address" }],
      outputs: [{ type: "uint256" }],
       stateMutability: "view", 
       type: "function"
       },
  {
  name: "transfer",
  type: "function",
  stateMutability: "nonpayable",
  inputs: [
    { name: "to", type: "address" },
    { name: "amount", type: "uint256" }
  ],
  outputs: [{ name: "", type: "bool" }]
}

];

