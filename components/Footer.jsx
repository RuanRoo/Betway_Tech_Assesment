import { useEffect, useState } from "react";

const Footer = () => {

  // storing fetched data to state
  const [data, setData] = useState("");

  // useEffect hook is used to fetch the data when the component mounts

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/footerInfo");
      const data = await res.json();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <div className="footerContainer">
      <div className="footerContent">
      <p>{data.par}</p>
      <h2>{data.heading}</h2>
      <button>{data.button}</button>
      </div>
    </div>
  );
};

export default Footer;
