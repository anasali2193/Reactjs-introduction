import React, { Component } from 'react';

import MovieCard from './MovieCard';



class Dashboard extends Component {   
    // constructor(props){
    //     super(props);
    //     const
      
    //         )

    // }
    render() {
        const { users, movies, usersByMovie } = this.props;
     
    const moviecards = Object.keys(movies).map(id => (
        <MovieCard
          key={id}
          users={users}
          usersWhoLikedMovie={usersByMovie[id]}
       
          movieInfo={movies[id]}
    
        />

    ));

      return (
        <ul>
            {moviecards}
        </ul>
        )
    }
  }
  
  export default Dashboard;
