/// <reference path="./lib/jquery/jquery.d.ts" />
/// <reference path="./lib/angularjs/angular.d.ts" />

module App {
	export interface MainScope extends ng.IScope {
		name: string;
	}

	export class MainController {
		items: string[];

		constructor(private $scope:MainScope) {
			this.$scope.name = "Shirataki"
		}
		add(item:string): void {
			this.items.push(item);
		}
	}
}

angular.module("app", [])
.controller("MainController", ["$scope", 
	($scope:ng.IScope):App.MainController => {
		return new App.MainController(<App.MainScope>$scope);
	}
]);