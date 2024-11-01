import { Bell, Terminal } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b sm:px-16 px-6 sm:py-4 py-3 w-full bg-white z-50">
      <div className="logo flex items-center gap-x-3">
        <div className="flex items-center justify-center p-1 rounded-md bg-blue-600">
          <Terminal strokeWidth={3} size={14} color="#fff" />
        </div>
        <p className="sm:text-lg font-semibold text-gray-700">tabler</p>
      </div>
      <div className="flex items-center gap-x-6">
        <button className="hidden sm:block p-1.5 rounded border border-blue-600 hover:border-none hover:bg-blue-600 hover:text-white text-xs sm:text-sm text-blue-600 font-medium transition ease-linear delay-50 duration-300">
          Source code
        </button>
        <div className="relative size-6 flex items-center justify-center">
          <Bell size={14} strokeWidth={3} />
          <div className="size-2 bg-red-500 rounded-full absolute top-0 right-0 animate-pulse"></div>
        </div>
        <div className="flex items-center gap-x-2">
          <Avatar className="size-8">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="hidden sm:flex flex-col">
            <p className="text-sm text-gray-500 font-semibold">Jane Pearson</p>
            <p className="text-xs text-gray-400">Administrator</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
