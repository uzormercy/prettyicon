import { Fragment, useState } from "react"
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri"

const InputBox = ({
  label,
  id,
  name,
  placeholder,
  type,
  className,
  isDisabled = false,
  required = false,
  register,
  dbName,
  errorMessage,
  isError = false,
  ...properties
}) => {
  const inputType = ["text", "password", "email", "date", "number"]
  const [showPassword, setShowPassword] = useState(false)
  const errorClass =
    "text-red-600 pl-0.5 text-sm pt-2 font-normal leading-[21px]"
  const handleInputType = inputType.includes(type)
    ? type !== "password"
      ? type
      : !showPassword
      ? "password"
      : "text"
    : "text"
  return (
    <Fragment>
      <div className="flex flex-col relative">
        {label && (
          <label htmlFor={id} className="mb-2">
            {label}
          </label>
        )}
        <input
          type={handleInputType}
          autoComplete="off"
          required={required}
          className={``}
          disabled={isDisabled}
          placeholder={placeholder}
          name={name}
          {...(register && { ...register(dbName) })}
          id={id}
          {...{
            className: `
            rounded-md bg-transparent h-10  w-full text-neutral-900 placeholder-neutral-400 border border-neutral-300 px-3 focus:text-neutral-900 focus:outline-none focus:border-secondary-500 ${className}
            ${
              isError
                ? "border-error-600 hover:border-error-600 focus:border-error-600 text-neutral-500"
                : "border-neutral-300 hover:border-neutral-500 focus:border-primary-900 active:border-neutral-300"
            }
            
            `,
            ...properties,
          }}
        />
        {type === "password" && (
          <span
            className="absolute cursor-pointer top-[58%] right-[4%]"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {!showPassword ? <RiEyeCloseLine /> : <RiEyeLine />}
          </span>
        )}
      </div>
      {isError && (
        <span className={`${errorClass} select-none`}> {errorMessage} </span>
      )}
    </Fragment>
  )
}


export default InputBox