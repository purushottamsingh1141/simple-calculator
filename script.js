let storeinfo=[];
let specialsymbol=['+','-','*','/','%'];
let specialsymbolWithDecimal=[...specialsymbol,'.'];
const getButtonClickedValue=(clickedValue)=>{
    if(specialsymbol.includes(clickedValue) && specialsymbolWithDecimal.includes(storeinfo[storeinfo.length-1])){
        storeinfo[storeinfo.length-1]= clickedValue; 
    }
    else{
        storeinfo.push(clickedValue);
    }
   document.getElementById('display').value=storeinfo.join('');
 }
const clearInfo=()=>{
    storeinfo=[];
    document.getElementById('display').value=storeinfo.join('');
    document.getElementById("output").innerText='';
}
const removeLastInfo=()=>{
  storeinfo.pop();
   document.getElementById("output").innerText='';
   document.getElementById('display').value=storeinfo.join('');
}
const getCalculatedValue=()=>{
  if(storeinfo.length>0){
    document.getElementById("output").innerText=eval(storeinfo.join(''));
  }

}
const displayChangedValue=()=>{
  storeinfo=document.getElementById('display').value.split('');
  document.getElementById("output").innerText='';
  }
