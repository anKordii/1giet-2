import {NotificationManager} from 'react-notifications';

export default function addToCart({name, id, image, price}, amount){
    let cart = JSON.parse(localStorage.cart);

    for (let i = 0; i < cart.length; i++) {
        if(cart[i].id === id){

            NotificationManager.error('Ten produkt znajduje się już w koszyku!');

            return;
        }
    }

    cart.push({
        id: id,
        price: price,
        image: image,
        name: name,
        amount: amount
    });
    NotificationManager.success('Dodano produkt do koszyka!')
    localStorage.cart = JSON.stringify(cart);
}