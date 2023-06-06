import Image from "next/image"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import PaymentModal from "./PaymentModal"
import { useState } from "react"


const PagentDetails = ({image}) => {

    const [modal, setModal] = useState(false)
    const toggleModal = () => {
        setModal(!modal)
    }

    const images = [
        "/images/01.jpg",
        "/images/02.jpg",
        "/images/03.jpg",
        "/images/04.jpg"
    ]
    return <div className="relative">
        {modal && <PaymentModal toggleModal={toggleModal} />}
        <div className="w-screen min-h-screen p-4 pagent-details-container">
            <div className="w-full h-full relative top-0 left-0 z-10">
                <div className="container mx-auto grid grid-cols-12 gap-5">
                    <div className="col-span-5 max-md:col-span-full">
                        <Carousel autoPlay={true} showStatus={false} swipeable={true} infiniteLoop={true} emulateTouch={true} >
                            {images.map((img) =>(
                                <div key={img}>
                                    <Image  src={img}  width="384" height="512" alt="" className="pagent-image-2" loading="lazy" />  
                                </div>)
                            )}
                        </Carousel>
                    </div>
                    <div className="col-span-7 max-md:col-span-full max-md:p-0 p-8">
                        <div className="pagent-detail-content-right">
                            <div>
                                <h4 className="sec-title py-4" style={{color: '#ffffff'}}>Sarah Jakes</h4>
                                <span className="text-slate-700 dark:text-slate-700 pb-3 block" style={{color: '#000000'}}>Staff Engineer, Dubai</span>
                                <p className="text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates quasi ab, vel eveniet magnam reprehenderit ea? Aliquam in dolorem mollitia nostrum numquam rerum, aspernatur sequi totam tenetur quisquam placeat neque dicta inventore incidunt fuga natus enim officia repudiandae maxime pariatur at quos ipsa aliquid consequatur! Totam, praesentium! Eligendi, qui molestias.</p>
                            </div>
                            <div className="py-8 max-md:fixed max-md:bottom-0 max-md:left-0 max-md:px-[12px] max-md:w-full max-md:backdrop-blur-[2px]">
                                {/* <PaystackButton {...componentProps} /> */}
                                <button type="button" onClick={toggleModal} className="h-14 px-28 font-semibold max-md:w-full bg-orange-500 text-white">
                                    Vote
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
}

export default PagentDetails