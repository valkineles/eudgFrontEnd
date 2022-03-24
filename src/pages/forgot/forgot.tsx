import { Link } from 'react-router-dom';

const Forgot = () => {
    console.log('-------------Forgot---------------')
    return (
        <div>
            <h2>Forgot</h2>
            <p>
                <Link to="/login">Go to the home page</Link>
            </p>
        </div>
    );
}

export default Forgot;
