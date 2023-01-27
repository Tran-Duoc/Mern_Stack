import axios from "axios";

const handler = {
   loginUser: async (dataForm) => {
      try {
         const data = await axios.post(
            "http://localhost:8000/user/login",
            dataForm
         );
         return data;
      } catch (error) {
         console.log(error.response.data.message);
      }
   },
   registerUser: async (dataForm) => {
      const data = await axios.post(
         "http://localhost:8000/user/register",
         dataForm
      );
      return data;
   },
   getUser: async (userId) => {
      try {
         const data = await axios.get(
            `http://localhost:8000/user/user/${userId}`
         );
         return data.data;
      } catch (error) {
         console.log(error);
      }
   },
   getData: async (page, limit) => {
      try {
         const data = await axios.get(
            `http://localhost:8000/products/filter?page=${page}&limit=${limit}`
         );

         return data;
      } catch (error) {
         console.error(error);
      }
   },
   filterData: async (rating, price) => {
      try {
         const data = await axios.get(
            `http://localhost:8000/products/filter${
               String(rating) === "all" ? "?" : `?rating=${rating}`
            }${String(price) === "all" ? "" : `&price=${price}`}`
         );
         return data.data;
      } catch (error) {
         console.error(error);
      }
   },
   sortData: async (val) => {
      try {
         const data = await axios.get(
            `http://localhost:8000/products/filter?sort=${val}`
         );
         return data.data;
      } catch (error) {}
   },
   getItem: async (id) => {
      try {
         const data = await axios.get(
            `http://localhost:8000/products/item/${id}`
         );
         return data.data;
      } catch (error) {}
   },
   getAll: async () => {
      try {
         const data = await axios.get("http://localhost:8000/products/all");
         return data.data;
      } catch (error) {
         return error.response.data.message;
      }
   },
   createData: async (dataForm) => {
      try {
         const data = await axios.post(
            "http://localhost:8000/products/create",
            dataForm
         );
         return data.data;
      } catch (error) {
         return error.response.data.message;
      }
   },
   deleteProduct: async (productId) => {
      try {
         const data = await axios.delete(
            `http://localhost:8000/products/delete/${productId}`
         );
         return data;
      } catch (error) {
         return error;
      }
   },
   updateProduct: async (productId, dataForm) => {
      try {
         const data = await axios.put(
            `http://localhost:8000/products/item/update/${productId}`,
            dataForm
         );
         return data;
      } catch (error) {
         console.log(error);
      }
   },
};

export default handler;
