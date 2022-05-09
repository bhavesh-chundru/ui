

let errors:any = {};
const Validation = (values:any ) => {
    
    if(values.pnr == undefined ||values.pnr.length <6){
        errors.pnr="PNR/ Booking reference is required"

}else{
    errors.pnr=''
    
}
 
    if(values.email == undefined || values.email.length==''){
        errors.email="Please enter email/ last name"
    }
    else{
        errors.email=''
    }
    
    if(values.origin == undefined  || values.origin.length==''){
        errors.origin="Please select a source"

}else{
    errors.origin=''
    
}
   
    if(values.destination == undefined || values.destination.length==''){
        errors.destination="Please enter destination"
    }
    else{
        errors.destination=''
    }



  return errors;
}
export default Validation



// export function pnrValidation(values: any) {


//     if (!values.pnr) {
//         errors.pnr= "Pnr is Required"
//     } else if (values.pnr.length <=6) {
//         errors.pnr ='Pnr should be 6 letters'
//     }else{
//         errors.pnr ="";
//     }
//     return errors;
// }





// export function emailValidation(values: any) {
//     if (!values.email) {
//         errors.email = "Email/Lastname is required"
//     }
//     else if (!/\S+@\S+\.\S+/.test(values.email)) {
//         errors.email = "Email is invalid"
//     }
//     return errors;
// }

