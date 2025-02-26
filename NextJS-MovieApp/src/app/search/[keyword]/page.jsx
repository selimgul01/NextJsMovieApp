import Movies from '@/components/Movies';
import React from 'react'

const Page =async ({params}) => {

  const {keyword} = await params

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOTI5YzEzZDJlZWRiNjViZjM5ZjRjNDVhMTE0YjMyZSIsIm5iZiI6MTcyMjQ0Mjg0Ny4zMDgsInN1YiI6IjY2YWE2NDVmODNhYmQzNzI4ZjUwNTc0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oMvSn8TUSEgKH4TZgJcS-wICZ8bBlH0_SHsRDlwlfrQ'
    }
  };
  
  const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${keyword}`, options)
  const data = await res.json()

  return (
    <div>
      {
        !data?.results ? <div>Aranılan Şey Bulunamadı!</div> : 
        
          <div className='flex items-center flex-wrap p-5 gap-5'>
            {
              data?.results?.map((movie,i)=>(
                <Movies  movie={movie} key={i} />
              ))
            }
          </div>
        
      }
    </div>
  )
}

export default Page
