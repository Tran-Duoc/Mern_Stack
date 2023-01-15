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
   getData: async () => {
      try {
         const data = await axios.get(
            "http://localhost:8000/products/filter?page=3&limit=4"
         );
         return data;
      } catch (error) {}
   },
};

export default handler;
