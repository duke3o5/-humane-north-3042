import React, { useEffect, useState } from "react";
import { AdminSideBar } from "./AdminSideBar";
import { useDispatch, useSelector } from "react-redux";
import { GetAdminData } from "../../Redux/AdminReducer/action";
import { AdminCard } from "./AdminCard";
import "../../Styling/Admin/admin.css";
import { useLocation, useSearchParams } from "react-router-dom";

export const AdminDataList = () => {
  // const [searchParams]= useSearchParams();
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const { AdminData, isLoading, isError } = useSelector(
    (store) => store.AdminReducer
  );

  useEffect(() => {
    const obj = {
      params: {
        category: searchParams.getAll("category"),
        _page: Number(searchParams.get("page")),
        _limit: 8,
      },
    };
    dispatch(GetAdminData(obj));
  }, [location.search]);

  return (
    <div className="mainDataListDiv">
      {/* Sidebar imported here*/}
      <AdminSideBar />

      <div className="adminGrid">
        {AdminData.map((el, i) => (
          <AdminCard key={i} {...el} id={i} />
        ))}
      </div>

      {/* Pagination Elements */}
    </div>
  );
};
