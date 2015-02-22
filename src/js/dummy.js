// All hooking code goes here.
// BEWARE: Since the function is serialized, the original scope, and all bound properties are lost!
var demo = function() {

    try {

      // Originals.




      // All the Hooking goes here.
      // We will be using ES6 Proxies in the future.
      // Properties are better handled this way.



      //CHROME BUG: __lookupSetter__/__lookupGetter__ don't return native setters and getters  https://code.google.com/p/chromium/issues/detail?id=13175
      /*
			Object.defineProperty( document.body, "innerHTML", {
				get: function(){ return temp_document_innerHTML; },
				set: function(x){ console.log("document.body.innerHTML called"); track.sinks.push(x); temp_document_body_innerHTML = x; }
			});
			*/

      // Functions are better hooked, with Object.defineProperty

      /* 	if(track.sources.length != 0){
				console.log("Sources :" + track.sources);
				console.log("Sinks :" +track.sinks);
				result = stristr(track.sources[0], track.sinks[0]);
				if(result){
					console.log("Possible DOM XSS");
				}
			} */

      // Comparing.	
      /*setTimeout(function(){
				console.log("Sources :" + track.sources);
				console.log("Sinks :" +track.sinks);
				console.log(track);
				
				localStorage.setItem('hookish_data', JSON.stringify(track));
				},2000);
		*/
    } catch (e) {
      console.log("ERROR:" + e);
    }


  } // End of Function - scriptToInject