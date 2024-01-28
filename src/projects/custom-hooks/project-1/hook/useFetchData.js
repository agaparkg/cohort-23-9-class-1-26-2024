import { useEffect, useState } from "react";
import { BASE_URL } from "../urls";

const useFetchData = () => {
  const [data, setData] = useState(null);
  // const [data, setData]=useState([])
  const [urlEnd, setUrlEnd] = useState("users");
  // https://jsonplaceholder.typicode.com/users
  // https://jsonplaceholder.typicode.com/posts
  // https://jsonplaceholder.typicode.com/comments

  const fetchData = async () => {
    try {
      const res = await fetch(BASE_URL + urlEnd);
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [urlEnd]);

  // const handleBtnClick = (e) => {
  //   const name = e.target.id;
  //   setUrlEnd(name)
  // };
  const handleBtnClick = (e) => {
    setData(null);
    setUrlEnd(e.target.id);
  };

  //   return data;
  //   return { data };
  return [data, handleBtnClick, urlEnd];
};

export default useFetchData;
