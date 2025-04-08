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

    const form = document.createElement('form');
    form.method = 'POST';
    form.action = '/'; // mesma página
    form.setAttribute('data-netlify', 'true');
    form.style.display = 'none';

    const formName = document.createElement('input');
    formName.name = 'form-name';
    formName.value = 'lead';
    formName.type = 'hidden';
    form.appendChild(formName);

    Object.entries(this.leadForm.value).forEach(([key, value]) => {
      const input = document.createElement('input');
      input.name = key;
      input.value = value as string;
      input.type = 'hidden';
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();

    this.leadForm.reset();
    // this.leadForm.disable();
    alert('👏 Parabéns pela inscrição! Conte conosco nesta jornada!');
  }
}
