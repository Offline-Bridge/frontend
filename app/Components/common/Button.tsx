
"use client";

import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary";
    children: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
    variant = "secondary",
    children,
    className = "",
    ...props
}) => {
    const baseStyles =
        "px-6 py-2 rounded-[25px] font-medium flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer ";

    const variants = {
        primary:
            "bg-[linear-gradient(180deg,#155DFC_0%,#827AF2_135%)] text-white hover:brightness-120 shadow-[0_4px_7px_0_#2B25AB40]",
        secondary:
            "bg-[#0000000D] text-white hover:bg-gray-700 border border-gray-700 ",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};
