import db from '../config/firebase'
import { onValue, ref } from 'firebase/database'

const getUser = async (usuario, clave) => {
  const userRef = ref(db, `users/${usuario}/${clave}`)
  onValue(userRef, (snapshot) => {
    const data = snapshot.val()
    console.log(data)
  })
}

const addUser = async (usuario, clave, nombre, apellido) => {
  set(userRef, {
    usuario,
    clave,
    nombre,
    apellido,
  })
}

export { getUser, addUser }
