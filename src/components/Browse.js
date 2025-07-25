import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


const Browse = () => {
// Custom hook to fetch now playing movies
// This will trigger the API call and update the Redux store
 useNowPlayingMovies();

  return  <div> 
     <Header/>
     <MainContainer/>
     <SecondaryContainer/>
     {/* 
            MainContainer
               -videoBackgroud
               -videoTitle
            secondaryContainer
                -MoviesList * n
                -MianContainer
      */}
  </div>
  
}

export default Browse
