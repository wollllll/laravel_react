import axios from "axios";

export default {
    posts: {
        getAll: async function () {
            return await axios.get('/api/posts/getAll')
        },
        findPost: async function (id) {
            return await axios.get('/api/posts/findPost',{
                params: {
                    id: id
                }
            })
        }
    }
}
