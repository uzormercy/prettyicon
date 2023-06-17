import PropTypes from "prop-types"
const TextArea = ({
  variant = "default",
  id = "",
  name,
  placeholder,
  padding = "p-4",
  bg = "bg-lightGrey disable:bg-neutral-100",
  height = "h-[120px]",
  fontSize = "",
  fontColor = "placeholder:text-neutral-600 text-neutral-900",
  border = "border",
  borderColor = "border-neutral-400 hover:border-neutral-500 focus:border-secondary-500 visited:border-neutral-400 disable:border-neutral-300",
  borderRadius = "rounded",
  className = "",
  disabled,
  isError = false,
  errorClass = "text-error-100 pl-0.5 text-sm pt-2 font-normal",
  errorMessage = "",
  register = () => {},
  onChangeValue = () => {},
  dbName,
  ...property
}) => {
  const textAreaField = register(id)

  const textareaSize = {
    small: "text-xs",
    default: "text-sm",
    large: "text-base",
  }

  return (
    <div className="w-full mb-6">
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        className={`w-full outline-none resize-none cursor-pointer disable:pointer-events-none ${
          textareaSize[variant]
        } ${bg} ${height} ${padding} ${border} ${borderRadius} ${fontSize} ${fontColor} ${className} ${
          isError ? "border-error-100" : `${borderColor}`
        } `}
        {...textAreaField}
        {...property}
        {...(register && { ...register(dbName) })}
        onChange={(e) => {
          if (textAreaField) {
            textAreaField.onChange(e)
          }
          onChangeValue(e)
        }}
      ></textarea>
      {isError ?? (
        <span className={`${errorClass} select-none`}> {errorMessage} </span>
      )}
    </div>
  )
}

export default TextArea