import React from "react";
import styles from './users.module.css'
import {followAC, unFollowAC} from "../../redux/users-reducer";

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/392px-Dmitry_Nagiev_2017_4.jpg',
                    followed: false,
                    fullName: 'Dmitry',
                    status: 'I am a boss',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/392px-Dmitry_Nagiev_2017_4.jpg',
                    followed: true,
                    fullName: 'Sasha',
                    status: 'I am a boss',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 3,
                    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/392px-Dmitry_Nagiev_2017_4.jpg',
                    followed: false,
                    fullName: 'Andrew',
                    status: 'I am a boss',
                    location: {city: 'Kiev', country: 'Ukraine'}
                }
            ]
        )
    }
    return <div>
        {
            props.users.map(users => <div key={users.id}>
                <span>
                    <div>
                        <img src={users.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {users.followed ?
                            <button onClick={() => props.unFollow(users.id)}>Unfollow</button>
                            : <button onClick={() => props.follow(users.id)}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{users.fullName}</div><div>{users.status}</div>
                    </span>
                    <span>
                        <div>{users.location.country}</div>
                        <div>{users.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;