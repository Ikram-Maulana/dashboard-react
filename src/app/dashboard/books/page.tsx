import { Link } from "react-router-dom";

export default function Books() {
  return (
    <>
      <div>Books</div>
      <ul>
        <li className="text-blue-500 underline">
          <Link to="/dashboard/books/1">Books 1</Link>
        </li>
      </ul>
    </>
  );
}
