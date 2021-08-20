import { FormGroup } from "@angular/forms";

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