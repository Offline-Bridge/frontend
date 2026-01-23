import BalanceOverview from "@/app/components/dashboard/BalanceOverview";
import CopyUssd from "@/app/components/dashboard/CopyUssd";
import Metrics from "@/app/components/dashboard/Metrics";
import Transactions from "@/app/components/dashboard/Transactions";

export default function Dashboard() {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-stretch">
        <div className="xl:col-span-2">
          <BalanceOverview />
        </div>
        <div className="xl:col-span-1">
          <CopyUssd />
        </div>
      </div>
      <Metrics />
      <Transactions />
    </div>
  );
}
