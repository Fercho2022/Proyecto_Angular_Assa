export class Datos {
  id?: string;
  estadoEquipos: any[];
  HuboGastos: any[];
  PersonalATP: any[];
  detalleGastos: any[];
  equiposRetiradosOInstalados: any[];
  distritos: any[];
  equiposEspecificosFalla: any[];
  equiposEnFalla:any[];
  personalDistritos: any[];
  estaciones: any[];


  constructor(
    estadoEquipos: any[],
    HuboGastos: any[],
    PersonalATP: any[],
    detalleGastos: any[],
    equiposRetiradosOInstalados: any[],
    distritos: any[],
    equiposEspecificosFalla:any[],
    equiposEnFalla: any[],
    personalDistritos: any[],
    estaciones:any[],

  ) {
    this.estadoEquipos = estadoEquipos;
    this.HuboGastos = HuboGastos;
    this.PersonalATP = PersonalATP;
    this.detalleGastos = detalleGastos;
    this.equiposRetiradosOInstalados = equiposRetiradosOInstalados;
    this.distritos = distritos;
    this.equiposEspecificosFalla = equiposEspecificosFalla;
    this.equiposEnFalla = equiposEnFalla;
    this.personalDistritos = personalDistritos;
    this.estaciones = estaciones;


  }

}
