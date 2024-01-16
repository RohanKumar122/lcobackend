import React from 'react'
import "./About.css"

const About = () => {
    return (
        <section id='About'>
            <div>
                <div className='AboutPAge'>

                    <div className='AHeading'>
                        <h1 >ABOUT IIT INEXT.</h1>
                    </div>
                    <div className='APro'>
                        <img src={require("../Img/Image1.webp")} alt=" PosterImg" className='PosterImg2' />
                        <div className='ATitle'>
                            <p className='AHeadUP'><span>Indian Intelligence Test, an initiative of Jagran Group, is one of the most innovative tests which identifies the intelligence type of each child so that the most suited learning method is used and eventually the best career option is selected. It also identifies the scholastic abilities of participants and rewards the meritorious students.

                            </span></p>

                            <p className='AHead'>In the past 8 years, more than 5.75 Lakhs students from 1000+ Schools across 8 states have participated in Indian Intelligence Test conducted by our Jagran Group.</p>
                            {/* <button className='AButton2'> Read more </button> */}
                        </div>
                        <div className='PosterConTainer'>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About