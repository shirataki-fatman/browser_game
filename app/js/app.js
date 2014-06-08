/// <reference path="./lib/jquery/jquery.d.ts" />
/// <reference path="./lib/angularjs/angular.d.ts" />
var App;
(function (App) {
    var MainController = (function () {
        function MainController($scope) {
            this.$scope = $scope;
            this.$scope.name = "Shirataki";
        }
        MainController.prototype.add = function (item) {
            this.items.push(item);
        };
        return MainController;
    })();
    App.MainController = MainController;
})(App || (App = {}));

angular.module("app", []).controller("MainController", [
    "$scope",
    function ($scope) {
        return new App.MainController($scope);
    }
]);
