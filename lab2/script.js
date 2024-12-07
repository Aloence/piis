
 const personalMovieDB = {
    privat: false, 
    movies: {
        "Шрек": 10,
        "Шрек 2 ": 10,
        "Шрек 3 ": 10
    }
};

function displayMovies() {
    const movieTableDiv = document.getElementById('movieTable');
    
    const table = document.createElement('table');
    const headerRow = document.createElement('tr');

    const headerCell1 = document.createElement('th');
    headerCell1.textContent = 'Название фильма';
    const headerCell2 = document.createElement('th');
    headerCell2.textContent = 'Оценка';

    headerRow.appendChild(headerCell1);
    headerRow.appendChild(headerCell2);
    table.appendChild(headerRow);

    // Object.entries - hashmap to arr[][]
    for (const [movie, rating] of Object.entries(personalMovieDB.movies)) {
        const row = document.createElement('tr');
        const cell1 = document.createElement('td');
        cell1.textContent = movie;
        const cell2 = document.createElement('td');
        cell2.textContent = rating;

        row.appendChild(cell1);
        row.appendChild(cell2);
        table.appendChild(row);
    }

    movieTableDiv.appendChild(table);
}

if (!personalMovieDB.privat) {
    displayMovies();
}