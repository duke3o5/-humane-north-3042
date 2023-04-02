import React, { useState } from "react";
import { Flex, Heading, Input, Button, useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
// import { successPayment } from "../../../redux/CartPage/action";
const Paytm = () => {
  const [number, setNumber] = useState(0);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  const handleBtn = () => {
    if (number.length !== 10) {
      alert("Please enter a valid 10 digit mobile number");
      return;
    }
    setLoading(true);

    toast({
      description: "Payment Successfully",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "top-right",
    });

    setTimeout(() => {
      // dispatch(successPayment());
      navigate("/");
    }, 2500);
  };
  if (loading) {
    return <Heading>loading....</Heading>;
  }
  return (
    <Flex
      gap="2"
      direction="column"
      border="px solid red"
      width={{
        base: "",
        sm: "",
        md: "",
        lg: "25.75rem",
        xl: "25.75rem",
        "2xl": "25.75rem",
      }}
    >
      <Heading as="h1" fontSize="20px" fontWeight="600">
        Paytm Wallet
      </Heading>
      <hr />
      <Input
        placeholder="Phone Number"
        type="number"
        isRequired={true}
        onChange={(event) => setNumber(event.target.value)}
      />
      <Button
        onClick={handleBtn}
        color="#FFFFFF"
      
        fontSize="16px"
        fontWeight="600"
        height="49px"
        padding="12px 12px 12px 12px"
        backgroundColor="#689f38"
        _hover={{
          color: "#FFFFFF",
          backgroundColor: "#689f38",
        }}
      >
        Link
      </Button>
    </Flex>
  );
};

export default Paytm;