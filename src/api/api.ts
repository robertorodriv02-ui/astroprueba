import axios from "axios"

const baseUrl = "http://127.0.0.1:8000/"

const apiProducts = axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-type": "application/json", 
    }
})

interface Product {
    name: string
  }

export const productosApi = {
    getProducts: () => apiProducts.get<Product[]>("categories/"),
    getProduct: (id: number) => apiProducts.get<Product>(`products/${id}`)
}