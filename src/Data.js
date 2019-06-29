import React from 'react';
import './App.css';
import { useCollection } from 'react-firebase-hooks/firestore';
import firebase from './fire';

const campaigns = firebase.firestore().collection('campaigns');

function Data() {
  const [snapshot, loading, err] = useCollection(campaigns);

  if (loading) {
    return 'Data loading...';
  }

  if (err) throw err;
  console.log('data snapshot', snapshot)
  return (
    <div>
      Data:
      {snapshot && snapshot.docs && snapshot.docs.map((doc, i) => {
        const data = doc.data();
        return <div key={i}>{JSON.stringify(data)}</div>
      })}
    </div>
  );
}

export default Data;
