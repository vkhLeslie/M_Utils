describe('Regexp API:', function () {

    describe('#isEmail()', function () {
        it('m_utils.isEmail("leiquanlive.com") should return false ', function () {
            assert.notEqual(m_utils.isEmail("leiquanlive.com"))
        });
        it('m_utils.isEmail("leiquan@live.com") should return true ', function () {
            assert(m_utils.isEmail("leiquan@live.com"))
        });
    });

    describe('#isIdCard()', function () {
        it('m_utils.isIdCard("622224188203234033") should return true ', function () {
            assert(m_utils.isIdCard("622224188203234033"))
        });
        it('m_utils.isIdCard("zas224188203234033") should return false', function () {
            assert(!m_utils.isIdCard("leiquan@live.com"))
        });
    });

    describe('#isPhoneNum()', function () {
        it('m_utils.isPhoneNum("18882324234") should return true ', function () {
            assert(m_utils.isPhoneNum("18882324234"))
        });
        it('m_utils.isPhoneNum("8618882324234") should return true ', function () {
            assert(m_utils.isPhoneNum("8618882324234"))
        });
        it('m_utils.isPhoneNum("5534553") should return false', function () {
            assert(!m_utils.isPhoneNum("5534553"))
        });
    });

    describe('#isUrl()', function () {
        it('m_utils.isUrl("https://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1") should return true ', function () {
            assert(m_utils.isUrl("https://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1"))
        });
        it('m_utils.isUrl("http://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1") should return true ', function () {
            assert(m_utils.isUrl("http://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1"))
        });
        it('m_utils.isUrl("www.baidu.com") should return true', function () {
            assert(m_utils.isUrl("www.baidu.com"))
        });
        it('m_utils.isUrl("baidu.com") should return true', function () {
            assert(m_utils.isUrl("baidu.com"))
        });
        it('m_utils.isUrl("http://baiducom") should return false', function () {
            assert(!m_utils.isUrl("http://baiducom"))
        });
    });

});