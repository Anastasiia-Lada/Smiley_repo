Ext.define('smiley360.view.MissingOffers', {
	extend: 'Ext.Container',
	alias: 'widget.missingoffersview',
	config: {
		modal: true,
		centered: true,
		fullscreen: true,
		//hideOnMaskTap: true,
		id: 'xMOView',
		scrollable: 'vertical',
		cls: 'popup-panel',
		items: [{
			xtype: 'panel',
			id: 'xMORootPanel',
			cls: 'popup-root-panel',
			items: [{
				xtype: 'image',
				cls: 'popup-close-button',
				listeners: {
					tap: function () {
						Ext.getCmp('xMOView').destroy();
					}
				}
			}, {
				xtype: 'panel',
				layout: 'hbox',
				cls: 'popup-top-panel forgetpwd-background',
				items: [{
					xtype: 'label',
					cls: 'missing-offers-title-text',
					style: 'max-height: 40px; padding-right: 10px;',
					html: 'You are missing<br> out on offers!',
				}, {
					xtype: 'container',
					layout: 'vbox',
					docked: 'right',
					style: 'max-width: 60px; min-width: 60px; color: #333132; margin-top: -30px; text-align: right; min-height: 60px; min-width: 90px; background-color:white;border-style: solid; border-color: white; border-radius: 3px; border-width: 2px;',

					cls: 'has-shadow',
					items: [{
						xtype: 'image',
						id: 'xMOProfileImage',
						style: ' min-height: 60px; min-width: 60px;background-color:white;',

					}, {
						xtype: 'label',
						style: 'padding-top: 10px;',
						id: 'xMOFirstLastName',
						html: 'Noel Zahra',
						style: 'font-size:0.8em; text-align: right;',
					}, {
						xtype: 'label',
						html: 'Austin, TX',
						id: 'xMOCityState',
						style: 'padding-bottom: 10px;',
						style: 'font-size: 0.6em; text-align: right;',
					}],
				}, ],
			}, {
				xtype: 'panel',
				cls: 'popup-bottom-panel',
				items: [{
					xtype: 'label',
					id: 'xMOMessageText',
					cls: 'popup-message-text',
					//style: 'margin: 10px;',
					html: 'Complete your personal info now.',
				}],
			}, {
				xtype: 'panel',
				cls: 'popup-button-panel',
				items: [{
					xtype: 'button',
					text: 'EDIT PROFILE',
					id: 'xMOSubmitButton',
					cls: 'popup-submit-button',
					listeners: {
						tap: function () {
						}
					},
				}],
			}],
		}],
		listeners: {
			initialize: function () {
				this.setHeight(Ext.getCmp('xMORootPanel').element.getHeight());
			},
			painted: function () {
				this.setMOUser();
			},
			hide: function () {
				this.destroy();
			}
		},
	},
	setMOUser: function () {
		Ext.getCmp('xMOProfileImage').setSrc(smiley360.userProfileImage);
		Ext.getCmp('xMOFirstLastName').setHtml(smiley360.memberData.Profile.fName + ' ' + smiley360.memberData.Profile.lName);
		if (Ext.getCmp('stateID')) Ext.getCmp('xMOCityState').setHtml(smiley360.memberData.Profile.city + ', ' + Ext.getCmp('stateID').getOptions()[Ext.getCmp('stateID').getValue() - 1].text);
	},
});