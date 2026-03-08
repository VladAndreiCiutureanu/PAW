const userVault = [
    { title: "Dune: Part Two", type: "Movie", meta: "Sci-Fi", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Dune+2", popularity: 98, rating: 8.8, year: 2024 },
    { title: "Helldivers 2", type: "Game", meta: "Shooter", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Helldivers+2", popularity: 99, rating: 8.5, year: 2024 },
    { title: "Atomic Habits", type: "Book", meta: "Non-Fiction", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Atomic+Habits", popularity: 98, rating: 9.5, year: 2018 },
    { title: "Shōgun", type: "TV Show", meta: "Drama", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Shogun", popularity: 98, rating: 9.0, year: 2024 },
    { title: "Hit Me Hard and Soft", type: "Music", meta: "Pop", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Billie+Eilish", popularity: 99, rating: 8.8, year: 2024 },
    { title: "The Dark Knight", type: "Movie", meta: "Action", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Dark+Knight", popularity: 98, rating: 9.0, year: 2008 },
    { title: "Baldur's Gate 3", type: "Game", meta: "RPG", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=BG3", popularity: 98, rating: 9.6, year: 2023 },
    { title: "The Bear", type: "TV Show", meta: "Drama", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=The+Bear", popularity: 92, rating: 8.6, year: 2022 }
];

const mediaGrid = document.querySelector('.media-grid');
const sortDropdown = document.querySelector('.sort-dropdown');
const checkboxes = document.querySelectorAll('.category-filter');

sortDropdown.addEventListener('change',()=>{
    filterAndSortVault();
});
checkboxes.forEach(box => {
    box.addEventListener('change',()=>{
        filterAndSortVault();
    });
});
function filterAndSortVault(){
    const checkedTypes = Array.from(checkboxes).filter(box => box.checked).map(box => box.value);

    let itemsToDisplay = userVault.filter(item => checkedTypes.includes(item.type));

    const sortMethod = sortDropdown.value;
    if (sortMethod === 'newest') {
        itemsToDisplay.sort((a, b) => b.year - a.year);
    } else if (sortMethod === 'rating') {
        itemsToDisplay.sort((a, b) => b.rating - a.rating);
    } else if (sortMethod === 'popular') {
        itemsToDisplay.sort((a, b) => b.popularity - a.popularity);
    }

    renderCards(itemsToDisplay);
}

function renderCards(itemsArray){
    mediaGrid.innerHTML = '';
    
    if(!itemsArray || itemsArray.length === 0){
        mediaGrid.innerHTML = '<p style="color: rgba(255,255,255,0.5); font-size: 18px; margin-top: 20px;">No items match your filters.</p>';
        return;
    }
    
    itemsArray.forEach(item => {
        const cardHTML = `
            <div class="media-card">
                <div class="card-image-wrapper">
                    <img src="${item.image}" alt="${item.title} Cover" class="card-image">
                </div>
                <div class="card-info">
                    <h3>${item.title}</h3>
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <p class="card-meta">${item.type} &bull; ${item.meta}</p>
                        <p style="color: #FDBB2D; font-weight: bold; margin: 0; font-size: 12px;">
                            &#9733; ${item.rating}
                        </p>
                    </div>
                </div>
            </div>
        `;
        mediaGrid.innerHTML += cardHTML;
    });
}
window.onload = () => filterAndSortVault();