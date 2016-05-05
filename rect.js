function Rect (n,color) {
	 createjs.Shape.call(this);//将createjs.Shaoe的方法全部当做参数传进来
	 this.setRectType=function (type){//构造setRectType方法
	 	this._RectType=type;
	 	switch (type) {
	 		case 1:
	 			this.setColor("#"+color[0]+color[1]+color[2]+color[3]+color[4]+color[5]);
	 			break;
	 		case 2:
	 			var m=1.9-n/9;
	 			this.setColor("#"+parseInt(color[0]/m)+parseInt(color[1]/m)+parseInt(color[2]/m)+parseInt(color[3]/m)+parseInt(color[4]/m)+parseInt(color[5]/m));
	 			break;
	 	}
	 }
	 this.setColor=function (colorString) {
	 	this.graphics.beginFill(colorString);
	 	this.graphics.drawRect(0,0,400/n-5,400/n-5);
	 	this.graphics.endFill();
	 }
	 this.getRectType=function () {
	 	 return this._RectType; 
	 }
	 this.setRectType(1);
}
Rect.prototype = new createjs.Shape();//构建Rect对象，继承所有createjs方法以及我们之前创建的方法