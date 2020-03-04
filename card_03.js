var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

//이미지
var login = Paper.image('../img/login.png', 0, 0, 30, 45).toDefs();
// var arrow1 = Paper.image('arrow1.png', 0, 0, 20, 20).toDefs();
var arrow2 = Paper.image('arrow2.png', 0, 0, 20, 20).toDefs();

// SVG 외곽선
Paper.rect(0, 0, 360, 640, 6).attr({
    'stroke': 'gray',
    'fill': 'none'
});

// 상단 바 부분
var topBox = Paper.g();

topBox.path('M1 40 L359 40 L359 0 Q358 1 358 1 L1 1').attr({
    'fill': '#d3e7b9'
});
// topBox.rect(11, 6, 32, 28).click(handlerBon).attr({
//   'fill': '#d3e7b9',
//   'cursor': 'pointer'
// });
topBox.text(280, 27, '가 활용03').attr({
  'font-size': 18
});

for (var i = 0; i < 3; i++) {
  topBox.line(15, 13 + (i * 8), 40, 13 + (i * 8)).attr({
    'stroke': 'black',
    'cursor': 'pointer'
  });
}

// function handlerBon() {
//   location.replace('bon_03.html');
// }


// 한자 미니카드
var cardArea = Paper.g();
var hanjas1 = ['人', '大', '羊', '牛'];
var means1 = ['사람 인', '큰 대', '양 양', '소 우'];
var hanjas2 = ['女', '子', '立', '象', '鹿', '虎'];
var means2 = ['여자 녀', '아들 자', '설 립', '코끼리 상', '사슴 록', '호랑이 호'];

cardArea.rect(8, 60, 345, 270).attr({
    'fill': '#c3d8d8',
    'opacity': 0.7
});
cardArea.text(43, 140, '가05').attr({
    'font-family': 'Sans-Serif',
    'font-size': 25,
    'fill': '#223C6F',
    'font-weight': 'bold'
});

cardArea.rect(8, 340, 345, 270).attr({
    'fill': '#c3d8d8',
    'opacity': 0.7
});
cardArea.text(43, 420, '가06').attr({
    'font-family': 'Sans-Serif',
    'font-size': 25,
    'fill': '#223C6F',
    'font-weight': 'bold'
});

for (var i = 0; i < 4; i++) {
    cardArea.rect(130 + (i % 2) * 115, 70 + Math.floor(i / 2) * 280, 100, 120, 3, 3).attr({
        'fill': 'white',
        'stroke': 'gray'
    });

    cardArea.text(180 + (i % 2) * 115, 130 + Math.floor(i / 2) * 280, hanjas1[i]).attr({
        'font-size': 50,
        'text-anchor': 'middle'
    });

    cardArea.text(180 + (i % 2) * 115, 170 + Math.floor(i / 2) * 280, means1[i]).attr({
        'font-size': 20,
        'text-anchor': 'middle'
    });

}

for (var j = 0; j < 6; j++) {
    cardArea.rect(15 + (j % 3) * 115, 200 + (j % 2) * 280, 100, 120, 3, 3).attr({
        'fill': 'white',
        'stroke': 'gray'
    });

    cardArea.text(65 + (j % 3) * 115, 260 + (j % 2) * 280, hanjas2[j]).attr({
        'font-size': 50,
        'text-anchor': 'middle'
    });

    cardArea.text(65 + (j % 3) * 115, 300 + (j % 2) * 280, means2[j]).attr({
        'font-size': 20,
        'text-anchor': 'middle'
    });

}

// arrow1.use().transform('t10, 610').click(handler01).appendTo(Paper);
// function handler01() {
//     location.replace('bon_03.html');
// }
arrow2.use().transform('t330, 610').click(handler02).appendTo(Paper);
function handler02() {
    location.replace('game_03.html');
}
