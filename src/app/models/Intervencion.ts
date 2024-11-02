export class Intervencion {


  nroIntervencion: Date;

  fechaAvisoIntervencion: Date;

  fechaFinIntervencion: Date;


  constructor(
    nroIntervencion: Date,

    fechaAvisoIntervencion: Date,

    fechaFinIntervencion: Date,

  ) {
    this.nroIntervencion = nroIntervencion;

    this.fechaAvisoIntervencion = fechaAvisoIntervencion;

    this.fechaFinIntervencion = fechaFinIntervencion;

  }

}
