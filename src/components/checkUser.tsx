export default function checkUser() {
    console.log('checkUser');
    const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
    if (!user) {
        window.location.href = '/login';
    }
    return (
        <div>
            <h1>Check user</h1>
        </div>
    )
}