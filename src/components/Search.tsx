import React from "react";
import { SelectLocation } from "./SelectLocation";
import { DatePick } from "./DatePick";

function Search() {
  return (
    <>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 bg-white p-3 rounded-xl">
        {/* <div className="border border-black rounded-md"> */}
        <SelectLocation />
        {/* </div> */}
        <DatePick />
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Find A Car
        </button>
      </div>
    </>
  );
}

export default Search;
