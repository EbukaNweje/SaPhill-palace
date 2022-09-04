import { db } from "../base";

import {
  collection,
  // getDocs,
  // getDoc,
  addDoc,
  // updateDoc,
  // deleteDoc,
  // doc,
} from "firebase/firestore";

const OrderCollectionRef = collection(db, "Orders");

class FunctionService {
    addOrder = (Order) => {
        return addDoc(OrderCollectionRef, Order);
      };
}

export default new FunctionService()