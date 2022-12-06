import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { id_ID } from 'ng-zorro-antd/i18n';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Empleado } from '../../api/models/empleado';
import { EmpleadoControllerService } from '../../api/services/empleado-controller.service';
import { Departamento } from '../../api/models/departamento';



@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit{

  empleado:Empleado[]=[];
  visible:boolean=false;

  constructor(
    private empleadoService:EmpleadoControllerService,
    private messageService:NzMessageService,
    private fb:FormBuilder
  ) {}

  formEmpleado: FormGroup = this.fb.group({
    idEmpleado:[],
    nombreCompleto:[],
    puesto:[],
    departamento:[]
  })

  ngOnInit(): void {
    this.empleadoService.find().subscribe(data=>this.empleado=data)
      
  }

  eliminar(id:string):void{
    this.empleadoService.deleteById({id}).subscribe(()=>{
      this.empleado=this.empleado.filter(x => x.idEmpleado !== id);
      this.messageService.success('Registro Eliminado')
    })
  }

  cancel():void{
    this.messageService.info('Su registro sigue activo')

  }

  ocultar():void{
    this.visible=false
  }

  mostrar(data?:Empleado):void{
  this.visible=true;
}

guardar():void{
  console.log(this.formEmpleado.value)

}

}
