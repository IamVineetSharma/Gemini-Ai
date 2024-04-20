import React from 'react'
import './Main.css'
import { assests } from '../../assets/assets'
import { useContext } from 'react'
import { Context } from '../../context/context'

const Main = () => {

    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} =useContext(Context)



  return (
   
      <div className="main">
        <div className="nav">
            <p>Gemini</p>
            <img src={assests.person} alt="" />
        </div>
        <div className="main-container">

            {!showResult?
            <>
            <div className="greet">
                <p><span>Hello, Vineet.</span></p>
                <p className='pv'>How Can I Help You Vineet ?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Give me a beginner's guide to an activity</p>
                    <img src={assests.campus} alt="" />
                </div>
                <div className="card">
                    <p>Help me pick a movie to watch based on a genre</p>
                    <img src={assests.bulb} alt="" />
                </div>
                <div className="card">
                    <p>Help me find the latest trends</p>
                    <img src={assests.text} alt="" />
                </div>
                <div className="card">
                    <p>As a social trend expert, explain a term</p>
                    <img src={assests.code} alt="" />
                </div>
            </div>
            </>
            :<div className='result'>
                <div className="result-title">
                    <img src={assests.person} alt="" />
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img src={assests.gemini} alt="" />
                    {loading
                    ?<div className='loader'>
                        <hr />
                        <hr />
                        <hr />
                    </div>
                    :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                    }
                </div>
            </div>
            }


            

            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" onChange={(e)=> setInput(e.target.value)} value={input} placeholder="Enter Your Prompt" id="" />
                    <div>
                        <img src={assests.imgplus} alt="" />
                        <img src={assests.mic} alt="" />
                        {input?<img onClick={() =>onSent()} src={assests.send} alt="" />:null}
                    </div>
                </div>
                <p className="bottom-info">
                Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy & Gemini Apps
                </p>
            </div>
        </div>
    </div>
    
  )
}

export default Main
