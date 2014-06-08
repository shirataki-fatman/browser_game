var App;
(function (App) {
    (function (service) {
        var WeaponModel = (function () {
            function WeaponModel() {
            }
            return WeaponModel;
        })();
        service.WeaponModel = WeaponModel;
    })(App.service || (App.service = {}));
    var service = App.service;
})(App || (App = {}));
