import {useState} from "react";
import{Container,Menu} from "semantic-ui-react";
import {DisplayType} from "../home";
import {Segment} from "semantic-ui-react";
import { fetchRatedMovies } from "./query";
import { fetchRatedTvShows } from "./query";
import { useQuery } from "@tanstack/react-query";
import { ColumnDisplay } from "../home/ColumnDisplay";

export const Rated=()=>{
const[activeTabs,setActiveTabs]=useState<DisplayType>(DisplayType.Movies); 
 

const{data:ratedMovies,isLoading:isLoadingRatedMovies}=useQuery({
  queryKey:["ratedMovies"],
  queryFn:fetchRatedMovies,
  });  
  const{data:ratedTvShows,isLoading:isLoadingRatedTvShows}=useQuery({
    queryKey:["ratedTvShows"],
    queryFn:fetchRatedTvShows,
    }); 


return (
     <Container style={{marginTop:50}}>
     {" "}
     <Menu>
      <Menu.Item
       name="Movies"
       active={activeTabs===DisplayType.Movies}
       onClick={()=>setActiveTabs(DisplayType.Movies)}
      />
       <Menu.Item
       name="Tv Shows"
       active={activeTabs===DisplayType.TvShows}
       onClick={()=>setActiveTabs(DisplayType.TvShows)}
      />

     </Menu>
     <Segment>

     {isLoadingRatedMovies||isLoadingRatedTvShows?(
    
    <div>Loading...</div>
   ):(    

   <div style={{marginTop:20}}>
    
      {activeTabs===DisplayType.Movies?(
        
        <ColumnDisplay data={ratedMovies.results} displayType={DisplayType.Movies}/>
           

      ):(
        <ColumnDisplay data={ratedTvShows.results} displayType={DisplayType.TvShows}       
        />
          

      )


      }
    </div>
   )}

     </Segment>
     </Container>
)
}
 