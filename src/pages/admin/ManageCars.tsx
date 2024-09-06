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
import { ArrowUp, Pencil, Trash } from "lucide-react";
import AddCarForm from "@/components/AddCarForm";
import { useDeleteCarMutation, useGetCarsQuery } from "@/redux/api/carApi";

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

const ManageCars = () => {
  const { data: carsData, isLoading } = useGetCarsQuery(undefined);
  const cars = carsData?.data || [];
  const [deleteCar] = useDeleteCarMutation();
  const [search, setSearch] = useState<string>("");
  const [sort, setSort] = useState<SortState>({ key: "name", order: "asc" });
  // eslint-disable-next-line react-hooks/exhaustive-deps

  const filteredData = useMemo(() => {
    if (!cars) return [];
    const searchValue = search.toLowerCase();
    return cars
      .filter((cars) => {
        return (
          cars?.name?.toLowerCase().includes(searchValue) ||
          cars?.color?.toLowerCase().includes(searchValue) ||
          cars?.status?.toLowerCase().includes(searchValue)
        );
      })
      .sort((a, b) => {
        if (sort.order === "asc") {
          return a[sort.key] > b[sort.key] ? 1 : -1;
        } else {
          return a[sort.key] < b[sort.key] ? 1 : -1;
        }
      });
  }, [search, sort.key, sort.order, cars]);
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

  const getRideStatusColor = (status: string) => {
    switch (status) {
      case "available":
        return "bg-green-500 text-white";
      case "unavailable":
        return "bg-red-500 text-white";
      default:
        return "";
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await deleteCar(id);
      console.log(res);
    } catch (error) {}
  };
  return (
    <div className="flex md:flex-1 min-h-screen">
      <div className="p-2 md:p-10 rounded-tl-2xl border-2 border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 w-full h-full">
        <div className="min-h-screen">
          <div className=" w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 ">
            <div className="mx-auto p-4 w-full rounded border">
              <div className="flex justify-between">
                {" "}
                <h1 className="text-xl font-bold">Manage Cars</h1>
                {/* <Button variant={"outline"} className="border border-black">
                  ADD A CAR
                </Button> */}
                <AddCarForm />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4 border-b  md:py-2">
                <h1 className="text-xl font-bold">All Bookings</h1>
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
                      Car Name
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
                      Color
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
                      Electric
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
                      Ride Status
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
                      Price Per Hour
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
                      Availability
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
                        {data?.name}
                      </TableCell>
                      <TableCell className="">{data?.color}</TableCell>
                      <TableCell>{data?.isElectric ? "Yes" : "No"}</TableCell>

                      <TableCell>
                        {" "}
                        <p
                          className={`text-center font-bold w-2/3 rounded ${getRideStatusColor(
                            data?.status
                          )}`}
                        >
                          {data?.status}
                        </p>
                      </TableCell>
                      <TableCell>${data?.pricePerHour}</TableCell>
                      <TableCell>
                        <p
                          className={`text-center font-bold w-2/3 rounded ${getAvailabilityStatusColor(
                            data?.isDeleted
                          )}`}
                        >
                          {data?.isDeleted ? "Deleted" : "Available"}
                        </p>
                      </TableCell>

                      {/* <TableCell>{data?.totalCost}</TableCell> */}

                      <TableCell className="flex items-center justify-end gap-2">
                        <Button
                          variant="ghost"
                          className="border bg-green-600 hover:border-green-600"
                          size="icon"
                        >
                          <Pencil className="size-5 text-white" />
                        </Button>
                        <Button
                          onClick={() => handleDelete(data._id)}
                          variant="ghost"
                          className="border hover:border-red-600 bg-red-500 "
                          size="icon"
                        >
                          <Trash className="size-5 text-white" />
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

export default ManageCars;
