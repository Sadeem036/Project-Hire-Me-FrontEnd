import React, { useEffect, useState,useMemo } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const CustomerRequest = () => {
  
  const [category, setCategory] = useState([]);
  const [id, setId] = useState("");
  const [subCategory, setSubCategory] = useState([]);
  const [latitude,setLatitude] = useState("")
  const [longitude,setLongitude] = useState("")
  const userToken = Cookies.get("customerToken");


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


  const serviceId = Number(id.split(" ")[0]);
 
  
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
    setId(e.target.value);

  };

  const [sub_id,setSubId] = useState("")
  const [matchEmp,SetMatchEmp] = useState([])

  const onChangehandler = async (e) => {
    setSubId(e.target.value);
    navigator.geolocation.getCurrentPosition((position)=>{
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
       
    }) 
  

}
  const sub_category_id = Number(sub_id.split(" ")[0])

  const getEmpHandler = ()=>{
    axios({
        method:'get',
        headers:{
            "Content-Type":"Application/json"
        },
        url:`http://localhost:5000/match-emp/match-emp/${serviceId}/${sub_category_id}`,
    }).then((res) => {
        console.log(res.data);
        SetMatchEmp(res.data)

    }).catch(error => console.log(error))
  }
   

  const sendRequestHandler = async ()=>{
    for(let i=0; i<matchEmp.length; i++){
        const emp_id = matchEmp[i]
            await axios({
                method:'post',
                headers:{
                    "Content-Type":"Application/json",
                    Authorization:`Bearer ${userToken}`
                },
                url:"http://localhost:5000/request/request",
                data:{
                    "service_category_id":serviceId,
                    "sub_category_id":sub_category_id,
                    "latitude":latitude,
                    "longitude":longitude,
                    "emp_id":emp_id
                },
                
            }).then(()=> console.log("Request Sent"))
            .catch(error => console.log(error))}
    }

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
            <button onClick={getEmpHandler}>get employee</button>
            <button onClick={sendRequestHandler}>send request</button>
            </div> 
            )
        })}

        { console.log("match Employee", matchEmp)}
        
      
      </div>
    </div>
  );
};

export default CustomerRequest;
