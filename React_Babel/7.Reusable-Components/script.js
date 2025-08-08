const List = ({ text }) => <li>{text}</li>;

const PlanCard = ({ name, price, features }) => (
  <div className="card">
    <h3>{name}</h3>

    <ul>
      {features.map((items, index) => (
        <List text={items} key={index} />
      ))}
    </ul>
    <h1>{price}</h1>
    <a href="#">Get Started</a>
  </div>
);

const App = () => {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      features: ["1 lorem ipsum", "Lorem ipsum dolor", "Monthly Updates"],
    },
    {
      name: "Lorem Plus",
      price: "$32.00",
      features: ["1 lorem ipsum", "Lorem ipsum dolor", "Monthly Updates"],
    },
    {
      name: "Lorem Pro",
      price: "$50.00",
      features: ["1 lorem ipsum", "Lorem ipsum dolor", "Monthly Updates"],
    },
  ];

  return (
    <>
      <div className="container">
        <div className="header">
          <div className="left-side">
            <h1>
              {" "}
              The Right Plan for{" "}
              <span style={{ color: "#6c63ff" }}>Your Business</span>
            </h1>
          </div>
          <div className="right-side">
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Numquam
              quod in iure vero. Facilis magnam, sed officiis commodo labore
              odit.
            </p>
          </div>
        </div>
        <div className="content">
          {plans.map((currPlans, index) => (
            <PlanCard
              key={index}
              name={currPlans.name}
              features={currPlans.features}
              price={currPlans.price}
            />
          ))}
        </div>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
