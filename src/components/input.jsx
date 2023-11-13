const Input = ({name,value,label,onChange}) => {
    return ( 
    <>
    
    <div className="mb-3">
            <label htmlFor="email" >{label}</label>
            <input onChange={onChange}
             value={value} 
             id={name} name={name}
             type="text" 
             className="form-control" />
    </div>
             </> 
             );
}
 
export default Input;