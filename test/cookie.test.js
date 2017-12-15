describe('Cookie API:', function () {
    describe('#getCookie()', function () {
        before(function () {
            mutils.setCookie('test', 'getTestValue')
        })
        it(`mutils.getCookie('test', 'getTestValue') should return true`, function () {
            assert(mutils.getCookie('test') === 'getTestValue')
        })
        after(function () {
            mutils.removeCookie('test')
        })
    })

    describe('#removeCookie()', function () {
        before(function () {
            mutils.setCookie('test', 'removeTestValue')
        })
        it(`mutils.removeCookie('test') should return false`, function () {
            mutils.removeCookie('test')
            assert.notEqual(mutils.getCookie('test') === 'removeTestValue')
        })
    })

    describe('#setCookie()', function () {
        it(`mutils.getCookie('test', 'setCookie') should return true`, function () {
            mutils.setCookie('test', 'setCookie')
            assert(mutils.getCookie('test') === 'setCookie')
        })
        after(function () {
            mutils.removeCookie('test')
        })
    })
})