import React, { useRef, useEffect } from 'react';

import '../Styles/PayPal.css';

const PayPal=(props) => {
    const paypal = useRef()

    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data,actions,err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: localStorage.getItem("description"),
                            amount: {
                                value: localStorage.getItem("price"),
                                currency_code: "EUR"
                            }
                        }
                    ]
                })
            },
            onApprove: async (data,actions) => {
                const order=await actions.order.capture();
                console.log(order);
                document.getElementById("result").innerHTML="Order placed Successfully.";
            },
            onError: (err) => {
                console.log(err);
            } 
        }).render(paypal.current)
    },[])

    return (
        <div className="paypal">
            <div ref={paypal}>

            </div>
            <p id="result"></p>
        </div>
    )
}

export default PayPal;