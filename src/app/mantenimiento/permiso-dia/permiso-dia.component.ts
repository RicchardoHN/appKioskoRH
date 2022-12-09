import { Component, OnInit} from '@angular/core';
import { Marcar, Empleado } from 'src/app/api/models';
import { EmpleadoControllerService, MarcarControllerService } from 'src/app/api/services';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-permiso-dia',
  templateUrl: './permiso-dia.component.html',
  styleUrls: ['./permiso-dia.component.css']
})
export class PermisoDiaComponent implements OnInit {
  marcar: Marcar[]= [];
  empleado: Empleado[] = [];
  visible: boolean = false;

  formMarcar: FormGroup=this.fb.group({
  horaEntrada: [],
  horaSalida: [],
  idEmpleado: [],
  nombreCompleto: [],
  });

  constructor(
    private marcarService: MarcarControllerService,
    private empleadoService: EmpleadoControllerService,
    private messageService: NzMessageService,
    private fb: FormBuilder, 
) { }

ngOnInit(): void {
  this.marcarService.find().subscribe(data => this.marcar = data)
  this.empleadoService.find().subscribe(data => this.empleado = data)
}

eliminar(id: string): void {
  this.marcarService.deleteById({ id }).subscribe(() => {
    this.marcar = this.marcar.filter(x => x.idEmpleado !== id);
    this.messageService.success('Registro Eliminado')
  })
}

cancel(): void {
  this.messageService.info('Su registro sigue activo')
}

ocultar(): void {
  this.visible = false
  this.formMarcar.reset()

}

mostrar(data?: Marcar): void {
  if (data?.idEmpleado) {
    this.formMarcar.setValue({ ...data, 'idEmpleado': String(data.idEmpleado) })
  }
  this.visible = true
}

guardar(): void {
  this.formMarcar.setValue({ ...this.formMarcar.value })
  if (this.formMarcar.value.idEmpleado) {
    this.marcarService.updateById({ 'id': this.formMarcar.value.idEmpleado, 'body': this.formMarcar.value }).subscribe(
      () => {
        this.marcar = this.marcar.map(obj => {
          if (obj.idEmpleado === this.formMarcar.value.idEmpleado) {
            return this.formMarcar.value;

          }
          return obj;
        })
        this.messageService.success('Registro actualizado con exito')
        this.formMarcar.reset()
      }
    )
  } else {
    delete this.formMarcar.value.idEmpleado
    this.marcarService.create({ body: this.formMarcar.value }).subscribe((datoAgregado) => {
      this.marcar = [...this.marcar, datoAgregado]
      this.messageService.success('Registro creado con exito!!')
      this.formMarcar.reset()

    })
  }
  this.visible = false




}
}
