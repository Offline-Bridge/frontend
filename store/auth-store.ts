import { AuthFormType } from "@/types/types";
import { create } from "zustand"



interface AuthState {
    currentStep: number;
    nextStep: () => void
    prevStep: (currentStep: number) => void


    formValues: AuthFormType,
    setFormValues: <K extends keyof AuthFormType>(
        key: K,
        value: AuthFormType[K]
    ) => void;
}

export const useAuthStore = create<AuthState>((set, get) => ({
    // handling the current step of the form
    currentStep: 1,
    nextStep: () =>
        set((state) => ({ currentStep: state.currentStep + 1 })),
    prevStep: () =>
        set((state) => ({ currentStep: state.currentStep - 1 })),



    // handling form data
    formValues: ({
        firstName: "",
        lastName: "",
        emailAddress: "",
        phoneNumber: "",
    }),


    setFormValues: (key, value) =>
        set((state) => ({
            formValues: {
                ...state.formValues,
                [key]: value,
            },
        })),




}));