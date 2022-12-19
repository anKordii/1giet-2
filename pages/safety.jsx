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
                                    <a href="/safety" className="fw-bolder">
                                        have limit
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
                        <div className="col-12 text-center mb-4">
                            <h1>SAFETY GUIDE</h1>
                        </div>
                        <div className="col-7" style={{background: "rgb(24 30 44)", borderRadius: ".50rem"}}>
                            <div className="p-2">
                                <h1 className="fs-5">MDMA</h1>
                                <p className="p-0 m-0">Bond: 3,4-Methylendioxy-N-methlamphetamine</p>
                                <p className="p-0 m-0">When taking MDMA, it is recommended not to exceed a maximum dose of 1.5 mg MDMA per kg bodyweight for men and 1.3 mg MDMA per kg bodyweight for women. In general, a dose of 120 mg should not be exceeded. After ingestion, be sure to hydrate sufficiently. Only obtain MDMA from trustworth sources.</p>
                                <p className="fw-bold">*Information not guaranteed</p>
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