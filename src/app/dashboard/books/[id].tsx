import { useParams } from "react-router-dom";

export default function DetailBook() {
  const { id } = useParams();

  return <div>Book {id}</div>;
}
