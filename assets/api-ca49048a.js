import{h as e}from"./index-b1306a14.js";const a=e.create({baseURL:"https://vue3-course-api.hexschool.io/v2/api/seanhong"});e.create({baseURL:"https://vue3-course-api.hexschool.io/v2/api"});const o=()=>a.get("/products"),c=t=>a.get(`/product/${t}`),r=t=>a.post("/cart",t),p=()=>a.get("/cart"),i=t=>a.delete(`/cart/${t}`),d=t=>a.post("/order",t),n=t=>a.get(`/admin/products?page=${t}`);export{o as a,c as b,r as c,p as d,i as e,d as f,n as g};
