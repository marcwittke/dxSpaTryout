$(function () {
    dxSample.greeting = function (params) {
        var viewModel = {
            message: ko.observable("Hello " + params.name + "!")
        }
        return viewModel;
    };
});