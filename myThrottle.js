  
Function.prototype.myThrottle = function(intervals) {
let tooSoon = false; 
let that = this;
  function timeout(...args) {
    if(!tooSoon) {
      that(...args);
      tooSoon = true;
      setTimeout(() =>  {
        tooSoon = false;
      }, intervals); 
    }
  }
  return timeout;
};

class Neuron {
  fire() {
    console.log("Firing!");
  }
}

const neuron = new Neuron();
// When we create a new Neuron,
// we can call #fire as frequently as we want

// The following code will try to #fire the neuron every 10ms. Try it in the console:
const interval = setInterval(() => {
  neuron.fire();
}, 10);


// Using Function#myThrottle, we should be able to throttle
// the #fire function of our neuron so that it can only fire
// once every 500ms:

neuron.fire = neuron.fire.myThrottle(500);




