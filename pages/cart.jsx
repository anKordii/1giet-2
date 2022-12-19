import React, {useEffect, useState} from "react";
import Link from "next/link";
import {Cart} from "../components/product";
import {NotificationManager} from 'react-notifications';
import formatCurrency from "format-currency";

import { supabase } from '../lib/initSupabase';
function giet({status}) {
    const [products, setProducts] = useState([]);
    const [promoHide, setPromoHide] = useState(false);
    const [orderCost, setOrderCost] = useState(null);
    const [promoCodeMinus, setPromoCodeMinus] = useState(0);
    const [costAfter, setCostAfter] = useState(null);

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
        const productsTemp = JSON.parse(localStorage.cart);
        let tempCost = 0;
        setProducts(productsTemp)
        productsTemp.map(e => {
            tempCost += (e.price * e.amount)
        })

        setOrderCost(tempCost)

    }, [])

    const buyProduct = async (e) => {
        e.preventDefault();

        const {nickname, code, safety} = e.target;

        if(costAfter <= 0) return NotificationManager.error("First you should add something to your cart")
    
        try {
          const res = await fetch('/api/buy', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                nickname: nickname.value, 
                cost: costAfter || orderCost,
                safety: safety.value,
                code: code.value
              }),
          });
          const data = await res.json();
          localStorage.cart = "[]";
          NotificationManager.success(`Order confirmed 😈`);
          setTimeout(() => {
            window.location.reload(false)
          }, 1000);
        } catch (error) {
          NotificationManager.error(error.message)
        }
    };
    
    function promoCodeOpen(e){
        e.preventDefault()

        if(promoHide === false){
            document.querySelector("#promocode input").style.display = "block";
            setPromoHide(true)
        }else{
            document.querySelector("#promocode input").style.display = "none";
            setPromoHide(false)
        }
    }
    function promoCodeInput(e){
        e.preventDefault();
        const input = e.target;

        if(input.value === "weback"){
            const cost = orderCost - (orderCost * .20);
            const promoFree = orderCost - cost;

            setCostAfter(cost);
            setPromoCodeMinus(promoFree)
            input.disabled = true;
            NotificationManager.success(`Zastosowano kod promocyjny ${input.value}`)
        }else{
            NotificationManager.error("Nie znany kod promocyjny")
        }
    }
    function clearCart(e){
        e.preventDefault();

        localStorage.cart = "[]";
        location.reload(true);
    }

  return (
    <>
        <style>{`
            .anis_cover{
                background-image: url(https://wallpaperaccess.com/full/3910770.gif) !important;
                background-size: cover;
            }
        `}
        </style>
        <div className="container-fluid pt-3 position-relative">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8 d-flex align-items-center" style={{justifyContent: "space-between"}}>
                    <div>
                        <span style={{fontSize: ".75rem"}}>
                            <a href="/"> 
                                peace 😈
                            </a>
                            &nbsp;{">"}&nbsp;
                            <a href="/cart" className="fw-bolder">
                                cart
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
                <div className="col-12 col-sm-5 p-4 pt-0 mt-5 mb-3">
                    <div className="row">
                        {products.map( (i, index) => {
                            return (
                                <div className="col-12 ps-2 pe-2 mb-2 product" key={index}>
                                    <div className="d-flex">
                                        <div className="d-flex justify-content-center align-items-center" style={{flexDirection: "column"}}>
                                            <img src={i.image} className="img-fluid" style={{maxWidth: "130px", height: "100%"}} /> 
                                        </div>
                                        <div className="pt-3 pb-3">
                                            <h1 className="fs-4">{i.name}</h1>
                                            <h2 className="fs-5">{i.price} BTC</h2>
                                            <h3 className="fs-6">x<span style={{color: "var(--docchi-main)"}} className="fs-5">{i.amount}</span></h3>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        {products.length > 0 ? (
                            <div className="col-12 text-center mt-3">
                                <button className="btn btn-danger" onClick={clearCart}>clear cart</button>
                            </div>
                        ): (
                            <div className="col-12 text-center mt-3">
                                <h1>Weird</h1>
                                <p style={{color: "var(--docchi-tekst)"}}>Your cart is empty, you should buy something to have fun 🤪</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className="col-11 col-sm-3 ms-4 me-4 mt-5 mb-3" style={{background: "#242d41", borderRadius: ".50rem"}}>
                    <div className="p-2">
                        <p className="fw-bold">Summary</p>
                    </div>
                    <div className="ps-4 pe-2 text-center">
                        <div>
                            <p className="p-0 m-0 fw-bold">Subtotal</p>
                            <span style={{color: "var(--docchi-tekst)"}}>{formatCurrency(orderCost, { format: '%v %c', code: 'BTC', maxFraction: 8 })}</span>
                        </div>
                        <div>
                            <p className="p-0 m-0 fw-bold">Shipping</p>
                            <span style={{color: "var(--docchi-tekst)"}}>0.00 BTC</span>
                        </div>
                        <div>
                            <p className="p-0 m-0 fw-bold">Estimated tax amount</p>
                            <span style={{color: "var(--docchi-tekst)"}}>0.00 BTC</span>
                        </div>
                        <div>
                            <p className="p-0 m-0 fw-bold">Promo code</p>
                            <span style={{color: "var(--docchi-tekst)"}}>-{formatCurrency(promoCodeMinus, { format: '%v %c', code: 'BTC', maxFraction: 8 })}</span>
                        </div>
                        <hr style={{color: "#13161e", borderTop: "5px solid", borderRadius: ".50rem"}} />
                        <div>
                            <h1 className="fs-5 m-0 p-0">Total</h1>
                            <span style={{color: "var(--docchi-tekst)"}} className="fs-5">{costAfter ? (
                                    formatCurrency(costAfter, { format: '%v %c', code: 'BTC', maxFraction: 8 })
                                ):(
                                    formatCurrency(orderCost, { format: '%v %c', code: 'BTC', maxFraction: 8 })
                                )}</span>
                        </div>
                    </div>
                    <div className="p-2">
                        <p>Customer details</p>
                        <div className="ps-3 pe-3">
                            <form onSubmit={e => buyProduct(e)}>
                                <div>
                                    <label htmlFor="nickname" className="fw-bold">Nickname</label>
                                    <input type="text" className="form-control mb-2" placeholder="Nickname" id="nickname" name="nickname" required/>
                                </div>
                                <div>
                                    <label htmlFor="safety" className="fw-bold">Safety code</label>
                                    <input type="text" className="form-control mb-2" placeholder="Safety code" id="safety" name="safety" required/>
                                </div>
                                <div id="promocode" className="mt-1 mb-1">
                                    <label htmlFor="code">I have a <span onClick={promoCodeOpen} style={{color: "var(--docchi-tekst)", cursor: "pointer"}}>promo code</span></label>
                                    <input type={"text"} className="form-control" placeholder="Promo code" id="code" name="code" onChange={promoCodeInput}/>
                                </div>
                                <div className="mt-5 mb-2 text-center">
                                    <button className="btn btn-primary" type="submit">Submit my order</button>
                                </div>
                            </form>
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
