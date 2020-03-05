// 가등급 5~6세트 학습목표
var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

//이미지
var doctor = Paper.image('doctor.png', 0, 0, 130, 150).toDefs();

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

topBox.rect(11, 6, 32, 28).click(handler01).attr({
  'fill': '#d3e7b9',
  'cursor': 'pointer'
});

for (var i = 0; i < 3; i++) {
  topBox.line(15, 13 + (i * 8), 40, 13 + (i * 8)).attr({
    'stroke': 'black',
    'cursor': 'pointer'
  });
}

topBox.text(280, 27, '가 활용04').attr({
  'font-size': 18
});

function handler01() {
  location.replace('flash_04-01.html');
}

// 상단
var hanjaArea = Paper.g();

hanjaArea.text(180, 180, '한자를 보고').attr({
  'font-size': 40,
  'text-anchor': 'middle'
});
hanjaArea.text(180, 260, '뜻음을 말해 보세요.').attr({
  'font-size': 40,
  'text-anchor': 'middle'
});
doctor.use().transform('t110, 310').appendTo(hanjaArea);


setTimeout(function() {
  location.replace('flash_04-02.html');
}, 4000);
