let url="https://api.exchangeratesapi.io/latest?base=USD";
async function usdollarconverter(val){
    let restresponse=await fetch(url);
    let result=await restresponse.json();
    let temp=result;
    let yen_japan=temp.rates.JPY
    let indian_rupees=temp.rates.INR;
    let australian_dollar=temp.rates.AUD
    let malaysin_rupees=temp.rates.MYR
    document.getElementById("outputinr").innerHTML=Math.round(val*indian_rupees);
    document.getElementById("outputyen").innerHTML=Math.round(val*yen_japan);
    document.getElementById("outputaus").innerHTML=Math.round(val*australian_dollar);
    document.getElementById("outputmyr").innerHTML=Math.round(val*malaysin_rupees);
   }
   

   async function rupeesConverter (val){
    let restresponse=await fetch(url);
    let result=await restresponse.json();
    let temp=result;
    let indian_rupees=temp.rates.INR;
    let yen_japan=temp.rates.JPY
    let united=temp.rates.USD;
    let australian_dollar=temp.rates.AUD
    let malaysin_rupees=temp.rates.MYR
    document.getElementById("outputyen").innerHTML=Math.round(val*(yen_japan/indian_rupees));
    document.getElementById("outputaus").innerHTML=Math.round(val*(australian_dollar/indian_rupees));
    document.getElementById("outputmyr").innerHTML=Math.round(val*(malaysin_rupees/indian_rupees));
    document.getElementById("outputusd").innerHTML=Math.round(val*(united/indian_rupees));
   }
   async function yenConverter (val){
    let restresponse=await fetch(url);
    let result=await restresponse.json();
    let temp=result;
    let indian_rupees=temp.rates.INR;
    let yen_japan=temp.rates.JPY
    let united=temp.rates.USD;
    let australian_dollar=temp.rates.AUD
    let malaysin_rupees=temp.rates.MYR
    document.getElementById("outputinr").innerHTML=Math.round(val*(indian_rupees/yen_japan));
    document.getElementById("outputaus").innerHTML=Math.round(val*(australian_dollar/yen_japan));
    document.getElementById("outputmyr").innerHTML=Math.rouns(val*(malaysin_rupees/yen_japan));
    document.getElementById("outputusd").innerHTML=Math.round(val*(united/yen_japan));
   }
   async function ausdollarConverter (val){
    let restresponse=await fetch(url);
    let result=await restresponse.json();
    let temp=result;
    let indian_rupees=temp.rates.INR;
    let yen_japan=temp.rates.JPY
    let united=temp.rates.USD;
    let australian_dollar=temp.rates.AUD
    let malaysin_rupees=temp.rates.MYR
    document.getElementById("outputinr").innerHTML=Math.round(val*(indian_rupees/australian_dollar))
    document.getElementById("outputyen").innerHTML=Math.round(val*(yen_japan/australian_dollar));
    document.getElementById("outputmyr").innerHTML=Math.round(val*(malaysin_rupees/australian_dollar))
    document.getElementById("outputusd").innerHTML=Math.rouns(val*(australian_dollar/united))
   }
   async function malaysianConverter (val){
    let restresponse=await fetch(url);
    let result=await restresponse.json();
    let temp=result;
    let indian_rupees=temp.rates.INR;
    let yen_japan=temp.rates.JPY
    let united=temp.rates.USD;
    let australian_dollar=temp.rates.AUD
    let malaysin_rupees=temp.rates.MYR
    document.getElementById("outputinr").innerHTML=Math.round(val*(indian_rupees/malaysin_rupees));
    document.getElementById("outputyen").innerHTML=Math.round(val*(yen_japan/malaysin_rupees))
    document.getElementById("outputaus").innerHTML=val*(australian_dollar/malaysin_rupees)
    document.getElementById("outputusd").innerHTML=val*(australian_dollar/malaysin_rupees);
   }
