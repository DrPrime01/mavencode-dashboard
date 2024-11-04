import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Trash } from "lucide-react";

type DataTypes = {
  user: string;
  commit: string;
  date: string;
  avatar: string;
};

export default function TableContainer({ data }: { data: DataTypes[] }) {
  const tableData = data?.map((item) => ({
    user: (
      <div className="flex items-center gap-x-6">
        <Avatar className="size-7">
          <AvatarImage src={item?.avatar} alt={item?.user} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className="text-gray-7 text-sm">{item?.user}</p>
      </div>
    ),
    commit: item?.commit,
    date: item?.date,
    action: <Trash size={14} className="cursor-pointer" />,
    key: `user-${item?.user?.split(" ").join("-")}`,
  }));

  return (
    <Table className="px-6">
      <TableCaption className="sr-only">
        A list of your recent invoices.
      </TableCaption>
      <TableHeader>
        <TableRow>
          {headCells.map((item) => (
            <TableHead className="h-auto p-3 uppercase" key={item.key}>
              {item.value}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableData.map((item) => (
          <TableRow key={item.key}>
            {headCells.map((headcell) => (
              <TableCell className="p-3 last:text-right" key={headcell.key}>
                {item[headcell.key as keyof TableDataItem]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

const headCells = [
  {
    key: "user",
    value: "User",
  },
  {
    key: "commit",
    value: "Commit",
  },
  {
    key: "date",
    value: "Date",
  },
  {
    key: "action",
    value: "",
  },
];

interface TableDataItem {
  user: React.ReactNode;
  commit: string;
  date: string;
  action: React.ReactNode;
  key: string;
}
