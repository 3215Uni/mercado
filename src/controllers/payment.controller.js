import { request } from "express";
import mercadopago from "mercadopago";

export const createOrder=async (req, res)=>{
    mercadopago.configure({
        access_token:
        "TEST-3722030308969342-072819-8f709a5da83458b0a9b10ef3e2d063b0-1435187539",
    }); 
    const result = await mercadopago.preferences.create({
        items:[
            {
            title:"Viaje desde San Salvador de Jujuy a las Salina",
            unit_price:1500,  
            currency_id: "ARS",
            quantity:10
            }
        ],
        /**ES LO ULTIMO Q AGREGUE */
        back_urls:{
            success:"http://localhost:3000/success",
            failure:"http://localhost:3000/failure",
            pending:"http://localhost:3000/pending",
        },
    });
    console.log(result)
    res.send('creando  orden');
};
export const receiveWebhook =(req, res)=>{
    console.log(req.query);
    res.send(webhook);
}