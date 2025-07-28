import { use } from 'react';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTrendingMovies from '../hooks/useTrendingMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';


const Browse = () => {
// Custom hook to fetch now playing movies
// This will trigger the API call and update the Redux store
 useNowPlayingMovies();
 usePopularMovies();
 useTrendingMovies();
 useUpcomingMovies();

 const showGptSearch = useSelector((store) => store.gpt.showGptSearch); 

  return  <div className='bg-black w-screen'> 
     
     <Header/>
     {
        // If showGptSearch is true, render the GptSearch component
        // This will display the GPT search interface
        showGptSearch ? (<GptSearch/>) :
        
        (<>
           <MainContainer/>
           <SecondaryContainer/>
        </>)
     }
    
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
