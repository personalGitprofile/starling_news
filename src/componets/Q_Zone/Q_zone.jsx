
import swiming from '../../assets/qZone1.png'
import classRoom from '../../assets/qZone2.png'
import playGround from '../../assets/qZone3.png'
const Q_zone = () => {

    return (
        <div className='mx-auto w-9/12'>
            <div>
            <img src={swiming} alt="" />
         </div>
            <div>
            <img src={classRoom} alt="" />
         </div>
            <div>
            <img src={playGround} alt="" />
         </div>
        </div>
    );
};

export default Q_zone;