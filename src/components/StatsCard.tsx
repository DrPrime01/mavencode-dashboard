import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";

interface StatCardType {
  isProfit: boolean;
  label: string;
  value: string | number;
  percentageVal: string;
}

export default function StatsCard({
  isProfit,
  label,
  value,
  percentageVal,
}: StatCardType) {
  return (
    <div className="bg-white border rounded-sm h-[130px] w-full relative p-2 flex items-center justify-center">
      <div className="flex flex-col items-center text-center">
        <p className="font-semibold text-xl sm:text-3xl text-gray-700 capitalize">
          {value}
        </p>
        <p className="font-medium text-xs sm:text-sm text-gray-500">{label}</p>
      </div>
      <div className="absolute top-2 right-2 flex items-center gap-x-0.5">
        <p
          className={cn(
            "text-xs",
            isProfit ? "text-green-400" : "text-red-500"
          )}
        >
          {percentageVal}
        </p>
        {!isProfit ? (
          <ChevronDown size={12} stroke="#ef4444" strokeWidth={3} />
        ) : (
          <ChevronUp size={12} stroke="#4ade80" strokeWidth={3} />
        )}
      </div>
    </div>
  );
}
