describe('Class API:', function () {
    describe('#addClass()', function () {
        let $ele = null
        before(function () {
            let div = document.createElement('div')
            div.id = 'J_addClass'
            document.body.appendChild(div)
            $ele = document.querySelector('#J_addClass')
        })
        it(`m_utils.addClass($ele, 'test') should return true`, function () {
            m_utils.addClass($ele, 'test')
            assert(m_utils.hasClass($ele, 'test'))
        });
        after(function () {
            document.body.removeChild($ele)
        })
    });

    describe('#hasClass()', function () {
        let $ele = null
        before(function () {
            let div = document.createElement('div')
            div.id = 'J_hasClass'
            document.body.appendChild(div)
            $ele = document.querySelector('#J_hasClass')
            m_utils.addClass($ele, 'test')
        })
        it(`m_utils.hasClass($ele, 'test') should return true`, function () {
            assert(m_utils.hasClass($ele, 'test'))
        });
        after(function () {
            document.body.removeChild($ele)
        })
    });

    describe('#removeClass()', function () {
        let $ele = null
        before(function () {
            let div = document.createElement('div')
            div.id = 'J_removeClass'
            document.body.appendChild(div)
            $ele = document.querySelector('#J_removeClass')
            m_utils.addClass($ele, 'test')
        })
        it(`m_utils.removeClass($ele, 'test') should return false`, function () {
            m_utils.removeClass($ele, 'test')
            assert.notEqual(m_utils.hasClass($ele, 'test'))
        });
        after(function () {
            document.body.removeChild($ele)
        })
    });
});