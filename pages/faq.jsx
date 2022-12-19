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
                                    <a href="/faq" className="fw-bolder">
                                        ask me
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
                        <div className="col-7 m-2" style={{background: "rgb(24 30 44)", borderRadius: ".50rem"}}>
                            <div className="p-2">
                                <h1 className="fs-5">Is my purshase completely secure through your shop when I make a Purchase?</h1>
                                <p className="p-0 m-0" style={{color: "var(--docchi-tekst)"}}>Yes. Just add the desired quantity to the cart and enter your address at the checkout. Your personal data is automatically encrypted using PGP and deleted after the order is dispatched. Our team of professionals then packs the goods in clean-room conditions, and ensures smooth and secure processing.</p>
                            </div>
                        </div>

                        <div className="col-7 m-2" style={{background: "rgb(24 30 44)", borderRadius: ".50rem"}}>
                            <div className="p-2">
                                <h1 className="fs-5">How can I receive my order anonymously?</h1>
                                <p className="p-0 m-0" style={{color: "var(--docchi-tekst)"}}>Our shipping department operates around the clock to ensure fast and risk-free shipping. The delivery ussually arrives within a few days. Your order can be sent to any valid postal address, PO box, or package station. Thanks to our highly complex and decentralized system, the transfer to the logistics service provider is already anonymous and cannot be traced back.</p>
                            </div>
                        </div>

                        <div className="col-7 m-2" style={{background: "rgb(24 30 44)", borderRadius: ".50rem"}}>
                            <div className="p-2">
                                <h1 className="fs-5">Is your product safe?</h1>
                                <p className="p-0 m-0" style={{color: "var(--docchi-tekst)"}}>Nobody has claimed that doing drugs was safe. However as long as you follow the guide in the Safety section there should not be any issues. Do not take MDMA if you are also under any perscriptions or doing any other drugs. It is also recomended not to take MDMA with any sort of alcohol as it might cause irreversable damage to your immune system and overall health.</p>
                            </div>
                        </div>

                        <div className="col-7 m-2" style={{background: "rgb(24 30 44)", borderRadius: ".50rem"}}>
                            <div className="p-2">
                                <h1 className="fs-5">Is any of this real?</h1>
                                <p className="p-0 m-0" style={{color: "var(--docchi-tekst)"}}>No. Of course not.</p>
                            </div>
                        </div>
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