import { Component, OnInit, Input, Output, EventEmitter, ViewChild, Renderer2 } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute }                                from '@angular/router';
import { trigger, state, style, animate, transition }                           from '@angular/animations';
import { Service }   			      											from 'app/service';
import { Client }               												from 'app/data-objects/cliente';
import { Trabajo }               												from 'app/data-objects/trabajo';
import { Requerimiento }               from 'app/data-objects/requerimiento';

@Component({
  selector: 'more-details',
  templateUrl: 'more-details.component.html',
  animations: [
  ],
})

export class MoreDetailsComponent implements OnInit  {
  deshabilitado : boolean = true;

  requerimientos: Requerimiento[];
    
	clienteID = ''
	cliente : Client = new Client("", "", "" , "", "", "", "", "", "", true, null);

	trabajoID = ''
  trabajo : Trabajo = new Trabajo("","","","", "","","","", "","","","",null,null )


  constructor(private router: Router, private route : ActivatedRoute, private service: Service) {
    this.requerimientos = [];
  }

	ngOnInit(): void {
    this.route
      .queryParams
      .subscribe(params => {
        this.clienteID = params['cliente'];
        this.trabajoID = params['trabajo'];

      });

    if (!this.clienteID)
      this.clienteID = ''
	 this.getWorks(this.clienteID, this.trabajoID);

  };

  addReq(req){
    
    let re = new Requerimiento(req,"","");

    let loading = this.service.agregarRequerimiento(this.clienteID, this.trabajoID, re).subscribe(
      response =>{ 
        let aa = response;
        this.requerimientos.push(aa)
        alert("Se ha agregado un requerimiento exitosamente")

      }         
    );

  }

  delteReq(req){
  }

	do(){
		this.deshabilitado = !this.deshabilitado;
	}

  addMasDetalleCliente(key, value){
    this.cliente[key] = value;
  }

  addMasDetalleTrabajo(key, value){
    this.trabajo[key] = value;
  }

	buttonState(){
		return this.deshabilitado;
	}

  getWorks(idCliente, idTrabajo): void {
    this.service.getClient(idCliente).subscribe(
      response => {
        this.cliente = response;
      }        
    );

    this.service.getTrabajo(idCliente, idTrabajo).subscribe(
      response => {
        this.trabajo = response;

          if (this.trabajo.requerimientos) {
            this.requerimientos = this.trabajo.requerimientos
          }
      }        
    );
  }

  cancelMasDetalles(){
   this.getWorks(this.clienteID, this.trabajoID);
  }

  saveMasDetalles(){
    this.service.editCliente(this.cliente).subscribe(
      response => {
        let cliente = response;
        alert('Se han guardado los cambios exitosamente.')

      },
      error => {
        // Defaults to 0 if no query param provided.
        alert('Usted no tiene permisos para realizar la operacion.')
      }         
    );
    this.service.editTrabajo(this.clienteID, this.trabajo).subscribe(
      response => {
        let trabajo = response;
      },
      error => {
        // Defaults to 0 if no query param provided.
        alert('Usted no tiene permisos para realizar la operacion.')
      }         
    );
  }
}
 