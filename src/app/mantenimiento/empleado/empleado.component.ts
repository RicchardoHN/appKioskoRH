import { Component, OnInit } from '@angular/core';
import { Empleado} from 'src/app/api/models';
import { EmpleadoControllerService } from 'src/app/api/services';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';


@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  empleado: Empleado[] = [];
  visible: boolean = false;
  formEmpleado: FormGroup= this.fb.group({
    idEmpleado: [],
    nombreCompleto: [],
    puesto: [],
    departamento: []
  });

  constructor(
    private empleadoService: EmpleadoControllerService, 
    private messageService: NzMessageService,
    private fb: FormBuilder, 

   
  ) { }

  ngOnInit(): void {
    this.empleadoService.find().subscribe(data => this.empleado = data) 
    
  }

  eliminar(id: string): void {
    this.empleadoService.deleteById({ id }).subscribe(() => {
      this.empleado = this.empleado.filter(x => x.idEmpleado !== id);
      this.messageService.success('Registro Eliminado')
    })
  }

  cancel(): void {
    this.messageService.info('Su registro sigue activo')


  }

  ocultar(): void {
    this.visible = false
    this.formEmpleado.reset()

  }

  mostrar(data?: Empleado): void {
    if (data?.idEmpleado) {
      this.formEmpleado.setValue({ ...data, 'idEmpleado': String(data.idEmpleado) })
    }
    this.visible = true
  }

  guardar(): void {
    this.formEmpleado.setValue({ ...this.formEmpleado.value })
    if (this.formEmpleado.value.idEmpleado) {
      this.empleadoService.updateById({ 'id': this.formEmpleado.value.idEmpleado, 'body': this.formEmpleado.value }).subscribe(
        () => {
          this.empleado = this.empleado.map(obj => {
            if (obj.idEmpleado === this.formEmpleado.value.idEmpleado) {
              return this.formEmpleado.value;

            }
            return obj;
          })
          this.messageService.success('Registro actualizado con exito')
          this.formEmpleado.reset()
        }
      )
    } else {
      delete this.formEmpleado.value.idEmpleado
      this.empleadoService.create({ body: this.formEmpleado.value }).subscribe((datoAgregado) => {
        this.empleado = [...this.empleado, datoAgregado]
        this.messageService.success('Registro creado con exito!!')
        this.formEmpleado.reset()

      })
    }
    this.visible = false

  }
}