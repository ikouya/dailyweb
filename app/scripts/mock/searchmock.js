'use strict';

angular.module('dailyWebApp')
.constant('sampleMock', {

  'test' : {
      'code': 1,
      'msg': 'sample1'
  }
})
.run(function ($httpBackend, sampleMock) {
    console.log('httpbackend run');
    $httpBackend.whenGET(/^views\//).passThrough();
    $httpBackend.whenGET('/dailyweb/kakugen').respond(200, sampleMock.test, {});
});
