import axios from 'axios';


const axiosInstance1 = axios.create({
    baseURL : 'https://react-course-f83b2.firebaseio.com',
    timeout : 5000
});

//in 2 ta paeen middleware hastand ke ghable eral ya ghable daryaft mitavan taghirati dad
axiosInstance1.interceptors.request.use(function(config){
    console.log(config);
    return config;
}, function(err) {
    //handle error
    return Promise.reject(err)
})

axiosInstance1.interceptors.response.use(function(config){
    console.log(config);
    return config;
}, function(err) {
    //handle error
    console.log(err);
    //systemLog    >>>>  inja mitooni log begiri va zakhire koni
    //inja migi ke on err ke too barname hast chi neshun bede .errore vaghei ya errori ke khodet mikhay
    return Promise.reject(err)
})

export default axiosInstance1;