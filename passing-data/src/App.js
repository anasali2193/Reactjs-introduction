import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './Dashboard';

/*
Display a list of movies where each movie contains a list of users that favorited it.

For detailed instructions, refer to instructions.md.
*/

const profiles = [
  {
    id: 1,
    userID: '1',
    favoriteMovieID: '1',
  },
  {
    id: 2,
    userID: '2',
    favoriteMovieID: '1',
  },
  {
    id: 3,
    userID: '4',
    favoriteMovieID: '5',
  },
  {
    id: 4,
    userID: '5',
    favoriteMovieID: '2',
  },
  {
    id: 5,
    userID: '3',
    favoriteMovieID: '5',
  },
  {
    id: 6,
    userID: '6',
    favoriteMovieID: '4',
  },
];

const users = {
  1: {
    id: 1,
    name: 'Jane Jones',
    userName: 'coder',
  },
  2: {
    id: 2,
    name: 'Matthew Johnson',
    userName: 'mpage',
  },
  3: {
    id: 3,
    name: 'Autumn Green',
    userName: 'user123',
  },
  4: {
    id: 3,
    name: 'John Doe',
    userName: 'user123',
  },
  5: {
    id: 5,
    name: 'Lauren Carlson',
    userName: 'user123',
  },
  6: {
    id: 6,
    name: 'Nicholas Lain',
    userName: 'user123',
  },
};

const movies = {
  1: {
    id: 1,
    name: 'Planet Earth',
  },
  2: {
    id: 2,
    name: 'Selma',
  },
  3: {
    id: 3,
    name: 'Million Dollar Baby',
  },
  4: {
    id: 4,
    name: 'Forrest Gump',
  },
  5: {
    id: 5,
    name: 'Get Out',
  },
};

class App extends Component {
   constructor(props) {
    super(props);
    this.usersByMovie = {};

    profiles.forEach(profile => {
      const movieID = profile.favoriteMovieID;
     // 11
     // 21
     // 45
     // 52
     // 35
     // 64
       // 1 sear !found , inset 1 ..search 2nd prof favmovieid=1 then condition true 
      // 1,2 
      // comes for 3 ...5 again insert 5 
      
      if (this.usersByMovie[movieID]) {
        this.usersByMovie[movieID].push(profile.userID);
//        console.log('sadassd'+this.usersByMovie[movieID])
      } else {
        this.usersByMovie[movieID] = [profile.userID];
  //      console.log('aaaaaaaaaaa'+this.usersByMovie[movieID])
      }
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>How Popular is Your Favorite Movie?</h2>
<Dashboard 
profiles = {profiles}
movies ={movies}
users ={users}
usersByMovie={this.usersByMovie}


/>

      </div>
    );
  }
}

export default App;


// {profiles.map((profile)=>{
//   const userName = users[profile.userID].name;
// const favMovieName = movies[profile.favoriteMovieID].name;

// return (
//   /*
//   You need to include the `key` property every time you create list
//   elements in React. The key property is necessary because it enables
//   React to perform reconciliation
//   (https://reactjs.org/docs/reconciliation.html)
//   */
//   <li key={profile.id}>
//     {/* If the syntax below looks unfamiliar, please take the following
//   course:
//   https://www.udacity.com/course/es6-javascript-improved--ud356
//     */}
//     <p>{`${userName}'s favorite movie is "${favMovieName}."`}</p>
//   </li>
// );
// })}
