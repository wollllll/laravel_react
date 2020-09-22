import React, {useEffect, useState} from "react";
import Base from "../../components/layouts/Base";
import Item from "../../components/posts/Item";
import api from "../../api";
import Paginate from "../../components/Paginate";

const Index = () => {
    const [posts, setPosts] = useState([]);
    const [pageCurrent, setPageCurrent] = useState(1);
    const [pageFrom, setPageFrom] = useState(1);
    const [pageTo, setPageTo] = useState(1);

    useEffect(() => {
        api.posts.getAll()
            .then(response => {
                const posts = response.data.posts;

                setPosts(posts.data);
                setPageFrom(posts.from);
                setPageTo(posts.to);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <Base setPosts={setPosts}>
                {
                    posts.map(post => {
                        return (
                            <Item
                                key={post.id}
                                post={post}
                            />
                        )
                    })
                }
                <Paginate
                    setPosts={setPosts}
                    from={pageFrom}
                    to={pageTo}
                />
            </Base>
        </div>
    )
}

export default Index;
