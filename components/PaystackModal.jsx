import { React, useState } from "react";
import { PaystackPop } from "paystack/inline-js";
// import {PaymentModal} from "components/pagents/PaymentModal"

const PaystackModal = () => {
    
    const [email, setEmail] = useState("")
    const [amount, setAmount] = useState("")
    const paywithpaystack = (e) => (
        e.preventDefault()
        const paystack = new PaystackPop()
        
        paystack.newTransaction((
            key: "pk_test_5dd036a42eb732ea463d5c6e6eefaf9082f453ae",
            email,
            amount: amount * 100,
            onSuccess(transaction)(
                let message = `Payment Complete Reference $[transaction.reference]`
                alert (message)
            ),
            onClose(),{
                alert("Transaction was not completed, window closed");
              },
        ));
    )


    return (
        <div>
        


        </div>   
    )
}


export default PaystackModal;