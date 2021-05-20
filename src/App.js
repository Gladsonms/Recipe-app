
import "./App.css";
import {useEffect,useState,UseState} from 'react'
import Recipe from "./Recipe"

const App=()=> {
  const APP_ID='ae7e10e6';
  const APP_KEY='5b46f4b8dd1a5c9639322127e4dbe1c4';
 const [  recipes,setRecipes]=useState([])
 const [search,setSearch]=useState('')
 const [query,setQuery] =useState('chicken')
  useEffect(()=>{
    getRecipes();

  },[query])
  const getRecipes= async()=>{
const response =await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
const data= await response.json();
setRecipes(data.hits);
console.log(data.hits);
  }
  const updateSearch =(e)=>{
    setSearch(e.target.value)
  }
  const getSearch = (e)=>{
    e.preventDefault();
    setQuery(search)
    setSearch('')
  }
  return <div className="App">
   <form onSubmit={getSearch} className="search-form">
     <input className="search-bar" type="text" value={search} onChange={updateSearch} placeholder="Search food here...."/>
     <button className="seach-button" type="submit" >Search</button>

     
   </form>
   <div className="recipes">{recipes.map(recipe => (
     
     <Recipe 
     key={recipe.recipe.label}
     title={recipe.recipe.label}
     calories={recipe.recipe.calories}
     image={recipe.recipe.image}
     ingredients={recipe.recipe.ingredients}
     />
   ))}</div>
   
  </div>;
}

export default App;
