"use client";

import { ArrowUpRight, DollarSign, Phone, Wallet } from "lucide-react";
import { Button } from "../common/Button";
import Input from "../common/Input";
import { useTransactionStore } from "@/store/transaction-store";
import { txFormType } from "@/types/types";
import { useRouter } from "next/navigation";

export default function SendMoneyModal() {
  const { setTxFormValues, txFormValues } = useTransactionStore();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Phone number guard
    if (name === "phoneNumber") {
      if (!/^\+?\d*$/.test(value)) return;
      if (value.length > 15) return;
      setTxFormValues("phoneNumber", value);
      return;
    }

    //  Amount guard
    if (name === "amount") {
      // Allow empty input (so user can delete)
      if (value === "") {
        setTxFormValues("amount", "");
        return;
      }

      // Allow numbers with up to 2 decimal places
      if (!/^\d+(\.\d{0,2})?$/.test(value)) return;

      const numericValue = Number(value);

      // Prevent negative values
      if (numericValue < 0) return;

      setTxFormValues("amount", value);
      return;
    }

    setTxFormValues(name as keyof txFormType, value);
  };

  console.log(txFormValues);

  return (
    <div
      className="fixed inset-0 w-full h-screen bg-black/25 backdrop-blur-[2px] flex items-start md:items-center justify-center px-[4%] py-10
"
      onClick={() => router.back()}
    >
      <form
        action=""
        className="w-full max-w-135.25 flex flex-col items-center justify-center px-7 py-8  gap-6
bg-linear-to-br from-[#020618] via-[#0F172B] to-[#162456]  "
      >
        <div className="w-fit flex flex-col items-center gap-5 ">
          <div className=" size-14 md:size-25 bg-[linear-gradient(180deg,#155DFC_0%,#827AF2_135%)] text-white rounded-[10px] md:rounded-[25px] flex items-center justify-center shadow-[0px_4px_7px_0px_#2B25AB40]  ">
            <ArrowUpRight size={55} />
          </div>

          <h3 className=" text-white text-2xl md:text-3xl font-bold tracking-wider mt-3 ">
            Send Money
          </h3>
          <p className="text-sm md:text-base font-normal text-[#90A1B9]  ">
            Send crypto to any phone number via USSD
          </p>
        </div>

        <div className="w-full py-5 flex items-center  justify-between text-center bg-[#1624564D] border-[0.5px] border-[#193CB84D] rounded-[14px] px-6 text-sm md:text-base font-normal text-[#CAD5E2] ">
          <p className="flex gap-2.5 items-center text-[#CAD5E2] font-normal text-sm  ">
            <Wallet size={20} color="#51A2FF" /> Available Balance
          </p>

          <p className="text-base md:text-lg font-bold text-white ">
            $1,847.50 USDT
          </p>
        </div>

        <Input
          label="Recipient Phone Number"
          placeholder="+1 (555) 000-0000"
          icon={<Phone size={20} />}
          onChange={handleChange}
          type="text"
          name="phoneNumber"
          value={txFormValues.phoneNumber}
        />

        <div className="w-full flex flex-col items-start gap-4 ">
          <Input
            label="Amount (USDT)"
            placeholder="0.00"
            icon={<DollarSign size={17} />}
            onChange={handleChange}
            type="text"
            name="amount"
            value={String(txFormValues.amount)}
          />

          <div className=" w-full flex items-center gap-2 ">
            <div className="w-full flex items-center gap-2">
              {["50", "100", "200"].map((amt) => (
                <button
                  key={amt}
                  type="button"
                  onClick={() => setTxFormValues("amount", amt)}
                  className="border-[0.67px] border-[#314158] rounded-[10px] bg-[#1D293D] cursor-pointer py-2 px-4 hover:brightness-125 transition"
                >
                  ${amt}
                </button>
              ))}
            </div>
          </div>
        </div>

        <label
          htmlFor="note"
          className="w-full flex flex-col items-start gap-4 "
        >
          <span className="text-sm font-normal text-[#CAD5E2] ">
            Note (Optional)
          </span>

          <textarea
            name="note"
            id="note"
            value={txFormValues.note}
            onChange={(e) => setTxFormValues("note", e.target.value)}
            placeholder="Add a message (optional)"
            className="bg-[#0F172B80] border-[0.67px] border-[#314158] py-2 px-3 outline-0 w-full rounded-[10px] text-[#62748E] "
          ></textarea>
        </label>

        <Button
          type="button"
          variant="primary"
          className="rounded-[10px]! w-full! text-sm md:text-base py-3 tracking-wider bg-linear-to-r! from-[#155DFC]! to-[#0092B8]! "
        >
          Continue <ArrowUpRight size={17} />
        </Button>
      </form>
    </div>
  );
}
