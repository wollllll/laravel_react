import axios from "axios";

export default {
    posts: {
        getAll: async () => {
            return await axios.get('/api/posts/getAll')
        },
        findBySlug: async (slug) => {
            return await axios.get('/api/posts/findBySlug',{
                params: {
                    slug: slug
                }
            })
        },
        search: async (search) => {
            return await axios.get('/api/posts/search', {
                params: {
                    search: search
                }
            })
        }
    }
}
