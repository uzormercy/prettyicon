import { React, useState } from "react";
import { PaystackPop } from "paystack/inline-js";
import {PaymentModal} from "components/pagents/PaymentModal"

const PaystackModal = () => {
    
    const [email, setEmail] = useState("")
    const [amount, setAmount] = useState("")
    const paywithpaystack = (e) => (
        e.preventDefault()
        const paystack = new PaystackPop()
        paystack.newTransaction((
            key: "",
            email: document.getElementById('email-address').value,
            amount: document.getElementById('amount').value * 100,
        ))
    )


    return (
        <div>

        </div>   
    )
}


export default PaystackModal;