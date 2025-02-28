import { Component, OnInit, Input, Output, EventEmitter, ViewChild, Renderer2 } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute }                                from '@angular/router';
import { trigger, state, style, animate, transition }                           from '@angular/animations';
import { Service }   			      from 'app/service';
import { Client }               from 'app/data-objects/cliente';
import { Login }               from 'app/data-objects/login';


@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
  animations: [
  ],
})

export class LoginComponent implements OnInit  {
	usuario= '';
	password= '';
	constructor( private router: Router, private service: Service ) {

	};

	ngOnInit(): void {

	};

	do(){
		let loginServ = this.service.logIn(this.usuario, this.password).subscribe(
	      response =>{ 
	      	if (response.token !== 'FAIL'){
	      		localStorage.setItem('token',  response.token);
            	localStorage.setItem('rol',  response.rol);
            	this.router.navigate(['/home']);
	      	} else {
	      		alert ('contraseña y/o usuario incorrectos, por favor intente de nuevo');
	      	}
            
	      }         
	    );
	};

	guardarUser(key, value){
		this[key] = value;
	};

	eventHandler(event) {
		if (event === 13) {
			this.do();
		};
	} 
}