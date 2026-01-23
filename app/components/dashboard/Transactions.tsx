import { cn } from "@/lib/utils";
import { ArrowDownLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface Transaction {
  id: string;
  date: string;
  type: "Received" | "Sent";
  recipientSender: string;
  amount: number;
  status: "Completed" | "Pending" | "Failed";
}

const transactions: Transaction[] = [
  {
    id: "1",
    date: "Jan 19, 2026",
    type: "Received",
    recipientSender: "+254 712 345 678",
    amount: 120.0,
    status: "Completed",
  },
  {
    id: "2",
    date: "Jan 19, 2026",
    type: "Sent",
    recipientSender: "+254 712 345 678",
    amount: -250.0,
    status: "Pending",
  },
  {
    id: "3",
    date: "Jan 19, 2026",
    type: "Sent",
    recipientSender: "+254 712 345 678",
    amount: -30.0,
    status: "Completed",
  },
  {
    id: "4",
    date: "Jan 19, 2026",
    type: "Received",
    recipientSender: "+254 712 345 678",
    amount: 745.0,
    status: "Completed",
  },
  {
    id: "5",
    date: "Jan 19, 2026",
    type: "Sent",
    recipientSender: "+254 712 345 678",
    amount: -100.5,
    status: "Failed",
  },
  {
    id: "6",
    date: "Jan 19, 2026",
    type: "Received",
    recipientSender: "+254 712 345 678",
    amount: 1250.0,
    status: "Completed",
  },
];

export default function Transactions() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "text-green-500 bg-green-500/10 border-green-500/30";
      case "Pending":
        return "text-yellow-500 bg-yellow-500/10 border-yellow-500/30";
      case "Failed":
        return "text-red-500 bg-red-500/10 border-red-500/30";
      default:
        return "text-gray-500 bg-gray-500/10 border-gray-500/30";
    }
  };

  return (
    <div className="bg-[#13141F] border border-gray-800 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[#D6DEED] text-2xl font-semibold">
          Recent Transactions
        </h2>
        <Link
          href="/transactions"
          className="text-blue-500 hover:text-blue-400 transition-colors text-sm font-medium"
        >
          View All
        </Link>
      </div>

      <div className="overflow-x-auto max-sm:max-w-75">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-800">
              <th className="text-left text-gray-400 text-sm font-medium pb-4 pr-4 whitespace-nowrap">
                Date
              </th>
              <th className="text-left text-gray-400 text-sm font-medium pb-4 pr-4 whitespace-nowrap">
                Type
              </th>
              <th className="text-left text-gray-400 text-sm font-medium pb-4 pr-4 whitespace-nowrap">
                Recipient/Sender
              </th>
              <th className="text-left text-gray-400 text-sm font-medium pb-4 pr-4 whitespace-nowrap">
                Amount
              </th>
              <th className="text-left text-gray-400 text-sm font-medium pb-4 whitespace-nowrap">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr
                key={transaction.id}
                className="border-b border-gray-800 last:border-0"
              >
                <td className="py-5 text-gray-400 text-sm whitespace-nowrap pr-4">
                  {transaction.date}
                </td>
                <td className="py-5 pr-4">
                  <div className="flex items-center gap-2">
                    <div
                      className={cn(
                        "p-2 rounded-lg",
                        transaction.type === "Received"
                          ? "bg-green-500/20"
                          : "bg-red-500/20",
                      )}
                    >
                      {transaction.type === "Received" ? (
                        <ArrowDownLeft className="w-4 h-4 text-green-500" />
                      ) : (
                        <ArrowUpRight className="w-4 h-4 text-red-500" />
                      )}
                    </div>
                    <span className="text-white text-sm">
                      {transaction.type}
                    </span>
                  </div>
                </td>
                <td className="py-5 text-gray-400 text-sm whitespace-nowrap pr-4">
                  {transaction.recipientSender}
                </td>
                <td className="py-5 text-white text-sm font-medium whitespace-nowrap pr-4">
                  {transaction.amount > 0 ? "+" : ""}$
                  {Math.abs(transaction.amount).toFixed(2)}
                </td>
                <td className="py-5">
                  <span
                    className={cn(
                      "px-3 py-1.5 rounded-full text-xs font-medium border",
                      getStatusColor(transaction.status),
                    )}
                  >
                    {transaction.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
