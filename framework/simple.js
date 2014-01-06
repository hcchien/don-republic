// Generated by LiveScript 1.2.0
ctrl.simpletab = function($scope){
  $scope.tab = 2;
  return $scope.active = function(a, b){
    if (a === b) {
      return 'active';
    } else {
      return "";
    }
  };
};
ctrl.simplebase = function($scope, DataService){
  var k, v;
  angular.element('body').scope().tab = 2;
  angular.element('#current-proposal').scope().cur = ((function(){
    var ref$, results$ = [];
    for (k in ref$ = DataService.proposal.ref) {
      v = ref$[k];
      results$.push([k, v]);
    }
    return results$;
  }())[0] || [])[1] || {};
  $scope.proposal = {
    ref: DataService.proposal.ref,
    s: function(){
      return angular.element('#current-proposal').scope();
    }
  };
  $scope.color = d3.scale.category20();
  return $scope.$watch('proposal.ref', function(){
    var s;
    $scope.id = $scope.proposal.ref.$getIndex()[0] || null;
    s = $scope.proposal.s();
    s.propCur = $scope.id
      ? $scope.proposal.ref[$scope.id]
      : {};
    s.cs = s.choiceState(s.propCur);
    return $scope.propCur = s.propCur;
  }, true);
};