import React, {useEffect, useState} from "react";
import Link from "next/link";
import { FaMinus, FaPlus } from 'react-icons/fa';
import addToCart from "../backend/cart/addToCart";
import {Cart} from "../components/product";

import { supabase } from '../lib/initSupabase';

function giet({products, status}) {
    const [ammoutToCart, setammoutToCart] = useState(1);

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
                                    <a href="/newproducts" className="fw-bolder">
                                        new products
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
                        <div className="col-10">
                            <div className="mt-3 mb-3 d-block text-center">
                                <h1 className="fs-5">NEW PRODUCTS</h1>
                            </div>
                        </div>
                    </div>
                </div>
                {products.map( (i, index) => {
                    return (
                        <div className="col-12 col-lg-3 ps-2 pe-2 m-2 product" key={index}>
                            <div className="d-flex" style={{flexDirection: "row", justifyContent: "space-around"}}>
                                <div className="d-flex justify-content-center align-items-center" style={{flexDirection: "column"}}>
                                    <img src={i.image} className="img-fluid" style={{maxWidth: "130px", height: "100%"}} /> 
                                    <p style={{color: "#a9a9a9"}}>お客様にも好評です</p>
                                </div>
                                <div className="d-flex pt-3 pb-3 text-center" style={{flexDirection: "column", justifyContent: "space-between"}}>
                                    <h1 className="fs-6 mb-0 pb-0">{i.name}</h1>
                                    <p className="m-0 p-0" style={{fontSize: ".75rem"}}>{i.price_type}</p>
                                    <p className="m-0 p-0" style={{fontSize: ".75rem"}}>
                                        price - <strong style={{color: "#a9a9a9"}}>{i.price}</strong> BTC
                                    </p>
                                    <div className="d-flex justify-content-center mt-3" style={{flexDirection: "column"}}>
                                        <div className="d-flex justify-content-center" style={{flexDirection: "row"}}>
                                            <button className="cart_buttons" onClick={() => {if(ammoutToCart === 0) return; setammoutToCart(ammoutToCart - 1)}}>
                                                <FaMinus />
                                            </button>
                                            <p className="cart_amount"> {ammoutToCart} </p>
                                            <button className="cart_buttons" onClick={() => {setammoutToCart(ammoutToCart + 1)}}>
                                                <FaPlus />
                                            </button>
                                        </div>
                                        <button className="cart_add" onClick={(e) => {e.preventDefault(); addToCart(i, ammoutToCart)}}>Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </>
  )
}
export async function getServerSideProps() {
  const { data, error } = await supabase.from('products').select().limit(3).order('id', { ascending: false });
  const status = await supabase.from('status').select().eq('name', "shutdown").single();

  return { props: {
    products: data || [],
    status: status.data
  }}

}
export default giet;