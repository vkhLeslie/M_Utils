describe('Array API:', function () {
    describe('#arrayEqual()', function () {
        it(`m_utils.arrayEqual([0, 2, 3], [1, 2, 3]) should return false`, function () {
            assert.notEqual(m_utils.arrayEqual([0, 2, 3], [1, 2, 3]))
        });
        it('m_utils.arrayEqual([1, 2, 3], [1, 2, 3]) should return true', function () {
            assert(m_utils.arrayEqual([1, 2, 3], [1, 2, 3]))
        });
        let arr = [8, 2, 3, 4, 7, 8]
        it(`m_utils.arrayEqual([${arr},${arr}]) should return true`, function () {
            assert(m_utils.arrayEqual(arr, arr))
        });
    });
});