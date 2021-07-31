import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Mini Blog</span>
        <span className="headerTitleLg">Project</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/6335451/pexels-photo-6335451.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
    </div>
  );
}
