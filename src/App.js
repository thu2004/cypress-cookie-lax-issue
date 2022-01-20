import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Click on Login button to navigate to http://oauth-simulator.mocklab.io </p>
        <p>It will redirect to http://oauth-simulator.mocklab.io/login page </p>
        <p>and shows if the XSRF-TOKEN is present or not. </p>
        <button onClick={ function(e) { window.location.href = "https://oauth-simulator.mocklab.io"} }>Login</button>
      </header>
    </div>
  );
}

export default App;
