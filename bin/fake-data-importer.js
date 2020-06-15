/**
 * Firebase/Firestore SDK
 */
let config = require('sourcery-env');
let faker = require("faker");
let firebase = require("firebase/app");
require("firebase/firestore");
require("firebase/auth");

firebase.initializeApp(config.FIREBASE_CONFIG);






let db = firebase.firestore();

    // Fake Repositories & Requests
    for(i=0; i<50; i++){

        try {
            (async () => {
                return await db.collection("repositories").add({
                    address1: faker.address.streetAddress(),
                    city: "Storrs",
                    country_code: "US",
                    geo: new firebase.firestore.GeoPoint( Number(faker.address.latitude()), Number(faker.address.longitude()) ),
                    institution: "University of Connecticut",
                    name: faker.company.companyName(),
                    postal_code: "06269",
                    state: "CT",
                });
            })();

            console.log("Repository Added")
        } catch (error) {
            console.log("Repository was not added", error)
        }



        // db.collection("requests").add({
        //     citation: faker.lorem.sentences(2),
        //     client_id: "TDIxZX9brGNQUOYO2pE9zntmo6E2",
        //     created_at: faker.date.recent(),
        //     label: faker.lorem.words(2),
        //     pages: 5,
        //     pricing: {
        //         base: 3000,
        //         pageFee: 250,
        //         pages: 5,
        //         perPage: 50,
        //         serviceFee: 390,
        //         total: 3640
        //     },
        //     repository: {
        //         address1: faker.address.streetAddress(),
        //         city: "Storrs",
        //         country_code: "US",
        //         geo: new firebase.firestore.GeoPoint( Number(41.801121), Number(-72.240997) ),
        //         institution: "University of Connecticut",
        //         name: faker.company.companyName(),
        //     },
        //     repository_id: "i3RFHFI0NkxbaHyiGxue",
        //     status: "pending",
        //     vendor_id: null
        // }).then(()=> {
        //     console.log("Added new Request");
        // }).catch(err => {
        //     console.log("Couldn't create new Request ", err);
        // });
    }
    process.exit();



// db.settings({
//     host: "localhost:8080",
//     ssl: false
// });

// Areas
// let areas = [
//     {
//         city: 'Storrs',
//         country: 'US',
//         state: 'CT',
//     },
// ];

// areas.forEach( async (area) =>{
//     return await db.collection("areas").add(area);
// });










