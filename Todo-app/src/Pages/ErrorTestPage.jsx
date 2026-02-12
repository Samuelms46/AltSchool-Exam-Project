import { useState } from "react";

function ErrorTestPage() {
  const [shouldError, setShouldError] = useState(false);

  if (shouldError) {
    throw new Error("This is a test error to demonstrate the Error Boundary!");
  }

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Error Boundary Test</h1>
      <p>
        Click the button below to trigger an error and see the Error Boundary in
        action.
      </p>
      <button
        onClick={() => setShouldError(true)}
        style={{
          background: "#ef4444",
          color: "white",
          border: "none",
          padding: "0.75rem 1.5rem",
          borderRadius: "6px",
          fontSize: "1rem",
          marginTop: "1rem",
          cursor: "pointer",
        }}
      >
        Trigger Error
      </button>
    </div>
  );
}

export default ErrorTestPage;
