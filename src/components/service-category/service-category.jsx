import React, { useEffect, useState,useMemo } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const ServiceCategory = () => {
  const [category, setCategory] = useState([]);
  const userToken = Cookies.get("empToken");

  useEffect(() => {
    axios
      .get("http://localhost:5000/service/service-category", {
        headers: {
          "Content-Type": "Application/json",
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((res) => {
        const { data } = res;
        setCategory(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const [id, setId] = useState("");
  const [subCategory, setSubCategory] = useState([]);
  const getVal = Number(id.split(" ")[0]);
  console.log("getVal",getVal)
  
  const onClickHandler = async () => {
    
    console.log(id);
    await axios({
        method:'get',
        headers:{
            "Content-Type":"Application/json",
            Authorization:`Bearer ${userToken}`
        },
        url:`http://localhost:5000/service/sub-category/${getVal}`
    }
    ).then((res) => {
        const { data } = res;
        setSubCategory(data);
      })
      .catch((error) => console.log(error));
  };

  const changehandler = async (e) => {
    console.log("e.target.value", e.target.value);
    setId(e.target.value);

  };

  return (
    <div>
      <select value={id} onClick={onClickHandler } onChange={changehandler}>
        {category.map((data) => {
          return (
            <>
              <option>
                <p>{data.service_category_id} </p>
                <p>{data.service_category_name}</p>
              </option>
            </>
          );
        })}
      </select>
      <div>
        {subCategory.map((data) => {
          return (
            <>
            <p key={data.sub_category_id}>{data.sub_category_id} {data.sub_category_name}</p>
            </> )
        })}
      </div>
    </div>
  );
};

export default ServiceCategory;

