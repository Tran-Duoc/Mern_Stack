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
         console.error(error);
      }
   },
   getData: async (page = 1, limit = 5) => {
      try {
         const data = await axios.get(
            `http://localhost:8000/products/filter?page=${page}&limit=${limit}`
         );
         return data;
      } catch (error) {}
   },
};

export default handler;
