// Game1
var HT004 = {
  paper: Paper.g(),
  pairInfo: [],
  condition: {
    grade: '가',
    setRange: [7, 8]
  },
  configure: function() {
    var self = HT004;

    self.pairInfo = Library.generatePairGame({
      condition: self.condition
    });

  },

  makeQuestion: function() {
    var self = HT004;
    var questionInfo = self.pairInfo;

    // 문제 그리기
    var questions = Library.drawPairGame({
      paper: self.paper,
      questionInfo: questionInfo
    });

    Library.checkPairGame({
      questions: questions,
      callback: self.report
    });
  },

  report: function(userTime) {
    var self = HT004;
    self.paper.clear();

    var reportG = self.paper.g();
    var record = (userTime / 1000).toFixed(1);
    Paper.text(180, 170, record + '초').attr({
      'fill': 'orange',
      'font-size': 40,
      'font-wieght': 'bold',
      'text-anchor': 'middle'
    });
    reportG.image('report02.png', 110, 220, 140, 160);
    var redB = reportG.rect(36, 410, 120, 30).attr({
      'fill': '#f8371f',
      'rx': 8,
      'ry': 8
    });
    var redBT = reportG.text(80, 430, '재도전').attr({
      'fill': 'white',
      'font-size': 13
    });
    var red = reportG.g(redB, redBT).click(handler01).attr({
      'cursor': 'pointer'
    });
    var orangeB = reportG.rect(200, 410, 120, 30).attr({
      'fill': '#fe9b00',
      'rx': 8,
      'ry': 8
    });
    var orangeBT = reportG.text(240, 430, '다음으로').attr({
      'fill': 'white',
      'font-size': 13
    });
    var orange = reportG.g(orangeB, orangeBT).click(handler02).attr({
      'cursor': 'pointer'
    });

    function handler01() {
      location.reload();
    }

    function handler02() {
      location.replace('hwal_05.html');
    }
  },

  start: function() {
    var self = HT004;
    self.configure();
    self.makeQuestion();
  }
};

HT004.start();
