import { Label } from 'flowbite-react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import QRCode from 'qrcode.react';

interface Purchase {
    _id: number;
    deadline: string;
    city: string;
    price: number;
    quantity: number;
    total: number;
}
export default function ViewPurchases() {
    const [purchases, setPurchases] = useState<Purchase[]>([]);

    useEffect(() => {
        axios.get<Purchase[]>('http://localhost:3000/api/purchases')
            .then(res => {
                setPurchases(res.data);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <h2>Registros de Compras</h2>
            <table>
                <thead>
                    <tr>
                        <th>Deadline</th>
                        <th>Ciudad</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {purchases.map(purchase => (
                        <tr key={purchase._id}>
                            <td>{purchase.deadline}</td>
                            <td>{purchase.city}</td>
                            <td>{purchase.price}</td>
                            <td>{purchase.quantity}</td>
                            <td>{purchase.total}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
