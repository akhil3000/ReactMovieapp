import {useState} from "react";
import{Container,Menu} from "semantic-ui-react";
import {DisplayType} from "../home";
import {Segment} from "semantic-ui-react";
import { fetchRatedMovies } from "./query";
import { fetchRatedTvShows } from "./query";
import { useQuery } from "@tanstack/react-query";
import { ColumnDisplay } from "../home/ColumnDisplay";
import {Header} from "semantic-ui-react";
export const Rated=()=>{
const[activeTabs,setActiveTabs]=useState<DisplayType>(DisplayType.Movies); 
 

const{data:ratedMovies}=useQuery({
  queryKey:["ratedMovies"],
  queryFn:fetchRatedMovies,
  });  
  const{data:ratedTvShows}=useQuery({
    queryKey:["ratedTvShows"],
    queryFn:fetchRatedTvShows,
    }); 
   


return (
     <Container style={{marginTop:50}}>
     {" "}
     <Menu pointing secondary>
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
      {activeTabs === DisplayType.Movies ? (
         <div>

          <Header as={"h2"}>
           Rated Movies
          </Header>
          <ColumnDisplay
          data={ratedMovies.results}
          displayType={DisplayType.Movies}
        
          
          />
      
         </div>

      ):(

        <div>

          <Header as={"h2"}>
           Rated TV Shows
          </Header>
          <ColumnDisplay
          data={ratedTvShows.results}
          displayType={DisplayType.TvShows}
        
          
          />
           
        
         </div>
      )
        

      }

     </Segment>
     
     </Container>
)
}
 