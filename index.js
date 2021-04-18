

// on va le stocker
const searchInput = document.getElementById('searchInput');
const results = document.getElementById('results');

let search = '';
let meals;

const fetchSearch = async () => {
    meals = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then(res => res.json())
        .then(res => res.meals)
        
};



const searchDisplay = async() => {
    await fetchSearch();
    console.log(meals);
    if (meals == null){
        results.innerHTML = '<span class="noResult">Aucun resultat</span>';
    }
    // console.log(results);
    results.innerHTML = (
        meals.map(meal => (
            `
                <div class="searchContainer">
                    <h3>${meal.strMeal}</h3>
                    <div class="info">
                        <div>origine : ${meal.strArea}</div>
                        <div>categorie : ${meal.strCategory}</div>
                    </div>
                    <img src='${meal.strMealThumb}' /></br>
                    <a href ='${meal.strYoutube}' target="_blank"><i class="fab fa-youtube"></i><a>
                </div>
            `
        )).join('')      
    );
};


searchInput.addEventListener('input', (event) => {
    // console.log(event.target.value);
    search = event.target.value 
    searchDisplay();
    //console.log(mealsData);
})



