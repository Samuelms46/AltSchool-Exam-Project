import { Link } from "react-router-dom";
import "../styles/NotFound.css";

function NotFoundPage() {
  return (
    <main className="not-found-page">
      <div className="not-found-container">
        <h1 className="error-code">404</h1>
        <h2>Page Not Found</h2>
        <p>The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="home-link">
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}

export default NotFoundPage;
