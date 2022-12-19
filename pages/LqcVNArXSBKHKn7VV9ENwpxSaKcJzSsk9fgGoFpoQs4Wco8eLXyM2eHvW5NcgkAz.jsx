import React, {useEffect, useState} from "react";
import { getCookie } from 'cookies-next';
import {SEO, waitforme} from "../backend";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

function giet() {
    const [level, setLevel] = useState(0);
    const [gameStatus, setGameStatus] = useState(null);
    const [isGameOver, setGameOver] = useState(null);
    const [pairs, setPairs] = useState([]);
    const [choosenText, setChoosenText] = useState(-1);
    const [firstId, setFirstId] = useState(undefined);
    const [progressBarInterval, setProgressBarInterval] = useState(null);

    let __timePlay = 300;
    let isGameEnd = null;
    let arrayListNumbers = [];
    const symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';

    useEffect(() => {
        async function run(){
            randomCharacter();
            progressBarStart('game', __timePlay);
            setGameStatus(true);
    
            const audio = document.querySelector("#tension")
            audio.volume = 0.2;
            audio.play(); 
        }
        run();
    }, [])

    function confirmSound(e){
        const audio = document.querySelector("#effects")
        audio.loop = false;
        audio.volume = 0.2;
        if(e){
            audio.src = "/music/crash.mp3";
            audio.play(); 
            return;
        }
        audio.src = "/music/confirm.mp3";
        audio.play(); 
    }
    function createQuest(){
        confirmAlert({
            title: 'Secret #3',
            message: 'Congratulations you have found secret! - code: "-WTJR6"',
            buttons: [
                {
                    label: 'Close',
                    className: 'agree',
                }
            ],
            closeOnEscape: false,
            closeOnClickOutside: false
        })
    }

    const gameWin = () => {
        const audioEffect = document.querySelector("#effects")
        audioEffect.loop = false;
        audioEffect.volume = 0.2;
        audioEffect.src = "/music/insystem.mp3";
        audioEffect.play(); 
        createQuest();
        setGameOver(true);

        clearInterval(progressBarInterval)
        progressBarStart('end', 2);
    };

    const gameOver = async () => {
        const audioEffect = document.querySelector("#effects")
        audioEffect.loop = false;
        audioEffect.volume = 0.5;
        audioEffect.src = "/music/wrong.mp3";
        audioEffect.play();
        isGameEnd = true; 
        setGameOver(true);

        clearInterval(progressBarInterval)
        progressBarStart('end', 2);

        gameOverScreen();
    };

    const timeEnd = async () => {
        const audioEffect = document.querySelector("#effects")
        audioEffect.loop = false;
        audioEffect.volume = 0.5;
        audioEffect.src = "/music/wrong.mp3";
        audioEffect.play(); 
        setGameOver(true);
        isGameEnd = true;

        clearInterval(progressBarInterval)
        progressBarStart('end', 2);

        gameOverScreen();
    }

    function gameOverScreen(){
        confirmAlert({
            title: 'HACK INCOMPLETE',
            buttons: [
                {
                    label: 'Try again',
                    className: 'agree',
                    onClick: () => {
                        location.reload();
                    }
                }
            ],
            closeOnEscape: false,
            closeOnClickOutside: false
        })
    }

    function progressBarStart(type, time) {
        let maxwidth = 1000;
        let width = maxwidth;
        const process = () => {
            if (width > 0) {
                if (isGameOver === null){
                    width--;
                }
                document.getElementById('progress-bar').style.width = (width * 100.0) / maxwidth + '%';
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
    async function randomCharacter() {
        var n = '';
        setDuplicate(arrayListNumbers);
        for (let i = 0; i < 4; i++) {
            n += symbols.charAt(Math.floor(Math.random() * symbols.length));
        }
        if (!arrayListNumbers.includes(n)) arrayListNumbers.push(n);
        n = '';
        if (arrayListNumbers.length < 64) {
            randomCharacter();
        } else if (arrayListNumbers.length >= 64) {
            let shuffledNumbers = arrayListNumbers.sort(function () {
                return Math.random() - 0.5;
            });

            setPairs(shuffledNumbers);
        }
    }
    function setDuplicate(array) {
        if (array.length > 10) {
            array[1] = array[0];
            array[2] = array[3];
            array[4] = array[5];
            array[6] = array[7];
            array[8] = array[9];
        }
        if (array.length == 10) {
            console.log(array[0]);
            console.log(array[3]);
            console.log(array[5]);
            console.log(array[7]);
            console.log(array[9]);
        }
    }
    function choosePair(e){
        e.preventDefault();

        let classList = e.target.classList;
        if (classList.contains("first")) {
            classList.remove('first');
            setChoosenText(-1);
            return;
        }
        if (classList.contains("second")) {
            return;
        }
        if (choosenText === e.target.textContent) {
            classList.add('second');
            document.getElementById(firstId).classList.add('second');
            document.getElementById(firstId).classList.remove('first');
            setChoosenText(-1);
            setLevel(level+1);
            confirmSound();
            if (level >= 4) {
                gameWin();
            }
            return;
        } else {
            classList.add('first');
        }
        if (choosenText != e.target.textContent && choosenText != -1) {
            confirmSound("e");
            gameOver();
            return;
        }
        setFirstId(e.target.id)
        setChoosenText(e.target.textContent);
    }

    return (
        <>
            <SEO data={{
                title: "Hack #1",
                description: "Hack #1",
                url: "/LqcVNArXSBKHKn7VV9ENwpxSaKcJzSsk9fgGoFpoQs4Wco8eLXyM2eHvW5NcgkAz"
            }} />
            <style>{`
                .react-confirm-alert-overlay{
                        z-index: 1000000000000000000000 !important;
                }
            `}</style>
            <div className="quizz_box d-flex align-items-center justify-content-center">
                <div>
                    <div className='text-center'>
                        <h1 className='pb-0 mb-0' style={{fontSize: "5rem", fontFamily: "ui-monospace"}}>FIND PAIRS</h1>
                        <p className='pt-0 mt-0'>malware</p>
                    </div>
                    <div className="quizz_question">
                        {!gameStatus ? (
                            <>
                                <div className='mb-4 text-center'>
                                    <h1 className='fs-2 p-0 m-0'>Loading hack...</h1>
                                </div>
                            </>
                        ):(
                            <>
                                <div className='mb-4 text-center'>
                                    <h1 className='fs-2 p-0 m-0'>{level} / 5</h1>
                                    <p className='p-0 m-0 fw-bold' style={{color: "#00b7ff"}}>STATUS</p>
                                </div>
                                <div className="hackFunction">
                                    {pairs.map((i, index) => (
                                        <div className="el" id={index} key={index} onClick={choosePair}>
                                            {i}
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                        <div className="hackFooter mt-5">
                            <div id="progressBox">
                                <div className="progressBox">
                                    <div className="progressBar" id="progress-bar"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <audio src="/music/tension.mp3" loop id="tension"></audio>
            <audio src={""} id="effects"></audio>
        </>
    )
}
export const getServerSideProps = ({ req, res }) => {

    const verifiedTest = getCookie('xverified', { req, res });
    let pass = 0;

    if(verifiedTest === "EZNRVcpmYmphSLevTzHMzcWSjxJPEAdx"){
        return { props: {pass: 1} };
    }

    return { 
        notFound: true,
        props: {
            pass: pass
        }
    };
};
export default giet;