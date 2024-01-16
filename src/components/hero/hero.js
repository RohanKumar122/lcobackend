import React from 'react'
import "./hero.css"

const hero = () => {
    return (
        <div>
            <div>
                <main className='gradi'>
                    <div className='HeroContainer'>
                        <div className='HPro'>
                            <div className='HTitle'>
                                <h6 className='HHeadUP'><span>SEASON 10</span></h6>

                                <h2 className='HHead'>Indian Intelligence Test,</h2>
                                <p  className='HSufTITLE'><span>In the past 8 years, more than 5.75 Lakhs students from 1000+ Schools across 8 states have participated in Indian Intelligence Test conducted by our Jagran Group.</span></p>
                                <button className='HButton' onClick={()=>{window.location.href="/register"}}> Register</button>
                            </div>
                           <div className='PosterConTainer'>
                           <img src={require('../Img/final.jpg')} alt=" PosterImg" className='PosterImg'/>
                           </div>
                        </div>
                    </div>

                </main>


            </div>


        </div>
    )
}

export default hero