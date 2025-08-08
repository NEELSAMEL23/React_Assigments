const blogs = [
  {
    title: "React Basics",
    content: "Learn the basics of React.",
    isFeatured: true,
  },
  {
    title: "Advanced React",
    content: "Delve deeper into React.",
    isFeatured: false,
  },
  {
    title: "React Performance Tips",
    content: "Optimize your React apps.",
    isFeatured: true,
  },
];

const App = () => {
  return (
    <>
      <div className="container">
        {blogs.map((current, index) => (
          <div
            key={index}
            className={`blog ${current.isFeatured ? "feature" : ""}`}
          >
            <h2>{current.title}</h2>
            <p>{current.content}</p>
          </div>
        ))}
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
