import React, { useEffect, useState } from "react";
import { Flex, Heading, Button, useToast, Spinner } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export let price = 0;
export let cartCount = 0;

const Cod = () => {
  const [cart, Cart] = useState([]);
  const [total, Total] = useState(0);
  const [loading, setLoading] = useState(false);

  const toast = useToast();
  const navigate = useNavigate();

  const HandleClick = () => {
    if (total > 0) {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        
        toast({
          description: "Payment Successfully",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
        navigate("/");
      }, 2500);
    }
  };

  function getCart() {
    axios
      .get("https://big-basket-api.onrender.com/Cart")
      .then((res) => Cart(res.data));
  }

  // console.log(cart);
  useEffect(() => {
    getCart();
  }, [cart]);

  useEffect(() => {
    let sum = 0;
    cart.forEach((el) => (sum += el.Price * el.qty));
    Total(sum);
    price = total;
    // console.log(price);
    cartCount = cart.length;
  }, [cart]);

  if (loading) {
    return (
      <Spinner
        marginTop={"90px"}
        marginRight={"30px"}
        size={"xl"}
        color="green"
      />
    );
  }
  return (
    <Flex
      gap="2"
      direction="column"
      border="0px solid red"
      width={{
        base: "",
        sm: "",
        md: "20.75rem",
        lg: "18rem",
        xl: "25.75rem",
        "2xl": "25.75rem",
      }}
    >
      <Heading as="h1" fontSize="20px" fontWeight="600">
        Cash On Delivery
      </Heading>
      <hr />
      <Button
        color="#FFFFFF"
        fontSize="16px"
        fontWeight="600"
        height="49px"
        padding="12px 12px 12px 12px"
        backgroundColor="#689f38"
        _hover={{
          color: "white",
          backgroundColor: "#689f38",
        }}
        onClick={HandleClick}
      >
        Place order
      </Button>
    </Flex>
  );
};

export default Cod;
