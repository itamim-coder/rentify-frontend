"use client";
import React from "react";

import { motion } from "framer-motion";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "./ui/animated-modal";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { Switch } from "./ui/switch";
import { Checkbox } from "./ui/checkbox";
import { toast } from "sonner";
import { useAddCarMutation } from "@/redux/api/carApi";
const items = [
  {
    id: "AC",
    label: "AC",
  },
  {
    id: "Bluetooth",
    label: "Bluetooth",
  },
  {
    id: "Long Range Battery",
    label: "Long Range Battery",
  },
  {
    id: "Wifi",
    label: "Wifi",
  },
] as const;

const AddCarForm = () => {
  const form = useForm({
    defaultValues: {
      name: "",
      description: "",
      color: "",
      isElectric: false,
      features: [],
      pricePerHour: 0,
    },
  });

  const [addCar] = useAddCarMutation();
  const onSubmit = async (data: any) => {
    try {
      // Convert pricePerHour to a number
      const modifiedData = {
        ...data,
        pricePerHour: Number(data.pricePerHour), // Convert to number
      };

      console.log(modifiedData);
      const res = await addCar(modifiedData).unwrap();
      console.log(res);
      if (res?.data?._id) {
        toast.success("Car Added Successfully");
      }

      // Handle response logic here if needed
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className=" flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
          <span className="">Add A Car</span>
        </ModalTrigger>
        <ModalBody>
          <ModalContent className="overflow-y-auto">
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              Add A{" "}
              <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                Car
              </span>{" "}
              now!
            </h4>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-2"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Car Name</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter a Car name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Details</FormLabel>
                      <FormControl>
                        <Textarea
                          type="text"
                          placeholder="Car Details"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="color"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Car Color</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="Car Color" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="isElectric"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Is Electric</FormLabel>
                      <br />
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormLabel>Select Features</FormLabel>
                {items.map((item) => (
                  <FormField
                    key={item.id}
                    control={form.control}
                    name="features"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={item.id}
                          className="flex flex-row items-start space-x-3 space-y-0"
                        >
                          {" "}
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(item.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, item.id])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== item.id
                                      )
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">
                            {item.label}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
                <FormField
                  control={form.control}
                  name="pricePerHour"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Price Per Hour</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          min={0}
                          placeholder="Price"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <button
                  type="submit"
                  className="bg-black text-white dark:bg-white dark:text-black text-sm px-4 py-2 rounded-md border border-black w-full"
                >
                  Submit
                </button>
              </form>
            </Form>
          </ModalContent>
          {/* <ModalFooter className="gap-4"></ModalFooter> */}
        </ModalBody>
      </Modal>
    </div>
  );
};

export default AddCarForm;
