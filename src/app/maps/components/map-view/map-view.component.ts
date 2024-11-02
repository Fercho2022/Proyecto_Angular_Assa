import { PlacesService } from './../../services/places.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent {


  constructor(private PlacesService:PlacesService){

  }

  ngOnInit(){
    console.log(this.PlacesService.useLocation)
  }
}
