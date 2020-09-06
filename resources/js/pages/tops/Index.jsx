import React, {useEffect, useState} from "react";
import Base from "../../components/Layout/Base";
import Item from "../../components/Post/Item";
import api from "../../api";

const Index = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        api.posts.getAll()
            .then(response => {
                setPosts(response.data.posts);
            }).catch(error => {
            console.log(error);
        });
    }, []);

    return (
        <div>
            <Base>
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
            </Base>
        </div>
    )
}

export default Index;
