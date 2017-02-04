$(function () {
    dxSample.about = function () {
        var viewModel = {
            copyright: "Copyright (C) 2017 by Marc"
        };
        return viewModel;
    };
});
$(function () {
    dxSample.greeting = function (params) {
        var viewModel = {
            message: ko.observable("Hello " + params.name + "!")
        }
        return viewModel;
    };
});
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