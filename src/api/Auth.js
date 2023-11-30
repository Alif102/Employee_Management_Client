import axios from "axios"

export const saveUser = async (user) => {
    const currentUser = {
      email: user.email, 
      // designation : user.designation,
      
     
      role: 'employee',
      isVerified: 'false',
    }
    const { data } = await axios.put(`http://localhost:5000/users/${user?.email}`, currentUser)

    //  const { data } = await axiosSecure.put(`/users/${user?.email}`, currentUser)
      //  const {data} = await axios.put(`http://localhost:5000/users/${user?.email}`,currentUser)
    return data
  }