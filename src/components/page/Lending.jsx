import Pagination from "../block/Pagination.jsx";
import AllUsers from "../block/AllUsers.jsx";
import Header from "../block/Header.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getUsersAccount} from "../../redux/actions/getUsers.js";

function Lending () {

    const users = useSelector ((state) => state.userSlice.users)
    const [page, setPage] = useState(1)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsersAccount(page))
    },[dispatch, page])

    return (
        <section className="landing">
            <Header/>

            <div className="users">
                {users && users.length > 0 ? users.map((user, index) => {
                    return (
                        <AllUsers user={user} index={index}/>
                    )
                }) : ''}
            </div>

            {users && users.length > 0 ?
                <Pagination page={page} setPage={setPage}/>
                : ''
            }
        </section>
    )
}

export default Lending