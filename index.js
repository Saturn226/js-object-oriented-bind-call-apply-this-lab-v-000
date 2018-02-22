// function invokeFunction(){
  
// }

function setThisWithCall(fn, thisValue, arg){
  return fn().call(thisValue, arg)
}

// function setThisWithApply(){
  
// }

// function returnNewFunctionOf(){
  
//}

function justInvoke(fn){
  return fn();
}