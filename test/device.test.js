describe('Device API:', function () {
    describe('#getExplore()', function () {
        it(`mutils.getExplore() should return "Chrome"`, function () {
            console.log(`Explore:${mutils.getExplore()}`)
            assert(/^Chrome:/.test(mutils.getExplore()))
        });
    });

    describe('#getOS()', function () {
        it(`mutils.getOS() should return "windows"`, function () {
            console.log(`OS:${mutils.getOS()}`)
            assert(mutils.getOS() === 'windows' || mutils.getOS() === 'MacOSX' || mutils.getOS() === 'linux')
        });
    });
});