describe('Object API:', function () {
    describe('#deepClone()', function () {
        it(`person deepEqual mutils.deepClone(person) should return true`, function () {
            let person = {
                name: "user",
                settings: {
                    first: "1",
                    second: [1, 2, 3, 4, 3]
                }
            }
            assert.deepEqual(person, mutils.deepClone(person))
        });

        it(`person === mutils.deepClone(person) should return false`, function () {
            let person = {
                name: "user",
                settings: {
                    first: "1",
                    second: [1, 2, 3, 4, 3]
                }
            }
            assert.notEqual(person, mutils.deepClone(person))
        });
    });

    describe('#isEmptyObject()', function () {
        it(`mutils.isEmptyObject({}) should return true`, function () {
            assert(mutils.deepClone({}))
        });

        it(`mutils.isEmptyObject({ one: 1 }) should return false`, function () {
            assert.notEqual(mutils.isEmptyObject({
                one: 1
            }))
        });

        it(`mutils.isEmptyObject([]) should return false`, function () {
            assert.notEqual(mutils.isEmptyObject([]))
        });
    });
})