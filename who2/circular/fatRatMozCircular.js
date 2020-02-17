(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.mcCircle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FF33").ss(2,1,1).p("ANXAAQAAFij7D6Qj6D7liAAQlhAAj7j7Qj6j6AAliQAAlhD6j7QD7j6FhAAQFiAAD6D6QD7D7AAFhg");
	this.shape.setTransform(85.5,85.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcCircle, new cjs.Rectangle(-1,-1,173,173), null);


(lib.mc_label = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.mcCircle();
	this.instance.parent = this;
	this.instance.setTransform(85.5,85.5,1,1,0,0,0,85.5,85.5);
	this.instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4682FF").s().p("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");
	this.shape.setTransform(84.675,85.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4682FF").s().p("AFEBcQgOgJgFgQIAcgHQAIASAUgBQAcABAAghIAAgLQgHAUgdAAQgWAAgOgPQgOgPAAgYQAAgaAOgQQANgOAXAAQAdAAAHAVIAAgTIAfAAIAABdQAAAggPAPQgOAPgeAAQgWAAgPgJgAFVgZQgJAJAAAQQAAAOAJAJQAHAIANAAQANAAAJgIQAHgJAAgOQAAgQgHgJQgJgIgNAAQgNAAgHAIgAjLAvQgOgRAAgcQAAgaAOgRQAOgPAWAAQANAAAJAFQAKAGAEALIAAgUIAfAAIAABxIgfAAIAAgTQgEALgKAGQgJAFgNAAQgWAAgOgPgAizgWQgJAJAAAPQAAAQAJAKQAHAIANABQANgBAJgIQAHgKABgQQgBgPgHgJQgJgJgNAAQgNAAgHAJgAD8A7IAAg7QAAgfgZAAQgZABABAfIAAA6IgfAAIAAhxIAfAAIAAATQAIgVAbAAQAsAAAAA1IAAA+gAB0A7IAAhxIAeAAIAABxgAA+A7IAAg7QgBgfgYAAQgZABAAAfIAAA6IgdAAIAAhxIAdAAIAAATQAJgVAaAAQAtAAAAA1IAAA+gAhJA7IAAhxIAdAAIAABxgAkpA7IAAhxIAdAAIAAASQAEgKAJgFQAKgGARABIgEAeQgjgHgBAmIAAA2gAmAA7IAAhzIgjAAIAAgdIBmAAIAAAdIgjAAIAABzgAB2hIQgEgFAAgHQAAgIAEgEQAFgDAIAAQAIAAAEADQAGAEAAAIQAAAHgGAFQgEAEgIAAQgHAAgGgEgAhHhIQgFgFAAgHQAAgIAFgEQAFgDAHAAQAIAAAFADQAFAEAAAIQAAAHgFAFQgFAEgIAAQgHAAgFgEg");
	this.shape_1.setTransform(85.1,84.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4682FF").s().p("AA7DAQgQgQAAgbQAAgaAQgRQAQgQAaAAQAcAAAQASQAPASgCAeIhVAAQAAAOAIAIQAIAHAOAAQATAAAHgOIAcAEQgNAhgqAAQgbAAgQgQgACCCIQgBgLgIgHQgHgHgMAAQgMAAgHAGQgIAHgBAMIA4AAIAAAAgAkBDAQgQgQAAgbQAAgaAQgRQARgQAaAAQAcAAAPASQAQASgDAeIhVAAQABAOAIAIQAIAHANAAQAUAAAGgOIAcAEQgMAhgqAAQgbAAgRgQgAi6CIQgBgLgHgHQgHgHgNAAQgLAAgIAGQgIAHgBAMIA4AAIAAAAgAEfDOIgXhKIgXBKIgeAAIgshyIAhAAIAbBPIAZhPIAYAAIAZBPIAbhPIAhAAIgsBygAgJDOIAAhyIAdAAIAABygAhlDOIgvhyIAhAAIAeBQIAehQIAiAAIgxBygAlhDOIAAhyIAeAAIAAARQAEgJAJgFQAKgGAQABIgDAdQgkgGAAAnIAAA2gAgGBJQgFgEAAgHQAAgIAFgEQAEgEAHAAQAIAAAEAEQAGAEAAAIQAAAHgGAEQgEAEgIAAQgGAAgFgEgAC1g/QgPgQAAgcQAAgcAPgQQAOgPAWAAQAMAAAKAFQAKAGAEAKIAAgTIAfAAIAAByIgfAAIAAgTQgEAKgKAGQgKAGgMAAQgWAAgOgQgADNiEQgJAJAAAQQAAAQAJAJQAHAJANAAQANAAAIgJQAIgJAAgQQAAgQgIgJQgIgJgNAAQgNAAgHAJgAjtg9QgSgRAAgdQAAgdASgQQAQgOAZAAQAYAAAQAOQATAQAAAdQAAAdgSARQgRAOgYAAQgZAAgQgOgAjZiEQgIAJAAAQQAAAQAIAJQAIAJANAAQANAAAIgJQAIgJAAgQQAAgQgJgJQgHgJgNAAQgNAAgIAJgAJKhAQgQgQAAgbQAAgaAQgRQAQgQAaAAQAcAAAQASQAPASgCAeIhVAAQAAAOAIAIQAIAHAOAAQATAAAHgOIAcAEQgNAhgqAAQgbAAgQgQgAKRh4QgBgLgIgHQgHgHgMAAQgMAAgHAGQgIAHgBAMIA4AAIAAAAgAHIhAQgQgRAAgaQAAgaAQgRQARgQAZAAQAuAAAJApIgbAEQgHgUgUAAQgNAAgIAJQgIAKAAAPQAAAPAIAKQAIAJANAAQAVAAAGgUIAaAEQgDAUgPALQgOAKgWAAQgZAAgRgQgAodhAQgQgQAAgbQAAgaAQgRQARgQAaAAQAcAAAPASQAQASgDAeIhVAAQABAOAIAIQAIAHANAAQAUAAAGgOIAcAEQgMAhgqAAQgbAAgRgQgAnWh4QgBgLgHgHQgHgHgNAAQgLAAgIAGQgIAHgBAMIA4AAIAAAAgAGGgyIAAg8QAAgfgZAAQgZAAAAAhIAAA6IgeAAIAAhyIAeAAIAAASQAJgUAbAAQAsAAAAA1IAAA/gAB0gyIAAg5QAAgTgFgHQgFgIgMAAQgMAAgFAIQgFAHAAASIAAA6IgfAAIAAg5QAAgTgEgHQgFgIgMAAQgMAAgFAJQgEAIAAASIAAA4IgeAAIAAhyIAeAAIAAATQACgKAJgGQAJgFAMAAQAOAAAIAFQAIAGAFANQAEgLAKgGQAKgHAQAAQAVAAAKANQAJANAAAeIAAA8gAhzgyIAAhyIAeAAIAAARQADgJAJgFQALgGAQABIgDAdQgkgGAAAnIAAA2gAlJgyIAAhbIgPAAIAAgXIAPAAIAAgEQAAgnAsAAQAOAAAJACIgEAVIgMgBQgUAAAAARIAAAEIAeAAIAAAXIgeAAIAABbgAmjgyIAAhyIAeAAIAAARQADgJAJgFQALgGAQABIgDAdQgkgGAAAnIAAA2gAqsgyIAAiRIApAAQAmAAAQANQAQAMAAAdQAAAcgQANQgQAMglAAIgLAAIAAAmgAqNh0IAQAAQARAAAHgGQAIgGAAgOQAAgNgIgGQgHgGgRAAIgQAAg");
	this.shape_2.setTransform(84.7674,85.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4682FF").s().p("AkRDjIAAiYIAeAAIAAATQAEgJAKgFQAJgHAOAAQAVABAOAOQAQAQAAAdQAAAcgQARQgOAOgWAAQgNAAgJgGQgKgGgEgJIAAA4gAjrBsQgJAIAAARQAAAPAJAKQAHAJANAAQANAAAIgJQAIgKAAgPQAAgRgIgIQgIgKgNAAQgNAAgHAKgAhCCxQgPgRAAgbQAAgcAPgQQAOgPAWgBQAMABAJAFQAKAGAEAKIAAgUIAeAAIAABzIgeAAIAAgTQgEAKgKAGQgJAGgMgBQgWAAgOgPgAgrBsQgIAJAAAQQAAAQAIAJQAIAJANAAQANAAAIgJQAHgKAAgPQAAgQgHgJQgIgKgNABQgNgBgIAKgADOC3QgOgIgEgOIAbgFQAHAPAUAAQAWAAAAgNQAAgIgMgDIgZgFQgQgEgIgGQgLgIAAgQQABgQANgJQAOgKAVAAQATAAANAIQAOAJAFAMIgbAFQgGgMgRAAQgUAAAAAMQAAAHALADIAZAGQARACAIAHQAMAIAAAPQgBARgOAKQgOAKgYAAQgVAAgPgJgACOC+IAAg8QgBgfgYAAQgZAAAAAhIAAA6IgeAAIAAhzIAeAAIAAATQAJgVAaAAQAtABAAA1IAAA/gAiGC+IAAiYIAfAAIAACYgABrhOQgSgQAAgdQAAgdASgRQAQgNAZAAQAZAAAPANQATARAAAdQAAAdgSAQQgRAOgYABQgZgBgQgOgAB/iVQgIAKAAAQQAAAQAIAJQAIAJANAAQANAAAIgJQAIgJAAgQQAAgQgIgKQgIgIgNgBQgNABgIAIgAgghLQgMgLAAgaIAAguIgQAAIAAgWIAQAAIAAgVIAfgGIAAAbIAeAAIAAAWIgeAAIAAArQAAAPAFAGQAFAGAKAAIAJgBIAEAXQgIACgLAAQgWAAgLgLgAiohQQgPgRAAgaQAAgaAPgRQARgQAZAAQAuAAAJApIgbAEQgGgUgVgBQgNAAgHAKQgJAKABAPQgBAPAJAKQAHAJANAAQAVAAAGgUIAaADQgDAVgPALQgOAKgWAAQgZAAgRgQgAE0hCIAAg8QAAgfgYAAQgZAAAAAhIAAA6IgeAAIAAhyIAeAAIAAASQAJgUAbAAQAsAAAAA1IAAA/gAAkhCIAAhyIAfAAIAABygAjhhCIgJgZIg+AAIgJAZIghAAIA6iRIAfAAIA6CRgAjyhzIgWg+IgXA+IAtAAgAAnjHQgFgEAAgIQAAgHAFgEQAEgEAJAAQAHAAAEAEQAGAEAAAHQAAAIgGAEQgEAEgHAAQgIAAgFgEg");
	this.shape_3.setTransform(83.85,86.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4682FF").s().p("AlXBiIAAiWIAeAAIAAATQAEgKAKgFQAKgGANAAQAVAAAOAOQAQAQgBAcQABAdgQAQQgOAPgWAAQgMAAgKgHQgKgGgEgJIAAA4gAkygUQgIAJAAAPQAAAQAIAKQAIAIANABQANgBAIgIQAIgKAAgQQAAgPgIgJQgIgKgNAAQgNAAgIAKgAGAAyQgTgRABgdQgBgbATgRQAQgOAYAAQAZAAAQAOQATARAAAbQgBAdgRARQgRAOgZAAQgYAAgQgOgAGUgUQgJAJAAAPQAAAQAJAKQAIAIAMABQANgBAJgIQAHgKABgQQAAgPgJgJQgHgJgOAAQgMAAgIAJgAnfALIAAg/IAdAAIAAA7QAAARAHAHQAFAHAOAAQAYAAAAghIAAg5IAeAAIAABxIgeAAIAAgSQgEAKgJAFQgJAGgNAAQgtAAABg1gADOA3QgOgJgEgOIAbgEQAHAOAUAAQAWAAAAgMQAAgIgMgDIgZgGQgQgDgIgHQgLgHAAgQQABgPANgKQAOgJAVAAQATAAANAIQAOAIAFANIgbAEQgGgMgRABQgUgBAAAMQAAAIALADIAZAFQARADAIAFQAMAIAAAPQgBASgOAJQgOALgYAAQgVAAgPgJgAi/AwQgQgRgBgbQABgZAQgRQAQgQAaAAQAcAAAPASQAQASgCAeIhWAAQABANAIAIQAIAHAOAAQATAAAHgOIAcAEQgNAigqAAQgbAAgQgQgAh4gHQgBgMgIgHQgHgGgMAAQgMAAgIAFQgHAIgCAMIA5AAIAAAAgApSA1QgQgLgEgTIAdgEQAIATAYABQALgBAHgEQAHgFgBgIQAAgJgMgGIgcgHQgTgEgJgIQgNgKAAgTQAAgTAPgMQAPgMAXAAQAYAAAPAKQAPALAFASIgeAFQgHgSgVAAQgKAAgHAEQgFAFAAAIQAAAJAMAFIAcAIQAUAFAIAIQANAIAAATQAAAUgQALQgPANgZAAQgZAAgQgLgAJJA9IAAg7QAAgfgZAAQgYABAAAfIAAA6IgfAAIAAhxIAfAAIAAATQAIgVAbAAQAsAAABA1IAAA+gAE5A9IAAhxIAeAAIAABxgACMA9IAAhxIAeAAIAABxgAAvA9IgvhxIAhAAIAeBQIAfhQIAhAAIgwBxgAhGA9IAAhxIAeAAIAAASQADgKAJgFQALgGAQABIgDAeQgkgHAAAmIAAA2gAE7hGQgEgFAAgHQAAgIAEgEQAFgDAIAAQAIAAAEADQAGAEAAAIQAAAHgGAFQgEAEgIAAQgHAAgGgEgACOhGQgFgFAAgHQAAgIAFgEQAFgDAHAAQAIAAAFADQAFAEAAAIQAAAHgFAFQgFAEgIAAQgHAAgFgEg");
	this.shape_4.setTransform(85.2,84.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4682FF").s().p("AkTDjIAAiYIAeAAIAAATQAEgJAKgFQAJgHAOAAQAVABAOAOQAQAQAAAdQAAAcgQARQgOAOgWAAQgNAAgJgGQgKgGgEgJIAAA4gAjtBsQgJAIAAARQAAAPAJAKQAHAJANAAQANAAAIgJQAIgKAAgPQAAgRgIgIQgIgKgNAAQgNAAgHAKgAhECxQgPgRAAgbQAAgcAPgQQAOgPAWgBQAMABAJAFQALAGADAKIAAgUIAeAAIAABzIgeAAIAAgTQgDAKgLAGQgJAGgMgBQgWAAgOgPgAgtBsQgIAJAAAQQAAAQAIAJQAIAJANAAQANAAAIgJQAHgKAAgPQAAgQgHgJQgIgKgNABQgNgBgIAKgADMC3QgOgIgEgOIAbgFQAHAPAUAAQAWAAAAgNQAAgIgMgDIgZgFQgQgEgIgGQgLgIAAgQQABgQANgJQAOgKAVAAQATAAANAIQAOAJAFAMIgbAFQgGgMgRAAQgUAAAAAMQAAAHALADIAZAGQARACAIAHQAMAIAAAPQgBARgOAKQgOAKgYAAQgVAAgPgJgACMC+IAAg8QgBgfgYAAQgZAAAAAhIAAA6IgeAAIAAhzIAeAAIAAATQAJgVAaAAQAtABAAA1IAAA/gAiIC+IAAiYIAfAAIAACYgAEwgiQgOgIgGgRIAdgGQAHARAUAAQAdAAAAggIAAgLQgIATgdABQgVAAgPgPQgOgPAAgaQAAgaAOgPQAOgOAWAAQAdAAAIAUIAAgSIAfAAIAABeQgBAfgPAPQgOAPgeAAQgVAAgPgJgAFAiYQgIAKAAAPQAAAQAIAIQAIAJANAAQANAAAIgJQAIgIAAgQQAAgPgIgKQgIgIgNAAQgNAAgIAIgAh1hPQgOgRAAgbQAAgcAOgRQAOgOAWAAQANgBAJAGQAKAGAEAKIAAgTIAfAAIAAByIgfAAIAAgTQgDAKgLAGQgJAFgNABQgWAAgOgQgAhdiVQgIAKgBAQQABAQAIAJQAHAJANAAQANAAAJgJQAHgJAAgQQAAgQgHgKQgJgIgNgBQgNABgHAIgAl6hKQgQgMgFgTIAegEQAIAUAYAAQALAAAHgFQAHgEAAgJQgBgJgNgFIgbgIQgTgFgJgIQgMgKAAgSQAAgUAOgMQAPgLAXAAQAYAAAPAKQAPAKAFATIgdAEQgHgSgWAAQgLABgFAEQgHAEABAIQgBAKANAFIAcAHQATAGAKAHQAMAKAAATQAAATgQAMQgOAMgaAAQgYAAgRgKgADnhCIAAg8QABgfgZAAQgZAAAAAhIAAA6IgeAAIAAhyIAeAAIAAASQAJgUAbAAQAsAAAAA1IAAA/gABfhCIAAhyIAeAAIAABygAAMhCIAAhyIAdAAIAAARQAEgJAJgGQALgFAPABIgDAdQgkgGAAAnIAAA2gAi2hCIAAg8QAAgQgGgIQgGgHgNAAQgZAAABAhIAAA6IgfAAIAAiXIAfAAIAAA3QAEgJAIgGQAKgFANAAQAWAAALAMQAMANgBAcIAAA/gABijHQgFgEAAgIQAAgHAFgEQAEgEAJAAQAHAAAEAEQAGAEAAAHQAAAIgGAEQgEAEgHAAQgIAAgFgEg");
	this.shape_5.setTransform(84.05,86.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,173,173);


(lib.mc_LabelRotate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.mcLabel = new lib.mc_label();
	this.mcLabel.name = "mcLabel";
	this.mcLabel.parent = this;
	this.mcLabel.setTransform(85.5,85.5,1,1,0,0,0,85.5,85.5);

	this.timeline.addTween(cjs.Tween.get(this.mcLabel).wait(1).to({rotation:-2.4161,y:85.45},0).wait(1).to({rotation:-4.8322,x:85.55,y:85.5},0).wait(1).to({rotation:-7.2483,x:85.5,y:85.45},0).wait(1).to({rotation:-9.6644,x:85.55,y:85.5},0).wait(1).to({rotation:-12.0805,x:85.5,y:85.45},0).wait(1).to({rotation:-14.4966,x:85.55,y:85.5},0).wait(1).to({rotation:-16.9128,x:85.5},0).wait(1).to({rotation:-19.3289,x:85.55},0).wait(1).to({rotation:-21.745,y:85.45},0).wait(1).to({rotation:-24.1611,x:85.5},0).wait(1).to({rotation:-26.5772},0).wait(1).to({rotation:-28.9933,x:85.55,y:85.5},0).wait(1).to({rotation:-31.4094,x:85.5,y:85.45},0).wait(1).to({rotation:-33.8255,x:85.55,y:85.5},0).wait(1).to({rotation:-36.2416,x:85.5,y:85.45},0).wait(1).to({rotation:-38.6577},0).wait(1).to({rotation:-41.0738,x:85.55},0).wait(1).to({rotation:-43.4899,y:85.5},0).wait(1).to({rotation:-45.906,x:85.5},0).wait(1).to({rotation:-48.3221},0).wait(1).to({rotation:-50.7383,y:85.45},0).wait(1).to({rotation:-53.1544,y:85.5},0).wait(1).to({rotation:-55.5705},0).wait(1).to({rotation:-57.9866,y:85.45},0).wait(1).to({rotation:-60.4027,x:85.55,y:85.5},0).wait(1).to({rotation:-62.8188,x:85.5},0).wait(1).to({rotation:-65.2349,y:85.45},0).wait(1).to({rotation:-67.651,x:85.55},0).wait(1).to({rotation:-70.0671},0).wait(1).to({rotation:-72.4832,y:85.5},0).wait(1).to({rotation:-74.8993,x:85.5,y:85.45},0).wait(1).to({rotation:-77.3154},0).wait(1).to({rotation:-79.7315,x:85.55},0).wait(1).to({rotation:-82.1477,y:85.5},0).wait(1).to({rotation:-84.5638,x:85.5},0).wait(1).to({rotation:-86.9799,x:85.55,y:85.45},0).wait(1).to({rotation:-89.396},0).wait(1).to({rotation:-91.8121,x:85.45,y:85.5},0).wait(1).to({rotation:-94.2282},0).wait(1).to({rotation:-96.6443},0).wait(1).to({rotation:-99.0604,x:85.5,y:85.45},0).wait(1).to({rotation:-101.4765,y:85.5},0).wait(1).to({rotation:-103.8926,x:85.45,y:85.45},0).wait(1).to({rotation:-106.3087,y:85.5},0).wait(1).to({rotation:-108.7248},0).wait(1).to({rotation:-111.1409,y:85.45},0).wait(1).to({rotation:-113.557,y:85.5},0).wait(1).to({rotation:-115.9732},0).wait(1).to({rotation:-118.3893},0).wait(1).to({rotation:-120.8054,y:85.45},0).wait(1).to({rotation:-123.2215,y:85.5},0).wait(1).to({rotation:-125.6376,x:85.5},0).wait(1).to({rotation:-128.0537,y:85.45},0).wait(1).to({rotation:-130.4698,x:85.45},0).wait(1).to({rotation:-132.8859},0).wait(1).to({rotation:-135.302,x:85.5,y:85.5},0).wait(1).to({rotation:-137.7181,x:85.45},0).wait(1).to({rotation:-140.1342,y:85.45},0).wait(1).to({rotation:-142.5503},0).wait(1).to({rotation:-144.9664,x:85.5},0).wait(1).to({rotation:-147.3826,y:85.5},0).wait(1).to({rotation:-149.7987,x:85.45},0).wait(1).to({rotation:-152.2148,y:85.45},0).wait(1).to({rotation:-154.6309,x:85.5},0).wait(1).to({rotation:-157.047,x:85.45},0).wait(1).to({rotation:-159.4631,x:85.5,y:85.5},0).wait(1).to({rotation:-161.8792},0).wait(1).to({rotation:-164.2953},0).wait(1).to({rotation:-166.7114},0).wait(1).to({rotation:-169.1275,y:85.45},0).wait(1).to({rotation:-171.5436,x:85.45,y:85.5},0).wait(1).to({rotation:-173.9597,y:85.45},0).wait(1).to({rotation:-176.3758},0).wait(1).to({rotation:-178.7919},0).wait(1).to({rotation:-181.2081},0).wait(1).to({rotation:-183.6242},0).wait(1).to({rotation:-186.0403},0).wait(1).to({rotation:-188.4564,x:85.5},0).wait(1).to({rotation:-190.8725,x:85.45,y:85.5},0).wait(1).to({rotation:-193.2886,x:85.5},0).wait(1).to({rotation:-195.7047},0).wait(1).to({rotation:-198.1208},0).wait(1).to({rotation:-200.5369},0).wait(1).to({rotation:-202.953,x:85.45,y:85.45},0).wait(1).to({rotation:-205.3691,y:85.5},0).wait(1).to({rotation:-207.7852,y:85.45},0).wait(1).to({rotation:-210.2013,x:85.5},0).wait(1).to({rotation:-212.6174,y:85.5},0).wait(1).to({rotation:-215.0336,x:85.45},0).wait(1).to({rotation:-217.4497,y:85.45},0).wait(1).to({rotation:-219.8658},0).wait(1).to({rotation:-222.2819,x:85.5},0).wait(1).to({rotation:-224.698,y:85.5},0).wait(1).to({rotation:-227.1141,x:85.45,y:85.45},0).wait(1).to({rotation:-229.5302},0).wait(1).to({rotation:-231.9463,y:85.5},0).wait(1).to({rotation:-234.3624,x:85.5},0).wait(1).to({rotation:-236.7785,y:85.45},0).wait(1).to({rotation:-239.1946,x:85.45},0).wait(1).to({rotation:-241.6107,x:85.5},0).wait(1).to({rotation:-244.0268},0).wait(1).to({rotation:-246.443},0).wait(1).to({rotation:-248.8591,x:85.45},0).wait(1).to({rotation:-251.2752,x:85.5},0).wait(1).to({rotation:-253.6913},0).wait(1).to({rotation:-256.1074,x:85.45},0).wait(1).to({rotation:-258.5235,x:85.5,y:85.5},0).wait(1).to({rotation:-260.9396,x:85.45},0).wait(1).to({rotation:-263.3557,x:85.5,y:85.45},0).wait(1).to({rotation:-265.7718},0).wait(1).to({rotation:-268.1879},0).wait(1).to({rotation:-270.604,x:85.45,y:85.55},0).wait(1).to({rotation:-273.0201},0).wait(1).to({rotation:-275.4362,x:85.5,y:85.5},0).wait(1).to({rotation:-277.8523,y:85.55},0).wait(1).to({rotation:-280.2685,x:85.45},0).wait(1).to({rotation:-282.6846,y:85.5},0).wait(1).to({rotation:-285.1007},0).wait(1).to({rotation:-287.5168,x:85.5,y:85.55},0).wait(1).to({rotation:-289.9329,x:85.45},0).wait(1).to({rotation:-292.349},0).wait(1).to({rotation:-294.7651,y:85.5},0).wait(1).to({rotation:-297.1812,x:85.5},0).wait(1).to({rotation:-299.5973,y:85.55},0).wait(1).to({rotation:-302.0134,x:85.45,y:85.5},0).wait(1).to({rotation:-304.4295,x:85.5},0).wait(1).to({rotation:-306.8456},0).wait(1).to({rotation:-309.2617,x:85.45},0).wait(1).to({rotation:-311.6779,x:85.5},0).wait(1).to({rotation:-314.094},0).wait(1).to({rotation:-316.5101,y:85.55},0).wait(1).to({rotation:-318.9262,x:85.45},0).wait(1).to({rotation:-321.3423,y:85.5},0).wait(1).to({rotation:-323.7584},0).wait(1).to({rotation:-326.1745,x:85.5,y:85.55},0).wait(1).to({rotation:-328.5906,x:85.45,y:85.5},0).wait(1).to({rotation:-331.0067,x:85.5,y:85.55},0).wait(1).to({rotation:-333.4228,x:85.45,y:85.5},0).wait(1).to({rotation:-335.8389},0).wait(1).to({rotation:-338.255,y:85.55},0).wait(1).to({rotation:-340.6711,x:85.5},0).wait(1).to({rotation:-343.0872,y:85.5},0).wait(1).to({rotation:-345.5034,y:85.55},0).wait(1).to({rotation:-347.9195,x:85.45,y:85.5},0).wait(1).to({rotation:-350.3356,x:85.5,y:85.55},0).wait(1).to({rotation:-352.7517,x:85.45,y:85.5},0).wait(1).to({rotation:-355.1678,x:85.5,y:85.55},0).wait(1).to({rotation:-357.5839,x:85.45,y:85.5},0).wait(1).to({rotation:-360,x:85.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,-1.2,173.5,173.6);


(lib.mc_MainGra = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F5A22D").ss(2,1,1).p("AgmBDIgPhXQgDgKAGgJQAGgJALgCIBYgQ");
	this.shape.setTransform(189.35,360.95,1.3,1.3,0,0,0,-0.2,-1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F5A22D").ss(2,1,1).p("AA2g7IADBZQABAKgHAJQgHAHgMAAIhZAE");
	this.shape_1.setTransform(326.55,138.55,1.3,1.3,4.6954,0,0,0.5,1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#F5A22D").ss(2,1,1).p("AhBgpIBYgNQAKgCAJAGQAHAGACALIAPBZ");
	this.shape_2.setTransform(169.8733,139.8435,1.3,1.3,-4.9958);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#F5A22D").ss(2,1,1).p("ABCAqIhYANQgKACgJgGQgIgGgCgLIgOhZ");
	this.shape_3.setTransform(317.1,360.75,1.3,1.3,0,0,0,-1.3,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#F5A22D").ss(2,1,1).p("AhRAlIA+hAQAGgIALgBQAJAAAIAHIBDA8");
	this.shape_4.setTransform(118.0311,249.1745,1.3,1.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#F5A22D").ss(2,1,1).p("ABSgkIg+BAQgGAIgLABQgJAAgIgHIhDg8");
	this.shape_5.setTransform(381.3029,252.9644,1.3,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(1));

	// Layer_2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#F5A22D").ss(2,1,1).p("EgoIgUpQIKv/RGl/QRGl+QVHcEAUpgoIQQAIKF+RGQF+RGnbQWEgVIAn6QrOl5mNqXQiakDhqkvQl+xFHcwWEAoJAUqQoLP/xGF+QkuBqkrAoQr9BnrmlH");
	this.shape_6.setTransform(253.5942,253.5534,1,1,26.4509);
	this.shape_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1).to({_off:false},0).wait(1));

	// Layer_5
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#00FF33").ss(2,1,1).p("EgnDgnDMAmEAAAIB/AAMAmEAAAMAAAAmEIAAB/MAAAAmEMglmgABIi7AAMglmAABMAAAgmEIAAh/g");
	this.shape_7.setTransform(250,250);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#F5A22D").ss(2,1,1).p("EABAgnDQPjAXLFLFQLFLGAXPiEgnDgA/QAXviLFrGQLGrFPigXEgBdAnEQq+gYoulwQjaiQjEjEQrFrFgXviEAnEABBQgXPirFLFQjEDEjZCQQovFwq+AY");
	this.shape_8.setTransform(250,249.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).wait(1));

	// Layer_1
	this.mcLabelRotate_3 = new lib.mc_LabelRotate();
	this.mcLabelRotate_3.name = "mcLabelRotate_3";
	this.mcLabelRotate_3.parent = this;
	this.mcLabelRotate_3.setTransform(383.5,328.55,0.9,0.9,0,0,0,85.5,85.5);

	this.mcLabelRotate_6 = new lib.mc_LabelRotate();
	this.mcLabelRotate_6.name = "mcLabelRotate_6";
	this.mcLabelRotate_6.parent = this;
	this.mcLabelRotate_6.setTransform(123.65,178.55,0.9,0.9,0,0,0,85.5,85.5);

	this.mcLabelRotate_5 = new lib.mc_LabelRotate();
	this.mcLabelRotate_5.name = "mcLabelRotate_5";
	this.mcLabelRotate_5.parent = this;
	this.mcLabelRotate_5.setTransform(123.7,328.6,0.9,0.9,0,0,0,85.6,85.5);

	this.mcLabelRotate_2 = new lib.mc_LabelRotate();
	this.mcLabelRotate_2.name = "mcLabelRotate_2";
	this.mcLabelRotate_2.parent = this;
	this.mcLabelRotate_2.setTransform(383.4,178.6,0.9,0.9,0,0,0,85.5,85.5);

	this.mcLabelRotate_4 = new lib.mc_LabelRotate();
	this.mcLabelRotate_4.name = "mcLabelRotate_4";
	this.mcLabelRotate_4.parent = this;
	this.mcLabelRotate_4.setTransform(253.55,403.55,0.9,0.9,0,0,0,85.5,85.5);

	this.mcLabelRotate_1 = new lib.mc_LabelRotate();
	this.mcLabelRotate_1.name = "mcLabelRotate_1";
	this.mcLabelRotate_1.parent = this;
	this.mcLabelRotate_1.setTransform(253.55,103.55,0.9,0.9,0,0,0,85.5,85.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mcLabelRotate_1},{t:this.mcLabelRotate_4},{t:this.mcLabelRotate_2},{t:this.mcLabelRotate_5},{t:this.mcLabelRotate_6},{t:this.mcLabelRotate_3}]}).wait(2));

	// Layer_6
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("A5iZiQqkqkAAu+QAAu9KkqlQKlqkO9AAQO+AAKkKkQKlKlAAO9QAAO+qlKkQqkKlu+AAQu9AAqlqlg");
	this.shape_9.setTransform(250.5,249.45);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.6,-36.6,580.4,580.3000000000001);


(lib.mc_Spin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		var _animationTimeline = this;
		vAF = _animationTimeline.currentFrame
		function flStartAnimation()
		{
			_animationTimeline.gotoAndPlay(vAF);
			_animationTimeline.mcGraphic.mcLabelRotate_1.gotoAndPlay(vAF);
			_animationTimeline.mcGraphic.mcLabelRotate_2.gotoAndPlay(vAF);
			_animationTimeline.mcGraphic.mcLabelRotate_3.gotoAndPlay(vAF);
			_animationTimeline.mcGraphic.mcLabelRotate_4.gotoAndPlay(vAF);
			_animationTimeline.mcGraphic.mcLabelRotate_5.gotoAndPlay(vAF);
			_animationTimeline.mcGraphic.mcLabelRotate_6.gotoAndPlay(vAF);
		}
		function flStopAnimation()
		{
			_animationTimeline.mcGraphic.mcLabelRotate_1.gotoAndStop(vAF);
			_animationTimeline.mcGraphic.mcLabelRotate_2.gotoAndStop(vAF);
			_animationTimeline.mcGraphic.mcLabelRotate_3.gotoAndStop(vAF);
			_animationTimeline.mcGraphic.mcLabelRotate_4.gotoAndStop(vAF);
			_animationTimeline.mcGraphic.mcLabelRotate_5.gotoAndStop(vAF);
			_animationTimeline.mcGraphic.mcLabelRotate_6.gotoAndStop(vAF);
			_animationTimeline.gotoAndStop(vAF);
		}
		function flStartTest()
		{
			if (vStop==true)
			{
				flStopAnimation();
			}
		
		}
		flStartTest();
	}
	this.frame_49 = function() {
		var _animationTimeline = this;
		vAF = _animationTimeline.currentFrame
		function flStartAnimation()
		{
			_animationTimeline.gotoAndPlay(vAF);
			_animationTimeline.mcGraphic.mcLabelRotate_1.gotoAndPlay(vAF);
			_animationTimeline.mcGraphic.mcLabelRotate_2.gotoAndPlay(vAF);
			_animationTimeline.mcGraphic.mcLabelRotate_3.gotoAndPlay(vAF);
			_animationTimeline.mcGraphic.mcLabelRotate_4.gotoAndPlay(vAF);
			_animationTimeline.mcGraphic.mcLabelRotate_5.gotoAndPlay(vAF);
			_animationTimeline.mcGraphic.mcLabelRotate_6.gotoAndPlay(vAF);
		}
		function flStopAnimation()
		{
			_animationTimeline.mcGraphic.mcLabelRotate_1.gotoAndStop(vAF);
			_animationTimeline.mcGraphic.mcLabelRotate_2.gotoAndStop(vAF);
			_animationTimeline.mcGraphic.mcLabelRotate_3.gotoAndStop(vAF);
			_animationTimeline.mcGraphic.mcLabelRotate_4.gotoAndStop(vAF);
			_animationTimeline.mcGraphic.mcLabelRotate_5.gotoAndStop(vAF);
			_animationTimeline.mcGraphic.mcLabelRotate_6.gotoAndStop(vAF);
			_animationTimeline.gotoAndStop(vAF);
		}
		function flStartTest()
		{
			if (vStop==true)
			{
				flStopAnimation();
			}
		
		}
		flStartTest();
	}
	this.frame_74 = function() {
		var _animationTimeline = this;
		vAF = _animationTimeline.currentFrame
		function flStartAnimation()
		{
			_animationTimeline.gotoAndPlay(vAF);
			_animationTimeline.mcGraphic.mcLabelRotate_1.gotoAndPlay(vAF);
			_animationTimeline.mcGraphic.mcLabelRotate_2.gotoAndPlay(vAF);
			_animationTimeline.mcGraphic.mcLabelRotate_3.gotoAndPlay(vAF);
			_animationTimeline.mcGraphic.mcLabelRotate_4.gotoAndPlay(vAF);
			_animationTimeline.mcGraphic.mcLabelRotate_5.gotoAndPlay(vAF);
			_animationTimeline.mcGraphic.mcLabelRotate_6.gotoAndPlay(vAF);
		}
		function flStopAnimation()
		{
			_animationTimeline.mcGraphic.mcLabelRotate_1.gotoAndStop(vAF);
			_animationTimeline.mcGraphic.mcLabelRotate_2.gotoAndStop(vAF);
			_animationTimeline.mcGraphic.mcLabelRotate_3.gotoAndStop(vAF);
			_animationTimeline.mcGraphic.mcLabelRotate_4.gotoAndStop(vAF);
			_animationTimeline.mcGraphic.mcLabelRotate_5.gotoAndStop(vAF);
			_animationTimeline.mcGraphic.mcLabelRotate_6.gotoAndStop(vAF);
			_animationTimeline.gotoAndStop(vAF);
		}
		function flStartTest()
		{
			if (vStop==true)
			{
				flStopAnimation();
			}
		
		}
		flStartTest();
	}
	this.frame_99 = function() {
		var _animationTimeline = this;
		vAF = _animationTimeline.currentFrame
		function flStartAnimation()
		{
			_animationTimeline.gotoAndPlay(vAF);
			_animationTimeline.mcGraphic.mcLabelRotate_1.gotoAndPlay(vAF);
			_animationTimeline.mcGraphic.mcLabelRotate_2.gotoAndPlay(vAF);
			_animationTimeline.mcGraphic.mcLabelRotate_3.gotoAndPlay(vAF);
			_animationTimeline.mcGraphic.mcLabelRotate_4.gotoAndPlay(vAF);
			_animationTimeline.mcGraphic.mcLabelRotate_5.gotoAndPlay(vAF);
			_animationTimeline.mcGraphic.mcLabelRotate_6.gotoAndPlay(vAF);
		}
		function flStopAnimation()
		{
			_animationTimeline.mcGraphic.mcLabelRotate_1.gotoAndStop(vAF);
			_animationTimeline.mcGraphic.mcLabelRotate_2.gotoAndStop(vAF);
			_animationTimeline.mcGraphic.mcLabelRotate_3.gotoAndStop(vAF);
			_animationTimeline.mcGraphic.mcLabelRotate_4.gotoAndStop(vAF);
			_animationTimeline.mcGraphic.mcLabelRotate_5.gotoAndStop(vAF);
			_animationTimeline.mcGraphic.mcLabelRotate_6.gotoAndStop(vAF);
			_animationTimeline.gotoAndStop(vAF);
		}
		function flStartTest()
		{
			if (vStop==true)
			{
				flStopAnimation();
			}
		
		}
		flStartTest();
	}
	this.frame_124 = function() {
		var _animationTimeline = this;
		vAF = _animationTimeline.currentFrame
		function flStartAnimation()
		{
			_animationTimeline.gotoAndPlay(vAF);
			_animationTimeline.mcGraphic.mcLabelRotate_1.gotoAndPlay(vAF);
			_animationTimeline.mcGraphic.mcLabelRotate_2.gotoAndPlay(vAF);
			_animationTimeline.mcGraphic.mcLabelRotate_3.gotoAndPlay(vAF);
			_animationTimeline.mcGraphic.mcLabelRotate_4.gotoAndPlay(vAF);
			_animationTimeline.mcGraphic.mcLabelRotate_5.gotoAndPlay(vAF);
			_animationTimeline.mcGraphic.mcLabelRotate_6.gotoAndPlay(vAF);
		}
		function flStopAnimation()
		{
			_animationTimeline.mcGraphic.mcLabelRotate_1.gotoAndStop(vAF);
			_animationTimeline.mcGraphic.mcLabelRotate_2.gotoAndStop(vAF);
			_animationTimeline.mcGraphic.mcLabelRotate_3.gotoAndStop(vAF);
			_animationTimeline.mcGraphic.mcLabelRotate_4.gotoAndStop(vAF);
			_animationTimeline.mcGraphic.mcLabelRotate_5.gotoAndStop(vAF);
			_animationTimeline.mcGraphic.mcLabelRotate_6.gotoAndStop(vAF);
			_animationTimeline.gotoAndStop(vAF);
		}
		function flStartTest()
		{
			if (vStop==true)
			{
				flStopAnimation();
			}
		
		}
		flStartTest();
	}
	this.frame_149 = function() {
		var _animationTimeline = this;
		vAF = _animationTimeline.currentFrame
		function flStartAnimation()
		{
			_animationTimeline.gotoAndPlay(vAF);
			_animationTimeline.mcGraphic.mcLabelRotate_1.gotoAndPlay(vAF);
			_animationTimeline.mcGraphic.mcLabelRotate_2.gotoAndPlay(vAF);
			_animationTimeline.mcGraphic.mcLabelRotate_3.gotoAndPlay(vAF);
			_animationTimeline.mcGraphic.mcLabelRotate_4.gotoAndPlay(vAF);
			_animationTimeline.mcGraphic.mcLabelRotate_5.gotoAndPlay(vAF);
			_animationTimeline.mcGraphic.mcLabelRotate_6.gotoAndPlay(vAF);
		}
		function flStopAnimation()
		{
			_animationTimeline.mcGraphic.mcLabelRotate_1.gotoAndStop(vAF);
			_animationTimeline.mcGraphic.mcLabelRotate_2.gotoAndStop(vAF);
			_animationTimeline.mcGraphic.mcLabelRotate_3.gotoAndStop(vAF);
			_animationTimeline.mcGraphic.mcLabelRotate_4.gotoAndStop(vAF);
			_animationTimeline.mcGraphic.mcLabelRotate_5.gotoAndStop(vAF);
			_animationTimeline.mcGraphic.mcLabelRotate_6.gotoAndStop(vAF);
			_animationTimeline.gotoAndStop(vAF);
		}
		function flStartTest()
		{
			if (vStop==true)
			{
				flStopAnimation();
			}
		
		}
		flStartTest();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(25).call(this.frame_49).wait(25).call(this.frame_74).wait(25).call(this.frame_99).wait(25).call(this.frame_124).wait(25).call(this.frame_149).wait(1));

	// Layer_1
	this.mcGraphic = new lib.mc_MainGra();
	this.mcGraphic.name = "mcGraphic";
	this.mcGraphic.parent = this;
	this.mcGraphic.setTransform(250,250,1,1,0,0,0,250,250);

	this.timeline.addTween(cjs.Tween.get(this.mcGraphic).wait(1).to({regX:253.6,regY:253.6,rotation:2.4161,x:253.4,y:253.75},0).wait(1).to({rotation:4.8322,x:253.25,y:253.9},0).wait(1).to({rotation:7.2483,x:253.05,y:254.05},0).wait(1).to({rotation:9.6644,x:252.95,y:254.15},0).wait(1).to({rotation:12.0805,x:252.8,y:254.3},0).wait(1).to({rotation:14.4966,x:252.5,y:254.4},0).wait(1).to({rotation:16.9128,x:252.4,y:254.5},0).wait(1).to({rotation:19.3289,x:252.15,y:254.6},0).wait(1).to({rotation:21.745,x:252,y:254.7},0).wait(1).to({rotation:24.1611,x:251.8,y:254.8},0).wait(1).to({rotation:26.5772,x:251.6,y:254.85},0).wait(1).to({rotation:28.9933,x:251.4,y:254.9},0).wait(1).to({rotation:31.4094,x:251.2,y:254.95},0).wait(1).to({rotation:33.8255,x:250.95},0).wait(1).to({rotation:36.2416,x:250.8,y:255.05},0).wait(1).to({rotation:38.6577,x:250.55,y:255.1},0).wait(1).to({rotation:41.0738,x:250.35},0).wait(1).to({rotation:43.4899,x:250.1,y:255.15},0).wait(1).to({rotation:45.906,x:249.85,y:255.1},0).wait(1).to({rotation:48.3221,x:249.7},0).wait(1).to({rotation:50.7383,x:249.45},0).wait(1).to({rotation:53.1544,x:249.2,y:255.05},0).wait(1).to({rotation:55.5705,x:249.1,y:255},0).wait(1).to({rotation:57.9866,x:248.85},0).wait(1).to({rotation:60.4027,x:248.65,y:254.9},0).wait(1).to({rotation:62.8188,x:248.4},0).wait(1).to({rotation:65.2349,x:248.25,y:254.8},0).wait(1).to({rotation:67.651,x:248.05,y:254.75},0).wait(1).to({rotation:70.0671,x:247.8,y:254.6},0).wait(1).to({rotation:72.4832,x:247.65,y:254.55},0).wait(1).to({rotation:74.8993,x:247.4,y:254.45},0).wait(1).to({rotation:77.3154,x:247.3,y:254.35},0).wait(1).to({rotation:79.7315,x:247.05,y:254.2},0).wait(1).to({rotation:82.1477,x:246.95,y:254.05},0).wait(1).to({rotation:84.5638,x:246.7,y:253.9},0).wait(1).to({rotation:86.9799,x:246.55,y:253.8},0).wait(1).to({rotation:89.396,x:246.4,y:253.65},0).wait(1).to({rotation:91.8121,x:246.3,y:253.45},0).wait(1).to({rotation:94.2282,x:246.15,y:253.3},0).wait(1).to({rotation:96.6443,x:245.95,y:253.15},0).wait(1).to({rotation:99.0604,x:245.8,y:252.95},0).wait(1).to({rotation:101.4765,x:245.7,y:252.8},0).wait(1).to({rotation:103.8926,x:245.6,y:252.6},0).wait(1).to({rotation:106.3087,x:245.5,y:252.45},0).wait(1).to({rotation:108.7248,x:245.4,y:252.25},0).wait(1).to({rotation:111.1409,x:245.3,y:252.05},0).wait(1).to({rotation:113.557,x:245.25,y:251.8},0).wait(1).to({rotation:115.9732,x:245.15,y:251.65},0).wait(1).to({rotation:118.3893,x:245.1,y:251.45},0).wait(1).to({rotation:120.8054,y:251.25},0).wait(1).to({rotation:123.2215,x:245,y:251},0).wait(1).to({rotation:125.6376,x:244.95,y:250.8},0).wait(1).to({rotation:128.0537,y:250.6},0).wait(1).to({rotation:130.4698,x:244.9,y:250.35},0).wait(1).to({rotation:132.8859,y:250.15},0).wait(1).to({rotation:135.302,y:249.95},0).wait(1).to({rotation:137.7181,x:244.95,y:249.75},0).wait(1).to({rotation:140.1342,x:244.9,y:249.5},0).wait(1).to({rotation:142.5503,y:249.3},0).wait(1).to({rotation:144.9664,x:244.95,y:249.1},0).wait(1).to({rotation:147.3826,x:245,y:248.9},0).wait(1).to({rotation:149.7987,x:245.05,y:248.65},0).wait(1).to({rotation:152.2148,x:245.15,y:248.45},0).wait(1).to({rotation:154.6309,x:245.2,y:248.25},0).wait(1).to({rotation:157.047,x:245.3,y:248.1},0).wait(1).to({rotation:159.4631,x:245.35,y:247.85},0).wait(1).to({rotation:161.8792,x:245.5,y:247.65},0).wait(1).to({rotation:164.2953,y:247.45},0).wait(1).to({rotation:166.7114,x:245.65,y:247.3},0).wait(1).to({rotation:169.1275,x:245.75,y:247.15},0).wait(1).to({rotation:171.5436,x:245.85,y:246.95},0).wait(1).to({rotation:173.9597,x:246,y:246.8},0).wait(1).to({rotation:176.3758,x:246.15,y:246.6},0).wait(1).to({rotation:178.7919,x:246.3,y:246.45},0).wait(1).to({rotation:181.2081,x:246.45,y:246.3},0).wait(1).to({rotation:183.6242,x:246.6,y:246.15},0).wait(1).to({rotation:186.0403,x:246.8,y:246},0).wait(1).to({rotation:188.4564,x:246.95,y:245.85},0).wait(1).to({rotation:190.8725,x:247.15,y:245.75},0).wait(1).to({rotation:193.2886,x:247.3,y:245.65},0).wait(1).to({rotation:195.7047,x:247.45,y:245.5},0).wait(1).to({rotation:198.1208,x:247.65},0).wait(1).to({rotation:200.5369,x:247.85,y:245.35},0).wait(1).to({rotation:202.953,x:248.1,y:245.3},0).wait(1).to({rotation:205.3691,x:248.25,y:245.2},0).wait(1).to({rotation:207.7852,x:248.45,y:245.15},0).wait(1).to({rotation:210.2013,x:248.65,y:245.05},0).wait(1).to({rotation:212.6174,x:248.9,y:245},0).wait(1).to({rotation:215.0336,x:249.1,y:244.95},0).wait(1).to({rotation:217.4497,x:249.3,y:244.9},0).wait(1).to({rotation:219.8658,x:249.5},0).wait(1).to({rotation:222.2819,x:249.75,y:244.95},0).wait(1).to({rotation:224.698,x:249.95,y:244.9},0).wait(1).to({rotation:227.1141,x:250.15},0).wait(1).to({rotation:229.5302,x:250.35},0).wait(1).to({rotation:231.9463,x:250.6,y:244.95},0).wait(1).to({rotation:234.3624,x:250.8},0).wait(1).to({rotation:236.7785,x:251,y:245},0).wait(1).to({rotation:239.1946,x:251.25,y:245.1},0).wait(1).to({rotation:241.6107,x:251.45},0).wait(1).to({rotation:244.0268,x:251.65,y:245.15},0).wait(1).to({rotation:246.443,x:251.8,y:245.25},0).wait(1).to({rotation:248.8591,x:252.05,y:245.3},0).wait(1).to({rotation:251.2752,x:252.25,y:245.4},0).wait(1).to({rotation:253.6913,x:252.45,y:245.5},0).wait(1).to({rotation:256.1074,x:252.6,y:245.6},0).wait(1).to({rotation:258.5235,x:252.8,y:245.7},0).wait(1).to({rotation:260.9396,x:252.95,y:245.8},0).wait(1).to({rotation:263.3557,x:253.15,y:245.95},0).wait(1).to({rotation:265.7718,x:253.3,y:246.15},0).wait(1).to({rotation:268.1879,x:253.45,y:246.3},0).wait(1).to({rotation:270.604,x:253.65,y:246.4},0).wait(1).to({rotation:273.0201,x:253.8,y:246.55},0).wait(1).to({rotation:275.4362,x:253.9,y:246.7},0).wait(1).to({rotation:277.8523,x:254.05,y:246.95},0).wait(1).to({rotation:280.2685,x:254.2,y:247.05},0).wait(1).to({rotation:282.6846,x:254.35,y:247.3},0).wait(1).to({rotation:285.1007,x:254.45,y:247.4},0).wait(1).to({rotation:287.5168,x:254.55,y:247.65},0).wait(1).to({rotation:289.9329,x:254.6,y:247.8},0).wait(1).to({rotation:292.349,x:254.75,y:248.05},0).wait(1).to({rotation:294.7651,x:254.8,y:248.25},0).wait(1).to({rotation:297.1812,x:254.9,y:248.4},0).wait(1).to({rotation:299.5973,y:248.65},0).wait(1).to({rotation:302.0134,x:255,y:248.85},0).wait(1).to({rotation:304.4295,y:249.1},0).wait(1).to({rotation:306.8456,x:255.05,y:249.2},0).wait(1).to({rotation:309.2617,x:255.1,y:249.45},0).wait(1).to({rotation:311.6779,y:249.7},0).wait(1).to({rotation:314.094,y:249.85},0).wait(1).to({rotation:316.5101,x:255.15,y:250.1},0).wait(1).to({rotation:318.9262,x:255.1,y:250.35},0).wait(1).to({rotation:321.3423,y:250.55},0).wait(1).to({rotation:323.7584,x:255.05,y:250.8},0).wait(1).to({rotation:326.1745,x:254.95,y:250.95},0).wait(1).to({rotation:328.5906,y:251.2},0).wait(1).to({rotation:331.0067,x:254.9,y:251.4},0).wait(1).to({rotation:333.4228,x:254.85,y:251.6},0).wait(1).to({rotation:335.8389,x:254.8,y:251.8},0).wait(1).to({rotation:338.255,x:254.7,y:252},0).wait(1).to({rotation:340.6711,x:254.6,y:252.15},0).wait(1).to({rotation:343.0872,x:254.5,y:252.4},0).wait(1).to({rotation:345.5034,x:254.4,y:252.5},0).wait(1).to({rotation:347.9195,x:254.3,y:252.8},0).wait(1).to({rotation:350.3356,x:254.15,y:252.95},0).wait(1).to({rotation:352.7517,x:254.05,y:253.05},0).wait(1).to({rotation:355.1678,x:253.9,y:253.25},0).wait(1).to({rotation:357.5839,x:253.75,y:253.4},0).wait(1).to({rotation:360,x:253.6,y:253.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(17.3,17.3,465.7,465.4);


// stage content:
(lib.fatRatMozCircular = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		var _masterTimeline = this;
		this.stop();
		function flSetVars1()
		{
			_masterTimeline.mcSpin.mcGraphic.mcLabelRotate_1.mcLabel.gotoAndStop(0);
			_masterTimeline.mcSpin.mcGraphic.mcLabelRotate_2.mcLabel.gotoAndStop(1);
			_masterTimeline.mcSpin.mcGraphic.mcLabelRotate_3.mcLabel.gotoAndStop(2);
			_masterTimeline.mcSpin.mcGraphic.mcLabelRotate_4.mcLabel.gotoAndStop(3);
			_masterTimeline.mcSpin.mcGraphic.mcLabelRotate_5.mcLabel.gotoAndStop(4);
			_masterTimeline.mcSpin.mcGraphic.mcLabelRotate_6.mcLabel.gotoAndStop(5);
			_masterTimeline.mcSpin.mcGraphic.mcLabelRotate_1.gotoAndStop(0);
			_masterTimeline.mcSpin.mcGraphic.mcLabelRotate_2.gotoAndStop(0);
			_masterTimeline.mcSpin.mcGraphic.mcLabelRotate_3.gotoAndStop(0);
			_masterTimeline.mcSpin.mcGraphic.mcLabelRotate_4.gotoAndStop(0);
			_masterTimeline.mcSpin.mcGraphic.mcLabelRotate_5.gotoAndStop(0);
			_masterTimeline.mcSpin.mcGraphic.mcLabelRotate_6.gotoAndStop(0);
			_masterTimeline.mcSpin.gotoAndStop(0);
		
		}
		flSetVars1();
		
		
		window.fr_focus = function(){
			_masterTimeline.gotoAndPlay(2);
		}
	}
	this.frame_12 = function() {
		vStop = false;
		this.stop();
		var _masterTimeline = this;
		function flSetVars()
		{
			_masterTimeline.mcSpin.mcGraphic.mcLabelRotate_1.mcLabel.gotoAndStop(0);
			_masterTimeline.mcSpin.mcGraphic.mcLabelRotate_2.mcLabel.gotoAndStop(1);
			_masterTimeline.mcSpin.mcGraphic.mcLabelRotate_3.mcLabel.gotoAndStop(2);
			_masterTimeline.mcSpin.mcGraphic.mcLabelRotate_4.mcLabel.gotoAndStop(3);
			_masterTimeline.mcSpin.mcGraphic.mcLabelRotate_5.mcLabel.gotoAndStop(4);
			_masterTimeline.mcSpin.mcGraphic.mcLabelRotate_6.mcLabel.gotoAndStop(5);
		}
		flSetVars();
		
		window.scroll = function(){
			if (vStop==true){
			vStop = false;
			_masterTimeline.mcSpin.gotoAndPlay(0);
			_masterTimeline.mcSpin.mcGraphic.mcLabelRotate_1.gotoAndPlay(0);
			_masterTimeline.mcSpin.mcGraphic.mcLabelRotate_2.gotoAndPlay(0);
			_masterTimeline.mcSpin.mcGraphic.mcLabelRotate_3.gotoAndPlay(0);
			_masterTimeline.mcSpin.mcGraphic.mcLabelRotate_4.gotoAndPlay(0);
			_masterTimeline.mcSpin.mcGraphic.mcLabelRotate_5.gotoAndPlay(0);
			_masterTimeline.mcSpin.mcGraphic.mcLabelRotate_6.gotoAndPlay(0);
			_masterTimeline.mcInner.gotoAndPlay(0)
			}
		}
		
		function fFocus()
		{
			window.focus();
		}
		function fScroll()
		{
			window.scroll();
		}
		
		function fl_MouseOut() {
			vStop=true;
		}
		function fl_MouseOver() {
			vStop=false;
			vGoto = _masterTimeline.mcSpin.currentFrame+1
			_masterTimeline.mcSpin.gotoAndPlay(vGoto);
			_masterTimeline.mcSpin.mcGraphic.mcLabelRotate_1.gotoAndPlay(vGoto);
			_masterTimeline.mcSpin.mcGraphic.mcLabelRotate_2.gotoAndPlay(vGoto);
			_masterTimeline.mcSpin.mcGraphic.mcLabelRotate_3.gotoAndPlay(vGoto);
			_masterTimeline.mcSpin.mcGraphic.mcLabelRotate_4.gotoAndPlay(vGoto);
			_masterTimeline.mcSpin.mcGraphic.mcLabelRotate_5.gotoAndPlay(vGoto);
			_masterTimeline.mcSpin.mcGraphic.mcLabelRotate_6.gotoAndPlay(vGoto);
		}
		
		function fl_MouseClick() {
			if (vStop==false) {
			vStop=false;
			vGoto = _masterTimeline.mcSpin.currentFrame+1
			_masterTimeline.mcSpin.gotoAndPlay(vGoto);
			_masterTimeline.mcSpin.mcGraphic.mcLabelRotate_1.gotoAndPlay(vGoto);
			_masterTimeline.mcSpin.mcGraphic.mcLabelRotate_2.gotoAndPlay(vGoto);
			_masterTimeline.mcSpin.mcGraphic.mcLabelRotate_3.gotoAndPlay(vGoto);
			_masterTimeline.mcSpin.mcGraphic.mcLabelRotate_4.gotoAndPlay(vGoto);
			_masterTimeline.mcSpin.mcGraphic.mcLabelRotate_5.gotoAndPlay(vGoto);
			_masterTimeline.mcSpin.mcGraphic.mcLabelRotate_6.gotoAndPlay(vGoto);
			} 
		}
		var vFrequency = 1000;
		stage.enableMouseOver(vFrequency);
		this.mcSpin.addEventListener("mouseover", fl_MouseOver);
		this.mcSpin.addEventListener("mouseout", fl_MouseOut);
		this.mcSpin.addEventListener("click", fl_MouseOver.bind(this));
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(11).call(this.frame_12).wait(2));

	// Layer_2
	this.mcSpin = new lib.mc_Spin();
	this.mcSpin.name = "mcSpin";
	this.mcSpin.parent = this;
	this.mcSpin.setTransform(300.5,300,1,1,0,0,0,250,250);
	this.mcSpin.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.mcSpin).wait(2).to({alpha:1},10).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(369.9,368.4,162.20000000000005,163.10000000000002);
// library properties:
lib.properties = {
	id: '4D21F121E2284D37AC679BF2F1C4ED0D',
	width: 600,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['4D21F121E2284D37AC679BF2F1C4ED0D'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;