export default function checkUser() {
    interface User {
        id: number;
        name: string;
        email: string;
        password: string;
    }

    const user = localStorage.getItem('user');
    if (!user) {
        window.location.href = '/login';
    }
    return (
        <div>
            <h1>Check user</h1>
        </div>
    )
}