import { useState } from "react"
import { paystack } from "@/config/env"


const PaymentModal = ({ modal, toggleModal }) => {
    const [email, setEmail] = useState("")

    const secretKey = paystack.sk
    const amount = 10000
    const makePayment = () => {
        if (email.length < 1) {
            alert('Email is required')
            return
        }

        fetch('https://api.paystack.co/transaction/initialize', {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${secretKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                amount,
                name: email,
                email
            })
        })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            const link = document.createElement('a');
            link.href = res?.data?.authorization_url
            link.target = "_blank";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        })
    }


    return (
        <div className={"fixed z-30 h-screen w-screen p-3.5 backdrop-blur-[4px] flex"}>
            <div className="w-[600px] max-[600px]:w-full bg-white h-fit m-auto rounded-lg p-5">
                <div className="flex justify-between items-center mb-1">
                    <h5 className="font-[500] text-2xl">Vote Sarah Jakes</h5>
                    <button type="button" onClick={toggleModal} className="bg-gray-100 h-8 w-8 rounded-full text-xl inline-flex items-center justify-center">&times;</button>
                </div>
                
                <p className="text-gray-400 text-md">Fill in your email address to vote for Sarah Jakes.</p>

                <form className="my-5">
                    <div className="relative mb-4">
                        <label className="text-500 mb-2 block">Email Address:</label>
                        <input type="email" placeholder="Enter email address" defaultValue={email} onChange={(e) => setEmail(e.target.value)} className="block h-14 w-full border-[1px] rounded-lg focus:ring-0 px-3.5 border-gray-300" required />
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