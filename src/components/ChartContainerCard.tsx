import { Area, AreaChart, CartesianGrid } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { date: "Apr 1", tickets: 20 },
  { date: "Apr 2", tickets: 35 },
  { date: "Apr 3", tickets: 19 },
  { date: "Apr 4", tickets: 70 },
  { date: "Apr 5", tickets: 18 },
  { date: "Apr 6", tickets: 65 },
  { date: "Apr 7", tickets: 90 },
  { date: "Apr 8", tickets: 24 },
  { date: "Apr 9", tickets: 26 },
  { date: "Apr 10", tickets: 200 },
  { date: "Apr 11", tickets: 260 },
  { date: "Apr 12", tickets: 240 },
];
const chartConfig = {
  tickets: {
    label: "Tickets",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export default function ChartContainerCard() {
  return (
    <div className="w-full h-full">
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full p-0">
        <AreaChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} horizontal={false} />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="dot" hideLabel />}
          />
          <Area
            dataKey="tickets"
            type="linear"
            fill="#007bff"
            fillOpacity={0.4}
            stroke="#007bff"
            strokeWidth={2}
          />
        </AreaChart>
      </ChartContainer>
    </div>
  );
}
