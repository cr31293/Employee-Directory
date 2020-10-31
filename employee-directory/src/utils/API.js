import axios from 'axios';
const BASEURL = 'https://randomuser.me/api/';
const ALLURL = 'https://randomuser.me/api/?results=24&seed=2'

export default {
    getAll: function() {
        return axios.get(ALLURL)
    },
    getFilterValues: function() {
        return axios.get('https://cors-anywhere.herokuapp.com/https://randomuser.me/api/?results=24&seed=2')
    },
    getAllOfGender: function(gender) {
        return axios.get(BASEURL + '?gender=' + gender)
    }
  };