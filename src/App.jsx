import "./App.css";

// eslint-disable-next-line react/prop-types
function App({ children }) {
  return (
    <>
      <div className="main-app-container">{children}</div>
    </>
  );
}

export default App;
