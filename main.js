﻿enchant();

window.onload = function() {
 var core = new Core(600, 400);


core.preload('sozai/start.png');
core.preload('sozai/umi.jpg');
core.preload('sozai/hono.png');
core.preload('sozai/koto.png');
core.preload('sozai/koto2.png');
core.preload('sozai/koto3.png');
core.preload('sozai/hp.png');
core.preload('sozai/suika3.png');
core.preload('sozai/umi3.png');
core.preload('sozai/yazi.png');
core.preload('sozai/ba.png');
core.preload('sozai/cl.png');
core.preload('sozai/go.png');

core.preload('oto/start.mp3');
core.preload('oto/kaisi.mp3');
core.preload('oto/ive.mp3');
core.preload('oto/game.mp3');
core.preload('oto/atk.mp3');
core.preload('oto/clr.mp3');
core.preload('oto/gover.mp3');



core.onload = function() {

var label = new Label();
label.x = 250;
label.y = 200;
label.font = '70px "Arial"';


var bgm1 = core.assets['oto/start.mp3'];
var kaisi = core.assets['oto/kaisi.mp3'];
var bgm2 = core.assets['oto/ive.mp3'];
var ttk = core.assets['oto/atk.mp3'];
var gover = core.assets['oto/gover.mp3'];
var clr = core.assets['oto/clr.mp3'];
var bgm3 = core.assets['oto/game.mp3'];


var atk = 0;
var clf = 0;
var gof = 0;
var dame = 0;
var dame2 = 0;
var i = 0;

 var start = new Sprite(600, 400);
        var startflag = 0;
        start.image = core.assets['sozai/start.png'];
        start.x = 0;
        start.y = 0;
        core.rootScene.addChild(start);
        start.addEventListener('touchstart', function() {
            kaisi.play();
            startflag = 1;
        });



var back = new Sprite(600, 400);
        back.image = core.assets['sozai/umi.jpg'];
        back.x = 0;
        back.y = 0;
        core.addEventListener('enterframe', function () {

if(startflag == 0){
      bgm1.play();
}




if(startflag == 1){

bgm1.stop();



core.rootScene.removeChild(start);
  core.rootScene.addChild(back);
core.rootScene.addChild(hono);
core.rootScene.addChild(huki);
if(iveflag == 0){
bgm2.play();
core.rootScene.addChild(koto);

}
if(iveflag == 1){
bgm2.play();
core.rootScene.removeChild(koto);
core.rootScene.addChild(koto2);
}
if(iveflag == 2){
bgm2.stop();
if(gof == 0){
bgm3.play();
}

core.rootScene.removeChild(back);
core.rootScene.removeChild(koto2);
core.rootScene.removeChild(hono);
core.rootScene.removeChild(huki);

core.rootScene.addChild(sui);


if(dame == 0 && gof == 0){
core.rootScene.addChild(hp3);
}
if(dame == 1){
core.rootScene.removeChild(hp3);
}
if(dame2 == 0 && gof == 0){
core.rootScene.addChild(hp2);
}
if(dame2 == 1){
core.rootScene.removeChild(hp3);
core.rootScene.removeChild(hp2);
}
if(gof == 0){
core.rootScene.addChild(hp1);
}
if(gof == 1){
core.rootScene.removeChild(hp3);
core.rootScene.removeChild(hp2);
core.rootScene.removeChild(hp1);
}

core.rootScene.addChild(yazi);
core.rootScene.addChild(ba);
if(baf == 0){
yazi.x += 20;
}
if(yazi.x >= 570){
baf = 1;
}
if(baf == 1){
yazi.x -= 20;
}
if(yazi.x <= 0){
baf = 0;
}


if(atk == 1 && core.frame >= 90 && clf == 0 && gof == 0){
baf = 0;
yazi.x = 0;
  atk = 2;
}
if(atk == 3 && core.frame >= 90 && clf == 0 && gof == 0){
baf = 0;
yazi.x = 0;
  atk = 4;
}

if(clf == 2 && core.frame >= 60){
iveflag = 3;
}

if(gof == 2 && core.frame >= 170){
iveflag = 5;
}


sui.addEventListener('touchstart', function() {
 ttk.play();
           if(atk == 0){
i = 1;
core.frame = 0;
            baf = 3;
atk = 1;
}
           if(atk == 2){
i=2;
core.frame = 0;
            baf = 3;
atk = 3;
            
}
           if(atk == 4){
i=3;
core.frame = 0;
            baf = 3;
            atk = 5;
}

        });

if(baf == 3 && yazi.x+15 >= 290 && yazi.x+15 <= 305 && clf == 0){
            clf = 1;
}
if(baf == 3 && yazi.x+15 >= 240 && yazi.x+15 < 290 && clf == 0){
           
       if(i==1){
dame = 1;
    }
 if(i==2){
dame2 = 1;
    }
if(i==3 && gof == 0){
gof = 1;
    }
}
if(baf == 3 && yazi.x+15 > 305 && yazi.x+15 <= 360 && clf == 0){
          
 if(i==1){
dame = 1;
    }
 if(i==2){
dame2 = 1;
    }
if(i==3 && gof == 0){
gof = 1;
    }
}
if(baf == 3 && yazi.x+15 < 240 && gof == 0){
gof = 1;
}
if(baf == 3 && yazi.x+15 > 360 && gof == 0){
  gof = 1;
}


if(clf == 1){
 clr.play();
core.frame = 0;
clf = 2;
}
if(clf == 2){
core.rootScene.addChild(cl);
}

if(gof == 1){
 bgm3.stop();
 gover.play();
core.frame = 0;
gof = 2;
}
if(gof == 2){
core.rootScene.addChild(go);
}

}


if(iveflag == 3){
bgm3.stop();
bgm2.play();
core.rootScene.removeChild(sui);
core.rootScene.removeChild(ba);
core.rootScene.removeChild(yazi);
core.rootScene.removeChild(hp1);
core.rootScene.removeChild(hp2);
core.rootScene.removeChild(hp3);
core.rootScene.removeChild(cl);
core.rootScene.removeChild(back);

core.rootScene.addChild(sui2);


}


if(iveflag == 4){
core.rootScene.removeChild(sui2);
core.rootScene.addChild(back);
core.rootScene.addChild(hono);
core.rootScene.addChild(huki);
core.rootScene.addChild(koto3);
}


if(iveflag == 5){
bgm2.stop();
bgm3.stop();
core.rootScene.removeChild(sui);
core.rootScene.removeChild(ba);
core.rootScene.removeChild(yazi);
core.rootScene.removeChild(hp1);
core.rootScene.removeChild(hp2);
core.rootScene.removeChild(hp3);
core.rootScene.removeChild(cl);
core.rootScene.removeChild(sui2);
core.rootScene.removeChild(go);
core.rootScene.removeChild(huki);
core.rootScene.removeChild(koto);
core.rootScene.removeChild(koto2);
core.rootScene.removeChild(koto3);
core.rootScene.removeChild(hono);

core.rootScene.addChild(start);
 baf = 0;
 atk = 0;
 clf = 0;
 gof = 0;
 dame = 0;
 dame2 = 0;
 i = 0;
startflag = 0;




iveflag = 0;

}







}

});


var hono = new Sprite(295, 500);
hono.image = core.assets['sozai/hono.png'];
hono.x = 150;
hono.y = 0;




var huki = new Sprite(600, 300);
        huki.x = 0;
        huki.y = 300;
        // spriteオブジェクトの背景色の指定
        huki.backgroundColor = "rgba(255, 100, 100, 0.7)";


var iveflag = 0;
var koto = new Sprite(570, 100);
koto.image = core.assets['sozai/koto2.png'];
koto.x = 0;
koto.y = 300;
 koto.addEventListener('touchstart', function() {

            iveflag = 1;
        });
var koto2 = new Sprite(600, 100);
koto2.image = core.assets['sozai/koto.png'];
koto2.x = 0;
koto2.y = 300;
 koto2.addEventListener('touchstart', function() {
            iveflag = 2;
        });
var koto3 = new Sprite(600, 100);
koto3.image = core.assets['sozai/koto3.png'];
koto3.x = 0;
koto3.y = 300;
 koto3.addEventListener('touchstart', function() {
            iveflag = 5;
        });




var hp1 = new Sprite(30,30);
hp1.image = core.assets['sozai/hp.png'];
hp1.x = 10;
hp1.y = 10;
var hp2 = new Sprite(30,30);
hp2.image = core.assets['sozai/hp.png'];
hp2.x = 42;
hp2.y = 10;
var hp3 = new Sprite(30,30);
hp3.image = core.assets['sozai/hp.png'];
hp3.x = 74;
hp3.y = 10;




var sui = new Sprite(600,400);
sui.image = core.assets['sozai/suika3.png'];
sui.x = 0;
sui.y = 0;

var sui2 = new Sprite(600,400);
sui2.image = core.assets['sozai/umi3.png'];
sui2.x = 0;
sui2.y = 0;
sui2.addEventListener('touchstart', function() {
            iveflag = 4;
        });

var yazi = new Sprite(30,30);
yazi.image = core.assets['sozai/yazi.png'];
yazi.x = 0;
yazi.y = 360;
var ba = new Sprite(600,35);
var baf = 0;
ba.image = core.assets['sozai/ba.png'];
ba.x = 0;
ba.y = 320;

var cl = new Sprite(470,160);
cl.image = core.assets['sozai/cl.png'];
cl.x = 65;
cl.y = 100;
var go = new Sprite(500,180);
go.image = core.assets['sozai/go.png'];
go.x = 50;
go.y = 100;







};

core.scale = 1.0;
    core.start();
};
