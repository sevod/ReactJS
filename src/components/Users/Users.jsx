import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";
import {followThunkCreator, unFollowThunkCreator} from "../../redux/users-reducer";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div>
                {pages.map((page) => {
                        return <span onClick={() => {
                            props.onPageChanged(page)
                        }} className={props.currentPage === page && styles.selectedPage}>{page}</span>
                    }
                )}
            </div>
            {
                props.users.map(users => <div key={users.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + users.id}>
                            <img src={users.photos.small != null ? users.photos.small : userPhoto}
                                 className={styles.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {users.followed ?
                            <button disabled={props.followingInProgress.some(id => id === users.id)}
                                    onClick={() => {
                                        props.unFollowThunkCreator(users.id);
                                    }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === users.id)}
                                      onClick={() => {
                                          props.followThunkCreator(users.id);
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
        </div>
    )
}

export default Users;