import { AbstractControl, ValidatorFn } from '@angular/forms';

// export function passwordValidator(control: AbstractControl) {
//   const password: string = control.value; // get password from our password form control
//   const confirmPassword: string = control.get('repassword').value; // get password from our confirmPassword form control
//   let passwordCheck: boolean = false
//   // compare is the password math
//   if (password !== confirmPassword) {
//     passwordCheck = true;
//   }
//     // if they don't match, set an error in our confirmPassword form control
//     return password ? {passwordCheck: {value:control.value}} : null
//   }

