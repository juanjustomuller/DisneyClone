import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard'
import {IoChevronBackOutline, IoChevronForwardOutline} from 'react-icons/io5'

function MovieList({ genreId }) {

    const [movieList, setMovieList] = useState([])
    const elementRef = useRef(null)

    useEffect(() => {
        getMovieByGenreId()
    }, [genreId])

    const getMovieByGenreId = () => {
        GlobalApi.getMovieByGenreId(genreId).then(resp => {
            //console.log(resp.data.results)
            setMovieList(resp.data.results)
        })
    }

    const sliderRight = (element) => {
        element.scrollLeft+=500
    }
    const sliderLeft = (element) => {
        element.scrollLeft-=500
    }
    return (
        <div className='relative'>
            <IoChevronBackOutline onClick={() => sliderLeft(elementRef.current)}
                className='text-[50px] text-white
            p-2 z-10 cursor-pointer 
            hidden md:block absolute mt-[150px]'  />
            
            <div ref={elementRef} className='flex overflow-x-auto gap-8
            scrollbar-none scroll-smooth pt-5 px-3 pb-5'>
                {movieList.map((item, index) => {
                    return <MovieCard key={index} movie={item} />
                })}
            </div>

            <IoChevronForwardOutline onClick={() => sliderRight(elementRef.current)}
                className='text-[50px] text-white md:block
            p-2 cursor-pointer z-10 top-0
            absolute right-0 mt-[150px]'  />
        </div>
    )
}

export default MovieList