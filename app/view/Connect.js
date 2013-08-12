var hide_panel, first_time, dock_panel;

Ext.define('smiley360.view.Connect', {
	extend: 'Ext.Panel',
	alias: 'widget.connectview',
	requires: [
        'Ext.carousel.Carousel',
		'Ext.field.Search'
	],
	config: {
		id: 'xConnectView',
		items: [{
			xtype: 'container',
			layout: 'vbox',
			flex: 1,
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
				laytout: 'vbox',
				items: [{
					xtype: 'container',
					cls: 'has-shadow',
					layout: 'hbox',
					items: [{
						xtype: 'label',
						html: 'FEATURED BRANDS',
						cls: 'heading-text active-sign',
						style: 'padding-left: 15px;',
						flex: 2,
					},
					//{
                    //    xtype: 'label',
                    //    html: '13/92',
                    //    cls: 'heading-text',
                    //    style: 'padding-left: 15px; padding-right: 10px;',
                    //    flex: 0.2,
					//}
					],
				}, {
					xtype: 'container',
					style: 'background-color: #efecea',
					items: [{
						xtype: 'carousel',
						id: 'xFeaturedList',
						direction: 'horizontal',
						style: 'background-color: #efecea',
						dragable: false,
						indicator: false,
						width: '100%',
						height: 100,
						defaults: {
							styleHtmlContent: true
						},
						listeners: {
							painted: function (carousel) {
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
						items: [
						//	{
                        //    xtype: 'container',
                        //    layout: 'hbox',
                        //    cls: 'cont-pad',
                        //    flex: 2.5,
                        //    items: [
						//		{
                        //        xtype: 'container',
                        //        layout: 'vbox',
                        //        style: 'padding: 0px 20px;',                                
                        //        items: [{
                        //            xtype: 'label',
                        //            html: 'BRAND',
                        //            style: 'text-align:left;font-size:1.4em; padding: 0px 15px 10px 30px; background-color: #efecea; color:#413f40; font-family: \'franklin\';',

                        //        }, {
                        //            xtype: 'label',
                        //            style: 'font-size: 1.1em;background-color: #efecea; color:#413f40; padding-left: 30px; font-family: \'din medium\';',
                        //            html: 'Description goes here lorem ipsum.',
                        //        }],
                        //    }, {
                        //        xtype: 'container',
                        //        flex: 1.5,
                        //        layout: { type: 'vbox', align: 'center' },
                        //        items: [{
                        //            xtype: 'image',
                        //            cls: 'has-shadow',
                        //            style: 'border-radius: 5px; border-style: solid; border-width: 1px; border-color: white;',
                        //            src: 'resources/images/offers_logo3.png',
                        //            width: 80,
                        //            height: 80,
                        //            listeners: {
                        //                tap: function () {
                        //                    smiley360.brandData.BrandId = '3250',
                        //                    this.up('#xConnectView').fireEvent('onBrandTapCommand', this, smiley360.memberData.UserId, smiley360.brandData.BrandId, 0, 10);
                        //                }
                        //            }
                        //        }],
                        //    }],
                        //}
						],
					}, {
						xtype: 'panel',
						html: '<div class="left-btn-mission"></div><div class="right-btn-mission"></div>'
					}, {
						xtype: 'spacer',
						style: 'background-color: #efecea; border-bottom: 1px dashed #d7cfcd;',
						height: 20,
					}, {
						xtype: 'container',
						//margin: '20px 25px',
						style: 'background-color: #F4F3F1; padding: 40px 25px;',
						layout: 'vbox',
						items: [{
							xtype: 'button',
							itemId: 'recievebtn',
							cls: 'connect-btn-search',
							style: 'margin: -50px 0px;',
							text: 'SEARCH',
							listeners: {
								tap: function () {
									smiley360.brandData.BrandId = '3250',
                                    this.up('#xConnectView').fireEvent('onSearchTapCommand', this, Ext.getCmp('BrandTitleSearchField').getValue().toString(), 10, 10);
								},
							},
						}, {
							xtype: 'panel',
							layout: 'vbox',
							cls: 'has-shadow',
							style: 'border-radius: 0px 0px 5px 5px; background-color: #e2ddda; margin-top: 40px; margin-bottom: -30px;',
							id: 'search_panel',
							listeners: {
								initialize: function ()
								{ /*this.hide();*/ }
							},
							items: [{
								xtype: 'label',
								height: '3px',
								style: 'background-color:#fba00a; '
							}, {
								xtype: 'container',
								layout: 'vbox',
								padding: 30,
								items: [{
									xtype: 'searchfield',
									placeHolder: 'Brand name',
									id: 'BrandTitleSearchField',
									cls: 'cust-input cust-input-search',
									style: 'background-color: white; font-family: din bold; font-size:1em;',
									margin: '0px -10px;',
								}],
							}],
						}, {
							xtype: 'button',
							style: 'padding: 30px 0px 50px 0px; margin: 60px 0px;',
							cls: 'connect-btn-browse',
							text: 'BROWSE',
							listeners: {
								tap: function () {
									this.up('#xConnectView').fireEvent('onBrowseTapCommand', this, smiley360.memberData.UserId);
								},
							},
						}],
					}],
				}, {
					xtype: 'spacer',
					height: '7px',
					style: 'background-color: #f4f3f1;',
				}, {
					xtype: 'spacer',
					height: '7px',
					style: 'background-color: #f4f3f1; margin: 0px 2px; -webkit-border-radius: 0px 0px 5px 5px;'

				}, {
					xtype: 'spacer',
					height: '10px',
					style: 'background: transparent;'
				}],
			}],
		},//end vbox container

		],
		listeners: {
			activate: function () {
				console.log('Connect view activated!');
				Ext.getCmp('xConnectView').fireEvent('onConnectTapCommand', this);
				//Ext.getCmp('xConnectView').fireEvent('onBrowseLoadCommand', this);
			},
			painted: function () {
				console.log('Connect view painted!');

				this.setFeatured();
			},
		},
	},
	setFeatured: function () {
		var xFeaturedList = Ext.getCmp('xFeaturedList');
		//xFeaturedList.removeAll(true, true);
		//for (var i = 0; i < 3; i++) {
		for (var key in smiley360.FeaturedBrands) {
			var oneItem = smiley360.FeaturedBrands[key];
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
				style: 'text-align:left;font-size:1.4em; padding: 0px 15px 10px 30px; background-color: #efecea; color:#413f40; font-family: \'franklin\';',
				html: oneItem.title, //'Description goes here lorem ipsum.',

			}));
			incLabel = leftCont.add(new Ext.Label({
				style: 'font-size: 1.1em;background-color: #efecea; color:#413f40; padding-left: 30px; font-family: \'din medium\';',
				html: oneItem.descr, //'Description goes here lorem ipsum.',

			}));
			var rightCont = oneElement.add(new Ext.Container({
				layout: { type: 'vbox', align: 'center' },
				flex: 1.5,
			}));
			var incImg = rightCont.add(new Ext.Img({
				cls: 'has-shadow',
				//id: 'xHomeBrandImage',
				style: 'border-radius: 5px; border-style: solid; border-width: 1px; border-color: white;',
				src: smiley360.configuration.getResourceDomain() + '/' + oneItem.imageURL,//'resources/images/offers_logo3.png',
				width: 80,
				height: 80,
				listeners: {
					tap: function () {
						Ext.getCmp('xConnectView').fireEvent('onBrandTapCommand', this, smiley360.memberData.UserId, oneItem.smileyconnectID, 0, 10);
					}
				}
			}));
			xFeaturedList.add(oneElement);
		};
	},
});
