import instruct1 from '../assets/images/instruct1.jpg';
import instruct2 from '../assets/images/instruct2.jpg';
import instruct3 from '../assets/images/instruct3.jpg';
import instruct4 from '../assets/images/instruct4.jpg';
import class1 from '../assets/images/class1.jpg';
import class2 from '../assets/images/class2.jpg';
import class3 from '../assets/images/class3.jpg';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Classes = () => {
    const yogaclasses = [
        {
            id: 1,
            name: 'Mind over Matter',
            description: 'Make your mind achieve more with movement on the mat.',
            image: class1
        },
        {
            id: 2,
            name: 'Planks for nothing',
            description: 'Planks can make a minute feel like an hour, push through it.',
            image: class2
        },
        {
            id: 3,
            name: 'Core O clock',
            description: 'Total core workout, strenghten the abdomen, and spine.',
            image: class3
        },
        {
            id: 4,
            name: 'Flow with Zumba',
            description: 'Zumba is a fusion of Latin and International music.',
            image: instruct4
        }
    ]

    const MoM = useRef(null);
    const PfN = useRef(null);
    const CoC = useRef(null);
    const FwZ = useRef(null);

    const scrollToSpot = (v) => {
        let ref;
        switch (v) {
            case 'Mind over Matter':
                ref = MoM;
                break;
            case 'Planks for nothing':
                ref = PfN;
                break;
            case 'Core O clock':
                ref = CoC;
                break;
            case 'Flow with Zumba':
                ref = FwZ;
                break;
            default:
                break;
        }
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    const navigate = useNavigate();

    return (
        <div>
            <div className='max-w-7xl mx-auto py-10'>
                <h3 className='leading-none font-bold text-[2rem] text-center text-[#7F7F7F] py-20'>Join a Class</h3>
                <div className="grid grid-cols-4 gap-4 py-9 mb-[2rem]">
                    {yogaclasses.map((yogaclass) => (
                        <div key={yogaclass.id} className='flex flex-col justify-center items-center cursor-pointer' onClick={()=>scrollToSpot(yogaclass.name)}>
                            <img src={yogaclass.image} alt={yogaclass.name} className='w-36 h-36 object-cover rounded-full' />
                            <h3 className='text-center mt-2 text-[#7F7F7F] font-semibold'>{yogaclass.name}</h3>
                            <p className='text-center italic mt-1 text-[#7F7F7F]'>{yogaclass.description}</p>
                        </div>
                    ))}
                </div>
                <hr/>
                <div className='my-[5rem]'>
                    <div className="grid grid-cols-2 gap-5 mt-[5rem]" ref={MoM}>
                        <div className='flex flex-col justify-center items-center'>
                            <img src={instruct1} alt="Bansari" className='w-[400px] h-[250px] object-cover object-top rounded-md' />
                        </div>
                        <div>
                            <h3 className='mt-2 text-[#7F7F7F] italic font-semibold text-[1.5rem]'>Mind over Matter</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quia quibusdam delectus facilis. Pariatur ullam cumque id quaerat nisi. Dolore officiis quae voluptatem est voluptates. Placeat unde iste velit? Consectetur? </p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dignissimos molestias doloribus eligendi dolorem necessitatibus explicabo optio rerum aut ipsum maxime magnam veniam quam nisi odio impedit sint, tenetur cumque?</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-5 mt-[5rem]" ref={PfN}>
                        <div>
                            <h3 className='mt-2 text-[#7F7F7F] italic font-semibold text-[1.5rem]'>Planks for Nothing</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quia quibusdam delectus facilis. Pariatur ullam cumque id quaerat nisi. Dolore officiis quae voluptatem est voluptates. Placeat unde iste velit? Consectetur? </p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dignissimos molestias doloribus eligendi dolorem necessitatibus explicabo optio rerum aut ipsum maxime magnam veniam quam nisi odio impedit sint, tenetur cumque?</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <img src={instruct2} alt="Bansari" className='w-[400px] h-[250px] object-cover object-top rounded-md' />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-5 mt-[5rem]" ref={CoC}>
                        <div className='flex flex-col justify-center items-center'>
                            <img src={instruct3} alt="Bansari" className='w-[400px] h-[250px] object-cover object-top rounded-md' />
                        </div>
                        <div>
                            <h3 className='mt-2 text-[#7F7F7F] italic font-semibold text-[1.5rem]'>Core O'Clock</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quia quibusdam delectus facilis. Pariatur ullam cumque id quaerat nisi. Dolore officiis quae voluptatem est voluptates. Placeat unde iste velit? Consectetur? </p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dignissimos molestias doloribus eligendi dolorem necessitatibus explicabo optio rerum aut ipsum maxime magnam veniam quam nisi odio impedit sint, tenetur cumque?</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-5 mt-[5rem]" ref={FwZ}>
                        <div>
                            <h3 className='mt-2 text-[#7F7F7F] italic font-semibold text-[1.5rem]'>Flow with Zumba</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quia quibusdam delectus facilis. Pariatur ullam cumque id quaerat nisi. Dolore officiis quae voluptatem est voluptates. Placeat unde iste velit? Consectetur? </p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dignissimos molestias doloribus eligendi dolorem necessitatibus explicabo optio rerum aut ipsum maxime magnam veniam quam nisi odio impedit sint, tenetur cumque?</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <img src={instruct4} alt="Bansari" className='w-[400px] h-[250px] object-cover object-top rounded-md' />
                        </div>
                    </div>
                </div>
                <hr/>
                {/* want to join our team */}
                <div className='my-[5rem]'>
                    <h3 className='text-center text-[#7F7F7F] text-[1.5rem] font-semibold'>Want to join our team?</h3>
                    <p className='text-center text-[#7F7F7F] text-[1rem] '>We are always looking for talented and passionate people to join our team. If you are interested in joining our team, please <button
                  className='bg-[#E7CBAE] border-white border-2 hover:bg-[#7F7F7F] text-white font-bold py-3 px-8 rounded-full hover:shadow'
                  onClick={() => navigate('/contact')}
                >Click here
                </button> and get in touch with us.</p>
                    </div>

            </div>
        </div>
    );
};

export default Classes;