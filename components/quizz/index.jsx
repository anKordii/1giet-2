import React, { useState, useEffect } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import {NotificationManager} from 'react-notifications';
import { supabase } from '../../lib/initSupabase';

const Quizz = ({questions}) => {
    const [progressBarInterval, setProgressBarInterval] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
    const [isGameOver, setGameOver] = useState(null);
    const [wrongAnserwer, setWrongAnserwer] = useState(null);
	const [score, setScore] = useState(0);
    
    let __timePlay = 5;
    let isGameEnd = null;

    useEffect(() => {
        async function run(){
            progressBarStart('game', __timePlay);
        }
        run();
    }, [])

    const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
            const audio = document.querySelector("#effects")
            audio.loop = false;
            audio.src = "/music/confirm.mp3";
            audio.play();
			setScore(score + 1);
            setCurrentQuestion(currentQuestion + 1);
            clearInterval(progressBarInterval);
            progressBarStart('game', __timePlay);

            if((currentQuestion + 1) === questions.length){
                const audio = document.querySelector("#effects")
                audio.loop = false;
                audio.src = "/music/confirm.mp3";
                audio.play();
                audio.volume = 0.1;
                audio.src = "/music/insystem.mp3";
                audio.play(); 

                setGameOver(true);
                isGameEnd = true;

                clearInterval(progressBarInterval);
                progressBarStart('end', 2);

                setShowScore(true);
            }
            
            return;
		}

        setWrongAnserwer(true);
        const audio = document.querySelector("#effects")
        audio.loop = false;
        audio.src = "/music/wrong.mp3";
        audio.play(); 


        setTimeout(() => {
            location.reload()
        }, 2000);
	};

    function shutdown(e){
        e.preventDefault();

        confirmAlert({
            title: 'SYSTEM SHUTDOWN',
            message: 'Are you sure you want to shutdown system?',
            buttons: [
                {
                    label: 'Confirm',
                    className: 'agree',
                    onClick: () => {
                        const audio = document.querySelector("#effects")
                        audio.loop = false;
                        audio.volume = 0.3;
                        audio.src = "/music/system_shutdown.mp3";
                        audio.play(); 

                        requestShutdown();
                    }
                },
                {
                    label: 'Close',
                    onClick: () => {
                        window.location.replace("/");
                    }
                }
            ],
            closeOnEscape: false,
            closeOnClickOutside: false
        })
    }
    const requestShutdown = async () => {
        try {
            const { data, error } = await supabase.from('status').update({status: "false" }).match({ name: "shutdown" });

            NotificationManager.success("SYSTEM DEAD");

            document.body.style.backgroundColor = "black";
            document.body.innerHTML = "";

            setTimeout(() => {
                window.location.replace("/")
            }, 1500);
            
        } catch (error) {
            console.log(error)
        }
    };
    const timeEnd = async () => {
        const audioEffect = document.querySelector("#effects")
        audioEffect.loop = false;
        audioEffect.volume = 0.5;
        audioEffect.src = "/music/wrong.mp3";
        audioEffect.play(); 
        setGameOver(true);
        isGameEnd = true;

        clearInterval(progressBarInterval);
        
        setWrongAnserwer(true);
        setTimeout(() => {
            location.reload();
        }, 2000);
        
    }
    function progressBarStart(type, time) {
        let maxwidth = 1000;
        let width = maxwidth;
        const process = () => {
            if (width > 0) {
                if (isGameOver === null){
                    width--;
                }
                if(isGameEnd === null){
                    document.getElementById('progress-bar').style.width = (width * 100.0) / maxwidth + '%';
                }
                
            }else{
                if(type === 'game' && isGameEnd === null){
                    timeEnd();
				    return;
                }
            }
        };
        clearInterval(progressBarInterval);
        setProgressBarInterval(setInterval(process, time))
    }
    return (
        <>
        <style>{`
            body{
                cursor: crosshair;
                background-color: black;
            }
            ::-moz-selection { /* Code for Firefox */
                color: black;
                background: lime;
            }
            ::selection {
                color: black;
                background: lime;
            }
        `}</style>
        {wrongAnserwer && (
            <>
                <style>{`
                .quizz_box{
                    background-image: url(/img/red-hack.gif)
                }
                `}</style>
                <div className='quizz_box d-flex align-items-center justify-content-center' style={{zIndex: 10000}}>
                    <div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/SombraASCIISkull.svg/800px-SombraASCIISkull.svg.png" className='img-fluid' style={{pointerEvents: "none"}} />
                        <div className='text-center'>
                            <h1 style={{color: "red"}}>TRY AGAIN</h1>
                        </div>
                    </div>
                </div>
            </>
        )}
        {showScore && (
            <>
                <style>{`
                    .react-confirm-alert-overlay{
                        z-index: 1000000000000000000000 !important;
                    }
                `}</style>
                <div className='quizz_box d-flex align-items-center justify-content-center' style={{zIndex: 10000122}}>
                    <div style={{background: "#000000d4", borderRadius: ".50rem"}} className="p-2">
                        <div className='text-center'>
                            <h1 style={{color: "red"}} className='p-0 m-0'>YOUR IN</h1>
                            <p className='p-0 m-0 mb-2'>SYSTEM HACKED</p>
                            <button onClick={shutdown} className="quizz_button fs-6" style={{backgroundColor: "red", borderRadius: ".25rem"}}>SHUTDOWN</button>
                        </div>
                    </div>
                    
                </div>
            </>
        )}
		<div className='quizz_box d-flex align-items-center justify-content-center'>
            <div>
                <div className='text-center'>
                    <h1 className='pb-0 mb-0' style={{fontSize: "5rem", fontFamily: "ui-monospace"}}>BACKDOOR</h1>
                    <p className='pt-0 mt-0'>malware</p>
                </div>
                <div className='quizz_question'>
                    {!showScore && (
				        <>
                            <div>
                                <div className='mb-4 text-center'>
                                    <h1 className='fs-2 p-0 m-0'>{currentQuestion + 1} / {questions.length}</h1>
                                    <p className='p-0 m-0 fw-bold' style={{color: "#00b7ff"}}>STATUS</p>
                                </div>
                            </div>
                            <div>
                                <h1>{questions[currentQuestion].questionText}</h1>
                            </div>
					        <div className='answer-section mt-4 text-center'>
						        {questions[currentQuestion].answerOptions.map((i, index) => (
							        <span key={index} onClick={() => handleAnswerOptionClick(i.isCorrect)} className="quizz_button ms-0 m-2">{i.answerText}</span>
						        ))}
					        </div>
                            <div className="hackFooter mt-5" style={{width: "100%"}}>
                                <div id="progressBox">
                                    <div className="progressBox">
                                        <div className="progressBar" id="progress-bar"></div>
                                    </div>
                                </div>
                            </div>
				        </>
			        )}
                </div>
                <div className='text-center mt-2'>
                    <p>system: uuid.top@/docchi.pl; 1.02; rp; 1giet.cf; 2.0q</p>
                </div>
            </div>
		</div>
    </ >
    )
};

export default Quizz;
