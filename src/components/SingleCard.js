import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { useParams } from "react-router-dom";

export default function SingleCard(props) {
  const { id } = useParams();
  return (
    <div>
      <div className="bg-[#fff] w-max p-10 m-2">
        <h1>{props.name}</h1>
        <img src={props.image} width={"100%"} alt="" />
        <Link className="bg-orange-700 text-white p-2 m-2" to={`/pokemon/`}>
          Details
        </Link>
        <Link className="bg-orange-200 text-white p-2 m-2" to={"/fight"}>
          Select
        </Link>
      </div>
    </div>
  );
}
