import axios from "axios";
const PORT = process.env.PORT || 3001

export default {
    getOwnedBooks: function(id) {
        console.log(id)
        return axios.get(`http://localhost:${PORT}/api/users/${id}`)
    },
    addOwnedBook: function(id, book) {
        console.log(id)
        return axios.put(`http://localhost:${PORT}/api/users/added/${id}`, book)
        //may have to change to 3001 to avoid cors policy!!!
    },
    deleteOwnedBook: function(id) {
        console.log(id)
        return axios.delete(`http://localhost:${PORT}/api/books/${id}`)
    },
    requestToRent: function(id, user) {
        console.log(id)
        console.log(user)
        return axios.put(`http://localhost:${PORT}/api/books/${id}`, {userId: user});
    },
    getAllOwnedBooks: function() {
        console.log("hello")
        return axios.get(`http://localhost:${PORT}/api/books`)
    },
    bookRented: function(id, book) {
        console.log(id)
        console.log(book)
        return axios.put(`http://localhost:${PORT}/api/users/rent/${id}`, {bookId: book})
    }
}