"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { MdOutlineDashboard } from "react-icons/md";
import { IoPeople } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { BiDollar } from "react-icons/bi";
import { IoReceipt } from "react-icons/io5";
import { TbReport } from "react-icons/tb";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const currentPathname = usePathname();
  console.log(currentPathname);
  return (
    <div className="w-[260px] h-full py-2 sticky top-0 left-0 bg-white border-r border-r-gray-300">
      <div
        className="flex flex-col items-start space-y-4 h-full
      "
      >
        <div
          className="flex items-center w-full
         gap-3 border-b  border-b-gray-400 pb-3.5 px-4"
        >
          <Image
            src="/images/DHH.png"
            alt="DHH Logo"
            width={54}
            height={54}
            className="object-contain text-center"
          />
          <h3 className="text-2xl text-green-600 font-semibold">D.H.H</h3>
        </div>
        {/* Nav items */}
        <nav className="w-full px-4">
          {/* Sidebar Menu */}
          <div className="mt-2">
            <h3 className="text-sm text-gray-400">Menu</h3>
            <hr className="border-t border-gray-300 my-2" />
            <ul className="list-none m-0 p-0 flex flex-col space-y-8">
              <Link
                href="/dashboard"
                className={`flex items-center gap-1 ${
                  currentPathname === "/dashboard"
                    ? "bg-green-50  h-[50px] px-4 py-2 rounded-lg text-green-600 font-semibold text-base"
                    : "text-gray-700"
                } transition-all duration-500`}
              >
                <MdOutlineDashboard size={25} />
                Dashboard
              </Link>
              <Link
                href="/dashboard/staff"
                className={`flex items-center gap-1 ${
                  currentPathname === "/dashboard/staff"
                    ? "bg-green-50  h-[50px] px-4 py-2 rounded-lg text-green-600 font-semibold text-base"
                    : "text-gray-700"
                } transition-all duration-500`}
              >
                <IoPeople size={23} />
                Shaqaale
              </Link>
              <Link
                href="/dashboard/receipt"
                className={`flex items-center gap-1 ${
                  currentPathname === "/dashboard/receipt"
                    ? "bg-green-50  h-[50px] px-4 py-2 rounded-lg text-green-600 font-semibold text-base"
                    : "text-gray-700"
                } ${
                  currentPathname === "/dashboard/receipt/add" ||
                  currentPathname === "/dashboard/receipt/edit/[id]"
                    ? "bg-green-50  h-[50px] px-4 py-2 rounded-lg text-green-600 font-semibold text-base"
                    : "text-gray-700"
                } transition-all duration-500`}
              >
                <IoReceipt size={23} />
                Cashuur
              </Link>
              <Link
                href="/dashboard/districts"
                className={`flex items-center gap-1 ${
                  currentPathname === "/dashboard/districts"
                    ? "bg-green-50  h-[50px] px-4 py-2 rounded-lg text-green-600 font-semibold text-base"
                    : "text-gray-700"
                } transition-all duration-500`}
              >
                <IoMdHome size={23} />
                Degmooyin
              </Link>
              <Link
                href="/dashboard/income"
                className={`flex items-center gap-1 ${
                  currentPathname === "/dashboard/income"
                    ? "bg-green-50  h-[50px] px-4 py-2 rounded-lg text-green-600 font-semibold text-base"
                    : "text-gray-700"
                } transition-all duration-500`}
              >
                <BiDollar size={23} />
                Dakhli
              </Link>
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="text-sm text-gray-400">Others</h3>
            <hr className="border-t border-gray-300 my-2" />
            <ul className="list-none m-0 p-0 flex flex-col space-y-8">
              <Link
                href="/dashboard/report"
                className={`flex items-center gap-1 ${
                  currentPathname === "/dashboard/report"
                    ? "bg-green-50  h-[50px] px-4 py-2 rounded-lg text-green-600 font-semibold text-base"
                    : "text-gray-700"
                } transition-all duration-500`}
              >
                <TbReport size={23} />
                Report
              </Link>

              <Button
                size="lg"
                className="bg-transparent border-green-600 border  text-green-500 font-semibold text-base hover:bg-green-700  hover:text-white transition-all duration-300"
              >
                Logout
              </Button>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
