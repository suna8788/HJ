// D02 홈화면
var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

//이미지
var bi = Paper.image('img/bi.jpg', 0, 0, 270, 40).toDefs();
var start = Paper.image('img/start.png', 0, 0, 130, 130).toDefs();

// SVG 외곽선
Paper.rect(0, 0, 360, 640, 6).attr({
    'stroke': 'gray',
    'fill': 'none'
});

// 상단 바 부분
var topArea = Paper.g();

bi.use().transform('t45, 40').appendTo(topArea);

topArea.text(180, 135, '온라인 카드').attr({
    'font-size': 35,
    'text-anchor': 'middle'
});

start.use().transform('t110, 180').appendTo(topArea);

var t1 = topArea.text(20, 340, ['[D02]', '* 문법: 동태조사 过/着', '* 회화: 경험에 관해 이야기하기', '* 단어: 중국의 도시']).attr({
    'font-size': 18
});
t1.selectAll('tspan')[0].attr({
    x: 20,
    y: 360,
    'font-size': 22
});
t1.selectAll('tspan')[1].attr({
    x: 20,
    y: 395,
});
t1.selectAll('tspan')[2].attr({
    x: 20,
    y: 425,
});
t1.selectAll('tspan')[3].attr({
    x: 20,
    y: 455,
});

var r1 = topArea.rect(30, 510, 80, 50, 5).attr({
    'fill': '#D3A27F'
});
var t1 = topArea.text(70, 542, '문 법').attr({
    'font-family': 'NanumGothic',
    'font-size': 20,
    'text-anchor': 'middle',
    'font-weight': 'bold'
});

var rt1 = topArea.g(r1, t1).click(handler01).attr({
    'cursor': 'pointer'
});

var r2 = topArea.rect(135, 510, 80, 50, 5).attr({
    'fill': '#807FD3',
    'opacity': 0.7
});
var t2 = topArea.text(175, 542, '회 화').attr({
    'font-family': 'NanumGothic',
    'font-size': 20,
    'text-anchor': 'middle',
    'font-weight': 'bold'
});

var rt2 = topArea.g(r2, t2).click(handler02).attr({
    'cursor': 'pointer'
});

var r3 = topArea.rect(240, 510, 80, 50, 5).attr({
    'fill': '#7FD3C3',
    'opacity': 0.8
});
var t3 = topArea.text(280, 542, '단 어').attr({
    'font-family': 'NanumGothic',
    'font-size': 20,
    'text-anchor': 'middle',
    'font-weight': 'bold'
});

var rt3 = topArea.g(r3, t3).click(handler03).attr({
    'cursor': 'pointer'
});



function handler01() {
    location.replace('HD0002_01.html');
}

function handler02() {
    location.replace('HD0002_03.html');
}

function handler03() {
    location.replace('HD0002_04.html');
}
