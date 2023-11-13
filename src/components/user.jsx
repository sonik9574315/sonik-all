import axios from "axios";
import { useState,useEffect } from "react";
import { useParams  } from "react-router-dom";

const User = ({props}) => {
   
   const [user , setUser]= useState({});
   const para = useParams(props);
   console.log(para);
  
// //     console.log(response);

//    // console.log(props);
// //    useEffect(async()=>{
// //     const response= await axios.get(`https://reqres.in/api/users/${props.match.params.id }`);
// //     console.log(response);

// //    })
//    useEffect(() => {
//     (async () => {
//         const response= await axios.get(`https://reqres.in/api/users/${para.id}`);
//         setUser(response.data.data);
//         console.log(setUser);
//     })();
// },[])

useEffect(()=>{
(async ()=>{
const response= await axios.get(`https://reqres.in/api/users/${para.id}`);
        setUser(response.data.data);
        console.log(setUser);
})();
},[])
     return (<>
 
    
    <img src={user.avatar} style={{borderRadius:'50%' , whith:'100px' }} alt="" />
                
                   <h4>{user.first_name} {user.last_name}</h4>
                   
                     <h5>{user.email}</h5> 
                     <div className="btn btn-danger mt-3"> بازگشت</div>
                    </>)
 }
 export default User;