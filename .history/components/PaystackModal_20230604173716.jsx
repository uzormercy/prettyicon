import { React, useState } from "react";
import { PaystackPop} from "paystack/inline-js";

const PaystackModal = () => {
    
    const [email, setEmail] = useState("")
    const [amount, setAmount] = useState("")
    const paywithpaystack = (e) => (
        e.preventDefault()
        const paystack = new PaystackPop()
        paystack.newTransaction((
            key:"",


        ))
    )


    return (
        <div>

        </div>   
    )
}


export default PaystackModal;