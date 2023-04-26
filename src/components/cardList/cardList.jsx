import { useEffect, useState } from "react";
import {Card} from "../card/card";
import { fetchUser } from "../Servise/API";
import css from '../cardList/cardList.module.css'

import axios from "axios";





export const CardList=()=>{

    const [users,setUsers]= useState([]);
    const [page,setPage]= useState(1)
    
    useEffect(()=>{
        async function fetchData(){
          try{
            const response = await fetchUser()
           setUsers(response)
         

          } catch (error) {
            console.log(error) 
           
            }  
    }
    fetchData()
},[])

const onChange = (id, followers, active) => {
    const updateData = active
      ? { followers: followers - 1, active: "" }
      : { followers: followers + 1, active: "active" };

    const fetchData = async () => {
      try {
       
        const response = await axios.put(`/users/${id}`, {
          ...updateData,
        });

        const userChangeArray = users.map((user) => {
          if (user.id === id) {
            return response.data;
          }
          return user;
        });

        setUsers(userChangeArray);
      } catch (error) {
        console.log(error.message);
        
      }
      
    };
    fetchData();
  };

  const onLoadMoreClick = () => {
    setPage((prevPage) => prevPage + 1);
  };




    return(
        <>
        <ul className={css.cardList}>
        {users.map(user=>(
            <li className={css.items} key={ user.id} >
            <Card user={user} onChange={onChange}

            />
           
            </li>
           
        ))}
        </ul>
         
      
        </>
    )
}