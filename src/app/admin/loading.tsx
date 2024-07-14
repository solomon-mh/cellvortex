import React from "react";
import { Loader2 } from "lucide-react";

const AdminLoadingPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Loader2 className=" size-12 animate-spin" />
      <p className=" text-xl text-lime-500 my-3">Loading ....</p>
    </div>
  );
};

export default AdminLoadingPage;
