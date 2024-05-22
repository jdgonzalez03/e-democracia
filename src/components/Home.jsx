import "./Home.css";

export const Home = () => {
  return (
    <div className="home-container">
      <h1 className="title-home">
        El <span className="yellow">poder</span> de escoger a tus{" "}
        <span className="blue">representantes</span>a la palma de tu{" "}
        <span className="red">mano</span>.
      </h1>
      <figure className="image-container">
        <img
          src="/images/home.png"
          alt="Gente tratando de decidir"
          className="home-image"
        />
      </figure>
    </div>
  );
};
