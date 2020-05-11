// D02 문법(2)
var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

//이미지
var home = Paper.image('img/home.png', 0, 0, 30, 30).toDefs();
var migi01 = Paper.image('img/migi01.png', 0, 0, 25, 25).toDefs();
var gram02 = Paper.image('img/gram02.png', 0, 0, 60, 60).toDefs();

// SVG 외곽선
Paper.rect(0, 0, 360, 640, 6).attr({
    'stroke': 'gray',
    'fill': 'none'
});

// 상단 바 부분
var topBox = Paper.g();

topBox.path('M1 40 L359 40 L359 0 Q358 1 358 1 L1 1').attr({
    'fill': '#D3A27F',
    'opacity': 0.7
});

home.use().transform('t14, 6').appendTo(topBox).click(handlerHome).attr({
    'cursor': 'pointer'
});

function handlerHome() {
    location.replace('HD0002.html');
}

topBox.text(180, 30, 'D02_문법(2)').attr({
    'font-size': 20,
    'text-anchor': 'middle'
});

migi01.use().transform('t325, 8').appendTo(topBox).click(handlerBefore).attr({
    'cursor': 'pointer'
});

function handlerBefore() {
    location.replace('HD0002_01.html');
}

// 상단
var topArea = Paper.g();

topArea.rect(50, 80, 270, 60, 3).attr({
    'stroke': '#C08457',
    'stroke-width': 2,
    'fill': 'none'
});

gram02.use().transform('t15, 60').appendTo(topArea);

topArea.text(120, 120, '동태조사 着').attr({
    'font-size': 25,
    'font-family': 'NanumGothic',
    'font-weight': 'bold'
});

// 학습내용
var bottomArea = Paper.g();

//문장(1)
bottomArea.circle(26, 190, 13, 13).attr({
    'fill': '#C08457',
    'opacity': 0.6
});

bottomArea.text(23, 195, '1').attr({
    'font-size': 15,
    'font-weight': 'bold'
});

var t1 = bottomArea.text(55, 200, ['我看', '着', '书。']).click(handler01).attr({
    'font-size': 27,
    'cursor': 'pointer',
});

t1.selectAll('tspan')[1].attr({
    // x: 102,
    'fill': 'red'
});

bottomArea.text(55, 235, '나는 책을 읽고 있습니다.').attr({
    'font-size': 18,
    'fill': 'gray'
});

function handler01() {
    var audio1 = new Audio('aud/gram06.mp3');
    audio1.play();
}

//문장(2)
bottomArea.circle(26, 285, 13, 13).attr({
    'fill': '#C08457',
    'opacity': 0.6
});

bottomArea.text(23, 290, '2').attr({
    'font-size': 15,
    'font-weight': 'bold'
});

var t2 = bottomArea.text(55, 295, ['门开', '着', '。']).click(handler02).attr({
    'font-size': 27,
    'cursor': 'pointer',
});

t2.selectAll('tspan')[1].attr({
    // x: 109,
    'fill': 'red'
});

bottomArea.text(55, 330, '문이 열려 있습니다.').attr({
    'font-size': 18,
    'fill': 'gray'
});

function handler02() {
    var audio2 = new Audio('aud/gram07.mp3');
    audio2.play();
}

//문장(3)
bottomArea.circle(26, 375, 13, 13).attr({
    'fill': '#C08457',
    'opacity': 0.6
});

bottomArea.text(23, 380, '3').attr({
    'font-size': 15,
    'font-weight': 'bold'
});

var t3 = bottomArea.text(55, 385, ['门开', '着', '没有？']).click(handler03).attr({
    'font-size': 27,
    'cursor': 'pointer',
});

t3.selectAll('tspan')[1].attr({
    // x: 109,
    'fill': 'red',
});

bottomArea.text(55, 420, '문이 열려 있습니까?').attr({
    'font-size': 18,
    'fill': 'gray'
});

function handler03() {
    var audio3 = new Audio('aud/gram08.mp3');
    audio3.play();
}

//문장(4)
bottomArea.circle(26, 465, 13, 13).attr({
    'fill': '#C08457',
    'opacity': 0.6
});

bottomArea.text(22, 470, '4').attr({
    'font-size': 15,
    'font-weight': 'bold'
});

var t4 = bottomArea.text(55, 475, ['没', '开', '着', '。']).click(handler04).attr({
    'font-size': 27,
    'cursor': 'pointer',
});

t4.selectAll('tspan')[0].attr({
    'fill': 'red'
});

t4.selectAll('tspan')[2].attr({
    // x: 109,
    'fill': 'red'
});

bottomArea.text(55, 510, '열려 있지 않습니다.').attr({
    'font-size': 18,
    'fill': 'gray'
});


function handler04() {
    var audio4 = new Audio('aud/gram09.mp3');
    audio4.play();
}

//문장(5)
bottomArea.circle(26, 555, 13, 13).attr({
    'fill': '#C08457',
    'opacity': 0.6
});

bottomArea.text(22, 560, '5').attr({
    'font-size': 15,
    'font-weight': 'bold'
});

var t5 = bottomArea.text(55, 565, ['哥哥听', '着', '音乐看书', '呢', '。']).click(handler05).attr({
    'font-size': 27,
    'cursor': 'pointer',
});

t5.selectAll('tspan')[1].attr({
    // x: 129,
    'fill': 'red'
});

t5.selectAll('tspan')[3].attr({
    // x: 255,
    'fill': 'red'
});

bottomArea.text(55, 600, '형은 음악을 들으면서 책을 읽습니다.').attr({
    'font-size': 18,
    'fill': 'gray'
});


function handler05() {
    var audio5 = new Audio('aud/gram10.mp3');
    audio5.play();
}
