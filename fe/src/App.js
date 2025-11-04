import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("/api/hello")  // nginx가 FastAPI로 프록시
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(() => setMessage("API 호출 실패"));
  }, []);

  return <h1>{message}</h1>;
}

export default App;

