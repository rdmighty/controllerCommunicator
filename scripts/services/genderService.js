app.service('genderService', function () {
	
	var _gs = this;
	
	var forEach = function(array, handler){
		if(Array.isArray(array)){
			for(var i = 0 ; i < array.length ; i ++){
				handler.call(this, array[i], i);
			}
		}
		else{
			handler.call(this, undefined, -1);
		}
	}
	
	var allHandlers = {};
	
	Object.defineProperty(_gs, 'addHandler', {
		value: function(key, handler){
			if(!allHandlers[key])
				allHandlers[key] = [];
			if(allHandlers[key].indexOf(handler) == -1)
				allHandlers[key].push(handler);
		}
	});
	
	Object.defineProperty(_gs, 'register', {
		handlers: [],
		value: function(prop, handler){
			this.addHandler(prop, handler);
			var setter = function(val){
				forEach(allHandlers[prop], function(handler){
					handler.call(this, val);
				});				
			}			
			if(!_gs.hasOwnProperty(prop)){
				Object.defineProperty(_gs, prop, {
					set: setter
				});
			}			
		}
	});
});
