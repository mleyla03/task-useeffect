import axios from 'axios';

import { BASE_URL } from "./base.url";

//get all categories
export const getAllCategories = async()=>{
    let globalData;
    await axios.get(`${BASE_URL}/products`)
    .then(res =>{
        globalData = res.data;
    })
    return globalData;
}

//get category by ID
export const getCategoryByID = async(id)=>{
    let globalData;
    await axios.get(`${BASE_URL}/products/${id}`)
    .then(res=>{
        globalData = res.data;
    })
    return globalData;
}
//post category
export const postCategory = (newCategory)=>{
    axios.post(`${BASE_URL}/products`,newCategory);
}
//put category by ID
export const putCategory = (id,updatedCategory)=>{
    axios.put(`${BASE_URL}/products/${id}`,updatedCategory);
    
}
//delete category by ID
export const deleteCategoryByID = (id)=>{
    axios.delete(`${BASE_URL}/products/${id}`);
}