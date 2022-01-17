import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className='home'>
            <h1>Welcome to Nasa Apis Space Station!</h1>
            <Link className='home-link' to="/nasaphoto">nasa picture of day!</Link>
        </div>
    )
}
