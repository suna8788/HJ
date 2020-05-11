// D02 단어
var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

//이미지
var home = Paper.image('img/home.png', 0, 0, 30, 30).toDefs();
var face = Paper.image('img/face.png', 0, 0, 35, 35).toDefs();
var voca01 = Paper.image('img/voca01.png', 0, 0, 330, 230).toDefs();

// SVG 외곽선
Paper.rect(0, 0, 360, 640, 6).attr({
    'stroke': 'gray',
    'fill': 'none'
});

// 상단 바 부분
var topBox = Paper.g();

topBox.path('M1 40 L359 40 L359 0 Q358 1 358 1 L1 1').attr({
    'fill': '#7FD3C3',
    'opacity': 0.6
});

home.use().transform('t14, 6').appendTo(topBox).click(handlerHome).attr({
    'cursor': 'pointer'
});

function handlerHome() {
    location.replace('HD0002.html');
}

topBox.text(180, 30, 'D02_단어').attr({
    'font-size': 20,
    'text-anchor': 'middle'
});

//지시문
var topArea = Paper.g();

face.use().transform('t20, 60').appendTo(topArea);

topArea.text(65, 87, '중국의 도시').attr({
    'font-size': 18
});

topArea.rect(10, 150, 330, 250).attr({
    'fill': 'none',
    'stroke': 'gray',
    'stroke-width': 1
});


topArea.text(65, 120, '* 빨간 동그라미를 클릭해 보세요.').attr({
    'font-size': 16
});


//단어 이미지
var bottomArea = Paper.g();
voca01.use().transform('t10, 150').appendTo(bottomArea);

// 단어(1) 북경
bottomArea.circle(240, 238, 5, 5).click(pop01).attr({
    'stroke': 'red',
    'fill': 'red',
    'cursor': 'pointer'
});

function pop01() {
    var group = Paper.g();
    group.rect(50, 240, 255, 180, 5).attr({
        'stroke': 'gray',
        'fill': 'white',
        'opacity': 0.9
    });
    group.text(180, 330, '北京').attr({
        'font-size': 70,
        'text-anchor': 'middle'
    });
    group.text(180, 390, '북경').attr({
        'font-size': 25,
        'text-anchor': 'middle'
    });

    var audio1 = new Audio('aud/voca01.mp3');
    audio1.play();

    setTimeout(function() {
        group.remove();
    }, 1500);
}


// 단어(2) 천진
bottomArea.circle(245, 250, 5, 5).click(pop02).attr({
    'stroke': 'red',
    'fill': 'red',
    'cursor': 'pointer'
});

function pop02() {
    var group = Paper.g();
    group.rect(50, 240, 255, 180, 5).attr({
        'stroke': 'gray',
        'fill': 'white',
        'opacity': 0.9
    });
    group.text(180, 330, '天津').attr({
        'font-size': 70,
        'text-anchor': 'middle'
    });
    group.text(180, 390, '천진').attr({
        'font-size': 25,
        'text-anchor': 'middle'
    });

    var audio2 = new Audio('aud/voca02.mp3');
    audio2.play();

    setTimeout(function() {
        group.remove();
    }, 1500);
}

// 단어(3) 계림
bottomArea.circle(205, 330, 5, 5).click(pop03).attr({
    'stroke': 'red',
    'fill': 'red',
    'cursor': 'pointer'
});

function pop03() {
    var group = Paper.g();
    group.rect(50, 240, 255, 180, 5).attr({
        'stroke': 'gray',
        'fill': 'white',
        'opacity': 0.9
    });
    group.text(180, 330, '桂林').attr({
        'font-size': 70,
        'text-anchor': 'middle'
    });
    group.text(180, 390, '계림').attr({
        'font-size': 25,
        'text-anchor': 'middle'
    });

    var audio3 = new Audio('aud/voca03.mp3');
    audio3.play();

    setTimeout(function() {
        group.remove();
    }, 1500);
}

// 단어(4) 상해
bottomArea.circle(267, 295, 5, 5).click(pop04).attr({
    'stroke': 'red',
    'fill': 'red',
    'cursor': 'pointer'
});

function pop04() {
    var group = Paper.g();
    group.rect(50, 240, 255, 180, 5).attr({
        'stroke': 'gray',
        'fill': 'white',
        'opacity': 0.9
    });
    group.text(180, 330, '上海').attr({
        'font-size': 70,
        'text-anchor': 'middle'
    });
    group.text(180, 390, '상해').attr({
        'font-size': 25,
        'text-anchor': 'middle'
    });

    var audio4 = new Audio('aud/voca04.mp3');
    audio4.play();

    setTimeout(function() {
        group.remove();
    }, 1500);
}

// 단어(5) 심양
bottomArea.circle(269, 225, 5, 5).click(pop05).attr({
    'stroke': 'red',
    'fill': 'red',
    'cursor': 'pointer'
});

function pop05() {
    var group = Paper.g();
    group.rect(50, 240, 255, 180, 5).attr({
        'stroke': 'gray',
        'fill': 'white',
        'opacity': 0.9
    });
    group.text(180, 330, '沈阳').attr({
        'font-size': 70,
        'text-anchor': 'middle'
    });
    group.text(180, 390, '심양').attr({
        'font-size': 25,
        'text-anchor': 'middle'
    });

    var audio5 = new Audio('aud/voca05.mp3');
    audio5.play();

    setTimeout(function() {
        group.remove();
    }, 1500);
}

// 단어(6) 홍콩 팝업
bottomArea.circle(228, 345, 5, 5).click(pop06).attr({
    'stroke': 'red',
    'fill': 'red',
    'cursor': 'pointer'
});

function pop06() {
    var group = Paper.g();
    group.rect(50, 240, 255, 180, 5).attr({
        'stroke': 'gray',
        'fill': 'white',
        'opacity': 0.9
    });
    group.text(180, 330, '香港').attr({
        'font-size': 70,
        'text-anchor': 'middle'
    });
    group.text(180, 390, '홍콩').attr({
        'font-size': 25,
        'text-anchor': 'middle'
    });

    var audio6 = new Audio('aud/voca06.mp3');
    audio6.play();

    setTimeout(function() {
        group.remove();
    }, 1500);
}

// 단어01 북경
bottomArea.text(15, 465, '①').click(handler01).attr({
    'font-size': 23,
    'cursor': 'pointer'
});

bottomArea.text(45, 465, '北京').click(handler01).attr({
    'font-size': 30,
    'cursor': 'pointer'
});

bottomArea.text(115, 465, '북경').click(handler01).attr({
    'font-size': 23,
    'cursor': 'pointer'
});

function handler01() {
    var audio1 = new Audio('aud/voca01.mp3');
    audio1.play();
}

// 단어02 천진
bottomArea.text(190, 465, '②').click(handler02).attr({
    'font-size': 23,
    'cursor': 'pointer'
});

bottomArea.text(220, 465, '天津').click(handler02).attr({
    'font-size': 30,
    'cursor': 'pointer'
});

bottomArea.text(290, 465, '천진').click(handler02).attr({
    'font-size': 23,
    'cursor': 'pointer'
});

function handler02() {
    var audio2 = new Audio('aud/voca02.mp3');
    audio2.play();
}

// 단어03 북경
bottomArea.text(15, 525, '③').click(handler03).attr({
    'font-size': 23,
    'cursor': 'pointer'
});

bottomArea.text(45, 525, '桂林').click(handler03).attr({
    'font-size': 30,
    'cursor': 'pointer'
});

bottomArea.text(115, 525, '계림').click(handler03).attr({
    'font-size': 23,
    'cursor': 'pointer'
});

function handler03() {
    var audio3 = new Audio('aud/voca03.mp3');
    audio3.play();
}

// 단어04 천진
bottomArea.text(190, 525, '④').click(handler04).attr({
    'font-size': 23,
    'cursor': 'pointer'
});

bottomArea.text(220, 525, '上海').click(handler04).attr({
    'font-size': 30,
    'cursor': 'pointer'
});

bottomArea.text(290, 525, '상해').click(handler04).attr({
    'font-size': 23,
    'cursor': 'pointer'
});

function handler04() {
    var audio4 = new Audio('aud/voca04.mp3');
    audio4.play();
}

// 단어05 북경
bottomArea.text(15, 585, '⑤').click(handler05).attr({
    'font-size': 23,
    'cursor': 'pointer'
});

bottomArea.text(45, 585, '沈阳').click(handler05).attr({
    'font-size': 30,
    'cursor': 'pointer'
});

bottomArea.text(115, 585, '심양').click(handler05).attr({
    'font-size': 23,
    'cursor': 'pointer'
});

function handler05() {
    var audio5 = new Audio('aud/voca05.mp3');
    audio5.play();
}

// 단어06 천진
bottomArea.text(190, 585, '⑥').click(handler06).attr({
    'font-size': 23,
    'cursor': 'pointer'
});

bottomArea.text(220, 585, '香港').click(handler06).attr({
    'font-size': 30,
    'cursor': 'pointer'
});

bottomArea.text(290, 585, '홍콩').click(handler06).attr({
    'font-size': 23,
    'cursor': 'pointer'
});

function handler06() {
    var audio6 = new Audio('aud/voca06.mp3');
    audio6.play();
}
