import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Spinner,
  Button,
} from "@chakra-ui/react";
import { AdminSideBar } from "./AdminSideBar";
import { useDispatch, useSelector } from "react-redux";
import { GetAdminData } from "../../Redux/AdminReducer/action";
import { AdminCard } from "./AdminCard";
import '../../Styling/Admin/admin.css';
import { useLocation, useSearchParams } from "react-router-dom";

export const AdminDataList = () => {
  // const [searchParams]= useSearchParams();
  const [searchParams] = useSearchParams();
  const location= useLocation();
  const dispatch = useDispatch();
  const { AdminData, isLoading, isError } = useSelector(
    (store) => store.AdminReducer
  );



  useEffect(() => {
    const obj={ params: {
      category: searchParams.getAll('category'),
      _page: Number(searchParams.get('page')),
      _limit: 5
    }
  }
    dispatch(GetAdminData(obj));
  }, [location.search]);


  return (
    <div style={{ width: "100%", margin: "auto" }}>
      {isLoading && (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      )}
      {isError && <h1>...OOPS! Somethis went wrong.</h1>}

      <div className="side-Table">
        {/* Sidebar imported */}

        <AdminSideBar />

        {/* table header */}
        <TableContainer width={"100%"}>
          <Table>
            <Thead>
              <Tr>
                <Th>S.NO</Th>
                <Th>Image</Th>
                <Th>Name</Th>
                <Th>Category</Th>
                <Th>Price</Th>
                <Th>Weight</Th>
                <Th>Rating</Th>
              </Tr>
            </Thead>
            <Tbody>
              {AdminData.map((el, i) => (
                <AdminCard key={i} {...el} id={i} />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </div>

      {/* Pagination Elements */}

     
    </div>
  );
};
