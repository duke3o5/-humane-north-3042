// import { Checkbox, CheckboxGroup, Stack } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

export const AdminSideBar = () => {
  const [searchParams, setSerachparams] = useSearchParams();
  const initialPage = +(searchParams.get("page"));
  const [page, setPage] = useState(initialPage || 1);
  const initCategory = searchParams.getAll("category");
  const [category, setCategory] = useState(initCategory || []);
  // const[page,setPage]=useState(1)
  const products = useSelector((store) => store.AdminReducer.AdminData);

  const handlePagination = (val) => {
    setPage((pre) => pre + val);
    console.log("hlo");
  };

  const handleFiltering = (e) => {
    const newCategory = [...category];
    if (newCategory.includes(e.target.value)) {
      newCategory.splice(newCategory.indexOf(e.target.value), 1);
    } else {
      newCategory.push(e.target.value);
    }

    setCategory(newCategory);
  };

  useEffect(() => {
    let params = {
      category,
      page,
    };

    setSerachparams(params);
  }, [category, page]);

  return (
    // <div className="adminSideBar">
    //   <CheckboxGroup colorScheme="green" defaultValue={["naruto", "kakashi"]}>
    //     <Stack spacing={[1, 5]} direction={["column", "row"]}>
    //       <Checkbox value="naruto">Naruto</Checkbox>
    //       <Checkbox value="sasuke">Sasuke</Checkbox>
    //       <Checkbox value="kakashi">Kakashi</Checkbox>
    //     </Stack>
    //   </CheckboxGroup>
    // </div>

    <DIV>
      <h3>Filter by Category</h3>
      <div>
        <input
          type="checkbox"
          value={"Organic"}
          checked={category.includes("Organic")}
          onChange={handleFiltering}
        />
        <label>Organic</label>
        <br />
        <br />
        <input
          type="checkbox"
          value={"Fresho"}
          checked={category.includes("Fresho")}
          onChange={handleFiltering}
        />
        <label>Fresho</label>
        <br />
        <br />
        <input
          type="checkbox"
          value={"Hoovu Fresh"}
          checked={category.includes("Hoovu Fresh")}
          onChange={handleFiltering}
        />
        <label>Hoovu Fresh</label>
        <br />
        <br />
      </div>

      {/* pagination elements */}

      <div>
        <Button isDisabled={page === 1} onClick={() => handlePagination(-1)}>
          Previous
        </Button>
        <Button>{page}</Button>
        <Button onClick={() => handlePagination(1)}>Next</Button>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  /* position: fixed; */
  width: 25%;
  border-right: 1px solid gray;
  text-align: left;
  margin-left: 20px;

  label {
    margin-left: 5px;
  }

  input,
  label {
    font-size: larger;
  }
`;
