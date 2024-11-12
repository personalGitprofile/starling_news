
import baby from '../../assets/1.png'
import { FaCalendarCheck } from "react-icons/fa";
const LeftSIdeNews = () => {
    return (
        <>
            <div className='pb-8 border-b border-slate-200 mb-7'>
            <img src={baby} alt="" />
            <h3 className='font-display font-semibold text-lg py-2 text-justify'>Sets the interval between each scroll movement in milliseconds.</h3>
            <div className='flex '>
                <div className='grid grid-cols-2 mt-2 '>
                <p>Sports</p>
                <p className='flex items-center gap-2 pl-8 text-gray-500'><FaCalendarCheck />  Jan 4,2024</p>
               </div>
            </div>
            </div>
            
            <div className='pb-8 border-b border-slate-200 mb-7'>
            <img src={baby} alt="" />
            <h3 className='font-display font-semibold text-lgpy-2 text-justify'>Sets the interval between each scroll movement in milliseconds.</h3>
            <div className='flex '>
                <div className='grid grid-cols-2 mt-2 '>
                <p>Sports</p>
                <p className='flex items-center gap-2 pl-8 text-gray-500'><FaCalendarCheck />  Jan 4,2024</p>
               </div>
            </div>
            </div>
            
            <div>
            <img src={baby} alt="" />
            <h3 className='font-display font-semibold text-lg py-2 text-justify'>Sets the interval between each scroll movement in milliseconds.</h3>
            <div className='flex '>
                <div className='grid grid-cols-2 mt-2 '>
                <p>Sports</p>
                <p className='flex items-center gap-2 pl-8 text-gray-500'><FaCalendarCheck />  Jan 4,2024</p>
               </div>
            </div>
        </div>
        </>
    );
};

export default LeftSIdeNews;