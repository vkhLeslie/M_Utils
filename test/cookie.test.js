describe('Cookie API:', function () {
    describe('#getCookie()', function () {
        before(function () {
            m_utils.setCookie('test', 'getTestValue')
        })
        it(`m_utils.getCookie('test', 'getTestValue') should return true`, function () {
            assert(m_utils.getCookie('test') === 'getTestValue')
        })
        after(function () {
            m_utils.removeCookie('test')
        })
    })

    describe('#removeCookie()', function () {
        before(function () {
            m_utils.setCookie('test', 'removeTestValue')
        })
        it(`m_utils.removeCookie('test') should return false`, function () {
            m_utils.removeCookie('test')
            assert.notEqual(m_utils.getCookie('test') === 'removeTestValue')
        })
    })

    describe('#setCookie()', function () {
        it(`m_utils.getCookie('test', 'setCookie') should return true`, function () {
            m_utils.setCookie('test', 'setCookie')
            assert(m_utils.getCookie('test') === 'setCookie')
        })
        after(function () {
            m_utils.removeCookie('test')
        })
    })
})