const Footer = () => {
    
    return (
        <footer className="mt-auto bg-[#E7CBAE] flex justify-center">
            <div className="flex items-center gap-5 py-10">
                <h3 className="text-xl text-[#7F7F7F] font-bold">BansariMira</h3>
                <ul className="footer-links">
                    <li>
                        <a href="/" className="footer-link">
                            home about
                        </a>
                    </li>
                    <li>
                        <a href="/classes" className="footer-link">
                            classes
                        </a>
                    </li>
                    <li>
                        <a href="/instructors" className="footer-link">
                            Instructors
                        </a>
                    </li>
                    <li>
                        <a href="/contact" className="footer-link">
                            contact form
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;