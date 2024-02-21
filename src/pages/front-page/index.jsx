import { Link } from "react-router-dom";
import CenterWrapper from "../../components/Layout/CenterWrapper";

function FrontPage() {
  return (
    <CenterWrapper className="min-h-screen">
      <h1 className="my-5 text-2xl">
        About React + TypeScript + Vite + Tailwind CSS + Redux Toolkit
      </h1>
      <Link to={"/about"}>
        <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
          About
        </button>
      </Link>
    </CenterWrapper>
  );
}

export default FrontPage;
