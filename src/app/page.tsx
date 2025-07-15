// 'use client'
// import React, { use, useState } from 'react'
// import {ethers} from 'ethers'
// import { contractFunction } from './lib/contract'
// const page = () => {
//   const [userName , setUserName] = useState<string>();
//   const [Usersymbol , setUserSymbol] = useState<string>();
//   const [Userbalance,setUserBalance] = useState<number>()
//   const [show,setShow] = useState<boolean | null>(null);

//   const callSmart = async()=>{
//     if(!window.ethereum){
//       alert("plz install the metamask chrome extension")

//     }
//     try{
//       const {contract,name,symbols,balance} = await contractFunction();

//         setUserName(name);
//         setUserBalance(balance)
//         setUserSymbol(symbols)

//         console.log(userName)
//         console.log(Userbalance)
//         console.log(symbols)
//         setShow(true)

//     }catch(err:any){
//       alert('error check console')
//       console.log(err.message)
//       setShow(false)
//     }
//   }
//   return (
//    <main>
//     <div>
//       <h1>Welcome to smartContract</h1>
//         <button onClick={callSmart}>Click to View the Acc balance</button>
//         {show === true && (
//           <>
//         <strong>UserName</strong> <p>{userName}</p>
//         <strong>UserBalance</strong> <p>{Userbalance}</p>
//         <strong>CurrenciesSymbo</strong> <p>{Usersymbol}</p>
//          </>
//         )}
//          { show === false && (
//           <p>Error on your smartContract connection</p>
//         )
//       }
       
//     </div>
//    </main>
//   )
// }

// export default page







// 'use client'
// import React, { use, useState } from 'react'
// import { contractFunction, transfer } from './lib/contract'
// import './page.css'

// const Page = () => {
//   const [userName, setUserName] = useState<string>()
//   const [userSymbol, setUserSymbol] = useState<string>()
//   const [userBalance, setUserBalance] = useState<number>()
//   const [userAddress , setUserAddress] = useState<string>()
//   const [show, setShow] = useState<boolean | null>(null)
//   const [amount,setAmount] = useState<number>()
//   const [transferToken,setTransferToken] = useState<boolean>();

//   const callSmart = async () => {
//     if (!window.ethereum) {
//       alert("Please install the MetaMask Chrome extension")
//       return;
//     }

//     try {
//       const { contract, name, symbol, rawBalance, userAddress } = await contractFunction()

//       setUserName(name)
//       setUserSymbol(symbol)
//       setUserBalance(rawBalance)
//       setUserAddress(userAddress)
//       setShow(true)

//       console.log("Token Name:", name)
//       console.log("Symbol:", symbol)
//       console.log("Balance:", rawBalance)

//     } catch (err: any) {
//       console.log("Error:", err.message)
//       alert("Error connecting to smart contract, check console")
//       setShow(false)
//     }
//   }

// const transferAmount = async()=>{
//   const {message} = await transfer(amount)
//   alert(message)
//   console.log(message)
// }

//   return (
//     <main>
//       <div className='container'>
//         <h1>Welcome to Smart Contract</h1>
//         <button onClick={callSmart}>Click to View the Account Balance</button>

//         {show === true && (
//           <>
//            <br/> <strong>Token Name:</strong> <p>{userName}</p>
//             <strong>Token Balance:</strong> <p>{userBalance}</p>
//             <strong>Token Symbol:</strong> <p>{userSymbol}</p>
            
//             <button onClick={(e) => setTransferToken(true)}>Click to Tranfer the Token</button>

           

//           </>
         
//         )}

//         {show === false && (
//           <p style={{ color: 'red' }}>Error connecting to the smart contract</p>
//         )}

//         {
//           transferToken === true && ( 
          
//   <>      
//   <br/>
//           <input 
//             type='number'
//             placeholder='Enter the amount'
//             value={amount ?? ''}
//             onChange={(e) => setAmount(Number(e.target.value))}
//             required
//           />
//           <button onClick={transferAmount} className='btn'>
//             Click to Transfer
//           </button>
        
// </>
//           )}
//       </div>
//     </main>
//   )
// }

// export default Page


'use client'
import React, { use, useState } from 'react'
import { contractFunction, transferBalance } from './lib/contract'
import './page.css'

const Page = () => {
  const [userName, setUserName] = useState<string>()
  const [userSymbol, setUserSymbol] = useState<string>()
  const [userBalance, setUserBalance] = useState<string>()
  const [userAddress , setUserAddress] = useState<string>()
  const [show, setShow] = useState<boolean | null>(null)
  const [amount,setAmount] = useState<number>()
  const [transferToken,setTransferToken] = useState<boolean>();

  const callSmart = async () => {
    if (!window.ethereum) {
      alert("Please install the MetaMask Chrome extension")
      return;
    }

    try {
      const { contract, name, symbol, decimal, userAddress } = await contractFunction()

      setUserName(name)
      setUserSymbol(symbol)
      setUserBalance(decimal)
      setUserAddress(userAddress)
      setShow(true)

      console.log("Token Name:", name)
      console.log("Symbol:", symbol)
      console.log("Balance:", decimal)

    } catch (err: any) {
      console.log("Error:", err.message)
      alert("Error connecting to smart contract, check console")
      setShow(false)
    }
  }

const transferAmount = async()=>{
  const {message} = await transferBalance(amount)
  alert(message)
  console.log(message)
}

  return (
    <main>
      <div className='container'>
        <h1>Welcome to Smart Contract</h1>
        <button onClick={callSmart}>Click to View the Account Balance</button>

        {show === true && (
          <>
           <br/> <strong>Token Name:</strong> <p>{userName}</p>
            <strong>Token Balance:</strong> <p>{userBalance}</p>
            <strong>Token Symbol:</strong> <p>{userSymbol}</p>
            
            <button onClick={(e) => setTransferToken(true)}>Click to Tranfer the Token</button>

           

          </>
         
        )}

        {show === false && (
          <p style={{ color: 'red' }}>Error connecting to the smart contract</p>
        )}

        {
          transferToken === true && ( 
          
  <>      
  <br/>
          <input 
            type='text'
            placeholder='Enter the amount'
            value={amount ?? ''}
            onChange={(e) => setAmount(Number(e.target.value))}
            required
          />
          <button onClick={transferAmount} className='btn'>
            Click to Transfer
          </button>
            <button onClick={(e)=> {setShow(null),setTransferToken(false),
            setAmount(0)
            }} className='btn'>Back</button>
        
</>
          )}
      </div>
    </main>
  )
}

export default Page