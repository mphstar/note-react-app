import React from "react";

const CardCatatan = ({ catatan, onArsipOrMove, isCatatan = false }) => {
  return (
    <div
      className="flex flex-col w-full h-fit md:h-full px-3 py-4 bg-white border-2 hover:border-blue-500 duration-300"
    >
      <p className="font-bold">{catatan.title}</p>
      <p className="text-xs text-gray-400">{catatan.createdAt}</p>
      <p className="mt-2 text-sm flex-1">{catatan.body}</p>
      <div className="flex flex-row gap-3 mt-6">
        <button className="flex-1 bg-red-500 hover:bg-red-600 duration-300 text-white py-1.5 rounded-md">
          Hapus
        </button>
        <button onClick={() => onArsipOrMove(catatan.id)} className="flex-1 bg-orange-400 hover:bg-orange-500 duration-300 text-white py-1.5 rounded-md">
          {isCatatan ? "Pindahkan" : "Arsipkan"}
        </button>
      </div>
    </div>
  );
};

export default CardCatatan;
