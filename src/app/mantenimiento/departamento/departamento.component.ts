import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/api/models';
import { DepartamentoControllerService } from 'src/app/api/services';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';



@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css']
})

export class DepartamentoComponent implements OnInit {

  departamento: Departamento[] = [];
  visible: boolean = false;
  formDepartamento: FormGroup= this.fb.group({
    nombreDepartamento: [],
    idJefe: [],
    descripcion: [],
  });

  constructor(
    private departamentoService: DepartamentoControllerService, 
    private messageService: NzMessageService,
    private fb: FormBuilder, 

   
  ) { }

  ngOnInit(): void {
    this.departamentoService.find().subscribe(data => this.departamento = data) 
    
  }

  eliminar(id: string): void {
    this.departamentoService.deleteById({ id }).subscribe(() => {
      this.departamento = this.departamento.filter(x => x.idJefe !== id);
      this.messageService.success('Registro Eliminado')
    })
  }




  cancel(): void {
    this.messageService.info('Su registro sigue activo')


  }

  ocultar(): void {
    this.visible = false
    this.formDepartamento.reset()

  }

  mostrar(data?: Departamento): void {
    if (data?.nombreDepartamento) {
      this.formDepartamento.setValue({ ...data, 'nombreDepartamento': String(data.nombreDepartamento) })
    }
    this.visible = true
  }

  guardar(): void {
    this.formDepartamento.setValue({...this.formDepartamento.value })

    if (this.formDepartamento.value.idJefe) {
      this.departamentoService.updateById({ 'id': this.formDepartamento.value.idJefe, 'body': this.formDepartamento.value }).subscribe(
        () => {
          this.departamento = this.departamento.map(obj => {
            if (obj.idJefe === this.formDepartamento.value.idJefe) {
              return this.formDepartamento.value;
            }
            return obj;
          })
          this.messageService.success('Registro actualizado con exito')
          this.formDepartamento.reset()
        }
      )
    } else {
      delete this.formDepartamento.value.idJefe
      this.departamentoService.create({ body: this.formDepartamento.value }).subscribe((datoAgregado) => {
        this.departamento = [...this.departamento, datoAgregado]
        this.messageService.success('Registro creado con exito!!')
        this.formDepartamento.reset()
      })
    }
  
    this.visible = false

  }
}
