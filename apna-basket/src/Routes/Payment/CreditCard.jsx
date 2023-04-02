import React, { useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Image,
  Button,
  Checkbox,
  Text,
  HStack,
  InputGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
// import { InfoIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";

// import { CardImages } from "../../Utils/data/CardImages";

import { useNavigate } from "react-router-dom";
const InfoIcon ="https://cdn-icons-png.flaticon.com/512/471/471713.png";
// import { successPayment } from "../../../redux/CartPage/action";

export const CardImages = [
  {
    id: 1,
    src: "https://adn-static1.nykaa.com/media/wysiwyg/Payments/WeAccept/VISA.svg",
    alt: "visa card image",
  },
  {
    id: 2,
    src: "https://adn-static1.nykaa.com/media/wysiwyg/Payments/WeAccept/mastercard.svg",
    alt: "master card image",
  },
  {
    id: 3,
    src: "https://adn-static1.nykaa.com/media/wysiwyg/Payments/WeAccept/Rupay.svg",
    alt: "Rupay card image",
  },
  {
    id: 3,
    src: "https://adn-static1.nykaa.com/media/wysiwyg/Payments/WeAccept/AMEX.svg",
    alt: "American card image",
  },
];

const CreditCard = ({totalCartPrice}) => {
  const toast = useToast();
  const [cardNumber, setcardNumber] = useState("");
  const [expiry, setExipry] = useState("");
  const [cvv, setcvv] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleBtn = () => {
    if (cardNumber.length !== 16) {
      alert("card number should be 16 digits without any spaces");
      return;
    }
    if (!expiry.includes("/")) {
      alert("Expiry should be a valid number");
      return;
    }
    // totalCartPrice

    if (cvv.length !== 3 && typeof Number(cvv) !== Number) {
      alert("invalid cvv number");
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
  
  // const { totalCartPrice } = useSelector((state) => state.CartReducer);
// const totalCartPrice=0;
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
      <Heading as="h1"  fontSize="20px" fontWeight="600">
        Credit/Debit Card
      </Heading>
      <hr />
      <Flex gap="2">
        <Text
          ontFamily="Inter"
          fontSize="10px"
          fontWeight="600"
          color="gray.500"
        >
          WE ACCEPT
        </Text>
        <HStack spacing="2">
          {CardImages.map(({ id, src, alt }) => (
            <Image key={id} src={src} width="" height="" alt={alt} />
          ))}
        </HStack>
      </Flex>
      <Input
        placeholder="Card Number"
        type="number"
        isRequired={true}
        onChange={(e) => setcardNumber(e.target.value)}
      />
      <Flex gap="2">
        <Input
          placeholder="Expiry (MM/YY)"
          type="text"
          isRequired={true}
          onChange={(e) => setExipry(e.target.value)}
        />
        <InputGroup>
          <InputRightElement
            pointerEvents="none"
            children={<img width="40%" src={InfoIcon}/>}
          />
          <Input
            type="text"
            placeholder="CVV"
            isRequired={true}
            onChange={(e) => setcvv(e.target.value)}
          />
        </InputGroup>
      </Flex>
      <Flex gap="1">
        <Checkbox colorScheme="pink" isRequired={true}>
          Save this card securely for future
        </Checkbox>
        <Text
          
          fontSize="12px"
          fontWeight="500"
          color="#388DFF"
          marginTop="1"
        >
          Know more
        </Text>
      </Flex>
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
        onClick={handleBtn}
      >
        Pay ₹ {totalCartPrice.toFixed(1)}
      </Button>
    </Flex>
  );
};

export default CreditCard;
