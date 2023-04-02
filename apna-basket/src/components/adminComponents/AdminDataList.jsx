import React, { useEffect, useState } from "react";
import { AdminSideBar } from "./AdminSideBar";
import { AdminNavbar } from "./AdminNavbar";
import { useDispatch, useSelector } from "react-redux";
import { GetAdminData } from "../../Redux/AdminReducer/action";
import { AdminCard } from "./AdminCard";
import "../../Styling/Admin/admin.css";
import { Spinner } from "@chakra-ui/spinner";
import { useLocation, useSearchParams } from "react-router-dom";

export const AdminDataList = () => {
  // const [searchParams]= useSearchParams();
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const { Products, isLoading, isError } = useSelector(
    (store) => store.AdminReducer
  );

  useEffect(() => {
    const obj = {
      params: {
        category: searchParams.getAll("category"),
        _page: Number(searchParams.get("page")),
        _limit: 9,
      },
    };
    dispatch(GetAdminData(obj));
  }, [location.search]);

  return (
    <div className="mainDataListDiv" style={{marginBottom: "130px"}}>
      <AdminNavbar/>
      {/* Sidebar imported here*/}
      <AdminSideBar />

      <div className="adminGrid">
        {isLoading ? (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="green.200"
            color="#84c225"
            size="xl"
            style={{ alignItems: "center", margin: "auto" }}
          />
        ) : (
          Products.map((el, i) => <AdminCard key={i} {...el} id={el.id} />)
        )}
      </div>

      {/* Pagination Elements */}
    </div>
  );
};
