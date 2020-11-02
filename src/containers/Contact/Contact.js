import React from 'react';
import classes from './Contact.css';

import CopyTitle from '../../components/UI/CopyTitle/CopyTitle';
import CopyBody from '../../components/UI/CopyBody/CopyBody';
import SocialIcon from '../../components/SocialIcons/SocialIcons';

import ProfilePic from '../../components/ProfilePic/ProfilePic';

const contact = (props) => (
    <div className={classes.Contact}>

        {/* Copy */}
        <div className={classes.CopyGroup}>
            <CopyTitle>..and that's it!</CopyTitle>
            <CopyBody>Thanks for hanging in there and I hope you enjoyed my book. If you want to talk to me or even collab with me, feel free to contact me! </CopyBody>
        </div>

        {/* Photo */}
        <ProfilePic width={'255px'} />

        {/* Social Icons */}
        <div className={classes.SocialIcons}>
            <SocialIcon class={classes.SocialIcon} link='/mailto:j.puno0909@gmail.com'>Email</SocialIcon>
            <SocialIcon class={classes.SocialIcon} link='https://www.linkedin.com/in/joanna-puno-785402137'>LinkedIn</SocialIcon>
            <SocialIcon class={classes.SocialIcon} link='https://www.github.com/joannapuno'>GitHub</SocialIcon>
        </div>

        {/* Download Resume Link */}
        {/* <div className={classes.Link}>
            <a href={"#"} >download resume</a>
        </div> */}
    </div>
);

export default contact;