import { useEffect, useState } from "react";
import { deleteCategoryByID, getAllCategories, getCategoryByID, postCategory } from "./api/htpprequests";
import "./App.css"
function App() {
  let[categories,setCategories] = useState([]); 
  



  function handleSearch(e) {
    if (e.target.value.trim()=="") {
        categories(setCategories);
    }
    else{
        let searched = categories.filter((categories) =>
        categories.name.trim().toLowerCase().includes(e.target.value.trim().toLowerCase())
        );
        setCategories(searched);
    }
  }
  function handleSort(e){
    e.preventDefault()
    let sortedStudents = [...categories.sort((a,b)=>a.unitPrice-b.unitPrice)];
    setCategories(sortedStudents);
  }


  useEffect(()=>{
    getAllCategories().then((data)=>{
      setCategories(data);
    })
  },[]);

 
  return (
    <>    
    <form className="form">
    <input onChange={(e) => handleSearch(e)} placeholder="searched" />
    <button className="sort" onClick={handleSort}>Sort by Price</button>
   
  </form>

     <ul>
       {categories && categories.map((cat)=>{
        return <li key={cat.id}>{cat.name} {cat.unitPrice} <button className="delete" onClick={()=>{
          deleteCategoryByID(cat.id);
          let filteredCategories = categories.filter((item)=>item.id!==cat.id);
          setCategories(filteredCategories);
        window.confirm("Are your sure?")}}><i class="fa-solid fa-trash"></i></button></li>
       })}
     </ul>
    
    </>
  );
}

export default App;