export class Intervencion {

  id?: string;
  nroIntervencion: string;

  fechaAvisoIntervencion: string;

  fechaFinIntervencion: string;


  constructor(
    nroIntervencion: string,

    fechaAvisoIntervencion: string,

    fechaFinIntervencion: string,

  ) {
    this.nroIntervencion = nroIntervencion;

    this.fechaAvisoIntervencion = fechaAvisoIntervencion;

    this.fechaFinIntervencion = fechaFinIntervencion;

  }

}
