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

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="about-main">
            <p>About</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
