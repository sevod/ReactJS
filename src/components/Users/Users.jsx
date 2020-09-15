import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({onPageChanged, currentPage, selectedPage, users, totalUsersCount, pageSize, followingInProgress, unFollowThunkCreator, followThunkCreator}) => {
    return (
        <div>
            <Paginator onPageChanged={onPageChanged} currentPage={currentPage} selectedPage={selectedPage}
                       totalItemsCount={totalUsersCount} pageSize={pageSize} portionSize ={10}/>
            {
                users.map(users =>
                    <User users={users} followingInProgress={followingInProgress}
                          unFollowThunkCreator={unFollowThunkCreator}
                          followThunkCreator={followThunkCreator}
                          key={users.id}/>
                )
            }
        </div>
    )
}

export default Users;