import axios from 'axios';


const axiosInstance1 = axios.create({
    baseURL : 'https://react-course-f83b2.firebaseio.com',
    timeout : 5000
});


export default axiosInstance1;