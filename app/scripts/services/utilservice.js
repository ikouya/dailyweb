'use strict';

angular.module('dailyWebApp')
    .factory('util', [function() {



    return {

      getSystemDate:function(){
        var gettime = {};
        var hiduke= new Date();
        //年・月・日・曜日を取得する
        gettime["year"] = hiduke.getFullYear();
        gettime["month"] = hiduke.getMonth()+1;
        gettime["week"] = hiduke.getDay();
        gettime["day"] = hiduke.getDate();
        gettime["yobi"] = new Array("日","月","火","水","木","金","土");
        console.log(gettime);
        
        return gettime;
      }
    };
  }]);
