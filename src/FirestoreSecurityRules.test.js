import * as firebase from '@firebase/testing';
import fs from 'fs';

const projectId = 'adwords-optimize-test';


beforeEach(async () => {

});

afterEach(async () => {
  await Promise.all(firebase.apps().map(app => app.delete()));
  await firebase.clearFirestoreData({ projectId });
});


beforeAll(async () => {
});

afterAll(async () => {
  await firebase.clearFirestoreData({ projectId });
});

const mockData = {
  'users/bob'  : {
    role: 'admin',
  },
  'users/alice': {
    role: 'guest',
  },

  'campaigns/1': {
    hello: 'world',
  },
};

it('Not allowed', async () => {
  const mockUser = { uid: 'alice' };
  const db       = await setup(mockUser, mockData);

  await firebase.assertFails(db.collection('campaigns').doc('1').get());
});

it('Allowed', async () => {
  const mockUser = { uid: 'bob' };
  const db       = await setup(mockUser, mockData);

  await firebase.assertSucceeds(db.collection('campaigns').doc('1').get());
});

const setup = async (auth, data) => {
  const projectId = `rules-spec-${Date.now()}`;
  const allowAll = 'service cloud.firestore {  match /{document=**} { allow read, write: if true; } }';

  const app       = await firebase.initializeTestApp({ projectId, auth });
  await firebase.loadFirestoreRules({ projectId, rules: allowAll });

  const db       = app.firestore();

  // Write mock documents before rules
  if (data) {
    for (const key in data) {
      const ref = db.doc(key);
      await ref.set(data[key]);
    }
  }

  // Apply rules
  await firebase.loadFirestoreRules({ projectId, rules: fs.readFileSync('firestore.rules', 'utf8') });

  return db;
};