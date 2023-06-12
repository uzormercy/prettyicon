import React from "react";

const Text = ({
    variant = "body",
    fontSize = "",
    fontWeight = "font-normal",
    children,
    className = '',
    textColor = 'text-neutral-500',
    onClick,
}) => {
    const TextType = {
        body: "body",
        bodySmall: "bodySmall",
        caption: "caption",
    };

    const TextStyle = {
        body: "text-base",
        bodySmall: "text-sm",
        caption: "text-xs",
    };
    return (
        <p
            variant={TextType[variant]}
            className={`${fontSize || TextStyle[variant]} ${fontWeight} ${className} ${textColor}`}
            onClick={onClick}>
            {children}
        </p>
    );
};

export default Text;
