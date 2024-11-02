import { Component, Input } from '@angular/core';
import { ComunicacionService } from 'src/app/services/comunicacion.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent {

  @Input() camposListar!:any[]
  @Input() titulo!:string;


constructor(private _comunicacionService:ComunicacionService){

}




  ngOnInit(){
    this._comunicacionService.recibirDatos().subscribe((data)=>{
      this.camposListar=data[0].distritos
      console.log(9999);

    })
  }


  eliminarDistrito(a:any,b:any){

  }

  agregarDistrito(){
this._comunicacionService.enviarHabilitarAgregarDistrito(false);

  }

  agregarEquipo(){
    this._comunicacionService.enviarHabilitarAgregarEquipo(false);

      }

  editarDistrito(index:number, distrito:any){
    const DISTRITO={
      habilitoEditar:false,
      indiceDistrito:index,
      distrito:distrito

    }

    this._comunicacionService.enviarHabilitarEditarDistrito(DISTRITO);


      }

}
