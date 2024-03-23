const Counter = ({ cpt, changeCount }) => {
  return (
    <div>
      My Custom Counter
      <div>
        <div>
          <button
            className="boutonMoins"
            onClick={() => {
              changeCount(-1, 0);
              console.log(cpt[0]);
            }}
          >
            -
          </button>
          <button
            className="boutonPlus"
            onClick={() => {
              changeCount(1, 0);
              console.log(cpt[0]);
            }}
          >
            +{" "}
          </button>

          <p>{cpt[0]}</p>

          <button
            className="boutonReset"
            onClick={() => {
              changeCount(-cpt, 0);
              console.log(cpt[0]);
            }}
          >
            Raz
          </button>
        </div>
      </div>{" "}
    </div>
  );
};
export default Counter;
