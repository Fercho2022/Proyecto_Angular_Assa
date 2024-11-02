import { Injectable } from '@angular/core';
import {
  Auth,
  UserCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from '@angular/fire/auth';

import {
  Firestore,
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  collectionData,
  doc,
  query,
  setDoc,
  updateDoc,
} from '@angular/fire/firestore';

import { Intervencion } from '../models/Intervencion';
import { Datos } from '../models/Datos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private auth: Auth, private firestore: Firestore) {}

  firebaseError(code: string) {
    switch (code) {
      case 'auth/email-already-in-use':
        return 'El usuario ya existe';
      case 'auth/weak-password':
        return 'La contraseña es muy debil';
      case 'auth/invalid-email':
        return 'Correo inválido';
      default:
        return 'Error desconocido';
    }
  }
  async createEmailAndPassword(email: string, pass: string): Promise<any> {
    return await createUserWithEmailAndPassword(this.auth, email, pass);
  }

  async getEmailAndPassword(
    email: string,
    pass: string
  ): Promise<UserCredential> {
    return await signInWithEmailAndPassword(this.auth, email, pass);
  }

  async AgregarIntervencion(intervencion: Intervencion): Promise<any> {
    const IntRef = collection(this.firestore, 'intervenciones');
    return await addDoc(IntRef, intervencion);
  }

  async agregarCategoria(datos: Datos): Promise<any> {
    const Ref = collection(this.firestore, 'ConjuntoDatos');

    return await addDoc(Ref, datos);
  }

  obtenerDatos(): Observable<any> {
    const datosRef = collection(this.firestore, 'ConjuntoDatos');
    console.log(datosRef);
    const q = query(datosRef);

    return collectionData(q, { idField: 'id' });
  }
  async agregar_Distrito(distrito: any): Promise<any> {
    // Obtiene la referencia al documento con su Id generado automaticamente
    const RefDoc = doc(this.firestore, 'ConjuntoDatos', 'v4aVcNpJPY2rWBZiU706');

    return await updateDoc(RefDoc, {
      distritos: arrayUnion(distrito),
    });
  }

  async deleteDistrito(distrito: any): Promise<any> {
    const RefDoc = doc(this.firestore, 'ConjuntoDatos', 'v4aVcNpJPY2rWBZiU706');

    return await updateDoc(RefDoc, {
      distritos: arrayRemove(distrito),
    });
  }

  async updateDistrito(id: number, distrito: any) {
    const RefDoc = doc(this.firestore, 'ConjuntoDatos', 'v4aVcNpJPY2rWBZiU706');

    return await updateDoc(RefDoc, {
      distritos: arrayUnion(distrito),
    });
  }

  async agregar_Equipo(equipo: any): Promise<any> {
    // Obtiene la referencia al documento con su Id generado automaticamente
    const RefDoc = doc(this.firestore, 'ConjuntoDatos', 'v4aVcNpJPY2rWBZiU706');

    return await updateDoc(RefDoc, {
      equiposEnFalla: arrayUnion(equipo),
    });
  }

  async agregar_Estado(estado: any): Promise<any> {
    // Obtiene la referencia al documento con su Id generado automaticamente
    const RefDoc = doc(this.firestore, 'ConjuntoDatos', 'v4aVcNpJPY2rWBZiU706');

    return await updateDoc(RefDoc, {
      estadoEquipos: arrayUnion(estado),
    });
  }

  async agregar_Especificidad(especificidad: any): Promise<any> {
    // Obtiene la referencia al documento con su Id generado automaticamente
    const RefDoc = doc(this.firestore, 'ConjuntoDatos', 'v4aVcNpJPY2rWBZiU706');

    return await updateDoc(RefDoc, {
      equiposEspecificosFalla: arrayUnion(especificidad),
    });
  }
}
