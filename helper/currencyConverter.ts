export function convertedCurrency(price:string,currencyCode:string){
    let formatter;
    if(price){
    // Create our number formatter.
     formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currencyCode,
        maximumFractionDigits:0
        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });
  
  return formatter.format(price); /* $2,500.00 */
    }else{
        return null;
    }
}