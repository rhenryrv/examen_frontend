import { Component } from '@angular/core';
import { Cliente } from '../_model/cliente';
import { ClienteService } from '../_service/cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
  cliente= new Cliente();
  sexo: string="";
  public clientes:Cliente[] = [];

  constructor(public clienteService:ClienteService){

  }

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes(){
    this.clienteService.getClientes().subscribe(data => {
      console.log(data)
      this.clientes = data;

    });
  }

  create(){
    this.cliente.sexo=this.sexo;
    this.clienteService.saveCliente(this.cliente).subscribe(data => {
      console.log(data)
      if(data){
        this.getClientes();
        this.cliente= new Cliente();
        Swal.fire("Registrado",'el proceso de ejecuto con éxito ',"success");
      }

    });
  }
  update(){
    this.cliente.sexo=this.sexo;
    this.clienteService.saveCliente(this.cliente).subscribe(data => {
      console.log(data)
      if(data){
        this.getClientes();
        this.cliente= new Cliente();
        Swal.fire("Actualizado",'el proceso de ejecuto con éxito ',"success");
      }

    });
  }

  selectCliente(id:any){
    this.clienteService.getClienteById(id).subscribe(data => {
      console.log(data)

      this.cliente = data;
      this.sexo=this.cliente.sexo


    });
  }

  delete(id:number){

    Swal.fire({
      title: 'Está seguro?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si!'
    }).then((result) => {
      this.clienteService.deleteCliente(id).subscribe(data => {
        console.log(data)
        this.getClientes();

      });

      if (result.isConfirmed) {
        Swal.fire(
          'Eliminado!',
          'El cliente seleccionado fué eliminado.',
          'success'
        )
        this.cliente= new Cliente();
      }
    })

  }

}
