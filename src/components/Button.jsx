import React, { useState } from "react";

const Button = () => {

    const[search,setSearch] = useState("");
    const handleSearch= (event)=>{
        setSearch(event.target.value);
        console.log(event.target.value);
    };
    

  return (
    <>
      <div className="flex flex-row flex-wrap justify-between">
        <div className="mb-3 md:w-96 mx-auto">
          <div className="relative mb-4 flex w-full flex-wrap items-stretch">
            <input
              type="search"
              className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon3"
              value={search}
              onChange={handleSearch}
            />
          </div>
        </div>
        <div>
          <button className="bg-[#F3C6B7] hover:bg-[#f6ae96] text-red-400 font-bold py-2 px-4 rounded">
            Download CSV
          </button>
        </div>
      </div>
    </>
  );
};

export default Button;
