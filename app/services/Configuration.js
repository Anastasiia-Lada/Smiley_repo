smiley360 = smiley360 || {};
smiley360.configuration = smiley360.configuration || {};


smiley360.configuration.isDebugMode = function () {
    return true;
}

smiley360.configuration.getServerUrl = function () {
    return "http://smileys.ekonx.net.ua/index.php/";
}

smiley360.configuration.getResourceDomain = function () {
    return "http://uat.smiley360.com";
}

smiley360.configuration.getOfferImagesUrl = function (missionID, imageName) {
    return Ext.String.format("{0}/images/missions/mission{1}/{2}",
        smiley360.configuration.getResourceDomain(), missionID, imageName);
}