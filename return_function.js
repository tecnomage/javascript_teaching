function init() {
  console.log("Initializing system");
}

function once(callback, context) {
  var ran = false;
  return function() {
      if (!ran) {
          //callback é init
          ran = true;
          callback.apply(context, arguments);
        }else{
        console.log("the system already initialized")
    }
  };
}

init = once(init);

// init(); == a  once(init)();
init();
init();