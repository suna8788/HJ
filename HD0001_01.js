// D01 문법(1)
var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

//이미지
var home = Paper.image('img/home.png', 0, 0, 30, 30).toDefs();
var migi02 = Paper.image('img/migi02.png', 0, 0, 25, 25).toDefs();
var gram01 = Paper.image('img/gram01.png', 0, 0, 60, 60).toDefs();

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
    location.replace('HD0001.html');
}

topBox.text(180, 30, 'D01_문법(1)').attr({
    'font-size': 20,
    'text-anchor': 'middle'
});

migi02.use().transform('t325, 8').appendTo(topBox).click(handlerNext).attr({
    'cursor': 'pointer'
});

function handlerNext() {
    location.replace('HD0001_02.html');
}

// 상단
var topArea = Paper.g();

topArea.rect(50, 80, 270, 60, 3).attr({
    'stroke': '#C08457',
    'stroke-width': 2,
    'fill': 'none'
});

gram01.use().transform('t15, 60').appendTo(topArea);

topArea.text(120, 120, '동태조사 了').attr({
    'font-size': 25,
    'font-family': 'NanumGothic',
    'font-weight': 'bold'
});

// 학습내용
var bottomArea = Paper.g();

//문장(1)
bottomArea.circle(26, 220, 13, 13).attr({
    'fill': '#C08457',
    'opacity': 0.6
});

bottomArea.text(23, 225, '1').attr({
    'font-size': 15,
    'font-weight': 'bold'
});

var t1 = bottomArea.text(55, 230, ['我来', '了', '。']).click(handler01).attr({
    'font-size': 28,
    'cursor': 'pointer',
});

t1.selectAll('tspan')[1].attr({
    // x: 107,
    'fill': 'red'
});

bottomArea.text(55, 265, '저 왔습니다.').attr({
    'font-size': 18,
    'fill': 'gray'
});

function handler01() {
    var audio1 = new Audio('aud/gram01.mp3');
    audio1.play();
}

//문장(2)
bottomArea.circle(26, 320, 13, 13).attr({
    'fill': '#C08457',
    'opacity': 0.6
});

bottomArea.text(23, 325, '2').attr({
    'font-size': 15,
    'font-weight': 'bold'
});

var t2 = bottomArea.text(55, 330, ['他回来', '了', '吗?']).click(handler02).attr({
    'font-size': 28,
    'cursor': 'pointer',
});

t2.selectAll('tspan')[1].attr({
    // x: 132,
    'fill': 'red'
});

bottomArea.text(55, 365, '그는 돌아왔습니까?').attr({
    'font-size': 18,
    'fill': 'gray'
});


function handler02() {
    var audio2 = new Audio('aud/gram02.mp3');
    audio2.play();
}

//문장(3)
bottomArea.circle(26, 420, 13, 13).attr({
    'fill': '#C08457',
    'opacity': 0.6
});

bottomArea.text(23, 425, '3').attr({
    'font-size': 15,
    'font-weight': 'bold'
});

var t3 = bottomArea.text(55, 430, ['你买', '了','什么?']).click(handler03).attr({
    'font-size': 28,
    'cursor': 'pointer',
});

t3.selectAll('tspan')[1].attr({
    // x: 112,
    'fill': 'red'
});

bottomArea.text(55, 465, '당신은 무엇을 샀습니까?').attr({
    'font-size': 18,
    'fill': 'gray'
});

function handler03() {
    var audio3 = new Audio('aud/gram03.mp3');
    audio3.play();
}

//문장(4)
bottomArea.circle(26, 520, 13, 13).attr({
    'fill': '#C08457',
    'opacity': 0.6
});

bottomArea.text(22, 526, '4').attr({
    'font-size': 15,
    'font-weight': 'bold'
});

var t4 = bottomArea.text(55, 530, ['我买','了','一双运动鞋。']).click(handler04).attr({
    'font-size': 28,
    'cursor': 'pointer',
});

t4.selectAll('tspan')[1].attr({
    // x: 108,
    'fill': 'red'
});

bottomArea.text(55, 565, '나는 운동화를 한 켤레 샀습니다.').attr({
    'font-size': 18,
    'fill': 'gray'
});


function handler04() {
    var audio4 = new Audio('aud/gram04.mp3');
    audio4.play();
}
