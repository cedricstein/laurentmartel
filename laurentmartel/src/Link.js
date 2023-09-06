import styled from "styled-components";
import { Link } from "react-router-dom";

const NavUnlisted = styled.ul`
  text-decoration: none;
`;

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "black",
};

const Nav = () => {
  return (
    <NavUnlisted>
      <Link to="/" style={linkStyle}>
        Home
      </Link>

      <Link to="/socials" style={linkStyle}>
        Socials
      </Link>

      <Link to="/order" style={linkStyle}>
        Place an order
      </Link>
      <Link to={`/order/${article.id}`} style={linkStyle}>
        ArticlePage
      </Link>
    </NavUnlisted>
  );
};

export default Nav;
