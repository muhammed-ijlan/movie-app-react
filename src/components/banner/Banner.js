import React, { useEffect, useState } from 'react'
import './Banner.css'
import { instance } from '../../config'
import requests from '../../request'

export default function Banner() {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        const fetchMovie = async () => {
            try {

                const res = await instance.get(requests.fetchNetflixOriginals)

                setMovie(res.data.results[
                    Math.floor(Math.random() * res.data.results.length - 1)
                ])


            } catch (err) {
                console.log(err);
            }
        }

        fetchMovie();
    }, [])

    console.log(movie);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str
    }

    return (
        <header className='banner'
            style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`, backgroundSize: "cover", backgroundPosition: "center center" }}>

            <div className='bannerContents'>
                <h1 className='bannerTitle'>{movie.title || movie.name || movie.original_name}</h1>
                <p>{truncate(movie.overview, 150)}</p>
                <div className='buttons'>
                    <button>Play</button>
                    <button>More info</button>
                </div>
            </div>

        </header>
    )
}
