"use strict";
// 🎟️ Create a Movie Ticket Booking System where users can book tickets and check seat availability.
// 1. Create an enum called MovieGenre with at least 5 movie genres.
// 2. Create a tuple type called Seat which holds (rowLetter: string, seatNumber: number).
// 3. Create a type alias called Movie which contains: movieId (number), title (string), genre (MovieGenre), availableSeats (Seat[]).
// 4. Create a function called addMovie which adds a movie to the movies array. The function needs to return a Movie object.
// 5. Create a function called bookSeat which removes a seat from availableSeats if available. The return needs to be a string.
// 6. Create a function called checkSeatAvailability which returns true if a seat is available and false otherwise.
var MovieGenre;
(function (MovieGenre) {
    MovieGenre[MovieGenre["Action"] = 0] = "Action";
    MovieGenre[MovieGenre["Comedy"] = 1] = "Comedy";
    MovieGenre[MovieGenre["Horror"] = 2] = "Horror";
    MovieGenre[MovieGenre["Fantasy"] = 3] = "Fantasy";
    MovieGenre[MovieGenre["Musical"] = 4] = "Musical";
})(MovieGenre || (MovieGenre = {}));
let movies = [];
function addMovie(movieId, title, genre, availableSeats) {
    const movie = {
        movieId,
        title,
        genre,
        availableSeats
    };
    movies.push(movie);
    return movie;
}
function bookSeat(movieId, rowLetter, seatNumber) {
    const findMov = movies.filter(muv => muv.movieId === movieId);
    const myMuv = findMov[0];
    let booked = false;
    if (myMuv) {
        myMuv.availableSeats = myMuv.availableSeats.filter((seat) => {
            if (seat[0] === rowLetter && seat[1] === seatNumber) {
                return false;
            }
            booked = true;
        });
    }
    else {
        return "Movie not found";
    }
    if (booked = true) {
        return `Seat ${rowLetter}${seatNumber} booked successfully`;
    }
    else {
        return `Seat ${rowLetter}${seatNumber} failed!`;
    }
}
function checkSeatAvailability(movieId, rowLetter, seatNumber) {
    const isAvailable = movies
        .filter((movie) => movieId === movie.movieId)
        .flatMap((movie) => movie.availableSeats)
        .filter((seat) => seat[0] === rowLetter && seat[1] === seatNumber);
    return isAvailable;
}
// Test cases (Create more if needed)
console.log(addMovie(1, "Avengers", MovieGenre.Action, [["A", 1], ["A", 2]])); // { movieId: 1, title: "Avengers", genre: MovieGenre.Action, availableSeats: [["A", 1], ["A", 2]] }
console.log(bookSeat(1, "A", 1)); // "Seat A1 booked successfully"
console.log(checkSeatAvailability(1, "A", 1)); // false
