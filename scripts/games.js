const gamesDatabase = {
    "trending": [
        { title: "Helldivers 2", meta: "2024 &bull; Shooter", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Helldivers+2", popularity: 99, rating: 8.5 },
        { title: "Final Fantasy VII Rebirth", meta: "2024 &bull; RPG", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=FFVII+Rebirth", popularity: 95, rating: 9.2 },
        { title: "Dragon's Dogma 2", meta: "2024 &bull; RPG", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Dragons+Dogma", popularity: 90, rating: 8.0 },
        { title: "Palworld", meta: "2024 &bull; Survival", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Palworld", popularity: 96, rating: 7.8 },
        { title: "Baldur's Gate 3", meta: "2023 &bull; RPG", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=BG3", popularity: 98, rating: 9.6 },
        { title: "Cyberpunk 2077", meta: "2020 &bull; RPG", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Cyberpunk", popularity: 88, rating: 8.2 },
        { title: "Elden Ring", meta: "2022 &bull; Action", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Elden+Ring", popularity: 94, rating: 9.5 },
        { title: "Lethal Company", meta: "2023 &bull; Indie", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Lethal+Company", popularity: 85, rating: 8.7 },
        { title: "Fortnite", meta: "2017 &bull; Shooter", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Fortnite", popularity: 97, rating: 8.0 },
        { title: "Apex Legends", meta: "2019 &bull; Shooter", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Apex+Legends", popularity: 92, rating: 8.3 }
    ],
    "new": [
        { title: "Stellar Blade", meta: "2024 &bull; Action", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Stellar+Blade", popularity: 88, rating: 8.1 },
        { title: "Hades II (Early Access)", meta: "2024 &bull; Indie", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Hades+II", popularity: 94, rating: 9.3 },
        { title: "Manor Lords", meta: "2024 &bull; Strategy", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Manor+Lords", popularity: 89, rating: 8.8 },
        { title: "Tekken 8", meta: "2024 &bull; Fighting", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Tekken+8", popularity: 87, rating: 8.9 },
        { title: "Persona 3 Reload", meta: "2024 &bull; RPG", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=P3+Reload", popularity: 85, rating: 8.7 },
        { title: "Like a Dragon: Infinite Wealth", meta: "2024 &bull; RPG", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Infinite+Wealth", popularity: 86, rating: 8.9 },
        { title: "Prince of Persia", meta: "2024 &bull; Action", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Prince+of+Persia", popularity: 82, rating: 8.5 },
        { title: "Pacific Drive", meta: "2024 &bull; Survival", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Pacific+Drive", popularity: 78, rating: 8.0 },
        { title: "Balatro", meta: "2024 &bull; Indie", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Balatro", popularity: 91, rating: 9.0 },
        { title: "Rise of the Ronin", meta: "2024 &bull; Action", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Ronin", popularity: 80, rating: 7.6 }
    ],
    "coming": [
        { title: "Grand Theft Auto VI", meta: "2025 &bull; Action", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=GTA+VI", popularity: 99, rating: 9.5 },
        { title: "Hollow Knight: Silksong", meta: "TBA &bull; Indie", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Silksong", popularity: 95, rating: 9.0 },
        { title: "Death Stranding 2", meta: "2025 &bull; Action", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=DS2", popularity: 88, rating: 8.5 },
        { title: "Monster Hunter Wilds", meta: "2025 &bull; Action", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=MH+Wilds", popularity: 90, rating: 8.8 },
        { title: "Doom: The Dark Ages", meta: "2025 &bull; Shooter", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=DOOM+Dark+Ages", popularity: 92, rating: 8.9 },
        { title: "Fable", meta: "2025 &bull; RPG", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Fable", popularity: 85, rating: 8.2 },
        { title: "Perfect Dark", meta: "TBA &bull; Shooter", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Perfect+Dark", popularity: 80, rating: 8.0 },
        { title: "Gears of War: E-Day", meta: "TBA &bull; Shooter", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Gears+E-Day", popularity: 86, rating: 8.4 },
        { title: "Metroid Prime 4", meta: "2025 &bull; Action", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Metroid+Prime+4", popularity: 89, rating: 8.7 },
        { title: "Ghost of Yōtei", meta: "2025 &bull; Action", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Ghost+of+Yotei", popularity: 91, rating: 8.6 }
    ],
    "rpg": [
        { title: "Baldur's Gate 3", meta: "2023 &bull; RPG", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=BG3", popularity: 98, rating: 9.6 },
        { title: "The Witcher 3", meta: "2015 &bull; RPG", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Witcher+3", popularity: 96, rating: 9.4 },
        { title: "Cyberpunk 2077", meta: "2020 &bull; RPG", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Cyberpunk", popularity: 88, rating: 8.2 },
        { title: "Skyrim", meta: "2011 &bull; RPG", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Skyrim", popularity: 95, rating: 9.1 },
        { title: "Persona 5 Royal", meta: "2019 &bull; RPG", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Persona+5", popularity: 85, rating: 9.0 },
        { title: "Mass Effect Legendary Edition", meta: "2021 &bull; RPG", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Mass+Effect", popularity: 89, rating: 8.8 },
        { title: "Final Fantasy VII Remake", meta: "2020 &bull; RPG", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=FFVII+Remake", popularity: 92, rating: 8.7 },
        { title: "Elden Ring", meta: "2022 &bull; RPG", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Elden+Ring", popularity: 94, rating: 9.5 },
        { title: "Disco Elysium", meta: "2019 &bull; RPG", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Disco+Elysium", popularity: 80, rating: 9.2 },
        { title: "Fallout: New Vegas", meta: "2010 &bull; RPG", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Fallout+NV", popularity: 86, rating: 8.9 }
    ],
    "shooter": [
        { title: "DOOM Eternal", meta: "2020 &bull; Shooter", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=DOOM", popularity: 88, rating: 8.8 },
        { title: "Halo Infinite", meta: "2021 &bull; Shooter", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Halo", popularity: 82, rating: 7.9 },
        { title: "Call of Duty: MWIII", meta: "2023 &bull; Shooter", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=MWIII", popularity: 90, rating: 6.5 },
        { title: "Destiny 2", meta: "2017 &bull; Shooter", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Destiny+2", popularity: 86, rating: 8.1 },
        { title: "Counter-Strike 2", meta: "2023 &bull; Shooter", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=CS2", popularity: 95, rating: 8.5 },
        { title: "Valorant", meta: "2020 &bull; Shooter", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Valorant", popularity: 94, rating: 8.3 },
        { title: "Overwatch 2", meta: "2022 &bull; Shooter", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Overwatch+2", popularity: 85, rating: 7.0 },
        { title: "Half-Life 2", meta: "2004 &bull; Shooter", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Half-Life+2", popularity: 80, rating: 9.7 },
        { title: "Titanfall 2", meta: "2016 &bull; Shooter", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Titanfall+2", popularity: 75, rating: 9.0 },
        { title: "Rainbow Six Siege", meta: "2015 &bull; Shooter", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=R6+Siege", popularity: 89, rating: 8.2 }
    ],
    "action": [
        { title: "God of War Ragnarök", meta: "2022 &bull; Action", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=God+of+War", popularity: 96, rating: 9.4 },
        { title: "Spider-Man 2", meta: "2023 &bull; Action", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Spider-Man+2", popularity: 93, rating: 9.0 },
        { title: "Elden Ring", meta: "2022 &bull; Action", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Elden+Ring", popularity: 94, rating: 9.5 },
        { title: "Ghost of Tsushima", meta: "2020 &bull; Action", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Ghost+of+Tsushima", popularity: 90, rating: 9.1 },
        { title: "Sekiro: Shadows Die Twice", meta: "2019 &bull; Action", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Sekiro", popularity: 85, rating: 8.9 },
        { title: "Devil May Cry 5", meta: "2019 &bull; Action", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=DMC5", popularity: 82, rating: 8.8 },
        { title: "Horizon Forbidden West", meta: "2022 &bull; Action", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Horizon", popularity: 88, rating: 8.6 },
        { title: "Batman: Arkham City", meta: "2011 &bull; Action", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Arkham+City", popularity: 84, rating: 9.2 },
        { title: "Bloodborne", meta: "2015 &bull; Action", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Bloodborne", popularity: 87, rating: 9.1 },
        { title: "Red Dead Redemption 2", meta: "2018 &bull; Action", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=RDR2", popularity: 97, rating: 9.7 }
    ],
    "strategy": [
        { title: "Civilization VI", meta: "2016 &bull; Strategy", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Civ+VI", popularity: 85, rating: 8.8 },
        { title: "Age of Empires IV", meta: "2021 &bull; Strategy", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=AoE+IV", popularity: 78, rating: 8.2 },
        { title: "Crusader Kings III", meta: "2020 &bull; Strategy", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=CK3", popularity: 80, rating: 8.9 },
        { title: "XCOM 2", meta: "2016 &bull; Strategy", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=XCOM+2", popularity: 75, rating: 8.7 },
        { title: "StarCraft II", meta: "2010 &bull; Strategy", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=StarCraft+II", popularity: 82, rating: 9.0 },
        { title: "Stellaris", meta: "2016 &bull; Strategy", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Stellaris", popularity: 77, rating: 8.5 },
        { title: "Hearts of Iron IV", meta: "2016 &bull; Strategy", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=HoI4", popularity: 79, rating: 8.4 },
        { title: "Total War: Warhammer III", meta: "2022 &bull; Strategy", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Warhammer+III", popularity: 81, rating: 8.6 },
        { title: "Company of Heroes 3", meta: "2023 &bull; Strategy", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=CoH+3", popularity: 72, rating: 7.5 },
        { title: "Frostpunk", meta: "2018 &bull; Strategy", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Frostpunk", popularity: 83, rating: 8.9 }
    ],
    "indie": [
        { title: "Hades", meta: "2020 &bull; Indie", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Hades", popularity: 92, rating: 9.4 },
        { title: "Stardew Valley", meta: "2016 &bull; Indie", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Stardew", popularity: 95, rating: 9.6 },
        { title: "Celeste", meta: "2018 &bull; Indie", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Celeste", popularity: 86, rating: 9.2 },
        { title: "Hollow Knight", meta: "2017 &bull; Indie", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Hollow+Knight", popularity: 90, rating: 9.5 },
        { title: "Undertale", meta: "2015 &bull; Indie", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Undertale", popularity: 89, rating: 9.3 },
        { title: "Dead Cells", meta: "2018 &bull; Indie", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Dead+Cells", popularity: 85, rating: 8.8 },
        { title: "Slay the Spire", meta: "2019 &bull; Indie", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Slay+the+Spire", popularity: 84, rating: 9.0 },
        { title: "Outer Wilds", meta: "2019 &bull; Indie", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Outer+Wilds", popularity: 82, rating: 9.1 },
        { title: "Cuphead", meta: "2017 &bull; Indie", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Cuphead", popularity: 88, rating: 8.7 },
        { title: "Ori and the Will of the Wisps", meta: "2020 &bull; Indie", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Ori", popularity: 87, rating: 9.0 }
    ]
};

const sidebarItems = document.querySelectorAll('.sidebar-menu-item');
const mediaGrid = document.querySelector('.media-grid');
const pageTitle = document.querySelector('.content-header h2');
const sortDropdown = document.querySelector('.sort-dropdown');

let currentCategory = 'trending';

sidebarItems.forEach(value => {
    value.addEventListener('click', () => {
        sidebarItems.forEach(item => item.classList.remove('active'));
        value.classList.add('active');
        
        currentCategory = value.getAttribute('data-category');
        const titleText = value.innerText;

        pageTitle.innerText = `${titleText} Games`;

        sortAndLoadGames();
    });
});

sortDropdown.addEventListener('change', () => {
    sortAndLoadGames();
});

function sortAndLoadGames() {
    let gamesToDisplay = [...gamesDatabase[currentCategory]];
    const sortMethod = sortDropdown.value;

    if (sortMethod === 'newest') {
        gamesToDisplay.sort((a, b) => {
            const yearA = parseInt(a.meta) || 0;
            const yearB = parseInt(b.meta) || 0;
            return yearB - yearA;
        });
    } else if (sortMethod === 'rating') {
        gamesToDisplay.sort((a, b) => b.rating - a.rating);
    } else if (sortMethod === 'popular') {
        gamesToDisplay.sort((a, b) => b.popularity - a.popularity);
    }

    renderCards(gamesToDisplay);
}

function renderCards(gamesArray) {
    mediaGrid.innerHTML = '';
    
    if(!gamesArray || gamesArray.length === 0){
        mediaGrid.innerHTML = '<p style="color: rgba(255,255,255,0.5);">No games found!</p>';
        return;
    }
    
    gamesArray.forEach(game => {
        const cardHTML = `
            <div class="media-card">
                <div class="card-image-wrapper">
                    <img src="${game.image}" alt="${game.title} Cover" class="card-image">
                    <div class="card-overlay">
                        <button class="add-to-vault-button">&plus; Vault</button>
                    </div>
                </div>
                <div class="card-info">
                    <h3>${game.title}</h3>
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <p class="card-meta">${game.meta}</p>
                        <p style="color: #FDBB2D; font-weight: bold; margin: 0; font-size: 12px;">
                            &#9733; ${game.rating || 'N/A'}
                        </p>
                    </div>
                </div>
            </div>
        `;
        mediaGrid.innerHTML += cardHTML;
    });
}

window.onload = () => { sortAndLoadGames(); };