import {useSelector} from "react-redux";

function Pagination ({page, setPage}) {

    const totalPage = useSelector((state) => state.userSlice.totalPage)


    function newPage (page) {
        setPage(page)
    }
    function getPage () {
        const pages = []
        for (let i = 1; i <= totalPage; i++){
            pages.push(
                <div className={page === i ? 'page page_active' : 'page'} onClick={() => {newPage(i)}}><p className={ page === i ? "page__number page__number_active" : "page__number"}>{i}</p></div>
            )
        }
        return pages
    }

    return (
        <div className="pagination__users">
            {getPage()}
        </div>
    )
}

export default Pagination