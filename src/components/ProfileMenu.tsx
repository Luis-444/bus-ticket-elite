import { useEffect } from "react";

export default function ProfileMenu() {
    useEffect(() => {
        const user = localStorage.getItem('user');
        if (!user) {
            window.location.href = '/login';
        }
    }, []);
    const logout = () => {
        localStorage.removeItem('user');
        window.location.href = '/login';
    }
  return (
    <ul className="grid grid-cols-2 md:grid-cols-4 w-full border-collapse bg-secondary shadow-md">
      <li className="w-full">
        <a
          className="text-primary-hover p-2 hover:text-secondary hover:bg-primary-hover transition-all duration-300 w-full block text-center"
          href="/"
        >
          Inicio
        </a>
      </li>
      <li className="w-full">
        <button onClick={logout} className="text-primary-hover p-2 hover:text-secondary hover:bg-primary-hover transition-all duration-300 w-full block text-center">
            Cerrar sesion
        </button>
      </li>
    </ul>
  );
}
