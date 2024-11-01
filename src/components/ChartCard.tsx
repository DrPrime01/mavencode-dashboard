import { Pie, PieChart, LabelList } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { browser: "chrome", visitors: 37, fill: "#d4edda" },
  { browser: "safari", visitors: 63, fill: "#28a745" },
];
const chartConfig = {
  chrome: {
    label: "New Ticket",
    color: "#d4edda",
    value: "37%",
  },
  safari: {
    label: "Closed",
    color: "#28a745",
    value: "63%",
  },
};

export default function ChartCard() {
  return (
    <div className="flex flex-col rounded-sm border bg-white">
      <div className="px-6 py-4 border-b">
        <p className="text-sm sm:text-base font-medium text-gray-500">
          New Tickets
        </p>
      </div>
      <div>
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel={false} />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius="40%"
              outerRadius="70%"
              strokeWidth={5}
            >
              <LabelList
                dataKey="browser"
                className=""
                stroke="none"
                fontSize={12}
                fill="#fff"
                formatter={(value: keyof typeof chartConfig) =>
                  chartConfig[value]?.value
                }
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </div>
    </div>
  );
}

const chartData2 = [
  { browser: "chrome", visitors: 9, fill: "#007bff" },
  { browser: "safari", visitors: 47.4, fill: "#6c757d" },
  { browser: "firefox", visitors: 33.1, fill: "#a9b3bd" },
  { browser: "edge", visitors: 10.5, fill: "#e9ecef" },
];
const chartConfig2 = {
  chrome: {
    label: "New Ticket",
    color: "#d4edda",
    value: "9%",
  },
  safari: {
    label: "Closed",
    color: "#28a745",
    value: "47.4%",
  },
  firefox: {
    label: "Feedback",
    color: "#28a745",
    value: "33.1%",
  },
  edge: {
    label: "Replies",
    color: "#28a745",
    value: "10.5%",
  },
};

export function ChartCard2() {
  return (
    <div className="flex flex-col rounded-sm border bg-white">
      <div className="px-6 py-4 border-b">
        <p className="text-sm sm:text-base font-medium text-gray-500">
          Closed Today
        </p>
      </div>
      <div>
        <ChartContainer
          config={chartConfig2}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel={false} />}
            />
            <Pie data={chartData2} dataKey="visitors" nameKey="browser">
              <LabelList
                dataKey="browser"
                className=""
                stroke="none"
                fontSize={12}
                fill="#fff"
                formatter={(value: keyof typeof chartConfig2) =>
                  chartConfig2[value]?.value
                }
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </div>
    </div>
  );
}
