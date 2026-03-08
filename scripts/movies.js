const movieDatabase = {
    "trending": [
        { title: "Dune: Part Two", meta: "2024 &bull; Sci-Fi", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Dune+2", popularity: 98, rating: 8.8 },
        { title: "Furiosa", meta: "2024 &bull; Action", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Furiosa", popularity: 92, rating: 7.9 },
        { title: "Deadpool & Wolverine", meta: "2024 &bull; Comedy", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Deadpool", popularity: 96, rating: 8.5 },
        { title: "Oppenheimer", meta: "2023 &bull; Drama", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Oppenheimer", popularity: 90, rating: 8.6 },
        { title: "The Fall Guy", meta: "2024 &bull; Action", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Fall+Guy", popularity: 82, rating: 7.3 },
        { title: "Challengers", meta: "2024 &bull; Drama", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Challengers", popularity: 86, rating: 7.8 },
        { title: "Godzilla Minus One", meta: "2023 &bull; Sci-Fi", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Godzilla", popularity: 88, rating: 8.3 },
        { title: "Poor Things", meta: "2023 &bull; Comedy", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Poor+Things", popularity: 78, rating: 8.0 },
        { title: "Spider-Verse", meta: "2023 &bull; Action", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Spider-Verse", popularity: 94, rating: 8.9 },
        { title: "The Batman", meta: "2022 &bull; Action", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=The+Batman", popularity: 85, rating: 7.8 }
    ],
    "new": [
        { title: "Civil War", meta: "2024 &bull; Action", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Civil+War", popularity: 84, rating: 7.5 },
        { title: "Monkey Man", meta: "2024 &bull; Action", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Monkey+Man", popularity: 80, rating: 7.2 },
        { title: "Kingdom of the Apes", meta: "2024 &bull; Sci-Fi", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Apes", popularity: 88, rating: 7.4 },
        { title: "Abigail", meta: "2024 &bull; Horror", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Abigail", popularity: 75, rating: 6.9 },
        { title: "Inside Out 2", meta: "2024 &bull; Comedy", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Inside+Out+2", popularity: 95, rating: 8.2 },
        { title: "Ghostbusters", meta: "2024 &bull; Comedy", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Ghostbusters", popularity: 78, rating: 6.5 },
        { title: "Late Night with the Devil", meta: "2024 &bull; Horror", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Late+Night", popularity: 72, rating: 7.7 },
        { title: "Kung Fu Panda 4", meta: "2024 &bull; Comedy", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Panda+4", popularity: 82, rating: 7.0 },
        { title: "Immaculate", meta: "2024 &bull; Horror", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Immaculate", popularity: 68, rating: 6.2 },
        { title: "Dune: Part Two", meta: "2024 &bull; Sci-Fi", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Dune+2", popularity: 99, rating: 8.8 }
    ],
    "coming": [
        { title: "Alien: Romulus", meta: "2024 &bull; Horror", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Alien", popularity: 88, rating: 7.5 },
        { title: "Gladiator 2", meta: "2024 &bull; Action", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Gladiator+2", popularity: 92, rating: 7.8 },
        { title: "Wicked", meta: "2024 &bull; Drama", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Wicked", popularity: 90, rating: 7.6 },
        { title: "Nosferatu", meta: "2024 &bull; Horror", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Nosferatu", popularity: 85, rating: 8.1 },
        { title: "Venom: The Last Dance", meta: "2024 &bull; Action", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Venom+3", popularity: 89, rating: 6.8 },
        { title: "Mufasa", meta: "2024 &bull; Drama", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Mufasa", popularity: 86, rating: 7.2 },
        { title: "Sonic 3", meta: "2024 &bull; Action", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Sonic+3", popularity: 84, rating: 7.1 },
        { title: "Kraven the Hunter", meta: "2024 &bull; Action", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Kraven", popularity: 70, rating: 6.0 },
        { title: "Moana 2", meta: "2024 &bull; Comedy", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Moana+2", popularity: 95, rating: 7.9 },
        { title: "A Quiet Place: Day One", meta: "2024 &bull; Horror", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Quiet+Place", popularity: 87, rating: 7.4 }
    ],
    "action": [
        { title: "John Wick: Chapter 4", meta: "2023 &bull; Action", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=John+Wick+4", popularity: 92, rating: 8.2 },
        { title: "Mad Max: Fury Road", meta: "2015 &bull; Action", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Mad+Max", popularity: 94, rating: 8.1 },
        { title: "The Dark Knight", meta: "2008 &bull; Action", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Dark+Knight", popularity: 98, rating: 9.0 },
        { title: "Die Hard", meta: "1988 &bull; Action", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Die+Hard", popularity: 90, rating: 8.2 },
        { title: "Terminator 2", meta: "1991 &bull; Action", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Terminator+2", popularity: 91, rating: 8.6 },
        { title: "Gladiator", meta: "2000 &bull; Action", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Gladiator", popularity: 89, rating: 8.5 },
        { title: "Mission: Impossible - Fallout", meta: "2018 &bull; Action", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Fallout", popularity: 87, rating: 7.7 },
        { title: "Casino Royale", meta: "2006 &bull; Action", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Casino+Royale", popularity: 86, rating: 8.0 },
        { title: "The Matrix", meta: "1999 &bull; Action", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=The+Matrix", popularity: 95, rating: 8.7 },
        { title: "Top Gun: Maverick", meta: "2022 &bull; Action", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Top+Gun", popularity: 93, rating: 8.3 }
    ],
    "scifi": [
        { title: "Interstellar", meta: "2014 &bull; Sci-Fi", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Interstellar", popularity: 96, rating: 8.7 },
        { title: "Blade Runner 2049", meta: "2017 &bull; Sci-Fi", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=BR+2049", popularity: 88, rating: 8.0 },
        { title: "Arrival", meta: "2016 &bull; Sci-Fi", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Arrival", popularity: 85, rating: 7.9 },
        { title: "The Martian", meta: "2015 &bull; Sci-Fi", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=The+Martian", popularity: 87, rating: 8.0 },
        { title: "Alien", meta: "1979 &bull; Sci-Fi", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Alien", popularity: 92, rating: 8.5 },
        { title: "Ex Machina", meta: "2014 &bull; Sci-Fi", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Ex+Machina", popularity: 82, rating: 7.7 },
        { title: "Inception", meta: "2010 &bull; Sci-Fi", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Inception", popularity: 97, rating: 8.8 },
        { title: "Star Wars", meta: "1977 &bull; Sci-Fi", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Star+Wars", popularity: 99, rating: 8.6 },
        { title: "Jurassic Park", meta: "1993 &bull; Sci-Fi", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Jurassic+Park", popularity: 95, rating: 8.2 },
        { title: "E.T.", meta: "1982 &bull; Sci-Fi", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=E.T.", popularity: 89, rating: 7.9 }
    ],
    "horror": [
        { title: "The Shining", meta: "1980 &bull; Horror", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=The+Shining", popularity: 93, rating: 8.4 },
        { title: "Get Out", meta: "2017 &bull; Horror", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Get+Out", popularity: 90, rating: 7.8 },
        { title: "Hereditary", meta: "2018 &bull; Horror", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Hereditary", popularity: 86, rating: 7.3 },
        { title: "The Thing", meta: "1982 &bull; Horror", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=The+Thing", popularity: 88, rating: 8.2 },
        { title: "Halloween", meta: "1978 &bull; Horror", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Halloween", popularity: 91, rating: 7.7 },
        { title: "Scream", meta: "1996 &bull; Horror", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Scream", popularity: 89, rating: 7.4 },
        { title: "A Quiet Place", meta: "2018 &bull; Horror", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Quiet+Place", popularity: 85, rating: 7.5 },
        { title: "It", meta: "2017 &bull; Horror", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=It", popularity: 84, rating: 7.3 },
        { title: "The Conjuring", meta: "2013 &bull; Horror", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Conjuring", popularity: 87, rating: 7.5 },
        { title: "Psycho", meta: "1960 &bull; Horror", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Psycho", popularity: 94, rating: 8.5 }
    ],
    "comedy": [
        { title: "Superbad", meta: "2007 &bull; Comedy", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Superbad", popularity: 88, rating: 7.6 },
        { title: "The Hangover", meta: "2009 &bull; Comedy", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Hangover", popularity: 89, rating: 7.7 },
        { title: "Step Brothers", meta: "2008 &bull; Comedy", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Step+Brothers", popularity: 85, rating: 6.9 },
        { title: "Dumb and Dumber", meta: "1994 &bull; Comedy", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Dumb+%26+Dumber", popularity: 84, rating: 7.3 },
        { title: "Anchorman", meta: "2004 &bull; Comedy", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Anchorman", popularity: 86, rating: 7.1 },
        { title: "Mean Girls", meta: "2004 &bull; Comedy", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Mean+Girls", popularity: 90, rating: 7.1 },
        { title: "Shaun of the Dead", meta: "2004 &bull; Comedy", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Shaun", popularity: 83, rating: 7.9 },
        { title: "Airplane!", meta: "1980 &bull; Comedy", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Airplane!", popularity: 87, rating: 7.7 },
        { title: "Tropic Thunder", meta: "2008 &bull; Comedy", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Tropic+Thunder", popularity: 82, rating: 7.1 },
        { title: "Monty Python", meta: "1975 &bull; Comedy", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Monty+Python", popularity: 81, rating: 8.2 }
    ],
    "drama": [
        { title: "Shawshank Redemption", meta: "1994 &bull; Drama", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Shawshank", popularity: 98, rating: 9.3 },
        { title: "The Godfather", meta: "1972 &bull; Drama", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Godfather", popularity: 99, rating: 9.2 },
        { title: "Forrest Gump", meta: "1994 &bull; Drama", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Forrest+Gump", popularity: 96, rating: 8.8 },
        { title: "Fight Club", meta: "1999 &bull; Drama", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Fight+Club", popularity: 95, rating: 8.8 },
        { title: "Pulp Fiction", meta: "1994 &bull; Drama", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Pulp+Fiction", popularity: 97, rating: 8.9 },
        { title: "Good Will Hunting", meta: "1997 &bull; Drama", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Good+Will", popularity: 90, rating: 8.3 },
        { title: "Titanic", meta: "1997 &bull; Drama", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Titanic", popularity: 94, rating: 7.9 },
        { title: "The Social Network", meta: "2010 &bull; Drama", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Social+Network", popularity: 88, rating: 7.8 },
        { title: "Whiplash", meta: "2014 &bull; Drama", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Whiplash", popularity: 89, rating: 8.5 },
        { title: "Parasite", meta: "2019 &bull; Drama", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Parasite", popularity: 93, rating: 8.5 }
    ]
};


const sidebarItems = document.querySelectorAll('.sidebar-menu-item');
const mediaGrid = document.querySelector('.media-grid');
const pageTitle = document.querySelector('.content-header h2');
const sortDropdown = document.querySelector('.sort-dropdown');

let currentCategory = 'trending';

sidebarItems.forEach(value => {
    value.addEventListener('click',()=>{
        sidebarItems.forEach(item => item.classList.remove('active'));
        value.classList.add('active');
        currentCategory = value.getAttribute('data-category');
        const titleText = value.innerText;

        pageTitle.innerText = `${titleText} Movies`;

        sortAndLoadMovies();
    });
});

sortDropdown.addEventListener('change',()=>{
    sortAndLoadMovies();
});

function sortAndLoadMovies(){
    let moviesToDisplay = [...movieDatabase[currentCategory]];
    const sortMethod = sortDropdown.value;
    if(sortMethod==='newest'){
        moviesToDisplay.sort((a,b) => {
            const yearA = parseInt(a.meta) || 0;
            const yearB = parseInt(b.meta) || 0;
            return yearB - yearA;
        });
    }
    else if (sortMethod === 'rating'){
        moviesToDisplay.sort((a,b) => b.rating - a.rating);
    }
    else if(sortMethod === 'popular'){
        moviesToDisplay.sort((a,b) => 
            b.popularity - a.popularity);
    }
    renderCards(moviesToDisplay);
}

function renderCards(moviesArray){
    mediaGrid.innerHTML = '';
    
    if(!moviesArray || moviesArray.length === 0){
        mediaGrid.innerHTML = '<p style="color: rgba(255,255,255,0.5);">No movies found!</p>';
        return;
    }
    
    moviesArray.forEach(movie => {
        const cardHTML = `
            <div class="media-card">
                <div class="card-image-wrapper">
                    <img src="${movie.image}" alt="${movie.title} Poster" class="card-image">
                    <div class="card-overlay">
                        <button class="add-to-vault-button">&plus; Vault</button>
                    </div>
                </div>
                <div class="card-info">
                    <h3>${movie.title}</h3>
                    <p class="card-meta">${movie.meta}</p>
                    <p style="color: #FDBB2D; font-weight: bold; margin: 0; font-size: 12px;">
                            &#9733; ${movie.rating || 'N/A'}
                    </p>
                </div>
            </div>
        `;
        mediaGrid.innerHTML += cardHTML;
    });
}
window.onload = () => sortAndLoadMovies();