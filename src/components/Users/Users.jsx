import React from "react";
import styles from './users.module.css'
import * as axios from "axios";
import userPhoto from '../../../src/assets/images/user.png'

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return <div>
            <div>
                {pages.map((page) => {
                        return <span onClick={() => {this.onPageChanged(page)}} className={this.props.currentPage === page && styles.selectedPage}>{page}</span>
                    }
                )}
            </div>
            {
                this.props.users.map(users => <div key={users.id}>
                <span>
                    <div>
                        <img src={users.photos.small != null ? users.photos.small : userPhoto}
                             className={styles.userPhoto}/>
                    </div>
                    <div>
                        {users.followed ?
                            <button onClick={() => this.props.unFollow(users.id)}>Unfollow</button>
                            : <button onClick={() => this.props.follow(users.id)}>Follow</button>}
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
    }
}

export default Users;