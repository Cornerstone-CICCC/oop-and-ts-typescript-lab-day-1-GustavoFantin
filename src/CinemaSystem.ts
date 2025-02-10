// 🎟️ Create a Movie Ticket Booking System where users can book tickets and check seat availability.
// 1. Create an enum called MovieGenre with at least 5 movie genres.
// 2. Create a tuple type called Seat which holds (rowLetter: string, seatNumber: number).
// 3. Create a type alias called Movie which contains: movieId (number), title (string), genre (MovieGenre), availableSeats (Seat[]).
// 4. Create a function called addMovie which adds a movie to the movies array. The function needs to return a Movie object.
// 5. Create a function called bookSeat which removes a seat from availableSeats if available. The return needs to be a string.
// 6. Create a function called checkSeatAvailability which returns true if a seat is available and false otherwise.

enum MovieGenre {
  Action,
  Comedy,
  Horror,
  Fantasy,
  Musical
}

type Seat = [string, number] //rowLetter and seatNumber

type Movie = {
  movieId: number,
  title: string,
  genre: MovieGenre,
  availableSeats: Seat[]
}

let movies: Movie[] = [];

function addMovie(movieId:number, title:string, genre:MovieGenre, availableSeats:Seat[]):Movie {
  const movie:Movie = {
    movieId,
    title,
    genre,
    availableSeats
  }
  movies.push(movie)
  
  return movie
}

function bookSeat(movieId:number, rowLetter:string, seatNumber:number) {
  const findMov = movies.filter(muv => muv.movieId === movieId);
  const myMuv = findMov[0]
  let booked:boolean = false


  if (myMuv) {
    myMuv.availableSeats = myMuv.availableSeats.filter((seat) => {
      if (seat[0] === rowLetter && seat[1] === seatNumber) {
        return false;
      }
      booked = true;
    });
  } else {
    return "Movie not found";
  }

  if (booked = true) {
    return `Seat ${rowLetter}${seatNumber} booked successfully`
  } else {
    return `Seat ${rowLetter}${seatNumber} failed!`
  }
}

function checkSeatAvailability(movieId: number, rowLetter:string, seatNumber: number) {
  const isAvailable = movies
  .filter((movie) => movieId === movie.movieId)
  .flatMap((movie) => movie.availableSeats)
  .filter((seat:any) => seat[0] === rowLetter && seat[1] === seatNumber);
  
  return isAvailable
}

// Test cases (Create more if needed)
console.log(addMovie(1, "Avengers", MovieGenre.Action, [["A", 1], ["A", 2]])) // { movieId: 1, title: "Avengers", genre: MovieGenre.Action, availableSeats: [["A", 1], ["A", 2]] }
console.log(bookSeat(1, "A", 1)) // "Seat A1 booked successfully"
console.log(checkSeatAvailability(1, "A", 1)) // false