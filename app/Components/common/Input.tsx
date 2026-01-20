import React from "react"


interface InputProps {
    label: string
    icon?: React.ReactNode
    placeholder: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    type: string
    name: string
    value: string
}


export default function Input({ label, icon, placeholder, onChange, type, name, value }: InputProps) {
    return (
        <label htmlFor={label.toLocaleLowerCase()} className="w-full flex flex-col items-start gap-2 font-sfPro " >
            <span className="text-sm font-normal text-[#CAD5E2] " >
                {label}
            </span>

            <div className="w-full flex items-center gap-3 bg-[#0F172B80] rounded-[10px]  pl-4 border-[0.67px] border-[#314158]  " >
                <span className=" text-[#62748E] " >
                    {icon}
                </span>

                <input
                    type={type}
                    name={name}
                    id={label.toLocaleLowerCase()}
                    className=" h-full w-full py-3.5 outline-none border-0 font-normal text-base text-[#62748E] "
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                />


            </div>

            {label === "Phone Number" && <p className="text-sm font-normal text-[#62748E] " >This will be linked to your USSD wallet</p>
            }
        </label>
    )
}