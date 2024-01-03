import React from "react";
import CardCatatan from "../components/CardCatatan";

const CatatanLayout = ({ title, listCatatan, onDeleteCatatan, onArsip, isCatatan = false }) => {
  return (
    <div className="px-4 mt-6">
      <h1 className="font-bold text-2xl">{title}</h1>
      {listCatatan.length != 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 mt-6 gap-4">
          {listCatatan.map((item, index) => {
            return <CardCatatan onDeleteCatatan={onDeleteCatatan} onArsipOrMove={onArsip} key={item.id} catatan={item} isCatatan={isCatatan} />;
          })}
        </div>
      ) : (
        <p className="mt-3">Tidak ada catatan</p>
      )}
    </div>
  );
};

export default CatatanLayout;
