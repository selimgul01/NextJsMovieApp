import Movies from "@/components/Movies";


const Page = async ({searchParams}) => {
  
  const {genre} = await searchParams

  const options = {
    method: 'GET',
    headers: { 
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOTI5YzEzZDJlZWRiNjViZjM5ZjRjNDVhMTE0YjMyZSIsIm5iZiI6MTcyMjQ0Mjg0Ny4zMDgsInN1YiI6IjY2YWE2NDVmODNhYmQzNzI4ZjUwNTc0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oMvSn8TUSEgKH4TZgJcS-wICZ8bBlH0_SHsRDlwlfrQ'
    }
  };
  
  const res = await fetch(`https://api.themoviedb.org/3/movie/${genre ? genre : "top_rated"}?language=en-US&page=1`, options)
  const data = await res.json()
  


  return (
    <h1 className="flex justify-center items-center flex-wrap gap-5 ">
      {
        data?.results?.map((movie,i)=>(
          <Movies movie={movie} key={i} />
        ))
      }
    </h1>
  );
}

export default Page
 