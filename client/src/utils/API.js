import axios from "axios";

export default {
    getOwnedBooks: function(id) {
        console.log(id)
        return axios.get(`http://localhost:3001/api/users/${id}`)
    }
}