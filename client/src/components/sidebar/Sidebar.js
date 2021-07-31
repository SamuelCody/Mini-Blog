import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          className="sidebarImg"
          src="https://images.pexels.com/photos/4466625/pexels-photo-4466625.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        />
        <p className="sidebarText">I am Sam, a web developer and a shy guy.</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((cat) => {
            return (
              <Link key={cat} to={`/?cat=${cat.name}`} className="link">
                <li className="sidebarListItem">{cat.name}</li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW ME</span>
        <div className="sidebarSocial">
          <a
            href="https://www.facebook.com/ayinde.samuel.75"
            target="_blank"
            rel="noreferrer"
          >
            <i className="topIcon fab fa-facebook-square"></i>
          </a>
          <a
            href="https://www.twitter.com/alakowe_dev"
            target="_blank"
            rel="noreferrer"
          >
            <i className="topIcon fab fa-twitter-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
