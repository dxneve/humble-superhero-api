import { useState, useEffect } from "react";
import axios from "axios";

function DataFetcher() {
  const [data, setData] = useState<{ id: number; name: string }[]>([]);

  useEffect(() => {
    axios
      .get("/api/data")

      .then((response) => setData(response.data))

      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

export default DataFetcher;
