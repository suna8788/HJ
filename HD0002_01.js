// D02 문법(1)
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
    location.replace('HD0002.html');
}

topBox.text(180, 30, 'D02_문법(1)').attr({
    'font-size': 20,
    'text-anchor': 'middle'
});

migi02.use().transform('t325, 8').appendTo(topBox).click(handlerNext).attr({
    'cursor': 'pointer'
});

function handlerNext() {
    location.replace('HD0002_02.html');
}

// 상단
var topArea = Paper.g();

topArea.rect(50, 80, 270, 60, 3).attr({
    'stroke': '#C08457',
    'stroke-width': 2,
    'fill': 'none'
});

gram01.use().transform('t15, 60').appendTo(topArea);

topArea.text(120, 120, '동태조사 过').attr({
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

var t1 = bottomArea.text(55, 200, ['我去', '过', '北京。']).click(handler01).attr({
    'font-size': 27,
    'cursor': 'pointer',
});

t1.selectAll('tspan')[1].attr({
    // x: 102,
    'fill': 'red'
});

bottomArea.text(55, 235, '나는 북경에 가본 적이 있습니다.').attr({
    'font-size': 18,
    'fill': 'gray'
});

function handler01() {
    var audio1 = new Audio('aud/gram01.mp3');
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

var t2 = bottomArea.text(55, 295, ['你去', '过', '上海吗?']).click(handler02).attr({
    'font-size': 27,
    'cursor': 'pointer',
});

t2.selectAll('tspan')[1].attr({
    // x: 106,
    'fill': 'red'
});

bottomArea.text(55, 330, '당신은 상해에 가본 적이 있습니까?').attr({
    'font-size': 18,
    'fill': 'gray'
});

function handler02() {
    var audio2 = new Audio('aud/gram02.mp3');
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

var t3 = bottomArea.text(55, 385, ['没', '去', '过', '。']).click(handler03).attr({
    'font-size': 27,
    'cursor': 'pointer',
});

t3.selectAll('tspan')[0].attr({
    'fill': 'red',
});

t3.selectAll('tspan')[2].attr({
    // x: 106,
    'fill': 'red'
});

bottomArea.text(55, 420, '가본 적이 없습니다.').attr({
    'font-size': 18,
    'fill': 'gray'
});

function handler03() {
    var audio3 = new Audio('aud/gram03.mp3');
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

var t4 = bottomArea.text(55, 475, ['他去', '过', '天津没有？']).click(handler04).attr({
    'font-size': 27,
    'cursor': 'pointer',
});

t4.selectAll('tspan')[1].attr({
    // x: 102,
    'fill': 'red'
});

bottomArea.text(55, 510, '그는 천진에 가본 적이 있습니까？').attr({
    'font-size': 18,
    'fill': 'gray'
});

function handler04() {
    var audio4 = new Audio('aud/gram04.mp3');
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

var t5 = bottomArea.text(55, 565, ['他', '还没', '去', '过', '天津。']).click(handler05).attr({
    'font-size': 27,
    'cursor': 'pointer',
});

t5.selectAll('tspan')[1].attr({
    // x: 78,
    'fill': 'red'
});

t5.selectAll('tspan')[3].attr({
    // x: 157,
    'fill': 'red'
});

bottomArea.text(55, 600, '그는 아직 천진에 가본 적이 없습니다.').attr({
    'font-size': 18,
    'fill': 'gray'
});


function handler05() {
    var audio5 = new Audio('aud/gram05.mp3');
    audio5.play();
}
