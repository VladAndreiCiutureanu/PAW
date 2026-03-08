const musicDatabase = {
    "trending": [
        { title: "Hit Me Hard and Soft", meta: "Billie Eilish &bull; Pop", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Billie+Eilish", popularity: 99, rating: 8.8, year: 2024 },
        { title: "The Tortured Poets Dept.", meta: "Taylor Swift &bull; Pop", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Taylor+Swift", popularity: 98, rating: 8.5, year: 2024 },
        { title: "Cowboy Carter", meta: "Beyoncé &bull; R&B", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Cowboy+Carter", popularity: 95, rating: 9.0, year: 2024 },
        { title: "Stick Season", meta: "Noah Kahan &bull; Folk", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Noah+Kahan", popularity: 92, rating: 8.6, year: 2022 },
        { title: "Zach Bryan", meta: "Zach Bryan &bull; Country", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Zach+Bryan", popularity: 90, rating: 8.4, year: 2023 },
        { title: "Unreal Unearth", meta: "Hozier &bull; Rock", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Hozier", popularity: 88, rating: 8.7, year: 2023 },
        { title: "Fireworks & Rollerblades", meta: "Benson Boone &bull; Pop", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Benson+Boone", popularity: 89, rating: 8.1, year: 2024 },
        { title: "SOS", meta: "SZA &bull; R&B", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=SOS", popularity: 94, rating: 9.1, year: 2022 },
        { title: "Starboy", meta: "The Weeknd &bull; Pop", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=The+Weeknd", popularity: 96, rating: 8.6, year: 2016 },
        { title: "AUSTIN", meta: "Post Malone &bull; Pop", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Post+Malone", popularity: 87, rating: 8.3, year: 2023 }
    ],
    "new": [
        { title: "Radical Optimism", meta: "Dua Lipa &bull; Pop", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Dua+Lipa", popularity: 91, rating: 8.2, year: 2024 },
        { title: "We Don't Trust You", meta: "Future & Metro Boomin &bull; Hip Hop", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Future", popularity: 94, rating: 8.5, year: 2024 },
        { title: "Eternal Sunshine", meta: "Ariana Grande &bull; Pop", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Ariana+Grande", popularity: 92, rating: 8.7, year: 2024 },
        { title: "Dark Matter", meta: "Pearl Jam &bull; Rock", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Pearl+Jam", popularity: 85, rating: 8.4, year: 2024 },
        { title: "Deeper Well", meta: "Kacey Musgraves &bull; Country", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Deeper+Well", popularity: 86, rating: 8.6, year: 2024 },
        { title: "Don't Forget Me", meta: "Maggie Rogers &bull; Pop", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Maggie+Rogers", popularity: 83, rating: 8.5, year: 2024 },
        { title: "Only God Was Above Us", meta: "Vampire Weekend &bull; Alt", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Vampire+Weekend", popularity: 84, rating: 8.9, year: 2024 },
        { title: "One of Wun", meta: "Gunna &bull; Hip Hop", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Gunna", popularity: 88, rating: 8.0, year: 2024 },
        { title: "TYLA", meta: "Tyla &bull; R&B", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Tyla", popularity: 90, rating: 8.1, year: 2024 },
        { title: "Las Mujeres Ya No Lloran", meta: "Shakira &bull; Latin", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Shakira", popularity: 89, rating: 8.3, year: 2024 }
    ],
    "picks": [
        { title: "Lasso", meta: "Lana Del Rey &bull; Alt", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Lasso", popularity: 95, rating: 8.8, year: 2024 },
        { title: "Y2K", meta: "Ice Spice &bull; Hip Hop", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Y2K", popularity: 88, rating: 7.9, year: 2024 },
        { title: "Loom", meta: "Imagine Dragons &bull; Rock", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Loom", popularity: 85, rating: 8.0, year: 2024 },
        { title: "Moon Music", meta: "Coldplay &bull; Pop", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Moon+Music", popularity: 90, rating: 8.3, year: 2024 },
        { title: "143", meta: "Katy Perry &bull; Pop", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=143", popularity: 86, rating: 7.8, year: 2024 },
        { title: "The Death of Slim Shady", meta: "Eminem &bull; Hip Hop", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Eminem", popularity: 96, rating: 8.5, year: 2024 },
        { title: "Songs of a Lost World", meta: "The Cure &bull; Rock", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=The+Cure", popularity: 84, rating: 8.6, year: 2024 },
        { title: "Saviors", meta: "Green Day &bull; Rock", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Saviors", popularity: 87, rating: 8.2, year: 2024 },
        { title: "Don't Be Dumb", meta: "A$AP Rocky &bull; Hip Hop", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=ASAP+Rocky", popularity: 91, rating: 8.4, year: 2024 },
        { title: "C,XOXO", meta: "Camila Cabello &bull; Pop", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=CXOXO", popularity: 89, rating: 8.1, year: 2024 }
    ],
    "pop": [
        { title: "GUTS", meta: "Olivia Rodrigo &bull; Pop", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=GUTS", popularity: 94, rating: 8.9, year: 2023 },
        { title: "Harry's House", meta: "Harry Styles &bull; Pop", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Harrys+House", popularity: 93, rating: 8.7, year: 2022 },
        { title: "Midnights", meta: "Taylor Swift &bull; Pop", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Midnights", popularity: 97, rating: 8.8, year: 2022 },
        { title: "Emails I Can't Send", meta: "Sabrina Carpenter &bull; Pop", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Sabrina", popularity: 88, rating: 8.5, year: 2022 },
        { title: "Think Later", meta: "Tate McRae &bull; Pop", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Tate+McRae", popularity: 86, rating: 8.2, year: 2023 },
        { title: "Justice", meta: "Justin Bieber &bull; Pop", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Justice", popularity: 90, rating: 8.1, year: 2021 },
        { title: "Positions", meta: "Ariana Grande &bull; Pop", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Positions", popularity: 91, rating: 8.4, year: 2020 },
        { title: "Chromatica", meta: "Lady Gaga &bull; Pop", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Chromatica", popularity: 89, rating: 8.3, year: 2020 },
        { title: "24K Magic", meta: "Bruno Mars &bull; Pop", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=24K+Magic", popularity: 95, rating: 9.0, year: 2016 },
        { title: "Divide", meta: "Ed Sheeran &bull; Pop", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Divide", popularity: 96, rating: 8.7, year: 2017 }
    ],
    "hiphop": [
        { title: "Utopia", meta: "Travis Scott &bull; Hip Hop", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Utopia", popularity: 95, rating: 8.6, year: 2023 },
        { title: "Her Loss", meta: "Drake & 21 Savage &bull; Hip Hop", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Her+Loss", popularity: 92, rating: 8.4, year: 2022 },
        { title: "Good Kid, M.A.A.D City", meta: "Kendrick Lamar &bull; Hip Hop", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Kendrick", popularity: 98, rating: 9.6, year: 2012 },
        { title: "2014 Forest Hills Drive", meta: "J. Cole &bull; Hip Hop", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=J+Cole", popularity: 94, rating: 9.2, year: 2014 },
        { title: "Pink Friday 2", meta: "Nicki Minaj &bull; Hip Hop", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Nicki+Minaj", popularity: 89, rating: 8.1, year: 2023 },
        { title: "Traumazine", meta: "Megan Thee Stallion &bull; Hip Hop", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Megan", popularity: 87, rating: 8.3, year: 2022 },
        { title: "American Dream", meta: "21 Savage &bull; Hip Hop", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=21+Savage", popularity: 90, rating: 8.5, year: 2024 },
        { title: "Tha Carter V", meta: "Lil Wayne &bull; Hip Hop", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Lil+Wayne", popularity: 88, rating: 8.7, year: 2018 },
        { title: "Graduation", meta: "Kanye West &bull; Hip Hop", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Graduation", popularity: 97, rating: 9.4, year: 2007 },
        { title: "IGOR", meta: "Tyler, The Creator &bull; Hip Hop", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=IGOR", popularity: 91, rating: 9.3, year: 2019 }
    ],
    "rock": [
        { title: "But Here We Are", meta: "Foo Fighters &bull; Rock", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Foo+Fighters", popularity: 85, rating: 8.8, year: 2023 },
        { title: "AM", meta: "Arctic Monkeys &bull; Rock", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=AM", popularity: 96, rating: 9.0, year: 2013 },
        { title: "Nevermind", meta: "Nirvana &bull; Rock", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Nevermind", popularity: 99, rating: 9.8, year: 1991 },
        { title: "The New Abnormal", meta: "The Strokes &bull; Rock", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=The+Strokes", popularity: 87, rating: 8.9, year: 2020 },
        { title: "Californication", meta: "Red Hot Chili Peppers &bull; Rock", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=RHCP", popularity: 94, rating: 9.1, year: 1999 },
        { title: "A Night at the Opera", meta: "Queen &bull; Rock", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Queen", popularity: 97, rating: 9.6, year: 1975 },
        { title: "Led Zeppelin IV", meta: "Led Zeppelin &bull; Rock", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Led+Zeppelin", popularity: 98, rating: 9.7, year: 1971 },
        { title: "Hot Fuss", meta: "The Killers &bull; Rock", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=The+Killers", popularity: 92, rating: 8.9, year: 2004 },
        { title: "Riot!", meta: "Paramore &bull; Rock", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Paramore", popularity: 89, rating: 8.8, year: 2007 },
        { title: "American Idiot", meta: "Green Day &bull; Rock", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=American+Idiot", popularity: 95, rating: 9.2, year: 2004 }
    ],
    "electronic": [
        { title: "Random Access Memories", meta: "Daft Punk &bull; Electronic", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Daft+Punk", popularity: 96, rating: 9.5, year: 2013 },
        { title: "Actual Life 3", meta: "Fred again.. &bull; Electronic", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Fred+Again", popularity: 88, rating: 8.9, year: 2022 },
        { title: "Energy", meta: "Disclosure &bull; Electronic", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Disclosure", popularity: 84, rating: 8.2, year: 2020 },
        { title: "18 Months", meta: "Calvin Harris &bull; Electronic", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Calvin+Harris", popularity: 92, rating: 8.6, year: 2012 },
        { title: "Quest For Fire", meta: "Skrillex &bull; Electronic", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Skrillex", popularity: 87, rating: 8.8, year: 2023 },
        { title: "True", meta: "Avicii &bull; Electronic", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Avicii", popularity: 94, rating: 8.9, year: 2013 },
        { title: "Skin", meta: "Flume &bull; Electronic", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Flume", popularity: 89, rating: 8.7, year: 2016 },
        { title: "The Last Goodbye", meta: "ODESZA &bull; Electronic", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=ODESZA", popularity: 86, rating: 8.8, year: 2022 },
        { title: "Cross", meta: "Justice &bull; Electronic", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Justice", popularity: 90, rating: 9.3, year: 2007 },
        { title: "Surrender", meta: "RÜFÜS DU SOL &bull; Electronic", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=RUFUS+DU+SOL", popularity: 85, rating: 8.5, year: 2021 }
    ],
    "rb": [
        { title: "SOS", meta: "SZA &bull; R&B", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=SOS", popularity: 96, rating: 9.1, year: 2022 },
        { title: "Blonde", meta: "Frank Ocean &bull; R&B", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Blonde", popularity: 97, rating: 9.5, year: 2016 },
        { title: "After Hours", meta: "The Weeknd &bull; R&B", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=The+Weeknd", popularity: 98, rating: 9.0, year: 2020 },
        { title: "Wasteland", meta: "Brent Faiyaz &bull; R&B", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Brent+Faiyaz", popularity: 88, rating: 8.5, year: 2022 },
        { title: "Over It", meta: "Summer Walker &bull; R&B", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Summer+Walker", popularity: 89, rating: 8.4, year: 2019 },
        { title: "It Was Good Until It Wasn't", meta: "Kehlani &bull; R&B", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Kehlani", popularity: 86, rating: 8.2, year: 2020 },
        { title: "Back of My Mind", meta: "H.E.R. &bull; R&B", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=H.E.R.", popularity: 87, rating: 8.3, year: 2021 },
        { title: "Freudian", meta: "Daniel Caesar &bull; R&B", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Daniel+Caesar", popularity: 90, rating: 8.9, year: 2017 },
        { title: "Confessions", meta: "Usher &bull; R&B", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Usher", popularity: 95, rating: 9.4, year: 2004 },
        { title: "The Diary of Alicia Keys", meta: "Alicia Keys &bull; R&B", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Alicia+Keys", popularity: 93, rating: 9.2, year: 2003 }
    ]
};

const sidebarItems = document.querySelectorAll('.sidebar-menu-item');
const mediaGrid = document.querySelector('.media-grid');
const pageTitle = document.querySelector('.content-header h2');
const sortDropdown = document.querySelector('.sort-dropdown'); // Added Dropdown Hook

let currentCategory = 'trending'; // Added State Tracker

sidebarItems.forEach(value => {
    value.addEventListener('click', () => {
        sidebarItems.forEach(item => item.classList.remove('active'));
        value.classList.add('active');
        
        currentCategory = value.getAttribute('data-category');
        const titleText = value.innerText;

        pageTitle.innerText = `${titleText} Music`;

        // Load and sort!
        sortAndLoadMusic();
    });
});

// Dropdown listener
sortDropdown.addEventListener('change', () => {
    sortAndLoadMusic();
});

// The Sorting Logic
function sortAndLoadMusic() {
    let albumsToDisplay = [...musicDatabase[currentCategory]];
    const sortMethod = sortDropdown.value;

    if (sortMethod === 'newest') {
        // Sort using the hidden 'year' attribute!
        albumsToDisplay.sort((a, b) => (b.year || 0) - (a.year || 0));
    } else if (sortMethod === 'rating') {
        albumsToDisplay.sort((a, b) => b.rating - a.rating);
    } else if (sortMethod === 'popular') {
        albumsToDisplay.sort((a, b) => b.popularity - a.popularity);
    }

    renderCards(albumsToDisplay);
}

// Updated render function for UI improvements
function renderCards(albumsArray) {
    mediaGrid.innerHTML = '';
    
    if(!albumsArray || albumsArray.length === 0){
        mediaGrid.innerHTML = '<p style="color: rgba(255,255,255,0.5);">No music found for this category yet!</p>';
        return;
    }
    
    albumsArray.forEach(album => {
        const cardHTML = `
            <div class="media-card">
                <div class="card-image-wrapper">
                    <img src="${album.image}" alt="${album.title} Cover" class="card-image">
                    <div class="card-overlay">
                        <button class="add-to-vault-button">&plus; Vault</button>
                    </div>
                </div>
                <div class="card-info">
                    <h3>${album.title}</h3>
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <p class="card-meta">${album.meta}</p>
                        <p style="color: #FDBB2D; font-weight: bold; margin: 0; font-size: 12px;">
                            &#9733; ${album.rating || 'N/A'}
                        </p>
                    </div>
                </div>
            </div>
        `;
        mediaGrid.innerHTML += cardHTML;
    });
}

// Fire on load
window.onload = () => { sortAndLoadMusic(); };