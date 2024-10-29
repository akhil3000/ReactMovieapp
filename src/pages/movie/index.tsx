import { Segment } from "semantic-ui-react";
import { useParams } from "react-router-dom";
import {Loader} from "semantic-ui-react";
import { useQuery } from "@tanstack/react-query";
import { fetchMovieDetails } from "./query";
import {Grid} from "semantic-ui-react";
import {Header} from "semantic-ui-react";
import {Image} from "semantic-ui-react";
export const Movie=()=>{
    const {id}=useParams<string>();

    if(!id){
       return <div>Invalid Movie ID</div>

    }

const{data,isLoading}=useQuery({
queryKey:["movie"],
queryFn:()=>fetchMovieDetails(id),

});

if(isLoading){

    return<Loader active/>;
}

 

    return <div style={{marginTop:50}} >
        <Segment>

             <Header>{data.title}</Header>
             <Grid columns={2} divided textAlign="left" style={{marginTop:20}} >
                <Grid.Row>
                   <Grid.Column width={6}>
                    <div
                      style={{
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                        height:"100%",    

                      }}
                    >
                   <Image
                   src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
                   size="medium"
                   centered 
                   />
                        
                    </div>

                   </Grid.Column>

                </Grid.Row>
             </Grid>
        </Segment>
        
     </div>;
}