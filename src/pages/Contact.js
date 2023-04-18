const Contact = () => {
    return (
        <div>
            <h3 className='leading-none font-bold text-[2rem] text-center text-[#7F7F7F] py-20'>Contact Us</h3>
            <div className='max-w-2xl mx-auto py-10'>
                <div className='flex flex-col md:flex-row justify-center items-start h-min'>
                    <div className='flex flex-col justify-center items-center md:items-start w-1/2'>
                        <h3 className='leading-none font-bold text-[2rem] text-center text-[#7F7F7F] py-10'>Send us a message</h3>
                        <form className='flex flex-col justify-center items-center md:items-start'>
                            <div className='flex flex-col justify-center items-center md:items-start'>
                                <label className='text-[#7F7F7F] font-bold text-[1.2rem]'>Name</label>
                                <input className='border-[#7F7F7F] border-2 rounded-md py-2 px-4 w-[20rem] md:w-[15rem] my-2' type='text' />
                                <label className='text-[#7F7F7F] font-bold text-[1.2rem]'>Email</label>
                                <input className='border-[#7F7F7F] border-2 rounded-md py-2 px-4 w-[20rem] md:w-[15rem] my-2' type='email' />
                                <label className='text-[#7F7F7F] font-bold text-[1.2rem]'>Message</label>
                                <textarea className='border-[#7F7F7F] border-2 rounded-md py-2 px-4 w-[20rem] md:w-[15rem] my-2' type='text' />
                                <button className='bg-[#7F7F7F] text-white rounded-md py-2 px-4 w-[20rem] md:w-[15rem] my-2'>Send</button>
                            </div>
                        </form>
                    </div>
                    <div className='flex flex-col w-1/2'>
                        <h3 className='leading-none font-bold text-[2rem] text-center text-[#7F7F7F] py-10'>Or find us</h3>
                        <div className='flex flex-col'>
                            <div className='flex gap-2'>
                                <span className='text-[#7F7F7F] font-bold text-[1.2rem]'>Phone: </span>
                                <span className='text-[#7F7F7F]  text-[1.2rem]'>+91 1234567890</span>
                            </div>
                            <div className='flex gap-2'>
                                <span className='text-[#7F7F7F] font-bold text-[1.2rem]'>Email: </span>
                                <span className='text-[#7F7F7F] text-[1.2rem]'>mail@BansariMira.com</span>
                            </div>
                            <div className='flex gap-2'>
                                <span className='text-[#7F7F7F] font-bold text-[1.2rem]'>Address: </span>
                                <span className='text-[#7F7F7F] w-[300px] text-[1.2rem]'>Bansari Mira, 1234, King Street, Waterloo, Ontario, Canada, 123456</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;