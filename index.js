// look back at the <readme.md> file for some hints //
// working API key //

//Goal: Build a GIF search application using Javascript and the Giphy API
//1. User types in search form
//2. Fetch Gifs from GiphyAPI
//3. Display GIFS
//4. Keep searching for more gifs
//5. Button to remove all


//Methods:
// AJAX and Axios- fetch data from API
// Handle User Input in a form
// Display Data Dynamically
// Maniupulate the DOM (Document Object Model)
// Event Listeners to handle button clicks

//Step 1: Set up HTML with : input field, button to search, button to remove, div where GIFS go
document.addEventListener("DOMContentLoaded", function () {
const giphyApiKey = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";

// Step 2: Select our HTML elements 
//Fetch GIFs with Javascript
//Select our buttons and display Area
const generateGifsButton = document.getElementById("generate-gifs-btn");
const clearGifsButton = document.getElementById("clear-gifs-btn");
const display = document.getElementById("display-div");

//Event Listeners for the buttons
generateGifsButton.addEventListener("click", generateGifs);
clearGifsButton.addEventListener("click", clearGifs);
 
//Function to fetch GIFS from Giphy APi
async function grabGifFromApi (query) {
    try {
    const response = await axios.get(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${giphyCpiKey}&limit=10`);
    return response.data.data.map((val) => ({
        gifURL: val.images.fixed_width.url
    }));
} catch (error) {
    console.error("Error fetching GIF:", error);
}
//Sends an API request to Giphy based on users search
//returns array of 10 GIF URLs

//Function to get user input from the form
//Reads what user typed in the search box
function getInputData() {
    const dataInput = document.getElementById("search-input");
    return dataInput.value;
} 

//Generate and display GIFs
async function generateGifs(e) {
    e.preventDefault(); //Prevent Page Reload
    display.innerHTML = ""; //Clear previous GIFs 
    const inputData = getInputData(); //Get user search term
    const gifs = await grabGifFromApi(inputData); //Fetch GIFs 
}
console.log(generateGifs());
//clear the display and fetch GIFs based on users search

//Last Step: Clear all GIFs 
function clearGifs() {
    display.innerHTML = "";
    display.innerHTML = "...GIF Here...";
}}
});