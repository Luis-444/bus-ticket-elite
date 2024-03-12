import { Button } from 'flowbite-react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import QRCode from 'qrcode.react';
import { Fragment } from 'react';
interface Purchase {
    _id: number;
    deadline: string;
    city: string;
    price: number;
    quantity: number;
    total: number;
    folio: string;
}
export default function ViewPurchases() {
    const [purchases, setPurchases] = useState<Purchase[]>([]);

    useEffect(() => {
        axios.get<Purchase[]>('http://localhost:3000/api/purchases')
            .then(res => {
                res.data.forEach(purchase => {
                    purchase.deadline = new Date(purchase.deadline).toLocaleString();
                });

                setPurchases(res.data);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <Fragment>
            <div className='flex justify-end'>
                <a href="/">
                    <Button color="red">Regresar</Button>
                </a>
            </div>
            <div className='w-full max-w-[1440px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {purchases.map(purchase => (
                    <div className='w-full shadow-xl rounded-md relative bg-white overflow-hidden' key={purchase._id}>
                        <h2 className='bg-primary w-full text-secondary text-center font-bold px-2 py-1'>{purchase.city.length ? purchase.city : "Sin ciudad"}</h2>
                        <div className='flex justify-center my-4'>
                            <QRCode value={purchase.folio} size={150} />
                        </div>
                        <p className='flex justify-between h-10 items-center gap-2 px-2'>
                            <p className='font-bold'>Caducidad: {new Date(purchase.deadline).toDateString()}</p>
                            <span className='bg-green-500 text-secondary rounded-full px-4 py-1'>Usos <span className='font-bold'>{purchase.quantity}</span></span>
                        </p>
                    </div>
                    ))}
            </div>
        </Fragment>
    );
}
