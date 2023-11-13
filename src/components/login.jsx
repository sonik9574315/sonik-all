import React, { Component  } from 'react';
import * as yup from 'yup';
import Input from './input';
import '../../src/css/login.css'
class Login extends Component {

    // email=createRef();
    // password = createRef();
    state={
     account:{
       email:'',
       password: ''
     },
    errors:{

    }
     }



   schema = yup.object().shape({
     email:yup.string().email('فرمت ایمیل صحیح نمی باشد').required(),
     password:yup.string().min(4 , ' رمز باید حداقل 4 کارکتر داشته باشد'),


   })  ;


   validate = async ()=>{
      try {
       const result= await this.schema.validate(this.state.account,{ abortEarly:false});
        return result;
      } catch (error) {
        this.setState({errors:error.errors});
      }

   }

    
    handleSubmit= async (e)=>{
        e.preventDefault();
        const result= await this.validate();
        console.log(result);
        this.props.history.replace('/home');
    }

    handleChange=(e)=>{
        const input = e.currentTarget;
        const account = {...this.state.account};
        account[input.name]=account.value;
        this.setState({account});
    }



    render() { 
        return (<> 
       
       <div className="hurnes">
       <form onSubmit={this.handleSubmit}>
        <Input onChange={this.handleChange}   label='ایمیل' name='email' value={this.state.account.email}/>
        <Input onChange={this.handleChange}   label='رمز' name='password' value={this.state.account.password}/>
        <buttun  className="btn btn-primary btn-soheil">ورود</buttun>
       </form>
       </div>
        </>);
    }
}
 
export default Login;


//  {/* {
//           this.state.errors.length !==0 && (
//             <div className='alert alert-danger'>
//               <ul>
//                          { this.state.errors.map((e,i)=><li key={i}>{e}</li>)};
//                 </ul> 

//             </div>
//           )
//         } */}