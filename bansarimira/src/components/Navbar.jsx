import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='bg-white border-gray-200'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <h3 className="text-xl text-[#7F7F7F] font-bold">BansariMira</h3>
        <ul className='font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white'>
          <li>
            <Link to='/' className='nav-link'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/classes' className='nav-link'>
                Classes
            </Link>
          </li>
          <li>
            <Link to='/instructors' className='nav-link'>
                Instructors
            </Link>
          </li>
          <li>
            <Link to='/contact' className='nav-link'>
                Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
