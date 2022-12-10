import { Component, OnInit } from '@angular/core';
import { PermisoDia, Empleado } from 'src/app/api/models';
import { EmpleadoControllerService, PermisoDiaControllerService } from 'src/app/api/services';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-permiso-dia',
  templateUrl: './permiso-dia.component.html',
  styleUrls: ['./permiso-dia.component.css']
})
export class PermisoDiaComponent implements OnInit{
  permisodia: PermisoDia[]= [];
  empleado: Empleado[] = [];
  visible: boolean = false;

  formPermisoDia: FormGroup=this.fb.group({
    fechaRegreso: [],
    fechaSalida: [],
    idEmpleado: [],
    nombreCompleto: [],
  });

    constructor(
      private PermisoDiaService: PermisoDiaControllerService,
      private empleadoService: EmpleadoControllerService,
      private messageService: NzMessageService,
      private fb: FormBuilder, 
    ) { }

    ngOnInit(): void {
      this.PermisoDiaService.find().subscribe(data => this.permisodia = data)
      this.empleadoService.find().subscribe(data => this.empleado = data)
    }

    eliminar(id: string): void {
      this.PermisoDiaService.deleteById({ id }).subscribe(() => {
        this.permisodia = this.permisodia.filter(x => x.idEmpleado !== id);
        this.messageService.success('Registro Eliminado')
      }) 
    }

    cancel(): void {
      this.messageService.info('Su registro sigue activo')
    }

    ocultar(): void {
      this.visible = false
      this.formPermisoDia.reset()
  
    }

    mostrar(data?: PermisoDia): void {
      if (data?.idEmpleado) {
        this.formPermisoDia.setValue({ ...data, 'idEmpleado': String(data.idEmpleado) })
      }
      this.visible = true
    }

    guardar(): void {
      this.formPermisoDia.setValue({ ...this.formPermisoDia.value })
      if (this.formPermisoDia.value.idEmpleado) {
        this.PermisoDiaService.updateById({ 'id': this.formPermisoDia.value.idEmpleado, 'body': this.formPermisoDia.value }).subscribe(
          () => {
            this.permisodia = this.permisodia.map(obj => {
              if (obj.idEmpleado === this.formPermisoDia.value.idEmpleado) {
                return this.formPermisoDia.value;
  
              }
              return obj;
            })
            this.messageService.success('Registro actualizado con exito')
            this.formPermisoDia.reset()
          }
        )
      } else {
        delete this.formPermisoDia.value.idEmpleado
        this.PermisoDiaService.create({ body: this.formPermisoDia.value }).subscribe((datoAgregado) => {
          this.permisodia = [...this.permisodia, datoAgregado]
          this.messageService.success('Registro creado con exito!!')
          this.formPermisoDia.reset()
  
        })
      }
      this.visible = false
  
    }
  



}
