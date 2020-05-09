import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

//const countries = [];

const GetData = () => {
  fetch("https://api.jsonbin.io/b/5ea4545298b3d53752345550/1")
    .then((results) => {
      return results.json();
    })
    .then((data) => {
      console.log(data);
      const items = data.countries;
      ReactDOM.render(
        <CountryArray data={items} />,
        document.getElementById("countries")
      );
    });
  return <div>Nothing here. Fething data...</div>;
};

const CountryArray = (props) => {
  const { data } = props;

  return (
    <div className="app">
      <h1>Happiest Countries in the WORLD!</h1>

      <ul className="country">
        {data.map((item) => (
          <li className={props.color}>
            {item.country}  <strong> {item.city} </strong> ( {item.ranking})
          </li>
        ))}
      </ul>
    </div>
  );
};



ReactDOM.render(<GetData />, document.getElementById("root"));

/*

const countries = [
  {
    ranking: "1",
    country: "Finland",
    city: "Helsinki",
  },
  {
    ranking: "2",
    country: "Denmark",
    city: "Copenhagen",
  },
  {
    ranking: "3",
    country: "Norway",
    city: "Oslo",
  },
  {
    ranking: "4",
    country: "Iceland",
    city: "Reykjav",
  },
  {
    ranking: "5",
    country: "Neathrerlands",
    city: "Amsterdam",
  },
];


const CountryArray = (props) => {
  const { data } = props;

  return (
    <div>
      <ul>
        {data.map((item) => (
          <li className={props.color}>
            {item.country}  <strong> {item.city} </strong> ( {item.ranking})
          </li>
        ))}
      </ul>
    </div>
  );
};



const App = () => (
  <div>
    <h1>Happiest Countries in the WORLD!</h1>
    <CountryArray data={countries} />
  </div>
);


ReactDOM.render(<App />, document.getElementById("root"));

*/