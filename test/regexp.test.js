describe('Regexp API:', function () {

    describe('#isEmail()', function () {
        it('mutils.isEmail("leiquanlive.com") should return false ', function () {
            assert.notEqual(mutils.isEmail("leiquanlive.com"))
        });
        it('mutils.isEmail("leiquan@live.com") should return true ', function () {
            assert(mutils.isEmail("leiquan@live.com"))
        });
    });

    describe('#isIdCard()', function () {
        it('mutils.isIdCard("622224188203234033") should return true ', function () {
            assert(mutils.isIdCard("622224188203234033"))
        });
        it('mutils.isIdCard("zas224188203234033") should return false', function () {
            assert(!mutils.isIdCard("leiquan@live.com"))
        });
    });

    describe('#isPhoneNum()', function () {
        it('mutils.isPhoneNum("18882324234") should return true ', function () {
            assert(mutils.isPhoneNum("18882324234"))
        });
        it('mutils.isPhoneNum("8618882324234") should return true ', function () {
            assert(mutils.isPhoneNum("8618882324234"))
        });
        it('mutils.isPhoneNum("5534553") should return false', function () {
            assert(!mutils.isPhoneNum("5534553"))
        });
    });

    describe('#isUrl()', function () {
        it('mutils.isUrl("https://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1") should return true ', function () {
            assert(mutils.isUrl("https://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1"))
        });
        it('mutils.isUrl("http://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1") should return true ', function () {
            assert(mutils.isUrl("http://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1"))
        });
        it('mutils.isUrl("www.baidu.com") should return true', function () {
            assert(mutils.isUrl("www.baidu.com"))
        });
        it('mutils.isUrl("baidu.com") should return true', function () {
            assert(mutils.isUrl("baidu.com"))
        });
        it('mutils.isUrl("http://baiducom") should return false', function () {
            assert(!mutils.isUrl("http://baiducom"))
        });
    });

});