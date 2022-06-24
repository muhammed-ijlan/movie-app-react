import React, { useEffect, useState } from 'react'
import request from './axios'


export default function Home({ api }) {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await request.get(api)
            setMovies(response.data.results)

        }
        fetchMovies()
        console.log(movies);
    }, [api, movies])
    return (
        <div>Home</div>
    )
}
