import React, { useEffect, useState } from 'react'
import { instance } from './config'
import Topbar from './Navbar'


export default function Home({ title, fetchUrl }) {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const fetchMovies = async () => {
            const res = await instance.get(fetchUrl)
            setMovies(res.data.results)

        }
        fetchMovies()
    }, [fetchUrl])

    console.log(movies);
    return (
        <div>
            <Topbar />
        </div>
    )
}
