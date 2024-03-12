import { UserCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function ProfileMenu() {
    const [menu, setMenu] = useState(false);
    return (
        <section className="absolute top-0 right-0 w-full flex justify-end">
            <UserCircleIcon onClick={ e => setMenu(!menu) } className="w-10 m-2 hover:scale-110 cursor-pointer hover:text-gray-950 transition-all duration-300" />
            {menu && (
                <nav className="bg-gray-100 m-2 p-2 rounded-md shadow absolute right-0 top-[45px] w-full max-w-[200px]">
                    <ul className="p-2 grid gap-2">
                        <li><a className="hover:text-gray-950 text-gray-700" href="/profile">Mi perfil</a></li>
                        <li><a className="hover:text-gray-950 text-gray-700" href="/profile">Mis Boletos</a></li>
                        <li><a className="hover:text-gray-950 text-gray-700" href="/profile">Metodos de pago</a></li>
                        <li><a className="hover:text-gray-950 text-gray-700" href="/profile">Configuración</a></li>
                    </ul>
                </nav>
            )}
        </section>
    );
}