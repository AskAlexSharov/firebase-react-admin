import React from "react";
import "../App.css";
import fire from "./../config/app";
import { useCollection } from "react-firebase-hooks/firestore";

const campaigns = fire.firestore().collection("campaigns");

function Data() {
  const [snapshot, loading, err] = useCollection(campaigns);

  if (loading) {
    return <div>Data loading...</div>;
  }

  if (err) throw err;

  return (
    <div>
      Data:
      {snapshot &&
        snapshot.docs &&
        snapshot.docs.map((doc, i) => {
          const data = doc.data();
          return <div key={i}>{JSON.stringify(data)}</div>;
        })}
    </div>
  );
}

export default Data;
