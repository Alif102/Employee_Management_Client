import { useState } from "react";
import {  useNavigate } from "react-router-dom";
// import UseAuth from "./Hooks/UseAuth";
import toast from "react-hot-toast";
// import { saveUser } from "../../api/Auth";
// import { imageUpload } from "../../api/utils";
import UseAuth from "../../Hooks/UseAuth";
const SignUp = () => {

    const navigate = useNavigate();
  const [registerError, setRegisterError] = useState('');
  const [sucess, setSuccess] =useState('');

  const {createUser, handleUpdateProfile} = UseAuth();


    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        role: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };
    
      const handleSubmit =async (e) => {
        e.preventDefault();
        // Add your form submission logic here using the formData state
        console.log('Form submitted:', formData);
      



      fetch('http://localhost:5000/users', {
        method: 'POST',
        headers:{
          'content-type': 'application/json'
        }, 
        body : 
          JSON.stringify(formData )
        
      })
  
      
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })

      // rester error
    setRegisterError('');
    setSuccess('');

     if(!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&+=!])[A-Za-z\d@#$%^&+=!]{6,}$/.test(password)){
      setRegisterError('Password should be minimum six characters, at least one letter and one special character')
      return;
    }

    await createUser(email,password)

    // const dbresponse = await saveUser(result?.user)
    // console.log(dbresponse)
  

      handleUpdateProfile(name, imageData?.data?.display_url)
      .then(()=>{
        setSuccess('user created sucessfully')
        toast.success('User created successfully');
        navigate('/')
      })

    
    .catch(error => {
      console.error(error);
      setRegisterError(error.message)
    })
};

  return (
    <div className="form-container">
      <h2>User Registration</h2>
      <h1 className="text-2xl text-center ">Please Register </h1>
      {
        registerError && <p className="text-red-700">{registerError}</p>
      }
      {
        // sucess && <p className="text-green-600"> {sucess}</p>
        sucess && <h2 className="text-green-700 text-center text-2xl mt-3 mb-3">{sucess}</h2>
      }
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label htmlFor="role">Role:</label>
        <select
          id="role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Select your role</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
          {/* Add more options as needed */}
        </select>

        <button type="submit">Register</button>
      </form>
    </div>
 

  )
}

export default SignUp