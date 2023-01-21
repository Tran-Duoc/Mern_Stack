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

         /*
          * pagination
          * filter
          * sort
          */

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
};
// &page=${page}&limit${limit}
export default handler;