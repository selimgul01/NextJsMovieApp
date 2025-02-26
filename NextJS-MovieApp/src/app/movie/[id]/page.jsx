import Image from 'next/image';
import React from 'react'


const getMovie = async (id) => {

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOTI5YzEzZDJlZWRiNjViZjM5ZjRjNDVhMTE0YjMyZSIsIm5iZiI6MTcyMjQ0Mjg0Ny4zMDgsInN1YiI6IjY2YWE2NDVmODNhYmQzNzI4ZjUwNTc0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oMvSn8TUSEgKH4TZgJcS-wICZ8bBlH0_SHsRDlwlfrQ'
    }
  };
  
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
  const data = await res.json()
  return data
}

const Page = async ({params}) => {

    const {id} = await params

    const movieDetail = await getMovie(id)

  console.log(movieDetail)
    
  return (
    <div className='relative p-7 min-h-screen'>
       <Image alt='movie image' fill src={`https://image.tmdb.org/t/p/original${movieDetail?.poster_path || movieDetail?.backdrop_path}`} />
       <div className='absolute'>
          <div className='text-4xl font-bold my-3'>{movieDetail?.title}</div>
          <div className='w-1/2 text-xl  my-3'>{movieDetail?.overview}</div>
          <div className='w-1/2  my-3'>{movieDetail?.release_date} - {movieDetail?.vote_average}</div>
          <div className='text-xl my-3 border w-32 p-3 rounded-md text-center cursor-pointer hover:bg-white hover:text-black transition-colors'>Trail</div>
       </div>
      
    </div>
  )
}

export default Page
