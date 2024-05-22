/* eslint-disable react/prop-types */
export const Developer = ({
  imgUrl,
  id,
  name,
  firstRol,
  secondRol,
  career,
}) => {
  return (
    <article className="student">
      <div className="student-image">
        <img src={imgUrl} alt={`Imagen de ${name}`} />
      </div>

      <div className="student-info">
        <div className="nombre-contenedor">
          <p className="student-id">{id}</p>
          <h2 className="student-nombre">{name}</h2>
        </div>

        <div className="student-tipos">
          <p className="electric tipo">{firstRol}</p>
          <p className="fire tipo">{secondRol}</p>
        </div>

        <div className="student-stats">
          <p className="stat">{career}</p>
        </div>
      </div>
    </article>
  );
};
