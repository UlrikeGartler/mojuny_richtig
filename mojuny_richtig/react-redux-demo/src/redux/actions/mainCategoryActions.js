import { BUY_STRATEGY } from "./mainCategoryTypes";
import { BUY_MOTIVATION } from "./mainCategoryTypes";
import { LOAD_CATEGORIES } from "./mainCategoryTypes";
import React, { useState, useEffect } from "react";
import { getFirebase } from "react-redux-firebase";

// export const buyStrategy = () => {
//   return (dispatch, getState, { getFirebase }) => {
//     const firestore = getFirebase().firestore();
//     firestore
//       .collection("mainCategory")
//       .doc(2)
//       .get()
//       .then((doc) => {
//         if (doc.exists) {
//           const data = doc.data();
//           // console.log(data);
//           dispatch({ type: "BUY_MOTIVATION", data });
//         } else {
//           console.log("does not exist");
//         }
//       });
//   };
// };
// export const buyMotivation = () => {
//   return {
//     type: BUY_MOTIVATION,
//   };
// };

export function loadCategories() {
  return (dispatch, getState, { getFirebase }) => {
    const ref = getFirebase().firestore().collection("mainCategory");
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot
        .forEach((doc) => {
          items.push(doc.data());
        })
        .then(() => {
          dispatch({ type: LOAD_CATEGORIES });
        });
    });
  };
}

// .then((doc) => {
//   if (doc.exists) {
//     const data = doc.data();
//     console.log(data);
//     dispatch({ type: "LOAD_CATEGORIES", data });
//   } else {
//     console.log("does not exist");
//   }
// });
