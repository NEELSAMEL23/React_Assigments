const Card = ({ title, description }) => {
  return (
    <>
      <div className="card">
        <div className="card-title">{title}</div>
        <div className="card-content">{description}</div>
      </div>
    </>
  );
};

const App = () => {
  return (
    <div className="container">
      <Card
        title="Card 1"
        description="suscipit officia temporibus impedit error. Harum ducimus doloribus hic."
      />
      <Card
        title="Card 2"
        description="suscipit officia temporibus impedit error. Harum ducimus doloribus hic."
      />
      <Card
        title="Card 3"
        description="suscipit officia temporibus impedit error. Harum ducimus doloribus hic."
      />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
