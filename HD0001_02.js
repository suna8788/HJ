// D01 문법(2)
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
    location.replace('HD0001.html');
}

topBox.text(180, 30, 'D01_문법(2)').attr({
    'font-size': 20,
    'text-anchor': 'middle'
});

migi01.use().transform('t325, 8').appendTo(topBox).click(handlerBefore).attr({
    'cursor': 'pointer'
});

function handlerBefore() {
    location.replace('HD0001_01.html');
}

// 상단
var topArea = Paper.g();

topArea.rect(50, 80, 270, 60, 3).attr({
    'stroke': '#C08457',
    'stroke-width': 2,
    'fill': 'none'
});

gram02.use().transform('t15, 60').appendTo(topArea);

topArea.text(160, 120, '没有').attr({
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

var t1 = bottomArea.text(55, 230, ['你看了那本书', '没有', '？']).click(handler01).attr({
    'font-size': 28,
    'cursor': 'pointer',
});

t1.selectAll('tspan')[1].attr({
    x: 208,
    'fill': 'red'
});

bottomArea.text(55, 265, '당신은 그 책을 읽었습니까?').attr({
    'font-size': 18,
    'fill': 'gray'
});

function handler01() {
    var audio1 = new Audio('aud/gram05.mp3');
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

var t2 = bottomArea.text(55, 330, ['没有', '。']).click(handler02).attr({
    'font-size': 28,
    'cursor': 'pointer',
});

t2.selectAll('tspan')[0].attr({
    'fill': 'red'
});

bottomArea.text(55, 365, '아니요.').attr({
    'font-size': 18,
    'fill': 'gray'
});

function handler02() {
    var audio2 = new Audio('aud/gram06.mp3');
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

var t3 = bottomArea.text(55, 430, ['我', '没有', '买东西。']).click(handler03).attr({
    'font-size': 28,
    'cursor': 'pointer',
});

t3.selectAll('tspan')[1].attr({
    x: 80,
    'fill': 'red'
});

bottomArea.text(55, 465, '나는 물건을 사지 않았습니다.').attr({
    'font-size': 18,
    'fill': 'gray'
});

function handler03() {
    var audio3 = new Audio('aud/gram07.mp3');
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

var t4 = bottomArea.text(55, 530, ['他', '还没', '回来', '呢', '。']).click(handler04).attr({
    'font-size': 28,
    'cursor': 'pointer',
});

t4.selectAll('tspan')[1].attr({
    x: 80,
    'fill': 'red'
});

t4.selectAll('tspan')[3].attr({
    x: 188,
    'fill': 'red'
});

bottomArea.text(55, 565, '그는 아직 돌아오지 않았습니다.').attr({
    'font-size': 18,
    'fill': 'gray'
});


function handler04() {
    var audio4 = new Audio('aud/gram08.mp3');
    audio4.play();
}
