import { Button, Td, Tr } from "@chakra-ui/react";
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
      <Tr>
        <Td>{id + 1}</Td>
        <Td>
          <img width={"40%"} src={Image} alt={name} />
        </Td>
        <Td
          style={{
            whiteSpace: "normal",
            wordWrap: "break-word",
          }}
        >
          {name}
        </Td>
        <Td>{category}</Td>
        <Td>{Price}</Td>
        <Td
          style={{
            whiteSpace: "normal",
            wordWrap: "break-word",
          }}
        >
          {Weight}
        </Td>
        <Td>{rating}</Td>
        <Button
          style={{
            whiteSpace: "normal",
            wordWrap: "break-word",
            color: "white",
            alignItems: "center",
            backgroundColor: "green",
          }}
        >
          Edit
        </Button>
      </Tr>
    </>
  );
};
