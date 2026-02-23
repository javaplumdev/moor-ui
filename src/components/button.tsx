import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "primary",
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        background: variant === "primary" ? "#6200ea" : "#03dac6",
        color: "#fff",
        padding: "8px 16px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
};

export default Button;
