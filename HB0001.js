// B01 홈화면
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

var t1 = topArea.text(50, 350, ['[B01]', '* 문형: 동사 shì(~이다)', '* 회화: 만났을 때 인사하기']).attr({
    'font-size': 20
});
t1.selectAll('tspan')[0].attr({
    x: 50,
    y: 370,
    'font-size': 25
});
t1.selectAll('tspan')[1].attr({
    x: 50,
    y: 410,

});
t1.selectAll('tspan')[2].attr({
    x: 50,
    y: 440,
});

var r1 = topArea.rect(50, 490, 110, 50, 5).attr({
    'fill': '#F4D884'
});
var t1 = topArea.text(105, 523, '문 형').attr({
    'font-family': 'NanumGothic',
    'font-size': 23,
    'text-anchor': 'middle',
    'font-weight': 'bold'
});

var rt1 = topArea.g(r1, t1).click(handler01).attr({
    'cursor': 'pointer'
});

var r2 = topArea.rect(200, 490, 110, 50, 5).attr({
    'fill': '#DDEE99'
});
var t2 = topArea.text(255, 523, '회 화').attr({
    'font-family': 'NanumGothic',
    'font-size': 23,
    'text-anchor': 'middle',
    'font-weight': 'bold'
});

var rt2 = topArea.g(r2, t2).click(handler02).attr({
    'cursor': 'pointer'
});

function handler01() {
    location.replace('HB0001_01.html');
}

function handler02() {
    location.replace('HB0001_07.html');
}
