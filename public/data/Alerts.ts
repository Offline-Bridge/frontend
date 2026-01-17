import { AlertDataType } from "@/types/types";

export const alerts: AlertDataType[] = [
  {
    acctNum: "0803***909",
    amount: 2500,
    balance: 12450,
    index: 1,
    time: new Date()
  },
  {
    acctNum: "0812***456",
    amount: 1800,
    balance: 10650,
    index: 2,
    time: new Date(Date.now() - 60 * 1000)
  },
  {
    acctNum: "0706***332",
    amount: 5200,
    balance: 15850,
    index: 3,
    time: new Date(Date.now() - 5 * 60 * 1000)
  }
];
