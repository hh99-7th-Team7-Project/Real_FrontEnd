import {api,instance,instances} from "./core/api";

const apis = {

    checkEmail: (username) => api.post("/api/signup/checkID",username),
    checkNickName: (nickname) => api.post("/api/signup/nickID",nickname),
    addUser: (newUser) => instances.post("/api/signup", newUser),
    postLogin : (userdata) => api.post("/api/login", userdata),

    getCoffee: (brand) => api.get(`/coffee/${brand}`),
    getCoffeeDetail: (brand, id) => api.get(`/coffee/${brand}/${id}`),
    getCoffees: ()=> api.get("/coffee"),
    getCoffeeCategory: (category) => api.get(`/coffee/sidebar?category=${category}`),
    addCoffee: (brand, coffee) => instance.post(`/coffee/${brand}`,coffee),
    getRandomCoffee: ()=> api.get("/coffee/random?brand=스타벅스&category=coffee"),



    postComment : (review) => api.post(`/coffee/hal/2/review`,review),
    // getComment : () => api.get(`coffee/${brand}/${id}/review`),

}

export default apis;