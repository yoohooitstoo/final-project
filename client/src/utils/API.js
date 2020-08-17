import axios from "axios";

export default {
    getOwnedBooks: function(id) {
        // console.log(id)
        return axios.get(`http://localhost:3001/api/users/${id}`)
    },
    addOwnedBook: function(id, book) {
        // console.log(id)
        return axios.put(`http://localhost:3000/api/users/added/${id}`, book)
        //may have to change to 3001 to avoid cors policy!!!
    },
    deleteOwnedBook: function(id) {
        // console.log(id)
        return axios.delete(`http://localhost:3000/api/books/${id}`)
    },
    requestToRent: function(id, user) {
        // console.log(id)
        return axios.put(`http://localhost:3000/api/books/${id}`, {userId: user});
    },
    getAllOwnedBooks: function() {
        // console.log("hello")
        return axios.get("http://localhost:3001/api/books")
    },
    bookRented: function(id, book) {
        // console.log(id)
        // console.log(book)
        return axios.put(`http://localhost:3000/api/users/rent/${id}`, {bookId: book})
    }
}