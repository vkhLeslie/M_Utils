describe('Object API:', function () {
    describe('#deepClone()', function () {
        it(`person deepEqual m_utils.deepClone(person) should return true`, function () {
            let person = {
                name: "user",
                settings: {
                    first: "1",
                    second: [1, 2, 3, 4, 3]
                }
            }
            assert.deepEqual(person, m_utils.deepClone(person))
        });

        it(`person === m_utils.deepClone(person) should return false`, function () {
            let person = {
                name: "user",
                settings: {
                    first: "1",
                    second: [1, 2, 3, 4, 3]
                }
            }
            assert.notEqual(person, m_utils.deepClone(person))
        });
    });

    describe('#isEmptyObject()', function () {
        it(`m_utils.isEmptyObject({}) should return true`, function () {
            assert(m_utils.deepClone({}))
        });

        it(`m_utils.isEmptyObject({ one: 1 }) should return false`, function () {
            assert.notEqual(m_utils.isEmptyObject({
                one: 1
            }))
        });

        it(`m_utils.isEmptyObject([]) should return false`, function () {
            assert.notEqual(m_utils.isEmptyObject([]))
        });
    });
})