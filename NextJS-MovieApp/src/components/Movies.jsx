"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"




const Movies = ({movie}) => {

  const router = useRouter()

  
  return (
    <div onClick={()=>router.push(`/movie/${movie?.id}`)} className=' relative cursor-pointer'>
      <Image alt="movie image" width={300} height={300} src={`https://image.tmdb.org/t/p/original${movie?.poster_path || movie?.backdrop_path}`} />

      <div className="absolute bottom-0 p-3 w-full h-full flex flex-col justify-end opacity-0 hover:opacity-100 transition-opacity">
        <div className="text-xl font-bold">{movie?.title}</div>
        <div className="text-xl font-bold">{movie?.vote_average}</div>
        <div className="text-xl font-bold">{movie?.release_date}</div>
          
      </div>
    </div>
  )
}

export default Movies
