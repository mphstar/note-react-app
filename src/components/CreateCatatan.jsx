import React from "react";

const CreateCatatan = ({
  isShow = false,
  handleShow,
  judul,
  catatan,
  onFormChange,
  handleForm,
  sisaKarakter,
}) => {
  return (
    <>
      <div
        onClick={handleShow}
        className={`flex h-screen w-screen fixed duration-300 ease-in-out bg-black ${
          isShow
            ? "opacity-60 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } z-[10]`}
      ></div>
      <div
        className={`w-[90%] duration-300 ease-in-out ${
          isShow ? "scale-100" : "scale-0"
        } max-w-[400px] h-fit min-h-[400px] overflow-y-auto translate-x-[50%] right-[50%] rounded-lg translate-y-[50%] bottom-[50%] flex bg-white flex-col fixed z-[20]`}
      >
        {/* title */}
        <div className="flex flex-row border-b-2 py-4 px-6">
          <p className="font-semibold">Tambah Catatan</p>
        </div>
        <form onSubmit={handleForm} action="">
          <div className="flex flex-col px-6 py-4 ">
            <div className="flex flex-row items-center">
              <label className="font-semibold py-2 flex-1" htmlFor="judul">
                Judul <span className="text-red-500">*</span>
              </label>
              <p className="text-sm text-red-500">
                Sisa karakter: {sisaKarakter}
              </p>
            </div>
            <input
              required
              className="w-full border-2 rounded-lg py-3 px-2"
              value={judul}
              onChange={onFormChange}
              maxLength={50}
              type="text"
              name="judul"
              id="judul"
            />
            <label className="font-semibold py-2" htmlFor="catatan">
              Isi Catatan <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              className="w-full min-h-[100px] border-2 rounded-lg py-3 px-2"
              type="text"
              value={catatan}
              onChange={onFormChange}
              name="catatan"
              id="catatan"
            ></textarea>
            <div className="grid grid-cols-2 gap-3 mt-4">
              <button
                onClick={handleShow}
                className="px-2 py-2 bg-red-500 rounded-md text-white hover:bg-red-600"
              >
                Tutup
              </button>
              <button
                type="submit"
                className="px-2 py-2 bg-green-500 rounded-md text-white hover:bg-green-600"
              >
                Simpan
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateCatatan;
