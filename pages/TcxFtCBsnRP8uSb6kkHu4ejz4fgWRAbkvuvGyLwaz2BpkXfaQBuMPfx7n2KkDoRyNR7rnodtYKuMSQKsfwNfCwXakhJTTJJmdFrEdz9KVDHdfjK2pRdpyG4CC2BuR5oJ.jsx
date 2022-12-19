import React, {useEffect, useState, createRef} from "react";
import { getCookie } from 'cookies-next';
import Link from "next/link";
import {SEO, waitforme} from "../backend";
import Terminal from 'react-console-emulator';
import Quizz from "../components/quizz";

function giet({pass, questions}) {
    const terminalRef = createRef();
    const [launch, setLaunch] = useState(null);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress)
    }, [])
    function handleKeyPress(event) {
        const audio = document.querySelector("#effects")
        audio.loop = false;
        audio.volume = 0.1;
        audio.src = "/music/type.mp3";
        audio.play(); 
    }
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
    const commands = {
        grubamruwa_onlyfans: {
            description: "command to delete ~admin",
            fn: async () => {
                return "bit.ly/grubamruwa"
            }
        },
        cpun: {
            fn: async () => {
                return (
                    <span className="mt-2 mb-2">
                        Ćpunie, nie pracuje w branży, bo jeszcze się uczę i nie mam czasu <img src="https://cdn.7tv.app/emote/62e28d37b0ab9ff422871cf5/1x.webp" className="img-fluid" />
                    </span>
                )
            }
        },
        evidence: {
            description: "Everything on adrian1g__.",
            fn: async () => {
                return "Evidence #1: https://drive.uuid.top/1wnRpeP1rjFWAwyDaGZ-PG6L6TE3Xd9oA";
            }
        },
        authors: {
            description: 'List of ppl behind 1giet.cf',
            fn: async () => {
                return (
                    <>
                        <hr style={{color: "#008cff"}}/>
                        codding: 3xanax, <br/>
                        website_design: 3xanax, <br/>
                        website_idea: 3xanax, <br/>
                        logo_design: YoungKarthez & 3xanax, <br/>
                        youtube_montage: YoungKarthez, <br/>
                        designer: mejnyy <br/>
                        questions: 3xanax, grubamruwa <br/>
                        <hr style={{color: "#008cff"}}/>
                    </>
                )
            }
        },
        login:{
            description: 'Login to system.',
            fn: async (...args) => {
                if(args.length === 0){
                    return (
                    <>
                        <br/>
                        User can't be empty!
                    </>
                    )
                }else if(args[0] === "N7H-F7B-WTJR6"){
                    const terminal = terminalRef.current;

                    let utterance = new SpeechSynthesisUtterance("Hidden user accepted...");
                    const voices = window.speechSynthesis.getVoices();
                    utterance.pitch = 0;
                    utterance.voice = voices[3];
                    utterance.lang = 'en-US';
                    speechSynthesis.speak(utterance);

                    terminal.pushToStdout(
                        <>
                            <br/>
                            Getting inside system...
                        </>
                    )
                    
                    await waitforme(1000)
                    confirmSound();
                    terminal.pushToStdout(
                        <>
                            Hacking progress... 1 / 12 <span style={{color: "#00b7ff"}}>executed...</span><br/>
                        </>
                    )
                    await waitforme(1000)
                    confirmSound();
                    terminal.pushToStdout(
                        <>
                            Hacking progress... 2 / 12 <span style={{color: "#00b7ff"}}>executed...</span><br/>
                        </>
                    )
                    await waitforme(1000)
                    confirmSound();
                    terminal.pushToStdout(
                        <>
                            Hacking progress... 3 / 12 <span style={{color: "#00b7ff"}}>executed...</span><br/>
                        </>
                    )
                    await waitforme(1000)
                    confirmSound();
                    terminal.pushToStdout(
                        <>
                            Hacking progress... 4 / 12 <span style={{color: "#00b7ff"}}>executed...</span><br/>
                        </>
                    )
                    await waitforme(1000)
                    confirmSound("d");
                    terminal.pushToStdout(
                        <>
                            Hacking progress... 5 / 12 <span style={{color: "red"}}>crashed...</span><br/>
                        </>
                    )
                    await waitforme(1000)
                    confirmSound();
                    terminal.pushToStdout(
                        <>
                            Hacking progress... 6 / 12 <span style={{color: "#00b7ff"}}>executed...</span><br/>
                        </>
                    )
                    await waitforme(1000)
                    confirmSound();
                    terminal.pushToStdout(
                        <>
                            Hacking progress... 7 / 12 <span style={{color: "#00b7ff"}}>executed...</span><br/>
                        </>
                    )
                    await waitforme(1000)
                    confirmSound("d");
                    terminal.pushToStdout(
                        <>
                            Hacking progress... 8 / 12 <span style={{color: "red"}}>crashed...</span><br/>
                        </>
                    )
                    await waitforme(1000)
                    confirmSound();
                    terminal.pushToStdout(
                        <>
                            Hacking progress... 9 / 12 <span style={{color: "#00b7ff"}}>executed...</span><br/>
                        </>
                    )
                    await waitforme(1000)
                    confirmSound("d");
                    terminal.pushToStdout(
                        <>
                            Hacking progress... 10 / 12 <span style={{color: "red"}}>crashed...</span><br/>
                        </>
                    )
                    await waitforme(1000)
                    confirmSound("d");
                    terminal.pushToStdout(
                        <>
                            Hacking progress... 11 / 12 <span style={{color: "red"}}>crashed...</span><br/>
                        </>
                    )
                    const audio = document.querySelector("#tension")
                    audio.volume = 0.2;
                    audio.play(); 
                    await waitforme(1000)
                    confirmSound();
                    terminal.pushToStdout(
                        <>
                            Hacking progress... 12 / 12 <span style={{color: "#00b7ff"}}>executed...</span><br/>
                        </>
                    )
                    await waitforme(1000);
                    runQuiz();
                    return (<span style={{color: "#00b7ff"}}>Successfully loaded half of backdoor...</span>);
                }else{
                    confirmSound("d");
                    return "User not found";
                }
            }
        },
        views: {
            description: "stats.",
            fn: async () => {
                return "Website broke the record - 2 100 unique ppl in last month and thousands of orders";
            }
        },
        ls: {
            description: "List files and directories.",
            fn: async () => {
                return (
                    <div>
                        <span className="me-3" style={{color: "blue"}}>1giet-timer</span>
                        <span className="me-3" style={{color: "blue"}}>1giet-2.0</span>
                        <span className="me-3" style={{color: "blue"}}>1giet-ai</span>
                        <span className="me-3" style={{color: "blue"}}>yflupdates</span>
                        <span className="me-3">xd.log</span>
                    </div>
                );
            } 
        },
        nano: {
            description: "Modify files.",
            fn: async (...args) => {
                if(args.length === 0){
                    return (
                    <>
                        <br/>
                        You must define file!
                    </>
                    )
                }else if(args[0] === "xd.log"){
                    return (
                        <span>
                            mega zjeb <img src="https://cdn.7tv.app/emote/60773136a807bed006130b28/1x.webp" className="img-fluid" />
                        </span>
                    );
                }else{
                    return "File not found";
                }
            }
        }
    }

    if(pass === 0){
        return (
            <>
                <SEO data={{
                    title: "Password denied",
                    description: "Password denied",
                    url: "/"
                }} />
                <div className='text-center m-5 p-5'>
                    <h1>Password denied</h1>
                    <img src="https://cdn.7tv.app/emote/62ba2122cb8e6bebae27dd5e/4x" alt="ok" style={{borderRadius: ".50rem"}}/><br/><br/>
                    <Link href="/">
                        <a>
                            Powrót
                        </a>
                    </Link>
                </div>
            </>
        )
    }

    function runQuiz(){
        let utterance = new SpeechSynthesisUtterance("Initializing backdoor...");
        const voices = window.speechSynthesis.getVoices();
        utterance.pitch = 0;
        utterance.voice = voices[3];
        utterance.lang = 'en-US';
        speechSynthesis.speak(utterance);

        setTimeout(() => {
            const audioEffect = document.querySelector("#effects")
            audioEffect.loop = false;
            audioEffect.volume = 0.1;
            audioEffect.src = "/music/insystem.mp3";
            audioEffect.play(); 

            setLaunch(true);
        }, 1500);
    }

  return (
    <>
        <style>{`
            body{
                background-image: url(https://blog.kakaocdn.net/dn/dlzXd1/btq7KmPhzhN/3rsy6u68OVv0pKw97jKDUk/img.png) !important;
                background-repeat: no-repeat;
                background-position: center;
            }
        `}</style>
        <SEO data={{
            title: "Welcome to 1GIET terminal!",
            description: "Welcome to 1GIET terminal!",
            url: "/TcxFtCBsnRP8uSb6kkHu4ejz4fgWRAbkvuvGyLwaz2BpkXfaQBuMPfx7n2KkDoRyNR7rnodtYKuMSQKsfwNfCwXakhJTTJJmdFrEdz9KVDHdfjK2pRdpyG4CC2BuR5oJ"
        }} />
        {launch === null && (<Terminal
            ref={terminalRef}
            commands={commands}
            welcomeMessage={'Welcome to 1GIET terminal!'}
            promptLabel={'user@1giet:~$'}
            style={{backgroundColor: "tansparent"}}
            dangerMode
        />)}
        {launch === true && (
            <Quizz questions={questions}/>
        )}
        <audio src="/music/tension.mp3" loop id="tension"></audio>
        <audio src={""} id="effects"></audio>
    </>
  )
}
export const getServerSideProps = ({ req, res }) => {
    const verifiedTest = getCookie('xverified', { req, res });
    let pass = 0;
    const questions = [
        {
            questionText: 'Od czego pochodzi końcówka pseudonimu adriana',
            answerOptions: [
                { answerText: 'n-word', isCorrect: true },
                { answerText: '1g - summit', isCorrect: false },
                { answerText: '1g - ćpanie', isCorrect: false }
            ],
        },
        {
            questionText: 'Jaki produkt znalazł się jako pierwszy na stronie',
            answerOptions: [
                { answerText: 'Marihuana', isCorrect: true },
                { answerText: 'Kokaina', isCorrect: false },
                { answerText: 'Xanax', isCorrect: false },
                { answerText: 'Amfetamina', isCorrect: false },
            ],
        },
        {
            questionText: 'Ile zarobiło 1giet 1.0',
            answerOptions: [
                { answerText: '350 000', isCorrect: false },
                { answerText: '150 000', isCorrect: false },
                { answerText: '500 000', isCorrect: true },
                { answerText: '550 000', isCorrect: false },
		    ],
        },
        {
            questionText: 'Kiedy adrian1g zaczął się umawiać z grubamruwa',
            answerOptions: [
                { answerText: 'Lipiec 2021', isCorrect: false },
                { answerText: 'Listopad 2021', isCorrect: false },
                { answerText: 'Wrzesień 2021', isCorrect: false },
                { answerText: 'Sierpień 2021', isCorrect: true },
		    ],
        },
        {
            questionText: 'Ulubiona miejscówka adriana1g i grubamruwa w fortnite',
            answerOptions: [
                { answerText: 'Piszczaca puszcza', isCorrect: true },
                { answerText: 'Potne piaski', isCorrect: false },
                { answerText: 'Przyjemny park', isCorrect: false },
                { answerText: 'Karkołomne kino', isCorrect: false },
		    ],
        },
        {
            questionText: 'Crack to odmiana',
            answerOptions: [
                { answerText: 'Heroiny', isCorrect: false },
                { answerText: 'Kokainy', isCorrect: true },
                { answerText: 'Haszyszu', isCorrect: false }
		    ],
        },
        {
            questionText: 'Jak zfałszować test moczu na narkotyki',
            answerOptions: [
                { answerText: 'Solą kuchenną', isCorrect: false },
                { answerText: 'Kwaskiem cytrynowym', isCorrect: true },
                { answerText: 'Cukrem', isCorrect: false }
		    ],
        },
        {
            questionText: 'Kto biegnie?',
            answerOptions: [
                { answerText: 'Dziwka', isCorrect: true },
                { answerText: 'Szmata', isCorrect: false },
                { answerText: 'Cysterna', isCorrect: false },
                { answerText: 'Stary we więzieniu', isCorrect: false }
		    ],
        },
        {
            questionText: 'Nick na wickr',
            answerOptions: [
                { answerText: 'adrian1giet', isCorrect: false },
                { answerText: 'xadrian1g', isCorrect: false },
                { answerText: 'adrian1g', isCorrect: false },
                { answerText: 'xadrian1giet', isCorrect: true }
		    ],
        },
        {
            questionText: 'Kto ma najwięcej wiadomości na kanale adrian1g',
            answerOptions: [
                { answerText: 'krzysiu1337__', isCorrect: false },
                { answerText: 'lakakaqday', isCorrect: true },
                { answerText: 'streamelements', isCorrect: false },
                { answerText: 'brightxx', isCorrect: false }
		    ],
        },
        {
            questionText: 'Ile wyświetleń ma najpopularniejszy klip na kanale adrian1g',
            answerOptions: [
                { answerText: '1 700 wyś', isCorrect: true },
                { answerText: '2 500 wyś', isCorrect: false },
                { answerText: '1 000 wyś', isCorrect: false },
                { answerText: '1 400 wyś', isCorrect: false }
		    ],
        },
        {
            questionText: 'Kiedy kanał adrian1g otrzymał status partnera',
            answerOptions: [
                { answerText: '10 września 2022', isCorrect: false },
                { answerText: '5 września 2022', isCorrect: false },
                { answerText: '6 września 2022', isCorrect: true },
                { answerText: '8 września 2022', isCorrect: false }
		    ],
        },
        {
            questionText: 'Która odmiana marihuany pobudza',
            answerOptions: [
                { answerText: 'Sativa', isCorrect: true },
                { answerText: 'Indica ', isCorrect: false }
		    ],
        },
        {
            questionText: 'Który film pojawił się jako pierwszy na Ćpuńska Klinika',
            answerOptions: [
                { answerText: 'Ćpun', isCorrect: true },
                { answerText: 'Damski bokser', isCorrect: false },
                { answerText: 'Leaker', isCorrect: false }
		    ],
        },
        {
            questionText: 'W jakie dni pojawiają się filmy Ćpuńskiej Kliniki',
            answerOptions: [
                { answerText: '16 każdego miesiąca', isCorrect: false },
                { answerText: '17 każdego miesiąca', isCorrect: true },
                { answerText: '15 każdego miesiąca', isCorrect: false },
                { answerText: '18 każdego miesiąca', isCorrect: false }
		    ],
        },
        {
            questionText: 'Ile subskrypcji posiada kanał Ćpuńska Klinika',
            answerOptions: [
                { answerText: '105', isCorrect: false },
                { answerText: '51', isCorrect: false },
                { answerText: '25', isCorrect: false },
                { answerText: '39', isCorrect: true }
		    ],
        }
    ];
    let shuffledNumbers = questions.sort(function () {
        return Math.random() - 0.5;
    });

    if(verifiedTest === "EZNRVcpmYmphSLevTzHMzcWSjxJPEAdx"){
        return { props: {pass: 1, questions: shuffledNumbers} };
    }

    return { 
        notFound: true,
        props: {
            pass: pass
        }
    };
};
export default giet;