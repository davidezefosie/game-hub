import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "063b8a179cb54f949a775cbb8fb86f76",
  },
});
