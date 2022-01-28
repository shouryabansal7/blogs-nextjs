import Link from "next/link";
import Logo from "./logo";
import classes from "./main-navigation.module.css";

function MainNavigation(props) {
  return (
    <header className={classes.header}>
      {/* when we wrap any html content other than plane text in link, link will not render an anchor tag by default
        so in order to get that we have to bring our own anchor tag but we dont need to add href on that anchor tag
        link will pass href directly to child of link */}
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
