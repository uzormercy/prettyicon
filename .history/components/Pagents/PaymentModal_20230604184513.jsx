import { useState } from "react"
import { paystack } from "@/config/env"
// import {PaymentModal} from "components/PaystackModal"

// import "https://js.paystack.co/v1/inline.js"

const PaymentModal = () => {
  

    // const publicKey = paystack.pk
    const secretKey = paystack.sk
    const amount = 100
    const [email, setEmail] = useState("")
    const makePayment = () => {
        fetch('https://api.paystack.co/paymentrequest', {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${secretKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                amount,
                name: email
            })
        })
    //     var handler = PaystackPop.setup({ 
    //         key: publicKey, //put your public key here
    //         email: email, //put your customer's email here
    //         amount: amount, //amount the customer is supposed to pay
    //         onClose: function () {
    //             //when the user close the payment modal
    //             alert('Transaction cancelled');
    //         }
    //     });
    //     handler.openIframe(); 
    }


    return (
        <div className="fixed flex z-30 h-screen w-screen p-3.5 backdrop-blur-[2px]">
            <div className="w-[600px] max-[600px]:w-full bg-white h-fit m-auto rounded-lg p-5">
                <div className="flex justify-between items-center mb-1">
                    <h5 className="font-[500] text-2xl">Vote Sarah Jakes</h5>
                    <button className="bg-gray-100 h-8 w-8 rounded-full text-xl inline-flex items-center justify-center">&times;</button>
                </div>
                
                <p className="text-gray-400 text-md">Fill in your email address to vote for Sarah Jakes.</p>

                <form className="my-5">
                    <div className="relative mb-4">
                        <label value = {email}  onChange = {(e) => setEmail(e.target.value)} className="text-500 mb-2 block">Email Address:</label>
                        <input type="email" placeholder="Enter email address" className="block h-14 w-full border-[1px] rounded-lg focus:ring-0 px-3.5 border-gray-300" />
                    </div>
                    
                    <button type="button" onClick={makePayment} className="inline-flex items-center justify-center px-12 h-12 font-semibold bg-orange-500 text-white">
                        Vote
                    </button>
                </form>
            </div>
        </div>
    )
}


export default PaymentModal;