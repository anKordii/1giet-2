import React, {useEffect, useState} from "react";
import Link from 'next/link';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const Navigation = () => {
    const [lastKey, setLastKey] = useState(0);
    const [secretShowed, setSecretShowed] = useState(null);

    useEffect(() => {
        if (!localStorage.cart) {localStorage.cart = '[]'};
        if(!localStorage.startGame){localStorage.startGame = "null"};
    })
    useEffect(() => {
        window.addEventListener("keydown", (event) => {
            setLastKey(event.keyCode);

            if(secretShowed == null){
                if(event.keyCode === 49) {
                    if(lastKey === 71){
                        event.preventDefault();
                        setSecretShowed(true);
                        createQuest()
                    }
                }else if(event.keyCode === 71){
                    if(lastKey === 49){
                        event.preventDefault();
                        setSecretShowed(true);
                        createQuest()
                    }
                }
            }
        });
    }, [lastKey, secretShowed])

    function createQuest(){
        confirmAlert({
            title: 'Secret #1',
            message: 'Congratulations you have found secret! - code: "N7H-"',
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
    
  return (
  <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{zIndex: 5}}>
        <div className="container">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar_01" aria-controls="navbar_01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <Link href="/">
                <a className="navbar-brand">
                    <h1 style={{fontFamily: "Panton"}} className="fs-4"><span style={{fontSize: ".75rem"}}>1giet</span>2.0</h1>
                </a>
            </Link>
            <div className="collapse navbar-collapse" id="navbar_01">
                <ul className="navbar-nav mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link href="/">
                            <a className="nav-link">
                                peace 😈
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/premium">
                            <a className="nav-link">
                                better than your mama's
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/partypack">
                            <a className="nav-link">
                                group fucking
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/safety">
                            <a className="nav-link">
                                have a limit
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/faq">
                            <a className="nav-link">
                                ask me
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  </>
  )
}
export default Navigation;
