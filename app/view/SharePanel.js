Ext.define('smiley360.view.SharePanel', {
    extend: 'Ext.Container',
    alias: 'widget.sharepanel',
    requires: ['Ext.ux.ShareButton'],
    config: {
        cls: 'share-panel',
        layout: 'fit',
        html: '<div id="xShareButtons" align="center"></div>',
        listeners: {
            painted: function () {
                var xShareButtons = Ext.get('xShareButtons');
                var smilesArray = smiley360.missionData.MissionDetails.MissionPoints.sharingToolScore;
                var pointsArray = smiley360.missionData.MissionDetails.MissionPoints;

                // clear existed buttons
                xShareButtons.setHtml('');

                for (var key in smilesArray) {
                    var oneItem = smilesArray[key];
                    var oneButton = undefined;

                    switch (oneItem.sharingTool_typeID) {
                        case smiley360.sharingType.facebook:
                            oneButton = this.createShareButton(oneItem, 'share-fb-btn', 'sharetofacebookview');
                            break;
                        case smiley360.sharingType.twitter:
                            oneButton = this.createShareButton(oneItem, 'share-tw-btn', 'sharetotwitterview');
                            break;
                        case smiley360.sharingType.shareLink:
                            oneButton = this.createShareButton(oneItem, 'share-link-btn', 'sharelinkview');
                            break;
                        case smiley360.sharingType.face2face:
                            oneButton = this.createShareButton(oneItem, 'share-f2f-btn', 'sharetoface2faceview');
                            break;
                        case smiley360.sharingType.smileyConnect:
                            oneButton = this.createShareButton(oneItem, 'share-sm_conn-btn', 'smileyconnectview');
                            break;
                        case smiley360.sharingType.uploadPhoto:
                            oneButton = this.createShareButton(oneItem, 'share-photo-btn', 'uploadphotoview');
                            break;
                        case smiley360.sharingType.blog:
                            oneButton = this.createShareButton(oneItem, 'share-blog-btn', 'sharetoblogview');
                            break;
                        case smiley360.sharingType.youtube:
                            oneButton = this.createShareButton(oneItem, 'share-yt-btn', 'sharetoyoutubeview');
                            break;
                        case smiley360.sharingType.pinterest:
                            oneButton = this.createShareButton(oneItem, 'share-pin-btn', 'sharetopinterestview');
                            break;
                        default:
                            console.log('SharePanel -> undefined sharing type detected: ', oneItem.sharingTool_typeID);
                    }

                    var divTag = document.createElement("div");
                    divTag.style.width = '90px';
                    divTag.style.height = '90px';
                    divTag.style.padding = '2px';
                    divTag.style.display = 'inline-table';
                    divTag.setAttribute("align", "left");

                    oneButton.renderTo(divTag);
                    xShareButtons.appendChild(divTag);
                }
            }
        }
    },

    createShareButton: function (shareItem, buttonCls, shareViewAlias) {
        return new Ext.ux.ShareButton(
            {
                cls: buttonCls,
                smilesDone: shareItem.sharingTool_current_smiles,
                smilesTotal: shareItem.sharingTool_max_smiles,
                smilesCurrent: shareItem.sharingTool_perShare_smiles,
                listeners: {
                    tap: function () {
                        Ext.widget(shareViewAlias).show();
                    }
                }
            });
    }
});