export default function ProfileMenu() {
    return (
        <ul class="grid grid-cols-2 md:grid-cols-4 w-full border-collapse bg-secondary shadow-md">
            <li class="w-full"><a class="text-primary-hover p-2 hover:text-secondary hover:bg-primary-hover transition-all duration-300 w-full block text-center" href="/profile">Mi perfil</a></li>
            <li class="w-full"><a class="text-primary-hover p-2 hover:text-secondary hover:bg-primary-hover transition-all duration-300 w-full block text-center" href="/profile">Mis Boletos</a></li>
            <li class="w-full"><a class="text-primary-hover p-2 hover:text-secondary hover:bg-primary-hover transition-all duration-300 w-full block text-center" href="/profile">Metodos de pago</a></li>
            <li class="w-full"><a class="text-primary-hover p-2 hover:text-secondary hover:bg-primary-hover transition-all duration-300 w-full block text-center" href="/profile">Configuración</a></li>
        </ul>
    );
}