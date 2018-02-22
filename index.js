
function setThisWithCall(fn, thisValue, arg){
  return fn.call(thisValue, arg)
}

function setThisWithApply(fn, thisValue, args){
  return fn.apply(thisValue, [args])
}

function returnNewFunctionOf(functionToBeCopied, thisValue){
  newValue = functionToBeCopied.bind(thisValue)
  return newValue
}

function justInvoke(fn){
  return fn();
}