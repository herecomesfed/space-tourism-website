import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.body.dataset.page = "home";
  }, []);

  return (
    <main>
      <section className="hero">
        <div className="hero__heading">
          <h1>
            <span className="heading-five hero__subheading">
              So, you want to travel to
            </span>
            Space
          </h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="hero__cta heading-four button">
          <a href="destination">Explore</a>
        </div>
      </section>
    </main>
  );
};

export default Home;
