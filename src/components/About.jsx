import { Developer } from "./Developer";
import "./Developer.css";
import "./About.css";
export const About = () => {
  return (
    <section className="about-section">
      <h2>
        Acerca de <br /> Nosotros
      </h2>

      <div className="students-container">
        <Developer
          imgUrl={"/images/pablo.jpeg"}
          id={"161004539"}
          name={"Juan P. Sanchez"}
          firstRol={"Estudiante"}
          secondRol={"Lider"}
          career={"Ing.Electrónica"}
        />

        <Developer
          imgUrl={"/images/edward.jpeg"}
          id={"161004525"}
          name={"Edward D. Mendez"}
          firstRol={"Estudiante"}
          secondRol={"Lider"}
          career={"Ing.Electrónica"}
        />

        <Developer
          imgUrl={"/images/juan.jpeg"}
          id={"161004518"}
          name={"Juan D. Gonzalez"}
          firstRol={"Estudiante"}
          secondRol={"Lider"}
          career={"Ing.Electrónica"}
        />
      </div>
    </section>
  );
};
