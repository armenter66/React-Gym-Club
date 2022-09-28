import Header from '../Header/Header';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';
import {motion} from 'framer-motion';

import './Hero.css';

const Hero = () => {

    const transition = {type: 'srping', duration: 3};
    const mobile = window.innerWidth<=768 ? true : false;
    return (
        <div className="hero">
            <div className="blur blur-h"></div>
            <div className="left-h">

                <Header/>
                
                <div className="the-best-ad">
                    <motion.div
                        initial={{left: mobile ? '178px' : '238px'}}
                        whileInView={{left: '8px'}}
                        transition={{...transition, type: 'tween'}}
                    ></motion.div>
                    <span>
                    THE BEST FITNESS CLUB IN THE TOWN</span>
                </div>

                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>SHAPE </span>
                        <span>YOUR</span>   
                    </div>    
                    <div>
                        <span>IDEAL BODY</span>
                    </div>
                    <div>
                        <span>In here we will help you to shape and build your ideal body and live up your life to fullest
                        </span>
                    </div>
                </div>

                <div className="figures">
                    <div>
                        <span>+ 140</span>
                        <span>EXPERT COACHES</span>
                    </div>
                    <div>
                        <span>+ 978</span>
                        <span>MEMBERS JOINED</span>
                    </div>
                    <div>
                        <span>+ 50</span>
                        <span>FITNESS PROGRAMS</span>
                    </div>
                </div>

                <div className="hero-buttons">
                    <buttons className="btn">
                        Get Started
                    </buttons>
                    <buttons className="btn">
                        Learn More
                    </buttons>
                </div>

            </div>

            <div className="right-h">
                <button className='btn'>Join Now</button>

                <motion.div
                initial={{right:'-1rem'}} 
                whileInView={{right: '4rem'}}
                transition={transition}
                className="heart-rate">
                    <img src={Heart} alt="Heart" />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>

                <img src={hero_image} alt="hero" className="hero-image" />
                <motion.img
                initial={{right:'11rem'}} 
                whileInView={{right: '20rem'}}
                transition={transition}
                src={hero_image_back} alt="hero-back" className="hero-image-back" />

                <motion.div
                initial={{right:'37rem'}} 
                whileInView={{right: '28rem'}}
                transition={transition}
                className="calories">
                    <img src={Calories} alt="" />
                    <div>
                        <span>Calories Burned</span>
                        <span>220 ccal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;