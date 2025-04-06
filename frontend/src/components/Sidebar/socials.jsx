import './socials.css'; // Ensure the path is correct

const Socials = () => {
  return (
    <div className="socials-wrapper">
      <h3 className="socials-widget-heading">Follow us on</h3>
      <ul className="socials-list">
        <li className="socials-item">
          <a
            href="https://www.instagram.com/your-instagram-page" // Replace with actual URL
            target="_blank"
            rel="noopener noreferrer"
            title="Visit The Fleet Street, IIT Palakkad on Instagram"
          >
            <span className="fa-brands fa-instagram"></span> {/* Instagram icon */}
          </a>
        </li>
        {/* <li className="socials-item">
          <a
            href="https://www.linkedin.com/company/tfs-iitpkd/" // Replace with actual URL
            target="_blank"
            rel="noopener noreferrer"
            title="Visit The Fleet Street, IIT Palakkad on LinkedIn"
          >
            <span className="fa-brands fa-linkedin"></span> 
          </a>
        </li>
        <li className="socials-item">
          <a
            href="https://www.facebook.com/tfs.iitpkd" // Replace with actual URL
            target="_blank"
            rel="noopener noreferrer"
            title="Visit The Fleet Street, IIT Palakkad on Facebook"
          >
            <span className="fa-brands fa-facebook"></span> 
          </a> 
        </li> */}
      </ul>
    </div>
  );
};

export default Socials;
