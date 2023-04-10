import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// Nav component

export default function Navbar() {
  // useRouter hook to detect an active link and add styling
  const router = useRouter();

  // storing fetched data to state
  const [data, setData] = useState([]);

  // useEffect hook is used to fetch the data from a local api endpoint when the component mounts

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/navContent");
      const data = await res.json();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <div className="navContainer">
      <nav className="navigation">
        {/* mapping through the navigation tabs to render the navbar */}

        {data.map((nav) => (
          <div
            className={router.pathname == nav.pathname ? nav.style : "navItem"}
            key={nav.id}
          >
            <Link href={nav.pathname}>{nav.name}</Link>
          </div>
        ))}
      </nav>
    </div>
  );
}
