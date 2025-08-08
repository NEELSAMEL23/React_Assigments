const { useState } = React;
const App = () => {
  const [activePage, setActivePage] = useState("home");

  const renderContent = ()=>{
    switch(activePage){
        case 'home':
            return <h1>Welcome to Home Page</h1>
        case 'about':
            return <h1>About</h1>
        case 'contact':
            return <h1>Contact</h1>
    }
  }

  return (
    <>
      <div className="container">
        <div className="navbar">
          <a href="#" onClick={() => setActivePage("home")}>
            Home
          </a>
          <a href="#" onClick={() => setActivePage("about")}>
            About-us
          </a>
          <a href="#" onClick={() => setActivePage("contact")}>
            Contact
          </a>
        </div>
        <div className="content">
            {renderContent()}
        </div>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
