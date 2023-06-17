import Button from "@/components/Button";
import DragDropFileInput from "@/components/DragAndDropFile";
import Dropdown from "@/components/Dropdown";
import InputBox from "@/components/InputBox";
import Label from "@/components/Label";
import TextArea from "@/components/TextArea";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { YupValidator } from "@/libs/YupValidator"
import * as yup from 'yup';

const CreatePageant  = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        setValue,
        getValues
      } = useForm({
        resolver: YupValidator(
            yup.object().shape({
                firstname: yup.string().required("Firstname is mandatory"),
                lastname: yup.string().required("Lastname is mandatory"),
                email: yup.string().email().required("Email address is mandatory"),
                phoneNumber: yup.string().required("Phone number is mandatory"),
                // gender: yup.string().required('gender is mandatory'),
                title: yup.string().required("Title is mandatory"),
                description: yup.string().required("Description is mandatory"),
          })),
      })

    const gender = [
        {
            label: "Female",
            value: "Female",
        },
        {
            label: "Male",
            value: "Male",
        }
    ]

    const [files, setFiles] = useState([]);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [selectedGender, setSelectedGender] = useState("");
    const [featuredImage, setFeaturedImage] = useState("");


    const addPageant = (data) => {
        console.log(data, featuredImage, selectedFiles)
    }


    return (
        <>
            <div className="">
                <h4 className="font-bold text-2xl">Create Pageant</h4>
            </div>
            <div className="mt-4 w-2/4">
                <div className="mb-3 grid grid-cols-2 gap-2 items-center justify-start">
                   <div className="">
                        <InputBox dbName="firstname" id="firstname" name="firstname" errorMessage={errors?.firstname?.message}  isError={!!errors?.firstname} register={register} type="text" label="Firstname" />
                   </div>
                   <div className="">
                        <InputBox  dbName="lastname" id="lastname" name="lastname" errorMessage={errors?.lastname?.message}  isError={!!errors?.lastname} register={register} type="text" label="Lastname" />
                   </div>
                </div>
                    <div className="mb-3">
                        <InputBox  dbName="email" id="email" name="email" errorMessage={errors?.email?.message}  isError={!!errors?.email} register={register} type="email" label="Email" />
                   </div>
                <div className="mb-3 grid grid-cols-2 gap-2 items-center justify-start">
                   <div className="">
                        <Label className="mb-2">Gender</Label>
                       <Dropdown options={gender} value={selectedGender} dbName="gender" placeholder="Select gender" register={register} setValue={setValue} onChange={setSelectedGender} errorMessage={errors?.gender?.message}
                        isError={!!errors?.gender}  />
                   </div>
                   <div className="">
                        <InputBox  dbName="phoneNumber" id="phoneNumber" name="phoneNumber" errorMessage={errors?.phoneNumber?.message}  isError={!!errors?.phoneNumber} register={register} type="text"  label="Phone number" />
                   </div>
                </div>
                <div className="mb-3">
                        <InputBox   dbName="title" id="title" name="title" errorMessage={errors?.title?.message}  isError={!!errors?.title} register={register} type="text" label="Title" />
                   </div>
                <div className="mb-3">
                    <Label className="mb-2">Description</Label>
                    <TextArea  dbName="description" id="description" name="description" errorMessage={errors?.description?.message}  isError={!!errors?.description} register={register}></TextArea>
                </div>
                <div className="mb-3">
                    <Label className="mb-2">Pageant Featured Pictures</Label>
                    <label htmlFor="cover" className="h-10 block border rounded px-3 py-1 cursor-pointer">
                        <input type="file"  className="h-10" id="cover" onChange={(e) => setFeaturedImage(e.target.files[0])}  />
                    </label>
                </div>
                <div className="mb-3">
                    <Label className="mb-2">Pageant Pictures</Label>
                    <DragDropFileInput files={files} setFiles={setFiles} selectedFiles={selectedFiles} setSelectedFiles={setSelectedFiles} />
                </div>

                <div className="mb-3">
                    <Button label="Add Pageant" onClick={handleSubmit(addPageant)} />
                </div>
            </div>
        </>
    );
}


export default CreatePageant;