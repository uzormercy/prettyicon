import { Fragment } from "react"
import { useDropzone } from "react-dropzone"
import Image from "next/image"
import Text from "./Text"
import { FiUploadCloud, FiTrash2, FiFile } from "react-icons/fi"

const DragDropFileInput = ({
  selectedFiles,
  setSelectedFiles,
  files,
  setFiles,
}) => {
  const { acceptedFiles, getInputProps, getRootProps, isDragReject } =
    useDropzone({
      onDrop: (acceptedFiles) => {
        setSelectedFiles((prev) => [...prev, ...acceptedFiles])
      },
      accept: {
        "image/jpeg": [".jpeg"],
        "image/png": [".png"],
        "image/jpg": [".jpg"],
      },
    })
  const handleFileDelete = (itemToRemove) => {
    setSelectedFiles((prev) =>
      prev.filter((item) => item.name !== itemToRemove)
    )
  }
  setFiles(acceptedFiles)
  return (
    <Fragment>
      <div
        {...getRootProps({})}
        className="border border-neutral-300 rounded border-dashed cursor-pointer h-[152px] w-full flex flex-col justify-center items-center"
      >
        <input {...getInputProps()} className="" />
        <FiUploadCloud width={80} height={80} />
        <p className="text-neutral-700 text-[14px]">
          <span className="text-secondary-500">Click to upload </span> or drag
          and drop
        </p>{" "}
        <p className="text-neutral-700 text-[13px]"> PNG,JPG, PDF</p>
      </div>
      <div className="flex flex-col mt-3 overflow-y-scroll max-h-[250px]">
        {selectedFiles.map((file, index) => {
          return (
            <div
              key={index}
              className="flex border border-neutral-300 rounded justify-between items-center p-3 my-1"
            >
              <div className="flex gap-2 flex-1 items-center justify-start">
                <FiFile   width={40}  height={40} />
                <div>
                  <Text
                    textColor="text-neutral-900"
                    variant="medium"
                    className="break-words"
                  >
                    {file.name}
                  </Text>
                  <Text textColor="text-neutral-600" variant="medium">
                    {file.size} bytes
                  </Text>
                </div>
              </div>
              <div
                className="cursor-pointer"
                onClick={() => handleFileDelete(file.name)}
              >
                <FiTrash2 width={24} height={24} />
              </div>
            </div>
          )
        })}
      </div>
    </Fragment>
  )
}

export default DragDropFileInput