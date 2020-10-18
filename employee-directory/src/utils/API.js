import axios from 'axios';
const BASEURL = 'https://randomuser.me/api/';
const ALLURL = 'https://cors-anywhere.herokuapp.com/https://randomuser.me/api/?results=24&seed=2'

export default {
    getAll: function() {
        return axios.get(ALLURL)
    },
    getName: function() {
        return axios.get('https://cors-anywhere.herokuapp.com/https://randomuser.me/api/?results=4&seed=2&inc=name')
    },
    getAllOfGender: function(gender) {
        return axios.get(BASEURL + '?gender=' + gender)
    }
  };