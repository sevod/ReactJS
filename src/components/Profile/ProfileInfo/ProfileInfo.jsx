import React from 'react';
import Preloader from "../../common/preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader/>
    }else
        return (
        <div>
            <div>
                <img src='https://gazeta.spb.ru/wp-content/uploads/2019/06/beach-2179624_960_720.jpg'/>
            </div>
            <div>
                <img src={props.profile.photos.large} />
            </div>
        </div>
    );
}

export default ProfileInfo;