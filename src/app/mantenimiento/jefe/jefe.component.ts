import { Component, OnInit } from '@angular/core';
import { Jefe } from 'src/app/api/models';
import { JefeControllerService } from 'src/app/api/services';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';





@Component({
  selector: 'app-jefe',
  templateUrl: './jefe.component.html',
  styleUrls: ['./jefe.component.css']
})

export class JefeComponent implements OnInit {

  jefe: Jefe[] = [];
  visible: boolean = false;

  formJefe: FormGroup = this.fb.group({
    departamento: [],
    departamentoId: [],
    idJefe: [],

  });


  constructor(
    private jefeService: JefeControllerService,
    private messageService: NzMessageService,
    private fb: FormBuilder,


  ) { }

  ngOnInit(): void {
    this.jefeService.find().subscribe(data => this.jefe = data)

  }

  eliminar(id: string): void {
    this.jefeService.deleteById({ id }).subscribe(() => {
      this.jefe = this.jefe.filter(x => x.idJefe !== id);
      this.messageService.success('Registro Eliminado')
    })
  }


  cancel(): void {
    this.messageService.info('Su registro sigue activo')


  }

  ocultar(): void {
    this.visible = false
    this.formJefe.reset()

  }

  mostrar(data?: Jefe): void {
    if (data?.idJefe) {
      this.formJefe.setValue({ ...data, 'idJefe': String(data.idJefe) })
    }
    this.visible = true
  }

  

  guardar(): void {
    this.formJefe.setValue({ ...this.formJefe.value })

    if (this.formJefe.value.idJefe) {
      this.jefeService.updateById({ 'id': this.formJefe.value.idJefe, 'body': this.formJefe.value }).subscribe(
        () => {
          this.jefe = this.jefe.map(obj => {
            if (obj.idJefe === this.formJefe.value.idJefe) {
              return this.formJefe.value;
            }
            return obj;
          })
          this.messageService.success('Registro actualizado con exito')
          this.formJefe.reset()
        }
      )
    } else {
      delete this.formJefe.value.idJefe
      this.jefeService.create({ body: this.formJefe.value }).subscribe((datoAgregado) => {
        this.jefe = [...this.jefe, datoAgregado]
        this.messageService.success('Registro creado con exito!!')
        this.formJefe.reset()
      })
    }

    this.visible = false

  }
}
