import './Plans.css';
import { plansData } from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png';

const Plans = () => {
    return (
        <div className="plans" id='plans'>
            <div className="blur blur-p1"></div>
            <div className="blur blur-p2"></div>
            <div className="programs-header" style={{gap: '2rem'}}>
                <span className='stroke-text'>READY TO START </span>
                <span>YOUR JOURNEY </span>
                <span className='stroke-text'> NOW WITHUS </span>
            </div>

            <div className="plans-container">
                {plansData.map((plan, i)=>{
                    return (
                        <div className="plan">
                            {plan.icon}
                            <span>{plan.name}</span>
                            <span>$ {plan.price}</span>

                            <div className="features">
                                {plan.features.map((feature, i)=>{
                                    return (
                                        <div className="feature">
                                        <img src={whiteTick} alt="whiteTick" />
                                        <span key={i}>{feature}</span>
                                        </div>
                                    )
                                })}
                            </div>
                            <div>
                                <span>See more benefits -> </span>
                            </div>
                            <button className='btn'>Join Now</button>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Plans;