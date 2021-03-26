import React from 'react';
import {db} from './../../config/firebase';
import { useEffect } from 'react';
function User(){
    useEffect(() => {
       db.collection("users").get().then((querySnapshot)=>{
        querySnapshot.forEach((doc)=>{
               console.log(doc.data());
           })
       })
    })
    return (
        <>
        hello
        </>
    )
}
export default User;