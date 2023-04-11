import hero from '../assets/images/hero.jpg';
import class1 from '../assets/images/class1.jpg';
import class2 from '../assets/images/class2.jpg';
import class3 from '../assets/images/class3.jpg';
import Card from '../components/Card';
const Home = () => {
  const classes = [
    {
      id: 1,
      name: 'Yoga for Beginners',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      image: class1
    },
    {
      id: 2,
      name: 'Yoga for Beginners',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      image: class2
    },
    {
      id: 3,
      name: 'Yoga for Beginners',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      image: class3
    }
  ]
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
            <div className='max-w-7xl mx-auto'>
              <div className="max-w-4xl mx-auto flex py-10 gap-5">
                <div className="rounded-md border-2 border-[#7F7F7F] bg-[#E7CBAE] bg-opacity-5 border-opacity-10 p-5 w-1/2">
                  <p className='text-[#7F7F7F] text-opacity-90'>BansariMira is a giant breath of fresh air, from the moment you walk in the door. <strong>We are your sacred break fron the busy</strong>, a moment to ground your day.</p>
                </div>
                <div className="rounded-md border-2 border-[#7F7F7F] bg-[#E7CBAE] bg-opacity-10 p-5 border-opacity-10 w-1/2">
                  <p className='text-[#7F7F7F] text-opacity-90'>We believe in the strength of connection; connection with your physical self and connection to the greater world around you. We understand the cyclical nature of our lives and our practices. we are passionate about creating a space where everybody is family.</p>
                </div>
              </div>
              <div className='my-[5rem]'>
                <h3 className='leading-none font-bold text-[2rem] text-[#7F7F7F] mb-5'>Check out our Classes</h3>
                <div className="grid grid-cols-3 gap-4 py-9">
                  {classes.map((item) => (
                    <Card key={item.id} title={item.name} description={item.description} image={item.image} link={'#'} />
                  ))}
                </div>
              </div>
            </div>
        </div>
    );
};

export default Home;