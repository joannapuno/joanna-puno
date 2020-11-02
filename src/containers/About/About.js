import React from 'react';
import classes from './About.css';

import CopyTitle from '../../components/UI/CopyTitle/CopyTitle';
import CopyBody from '../../components/UI/CopyBody/CopyBody';
import ProfilePic from '../../components/ProfilePic/ProfilePic';

const about = (props) => (
    <div className={classes.About}>
        {/* About Image */}
        <ProfilePic width={'305px'}/>

        {/* About Copy block */}
        <div className={classes.AboutText}>
            <div>
                <CopyTitle>who I am</CopyTitle>
                <CopyBody>I am a Front-End developer with a Graphic Design background at <strong>Krux Analytics.</strong> 
                <br />
                <br />
                My passion for adding interactivity and functionality to my designs drove me to development. As a developer with an eye for design, I always have the users and their needs in mind, making the user experience better.
                </CopyBody>
            </div>
            <div>
                <CopyTitle>..but who am I really!?</CopyTitle>
                <CopyBody>Well what can I say, I am a geeky gal who loves video games and board games. I enjoy watching movies, going for walks, and crafting. I'll probably be taking pictures of your dog more than you do. Also, I love stationeries!
                </CopyBody>
            </div>
        </div>
    </div>
);

export default about;