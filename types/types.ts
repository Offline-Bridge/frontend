

export interface AlertDataType {
    index: number;
    amount: number;
    acctNum: string;
    balance: number;
    time: Date;
}



export interface AuthFormType {
    firstName: string
    lastName: string
    phoneNumber: string
    emailAddress: string
}


export interface txFormType {
    phoneNumber: string
    note?: string
    amount: string
}