import axios from "axios";

axios.defaults.baseURL = 'http://localhost:8000/api/'

// Automatically set API token as header
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');