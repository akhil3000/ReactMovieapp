export const fetchRatedMovies=async()=>{
    const res=await fetch(
     `https://api.themoviedb.org/3/guest_session/${localStorage.getItem("guest_session_id")}/rated/movies?language=en-US&page=1&sort_by=created_at.asc&
      api_key=df5da28de65285a34571c70e2a895864`,
      
    );
    
    return res.json();
    
    };

    export const fetchRatedTvShows=async()=>{
        const res=await fetch(
          `https://api.themoviedb.org/3/guest_session/${localStorage.getItem("guest_session_id")}/rated/tv?language=en-US&page=1&sort_by=created_at.asc&

         api_key=df5da28de65285a34571c70e2a895864`,
        );
        
        return res.json();
        
        };

    