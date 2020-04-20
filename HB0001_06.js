// B01 문형(6)
var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

//이미지
var home = Paper.image('img/home.png', 0, 0, 26, 24).toDefs();
var migi01 = Paper.image('img/migi01.png', 0, 0, 21, 23).toDefs();
var voca06 = Paper.image('img/voca06.png', 0, 0, 180, 160).toDefs();

// SVG 외곽선
Paper.rect(0, 0, 360, 640, 6).attr({
    'stroke': 'gray',
    'fill': 'none'
});

// 상단 바 부분
var topBox = Paper.g();

topBox.path('M1 40 L359 40 L359 0 Q358 1 358 1 L1 1').attr({
    'fill': '#F4D884',
    'opacity': 0.8
});

home.use().transform('t14, 8').appendTo(topBox).click(handlerHome).attr({
    'cursor': 'pointer'
});

function handlerHome() {
    location.replace('HB0001.html');
}

migi01.use().transform('t15, 50').appendTo(topBox).click(handlerBefore).attr({
    'cursor': 'pointer'
});

function handlerBefore() {
    location.replace('HB0001_05.html');
}

topBox.text(180, 30, 'B01_문형').attr({
    'font-size': 20,
    'text-anchor': 'middle'
});

// 상단
var topArea = Paper.g();

voca06.use().transform('t90, 105').click(playAud01).appendTo(topArea).attr({
    'cursor': 'pointer'
});

var t1 = topArea.text(180, 320, ['yùndòngyuán', '운동선수(运动员)']).click(playAud01).attr({
    'font-family': 'notosans',
    'font-size': 40,
    'text-anchor': 'middle',
    'cursor': 'pointer'
});
t1.selectAll('tspan')[1].attr({
    x: 180,
    y: 370,
    'font-size': 25,
    'fill': 'gray',
    'text-anchor': 'middle',
    'cursor': 'pointer'
});

function playAud01() {
    var audio1 = new Audio('aud/voca06.mp3');
    audio1.play();
}

// 하단
var bottomArea = Paper.g();

bottomArea.rect(20, 430, 320, 170, 6).attr({
    'fill': '#FFF1E2'
});

bottomArea.text(180, 462, '나는 운동선수입니다.').attr({
    'font-size': 18,
    'text-anchor': 'middle'
});

bottomArea.rect(30, 480, 300, 100, 6).click(handler).attr({
    'fill': 'white',
    'cursor': 'pointer'
});

var t2 = bottomArea.text(180, 545, '?').click(handler).attr({
    'font-size': 30,
    'text-anchor': 'middle',
    'cursor': 'pointer'
});

function handler() {
    t2.attr({
        'fill': 'none'
    });

    var t3 = bottomArea.text(73, 540, ['Wǒ', 'shì', 'yùndòngyuán.']).attr({
        'font-family': 'notosans',
        'font-size': 26,
        'fill': 'gray'
    });
    t3.selectAll('tspan')[0].attr({
        x: 45,
        'fill': 'gray'
    });
    t3.selectAll('tspan')[1].attr({
        x: 95,
        'fill': 'orange'
    });
    t3.selectAll('tspan')[2].attr({
        x: 140,
        'fill': 'gray'
    });

    var audio2 = new Audio('aud/sen06.mp3');
    audio2.play();
}
