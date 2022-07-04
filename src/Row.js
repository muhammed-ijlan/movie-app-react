import React, { useEffect, useState } from 'react'
import { instance } from './config'
import './Row.css'

export default function Home({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([])

    const base_url = "https://image.tmdb.org/t/p/original"

    useEffect(() => {
        const fetchMovies = async () => {
            const res = await instance.get(fetchUrl)
            setMovies(res.data.results)

        }
        fetchMovies()
    }, [fetchUrl])

    console.log(movies);
    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='rowPosters'>
                {movies.map(movie => (
                    <img src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} key={movie.id} alt="" className={`rowPoster ${isLargeRow && "rowPosterLarge"}`}></img>
                ))}
            </div>
        </div>
    )
}
