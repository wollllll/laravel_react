import axios from "axios";

export default {
    posts: {
        getAll: async (query, page = 1) => {
            return await axios.get('/api/posts/getAll', {
                params: {
                    query: query,
                    page: page
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
