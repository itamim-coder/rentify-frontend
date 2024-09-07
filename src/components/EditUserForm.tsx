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
import { Button } from "./ui/button";
import { Eye } from "lucide-react";

interface EditUserFormProps {
  bookingStatus: string; // Accept the booking status as a prop
}

import { useEffect } from "react";


const EditUserForm = ({ user, onClose }) => {
  const { control, setValue } = useForm({
    defaultValues: {
      blocked: user?.blocked || false,
      admin: user?.role === "admin" || false,
    },
  });

  // Update form values when the user changes
  useEffect(() => {
    setValue("blocked", user?.blocked || false);
    setValue("admin", user?.role === "admin" || false);
  }, [user, setValue]);

  return (
    <div className="flex items-center justify-center">
      <Modal>
        <ModalTrigger className="p-0 m-0">
          <Button variant="ghost" className="border hover:border-red-600 bg-blue-500" size="icon">
            <Eye className="size-5 text-white" />
          </Button>
        </ModalTrigger>
        <ModalBody>
          <ModalContent className="overflow-y-auto">
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                User Info Update
              </span>
            </h4>

            <Form {...control}>
              <form className="space-y-2">
                <FormField
                  control={control}
                  name="blocked"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Blocked</FormLabel>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name="admin"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Admin</FormLabel>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button type="submit" className="bg-black text-white dark:bg-white dark:text-black text-sm px-4 py-2 rounded-md border border-black w-full">
                  Submit
                </Button>
                {/* Add Close Button */}
                <Button onClick={onClose} className="bg-red-500 text-white w-full mt-2">
                  Close
                </Button>
              </form>
            </Form>
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default EditUserForm;



