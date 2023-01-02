import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { DECREMENT, INCREMENT, MULTIPLY } from "../redux/constant/actionType";

const About = () => {
  // Array Practice
  let arrayData = ["First", 56456, "Second"];
  console.log("arrayData:", arrayData);

  // Object Practice

  let objectData = {
    firstName: "one",
    secondName: "two",
    userName: "oneTwo",
  };

  console.log("objectData: ", objectData);

  const countState = useSelector((state) => state.counter.count);
  console.log("countState:", countState);

  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="about-main">
            <div className="counter-main mt-2">
              <p className="text-light bg-dark p-2 text-center">{countState}</p>
            </div>
            <div className="count-btn text-center">
              <button
                onClick={() => dispatch({ type: INCREMENT })}
                className="btn btn-dark text-light"
              >
                Increment +
              </button>

              <button
                onClick={() => dispatch({ type: MULTIPLY })}
                className="btn btn-dark text-light"
              >
                Multiply *
              </button>
              <button
                onClick={() => dispatch({ type: DECREMENT })}
                className="btn btn-dark text-light"
              >
                Decrement -
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
