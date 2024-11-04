import ChartCard, { ChartCard2 } from "@/components/ChartCard";
import ChartContainerCard from "@/components/ChartContainerCard";
import StatsCard from "@/components/StatsCard";
import TableContainer from "@/components/TableContainer";
import { useGetDashboardDataQuery } from "@/services/general.api";
import { Link } from "react-router-dom";

export default function Home() {
  const { data, error, isLoading } = useGetDashboardDataQuery({});

  if (isLoading) return <div>Loading...</div>;
  if (error) {
    console.error(error);
    return <div className="my-8">Error loading dashboard data</div>;
  }

  const stats = data?.stats;
  return (
    <div className="flex flex-col my-8">
      <h2 className="text-3xl font-medium text-gray-500 mb-8">Dashboard</h2>
      <div className="flex flex-col gap-y-6 justify-between">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          <StatsCard
            label="New Ticket"
            value={stats?.newTickets?.value}
            percentageVal={stats?.newTickets?.change}
            isProfit={stats?.newTickets?.isProfit}
          />
          <StatsCard
            label="Closed Today"
            value={stats?.closedToday?.value}
            percentageVal={stats?.closedToday?.change}
            isProfit={stats?.closedToday?.isProfit}
          />
          <StatsCard
            label="New Replies"
            value={stats?.newReplies?.value}
            percentageVal={stats?.newReplies?.change}
            isProfit={stats?.newReplies?.isProfit}
          />
          <StatsCard
            label="Followers"
            value={stats?.followers?.value}
            percentageVal={stats?.followers?.change}
            isProfit={stats?.followers?.isProfit}
          />
          <StatsCard
            label="Daily Earnings"
            value={stats?.dailyEarnings?.value}
            percentageVal={stats?.dailyEarnings?.change}
            isProfit={stats?.dailyEarnings?.isProfit}
          />
          <StatsCard
            label="Products"
            value={stats?.products?.value}
            percentageVal={stats?.products?.change}
            isProfit={stats?.products?.isProfit}
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
              <TableContainer data={data?.developmentActivity} />
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
