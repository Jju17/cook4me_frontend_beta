import fb from "firebase";
// import fb to

export function seedDatabaseMeals(firebase) {
  var mealsRef = firebase.firestore().collection("meals");

  mealsRef.doc().set({
    allergen: ["Blé"],
    cookerId: null,
    cookerName: "Kalisana",
    dateAvailable: fb.firestore.FieldValue.serverTimestamp(),
    deliveryAvailable: false,
    desc: "Le snack parfait pour vos coups de mous de l’après-midi ou vos entraînements sportifs !",
    isVG: true,
    price: 3.5,
    qtyAvailable: 20,
    title: "Energy Balls Corentin",
    pickupTimeSlot: "",
    rating: 5.0,
    reviews: 25,
    type: "extra",
  });
  //   mealsRef.doc().set({
  //     allergen: ["Gluten"],
  //     cookerId: null,
  //     cookerName: "Maïli",
  //     dateAvailable: fb.firestore.FieldValue.serverTimestamp(),
  //     deliveryAvailable: false,
  //     desc: "Ces lasagnes végétariennes sont composées: d'une sauce tomate faite maison, mijoter avec des feuilles de basilics, des poivrons et des aubergines grillées a la poêle, ainsi que des champignons finement coupé. Entre chaque couche, se trouve de la délicieuse mozzarella fondue. Le dessus de la lasagne est elle aussi gratiné avec de la mozzarella.",
  //     isVG: true,
  //     price: 6,
  //     qtyAvailable: 6,
  //     title: "Lasagnes végétarienne",
  //     pickupTimeSlot: "19h00 - 19h30",
  //     rating: 4.4,
  //     reviews: 44,
  //     type: "plat",
  //   });
  //   mealsRef.doc().set({
  //     allergen: [],
  //     cookerId: null,
  //     cookerName: "Romain",
  //     dateAvailable: fb.firestore.FieldValue.serverTimestamp(),
  //     deliveryAvailable: false,
  //     desc: "Lentilles de corail aux courgettes, courges, aubergines aromatisées aux épices indiennes.",
  //     isVG: true,
  //     price: 6,
  //     qtyAvailable: 10,
  //     title: "Dahl de lentilles indien",
  //     pickupTimeSlot: "18h30 - 19h00",
  //     rating: 2.5,
  //     reviews: 25,
  //     type: "plat",
  //   });
  //   mealsRef.doc().set({
  //   allergen: ["Moutarde"],
  //   cookerId: null,
  //   cookerName: "Mathilde",
  //   dateAvailable: fb.firestore.FieldValue.serverTimestamp(),
  //   deliveryAvailable: false,
  //   desc: "Côté de porc ou médaillon de porc avec sauce crème moutarde. Patate au four",
  //   isVG: false,
  //   price: 6,
  //   qtyAvailable: 10,
  //   title:
  //     "Pièce de Porc à la moutarde accompagné d’une fournée de pomme de terre",
  //   pickupTimeSlot: "19h00 - 19h30",
  //   rating: 4.2,
  //   reviews: 42,
  //   type: "entree",
  //   });
}

// export function seedDatabaseUsers(firebase) {
//   const users = [
//     {
//       userId: "bmjpkU8bBWRse2JwKgzOGTv5tUI3",
//       username: "karl",
//       fullName: "Karl Hadwen",
//       emailAddress: "karlhadwen@gmail.com",
//       following: ["2"],
//       followers: ["2", "3", "4"],
//       dateCreated: Date.now(),
//     },
//     {
//       userId: "2",
//       username: "raphael",
//       fullName: "Raffaello Sanzio da Urbino",
//       emailAddress: "raphael@sanzio.com",
//       following: [],
//       followers: ["bmjpkU8bBWRse2JwKgzOGTv5tUI3"],
//       dateCreated: Date.now(),
//     },
//     {
//       userId: "3",
//       username: "dali",
//       fullName: "Salvador Dalí",
//       emailAddress: "salvador@dali.com",
//       following: [],
//       followers: ["bmjpkU8bBWRse2JwKgzOGTv5tUI3"],
//       dateCreated: Date.now(),
//     },
//     {
//       userId: "4",
//       username: "orwell",
//       fullName: "George Orwell",
//       emailAddress: "george@orwell.com",
//       following: [],
//       followers: ["bmjpkU8bBWRse2JwKgzOGTv5tUI3"],
//       dateCreated: Date.now(),
//     },
//   ];

//   for (let k = 0; k < users.length; k++) {
//     firebase.firestore().collection("users").add(users[k]);
//   }

//   for (let i = 1; i <= 5; ++i) {
//     firebase
//       .firestore()
//       .collection("photos")
//       .add({
//         photoId: i,
//         userId: "2",
//         imageSrc: `/images/users/raphael/${i}.jpg`,
//         caption: "Saint George and the Dragon",
//         likes: [],
//         comments: [
//           {
//             displayName: "dali",
//             comment: "Love this place, looks like my animal farm!",
//           },
//           {
//             displayName: "orwell",
//             comment: "Would you mind if I used this picture?",
//           },
//         ],
//         userLatitude: "40.7128°",
//         userLongitude: "74.0060°",
//         dateCreated: Date.now(),
//       });
//   }
// }
