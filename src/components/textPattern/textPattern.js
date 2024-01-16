import React from 'react'
import "./textpattern.css"
const textPattern = () => {
    return (
        <section id='textPattern'>
            <div>
            <div className='TextPattern'>
                {/* <div className='TPTitle'>
                    <h2> Test Pattern</h2>
                </div> */}
                <div className='TPBox1'>
                    <div className='TPPro'>
                        <div className='TPBox1HEAD'>
                            <h1 className='TPboxTitle1'>Multiple Intelligence Test</h1>
                            <h6 className='TPHeadUP'>This test evaluates candidates across multiple
                                intelligence which is based on multiple intelligence theory by Dr. Howard Gardner.
                                This test checks candidate’s intelligence across nine different intelligences to account
                                for br/oader range of human potential in candidate.</h6>

                            <h2 className='TPHead'>Format:</h2>
                            <p className='TPSufTITLE'>
                                <li>Duration - 30 Min</li>
                                <li>Multiple Intelligence</li>
                            </p>
                            {/* <button className='TPButton'> Read more>    </button> */}
                        </div>
                        <div className='PosterConTainer'>
                            <img src={require("../Img/istockphoto2.jpg")} alt=" PosterImg" className='PosterImg3' />
                        </div>
                    </div>

                </div>
                <div className='TPBox2'>

                    <div className='TPPro'>
                        <div className='PosterConTainer'>
                            <img src={require("../Img/kid.jpg")} alt=" PosterImg" className='PosterImg4' />
                        </div>
                        <div className='TPBox2HEAD'>
                            <h1 className='TPboxTitle2'>Scholastic Aptitude Test</h1>
                            <h6 className='TPHeadUP2'>This test are designed to assess candidate's logical reasoning
                                or mental ability. Aptitude tests will measure candidate's abilities related to logical
                                reasoning Mathematics, English, Science, Commerce and General Knowledge based on your stream.</h6>

                                <div className="cl-features21">
                <div className="container215" id="">

                    
                            <div class="containertble">
                                <h2 className='TPHead2'>Format:</h2>
                                <p className='TPSufTITLE2'>
                                    <li>Duration - 30 Min</li>

                                </p>
                                <div >

                                    <div className='tablecont'>
                                        <table class="table table-bordered table-light" id='tbl'>
                                            <tbody>
                                                <tr>
                                                    <td rowspan="2"><br />CLASS: <br />5th-10th</td>
                                                    <td>Subject:</td>
                                                    <td>Maths</td>
                                                    <td>Science</td>
                                                    <td>Reasoning</td>
                                                    <td>General knowledge </td>
                                                </tr>
                                                <tr>
                                                    <td>Question:</td>
                                                    <td>15</td>
                                                    <td>15</td>
                                                    <td>15</td>
                                                    <td>15 </td>
                                                </tr>

                                                <tr>
                                                    <td rowspan="2">CLASS:<br /> 11th-12th PCM</td>
                                                    <td>Subject:</td>
                                                    <td>Reasoning</td>
                                                    <td>Physics</td>
                                                    <td>Chemistry</td>
                                                    <td>Maths</td>
                                                </tr>
                                                <tr>
                                                    <td>Question:</td>
                                                    <td>15</td>
                                                    <td>15</td>
                                                    <td>15</td>
                                                    <td>15 </td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="2">CLASS:<br />11th-12th PCB</td>
                                                    <td>Subject:</td>
                                                    <td>Reasoning</td>
                                                    <td>Physics</td>
                                                    <td>Chemistry</td>
                                                    <td>Biology</td>
                                                </tr>
                                                <tr>
                                                    <td>Question:</td>
                                                    <td>15</td>
                                                    <td>15</td>
                                                    <td>15</td>
                                                    <td>15 </td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="2">CLASS:<br />11th-12th Commerce</td>
                                                    <td>Subject:</td>
                                                    <td>Reasoning</td>
                                                    <td>Accountancy</td>
                                                    <td>Business studies</td>
                                                    <td>Maths</td>
                                                </tr>
                                                <tr>
                                                    <td>Question:</td>
                                                    <td>15</td>
                                                    <td>15</td>
                                                    <td>15</td>
                                                    <td>15 </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        
                </div>
            </div>
                            {/* <button className='TPButton2'> Read more>    </button> */}
                        </div>

                    </div>
                </div>

            </div>
           
        </div>
        </section>





    )
}

export default textPattern