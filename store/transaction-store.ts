import { txFormType } from "@/types/types";
import { create } from "zustand";




interface TransactionState {

    txFormValues: txFormType
setTxFormValues: <K extends keyof txFormType>(
    key: K,
    value: txFormType[K]
) => void
}


export const useTransactionStore = create<TransactionState>((set, get) => ({

    txFormValues: ({
        amount: "",
        phoneNumber: "",
        note: "",
    }),

    setTxFormValues: (key, value) =>
        set((state) => ({
            txFormValues: {
                ...state.txFormValues,
                [key]: value,
            }
        }))

}))