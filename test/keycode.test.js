describe('Keycode API:', function () {

    describe('#getKeyName()', function () {
        it(`mutils.getKeyName(13) should return "Enter"`, function () {
            assert(mutils.getKeyName(13) === 'Enter')
        });
    });

});