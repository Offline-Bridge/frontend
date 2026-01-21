import { ArrowRight, Mail, Phone, User } from "lucide-react";
import { Button } from "../common/Button";
import Input from "../common/Input";
import React, { useState } from "react";
import { useAuthStore } from "@/store/auth-store";
import { AuthFormType } from "@/types/types";




export default function ProfileForm() {
    const { nextStep, formValues, setFormValues } = useAuthStore();




    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const { name, value } = e.target


        if (name === "phoneNumber" && !/^\+?\d*$/.test(value)) {
            return;
        }

        if (name === "phoneNumber" && formValues.phoneNumber.length >= 15) return;

        setFormValues(name as keyof AuthFormType, value)
    }


    console.log(formValues)



    return (
        <form className="w-full flex flex-col items-center gap-5 " >


            {/* First name  */}
            <Input
                label="First Name"
                placeholder="Enter your first name"
                icon={<User size={20} />}
                onChange={handleChange}
                type="text"
                name="firstName"
                value={formValues.firstName}
            />


            {/* Last name  */}
            <Input
                label="Last Name"
                placeholder="Enter your last name"
                icon={<User size={20} />}
                onChange={handleChange}
                type="text"
                name="lastName"
                value={formValues.lastName}
            />


            {/* Email  */}
            <Input
                label="Email Address"
                placeholder="your.email@example.com"
                icon={<Mail size={20} />}
                onChange={handleChange}
                type="email"
                name="emailAddress"
                value={formValues.emailAddress}
            />



            {/* Phone number  */}
            <Input
                label="Phone Number"
                placeholder="+1 (555) 000-0000"
                icon={<Phone size={20} />}
                onChange={handleChange}
                type="text"
                name="phoneNumber"
                value={formValues.phoneNumber}
            />






            <Button
                onClick={nextStep}
                type="button"
                variant="primary"
                className="rounded-[10px]! w-full! text-sm py-3 tracking-wider  " >
                Continue <ArrowRight size={17} /></Button>
        </form>
    )
}