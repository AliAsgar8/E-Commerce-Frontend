import React from 'react'
import Main from '../component/Main'
import LatestCollection from '../component/LatestCollection'
import BestSeller from '../component/BestSeller'
import OurPolicy from '../component/OurPolicy'
import NewsLetterBox from '../component/NewsLetterBox'

const Home = () => {
    return (
        <>
            <Main />
            <LatestCollection/>
            <BestSeller/>
            <OurPolicy/>
            <NewsLetterBox/>
        </>
    )
}

export default Home