import Image from "next/image";
import classes from "./hero.module.css";

function Hero(props) {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/shourya.png"
          alt="Image showing author"
          height={300}
          width={300}
        />
      </div>
      <h1>Hi, I am Shourya</h1>
      <p>I blog about full stack web development</p>
    </section>
  );
}

export default Hero;
