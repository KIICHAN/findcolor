var stage=new createjs.Stage("gameView");//创建舞台
createjs.Ticker.setFPS(30);//设置为30帧
createjs.Ticker.addEventListener("tick",stage);//添加监听
var gameView=new createjs.Container();//传递的参数gameView
stage.addChild(gameView);
// var s=new createjs.Shape();//绘制图形
// s.graphics.beginFill("#ff0000");//指定颜色值
// s.graphics.drawRect(0,0,100,100);//绘制矩形100px * 100px
// s.graphics.endFill();//结束绘制

// gameView.addChild(s);//添加到gameView中
var n=2,num=1;
var timer = 16;
var time=$("#time");
function stop() {
    var ove = '<div style="9999px;height:9999px;z-index:99;opacity:0.6;background:#000;"></div>',
        over = '<div style="position:absolute;top:200px;left:200px;font-size:20px;height:500px;width:200px;z-index:999" id="over">时间到啦！！！！！！</div>';
    $("html").append(ove);
    $("html").append(over);

}
t = setInterval(function() {
    timer--;
    if(timer<0){
    stop();
    clearTimeout(t);
    }
    else {
    time.html(timer);
    }
}, 1000);

function addRect(){
    var cl=[parseInt(Math.random()*10),parseInt(Math.random()*10),parseInt(Math.random()*10),parseInt(Math.random()*10),parseInt(Math.random()*10),parseInt(Math.random()*10)];
    var color = cl;
    var x =parseInt(Math.random()*n);
    var y =parseInt(Math.random()*n);
    for(var indexX=0;indexX<n;indexX++){
        for(var indexY=0;indexY<n;indexY++){
        var r = new Rect(n,color);
        gameView.addChild(r);
        r.x=indexX;
        r.y=indexY;
        if(r.x == x&& r.y==y){
            r.setRectType(2);
        }
        r.x=indexX*(400/n);
        r.y=indexY*(400/n);
        if(r.getRectType() == 2 &&timer>=0){
        r.addEventListener("click",function(){
        if(n<7){++n;}
        gameView.removeAllChildren();
        $("#int").html(num++);
        addRect();
        });
        }
        }
        
        }
    }
addRect();