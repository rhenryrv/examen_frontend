import { Component } from '@angular/core';
import { Cliente } from 'src/app/_model/cliente';
import { ClienteService } from 'src/app/_service/cliente.service';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.css']
})
export class ClienteUpdateComponent {
  cliente= new Cliente();


  constructor(public clienteService:ClienteService){

  }

  ngOnInit(): void {

  }

}
