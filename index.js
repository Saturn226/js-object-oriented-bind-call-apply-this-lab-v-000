// function invokeFunction(){
  
// }

function setThisWithCall(fn, thisValue, arg){
  return fn.call(thisValue, arg)
}

function setThisWithApply(fn, thisValue, args){
  return fn.apply(thisValue, [args])
}

// function returnNewFunctionOf(){
  
//}

function justInvoke(fn){
  return fn();
}