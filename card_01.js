var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

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
topBox.text(280, 27, '가 활용01').attr({
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
var hanjas1 = ['口', '目', '日', '月'];
var means1 = ['입 구', '눈 목', '날 일', '달 월'];
var hanjas2 = ['耳', '水', '力', '火', '手', '木'];
var means2 = ['귀 이', '물 수', '힘 력', '불 화', '손 수', '나무 목'];

cardArea.rect(8, 50, 345, 270).attr({
    'fill': '#c3d8d8',
    'opacity': 0.7
});
cardArea.text(43, 130, '가01').attr({
    'font-family': 'Sans-Serif',
    'font-size': 25,
    'fill': '#223C6F',
    'font-weight': 'bold'
});

cardArea.rect(8, 330, 345, 270).attr({
    'fill': '#c3d8d8',
    'opacity': 0.7
});
cardArea.text(43, 410, '가02').attr({
    'font-family': 'Sans-Serif',
    'font-size': 25,
    'fill': '#223C6F',
    'font-weight': 'bold'
});

for (var i = 0; i < 4; i++) {
    cardArea.rect(130 + (i % 2) * 115, 60 + Math.floor(i / 2) * 280, 100, 120, 3, 3).attr({
        'fill': 'white',
        'stroke': 'gray'
    });

    cardArea.text(180 + (i % 2) * 115, 120 + Math.floor(i / 2) * 280, hanjas1[i]).attr({
        'font-size': 50,
        'text-anchor': 'middle'
    });

    cardArea.text(180 + (i % 2) * 115, 160 + Math.floor(i / 2) * 280, means1[i]).attr({
        'font-size': 20,
        'text-anchor': 'middle'
    });

}

for (var j = 0; j < 6; j++) {
    cardArea.rect(15 + (j % 3) * 115, 190 + (j % 2) * 280, 100, 120, 3, 3).attr({
        'fill': 'white',
        'stroke': 'gray'
    });

    cardArea.text(65 + (j % 3) * 115, 250 + (j % 2) * 280, hanjas2[j]).attr({
        'font-size': 50,
        'text-anchor': 'middle'
    });

    cardArea.text(65 + (j % 3) * 115, 290 + (j % 2) * 280, means2[j]).attr({
        'font-size': 20,
        'text-anchor': 'middle'
    });

}

// 하단 버튼
var buttonArea = Paper.g();

var redB = buttonArea.rect(150, 610, 85, 23).attr({
  'fill': '#E9967A',
  'opacity' : 0.8,
  'rx': 8,
  'ry': 8
});
var redBT = buttonArea.text(167, 626, '깜빡이 카드').attr({
  'fill': 'black',
  'font-size': 12
});
var red = buttonArea.g(redB, redBT).click(handler01).attr({
  'cursor': 'pointer'
});

var orangeB = buttonArea.rect(260, 610, 85, 23).attr({
  'fill': '#DAA520',
  'opacity' : 0.8,
  'rx': 8,
  'ry': 8
});
var orangeBT = buttonArea.text(280, 626, '게임 도전!').attr({
  'fill': 'black',
  'font-size': 12
});
var orange = buttonArea.g(orangeB, orangeBT).click(handler02).attr({
  'cursor': 'pointer'
});

function handler01() {
  location.replace('flash_01-01.html');
}
function handler02() {
  location.replace('game_01.html');
}
