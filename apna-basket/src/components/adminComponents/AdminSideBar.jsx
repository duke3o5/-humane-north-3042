import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import "../../Styling/Admin/admin.css";
// import styled from "styled-components";

export const AdminSideBar = () => {
  const [searchParams, setSerachparams] = useSearchParams();
  const initialPage = +searchParams.get("page");
  const [page, setPage] = useState(initialPage || 1);
  const initCategory = searchParams.getAll("category");
  const [category, setCategory] = useState(initCategory || []);
  // const[page,setPage]=useState(1)
  const { AdminData, isLoading, isError } = useSelector(
    (store) => store.AdminReducer
  );

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
    <>
      <div className="adminSideBarHeading">
        <h3>Filter by Category</h3>
      </div>
      <div className="adminSideBar">
        <div>
          <input
            type="checkbox"
            value={"Organic"}
            checked={category.includes("Organic")}
            onChange={handleFiltering}
          />
          <label>Organic</label>
        </div>

        <div>
          <input
            type="checkbox"
            value={"Fresho"}
            checked={category.includes("Fresho")}
            onChange={handleFiltering}
          />
          <label>Fresho</label>
        </div>

        <div>
          <input
            type="checkbox"
            value={"Hoovu Fresh"}
            checked={category.includes("Hoovu Fresh")}
            onChange={handleFiltering}
          />
          <label>Hoovu Fresh</label>
        </div>
      </div>

      {/* pagination elements */}

      <div className="buttonDiv">
        <button
          className="pageButton"
          disabled={page === 1}
          onClick={() => handlePagination(-1)}
        >
          {isLoading ? "Wait" : "Previous"}
        </button>
        <button className="pageButton">{page}</button>
        <button className="pageButton" onClick={() => handlePagination(1)}>
          {isLoading ? "Wait" : "Next"}
        </button>
      </div>
    </>
  );
};

// const DIV = styled.div`
//   /* position: fixed; */
//   width: 25%;
//   border-right: 1px solid gray;
//   text-align: left;
//   margin-left: 20px;

//   label {
//     margin-left: 5px;
//   }

//   input,
//   label {
//     font-size: larger;
//   }
// `;
