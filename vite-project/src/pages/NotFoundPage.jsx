import { Link } from 'react-router-dom';

const styles = {
  container: {
    display: 'flex',
    width: '100vw',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '3vw', 
  },
  wrapper: {
    textAlign: 'center',
    marginTop: '3vh',
    maxWidth: '80vw', 
    padding: '1.2vw', 
  },
  heading: {
    fontSize: 'clamp(1rem, 3vw, 1.8rem)', 
    color: '#333',
  },
  message: {
    fontSize: 'clamp(0.8rem, 2.5vw, 1rem)', 
    color: '#666',
  },
  link: {
    display: 'inline-block',
    marginTop: '1.2vh',
    padding: '0.6vh 1.5vw',
    fontSize: 'clamp(0.7rem, 1.8vw, 0.9rem)',
    color: '#007bff',
    textDecoration: 'none',
    border: '1px solid #007bff',
    borderRadius: '4px',
    transition: 'background-color 0.3s ease',
  },
};

const NotFoundPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <h1 style={styles.heading}>404 - Page Not Found</h1>
        <p style={styles.message}>Sorry, the page you are looking for does not exist.</p>
        <Link to="/" style={styles.link}>Go back to Home</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
