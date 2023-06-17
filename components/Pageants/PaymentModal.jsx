import InputBox from "../InputBox";
import Button from "../Button";


const PaymentModal = ({ register, errors, handleSubmit, toggleVoteModal, setToggleVoteModal, makePayment }) => {
    return (
        <div className={"fixed z-30 h-screen w-screen p-3.5 backdrop-blur-[4px] flex"}>
            <div className="w-[600px] max-[600px]:w-full bg-white h-fit m-auto rounded-lg p-5">
                <div className="flex justify-between items-center mb-1">
                    <h5 className="font-[500] text-2xl">Vote Sarah Jakes</h5>
                    <button type="button" onClick={() => setToggleVoteModal(false)} className="bg-gray-100 h-8 w-8 rounded-full text-xl inline-flex items-center justify-center">&times;</button>
                </div>
                
                <p className="text-gray-400 text-md">Fill in your votes and email address to vote for Sarah Jakes.</p>

                <form className="my-5">
                    <div className="relative mb-4">
                        <InputBox 
                            id="vote" 
                            required={true} 
                            label="Votes" 
                            type="number" 
                            placeholder="Enter number of votes" 
                            register={register} 
                            dbName="vote" 
                            name="vote" 
                            errorMessage={errors?.vote?.message}
                            isError={!!errors?.vote}
                            />
                    </div>
                    <div className="relative mb-4">
                        <InputBox 
                            id="email" 
                            required={true} 
                            label="Email address" 
                            type="email" 
                            placeholder="Enter email address" 
                            register={register} 
                            dbName="email" 
                            name="email"  
                            errorMessage={errors?.email?.message}
                            isError={!!errors?.email} 
                            />
                    </div>

                    <div className="mt-6">
                        <Button
                            label="Vote" 
                            onClick={handleSubmit(makePayment)} 
                            className="font-semibold bg-orange-500" 
                            labelClass="text-white" 
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}


export default PaymentModal;