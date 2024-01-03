import React from "react";

const Sidebar = ({ querySearch, onChangeSearch }) => {
  return (
    <div className="flex w-full h-fit flex-col gap-3 md:flex-row items-center py-4 border-b-2 px-4">
      <p className="font-bold flex-1">Notes App</p>
      <div className="flex flex-row gap-3 w-full md:w-fit">
        
        <input
          className="border-2 px-4 w-full md:w-fit rounded-lg py-2 outline-none"
          value={querySearch}
          onChange={onChangeSearch}
          placeholder="Cari catatan"
          type="text"
        />
        <button className="bg-green-500 text-white hover:bg-green-600 px-3 rounded-md">Tambah</button>
      </div>
    </div>
  );
};

export default Sidebar;
