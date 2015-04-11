'use strict';

angular.module('dailyWebApp')
    .factory('util', [function() {



    return {

      getSystemDate:function(){
        var gettime = {};
        var orgDate= new Date();
        //年・月・日・曜日を取得する
        gettime["year"]  = orgDate.getFullYear();
        gettime["month"] = orgDate.getMonth()+1;
        gettime["week"]  = orgDate.getDay();
        gettime["day"]   = orgDate.getDate();
        gettime["yobi"]  = new Array("日","月","火","水","木","金","土");
        console.log(gettime);

        return gettime;
      }
    };
  }]);
