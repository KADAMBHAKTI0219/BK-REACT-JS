import { Link } from "react-router-dom";

function Home() {
  return (
    <div >
      <div style={{display:"flex",justifyContent:'space-around'}}>
    <Link to="/login">
        <h3 data-testid="login-link">Login Page</h3>
      </Link>
      <Link to="/dashboard">
        <h3 data-testid="home-link">Home</h3>
      </Link>
    </div>
      <h1>Home
      </h1>
      <p>To buy products click to home to go the dashboard page and login the page</p>
    </div>
  );
}
export default Home;
