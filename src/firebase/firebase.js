import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBcZldtiPncsiC7zW-z6dkPBc0IPVq0Tbs",
    authDomain: "expensify-9a1e9.firebaseapp.com",
    databaseURL: "https://expensify-9a1e9.firebaseio.com",
    projectId: "expensify-9a1e9",
    storageBucket: "expensify-9a1e9.appspot.com",
    messagingSenderId: "950975385248",
    appId: "1:950975385248:web:f3021a2d41d4692c4783c5",
    measurementId: "G-ZVWR8ZQ121"
  };

firebase.initializeApp(config);

const database = firebase.database();

export {firebase, database as default };

/* database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
}); */



/* database.ref('expenses')
  .once('value')
  .then((snapshot) => {
      const expenses = [];

      snapshot.forEach((child) => {
          expenses.push({
              id: child.key,

              ...child.val()
          });
      });

      console.log(expenses);
  }); */

/* database.ref('expenses').on('value', (snapshot) => {
    const expenses = [];
    snapshot.forEach((child) => {
        expenses.push({
            id: child.key,
            ...child.val()
        });
    });

    console.log(expenses);
}); */

/* database.ref('expenses').push({
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: 9761232489734
}); */


/* database.ref('notes/-M2PLIRbDmMSclA8zG0x').remove(); */

/* database.ref('notes').push({
    title: 'Course Topics',
    body: 'React Native, Angular, Python'
}); */

/* const firebaseNotes = {
        apojfsd: {
            title: 'First note!',
            body: 'This is my note'
        },
        aplisdffjs: {
            title: 'Another note!',
            body: 'This is my note'
        }
};

database.ref('notes').set(firebaseNotes); */

/* database.ref().on('value', (snapshot) => {
    const val = snapshot.val();
    console.log(val.name+' is a '+ val.job.title + ' at '+ val.job.company);
}) */

/* const onValueChange = database.ref().on('value', (snapshot) => {
    console.log(snapshot.val());
}, (e) => {
    console.log('Error with data fetching', e);
});

setTimeout(() => {
    database.ref('age').set(28);
}, 3500);

setTimeout(() => {
    database.ref().off(onValueChange);
}, 37000);

setTimeout(() => {
    database.ref('age').set(29);
}, 10500); */

/* database.ref().set({
    name: 'Lingkai',
    age:26,
    stressLevel: 6,
    job: {
        title: 'Software developer',
        company: 'Google'
    },
    location: {
        city: 'Columbus'
    }
}).then(() => {
    console.log('Date is saved!');
}).catch((e) => {
    console.log('This failed.', e);
});

database.ref().update({
    stressLevel: 9,
    'job/company': 'Amazon',
    'location/city': 'Seattle'
}); */

/* database.ref()
    .remove()
    .then(() => {
        console.log('Data was removed');
    }).catch((e) => {
        console.log('Did not remove data', e);
    }); */

