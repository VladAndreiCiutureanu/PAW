const booksDatabase = {
    "trending": [
        { title: "Fourth Wing", meta: "Rebecca Yarros &bull; Fantasy", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Fourth+Wing", popularity: 99, rating: 9.2, year: 2023 },
        { title: "The Women", meta: "Kristin Hannah &bull; Fiction", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=The+Women", popularity: 95, rating: 8.8, year: 2024 },
        { title: "Atomic Habits", meta: "James Clear &bull; Non-Fiction", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Atomic+Habits", popularity: 98, rating: 9.5, year: 2018 },
        { title: "Iron Flame", meta: "Rebecca Yarros &bull; Fantasy", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Iron+Flame", popularity: 96, rating: 8.9, year: 2023 },
        { title: "A Court of Thorns...", meta: "Sarah J. Maas &bull; Fantasy", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=ACOTAR", popularity: 97, rating: 9.1, year: 2015 },
        { title: "The Seven Husbands...", meta: "Taylor Jenkins Reid &bull; Fiction", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Evelyn+Hugo", popularity: 94, rating: 8.7, year: 2017 },
        { title: "It Ends With Us", meta: "Colleen Hoover &bull; Romance", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=It+Ends+With+Us", popularity: 92, rating: 8.4, year: 2016 },
        { title: "Lessons in Chemistry", meta: "Bonnie Garmus &bull; Fiction", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Chemistry", popularity: 91, rating: 8.9, year: 2022 },
        { title: "The Midnight Library", meta: "Matt Haig &bull; Fiction", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Midnight+Library", popularity: 89, rating: 8.5, year: 2020 },
        { title: "Verity", meta: "Colleen Hoover &bull; Thriller", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Verity", popularity: 90, rating: 8.3, year: 2018 }
    ],
    "new": [
        { title: "Funny Story", meta: "Emily Henry &bull; Romance", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Funny+Story", popularity: 93, rating: 8.8, year: 2024 },
        { title: "The Familiar", meta: "Leigh Bardugo &bull; Fantasy", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=The+Familiar", popularity: 88, rating: 8.5, year: 2024 },
        { title: "The Demon of Unrest", meta: "Erik Larson &bull; History", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Demon+of+Unrest", popularity: 85, rating: 8.6, year: 2024 },
        { title: "James", meta: "Percival Everett &bull; Fiction", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=James", popularity: 89, rating: 9.0, year: 2024 },
        { title: "The Hunter", meta: "Tana French &bull; Mystery", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=The+Hunter", popularity: 84, rating: 8.2, year: 2024 },
        { title: "Just for the Summer", meta: "Abby Jimenez &bull; Romance", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Just+for+Summer", popularity: 87, rating: 8.7, year: 2024 },
        { title: "Table for Two", meta: "Amor Towles &bull; Fiction", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Table+for+Two", popularity: 86, rating: 8.4, year: 2024 },
        { title: "The Secret", meta: "Lee Child &bull; Thriller", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=The+Secret", popularity: 82, rating: 7.9, year: 2024 },
        { title: "Toxic Prey", meta: "John Sandford &bull; Thriller", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Toxic+Prey", popularity: 80, rating: 7.8, year: 2024 },
        { title: "First Lie Wins", meta: "Ashley Elston &bull; Thriller", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=First+Lie+Wins", popularity: 85, rating: 8.1, year: 2024 }
    ],
    "coming": [
        { title: "Onyx Storm", meta: "Rebecca Yarros &bull; Fantasy", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Onyx+Storm", popularity: 98, rating: 8.9, year: 2025 },
        { title: "The Winds of Winter", meta: "George R.R. Martin &bull; Fantasy", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Winds+of+Winter", popularity: 99, rating: 9.5, year: 2025 },
        { title: "Long Island", meta: "Colm Tóibín &bull; Fiction", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Long+Island", popularity: 85, rating: 8.0, year: 2024 },
        { title: "Leather & Lark", meta: "RuNyx &bull; Romance", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Leather+%26+Lark", popularity: 88, rating: 8.5, year: 2024 },
        { title: "The Grandest Game", meta: "Jennifer Lynn Barnes &bull; Mystery", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Grandest+Game", popularity: 86, rating: 8.2, year: 2024 },
        { title: "The Striker", meta: "Ana Huang &bull; Romance", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=The+Striker", popularity: 89, rating: 8.4, year: 2024 },
        { title: "Somewhere Beyond...", meta: "TJ Klune &bull; Fantasy", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Beyond+Sea", popularity: 87, rating: 8.6, year: 2024 },
        { title: "The Boyfriend", meta: "Freida McFadden &bull; Thriller", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=The+Boyfriend", popularity: 84, rating: 8.1, year: 2024 },
        { title: "We Solve Murders", meta: "Richard Osman &bull; Mystery", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Solve+Murders", popularity: 90, rating: 8.8, year: 2024 },
        { title: "Intermezzo", meta: "Sally Rooney &bull; Fiction", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Intermezzo", popularity: 92, rating: 9.0, year: 2024 }
    ],
    "fiction": [
        { title: "The Midnight Library", meta: "Matt Haig &bull; Fiction", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Midnight+Library", popularity: 89, rating: 8.5, year: 2020 },
        { title: "To Kill a Mockingbird", meta: "Harper Lee &bull; Fiction", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Mockingbird", popularity: 95, rating: 9.4, year: 1960 },
        { title: "1984", meta: "George Orwell &bull; Fiction", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=1984", popularity: 96, rating: 9.3, year: 1949 },
        { title: "The Great Gatsby", meta: "F. Scott Fitzgerald &bull; Fiction", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Great+Gatsby", popularity: 94, rating: 9.1, year: 1925 },
        { title: "Tomorrow, and Tomorrow...", meta: "Gabrielle Zevin &bull; Fiction", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Tomorrow", popularity: 92, rating: 8.9, year: 2022 },
        { title: "A Man Called Ove", meta: "Fredrik Backman &bull; Fiction", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Ove", popularity: 90, rating: 8.8, year: 2012 },
        { title: "The Alchemist", meta: "Paulo Coelho &bull; Fiction", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Alchemist", popularity: 91, rating: 8.6, year: 1988 },
        { title: "The Kite Runner", meta: "Khaled Hosseini &bull; Fiction", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Kite+Runner", popularity: 93, rating: 9.0, year: 2003 },
        { title: "The Book Thief", meta: "Markus Zusak &bull; Fiction", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Book+Thief", popularity: 92, rating: 9.2, year: 2005 },
        { title: "Dune", meta: "Frank Herbert &bull; Sci-Fi", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Dune", popularity: 97, rating: 9.3, year: 1965 }
    ],
    "fantasy": [
        { title: "The Name of the Wind", meta: "Patrick Rothfuss &bull; Fantasy", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Name+of+the+Wind", popularity: 94, rating: 9.4, year: 2007 },
        { title: "Mistborn", meta: "Brandon Sanderson &bull; Fantasy", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Mistborn", popularity: 93, rating: 9.1, year: 2006 },
        { title: "The Hobbit", meta: "J.R.R. Tolkien &bull; Fantasy", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=The+Hobbit", popularity: 97, rating: 9.5, year: 1937 },
        { title: "Harry Potter", meta: "J.K. Rowling &bull; Fantasy", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Harry+Potter", popularity: 99, rating: 9.6, year: 1997 },
        { title: "The Way of Kings", meta: "Brandon Sanderson &bull; Fantasy", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Way+of+Kings", popularity: 95, rating: 9.3, year: 2010 },
        { title: "A Game of Thrones", meta: "George R.R. Martin &bull; Fantasy", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Game+of+Thrones", popularity: 96, rating: 9.4, year: 1996 },
        { title: "The Fellowship...", meta: "J.R.R. Tolkien &bull; Fantasy", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Fellowship", popularity: 98, rating: 9.7, year: 1954 },
        { title: "The Lies of Locke Lamora", meta: "Scott Lynch &bull; Fantasy", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Locke+Lamora", popularity: 88, rating: 8.9, year: 2006 },
        { title: "The Priory of the Orange Tree", meta: "Samantha Shannon &bull; Fantasy", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Priory", popularity: 86, rating: 8.5, year: 2019 },
        { title: "Assassin's Apprentice", meta: "Robin Hobb &bull; Fantasy", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Assassin", popularity: 87, rating: 8.8, year: 1995 }
    ],
    "mystery": [
        { title: "The Silent Patient", meta: "Alex Michaelides &bull; Mystery", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Silent+Patient", popularity: 92, rating: 8.4, year: 2019 },
        { title: "Gone Girl", meta: "Gillian Flynn &bull; Mystery", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Gone+Girl", popularity: 93, rating: 8.8, year: 2012 },
        { title: "And Then There Were None", meta: "Agatha Christie &bull; Mystery", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Agatha+Christie", popularity: 95, rating: 9.2, year: 1939 },
        { title: "The Girl with the Dragon...", meta: "Stieg Larsson &bull; Mystery", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Dragon+Tattoo", popularity: 91, rating: 8.9, year: 2005 },
        { title: "The Maid", meta: "Nita Prose &bull; Mystery", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=The+Maid", popularity: 85, rating: 8.0, year: 2022 },
        { title: "The Thursday Murder Club", meta: "Richard Osman &bull; Mystery", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Murder+Club", popularity: 89, rating: 8.6, year: 2020 },
        { title: "Dark Matter", meta: "Blake Crouch &bull; Thriller", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Dark+Matter", popularity: 88, rating: 8.7, year: 2016 },
        { title: "Sharp Objects", meta: "Gillian Flynn &bull; Thriller", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Sharp+Objects", popularity: 86, rating: 8.5, year: 2006 },
        { title: "The Guest List", meta: "Lucy Foley &bull; Mystery", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Guest+List", popularity: 84, rating: 8.1, year: 2020 },
        { title: "The Housemaid", meta: "Freida McFadden &bull; Thriller", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Housemaid", popularity: 87, rating: 8.3, year: 2022 }
    ],
    "romance": [
        { title: "It Ends With Us", meta: "Colleen Hoover &bull; Romance", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=It+Ends+With+Us", popularity: 92, rating: 8.4, year: 2016 },
        { title: "Book Lovers", meta: "Emily Henry &bull; Romance", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Book+Lovers", popularity: 89, rating: 8.6, year: 2022 },
        { title: "Pride and Prejudice", meta: "Jane Austen &bull; Romance", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Pride+%26+Prejudice", popularity: 96, rating: 9.3, year: 1813 },
        { title: "The Love Hypothesis", meta: "Ali Hazelwood &bull; Romance", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Love+Hypothesis", popularity: 90, rating: 8.7, year: 2021 },
        { title: "Beach Read", meta: "Emily Henry &bull; Romance", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Beach+Read", popularity: 87, rating: 8.5, year: 2020 },
        { title: "People We Meet on Vacation", meta: "Emily Henry &bull; Romance", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=People+We+Meet", popularity: 86, rating: 8.4, year: 2021 },
        { title: "Red, White & Royal Blue", meta: "Casey McQuiston &bull; Romance", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Royal+Blue", popularity: 88, rating: 8.6, year: 2019 },
        { title: "Happy Place", meta: "Emily Henry &bull; Romance", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Happy+Place", popularity: 89, rating: 8.7, year: 2023 },
        { title: "Seven Days in June", meta: "Tia Williams &bull; Romance", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Seven+Days", popularity: 85, rating: 8.3, year: 2021 },
        { title: "Outlander", meta: "Diana Gabaldon &bull; Romance", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Outlander", popularity: 91, rating: 8.9, year: 1991 }
    ],
    "nonfiction": [
        { title: "Sapiens", meta: "Yuval Noah Harari &bull; Non-Fiction", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Sapiens", popularity: 95, rating: 9.3, year: 2011 },
        { title: "Educated", meta: "Tara Westover &bull; Non-Fiction", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Educated", popularity: 94, rating: 9.1, year: 2018 },
        { title: "Thinking, Fast and Slow", meta: "Daniel Kahneman &bull; Non-Fiction", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Thinking+Fast", popularity: 92, rating: 9.0, year: 2011 },
        { title: "Born a Crime", meta: "Trevor Noah &bull; Non-Fiction", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Born+a+Crime", popularity: 93, rating: 9.2, year: 2016 },
        { title: "Outliers", meta: "Malcolm Gladwell &bull; Non-Fiction", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Outliers", popularity: 90, rating: 8.8, year: 2008 },
        { title: "Becoming", meta: "Michelle Obama &bull; Non-Fiction", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Becoming", popularity: 96, rating: 9.4, year: 2018 },
        { title: "The Power of Habit", meta: "Charles Duhigg &bull; Non-Fiction", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Power+of+Habit", popularity: 89, rating: 8.7, year: 2012 },
        { title: "Quiet", meta: "Susan Cain &bull; Non-Fiction", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Quiet", popularity: 88, rating: 8.6, year: 2012 },
        { title: "Into the Wild", meta: "Jon Krakauer &bull; Non-Fiction", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Into+the+Wild", popularity: 87, rating: 8.5, year: 1996 },
        { title: "The Body Keeps the Score", meta: "Bessel van der Kolk &bull; Non-Fiction", image: "https://placehold.co/300x450/1a1a2e/fdbb2d?text=Body+Keeps+Score", popularity: 91, rating: 8.9, year: 2014 }
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

        pageTitle.innerText = `${titleText} Books`;

        sortAndLoadBooks();
    });
});

sortDropdown.addEventListener('change', () => {
    sortAndLoadBooks();
});


function sortAndLoadBooks() {
    let booksToDisplay = [...booksDatabase[currentCategory]];
    const sortMethod = sortDropdown.value;

    if (sortMethod === 'newest') {

        booksToDisplay.sort((a, b) => (b.year || 0) - (a.year || 0));
    } else if (sortMethod === 'rating') {
        booksToDisplay.sort((a, b) => b.rating - a.rating);
    } else if (sortMethod === 'popular') {
        booksToDisplay.sort((a, b) => b.popularity - a.popularity);
    }

    renderCards(booksToDisplay);
}

function renderCards(booksArray) {
    mediaGrid.innerHTML = '';
    
    if(!booksArray || booksArray.length === 0){
        mediaGrid.innerHTML = '<p style="color: rgba(255,255,255,0.5);">No books found!</p>';
        return;
    }
    
    booksArray.forEach(book => {
        const cardHTML = `
            <div class="media-card">
                <div class="card-image-wrapper">
                    <img src="${book.image}" alt="${book.title} Cover" class="card-image">
                    <div class="card-overlay">
                        <button class="add-to-vault-button">&plus; Vault</button>
                    </div>
                </div>
                <div class="card-info">
                    <h3>${book.title}</h3>
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <p class="card-meta">${book.meta}</p>
                        <p style="color: #FDBB2D; font-weight: bold; margin: 0; font-size: 12px;">
                            &#9733; ${book.rating || 'N/A'}
                        </p>
                    </div>
                </div>
            </div>
        `;
        mediaGrid.innerHTML += cardHTML;
    });
}

window.onload = () => { sortAndLoadBooks(); };