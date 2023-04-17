import {Link} from 'react-router-dom';

const Footer = () => {
    
    return (
        <footer className="mt-auto bg-[#E7CBAE] flex justify-center">
            <div className="flex items-center gap-5 py-10">
                <h3 className="text-xl text-[#7F7F7F] font-bold">BansariMira</h3>
                <ul className="footer-links">
                    <li>
                        <Link to="/" className="footer-link">
                            home about
                        </Link>
                    </li>
                    <li>
                        <Link to="/classes" className="footer-link">
                            classes
                        </Link>
                    </li>
                    <li>
                        <Link to="/instructors" className="footer-link">
                            Instructors
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="footer-link">
                            contact form
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;