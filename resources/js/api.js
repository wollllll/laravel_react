import axios from "axios";

export default {
    posts: {
        getAll: async (query) => {
            return await axios.get('/api/posts/getAll', {
                params: {
                    query: query
                }
            })
        },
        findBySlug: async (slug) => {
            return await axios.get('/api/posts/findBySlug',{
                params: {
                    slug: slug
                }
            })
        },
    }
}
