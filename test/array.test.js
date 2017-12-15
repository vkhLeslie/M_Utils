describe('Array API:', function () {
    describe('#arrayEqual()', function () {
        it(`mutils.arrayEqual([0, 2, 3], [1, 2, 3]) should return false`, function () {
            assert.notEqual(mutils.arrayEqual([0, 2, 3], [1, 2, 3]))
        });
        it('mutils.arrayEqual([1, 2, 3], [1, 2, 3]) should return true', function () {
            assert(mutils.arrayEqual([1, 2, 3], [1, 2, 3]))
        });
        let arr = [8, 2, 3, 4, 7, 8]
        it(`mutils.arrayEqual([${arr},${arr}]) should return true`, function () {
            assert(mutils.arrayEqual(arr, arr))
        });
    });
});