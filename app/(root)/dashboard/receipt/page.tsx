"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import ReceiptTable from "@/components/tables/ReceiptTable";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getArdiyad } from "@/lib/actions/ardiyad.action";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
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

  const contentRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    // content: contentRef.current,
    contentRef: contentRef,
    bodyClass: "print-body",
    pageStyle: `@media print { @page { margin: 0; } body { margin: 20px; } }`,
    documentTitle: "Receipt",
    onAfterPrint: () => alert("Print successful!"),
  });

  const handlePrintWithCheck = () => {
    if (contentRef.current) {
      handlePrint();
    } else {
      console.error("No content to print");
    }
  };

  return (
    <div className="px-4">
      <div className="flex items-center justify-between w-full">
        <h2 className="text-xl text-gray-500 font-semibold">Cashuur</h2>
        <div className="flex items-center gap-2">
          <Link
            href="/dashboard/receipt/add"
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-all duration-500 ease-in-out"
          >
            Add Receipt
          </Link>
          <Button
            onClick={handlePrintWithCheck}
            size="lg"
            className="bg-transparent border border-green-500 text-green-600 px-4 py-2 rounded-md ml-2 hover:bg-green-500 hover:text-white transition duration-500 ease-in-out"
          >
            Print Receipt
          </Button>
        </div>
      </div>

      <div className="w-full h-full mt-4" ref={contentRef}>
        {/* <!-- Receipt Table Component Here --!> */}
        <ReceiptTable data={data} />
      </div>
    </div>
  );
};

export default ReceiptComponent;
