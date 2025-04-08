import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'lead-capture',
  standalone: true,
  imports: [ReactiveFormsModule, NgxMaskDirective],
  providers: [provideNgxMask()],
  templateUrl: './lead-capture.component.html',
  styleUrl: './lead-capture.component.scss',
})
export class LeadCaptureComponent {
  sources = ['Palestra', 'Indicação', 'Instagram', 'LinkedIn'];

  private fb = inject(FormBuilder);

  leadForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [
      '',
      [
        Validators.required,
        Validators.pattern(/^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/),
      ],
    ],
    source: ['', Validators.required],
  });

  onSubmit() {
    if (this.leadForm.invalid) return;

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        'form-name': 'lead',
        ...(this.leadForm.value as Record<string, string>),
      }).toString(),
    })
      .then(() =>
        alert('👏 Parabéns pela inscrição! Conte conosco nesta jornada!')
      )
      .catch(() => alert('Erro ao enviar. Tente novamente.'));

    this.leadForm.reset();
    // this.leadForm.disable();
    alert('👏 Parabéns pela inscrição! Conte conosco nesta jornada!');
  }
}
