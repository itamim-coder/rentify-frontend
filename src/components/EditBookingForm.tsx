"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useBookingStatusMutation } from "@/redux/features/bookings/bookingApi";
import { toast } from "sonner";

interface EditBookingFormProps {
  bookingStatus: string; // Accept the booking status as a prop
}

const EditBookingForm = ({ bookingStatus, id }) => {
  //   console.log(id);
  const form = useForm({
    defaultValues: {
      bookingStatus: bookingStatus || "", // Set the default value to the passed bookingStatus
    },
  });
  const [updateBookingStatus] = useBookingStatusMutation();
  const handleStatusChange = async (value: string) => {
    form.setValue("bookingStatus", value);

    try {
      const res = await updateBookingStatus({
        id,
        bookingStatus: value,
      }).unwrap();
      if (res?.statusCode == 200) {
        toast.success("Status Updated Successfully");
      }
    } catch (error) {
      console.error("Failed to update  status:", error);
    }
  };

  return (
    <div className=" ">
      <Form {...form}>
        <form className="w-2/3 space-y-2 ">
          <FormField
            control={form.control}
            name="bookingStatus"
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={(value) => {
                    field.onChange(value);
                    handleStatusChange(value); // Trigger the status change handler
                  }}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select booking status" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Approved">Approved</SelectItem>
                    <SelectItem value="Pending">Pending</SelectItem>
                    <SelectItem value="Cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
};

export default EditBookingForm;
