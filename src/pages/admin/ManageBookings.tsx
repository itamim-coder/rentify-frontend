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

import React from "react";
import { ArrowUp, Eye, Pencil, Trash } from "lucide-react";
import AddCarForm from "@/components/AddCarForm";
import { useDeleteCarMutation, useGetCarsQuery } from "@/redux/api/carApi";
import { useAllBookingsQuery } from "@/redux/features/bookings/bookingApi";
import EditBookingForm from "@/components/EditBookingForm";

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

const ManageBookings = () => {
  const { data: allBookingsData, isLoading } = useAllBookingsQuery(undefined);
  const allBookings = allBookingsData?.data || [];
  console.log(allBookings);
  const [search, setSearch] = useState<string>("");
  const [sort, setSort] = useState<SortState>({ key: "name", order: "asc" });

  const filteredData = useMemo(() => {
    if (!allBookings) return [];
    const searchValue = search.toLowerCase();
    return allBookings
      .filter((allBookings) => {
        return (
          allBookings?.car?.name?.toLowerCase().includes(searchValue) ||
          allBookings?.user?.name.toLowerCase().includes(searchValue) ||
          allBookings?.user?.phone.toLowerCase().includes(searchValue)
        );
      })
      .sort((a, b) => {
        if (sort.order === "asc") {
          return a[sort.key] > b[sort.key] ? 1 : -1;
        } else {
          return a[sort.key] < b[sort.key] ? 1 : -1;
        }
      });
  }, [search, sort.key, sort.order, allBookings]);
  const getAvailabilityStatusColor = (status: string) => {
    switch (status) {
      case true:
        return "bg-red-500 text-white";
      case false:
        return "bg-green-500 text-white";

      default:
        return "";
    }
  };

  const getBookingStatusColor = (status: string) => {
    switch (status) {
      case "Approved":
        return "bg-green-500 text-white";
      case "Cancelled":
        return "bg-red-500 text-white";
      case "Pending":
        return "bg-yellow-500 text-white";
      default:
        return "";
    }
  };

  // const handleDelete = async (id) => {
  //   try {
  //     const res = await deleteCar(id);
  //     console.log(res);
  //   } catch (error) {}
  // };
  return (
    <div className="flex md:flex-1 min-h-screen">
      <div className="p-2 md:p-10 rounded-tl-2xl border-2 border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 w-full h-full">
        <div className="min-h-screen">
          <div className=" w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 ">
            <div className="mx-auto p-4 w-full rounded border">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b  md:py-2">
                <h1 className="text-xl font-bold">Manage Bookings</h1>
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
                      User Name
                      {sort.key === "name" && (
                        <span className="ml-1">
                          {sort.order === "asc" ? "\u2191" : "\u2193"}
                        </span>
                      )}
                    </TableHead>
                    <TableHead
                      className="w-[150px]"
                      onClick={() =>
                        setSort({
                          key: "date",
                          order: (sort.key = "date"
                            ? (sort.order = "asc" ? "desc" : "asc")
                            : "asc"),
                        })
                      }
                    >
                      User Phone
                      {sort.key === "date" && (
                        <span className="ml-1">
                          {sort.order === "asc" ? "\u2191" : "\u2193"}
                        </span>
                      )}
                    </TableHead>
                    <TableHead
                      className="w-[150px]"
                      onClick={() =>
                        setSort({
                          key: "date",
                          order: (sort.key = "date"
                            ? (sort.order = "asc" ? "desc" : "asc")
                            : "asc"),
                        })
                      }
                    >
                      Car Name
                      {sort.key === "date" && (
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
                      Booking Status
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
                      Pick Up Time
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
                      Booking Approval
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
                        {data?.user?.name}
                      </TableCell>
                      <TableCell className=""> {data?.user?.phone}</TableCell>
                      <TableCell> {data?.car?.name}</TableCell>

                      <TableCell>
                        {" "}
                        <p
                          className={`text-center font-bold w-2/3 rounded ${getBookingStatusColor(
                            data?.bookingStatus
                          )}`}
                        >
                          {data?.bookingStatus}
                        </p>
                      </TableCell>
                      <TableCell>{data?.startTime}</TableCell>
                      <TableCell>
                        <EditBookingForm
                          bookingStatus={data?.bookingStatus}
                          id={data?._id}
                        />
                      </TableCell>

                      <TableCell className="flex items-center justify-end gap-2">
                        <Button
                          onClick={() => handleDelete(data._id)}
                          variant="ghost"
                          className="border hover:border-red-600 bg-blue-500 "
                          size="icon"
                        >
                          <Eye className="size-5 text-white" />
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

export default ManageBookings;
