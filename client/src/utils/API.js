import axios from "axios";

export default {
    getOwnedBooks: function(id) {
        console.log(id)
        return axios.get(`http://localhost:3001/api/users/${id}`)
    },
    addOwnedBook: function(id) {
        console.log(id)
        return axios.put(`http://localhost:3000/api/users/own/${id}`)
        //may have to change to 3001 to avoid cors policy!!!
    },
    deleteOwnedBook: function(id) {
        console.log(id)
        return axios.delete(`http://localhost:3001/api/users/${id}`)
    },
    addRenting: function(id) {
        console.log(id)
        return axios.put(`http://localhost:3001/api/users/rent${id}`);
    }
}
