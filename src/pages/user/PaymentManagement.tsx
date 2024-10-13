// import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
// Install MynaUI Icons from mynaui.com/icons
// import { ArrowUp, Pencil, Trash } from "@mynaui/icons-react";
import { useMemo, useState } from "react";

import {
  useGetMyapprovedBookingQuery,
  useGetMyBookingQuery,
} from "@/redux/features/bookings/bookingApi";
import React from "react";
import { ArrowUp, Pencil, Trash } from "lucide-react";
import { useCreatePaymentMutation } from "@/redux/features/payment/paymentApi";

interface Order {
  name: string;
  date: string;
  startTime: string;
  endTime: string;
  totalConst: number;
}

interface SortState {
  key: keyof Order;
  order: "asc" | "desc";
}

const PaymentManagement = () => {
  const [search, setSearch] = useState<string>("");
  const [sort, setSort] = useState<SortState>({ key: "name", order: "asc" });
  // eslint-disable-next-line react-hooks/exhaustive-deps

  // const { data: bookingsData, isLoading } = useGetMyBookingQuery(undefined);
  // const bookings = bookingsData?.data || [];

  const { data: paymentsData, isLoading } =
    useGetMyapprovedBookingQuery(undefined);
  const payments = paymentsData?.data || [];
  console.log("payments", payments);
  const filteredData = useMemo(() => {
    if (!payments) return [];
    const searchValue = search.toLowerCase();
    return payments
      .filter((payment) => {
        return payment?.car.name?.toLowerCase().includes(searchValue);
      })
      .sort((a, b) => {
        if (sort.order === "asc") {
          return a[sort.key] > b[sort.key] ? 1 : -1;
        } else {
          return a[sort.key] < b[sort.key] ? 1 : -1;
        }
      });
  }, [search, sort.key, sort.order, payments]);

  console.log(filteredData);
  const getRideStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-indigo-500 text-white";
      case "pending":
        return "bg-yellow-500 text-white";
      default:
        return "";
    }
  };

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-orange-500 text-white";
      case "Paid":
        return "bg-blue-500 text-white";
      default:
        return "";
    }
  };
  const [payment] = useCreatePaymentMutation();
  const handlePayment = async (id) => {
    console.log(id);
    try {
      const res = await payment(id);
      console.log("response", res);
      if (res.data.data.result) {
        console.log("trigger");
        console.log(res.data.data.payment_url);
        window.location.href = res.data.data.payment_url;
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex md:flex-1 min-h-screen">
      <div className="p-2 md:p-10 rounded-tl-2xl border-2 border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 w-full h-full">
        <div className="min-h-screen">
          <div className=" w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 ">
            <div className="mx-auto  w-full rounded border">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b p-4 md:py-2">
                <h1 className="text-xl font-bold">All Payments</h1>
                <div className="flex items-center gap-2">
                  <Input
                    value={search}
                    placeholder="Search..."
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        className="flex items-center gap-2"
                      >
                        <ArrowUp className="size-4" />
                        Sort by
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[200px]" align="end">
                      <DropdownMenuRadioGroup
                        value={sort.key}
                        onValueChange={(key) =>
                          setSort({
                            key: key as keyof Order,
                            order: sort.order,
                          })
                        }
                      >
                        <DropdownMenuRadioItem value="name">
                          Car Name
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="name">
                          Transaction Id
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="date">
                          Booked On
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="startTime">
                          Start Time
                        </DropdownMenuRadioItem>
                      </DropdownMenuRadioGroup>
                      <DropdownMenuSeparator />
                      <DropdownMenuRadioGroup
                        value={sort.order}
                        onValueChange={(order) =>
                          setSort({
                            key: sort.key,
                            order: order as "asc" | "desc",
                          })
                        }
                      >
                        <DropdownMenuRadioItem value="asc">
                          Ascending
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="desc">
                          Descending
                        </DropdownMenuRadioItem>
                      </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              <Table className="">
                <TableHeader>
                  <TableRow>
                    <TableHead
                      className="w-[200px]"
                      onClick={() =>
                        setSort({
                          key: "name",
                          order: (sort.key = "name"
                            ? (sort.order = "asc" ? "desc" : "asc")
                            : "asc"),
                        })
                      }
                    >
                      Car Name
                      {sort.key === "name" && (
                        <span className="ml-1">
                          {sort.order === "asc" ? "\u2191" : "\u2193"}
                        </span>
                      )}
                    </TableHead>
                    <TableHead
                      className="w-[200px]"
                      onClick={() =>
                        setSort({
                          key: "name",
                          order: (sort.key = "name"
                            ? (sort.order = "asc" ? "desc" : "asc")
                            : "asc"),
                        })
                      }
                    >
                      Transaction Id
                      {sort.key === "name" && (
                        <span className="ml-1">
                          {sort.order === "asc" ? "\u2191" : "\u2193"}
                        </span>
                      )}
                    </TableHead>
                    <TableHead
                      className="flex-1"
                      onClick={() =>
                        setSort({
                          key: "date",
                          order: (sort.key = "date"
                            ? (sort.order = "asc" ? "desc" : "asc")
                            : "asc"),
                        })
                      }
                    >
                      Ride Status
                      {sort.key === "date" && (
                        <span className="ml-1">
                          {sort.order === "asc" ? "\u2191" : "\u2193"}
                        </span>
                      )}
                    </TableHead>
                    {/* <TableHead
                      className="flex-1"
                      onClick={() =>
                        setSort({
                          key: "startTime",
                          order: (sort.key = "startTime"
                            ? (sort.order = "asc" ? "desc" : "asc")
                            : "asc"),
                        })
                      }
                    >
                      Payment Status
                      {sort.key === "startTime" && (
                        <span className="ml-1">
                          {sort.order === "asc" ? "\u2191" : "\u2193"}
                        </span>
                      )}
                    </TableHead>
                    <TableHead
                      className="flex-1"
                      onClick={() =>
                        setSort({
                          key: "endTime",
                          order: (sort.key = "endTime"
                            ? (sort.order = "asc" ? "desc" : "asc")
                            : "asc"),
                        })
                      }
                    >
                      End Time
                      {sort.key === "endTime" && (
                        <span className="ml-1">
                          {sort.order === "asc" ? "\u2191" : "\u2193"}
                        </span>
                      )}
                    </TableHead>
                    <TableHead
                      className="flex-1"
                      onClick={() =>
                        setSort({
                          key: "startTime",
                          order: (sort.key = "startTime"
                            ? (sort.order = "asc" ? "desc" : "asc")
                            : "asc"),
                        })
                      }
                    >
                      Order Status
                      {sort.key === "startTime" && (
                        <span className="ml-1">
                          {sort.order === "asc" ? "\u2191" : "\u2193"}
                        </span>
                      )}
                    </TableHead> */}
                    <TableHead
                      className="flex-1"
                      onClick={() =>
                        setSort({
                          key: "startTime",
                          order: (sort.key = "startTime"
                            ? (sort.order = "asc" ? "desc" : "asc")
                            : "asc"),
                        })
                      }
                    >
                      Payment Status
                      {sort.key === "startTime" && (
                        <span className="ml-1">
                          {sort.order === "asc" ? "\u2191" : "\u2193"}
                        </span>
                      )}
                    </TableHead>
                    <TableHead
                      className="flex-1"
                      onClick={() =>
                        setSort({
                          key: "startTime",
                          order: (sort.key = "startTime"
                            ? (sort.order = "asc" ? "desc" : "asc")
                            : "asc"),
                        })
                      }
                    >
                      Total Amount
                      {sort.key === "startTime" && (
                        <span className="ml-1">
                          {sort.order === "asc" ? "\u2191" : "\u2193"}
                        </span>
                      )}
                    </TableHead>

                    <TableHead className="w-[100px] text-right">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredData.map((data) => (
                    <TableRow key={data?._id}>
                      <TableCell className="font-medium">
                        {data?.car.name}
                      </TableCell>
                      <TableCell className="font-medium">
                        {data?.transactionId?.slice(0, 12)}...
                      </TableCell>
                      {/* <TableCell className="">
                        {" "}
                        {new Date(data?.date).toISOString().split("T")[0]}
                      </TableCell>
                      <TableCell>{data.startTime}</TableCell>
                      <TableCell>{data.endTime}</TableCell> */}
                      <TableCell>
                        <p
                          className={`text-center font-bold w-2/5 rounded ${getRideStatusColor(
                            "completed"
                          )}`}
                        >
                          {"Completed"}
                        </p>
                      </TableCell>
                      <TableCell>
                        <p
                          className={`text-center font-bold w-2/5 rounded ${getPaymentStatusColor(
                            data.paymentStatus
                          )}`}
                        >
                          {data.paymentStatus}
                        </p>
                      </TableCell>
                      <TableCell>{data?.totalCost}</TableCell>

                      <TableCell className="flex items-center justify-end gap-2">
                        <Button
                          variant="ghost"
                          disabled={data.paymentStatus == "Paid"}
                          className="border border-blue-500"
                          onClick={() => handlePayment(data._id)}
                        >
                          <p className="">Make Payment</p>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentManagement;
