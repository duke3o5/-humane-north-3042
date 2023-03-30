import { Button, td, Tr } from "@chakra-ui/react";
import React from "react";

export const AdminCard = ({
  Image,
  name,
  rating,
  category,
  Price,
  Weight,
  id,
}) => {
  return (
    <>
      <tr>
        <td>{id + 1}</td>
        <td>
          <img width={"40%"} src={Image} alt={name} />
        </td>
        <td
          style={{
            whiteSpace: "normal",
            wordWrap: "break-word",
          }}
        >
          {name}
        </td>
        <td>{category}</td>
        <td>{Price}</td>
        <td
          style={{
            whiteSpace: "normal",
            wordWrap: "break-word",
          }}
        >
          {Weight}
        </td>
        <td>{rating}</td>
        <button
          style={{
            whiteSpace: "normal",
            wordWrap: "break-word",
            color: "white",
            alignItems: "center",
            backgroundColor: "green",
          }}
        >
          Edit
        </button>
      </tr>
    </>
  );
};
