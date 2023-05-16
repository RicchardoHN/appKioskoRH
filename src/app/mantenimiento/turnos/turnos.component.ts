import { Component, OnInit } from '@angular/core';
import { Turnos, Empleado } from 'src/app/api/models';
import { TurnosControllerService, EmpleadoControllerService } from 'src/app/api/services';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-turnos',
  templateUrl: './turnos.component.html',
  styleUrls: ['./turnos.component.css']
})
export class TurnosComponent implements OnInit{

  empleado: Empleado[] = [];
  turnos: Turnos[] = []
  visible: boolean = false;

  constructor(
    private turnosService: TurnosControllerService,
    private empleadoService: EmpleadoControllerService,
    private messageService: NzMessageService,
    private fb: FormBuilder
  ) { }

  formTurnos: FormGroup = this.fb.group({
  idEmpleado: [],
  idTurno:[],
  matutino: [],
  mixto: [],
  nocturno:[],
  vespertino: [],
  })

  ngOnInit(): void {
    this.turnosService.find().subscribe(data => this.turnos = data)
    this.empleadoService.find().subscribe(data => this.empleado = data)
  }

  eliminar(id: string): void {
    this.turnosService.deleteById({ id }).subscribe(() => {
      this.turnos = this.turnos.filter(x => x.idTurno !== id);
      this.messageService.success('Registro Eliminado')
    })
  }

  cancel(): void {
    this.messageService.info('Su registro sigue activo!')
  }

  ocultar(): void {
    this.visible = false
    this.formTurnos.reset()
  }

  mostrar(data?: Turnos): void {
    if (data?.idTurno) {
      this.formTurnos.setValue({ ...data, 'idTurno': String(data.idTurno) })
    }
    this.visible = true
  }

  guardar(): void {
    this.formTurnos.setValue({ ...this.formTurnos.value })
    if (this.formTurnos.value.idEmpleado) {
      this.turnosService.updateById({ 'id': this.formTurnos.value.idEmpleado, 'body': this.formTurnos.value }).subscribe(
        () => {
          this.turnos = this.turnos.map(obj => {
            if (obj.idEmpleado === this.formTurnos.value.idEmpleado) {
              return this.formTurnos.value;

            }
            return obj;
          })
          this.messageService.success('Registro actualizado con exito')
          this.formTurnos.reset()
        }
      )
    } else {
      delete this.formTurnos.value.idEmpleado
      this.turnosService.create({ body: this.formTurnos.value }).subscribe((datoAgregado) => {
        this.turnos = [...this.turnos, datoAgregado]
        this.messageService.success('Registro creado con exito!!')
        this.formTurnos.reset()

      })
    }
    this.visible = false

  }


}
