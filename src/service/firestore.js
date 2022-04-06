import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs, setDoc,doc, updateDoc, deleteDoc} from "firebase/firestore/lite"
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, sendEmailVerification} from "firebase/auth"
import {v4 as uuidv4} from "uuid"


const firebaseConfig = {
    apiKey: "AIzaSyC26Cx8maAicZNlcwTdXnxMdlipjmk0ZmE",
    authDomain: "codigo13-e87df.firebaseapp.com",
    projectId: "codigo13-e87df",
    storageBucket: "codigo13-e87df.appspot.com",
    messagingSenderId: "90859257268",
    appId: "1:90859257268:web:76f209792ee9a6ce3046e1",
    measurementId: "G-2PMTY2T9MR"
  };

const app = initializeApp(firebaseConfig);

//iniciar firestore
const db = getFirestore(app);

//hacer la peticion para poder traer los datos
export const getProductClothes = async (nameCollection)=>{
  //paso 1 traer la coleccion
  const collectionClothe = collection(db, nameCollection);
  //paso 2 traer los documentos
  const documentClothes =await getDocs(collectionClothe);
  //paso 3 Crear un arreglo que guarde los documentos que estamos obteniendo
  const clothes = documentClothes.docs.map((doc)=> doc.data());
  return clothes;
}

// debemos crear una funcion que se encargue de poder crear
// elementos en nuestra base de datos
// ojo: vamos a recibir como parametro un objeto que contenga
// la informacion del producto que estamos creado
export const storeProductClothe = async (product) => {
  const id = uuidv4().replaceAll("-", "");
  // product.id = id;
  await setDoc(doc(db, "product_clothes", id), product);
};

// actualizar un datos en firebase
export const updateProductClothe = async (product) => {
  const productRef = doc(db, "product_clothes", product.id);

  await updateDoc(productRef, product);
};

// eliminar un registros de la db
export const deleteProductClothe = async (id) => {
  await deleteDoc(doc(db, "product_clothes", id));
};

//crear funcion que reciba un email y password

export const auth = getAuth();
//verificacion por email
export const sendEmail = async () => {
  const send = await sendEmailVerification(auth.currentUser);
  return send;
};


export const updateUserProfile = async (profile) => {
  try {
    await updateProfile(auth.currentUser, profile);
    return {
      ok: true,
      data: "success",
    };
  } catch (error) {
    return {
      ok: false,
      data: error.message,
    };
  }
};

//autenticacion por firestore
export const storeUser = async(email, password) => {
  try {
   const user = await createUserWithEmailAndPassword(auth, email, password);
   return{
    ok: true,
    data: user,
  }
  } catch (error) {
    console.log(error);
    return{
      ok: false,
      data: error.message
    };
  }
}

//verificar si el usuario existe
export const loginUser = async (email, password) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);

    return {
      ok: true,
      data: user,
    };
  } catch (error) {
    return {
      ok: false,
      data: error.message,
    };
  }
};