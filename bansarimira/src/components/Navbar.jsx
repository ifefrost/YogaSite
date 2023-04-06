const Navbar = () => {
  return (
    <nav className='bg-white border-gray-200'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <h3 className="text-xl text-[#7F7F7F] font-bold">BansariMira</h3>
        <ul className='font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white'>
          <li>
            <a href='/' className='nav-link'>
              Home
            </a>
          </li>
          <li>
            <a href='/classes' className='nav-link'>
                Classes
            </a>
          </li>
          <li>
            <a href='/instructors' className='nav-link'>
                Instructors
            </a>
          </li>
          <li>
            <a href='/contact' className='nav-link'>
                Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
