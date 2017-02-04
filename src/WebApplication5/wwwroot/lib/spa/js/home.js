$(function () {
    dxSample.home = function () {
        var viewModel = {
            message: ko.observable("Welcome!"),
            name: ko.observable(""),
            sayHello: function () {
                this.message("Hello " + this.name() + "!");
            },
            greet: function () {
                dxSample.app.navigate("greeting/" + this.name());
            }
        };
        return viewModel;
    };
});