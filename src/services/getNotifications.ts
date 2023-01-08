import axios from "axios";

export const getNotifications = async () => {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts?userId=1"
    );

    return data;
  } catch (err) {
    return err;
  }
};
