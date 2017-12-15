describe('Random API:', function () {
    describe('#randomColor()', function () {
        it(`/^#[0-9a-fA-F]$/.test(m_utils.randomColor()) should return true`, function () {
            assert(/^#[0-9a-fA-F]{6}$/.test(m_utils.randomColor()))
        });
    });

    describe('#randomNum()', function () {
        it(`10 <= m_utils.randomNum(10, 1000) <= 100 should return true`, function () {
            let num = m_utils.randomNum(10, 1000)
            assert(num <= 1000 && num > 10)
        });
    });
})