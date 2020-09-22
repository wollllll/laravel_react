import React, {useState} from "react";
import api from "../api";

const Paginate = ({setPosts, from, to}) => {
    const [page, setPage] = useState(1);

    const previousPage = () => {
        api.posts.getAll('', page - 1)
            .then(response => {
                setPosts(response.data.posts.data);
                setPage(page - 1);
            })
            .catch(error => {
                console.log(error);
            });
    };
    const nextPage = () => {
        api.posts.getAll('', page + 1)
            .then(response => {
                setPosts(response.data.posts.data);
                setPage(page + 1);
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div className="mx-auto w-25">
            <button onClick={previousPage} disabled={page === from}>前へ</button>
            <button onClick={nextPage} disabled={page === to}>次へ</button>
        </div>
    )
}

export default Paginate;
