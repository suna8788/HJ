// D02 회화
var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

//이미지
var home = Paper.image('img/home.png', 0, 0, 30, 30).toDefs();
var face = Paper.image('img/face.png', 0, 0, 35, 35).toDefs();
var play = Paper.image('img/play.png', 0, 0, 22, 22).toDefs();
var pause = Paper.image('img/pause.png', 0, 0, 22, 22).toDefs();
var stop = Paper.image('img/stop.png', 0, 0, 22, 22).toDefs();

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
    'fill': '#807FD3',
    'opacity': 0.4
});

home.use().transform('t14, 6').appendTo(topBox).click(handlerHome).attr({
    'cursor': 'pointer'
});

function handlerHome() {
    location.replace('HD0002.html');
}

topBox.text(310, 28, 'D02_회화').attr({
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


//본문
topArea.circle(50, 150, 18, 18).attr({
    'fill': '#72BE5D'
});

topArea.text(43, 159, 'A').attr({
    'fill': 'white',
    'font-weight': 'bold',
    'font-size': 23
});

topArea.text(90, 160, '你看什么呢？').attr({
    'font-family': 'notosans',
    'font-size': 26
});

topArea.text(90, 190, '너 뭐 보니?').attr({
    'font-size': 18,
    'fill': 'gray'
});

topArea.text(90, 230, '这是什么地方？').attr({
    'font-family': 'notosans',
    'font-size': 26
});

topArea.text(90, 260, '여기가 어디야?').attr({
    'font-size': 18,
    'fill': 'gray'
});

topArea.circle(50, 300, 18, 18).attr({
    'fill': '#DEA4B0'
});

topArea.text(43, 309, 'B').attr({
    'fill': 'white',
    'font-weight': 'bold',
    'font-size': 23
});

topArea.text(90, 310, '北京。').attr({
    'font-family': 'notosans',
    'font-size': 26
});

topArea.text(90, 340, '북경이야.').attr({
    'font-size': 18,
    'fill': 'gray'
});

topArea.circle(50, 380, 18, 18).attr({
    'fill': '#72BE5D'
});

topArea.text(43, 389, 'A').attr({
    'fill': 'white',
    'font-weight': 'bold',
    'font-size': 23
});

topArea.text(90, 390, '你去过北京吗？').attr({
    'font-family': 'notosans',
    'font-size': 26
});

topArea.text(90, 425, '너 북경 가봤어?').attr({
    'font-size': 18,
    'fill': 'gray'
});

topArea.circle(50, 465, 18, 18).attr({
    'fill': '#DEA4B0'
});

topArea.text(43, 474, 'B').attr({
    'fill': 'white',
    'font-weight': 'bold',
    'font-size': 23
});

topArea.text(90, 475, '我去过北京。').attr({
    'font-family': 'notosans',
    'font-size': 26
});
topArea.text(90, 515, '北京真大。').attr({
    'font-family': 'notosans',
    'font-size': 26
});

topArea.text(90, 545, '북경에 가봤어. 북경은 정말 커.').attr({
    'font-size': 18,
    'fill': 'gray'
});

//하단 스피커
var bottomArea = Paper.g();

bottomArea.rect(30, 575, 300, 50, 6).attr({
    'stroke': 'gray',
    'fill': 'white'
});

play.use().transform('t90, 590').appendTo(bottomArea).click(playAudio01).attr({
    'cursor': 'pointer',
});

function playAudio01() {
    aud01.play();
}

pause.use().transform('t170, 590').appendTo(bottomArea).click(pauseAudio01).attr({
    'cursor': 'pointer',
});

function pauseAudio01() {
    aud01.pause();
}

stop.use().transform('t250, 591').appendTo(bottomArea).click(stopAudio01).attr({
    'cursor': 'pointer',
});

function stopAudio01() {
    aud01.pause();
    aud01.currentTime = 0;
}
