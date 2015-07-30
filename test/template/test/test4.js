test("test", function (driver) {
    inject(driver, "(function(){var object = document.createEvent('KeyboardEvent'); object.keyCode = 27; alert(object.keyCode);}());");
});
