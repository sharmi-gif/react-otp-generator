import React, { useState } from 'react'


const Generateotp = () => {
  const[otp,setotp]=useState("");
  const [userotp,setuserotp]=useState("");
function Gotp(){
   
    const otp=Math.floor(Math.random()*9000+1000);
    
    setotp(otp.toString());
   


}
const Validateotp =()=>{
  
if(otp===userotp){
  alert("Otp Verfied");
}
  else{
    alert("Invalid Otp");
  }
}

  
return (
    <div className='container' >
   <button className="Generate-btn" onClick={Gotp}> Generate Otp</button>

<h1>{otp}</h1>

 <input type="text" placeholder="Enter OTP" value={userotp}
        onChange={(e) => setuserotp(e.target.value)} />

 <button className="validate-btn" onClick={Validateotp}> Validate Otp</button>
   </div>
  );
}

export default Generateotp