'use strict';

angular.module('dailyWebApp')
    .factory('util', [function() {

    return {
      getSystemDate:function(){


        var hiduke= new Date();

        //年・月・日・曜日を取得する
        var year = hiduke.getFullYear();
        var month = hiduke.getMonth()+1;
        var week = hiduke.getDay();
        var day = hiduke.getDate();

        var yobi= new Array("日","月","火","水","木","金","土");

        return ("西暦"+year+"年"+month+"月"+day+"日 "+yobi[week]+"曜日");

      }
    };
  }]);
