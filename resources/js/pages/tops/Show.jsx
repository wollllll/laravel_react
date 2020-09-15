import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import api from "../../api";
import NotFound from "../../components/NotFound";
import Base from "../../components/Layout/Base";

const Show = () => {
    const {id} = useParams();
    const [post, setPost] = useState([]);

    useEffect(() => {
        api.posts.findPost(id)
            .then(response => {
                setPost(response.data.post);
            })
            .catch(error => {
            });
    }, []);

    return post ? (
        <div>
            <Base>
                {post.title}
                {post.detail}
            </Base>
        </div>
    ) : <NotFound/>
}

export default Show;
