"use client";
import { useState, useEffect } from "react";
import ReceiptTable from "@/components/tables/ReceiptTable";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getArdiyad } from "@/lib/actions/ardiyad.action";

interface ReceiptData {
  id: number;
  place: string;
  telephone: string;
  receiptNumber: string;
  date: string;
  cabbirka: string;
  dhisan: string;
  taxRef: string;
  receivedFrom: string;
  totalAmount: number;
  amountInWords: string;
}
const ReceiptComponent = () => {
  const [data, setData] = useState<ReceiptData[]>([]);
  const fetchData = async () => {
    try {
      const response: any = await getArdiyad();
      if (response) {
        setData(response);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="px-4">
      <div className="flex items-center justify-between w-full">
        <h2 className="text-xl text-gray-500 font-semibold">Cashuur</h2>
        <div className="flex items-center gap-2">
          <Link
            href="/dashboard/receipt/add"
            className="bg-green-500 text-white px-4 py-2 rounded-md"
          >
            Add Receipt
          </Link>
          <Button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md ml-2">
            Print Receipt
          </Button>
        </div>
      </div>

      <div className="w-full h-full mt-4">
        {/* <!-- Receipt Table Component Here --!> */}
        <ReceiptTable data={data} />
      </div>
    </div>
  );
};

export default ReceiptComponent;
