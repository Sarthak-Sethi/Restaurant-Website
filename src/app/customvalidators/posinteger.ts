import { FormGroup, Validators } from "@angular/forms";

// Question ? why is this custom Validator not working
export function posinteger(  inputNo : string ){
    return ( 
        (formgroup : FormGroup) => {
            const no = formgroup.controls[inputNo];
            if(parseInt(no.value) <= 0) {
                no.setErrors({bePositive : true})
            }
            else {
                no.setErrors(null);
            }
        }
    );
}