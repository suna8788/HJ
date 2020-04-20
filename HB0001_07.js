// B01 회화
var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

//이미지
var home = Paper.image('img/home.png', 0, 0, 26, 24).toDefs();
var face = Paper.image('img/face.png', 0, 0, 35, 35).toDefs();
var play = Paper.image('img/play.png', 0, 0, 22, 22).toDefs();
var pause = Paper.image('img/pause.png', 0, 0, 22, 22).toDefs();
var stop = Paper.image('img/stop.png', 0, 0, 22, 22).toDefs();
var con01 = Paper.image('img/con01.png', 0, 0, 50, 50).toDefs();
var con02 = Paper.image('img/con02.png', 0, 0, 80, 50).toDefs();
var con03 = Paper.image('img/con03.png', 0, 0, 50, 50).toDefs();

//오디오
var aud01 = new Audio('aud/con01.mp3');

// SVG 외곽선
Paper.rect(0, 0, 360, 640, 6).attr({
    'stroke': 'gray',
    'fill': 'none'
});

// 상단 바 부분
var topBox = Paper.g();

topBox.path('M1 40 L359 40 L359 0 Q358 1 358 1 L1 1').attr({
    'fill': '#d3e7b9'
});

home.use().transform('t14, 8').appendTo(topBox).click(handlerHome).attr({
    'cursor': 'pointer'
});

function handlerHome() {
    location.replace('HB0001.html');
}

topBox.text(310, 28, 'B01_회화').attr({
    'font-size': 20,
    'text-anchor': 'middle'
});


// 상단
var topArea = Paper.g();

face.use().transform('t20, 60').appendTo(topArea);

topArea.text(155, 87, '잘 듣고, 따라해 보세요.').attr({
    'font-size': 20,
    'text-anchor': 'middle'
});

con01.use().transform('t30, 140').appendTo(topArea);

topArea.text(105, 180, 'Tā shì lǎoshī.').attr({
    'font-family': 'notosans',
    'font-size': 28
});

topArea.text(105, 220, '선생님이시다.').attr({
    'font-size': 20,
    'fill': 'gray'
});

con02.use().transform('t15, 255').appendTo(topArea);

topArea.text(105, 290, 'Lǎoshī, nín hǎo!').attr({
    'font-family': 'notosans',
    'font-size': 28
});

topArea.text(105, 330, '선생님, 안녕하세요.').attr({
    'font-size': 20,
    'fill': 'gray'
});

con03.use().transform('t30, 360').appendTo(topArea);

topArea.text(105, 400, 'Nǐmen hǎo!').attr({
    'font-family': 'notosans',
    'font-size': 28
});

topArea.text(105, 440, '너희도 안녕.').attr({
    'font-size': 20,
    'fill': 'gray'
});

//하단 스피커
var bottomArea = Paper.g();

bottomArea.rect(30, 480, 300, 50, 6).attr({
    'stroke': 'gray',
    'fill': 'white'
});

play.use().transform('t90, 495').appendTo(bottomArea).click(playAudio01).attr({
    'cursor': 'pointer',
});

function playAudio01() {
    aud01.play();
}

pause.use().transform('t170, 495').appendTo(bottomArea).click(pauseAudio01).attr({
    'cursor': 'pointer',
});

function pauseAudio01() {
    aud01.pause();
}

stop.use().transform('t250, 496').appendTo(bottomArea).click(stopAudio01).attr({
    'cursor': 'pointer',
});

function stopAudio01() {
    aud01.pause();
    aud01.currentTime = 0;
}
