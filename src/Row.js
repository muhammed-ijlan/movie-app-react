import React, { useEffect, useState } from 'react'
import { instance } from './config'


export default function Home({ title, fetchUrl }) {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const fetchMovies = async () => {
            const res = await instance.get(fetchUrl)
            setMovies(res.data.results)

        }
        fetchMovies()
    }, [])
    console.log(movies);
    return (
        <div>{title}</div>
    )
}
