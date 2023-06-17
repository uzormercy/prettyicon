import Image from "next/image"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import PaymentModal from "./PaymentModal"


const PageantDetails = ({ pageant, register, errors, setToggleVoteModal, handleSubmit, toggleVoteModal, makePayment  }) => {

    return (<div className="relative">
        {toggleVoteModal && <PaymentModal makePayment={makePayment} toggleVoteModal={toggleVoteModal} setToggleVoteModal={setToggleVoteModal}  register={register} errors={errors} handleSubmit={handleSubmit} />}
        <div className="w-screen min-h-screen p-4 pageant-details-container">
            <div className="w-full h-full relative top-0 left-0 z-10">
                <div className="container mx-auto grid grid-cols-12 gap-5">
                    <div className="col-span-5 max-md:col-span-full">
                        <div className="w-[384px] h-[512px] relative">
                        <Carousel autoPlay={true} showStatus={false} swipeable={true} showThumbs={false} infiniteLoop={true} emulateTouch={true}>
                            {pageant.pictures.map((img) =>(
                                <div key={img} className="w-[384px] h-[512px] relative">
                                    <Image  
                                    src={img} 
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        position: "absolute",
                                        objectFit: "cover",
                                    }} 
                                    fill={true} 
                                    alt={pageant.firstname}
                                    className="pageant-image-2"
                                    loading="lazy" 
                                    />  
                                </div>)
                            )}
                        </Carousel>

                        </div>
                    </div>
                    <div className="col-span-7 max-md:col-span-full max-md:p-0 p-8">
                        <div className="pageant-detail-content-right">
                            <div>
                                <h4 className="sec-title py-4" style={{color: '#ffffff'}}>{pageant.firstname} {pageant.lastname}</h4>
                                <span className="text-slate-700 dark:text-slate-700 pb-3 block" style={{color: '#000000'}}>{pageant.title}</span>
                                <p className="text-white">{pageant.description}</p>
                            </div>
                            <div className="py-8 max-md:fixed max-md:bottom-0 max-md:left-0 max-md:px-[12px] max-md:w-full max-md:backdrop-blur-[2px]">
                                <button type="button" onClick={() => setToggleVoteModal(true)} className="h-14 px-28 font-semibold max-md:w-full bg-orange-500 text-white">
                                    Vote For {pageant.firstname} {pageant.lastname}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default PageantDetails