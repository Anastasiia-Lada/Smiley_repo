var hide_panel, first_time, dock_panel;

Ext.define('smiley360.view.Home', {
	extend: 'Ext.Panel',
	alias: 'widget.homeview',
	requires: [
		'Ext.util.DelayedTask',
        'Ext.Rating',
        'Ext.Video',
		'Ext.carousel.Carousel',
	],
	config: {
		id: 'xHomeView',
		title: 'HOME',
		items: [{
			xtype: 'container',
			id: 'home-left',
			layout: 'vbox',
			listeners: {
				painted: function () {
					dock_panel = this;
				},
			},
			items: [{
				xtype: 'spacer',
				height: '14px',
				style: 'background-color: #f4f3f1; margin: 0px 2px; -webkit-border-radius: 5px 5px 0px 0px;'
			}, {
				xtype: 'spacer',
				height: '7px',
				style: 'background-color: #efecea;'
			}, {
				xtype: 'container',
				laytout: { type: 'vbox' },
				items: [{
					xtype: 'container',
					cls: 'has-shadow',
					layout: { type: 'hbox' },
					items: [{
						xtype: 'label',
						html: 'WHAT IS HAPPENING?',
						cls: 'heading-text active-sign',
						style: 'padding-left: 15px;',
						flex: 2
					}, {
						xtype: 'label',
						id: 'xUserLevelLabel',
						html: 'LEVEL',
						cls: 'heading-text headings-home',
					}, {
						xtype: 'rating',
						id: 'xUserLevelRating',
						disabled: true,
						itemsCount: 5,
						baseCls: 'x-level-field',
						itemCls: 'x-level-star',
						itemHoverCls: 'x-level-star-hover',
					}],
				}, {
					xtype: 'container',
					id: 'xWhatsHappeningList',
					laytout: { type: 'vbox' },
				}, {
					xtype: 'spacer',
					height: '10px',
					style: 'background-color: #f4f3f1; margin: 0px 2px;'
				}, {
					xtype: 'spacer',
					height: '7px',
					style: 'background-color: #efecea;'
				}, {
					xtype: 'label',
					html: '<p>SPECIAL OFFERS</p>',
					cls: 'heading-text has-shadow',
					style: 'padding-left: 15px;'
				}, {
					xtype: 'container',
					style: 'background-color: #efecea',
					items: [{
						xtype: 'carousel',
						id: 'xSpecialOffersList',
						direction: 'horizontal',
						style: 'background-color: #efecea',
						dragable: false,
						indicator: false,
						defaults: {
							styleHtmlContent: true
						},
						width: '100%',
						height: 140,
						listeners:
                            {
                            	painted:
                                    function (carousel) {
                                    	me = this;
                                    	carousel.pageTurner = new Ext.util.DelayedTask(function () {
                                    		if (me.getActiveIndex() == me.items.length - 1) {
                                    			me.setActiveItem(0, 'slide');
                                    		}
                                    		else {
                                    			me.next();
                                    		}
                                    		//console.log(me.pageTurner.valueOf());
                                    		//me.pageTurner.delay(3000); //comment this to avoid js-bug
                                    	}, carousel);
                                    	carousel.pageTurner.delay(3000);
                                    }
                            },

					}, {
						xtype: 'button',
						cls: 'specialoffers-left-btn',
					}, {
						xtype: 'button',
						cls: 'specialoffers-right-btn',
					}],
				}, {
					xtype: 'container',
					style: 'background-color: #f4f3f1; margin: 0px 2px;',
					layout: { type: 'hbox' },
					items: [{
						xtype: 'label',
						//html: '<p style="font-family: din medium; font-size: 10px; line-height: 2.8em; color: #8f807d; margin-left: 5px;"><span style="border-bottom: 1px solid #faa61b; color: #6d605d;">Refer Friends</span> now and earn Smiles!</p>'
					},
                    //{
                    //    xtype: 'button',
                    //    text: '',
                    //    ui: 'plain',
                    //    cls: 'gray_bg',
                    //    iconCls: 'mobile_share',
                    //    iconMask: true
                    //}, {
                    //    xtype: 'button',
                    //    text: '',
                    //    ui: 'plain',
                    //    cls: 'gray_bg',
                    //    iconCls: 'email_share',
                    //    iconMask: true
                    //}, {
                    //    xtype: 'button',
                    //    text: '',
                    //    ui: 'plain',
                    //    cls: 'gray_bg',
                    //    iconCls: 'fb_share',
                    //    iconMask: true
                    //}, {
                    //    xtype: 'button',
                    //    text: '',
                    //    ui: 'plain',
                    //    cls: 'gray_bg',
                    //    iconCls: 'twitter_share',
                    //    iconMask: true
                    //}
					]
				}, {
					xtype: 'spacer',
					height: '7px',
					style: 'background-color: #f4f3f1; margin: 0px 2px; -webkit-border-radius: 0px 0px 5px 5px;'

				}, {
					xtype: 'spacer',
					height: '10px',
					style: 'background: transparent;'
				}]
			}],
		}],

		listeners: {
			show: function () {
				console.log('Home view showed!');
			},

			painted: function () {
				console.log('Home view painted!');

				this.setUserLevel();
				this.setWhatsHappening();
				this.setSpecialOffers();
				this.setUser();
			}
		},
	},

	oneditLabel: function () {
		console.log("oneditLabel");
		this.fireEvent('oneditLabelCommand', this);
	},
	setUser: function () {
		Ext.getCmp('xProfileImage').setSrc(smiley360.userProfileImage);
		Ext.getCmp('xFirstLastName').setHtml(smiley360.memberData.Profile.fName + ' ' + smiley360.memberData.Profile.lName);
		Ext.getCmp('xCityState').setHtml(smiley360.memberData.Profile.city + ', ' + smiley360.memberData.Profile.stateID);
	},
	setUserLevel: function () {
		var userLevel = smiley360.memberData.UserLevel
            ? smiley360.memberData.UserLevel : 0;
		this.down('#xUserLevelLabel').setHtml('LEVEL ' + userLevel);

		var xUserLevelRating = this.down('#xUserLevelRating');

		xUserLevelRating.applyValue(-1);
		xUserLevelRating.setValue(userLevel - 1);
	},

	setWhatsHappening: function () {
		var xWhatsHappeningList = this.down('#xWhatsHappeningList');
		xWhatsHappeningList.removeAll(true, true);

		for (var key in smiley360.memberData.WhatsHappening) {
			var oneItem = smiley360.memberData.WhatsHappening[key];
			var oneElement = new Ext.Container({ layout: 'hbox', cls: 'whatshappening-image' });

			oneElement.add(new Ext.Img(
            {
            	flex: 2,
            	src: oneItem.iconURL,
            	height: 20,
            	width: 20,
            	margin: '20px 0px',
            }));

			oneElement.add(new Ext.Label(
            {
            	flex: 8,
            	html: oneItem.text,
            	cls: 'whatshappening-label'
            }));

			xWhatsHappeningList.add(oneElement);
		}
	},

	setSpecialBrand: function () {

	},

	setSpecialOffers: function () {
		var xSpecialOffersList = this.down('#xSpecialOffersList');
		//xSpecialOffersList.removeAll(true, true);
		for (var i = 0; i < 3; i++) {
			for (var key in smiley360.memberData.SpecialOffers) {
				var oneItem = smiley360.memberData.SpecialOffers[key];
				var oneElement = new Ext.Container({
					layout: 'hbox',
					cls: 'cont-pad',

				});
				var leftCont = oneElement.add(new Ext.Container({
					layout: 'vbox',
					style: 'padding: 0px 20px;',
					flex: 2.5,
				}));

				var incLabel = leftCont.add(new Ext.Label({
					style: 'font-size: 1.1em;background-color: #efecea; color:#413f40; padding-top: 10px; font-family: \'din medium\';',
					html: oneItem.desc + i + i + i + i + i + i + i + i + i + i, //'Description goes here lorem ipsum.',
					listeners: {
						element: 'element',
						tap: function () {
							Ext.Msg.alert('Go to: ' + oneItem.link);
						}
					}
				}));
				var rightCont = oneElement.add(new Ext.Container({
					layout: { type: 'vbox', align: 'center' },
					flex: 1.5,
				}));
				var incImg = rightCont.add(new Ext.Img({
					cls: 'has-shadow',
					//id: 'xHomeBrandImage',
					style: 'padding-left: 10px; border-radius: 5px; border-style: solid; border-width: 1px; border-color: white;',
					src: smiley360.configuration.getResourceDomain() + '/' + smiley360.memberData.specialOffersBrands.smileyConnect_detailsImage_URL,//'resources/images/offers_logo3.png',
					width: 80,
					height: 80
				}));
				xSpecialOffersList.add(oneElement);
			};
		}
	},
});