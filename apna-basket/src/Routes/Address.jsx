import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Box,
  Text,
  Input,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router";
// import  Topnavbar from "./Navbar/Topnavbar";
const Address = () => {
  const [name, setName] = useState("");
  const [lname, setLname] = useState("");
  const [number, setNumber] = useState("");
  const [aprtname, setAprtname] = useState("");
  const [house, setHouse] = useState("");
  const [street, setStreet] = useState("");
  const [landmark, setLandmark] = useState("");
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [pin, setPin] = useState("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (
      name === "" ||
      lname === "" ||
      number === "" ||
      aprtname === "" ||
      house === "" ||
      street === "" ||
      landmark === "" ||
      city === "" ||
      area === "" ||
      pin === ""
    ) {
      alert("Enter all field");
    } else {
      navigate("/payment");
    }
  };
  return (
    <Box width={"100%"}>
      {/* <Topnavbar /> */}
      <Box
        width={"75%"}
        margin="auto"
        mt="3rem"
        mb={"3rem"}
        p={"2rem"}
        border={"1px solid #e8e8e8"}
        bg="#f6f6f6"
        pb="5rem"
      >
        <Box>
          <Text textAlign={"left"} mt="10px" mb={"10px"}>
            Personal Details
          </Text>
          <FormControl
            isRequired
            variant={"outline"}
            display={"flex"}
            justifyContent="space-between"
          >
            <Box width={"33%"} mr={"10px"}>
              <FormLabel
                fontSize={"12px"}
                fontWeight={300}
                htmlFor="First-name"
              >
                Enter First Name
              </FormLabel>
              <Input
                fontSize={"12px"}
                width={"100%"}
                id="first-name"
                placeholder=""
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Box>
            <Box width={"33%"} mr={"10px"}>
              <FormLabel fontSize={"12px"} fontWeight={300} htmlFor="Last-name">
                Enter Last Name
              </FormLabel>
              <Input
                fontSize={"12px"}
                width={"100%"}
                id="first-name"
                placeholder=""
                required
                value={lname}
                onChange={(e) => setLname(e.target.value)}
              />
            </Box>
            <Box width={"33%"} mr={"10px"}>
              <FormLabel
                fontSize={"12px"}
                fontWeight={300}
                htmlFor="Contact-name"
              >
                Enter Contact Number
              </FormLabel>
              <Input
                fontSize={"12px"}
                width={"100%"}
                id="contact-number"
                placeholder=""
                required
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </Box>
          </FormControl>
        </Box>
        <Box>
          <Text textAlign={"left"} mt="10px" mb={"10px"}>
            Address Details
          </Text>
          <FormControl
            isRequired
            variant={"outline"}
            justifyContent="space-between"
          >
            <Box width={"100%"} display={"flex"}>
              <Box width={"25%"} mr={"10px"}>
                <FormLabel
                  fontSize={"12px"}
                  fontWeight={300}
                  htmlFor="Last-name"
                >
                  House Number
                </FormLabel>
                <Input
                  fontSize={"12px"}
                  width={"100%"}
                  id="first-name"
                  placeholder=""
                  required
                  value={house}
                  onChange={(e) => setHouse(e.target.value)}
                />
              </Box>
              <Box width={"75%"} mr={"10px"}>
                <FormLabel
                  fontSize={"12px"}
                  fontWeight={300}
                  htmlFor="Last-name"
                >
                  Enter Appartment name
                </FormLabel>
                <Input
                  fontSize={"12px"}
                  width={"100%"}
                  id="first-name"
                  placeholder=""
                  required
                  value={aprtname}
                  onChange={(e) => setAprtname(e.target.value)}
                />
              </Box>
            </Box>
            <Box width={"100%"} display={"flex"} mt="1rem">
              <Box width={"50%"} mr={"10px"}>
                <FormLabel
                  fontSize={"12px"}
                  fontWeight={300}
                  htmlFor="Last-name"
                >
                  Enter Street Details
                </FormLabel>
                <Input
                  fontSize={"12px"}
                  width={"100%"}
                  id="first-name"
                  placeholder=""
                  required
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                />
              </Box>
              <Box width={"50%"} mr={"10px"}>
                <FormLabel
                  fontSize={"12px"}
                  fontWeight={300}
                  htmlFor="Last-name"
                >
                  Enter landmark for easy reach out
                </FormLabel>
                <Input
                  required={"required"}
                  fontSize={"12px"}
                  width={"100%"}
                  id="first-name"
                  placeholder=""
                  variant={"outline"}
                  _hover={{ bg: "white" }}
                  _expanded={{ bg: "white" }}
                  _focus={{ boxShadow: "#84c225" }}
                  focusBorderColor="#84c225"
                  colorScheme="white"
                  errorBorderColor="#84c225"
                  borderRadius="0"
                  borderWidth="0.025px"
                  value={landmark}
                  onChange={(e) => setLandmark(e.target.value)}
                />
              </Box>
            </Box>
            <Box width={"100%"} display={"flex"} mt="1rem">
              <Box width={"25%"} mr={"10px"}>
                <FormLabel
                  fontSize={"12px"}
                  fontWeight={300}
                  htmlFor="Last-name"
                >
                  City Name
                </FormLabel>
                <Input
                  fontSize={"12px"}
                  width={"100%"}
                  id="first-name"
                  placeholder=""
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </Box>
              <Box width={"50%"} mr={"10px"}>
                <FormLabel
                  fontSize={"12px"}
                  fontWeight={300}
                  htmlFor="Last-name"
                >
                  Area
                </FormLabel>
                <Input
                  fontSize={"12px"}
                  width={"100%"}
                  id="first-name"
                  placeholder=""
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                />
              </Box>
              <Box width={"25%"} mr={"10px"}>
                <FormLabel
                  fontSize={"12px"}
                  fontWeight={300}
                  htmlFor="Last-name"
                >
                  Pin Code
                </FormLabel>
                <Input
                  fontSize={"12px"}
                  width={"100%"}
                  id="first-name"
                  placeholder=""
                  required
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                />
              </Box>
            </Box>
            <Box float={"left"} m={"1rem 0 1rem 0.25rem "}>
              <Button variant={"outline"} onClick={handleSubmit}>
                Add Address
              </Button>
            </Box>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default Address;
