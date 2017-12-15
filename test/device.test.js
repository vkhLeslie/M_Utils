describe('Device API:', function () {
    describe('#getExplore()', function () {
        it(`m_utils.getExplore() should return "Chrome"`, function () {
            console.log(`Explore:${m_utils.getExplore()}`)
            assert(/^Chrome:/.test(m_utils.getExplore()))
        });
    });

    describe('#getOS()', function () {
        it(`m_utils.getOS() should return "windows"`, function () {
            console.log(`OS:${m_utils.getOS()}`)
            assert(m_utils.getOS() === 'windows' || m_utils.getOS() === 'MacOSX' || m_utils.getOS() === 'linux')
        });
    });
});