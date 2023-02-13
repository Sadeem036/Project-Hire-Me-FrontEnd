import React, { useEffect, useState,useMemo } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Router, { useRouter } from "next/router";

const ServiceCategory = () => {
  const router = useRouter()
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
  const serviceId = Number(id.split(" ")[0]);
  console.log("ServiceId",serviceId)
  
  const onClickHandler = async () => {
    
    console.log(id);
    await axios({
        method:'get',
        headers:{
            "Content-Type":"Application/json",
            Authorization:`Bearer ${userToken}`
        },
        url:`http://localhost:5000/service/sub-category/${serviceId}`
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

  const [sub_id,setSubId] = useState("")

  const onChangehandler = async (e) => {
    setSubId(e.target.value);
  };

  const sub_category_id = Number(sub_id.split(" ")[0])
  console.log("subId",sub_category_id);

  const addSkills = async ()=>{
    if(sub_category_id > 0){
    
     await axios({
      method:'post',
      headers:{
        "Content-Type":"Application/json",
        "Authorization":`Bearer ${userToken}`
      },
      url:`http://localhost:5000/emp-service/emp-service`,
      data:{
        "service_category_id": serviceId,
        "sub_category_id":sub_category_id
      }
    }).then(res => {
      console.log("Skill Added")
      alert("Skill Added")
  })
    .catch(error => console.log("ERROREEEEEEEEE"))
  }}


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
            <div>
            <label> 
            <input type="radio" value={data.sub_category_id} onClick={onChangehandler}/>
            {data.sub_category_name}
            </label>
            <button onClick={addSkills}>ADD Skill</button>
            </div> 
            )
        })}
        
      
      </div>
    </div>
  );
};

export default ServiceCategory;









// </select>
// <div>
// <select value={sub_id} onChange={onChangehandler} onClick={addSkills} >
//   {subCategory.map((data) => {
//     return (
//       <>
//       <option key={data.sub_category_id} value={data.sub_category_id}> {data.sub_category_id} {data.sub_category_name}</option>
//       {console.log("sub_idddd",sub_id)}
//       </> 
//       )
//   })}
//   </select>