import { Link, useNavigate } from "react-router-dom";
// import UseAuth from "./Hooks/UseAuth";
import { useState } from "react";
import toast from "react-hot-toast";
import SocialLogin from "./SocialLogin";
// import { saveUser } from "../../api/Auth";
import { imageUpload } from "../../api/utils";
import UseAuth from "../../Hooks/UseAuth";

const Register = () => {
  const navigate = useNavigate();
  const [registerError, setRegisterError] = useState('');
  const [sucess, setSuccess] =useState('');

  const {createUser, handleUpdateProfile} = UseAuth();

  const handleRegister =async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget)
    const name = (form.get('name'));
    const role = (form.get('role'));
    const isVerified = 'false';
  //  const role = 'employee';
    const email = (form.get('email'));
    const designation = (form.get('designation'));
    const salary = (form.get('salary'));
    const bank = (form.get('bank'));
    const password = (form.get('password'))
    const Imageform = e.target;

    const image = Imageform.image.files[0]
    const imageData = await imageUpload(image); 
    const photo = imageData?.data?.display_url
const UserData = {name, email, password, designation,salary, isVerified,role, bank,photo}
console.log(UserData)

    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      }, 
      body : 
        JSON.stringify(UserData )
      
    })

    
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })

  


    
// rester error
    setRegisterError('');
    setSuccess('');

    // validation
    // if (password.length < 6) {
    //   setRegisterError("toast.error('six char')")
    //   return;
      
    // }
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


  }
  return (
    <>
      
  
    
    <div >
      <h1 className="text-2xl text-center ">Please Register </h1>
      {
        registerError && <p className="text-red-700">{registerError}</p>
      }
      {
        // sucess && <p className="text-green-600"> {sucess}</p>
        sucess && <h2 className="text-green-700 text-center text-2xl mt-3 mb-3">{sucess}</h2>
      }
      <form onSubmit={handleRegister}
       className="card-body md:w-3/4 lg:w-1/2 mx-auto ">
{/* <div className="form-control">
          <label className="label">
            <span className="label-text">Your Role :</span>
          </label>
          <input type="text" placeholder="Your Role" name="role" className="input input-bordered" />
        </div> */}
 <div className="form-control">
 <label className="label">
            <span className="label-text">Your Role :</span>
          </label>
        <select className="input input-bordered" id="role" name="role" required>
            <option defaultValue="employee" disabled>Select your role</option>
            <option value="employee">employee</option>
            <option value="hr">hr</option>

        </select>
          </div> 


<div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Your name" name="name" className="input input-bordered" />
        </div>
        <div className="form-control">

          <label className="label">
            <span className="label-text">Bank Account No.</span>
          </label>
          <input type="number" placeholder="Bank Account Number" name="bank" className="input input-bordered" />
        </div>
        {/* salary */}
        <div className="form-control">

          <label className="label">
            <span className="label-text">Salary</span>
          </label>
          <input type="number" placeholder="Salary" name="salary" className="input input-bordered" />
        </div>

        {/* Designation */}

        <div className="form-control">

          <label className="label">
            <span className="label-text">Designation</span>
          </label>
          <input type="text" placeholder="Designation" name="designation" className="input input-bordered" />
        </div>



        {/* <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="text" placeholder="photo" name="photo" className="input input-bordered" />
        </div> */}
      <div>
              <label htmlFor='image' className='block mb-2 text-sm'>
                Select Image:
              </label>
              <input
                required
                type='file'
                id='image'
                name='image'
                accept='image/*'
              />
            </div>


        <div className="form-control">

          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Email" name="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" name="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        <p>Already have an account ? <Link to='/'> <button>Login</button></Link></p>

        <div className="text-center">
        <SocialLogin/>

        </div>
      </form>
     
    </div>
 
    </>
  )
}

export default Register