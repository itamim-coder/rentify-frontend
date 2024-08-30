import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectLocation() {
  return (
    <Select>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select a location" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="est">Dhaka</SelectItem>
          <SelectItem value="cst">Chittagong</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
