import React, {useEffect} from "react";
import Link from "next/link";
import { getCookie } from 'cookies-next';
import {Hero} from "../components/home";
import {Cart} from "../components/product";
import { supabase } from '../lib/initSupabase';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

function giet({status, pass}) {
  if(status.status === "false"){
    return (
      <div className="position-absolute d-flex justify-content-center" style={{width: "100%", height: "100%", backgroundColor: "#fff", top: 0, left: 0, zIndex: 100000}}>
        <div className="mt-2" style={{color: "#000", fontFamily: "Tahoma, Verdana, Arial, sans-serif"}}>
        <h1 style={{color: "#000", padding: "inherit", margin: "inherit", fontWeight: "700"}} className="fs-2">Welcome to nginx!</h1>
        <p style={{padding: "inherit", margin: "inherit"}}>If you see this page, the nginx web server is successfully installed and<br/>
          working. Further configuration is required.</p>
        <p style={{padding: "inherit", margin: "inherit"}}>For online documentation and support please refer to
        &nbsp;<a href="https://nginx.org/" style={{color: "blue",textDecoration: "underline"}}>nginx.org</a>.<br/>
        Commercial support is available at
        &nbsp;<a href="https://nginx.com/" style={{color: "blue",textDecoration: "underline"}}>nginx.com</a>.</p>
        <p style={{padding: "inherit", margin: "inherit"}}><em>Thank you for using nginx.</em></p>
      </div>
      </div>
    )
  }

  useEffect(() => {
    if(pass === 1 && localStorage.startGame === "null"){
      confirmAlert({
        title: 'Welcome on 1GIET 2.0',
        message: (
          <>
            <h2 className="fs-6 text-center">
              Odblokowałeś ukrytą wersje strony 
            </h2>
            <hr style={{color: "#453434", borderTop: "3px solid", borderRadius: "0.5rem"}}/>
            <div className="m-1">
              <p>Twoim zadaniem jest zamknięcie strony <strong style={{color: "white"}}>1giet.cf</strong> na dobre.</p>
              <p>Aby to osiągnąć, będziesz musiał znaleźć ukryte kody i ukryte zakładki!</p>

              <p className="pb-0 mb-0">Zabawa będzie się kręcić wokół:</p>
              <ul>
                <li>Strony 1giet.cf</li>
                <li>Kanału youtube Ćpuńska Klinika</li>
                <li>Bota YFLUpdates</li>
              </ul>
              <p className="pb-0 mb-0 fw-bold" style={{color: "white"}}>Co musisz wiedzieć:</p>
              <ul>
                <li>Istnieję ukryty skrót klawiszowy</li>
                <li>Są dwie ukryte zakładki</li>
                <li>Nie musisz szukać niczego w zbadaj element</li>
              </ul>
              <p className="pb-0 mb-0 fw-bold" style={{color: "white"}}>Podpowiedzi będą podawane na bieżąco.</p>
            </div>
          </>
        ),
        buttons: [
            {
                label: 'Close',
                className: 'agree',
                onClick: () => {
                  localStorage.startGame = "true"
                }
            }
        ],
        closeOnEscape: false,
        closeOnClickOutside: false
      })
    }
  }, [])
  

  return (
    <>
        <div className="container-fluid pt-3 position-relative">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8 d-flex align-items-center" style={{justifyContent: "space-between"}}>
                  <div>
                    <span style={{fontSize: ".75rem"}}>peace 😈</span>
                  </div>
                  <div>
                    <Link href="/newproducts">
                      <a className="me-3" style={{fontSize: ".75rem"}}>
                        New Products
                      </a>
                    </Link>
                    <Cart />
                  </div>
                </div>
            </div>
        </div>
        <Hero />
    </>
  )
}
export async function getServerSideProps({ req, res }) {
  const { data, error } = await supabase.from('status').select().eq('name', "shutdown").single();
  const verifiedTest = getCookie('xverified', { req, res });
  let pass = 0;

  if(verifiedTest === "EZNRVcpmYmphSLevTzHMzcWSjxJPEAdx"){
    pass = 1
  }
  
  return { props: {
    status: data,
    pass: pass
  }}
}
export default giet;