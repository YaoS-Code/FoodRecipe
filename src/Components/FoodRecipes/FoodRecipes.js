import React, {useState, useEffect} from "react";
import "./FoodRecipes.css";

const FoodRecipes = () =>{


    let APP_ID = "ae12587a";
    let APP_KEY = "b576e78e590eef02ecbd37590eb49ea9";
    let [recipes, setRecipes] = useState([]);
    let [query, setQuery] = useState('');
    let [search, setSearch] = useState('');

    useEffect ( () => {
        getRecipes();
    }, [query]);
    
    const exampleReq = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;


    const getRecipes = async () =>{
        const reponse = await fetch(exampleReq);
        const data = await reponse.json();
        setRecipes(data.hits);
        console.log(recipes)
    }


    return(

        <div className="FoodRecipes">
         
            <div className="SearchBar">
                <input id="DishName" placeholder="Dish Name" onChange = {(e) => setSearch(e.target.value) }/>
                {console.log("Search: " +search)}
                <button id="DishButton" type="submit" value="Search" onClick = {() => setQuery(search)}>Search</button>
                {console.log("Query: " + query)}
            </div>
            
        

            <div className="Recipes">
                {recipes.map(recipes =>(
                    <div className="Dish">
                        <h1 className="Title">Title: {recipes.recipe.label}</h1>
                        <div>
                            {recipes.recipe.ingredientLines.map(ingredient =>(
                                <p>{ingredient}</p>
                            ))}
                            
                        </div>
                        <p>Calories: {Math.round(recipes.recipe.calories)}</p>
                        <img className="img" src={recipes.recipe.image} alt="img"></img>
                    </div>
                ))}
            </div>


        </div> 

    )

}

export default FoodRecipes;