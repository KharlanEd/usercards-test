import axios from "axios";


axios.defaults.baseURL = 'https://6432eb193e05ff8b373140c7.mockapi.io';
export const fetchUser = async ()=>{
      try {
        const response = await axios.get('/users');
        
       return response.data
      } catch (e) {
        return (e.message);
      }
     
    }
  ;

  export const postUser = async (id,updateData)=>{
    try{
      const response = await axios.put(`/users/${id},${updateData
      }`)
      return response.data
    }catch(e){
      return(e.message)
    }
  };