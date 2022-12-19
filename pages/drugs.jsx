import React, {useEffect, useState} from "react";
import Link from "next/link";
import {Cart} from "../components/product";

import { supabase } from '../lib/initSupabase';
function giet({status}) {
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
    const reviews = [
        {
            avatar: "https://i.imgur.com/HJlBwR2.png",
            nickname: "YoungKarthez",
            title: "młody montażysta",
            message: "Towar jest taki dojebany że nie mogę spać przez cale noce i dlatego nauczyłem się montować w zaledwie kilka godzin  zamiast dni. Polecam gorąco z majorki"
        },
        {
            avatar: "https://i.imgur.com/p3uGSrQ.png",
            nickname: "3xanax",
            title: "aspirujący na ćpuna",
            message: "lepsze xanaxu nigdy nie brałem 😋"
        },
        {
            avatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/345f88e6-09e5-4cea-a946-8f554ba05fe7-profile_image-70x70.png",
            nickname: "lakakaqday",
            title: "mega ćpun",
            message: "ahaspoko"
        },
        {
            avatar: "https://i.imgur.com/QCwiCVK.png",
            nickname: "melawaifu",
            title: "mega ćpun",
            message: "trudno odstawić"
        },
        {
            avatar: "https://i.imgur.com/REHjpMW.png",
            nickname: "mejnyy",
            title: "lokalny sprzedawca",
            message: "Sklep 1GIET.CF, o którym mowa, to wyjątkowe miejsce do robienia zakupów. Oferta jest bardzo szeroka i obejmuje produkty z wielu różnych kategorii. Ceny są dobrze dostosowane do jakości produktów i są bardzo atrakcyjne. Obsługa klienta również jest godna pochwały. Szybko odpowiadają na pytania i są bardzo pomocni w wyjaśnianiu wszelkich wątpliwości. Dostawa jest szybka i zawsze na czas. Ogólnie rzecz biorąc, sklep 1GIET jest świetnym miejscem na rodzinne zakupy. Polecam go wszystkim, którzy szukają dobrej jakości produktów w dobrej cenie."
        },
        {
            avatar: "https://i.imgur.com/G2C2kre.png",
            nickname: "adrian1g__",
            title: "diller",
            message: "Strona 1giet.cf to doskonały wybór dla tych, którzy szukają ćpania. Jest bardzo intuicyjna i łatwa do nawigacji, a dostępne produkty są wysokiej jakości. Obsługa klienta jest bardzo pomocna i przyjazna. Naprawdę polecam tę stronę."
        },
        {
            avatar: "https://i.imgur.com/iIRWMoY.png",
            nickname: "cza_jka",
            title: "ćpun",
            message: "Polecam stronę 1giet.cf wszystkim fanom ćpania. Mają świetny wybór produktów, a dostawa jest szybka i niezawodna. Obsługa klienta jest bardzo uprzejma i szybko odpowiadają na moje pytania. Naprawdę mogę polecić tę stronę."
        },
        {
            avatar: "https://i.imgur.com/JlIBcFT.png",
            nickname: "kam1l8_",
            title: "mega ćpun",
            message: "Strona 1giet.cf to naprawdę fajna opcja dla tych, którzy szukają ćpania. Mają doskonały wybór produktów i szybko i niezawodnie dostarczają je do klientów. Obsługa klienta jest bardzo przyjazna i pomocna. Polecam tę stronę."
        },
        {
            avatar: "https://i.imgur.com/tEVuQ9G.png",
            nickname: "neexcsgo",
            title: "natural",
            message: "Jeśli szukasz ćpania, strona 1giet.cf jest idealnym miejscem. Mają bardzo szeroki wybór produktów i szybką i niezawodną dostawę. Obsługa klienta jest bardzo miła i pomocna. Naprawdę polecam tę stronę."
        },
        {
            avatar: "https://i.imgur.com/gpCKTvU.png",
            nickname: "dyzio_d",
            title: "mega ćpun",
            message: "Zdecydowanie polecam stronę 1giet.cf dla każdego, kto szuka ćpania. Mają bardzo dobry wybór produktów i szybko dostarczają je do klientów. Obsługa klienta jest bardzo miła i pomocna. Naprawdę warto skorzystać z tej strony."
        },
        {
            avatar: "https://i.imgur.com/pLyzXrd.png",
            nickname: "qov2y",
            title: "mega ćpun",
            message: "Strona 1giet.cf to świetny wybór dla fanów ćpania. Mają duży wybór produktów i szybką dostawę. Obsługa klienta jest bardzo przyjazna i pomocna. Naprawdę polecam tę stronę."
        },
        {
            avatar: "https://i.imgur.com/0tukoMz.png",
            nickname: "banned",
            title: "mega ćpun",
            message: "Naprawdę polecam stronę 1giet.cf dla tych, którzy szukają ćpania. Mają doskonały wybór produktów, a dostawa jest szybka i niezawodna. Obsługa klienta jest bardzo przyjazna i pomocna. Naprawdę warto skorzystać z tej strony."
        },
        {
            avatar: "https://i.imgur.com/JOebzfo.png",
            nickname: "merghanizerznijmidupcie",
            title: "mega ćpun",
            message: "Strona 1giet.cf to naprawdę wspaniały wybór dla fanów ćpania. Mają świetny wybór produktów, a dostawa jest szybka i niezawodna. Obsługa klienta jest bardzo miła i pomocna. Naprawdę mogę polecić tę stronę."
        }
    ]
  return (
    <>
        <style>{`
            .anis_cover{
                background-image: url(https://wallpaperaccess.com/full/3910770.gif) !important;
                background-size: cover;
            }
        `}</style>
        <div className="container-fluid pt-3 position-relative p-5">
            <div className="row justify-content-center">
                <div className="col-12 mb-5">
                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-8 d-flex align-items-center" style={{justifyContent: "space-between"}}>
                            <div>
                                <span style={{fontSize: ".75rem"}}>
                                    <a href="/"> 
                                        peace 😈
                                    </a>
                                    &nbsp;{">"}&nbsp;
                                    <a href="/drugs" className="fw-bolder">
                                        check what ppl sayin
                                    </a>
                                </span>
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
                <div className="col-12">
                    <div className="row justify-content-center">
                        {reviews.map((i, index) => (
                            <div className="col-12 col-sm-7 m-2 mb-3" style={{background: "rgb(24 30 44)", borderRadius: ".50rem"}} key={index}>
                                <div className="p-2">
                                    <div className="d-flex align-items-center">
                                        <div className="d-flex align-items-center p-2 ps-4 pe-4" style={{borderRadius: ".50rem", backgroundColor: "#252e43"}}>
                                            <img src={i.avatar} className="img-fluid d-flex" style={{borderRadius: "5rem", height: "3rem"}}/>
                                            <div className="ms-2">
                                                <h1 className="fs-5 m-0 p-0">{i.nickname}</h1>
                                                <p className="m-0 p-0">{i.title}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="mt-2 ps-1 m-0 p-0" style={{color: "var(--docchi-tekst)"}}>{i.message}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
export async function getServerSideProps() {
    const status = await supabase.from('status').select().eq('name', "shutdown").single();
    return { props: {
      status: status.data
    }}
  
  }
export default giet;