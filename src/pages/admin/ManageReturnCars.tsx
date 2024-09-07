"use client";

import { useMemo, useState } from "react";
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
import { ArrowUp, Pencil, Save } from "lucide-react";
import { useGetApprovedBookingsQuery } from "@/redux/features/bookings/bookingApi";
import { IconCancel } from "@tabler/icons-react";
import { useSetDropOffTimeMutation } from "@/redux/api/carApi";
import { toast } from "sonner";

interface Order {
  name: string;
  date: string;
  startTime: string;
  endTime: string;
  totalCost: number;
}

interface SortState {
  key: keyof Order;
  order: "asc" | "desc";
}

const ManageReturnCar = () => {
  const { data: approvedBookingsData } = useGetApprovedBookingsQuery(undefined);
  const approvedBookings = approvedBookingsData?.data || [];

  const [search, setSearch] = useState<string>("");
  const [sort, setSort] = useState<SortState>({ key: "name", order: "asc" });
  const [editingId, setEditingId] = useState<string | null>(null); // To track the editing row
  const [editedTime, setEditedTime] = useState<string>(""); // To track the edited time

  const filteredData = useMemo(() => {
    if (!approvedBookings) return [];
    const searchValue = search.toLowerCase();
    return approvedBookings
      .filter((approvedBookings) => {
        return (
          approvedBookings?.car?.name?.toLowerCase().includes(searchValue) ||
          approvedBookings?.user?.name.toLowerCase().includes(searchValue) ||
          approvedBookings?.user?.phone.toLowerCase().includes(searchValue)
        );
      })
      .sort((a, b) => {
        if (sort.order === "asc") {
          return a[sort.key] > b[sort.key] ? 1 : -1;
        } else {
          return a[sort.key] < b[sort.key] ? 1 : -1;
        }
      });
  }, [search, sort.key, sort.order, approvedBookings]);

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

  const handleTimeChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const time = e.target.value;
    setEditedTime(time); // Store the selected time
  };

  const toggleEdit = (id: string) => {
    if (editingId === id) {
      setEditingId(null); // Close the editing row
    } else {
      setEditingId(id); // Set the id for the row to be edited
    }
  };
  const [setDropOffTime] = useSetDropOffTimeMutation();
  const handleSave = async (id: string) => {
    // console.log(`Booking ID: ${id}, Updated Time: ${editedTime}`);

    try {
      const res = await setDropOffTime({
        bookingId: id,
        endTime: editedTime,
      }).unwrap();
      console.log(res);
      if (res?.statusCode == 200) {
        toast.success("Return Time Added Successfully");
      }
    } catch (error) {
      console.error("Failed to update:", error);
    }
    // const modifyData = { bookingId: id, endTime: editedTime };
    // console.log(modifyData);
    // const res = await setDropOffTime(id);
    // console.log(res);
    setEditingId(null); // Exit edit mode after saving
  };

  return (
    <div className="flex md:flex-1 min-h-screen">
      <div className="p-2 md:p-10 rounded-tl-2xl border-2 border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 w-full h-full">
        <div className="min-h-screen">
          <div className=" w-full rounded-lg bg-gray-100 dark:bg-neutral-800">
            <div className="mx-auto p-4 w-full rounded border">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b md:py-2">
                <h1 className="text-xl font-bold">Manage Return Car</h1>
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
                    <TableHead>User Name</TableHead>
                    <TableHead>User Phone</TableHead>
                    <TableHead>Car Name</TableHead>
                    <TableHead>Booking Status</TableHead>
                    <TableHead>Pick Up Time</TableHead>
                    <TableHead>Drop Off Time</TableHead>
                    <TableHead>Payment</TableHead>
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
                      <TableCell>{data?.user?.phone}</TableCell>
                      <TableCell>{data?.car?.name}</TableCell>
                      <TableCell>
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
                        {editingId === data?._id ? (
                          <input
                            className="border border-black rounded-md"
                            type="time"
                            defaultValue={data?.endTime || ""}
                            onChange={(e) => handleTimeChange(e, data._id)}
                            step="900" // Step in seconds (e.g., 900s = 15 minutes)
                          />
                        ) : (
                          <>{data?.endTime}</>
                        )}
                      </TableCell>
                      <TableCell>{data?.totalCost}</TableCell>
                      <TableCell className="flex items-center justify-end gap-2">
                        {editingId == data?._id ? (
                          <>
                            <Button
                              variant="ghost"
                              className="border bg-red-600 hover:border-red-600"
                              size="icon"
                              onClick={() => toggleEdit(data._id)}
                            >
                              <IconCancel className="size-5 text-white" />
                            </Button>
                            <Button
                              variant="ghost"
                              className="border bg-green-600 hover:border-green-600"
                              size="icon"
                              onClick={() => handleSave(data._id)}
                            >
                              <Save className="size-5 text-white" />
                            </Button>
                          </>
                        ) : (
                          <Button
                            variant="ghost"
                            className="border bg-green-600 hover:border-green-600"
                            size="icon"
                            onClick={() => toggleEdit(data._id)}
                          >
                            <Pencil className="size-5 text-white" />
                          </Button>
                        )}
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

export default ManageReturnCar;
