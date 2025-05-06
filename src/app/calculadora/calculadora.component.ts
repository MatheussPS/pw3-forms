import { Component } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
  standalone: true,
  selector: 'app-calculadora',
  imports: [ReactiveFormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})

export class CalculadoraComponent {
  calcluadoraForm: FormGroup;
  resultado = "Insira dois números para calcular";

  constructor(private fb: FormBuilder) {
    this.calcluadoraForm = this.fb.group({
      num1: this.fb.control(NaN),
      num2: this.fb.control(NaN)
    });
  }

  Calcular() {
    const num1 = this.calcluadoraForm.value.num1;
    const num2 = this.calcluadoraForm.value.num2;

    if (Number.isNaN(num1) || Number.isNaN(num2)) {
      this.resultado = "Insira os dois números!";
    } else {
      this.resultado = `Resultado: ${num1 + num2}`;
    }
  }
}
