describe('Keycode API:', function () {

    describe('#getKeyName()', function () {
        it(`m_utils.getKeyName(13) should return "Enter"`, function () {
            assert(m_utils.getKeyName(13) === 'Enter')
        });
    });

});