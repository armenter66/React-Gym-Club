import { programsData } from '../../data/programsData.js';
import rightArrow from '../../assets/rightArrow.png';
import leftArrow from '../../assets/leftArrow.png';
import './Programs.css';

const Programs = () => {
    return (
        <div className="Programs" id='programs'>
            <div className="programs-header">
                <span className='stroke-text'>EXPLORE OUR</span>
                <span>PROGRAMS</span>
                <span className='stroke-text'>TO SHAPE YOU</span>
            </div>

            <div className="programs-categories">
                {programsData.map((program)=>{
                    return (
                        <div className="category">
                            {program.image}
                            <span>{program.heading}</span>
                            <span>{program.details}</span>
                            <div className="join-now">
                                <span>Join Now</span>
                                <img src={rightArrow} alt="right" />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Programs;