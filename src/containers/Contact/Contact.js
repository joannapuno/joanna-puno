import React from 'react';
import classes from './Contact.css';
import { Element } from 'react-scroll';

import CopyTitle from '../../components/UI/CopyTitle/CopyTitle';
import CopyBody from '../../components/UI/CopyBody/CopyBody';
import SocialIcon from '../../components/SocialIcons/SocialIcons';
import NavArrow from '../../components/UI/NavArrow/NavArrow';
import ProfilePic from '../../components/ProfilePic/ProfilePic';


const contact = (props) => {
    const arrowStyle = {
        'top': '0'
    };

    return (
        <Element className={classes.Contact} id="#contact">

            {/* Copy */}
            <div className={classes.CopyGroup}>
                <CopyTitle>..and that's it!</CopyTitle>
                <CopyBody>Thanks for hanging in there and I hope you enjoyed my book. If you want to talk to me or even collab with me, feel free to contact me! </CopyBody>
            </div>

            {/* Photo */}
            <ProfilePic width='255px' pageClass='ContactImage' />

            {/* Social Icons */}
            <div className={classes.SocialIcons}>
                <SocialIcon class={classes.SocialIcon} link='/mailto:j.puno0909@gmail.com'>Email</SocialIcon>
                <SocialIcon class={classes.SocialIcon} link='https://www.linkedin.com/in/joanna-puno-785402137'>LinkedIn</SocialIcon>
                <SocialIcon class={classes.SocialIcon} link='https://www.github.com/joannapuno'>GitHub</SocialIcon>
            </div>

            {/* Back to Top */}
            <NavArrow
                anchorPage='/'
                label='back to top'
                style={arrowStyle}
                arrowDirection='Up' />

        </Element>
    )
};

export default contact;