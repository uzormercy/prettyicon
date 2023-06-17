import PageantDetails  from "@/components/Pageants/PageantDetail";
import * as yup from "yup"
import { YupValidator } from "@/libs/YupValidator"
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { paystack } from "@/config/env"
import { usePaystackPayment } from 'react-paystack';

const PageantDetailsPage = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm({
        resolver: YupValidator(
            yup.object().shape({
            email: yup.string().email().required("Email address is mandatory"),
            vote: yup.string().required("Vote(s) is mandatory").nonNullable(),
          })),
      })

    const [toggleVoteModal, setToggleVoteModal] = useState(false)

    const [paymentData, setPaymentData] = useState({})

    const [isPaymentDetailSet, setIsPaymentDetailSet] = useState(false);
    
    const onSuccess = (reference) => {
        console.log(reference);
        setToggleVoteModal(false);
        setPaymentData({})
        setIsPaymentDetailSet(false)
        // Call the save method
      };

      const onClose = () => {
        setPaymentData({})
        console.log('closed')
        setIsPaymentDetailSet(false)
      }

    const initiatePayment =  usePaystackPayment(paymentData);

    const makePayment =  (data) => {
        const amount = (data.vote * 100) * 100
        setPaymentData({ 
                reference: (new Date()).getTime().toString(),
                email: data.email,
                amount,
                publicKey: paystack.pk 
            }) 
        setIsPaymentDetailSet(true)       
        return true;
    }

    useEffect(() => {
        if(isPaymentDetailSet){
            initiatePayment(onSuccess, onClose);
        }
    }, [isPaymentDetailSet]);

    const pageant = {
        firstname:  'Sharon',
        lastname: 'Derrick',
        title: "Staff, Operations",
        description: "Brief description of",
        pictures: [
            "/images/01.jpg",
            "/images/02.jpg",
            "/images/03.jpg",
            "/images/04.jpg"
        ]
    }

    return <>
        <PageantDetails 
            pageant={pageant} 
            register={register} 
            errors={errors} 
            handleSubmit={handleSubmit}  
            setToggleVoteModal={setToggleVoteModal} 
            toggleVoteModal={toggleVoteModal}  
            makePayment={makePayment}
            />
    </>
}

export default PageantDetailsPage