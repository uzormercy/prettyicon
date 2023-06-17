
import classnames from "classnames";
import Image from "next/image";
import { Fragment } from "react";


const buttonStyles = {
    secondary: "secondary",
    ghost: "ghost",
    borderLess: "borderLess",
    normal: "normal"
};

const sizes = {
    extraSmall: "extraSmall",
    small: "small",
    medium: "medium",
    large: "large",
    iconExtraSmall: "iconExtraSmall",
    iconSmall: "iconSmall",
    iconMedium: "iconMedium",
    iconLarge: "iconLarge",
};

const iconPositions = { left: "left", right: "right" };

const Button = ({
    icon = null,
    iconPosition = "left",
    label = "",
    onClick = () => { },
    type,
    variant = buttonStyles.secondary,
    fullWidth = false,
    className = "",
    isDisable = false,
    size = sizes.medium,
    btnClass = "",
    labelClass,
    iconClass,
    fontWeight = "font-semibold",
    children,
    href,
}) => {
    return (
        <Fragment>
          <a
        type={type}
        onClick={onClick}
        href={href}
        className={classnames(
            [className],
            `flex text-white rounded-md select-none`, `${btnClass} ${fontWeight}`,
            {
              "bg-blue-900 hover:bg-secondary-800 focus:bg-secondary-800 active:bg-secondary-800 visited:bg-secondary-800 cursor-pointer":
                variant === buttonStyles.secondary && !isDisable,
              "text-secondary-500 outline outline-1 outline-secondary-400 hover:bg-secondary-50 focus:bg-secondary-50 focus:outline-2 active:bg-secondary-200 visited:bg-secondary-200 cursor-pointer":
                variant === buttonStyles.ghost && !isDisable,
              "hover:text-secondary-800 focus:text-secondary-800 hover:bg-secondary-100 focus:bg-secondary-100 focus:outline focus:outline-secondary-800 focus:outline-2 active:bg-secondary-200 visited:bg-secondary-200 cursor-pointer text-secondary-900": variant === buttonStyles.borderLess && !isDisable,
              "pointer-events-none bg-neutral-300 text-white outline-none active:scale-100" : isDisable === true,
              "py-4 px-8 text-xl": size === sizes.large,
              "py-3 px-6 text-base": size === sizes.medium,
              "py-3 px-6 text-sm": size === sizes.small,
              "py-2 px-6 text-sm": size === sizes.extraSmall,
              "p-4": size === sizes.iconLarge,
              "p-3": size === sizes.iconMedium,
              "px-2 py-2": size === sizes.iconSmall,
              "p-2": size === sizes.iconExtraSmall,
              "w-full": fullWidth,
              "flex items-center flex-row-reverse space-x-reverse space-x-2": iconPosition == iconPositions.left,
              "flex items-center flex-row space-x-2": iconPosition == iconPositions.right,
              "justify-center": icon === null,
            }
          )}
        >
          {label && (
          <span
            className={`${labelClass} ${icon && classnames([className])}`}>
            {label}
          </span>
        )}
        {icon && (
          <Image
            src={icon}
            width={10}
            height={10}
            alt="icon"
            className={classnames([className], `${iconClass}`, {
              "large w-6": size === sizes.large,
              "iconLarge w-6": size === sizes.iconLarge,
              "medium w-6": size === sizes.medium,
              "iconMedium w-6": size === sizes.iconMedium,
              "small w-4": size === sizes.small,
              "iconSmall w-6": size === sizes.iconSmall,
              "extraSmall w-4": size === sizes.extraSmall,
              "iconExtraSmall w-4": size === sizes.iconExtraSmall,
            })}
          />
        )}
          {children}
        </a>
        </Fragment>
    )
}

export default Button;