import db from '../config/firebase'
import { collection, addDoc, getDocs, where, query } from 'firebase/firestore'

const getUser = async (usuario, clave) => {
  const q = query(
    collection(db, 'usuarios'),
    where('usuario', '==', usuario),
    where('clave', '==', clave),
  )

  const r = await getDocs(q).then((querySnapshot) => {
    return querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }))[0]
  })

  if (r === undefined) throw  new Error('Usuario inexistente.')

  return r
}

const userExist = async (usuario) => {
  const q = query(collection(db, 'usuarios'), where('usuario', '==', usuario))

  const r = await getDocs(q).then((querySnapshot) => {
    return querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }))[0]
  })

  return r !== undefined
}

const addUser = async (usuario, clave, nombre, apellido) => {
  const user = { usuario, clave, nombre, apellido }
  const userExistResult = await userExist(usuario)
  if (!userExistResult) {
    await addDoc(collection(db, 'usuarios'), user)
    return await getUser(usuario, clave)
  }
  throw new Error('Usuario existe.');
}

export { getUser, addUser }
