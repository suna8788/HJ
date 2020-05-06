// D01 단어
var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

//이미지
var home = Paper.image('img/home.png', 0, 0, 30, 30).toDefs();
var face = Paper.image('img/face.png', 0, 0, 35, 35).toDefs();
var voca01 = Paper.image('img/voca01.png', 0, 0, 70, 70).toDefs();
var voca02 = Paper.image('img/voca02.png', 0, 0, 70, 70).toDefs();
var voca03 = Paper.image('img/voca03.png', 0, 0, 75, 70).toDefs();
var voca04 = Paper.image('img/voca04.png', 0, 0, 70, 70).toDefs();
var voca05 = Paper.image('img/voca05.png', 0, 0, 75, 70).toDefs();
var voca06 = Paper.image('img/voca06.png', 0, 0, 70, 70).toDefs();


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
    location.replace('HD0001.html');
}

topBox.text(180, 30, 'D01_단어').attr({
    'font-size': 20,
    'text-anchor': 'middle'
});

//지시문
var topArea = Paper.g();

face.use().transform('t20, 50').appendTo(topArea);

topArea.text(65, 77, '쌍을 이루는 사물(양사 双을 쓰는 단어)').attr({
    'font-size': 18
});

topArea.line(180, 110, 180, 620).attr({
    'stroke': '#C3EBD9',
    'stroke-width': 4,
});

var bottomArea = Paper.g();

// 단어1
voca01.use().transform('t50, 110').appendTo(bottomArea).attr({
    'cursor': 'pointer'
});

bottomArea.text(80, 210, '신발').attr({
    'font-size': 20,
    'fill': 'gray',
    'text-anchor': 'middle',
});

bottomArea.rect(30, 220, 100, 50, 6).click(handler01).attr({
    'fill': 'white',
    'stroke':'gray',
    'cursor': 'pointer'
});

var t1 = bottomArea.text(80, 255, '?').click(handler01).attr({
    'fill':'gray',
    'font-size': 25,
    'text-anchor': 'middle',
    'cursor': 'pointer'
});

function handler01() {
    t1.attr({
        'fill': 'none'
    });

    bottomArea.rect(20, 215, 120, 70).click(handler01).attr({
        'fill': 'white',
        // 'stroke':'gray',
        'cursor': 'pointer'
    });

    bottomArea.text(65, 255, ['鞋']).attr({
        'font-family': 'notosans',
        'font-size': 28,
    });

    var audio1 = new Audio('aud/voca01.mp3');
    audio1.play();

}

// 단어2
voca02.use().transform('t230, 110').appendTo(bottomArea).attr({
    'cursor': 'pointer'
});

bottomArea.text(270, 210, '롤러브레이드').attr({
    'font-size': 20,
    'fill': 'gray',
    'text-anchor': 'middle',
});

bottomArea.rect(220, 220, 100, 50, 6).click(handler02).attr({
    'fill': 'white',
    'stroke':'gray',
    'cursor': 'pointer'
});

var t2 = bottomArea.text(270, 255, '?').click(handler02).attr({
    'fill':'gray',
    'font-size': 25,
    'text-anchor': 'middle',
    'cursor': 'pointer'
});

function handler02() {
    t2.attr({
        'fill': 'none'
    });

    bottomArea.rect(210, 215, 120, 60).click(handler02).attr({
        'fill': 'white',
        // 'stroke':'gray',
        'cursor': 'pointer'
    });

    bottomArea.text(235, 255, ['轮滑鞋']).attr({
        'font-family': 'notosans',
        'font-size': 28,
    });

    var audio2 = new Audio('aud/voca02.mp3');
    audio2.play();
}

// 단어3
voca03.use().transform('t45, 290').appendTo(bottomArea).attr({
    'cursor': 'pointer'
});

bottomArea.text(80, 390, '장갑').attr({
    'font-size': 20,
    'fill': 'gray',
    'text-anchor': 'middle',
});

bottomArea.rect(30, 400, 100, 50, 6).click(handler03).attr({
    'fill': 'white',
    'stroke':'gray',
    'cursor': 'pointer'
});

var t3 = bottomArea.text(80, 435, '?').click(handler03).attr({
    'fill':'gray',
    'font-size': 25,
    'text-anchor': 'middle',
    'cursor': 'pointer'
});

function handler03() {
    t3.attr({
        'fill': 'none'
    });

    bottomArea.rect(20, 395, 120, 70).click(handler03).attr({
        'fill': 'white',
        // 'stroke':'gray',
        'cursor': 'pointer'
    });

    bottomArea.text(55, 435, ['手套']).attr({
        'font-family': 'notosans',
        'font-size': 28,
    });

    var audio3 = new Audio('aud/voca03.mp3');
    audio3.play();

}

// 단어4
voca04.use().transform('t230, 290').appendTo(bottomArea).attr({
    'cursor': 'pointer'
});

bottomArea.text(270, 390, '양말').attr({
    'font-size': 20,
    'fill': 'gray',
    'text-anchor': 'middle',
});

bottomArea.rect(220, 400, 100, 50, 6).click(handler04).attr({
    'fill': 'white',
    'stroke':'gray',
    'cursor': 'pointer'
});

var t4 = bottomArea.text(270, 435, '?').click(handler04).attr({
    'fill':'gray',
    'font-size': 25,
    'text-anchor': 'middle',
    'cursor': 'pointer'
});

function handler04() {
    t4.attr({
        'fill': 'none'
    });

    bottomArea.rect(210, 395, 120, 60).click(handler04).attr({
        'fill': 'white',
        // 'stroke':'gray',
        'cursor': 'pointer'
    });

    bottomArea.text(245, 435, ['袜子']).attr({
        'font-family': 'notosans',
        'font-size': 28,
    });

    var audio4 = new Audio('aud/voca04.mp3');
    audio4.play();
}

// 단어5
voca05.use().transform('t49, 460').appendTo(bottomArea).attr({
    'cursor': 'pointer'
});

bottomArea.text(80, 555, '안경').attr({
    'font-size': 20,
    'fill': 'gray',
    'text-anchor': 'middle',
});

bottomArea.rect(30, 565, 100, 50, 6).click(handler05).attr({
    'fill': 'white',
    'stroke':'gray',
    'cursor': 'pointer'
});

var t5 = bottomArea.text(80, 600, '?').click(handler05).attr({
    'fill':'gray',
    'font-size': 25,
    'text-anchor': 'middle',
    'cursor': 'pointer'
});

function handler05() {
    t5.attr({
        'fill': 'none'
    });

    bottomArea.rect(20, 560, 120, 60).click(handler05).attr({
        'fill': 'white',
        // 'stroke':'gray',
        'cursor': 'pointer'
    });

    bottomArea.text(55, 600, ['眼镜']).attr({
        'font-family': 'notosans',
        'font-size': 28,
    });

    var audio5 = new Audio('aud/voca05.mp3');
    audio5.play();

}

// 단어6
voca06.use().transform('t230, 460').appendTo(bottomArea).attr({
    'cursor': 'pointer'
});

bottomArea.text(270, 555, '젓가락').attr({
    'font-size': 20,
    'fill': 'gray',
    'text-anchor': 'middle',
});

bottomArea.rect(220, 565, 100, 50, 6).click(handler06).attr({
    'fill': 'white',
    'stroke':'gray',
    'cursor': 'pointer'
});

var t6 = bottomArea.text(270, 600, '?').click(handler06).attr({
    'fill':'gray',
    'font-size': 25,
    'text-anchor': 'middle',
    'cursor': 'pointer'
});

function handler06() {
    t6.attr({
        'fill': 'none'
    });

    bottomArea.rect(210, 563, 120, 53).click(handler06).attr({
        'fill': 'white',
        // 'stroke':'gray',
        'cursor': 'pointer'
    });

    bottomArea.text(245, 600, ['筷子']).attr({
        'font-family': 'notosans',
        'font-size': 28,
    });

    var audio6 = new Audio('aud/voca06.mp3');
    audio6.play();
}
