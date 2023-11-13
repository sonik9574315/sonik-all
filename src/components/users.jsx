import axios from "axios";
import { useState , useEffect } from "react";
import { Link } from "react-router-dom";

const Users = (props) => {

   const [users , setUsers] = useState ([]);
   
   
    // useEffect(() => {
    //     (async () => {
    //         let response = await axios.get('https:///reqres.in/api/users')
         
    //         setUsers(response);
    //     })();
    // },[]);
    useEffect(() => {
        (async () => {
          const response =  await axios.get('https:///reqres.in/api/users')
           setUsers(response.data.data);
        })();
    },[])
// useEffect(()=>{

//  (
//     async()=>{
           
//     }
//  )();
// })

   
    return ( <>
         <button onClick={handleCreate} className="btn btn-lg btn-primary">ایجاد </button>
       <div className=" row">
        { 
    users.map((user)=>{
            return (
              
                <div className="col-4 text-center p-4">
                    <img src={user.avatar} style={{borderRadius:'50%' , whith:'100px' }} alt="" />
                   <Link to={`/users/${user.id}`}>
                   <h4>{user.first_name} {user.last_name}</h4>
                   </Link>
                    <h5>{user.email}</h5>
                    <div className="row">
                        <div className="col-6">
                            <buttun onClick={()=>handleUpdate(user)}className="btn btn-sm btn-info">به روز رسانی</buttun>
                        </div>
                        <div className="col-6">
                            <buttun onClick={()=>handleDelete(user)}className="btn btn-sm btn-danger">  حذف</buttun>
                        </div>
                    </div>
                </div> 
            )
        })
        }
       </div>
    </> );
async function handleCreate(){
    let newUser={
        first_name: 'soheil',
        last_name:'nik',
        email :'...',
        avatar:'....'
    };
    const response= await axios.post('https:///reqres.in/api/users', newUser);
    setUsers(response);
};
async function handleUpdate(user){
    user.first_name='soheil';
    await axios.put(`https:///reqres.in/api/users/${user.id}`,user);
    const updateUser= [...users];
    const index = updateUser.indexOf(user);
    updateUser[index]={...user};
    setUsers(updateUser);
  
    // console.log(response);
}
 async function handleDelete(user){
    await axios.delete(`https:///reqres.in/api/users/${user.id}`);
    const newUser=users.filter((p)=>p.id!==user.id);
    setUsers(newUser);
}



}








 
export default Users;