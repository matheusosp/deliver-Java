import axios from "axios";

const APIURL = "http://localhost:8080"
export function fetchProducts(){
    return axios(`${APIURL}/products`)
}