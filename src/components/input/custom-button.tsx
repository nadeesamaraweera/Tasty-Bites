import React from "react";

interface ButtonProps {
    borderColor: string;
    bgColor: string;
    hoverColor: string;
    textColor: string;
    textHoverColor: string;
    text: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
class CustomButton extends React.Component<ButtonProps, any> {
    render() {
        const { borderColor, bgColor, hoverColor, textColor, textHoverColor, text, onClick } = this.props;

        const buttonStyle = {
            border: `1px solid ${borderColor}`,
            backgroundColor: bgColor,
            color: textColor,
            padding: '3px 15px',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease, color 0.3s ease',
        };

        return (
            <button
                type="button"  // Set the type to "button" to prevent form submission
                className={'text-[18px]'}
                style={buttonStyle}
                onClick={onClick}
                onMouseOver={(e) => { e.currentTarget.style.backgroundColor = hoverColor, e.currentTarget.style.color = textHoverColor }}
                onMouseOut={(e) => { e.currentTarget.style.backgroundColor = bgColor, e.currentTarget.style.color = textColor }}
            >
                {text}
            </button>
        );
    }
}
export default CustomButton;
