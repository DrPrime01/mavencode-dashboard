import ChartCard, { ChartCard2 } from "@/components/ChartCard";
import ChartContainerCard from "@/components/ChartContainerCard";
import StatsCard from "@/components/StatsCard";
import TableContainer from "@/components/TableContainer";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col my-8">
      <h2 className="text-3xl font-medium text-gray-500 mb-8">Dashboard</h2>
      <div className="flex flex-col gap-y-6 justify-between">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          <StatsCard
            label="New Ticket"
            value={43}
            percentageVal="+6%"
            isProfit
          />
          <StatsCard
            label="Closed Today"
            value={17}
            percentageVal="-3%"
            isProfit={false}
          />
          <StatsCard
            label="New Replies"
            value={7}
            percentageVal="+9%"
            isProfit
          />
          <StatsCard
            label="Followers"
            value="27.3k"
            percentageVal="+3%"
            isProfit
          />
          <StatsCard
            label="Daily Earnings"
            value="$95"
            percentageVal="-2%"
            isProfit={false}
          />
          <StatsCard
            label="Products"
            value={621}
            percentageVal="-1%"
            isProfit={false}
          />
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-6">
          <div className="flex flex-col rounded-sm flex-1 bg-white border w-full">
            <div className="border-b py-3 px-6">
              <p className="sm:text-lg font-medium text-gray-500">
                Development Activity
              </p>
            </div>
            <div className="relative">
              <ChartContainerCard />
              <div className="flex items-center gap-x-1 absolute left-5 top-5">
                <div className="size-2.5 bg-blue-600"></div>
                <p className="text-xs sm:text-sm font-medium text-gray-500">
                  Purchases
                </p>
              </div>
            </div>
            <div>
              <TableContainer />
            </div>
          </div>
          <div className="flex-1 flex flex-col w-full">
            <div className="px-6 py-4 rounded-sm bg-blue-200 mb-5">
              <p className="text-sm text-gray-500">
                <Link to="#" className="font-semibold text-gray-700">
                  Read our documentation
                </Link>{" "}
                with code samples
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ChartCard />
              <ChartCard2 />
              <ChartCard />
              <ChartCard2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
