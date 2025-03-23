import { Link } from 'react-router-dom';
import '../components/NotFound/NotFound.css';

const NotFoundPage = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-wrapper">
        <h1 className="notfound-heading">404 - Page Not Found</h1>
        <p className="notfound-message">Sorry, the page you are looking for does not exist.</p>
        <Link to="/" className="notfound-link">Go back to Home</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
