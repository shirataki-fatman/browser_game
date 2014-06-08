var App;
(function (App) {
    (function (service) {
        var NationModel = (function () {
            function NationModel() {
            }
            return NationModel;
        })();
        service.NationModel = NationModel;
    })(App.service || (App.service = {}));
    var service = App.service;
})(App || (App = {}));
