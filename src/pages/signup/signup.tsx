import { Link } from 'react-router-dom';

const Signup = () => {
    console.log('-------------Signup---------------')
    return (
        <div>
            <h2>Signup</h2>
            <p>
                <Link to="/login">Go to the home page</Link>
            </p>
        </div>
    );
}

export default Signup;
