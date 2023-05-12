import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import queryContext from '@/context/query/queryContext';
import loadingContext from '@/context/loading/loadingContext';
import showVideoContext from '@/context/showVideo/showVideoContext';
import videoContext from '@/context/video/videoContext';
import savedContext from '@/context/saved/savedContext';

const Search = () => {

    const QueryContext = useContext(queryContext);
    const { query, setQuery } = QueryContext;
    const LoadingContext = useContext(loadingContext);
    const { setLoading } = LoadingContext;
    const ShowVideoContext = useContext(showVideoContext);
    const { setVideoList } = ShowVideoContext;
    const VideoContext = useContext(videoContext);
    const { setTotalVideos, getTrendingVideos, getCountryCode } = VideoContext;
    const SavedContext = useContext(savedContext);
    const { fetchSavedVideos } = SavedContext;

    const handleChange = (e) => {
        setQuery(e.target.value);
    }

    // const getTrendingVideos = async () => {
    //     setLoading(true);
    //     const country = await getCountryCode();
    //     const response = await fetch(`https://clipsurf-main.onrender.com/api/videos/${country}`, {
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //     });
    //     const json = await response.json();
    //     setLoading(false);
    //     setTotalVideos(json.data);
    //     setVideoList(json.data.slice(0, 3));
    //   };

    // const getCountryCode = async () => {
    //     const response = await fetch('https://ipapi.co/json/');
    //     const data = await response.json();
    //     return data.country_code;
    // };

    const handleSubmit = async () => {
        setLoading(true);
        const country = await getCountryCode();
        fetchSavedVideos();
        const response = await fetch(`https://clipsurf-main.onrender.com/api/search/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: query,
                country: country,
            }),
        });
        const json = await response.json();
        setLoading(false);
        setQuery('');
        setTotalVideos(json.data);
        setVideoList(json.data.slice(0, 3));
    };

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className='search mt-36 mb-12 text-center'>
                <h1 className='text-7xl font-extrabold text-white font-jost'>Clip<span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500'>Surf</span></h1>
                <h3 className='text-white text-sm font-light font-jost my-3'>Search With the Power of AI</h3>
                <div className="input">
                    <FontAwesomeIcon className='relative text-white left-8' icon={faSearch} />
                    <input className='bg-[rgba(255,255,255,0.2)] text-white outline-none p-3 pl-12 pr-6 lg:w-[40%] mt-6 mb-10 rounded-full' type="text" name="query" id="query" placeholder='Search for a video' title='Start Typing' onChange={handleChange} value={query} />
                </div>
                <Link to='videos' smooth={true} duration={500} className='cursor-pointer'>
                    <motion.button
                        whileHover={{ y: -3, scale: 1.05, boxShadow: '0 0 10px rgba(255,255,255,0.3)' }}
                        className={`overflow-hidden border border-[rgba(255,255,255,0.4)] before:-translate-x-[12rem] hover:before:translate-x-0 before:block before:absolute before:-inset-3 before:skew-x-[30deg] relative inline-block before:bg-gradient-to-r from-pink-500 to-violet-500 text-white py-2 px-8 mx-1 rounded-full before:transition-all before:duration-500`} title='Search' onClick={() => { getTrendingVideos() }}>
                        <span className={`relative font-roboto text-lg transition-all duration-500`}>Trending</span>
                    </motion.button>
                </Link>
                <Link to='videos' smooth={true} duration={500} className='cursor-pointer'>
                    <motion.button
                        whileHover={{ y: -3, scale: 1.05, boxShadow: '0 0 10px rgba(255,255,255,0.3)' }}
                        className={`overflow-hidden border border-[rgba(255,255,255,0.4)] before:-translate-x-[12rem] hover:before:translate-x-0 before:block before:absolute before:-inset-3 before:skew-x-[30deg] relative inline-block before:bg-gradient-to-r from-pink-500 to-violet-500 text-white py-2 px-8 mx-1 rounded-full before:transition-all before:duration-500`} title='Search' onClick={() => { query.length > 0 && handleSubmit() }}>
                        <span className={`relative font-roboto text-lg transition-all duration-500`}>Search</span>
                    </motion.button>
                </Link>
            </motion.div>
        </>
    )
}

export default Search
