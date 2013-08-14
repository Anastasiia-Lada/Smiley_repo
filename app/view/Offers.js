var hide_panel, first_time, dock_panel;
Ext.define('smiley360.view.Offers', {
	extend: 'Ext.Panel',
	alias: 'widget.offersview',
	config: {
		id: 'xOfferView',
		//cls: 'cust-tabbar normal-page-bg',
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
			layout: 'hbox',
			id: 'offers-cont',
			style: 'box-shadow: 0px 1px 2px rgba(0,0,0,0.5);',
			items: [{
				xtype: 'container',
				layout: 'vbox',
				flex: 1,
				items: [{
					xtype: 'container',
					laytout: { type: 'vbox' },
					cls: 'has-shadow',
					items: [{
						xtype: 'container',
						style: 'box-shadow: 0px 1px 2px rgba(0,0,0,0.5);',
						layout: { type: 'hbox' },
						items: [{
							xtype: 'label',
							id: 'xOfferListHeader1',
							html: 'MISSION OFFERS',
							cls: 'heading-text active-sign',
							style: 'padding-left: 15px;',
							flex: 1
						}]
					}, {
						xtype: 'container',
						id: 'xOfferList1',
						layout: { type: 'vbox', },
					}, {
						xtype: 'spacer',
						height: '14px',
						style: 'background-color: #efecea; margin: 0px 2px;',
					}]
				}, {//end first
					xtype: 'container',
					laytout: { type: 'vbox' },
					cls: 'has-shadow',
					items: [{
						xtype: 'spacer',
						height: '7px',
						style: 'background-color: #efecea;'
					}, {
						xtype: 'container',
						cls: 'has-shadow',
						layout: { type: 'hbox' },
						items: [{
							xtype: 'label',
							id: 'xOfferListHeader2',
							html: 'QUALIFY FOR A NEW MISSION',
							cls: 'heading-text active-sign',
							style: 'padding-left: 15px;',
							flex: 1
						}]
					}, {
						xtype: 'container',
						id: 'xOfferList2',
						layout: { type: 'vbox', },
					},
					{
						xtype: 'spacer',
						height: '7px',
						style: 'background-color: #efecea;',
						cls: 'has-shadow',
					}]
				}, {//end second
					xtype: 'spacer',
					height: '7px',
					style: 'background-color: #f4f3f1; margin: 0px 2px;'

				}, {
					xtype: 'container',
					laytout: { type: 'vbox' },
					cls: 'has-shadow',
					items: [{
						xtype: 'container',
						style: 'box-shadow: 0px 1px 2px rgba(0,0,0,0.5);',
						layout: { type: 'hbox' },
						items: [{
							xtype: 'label',
							id: 'xOfferListHeader3',
							html: 'POST-MISSION SURVEYS',
							cls: 'heading-text active-sign-inactive',
							style: 'padding-left: 15px;',
							flex: 1
						}]
					}, {
						xtype: 'container',
						id: 'xOfferList3',
						layout: { type: 'vbox', },
					}, {
						xtype: 'container',
						layout: { type: 'hbox' },
						style: 'padding: 10px 15px; background-color: #efecea;',
						flex: 1,
					}, {
						xtype: 'spacer',
						height: '14px',
						style: 'background-color: #efecea; margin: 0px 2px;',
					}]
				}, {//end third
					xtype: 'spacer',
					height: '7px',
					style: 'background-color: #f4f3f1; margin: 0px 2px;'

				}, {
					xtype: 'container',
					laytout: { type: 'vbox' },
					cls: 'has-shadow',
					items: [{
						xtype: 'container',
						style: 'box-shadow: 0px 1px 2px rgba(0,0,0,0.5);',
						layout: { type: 'hbox' },
						items: [{
							xtype: 'label',
							id: 'xOfferListHeader4',
							html: 'BONUS SURVEYS',
							cls: 'heading-text active-sign',
							style: 'padding-left: 15px;',
							flex: 1
						}]
					}, {
						xtype: 'container',
						id: 'xOfferList4',
						layout: { type: 'vbox', },
					},

					{
						xtype: 'spacer',
						height: '7px',
						style: 'background-color: #f4f3f1; margin: 0px 2px; -webkit-border-radius: 0px 0px 5px 5px;'

					}, {
						xtype: 'spacer',
						height: '10px',
						style: 'background: transparent;'
					}]
				}]//end last
			}, {//end vbox container
				xtype: 'panel',
				id: 'offers_menu',
				layout: 'vbox',
				flex: 0.3,
				listeners: {
					initialize: function () {
						this.hide();
					},
				},
				items: [{
					xtype: 'container', layout: 'vbox',
					style: 'font-family: franklin; text-align: right;',
					items: [{
						xtype: 'container', layout: 'vbox',
						//padding: '0px 20px',
						style: 'color: #333132; text-align: right; min-height: 60px; background-color:white;border-style: solid; border-color: white; border-radius: 3px; border-width: 2px;',
						margin: '0px 20px 0px 20px',
						cls: 'has-shadow',
						docked: 'top',
						items: [{
							xtype: 'image',
							style: ' min-height: 60px; background-color:white;',

						}, {
							xtype: 'label',
							style: 'padding-top: 10px;',
							html: 'Noel Zahra',
							style: 'font-size:1.4em; margin-bottom: -8px;text-align: right;',
						}, {
							xtype: 'label',
							html: 'Austin, TX',
							//padding: '-8px 0px 0px 0px',
							style: 'padding-bottom: 10px;',
							style: 'font-size: 0.8em; margin-bottom: 8px; margin-left: 2px; text-align: right;',
						}]
					}, {
						xtype: 'container', layout: 'vbox',
						//padding: '0px 20px',
						docked: 'right',
						style: 'color: white; font-family: franklin; font-size:1.4em; text-align: right;',
						padding: '30px 10px',
						items: [{
							xtype: 'button',
							html: 'Edit Profile',
							margin: '20px 0px 0px 0px',
							//padding: '0px 20px 0px 0px',
							style: 'color: white; font-family: franklin; font-weight: normal; text-align: right;',
							cls: 'listmenuitem',
							ui: 'plain',
							itemId: 'gotoeditprofileBtn',
						}, {
							xtype: 'button',
							text: 'Refer Friends',
							margin: '20px 0px 0px 0px',
							style: 'color: white; font-family: franklin; font-weight: normal; text-align: right;',
							cls: 'listmenuitem',
							ui: 'plain',
						}, {
							xtype: 'button',
							text: 'Terms of Use',
							margin: '20px 0px 0px 0px',
							style: 'color: white; font-family: franklin; font-weight: normal; text-align: right;',
							cls: 'listmenuitem',
							ui: 'plain',
						}, {
							xtype: 'button',
							text: 'Tutorial',
							margin: '20px 0px 0px 0px',
							style: 'color: white; font-family: franklin; font-weight: normal; text-align: right;',
							cls: 'listmenuitem',
							ui: 'plain',
						}, {
							xtype: 'button',
							text: 'Contact Us',
							margin: '20px 0px 0px 0px',
							style: 'color: white; font-family: franklin; font-weight: normal; text-align: right;',
							cls: 'listmenuitem',
							ui: 'plain',
						}, {
							xtype: 'button',
							text: 'Log Out',
							margin: '20px 0px 0px 0px',
							style: 'color: white; font-family: franklin; font-weight: normal; text-align: right;',
							cls: 'listmenuitem',
							ui: 'plain',
						}]
					}]
				}]//end add
			}]//end panel added
		}],//ens strange container
		listeners: {
			painted: function () {
				console.log('Offer view painted!');
				this.setOffers();
				//this.setWhatsHappening();
				//this.setSpecialOffers();
			},
		},

	},

	getParagraph: function myfunction(ctrl) {
		var TextInside = ctrl.getElementsByTagName('p')[0].innerHTML;
		return TextInside;
	},

	setOffers: function () {
		//bugfix, need to be rewrited
		Ext.getCmp('xOfferList1').removeAll(true, true);
		Ext.getCmp('xOfferList2').removeAll(true, true);
		Ext.getCmp('xOfferList3').removeAll(true, true);
		Ext.getCmp('xOfferList4').removeAll(true, true);
		//end bugfix, need to be rewrited

		for (var key in smiley360.memberData.Offers) {
			var oneItem = smiley360.memberData.Offers[key];
			var allContainer = new Ext.Container({
				id: 'OfferID_pane' + oneItem.missionID,
				layout: { type: 'hbox' },
				style: 'padding: 3px 15px 3px 15px; background-color: #efecea;',
				flex: 1,
				listeners: {
					element: 'element',
					tap: function () {
						console.log('Offers -> Offer Container tap listener: ', oneItem.valueOf());//last mission in list

						if (this.parent.valueOf().getId().substr(10) == '1') {
							this.up('#xOfferView').fireEvent('LoadOfferDetailsCommand', this, this.getId().substr(12));

						}
						else {
							this.up('#xOfferView').fireEvent('LoadOfferSurveyCommand', this, this.getId().substr(12));
						}
					}
				}//'resources/images/lays.png',
			});

			var includeContainerImage = new Ext.Container({

				cls: 'browse-pict',
				style: 'background-color: #efecea; padding-top: 15px;',
				layout: {
					type: 'vbox',
					align: 'middle',
				},
			});
			includeContainerImage.add(new Ext.Img(
			{
				style: 'padding: 20px 0px 0px 0px;background-color: white; border-radius: 5px;',
				cls: 'has-shadow',
				width: 100,
				height: 100,
				id: 'OfferID_pict' + oneItem.missionID,
				src: smiley360.configuration.getOfferImagesUrl(oneItem.missionID, oneItem.link),//'resources/images/lays.png',
			}));

			var includeContainerLabels = new Ext.Container({

				layout: { type: 'vbox' },
				flex: 4,
				style: 'padding-left: 10px;',
			});
			includeContainerLabels.add(new Ext.Label(
			{
				html: oneItem.title,
				//html: 'Survey Title',
				style: 'font-size:1.4em; padding: 10px 15px 10px 0px; background-color: #efecea; color:#413f40; font-family: \'din bold\';',
			}));

			includeContainerLabels.add(new Ext.Label(
			{
				html: oneItem.descr,
				//html: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel malesuada odio. Phasellus aliquam dignissim scelerisque. Sed ullamcorper libero nec placerat posuere.',
				style: 'font-size:1.1em; margin-top: -10px; padding: 5px 15px 10px 0px; word-wrap: break-all; background-color: #efecea; color:#413f40; font-family: \'din medium\';',
			}));

			allContainer.add(includeContainerImage);
			allContainer.add(includeContainerLabels);
			//if (oneItem.mission_typeID != 1)
			//{ oneItem.mission_typeID -= 1 };
			var xOfferList = this.down('#xOfferList' + oneItem.mission_categoryID);
			if (xOfferList)
				//xOfferList.removeAll(true, true);
			{
				//xOfferList.removeAll(true, true);
				xOfferList.add(allContainer);
				this.down('#xOfferListHeader' + oneItem.mission_categoryID).setCls('heading-text active-sign');
			}
		}
		if (smiley360.memberData.isProfileComplete.complete == 'false') { Ext.widget('missingoffersview').show(); }
	},
});
