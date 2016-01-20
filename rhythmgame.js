var speed = 5;
var rowlength = 4;
var rows = [];
var Row = function(){
	this.notes = [];
	rows.push(this);
};
var Note = function(row,steps){
	this.row = row;
	this.stepsAwayFromEnd = steps;
};
Note.prototype.update = function(){
	//if (keyIsPressed){
		//if (keyIsDown())
	//}
	--this.stepsAwayFromEnd;
};
Note.prototype.draw = function(){
	fill(255);
	stroke(255);
	rect(this.row * (width/rowlength) + 0.5,(height-((this.stepsAwayFromEnd)*speed)),width/(rowlength)-1,20);
	this.update();
	if (this.stepsAwayFromEnd < height){
		fill(255,0,0);
		//stroke(255,0,0);
		rect(this.row * (width/rowlength) + 0.5,(height-(this.stepsAwayFromEnd * speed)),width/(rowlength)-1,20);
	}
};
var setup = function(){
	createCanvas(400,400);
	randomSeed(0);
	for (var i = 0; i < rowlength;++i){
		new Row();
	}
	var delay = 400;
	var amount = 200;
	for (var i = 0; i < amount; ++i){
		var randRow = Math.floor(random(0,1) * rowlength);
		rows[randRow].notes.push(new Note(randRow,Math.round(i*(random(19,20)))+delay));
	}
};
var draw = function(){
	stroke(0);
	fill(255);
	for (var i = 0; i < rowlength+1;++i){
		line(i * (width/(rowlength)),0,i * (width/(rowlength)),height);

		rect(i * (width/rowlength),height-40,width/(rowlength),30);
	}
	if (keyIsPressed){
		if (keyIsDown(65)){
			fill(0);
			stroke(0);
			
			if (rows[0].notes.length > 0&&rows[0].notes[0].stepsAwayFromEnd <= 10){
				var note = rows[0].notes[0];
				fill(255);
				stroke(255);
				rect(note.row * (width/rowlength)+0.5,(height-(note.stepsAwayFromEnd*speed)),width/rowlength-1,20);
				rows[0].notes.shift();
				//--f;
				//--len;
				console.log("collected");
				fill(255,0,0);
				stroke(0);
			}
			rect(0 * (width/rowlength),height-40,width/(rowlength),30);
		} if (keyIsDown(83)){
			fill(0);
			stroke(0);
			
			if (rows[1].notes.length > 0&&rows[1].notes[0].stepsAwayFromEnd <= 10){
				var note = rows[1].notes[0];
				fill(255);
				stroke(255);
				rect(note.row * (width/rowlength)+0.5,(height-(note.stepsAwayFromEnd*speed)),width/rowlength-1,20);
				rows[1].notes.shift();
				//--f;
				//--len;
				console.log("collected");
				fill(255,0,0);
				stroke(0);
			}
			rect(1 * (width/rowlength),height-40,width/(rowlength),30);
		} if (keyIsDown(75)){
			fill(0);
			stroke(0);
			if (rows[2].notes.length > 0&&rows[2].notes[0].stepsAwayFromEnd <= 10){
				var note = rows[2].notes[0];
				fill(255);
				stroke(255);
				rect(note.row * (width/rowlength)+0.5,(height-(note.stepsAwayFromEnd*speed)),width/rowlength-1,20);
				rows[2].notes.shift();
				//--f;
				//--len;
				console.log("collected");
				fill(255,0,0);
				stroke(0);
			}
			rect(2 * (width/rowlength),height-40,width/(rowlength),30);

		} if (keyIsDown(76)){
			fill(0);
			stroke(0);
			if (rows[3].notes.length > 0&&rows[3].notes[0].stepsAwayFromEnd <= 10){
				var note = rows[3].notes[0];
				fill(255);
				stroke(255);
				rect(note.row * (width/rowlength)+0.5,(height-(note.stepsAwayFromEnd*speed)),width/rowlength-1,20);
				rows[3].notes.shift();
				//--f;
				//--len;
				console.log("collected");
				fill(255,0,0)
				stroke(0);
			}
			rect(3 * (width/rowlength),height-40,width/(rowlength),30);
		}

		stroke(255);
	}
	stroke(255);
	for (var i = 0,l=rowlength; i < l;++i){
		rows[i].notes.sort(function(a,b){
			return a.stepsAwayFromEnd-b.stepsAwayFromEnd;
		})
		for (var f = 0,len = rows[i].notes.length; f < len;++f){
			var note = rows[i].notes[f];
			if (note.stepsAwayFromEnd <= 5){
				fill(0,0,255);
				stroke(255);
				rect(note.row * (width/rowlength)+0.5,(height-(note.stepsAwayFromEnd*speed)),width/rowlength-1,20);
				rows[i].notes.shift();
				--f;
				--len;
				console.log("collected");
				continue;
			}
			//if (note.stepsAwayFromEnd < height){
				note.draw();
			//}
		}

	}
};
