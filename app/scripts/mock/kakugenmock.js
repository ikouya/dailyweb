'use strict';

angular.module('dailyWebApp')
.constant('kakugenMock', {

  'test1' :{
    msg:'やれることはやろうや'
  },
  'test2' :{
    msg:'先輩は後輩が育てる'
  },
  'test3' :{
    msg:'どんなに勉強し、勤勉であっても、上手くいかないこともある。\
    これは機がまだ熟していないからであるからますます自らを鼓舞して耐えなければならない。'
  },
  'test4' :{
    msg:'いいかい、怖かったら怖いほど、逆にそこに飛び込むんだ'
  },
  'test5' :{
    msg:'なるる'
  },
  'test6' :{
    msg:'ただ、勘違いしちゃいけないのは、下に落ちるっていうことが、\
            進化してないということではないんですよ。\
            下に落ちるのも、次に昇るための変化かもしれない。\
            昇るために、落ちることが必要なこともある。\n-　本田圭佑　-'
  },
  'test7' :{
    msg:'何でも思い切ってやってみることですよ。どっちに転んだって人間、\
         辺の石ころ同様、骨となって一生を終えるのだから。'
  },
  'test8' :{
    msg:'一日一日を大切に過ごしてください。\
        そして、\
        「今日はいい事がある。いい事がやってくる」\
        「今日はやりたい事が最後までできるんだ」\
        この事を思って生活してみてください。'
    },
  'test9' :{
    msg:'やれることはやろうや'
  },
  'test10' :{
    msg:'おれは楽しいほうへいく'
  }
})
.run(function ($httpBackend, kakugenMock) {
    console.log('httpbackend run');
    $httpBackend.whenGET(/views/).passThrough();
    $httpBackend.whenGET('/dailyweb/kakugen?1').respond(200, kakugenMock.test1, {});
    $httpBackend.whenGET('/dailyweb/kakugen?2').respond(200, kakugenMock.test2, {});
    $httpBackend.whenGET('/dailyweb/kakugen?3').respond(200, kakugenMock.test3, {});
    $httpBackend.whenGET('/dailyweb/kakugen?4').respond(200, kakugenMock.test4, {});
    $httpBackend.whenGET('/dailyweb/kakugen?5').respond(200, kakugenMock.test5, {});
    $httpBackend.whenGET('/dailyweb/kakugen?6').respond(200, kakugenMock.test6, {});
    $httpBackend.whenGET('/dailyweb/kakugen?7').respond(200, kakugenMock.test7, {});
    $httpBackend.whenGET('/dailyweb/kakugen?8').respond(200, kakugenMock.test8, {});
    $httpBackend.whenGET('/dailyweb/kakugen?9').respond(200, kakugenMock.test9, {});
    $httpBackend.whenGET('/dailyweb/kakugen?10').respond(200, kakugenMock.test10, {});


});
