import type { NextPage } from "next";
import { useNames } from "../api/alacon/alacon-api";

const Home: NextPage = () => {
  const { names, error } = useNames();

  if (error) {
    console.error(error.message);
  }

  if (!names.length) {
    return <p>Chargement</p>;
  }

  return <div>Bonjour {names[0].name}</div>;
};

export default Home;
