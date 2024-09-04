import DashboardLayout from "@/components/layouts/DashboardLayout";
import Container from "@/components/ui/Container";
import { UserPen } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useGetMyBookingQuery } from "@/redux/features/bookings/bookingApi";

const Profile = () => {
  const { data: bookingsData, isLoading } = useGetMyBookingQuery(undefined);
  console.log(bookingsData);
  return (
    <div className="flex md:flex-1 min-h-screen">
      <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full min-h-screen">
        <div className="h-20 w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 flex items-center">
          <img
            src="https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369989.png"
            alt=""
            width={80}
            height={30}
          />
          <div>
            <h3 className="text-md font-bold">John Doe</h3>
            <p className="text-xs">123 Main St, City, Country</p>
          </div>
        </div>

        <div className="md:flex gap-2  md:flex-1">
          <div className="h-full w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 px-3 py-2">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold ">Profile Information</h2>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">
                    <UserPen />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle> Edit profile</DialogTitle>
                    <DialogDescription>
                      Make changes to your profile here. Click save when you're
                      done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Name
                      </Label>
                      <Input
                        id="name"
                        defaultValue="Pedro Duarte"
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="username" className="text-right">
                        Username
                      </Label>
                      <Input
                        id="username"
                        defaultValue="@peduarte"
                        className="col-span-3"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Save changes</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
            <div className="flex flex-col gap-y-4 mt-4">
              <div>
                <p className="text-md font-semibold text-gray-700">Full Name</p>
                <p className="text-sm">John Doe</p>
              </div>
              <div>
                <p className="text-md font-semibold text-gray-700">Email : </p>
                <p className="text-sm">itamim12202@gmail.com</p>
              </div>

              <div>
                <p className="text-md font-semibold text-gray-700">Phone : </p>
                <p className="text-sm">+880123456</p>
              </div>
              <div>
                <p className="text-md font-semibold text-gray-700">
                  Address :{" "}
                </p>
                <p className="text-sm">123 Main St, City, Country</p>
              </div>
              <div>
                <p className="text-md font-semibold text-gray-700">Role</p>
                <p className="text-sm">User</p>
              </div>
            </div>
          </div>
          <div className="h-full w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 px-3 py-2 min-h-80">
            <h2 className="text-lg font-bold mt-1">Latest Bookings</h2>
            <div>
              {bookingsData?.statusCode == 404 ? (
                <div className="">
                  <p className="mt-5 text-2xl font-semibold text-red-600">
                    You Have No Bookings!
                  </p>
                </div>
              ) : (
                <div>
                  {bookingsData?.data?.map((data) => (
                    <div className="my-2  bg-white flex justify-between items-center p-1 rounded-lg">
                      <div className="flex gap-x-2">
                        <img
                          src="https://creativelayers.net/themes/boxcar-html/images/resource/add-car3.jpg"
                          alt=""
                          // width={80}
                          // height={40}
                          className="object-contain h-16 rounded-lg"
                        />
                        <div>
                          <p className="text-md font-bold">{data?.car?.name}</p>
                          <p className="text-xs font-semibold font-base">
                            {new Date(data?.date).toISOString().split("T")[0]}
                          </p>
                        </div>
                      </div>
                      <div className="">
                        <span className="flex gap-x-2 justify-between text-xs font-bold bg-green-300 p-1 rounded-md mb-2">
                          <p>Start Time</p>
                          <p className="text-right">: {data?.startTime}</p>
                        </span>
                        <span className="flex gap-x-2 justify-between text-xs font-bold bg-red-300 p-1 rounded-md">
                          <p>End Time</p>
                          <p className="text-right">: {data?.endTime}</p>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
