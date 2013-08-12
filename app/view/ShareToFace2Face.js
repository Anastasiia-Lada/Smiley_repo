Ext.define('smiley360.view.ShareToFace2Face', {
    extend: 'Ext.Container',
    alias: 'widget.sharetoface2faceview',
    requires: ['Ext.Rating', 'Ext.Anim'],
    config: {
        modal: true,
        centered: true,
        fullscreen: true,
        hideOnMaskTap: true,
        id: 'xView',
        scrollable: 'vertical',
        cls: 'popup-panel',
        items: [{
            xtype: 'panel',
            id: 'xRootPanel',
            cls: 'popup-root-panel',
            items: [{
                xtype: 'image',
                docked: 'top',
                cls: 'popup-close-button',
                listeners: {
                    tap: function () {
                        this.up('#xView').destroy();
                    }
                }
            }, {
                xtype: 'panel',
                layout: 'hbox',
                cls: 'popup-top-panel face2face-background',
                items: [{
                    xtype: 'label',
                    cls: 'popup-title-text',
                    html: 'Earn 5 Smiles Sharing on Face2Face',
                }, {
                    xtype: 'image',
                    docked: 'right',
                    cls: 'popup-title-image',
                    src: 'resources/images/share-f2f.png',
                }],
            }, {
                xtype: 'panel',
                id: 'xStatusIndicator',
                cls: 'popup-status-indicator',
            }, {
                xtype: 'panel',
                cls: 'popup-middle-panel popup-status-container',
                style: 'padding-bottom: 0px;',
                items: [{
                    xtype: 'selectfield',
                    id: 'xPeoplesSelector',
                    autoSelect: false,
                    value: null,
                    required: true,
                    placeHolder: 'How many peolpe you talked to?',
                    cls: 'popup-input popup-input-selector',
                    options: [
                        //{ text: '', value: '' },
                        { text: '1', value: '1' },
                        { text: '2', value: '2' },
                        { text: '3', value: '3' }
                    ]
                }, {
                    xtype: 'textareafield',
                    id: 'xReviewText',
                    maxRows: 5,
                    //maxLength: 84,
                    required: true,
                    placeHolder: 'Write your review',
                    cls: 'popup-input popup-input-text',
                }, {
                    xtype: 'rating',
                    id: 'xRating',
                    label: 'Rate the product:',
                    labelWidth: 'auto',
                    itemsCount: 5,
                    itemCls: 'x-rating-star',
                    itemHoverCls: 'x-rating-star-hover',
                    listeners: {
                        change: function (rate, value, currentValue) {
                            var logMessage = Ext.String.format(
                                'ShareToFace2Face -> Rating changed: { value: {0}, currentValue: {1} }', value, currentValue);

                            console.log(logMessage);

                            var xView = this.up('#xView');
                            if (xView){
                                if (value < 0) {
                                    this.addCls('x-rating-field-required');

                                    xView.down('#xReviewText').addCls('popup-input-required');
                                    xView.down('#xPeoplesSelector').addCls('popup-input-required');
                                    xView.down('#xShareButton').disable();
                                }
                                else {
                                    this.removeCls('x-rating-field-required');

                                    xView.down('#xReviewText').removeCls('popup-input-required');
                                    xView.down('#xPeoplesSelector').removeCls('popup-input-required');
                                    xView.down('#xShareButton').enable();
                                }
                            }
                        }
                    }
                }],
            }, {
                xtype: 'panel',
                cls: 'popup-button-panel',
                items: [{
                    xtype: 'button',
                    id: 'xShareButton',
                    text: 'SUBMIT',
                    icon: 'resources/images/share-initial.png',
                    iconAlign: 'right',
                    iconCls: 'popup-post-icon',
                    cls: 'popup-post-button',
                    listeners: {
                        tap: function () {
                            this.up('#xView').doShare();
                        }
                    },
                }],
            }],
        }],
        listeners: {
            initialize: function () {
                smiley360.adjustPopupSize(this);
            },
            hide: function () {
                this.destroy();
            }
        },
    },

    doShare: function () {
        var shareView = this;
        var shareData = {
            missionID: smiley360.missionData.MissionDetails.MissionId,
            memberID: smiley360.memberData.UserId,
            sharepeople: this.down('#xPeoplesSelector').getValue(),
            rating: this.down('#xRating').getValue(),
            desc: this.down('#xReviewText').getValue(),
        };

        smiley360.setViewStatus(shareView, smiley360.viewStatus.progress);
        smiley360.services.postToFace2face(shareData, function (response) {
            smiley360.setResponseStatus(shareView, response);
        });
    },
});