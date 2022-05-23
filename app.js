const Person = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.occupation),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { className: "title" }, "React is rendered"),
    React.createElement(
      Person,
      {
        name: "Sumeet",
        occupation: "Software Developer",
      },
      null
    ),
    React.createElement(
      Person,
      {
        name: "Karan",
        occupation: "Student",
      },
      null
    ),
    React.createElement(
      Person,
      {
        name: "Anjali",
        occupation: "Chartered Accountant",
      },
      null
    ),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
