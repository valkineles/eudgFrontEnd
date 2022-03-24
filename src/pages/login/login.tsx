import { Link} from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <h2>Login</h2>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
            <p>
                <Link to="/login/forgot">Criar novo usuario</Link>
            </p>
            <p>
                <Link to="/login/signup">Logout</Link>
            </p>

        </div>
    );
}

export default Login;