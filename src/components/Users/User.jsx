import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";

let User = ({users, followingInProgress, unFollowThunkCreator, followThunkCreator}) => {
    return (
        <div>
                <span>
                    <div>
                        <NavLink to={'/profile/' + users.id}>
                            <img src={users.photos.small != null ? users.photos.small : userPhoto}
                                 className={styles.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {users.followed ?
                            <button disabled={followingInProgress.some(id => id === users.id)}
                                    onClick={() => {
                                        unFollowThunkCreator(users.id);
                                    }}>Unfollow</button>
                            : <button disabled={followingInProgress.some(id => id === users.id)}
                                      onClick={() => {
                                          followThunkCreator(users.id);
                                      }}>Follow</button>}
                    </div>
                </span>
            <span>
                    <span>
                        <div>{users.name}</div><div>{users.status}</div>
                    </span>
                    <span>
                        <div>{"users.location.country"}</div>
                        <div>{"users.location.city"}</div>
                    </span>
                </span>
        </div>)
}

export default User;