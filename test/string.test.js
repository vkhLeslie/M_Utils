describe('Random API:', function () {
    describe('#digitUppercase()', function () {
        it(`m_utils.digitUppercase(9999999999) === '玖拾玖亿玖仟玖佰玖拾玖万玖仟玖佰玖拾玖元整' should return true`, function () {
            assert(m_utils.digitUppercase(9999999999) === "玖拾玖亿玖仟玖佰玖拾玖万玖仟玖佰玖拾玖元整")
        });

        it(`m_utils.digitUppercase(0) === '零元整' should return true`, function () {
            assert(m_utils.digitUppercase(0) === "零元整")
        });

        it(`m_utils.digitUppercase(-235423545) === '欠贰亿叁仟伍佰肆拾贰万叁仟伍佰肆拾伍元整' should return true`, function () {
            assert(m_utils.digitUppercase(-235423545) === "欠贰亿叁仟伍佰肆拾贰万叁仟伍佰肆拾伍元整")
        });
    });
})