import hero from '../assets/hero.jpg';
const Home = () => {
    return (
        <div>
            <div className="bg-cover bg-center h-[48rem] flex items-center"
          style={{
            backgroundImage:
              `url(${hero})`
          }}>
            <div className='ml-24 max-w-3xl'>
              <h3 className='text-[4rem] leading-none font-bold'>
                Unlock your Inner Peace
              </h3>
                <p className='text-[1.5rem] text-[#7F7F7F] mt-4'>
                    BansariMira is a yoga studio that offers a variety of yoga classes for all levels. We are located in the heart of Uptown Waterloo.
                </p>
              </div>
            </div>
            <h1 className=''>Home</h1>
        </div>
    );
};

export default Home;