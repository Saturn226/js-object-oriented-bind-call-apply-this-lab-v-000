// function invokeFunction(){
  
// }

function setThisWithCall(fn, thisValue, arg){
fn().call(thisValue, arg)
}

// function setThisWithApply(){
  
// }

// function returnNewFunctionOf(){
  
//}

function justInvoke(fn){
  return fn();
}