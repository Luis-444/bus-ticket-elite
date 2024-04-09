import { useState, useEffect } from 'react';
import axios from 'axios';
import QRCode from 'qrcode.react';
import { Fragment } from 'react';
import { XCircleIcon } from '@heroicons/react/24/outline';
import axiosClient from '../axiosClient';
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
    const [show, setShow] = useState(false);
    const [purchase, setPurchase] = useState<Purchase>({
        _id: 0,
        deadline: '',
        city: '',
        price: 0,
        quantity: 0,
        total: 0,
        folio: ''
    });

    const openPurchase = (purchase: Purchase) => {
        setPurchase(purchase);
        setShow(true);
    }

    const decrementFolio = () => {
        axiosClient.put(`/read_qr/${purchase.folio}`).then(res => {
            window.location.href = '/view_purchases';
        }).catch(err => {
            console.log(err);
        }); 
    }

    useEffect(() => {
        axiosClient.get<Purchase[]>('purchases')
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
            {show ? (
                <div className='w-full min-w-[350px] shadow-xl rounded-md relative bg-white overflow-hidden' key={purchase._id}>
                    <h2 className='bg-primary-hover w-full text-secondary text-center font-bold px-2 py-1 relative flex items-center justify-center'>
                        <span>{purchase.city.length ? purchase.city : "Sin ciudad"}</span>
                        <XCircleIcon className='absolute hover:scale-105 right-0 cursor-pointer w-6 mx-2' onClick={e => setShow(false)} />
                    </h2>
                    <div onClick={ e => decrementFolio() } className='flex justify-center my-4 px-4'>
                        <QRCode value={purchase.folio.toString()} style={{ width: '100%', height: 'auto' }}/>
                    </div>
                    <p className='flex justify-between h-10 items-center gap-2 px-2'>
                        <span className='font-bold'>Caducidad: { purchase.deadline.split(',')[0] }</span>
                        <span className='bg-green-500 text-secondary rounded-full px-4 py-1'>Usos <span className='font-bold'>{purchase.quantity}</span></span>
                    </p>
                </div>
            )
                :
                (
                    <div  className=' w-full max-w-[1440px] flex justify-center flex-wrap gap-4'>
                        {purchases.map(p => (
                            <div onClick={ e => openPurchase(p)} className=' hover:scale-95 cursor-pointer w-[350px] min-w-[350px] shadow-xl rounded-md relative bg-white overflow-hidden' key={p._id}>
                                <h2 className='bg-primary-hover w-full text-secondary text-center font-bold px-2 py-1'>{p.city.length ? p.city : "Sin ciudad"}</h2>
                                <div className='flex justify-center my-4'>
                                    <QRCode value={p.folio.toString()} size={150} />
                                </div>
                                <p className='flex justify-between h-10 items-center gap-2 px-2'>
                                    <span className='font-bold'>Caducidad: { p.deadline.split(',')[0] }</span>
                                    <span className='bg-green-500 text-secondary rounded-full px-4 py-1'>Usos <span className='font-bold'>{p.quantity}</span></span>
                                </p>
                            </div>
                        ))}
                    </div>
                )
            }
        </Fragment>
    );
}
