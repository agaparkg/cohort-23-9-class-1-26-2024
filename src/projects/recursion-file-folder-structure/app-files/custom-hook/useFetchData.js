import { useEffect, useState } from "react";

const useFetchData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://65b42574770d43aba47af813.mockapi.io/api/v1/data"
        );
        const data = await res.json();

        setData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  //   return data;
  //   return { data };
  return [data];
};

export default useFetchData;
