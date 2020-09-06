import React from "react";
import Base from "../../components/Layout/Base";
import Item from "../../components/Post/Item";

const Index = () => {
    const posts = [
        {id: 1, title: 'title 1', detail: 'detail 1', created_at: '2020-08-10'},
        {id: 2, title: 'title 2', detail: 'detail 2', created_at: '2020-08-10'},
        {id: 3, title: 'title 3', detail: 'detail 3', created_at: '2020-08-10'},
        {id: 4, title: 'title 4', detail: 'detail 4', created_at: '2020-08-10'},
        {id: 5, title: 'title 4', detail: 'detail 4', created_at: '2020-08-10'}
    ];

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
