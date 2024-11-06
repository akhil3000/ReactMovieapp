export const fetchTvShowDetails=async(tvShowID:string)=>{
    const res=await fetch(
     `https://api.themoviedb.org/3/tv/${tvShowID}?language=en-US`,
      {
    
        headers:{
         Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjVkYTI4ZGU2NTI4NWEzNDU3MWM3MGUyYTg5NTg2NCIsIm5iZiI6MTcyOTc2MjY0Ni4xNjc5NzEsInN1YiI6IjY3MTc3YmVlNTBhNmViMGJmYmMyODE3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.05CdhrIe2wwPwxEl8kI9gV0YYw-j4uZlq62uvLtOu4I"   
    
        },
     }   
    );
    
    return res.json();
    
    };