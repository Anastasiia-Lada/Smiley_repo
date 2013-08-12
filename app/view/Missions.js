var hide_panel, first_time, dock_panel;

Ext.define('smiley360.view.Missions', {
	extend: 'Ext.Panel',
	alias: 'widget.missionsview',
	requires: ['Ext.carousel.Carousel'],
	config: {
		id: 'xMissionView',
		items: [{
			xtype: 'container',
			layout: 'hbox',
			id: 'missions-cont',
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
							html: 'CURRENT MISSIONS',
							cls: 'heading-text active-sign',
							style: 'padding-left: 15px;',
							flex: 1
						}]
					}, {
						xtype: 'container',
						id: 'xMissionList',
						layout: 'vbox',
					},

					{
						xtype: 'spacer',
						height: '7px',
						style: 'background-color: #efecea;',
						cls: 'has-shadow',
					}, {
						xtype: 'spacer',
						height: '7px',
						style: 'background-color: #f4f3f1; margin: 0px 2px; -webkit-border-radius: 0px 0px 5px 5px;'

					}, {
						xtype: 'spacer',
						height: '10px',
						style: 'background: transparent;'
					}]
				}
				],
			}],//end panel added
		}],//ens strange container
		listeners: {
			painted: function () {
				console.log('Mission view showed!');
				this.setMissions();
				//this.setWhatsHappening();
				//this.setSpecialOffers();
			},
		},
	},

	setMissions: function () {
		Ext.getCmp('xMissionList').removeAll(true, true);
		for (var key in smiley360.memberData.MissionList) {
			var oneItem = smiley360.memberData.MissionList[key];

			var allContainer = new Ext.Container({
				id: 'MissionID_pane' + oneItem.missionID,
				layout: { type: 'hbox' },
				style: 'padding: 10px 15px /*280px 15px*/; border-bottom: 1px dashed #d7cfcd; background-color: #efecea;',
				flex: 1,
				listeners: {
					element: 'element',
					tap: function () {
						console.log('MissionDetailsCommandPanel', oneItem.missionID, this.valueOf());
						this.up('#xMissionView').fireEvent('LoadMissionDetailsCommand', this, this.getId().substr(14), smiley360.memberData.UserId);
					}
				}
			});

			var includeContainerImage = new Ext.Container({

				style: 'background-color: #efecea; padding-top: 15px;',
				layout: {
					type: 'vbox',
					align: 'middle',
				},
			});
			includeContainerImage.add(new Ext.Img(
            {
            	style: 'padding: 20px 0px 0px 0px;background-color: #efecea; border-radius: 5px;',
            	cls: 'has-shadow',
            	width: 100,
            	height: 100,
            	id: 'MissionID_pict' + oneItem.missionID,
            	src: smiley360.configuration.getOfferImagesUrl(oneItem.missionID, oneItem.link),
            	listeners: {
            		//element: 'element',
            		tap: function () {
            			console.log('MissionDetailsCommand', oneItem.missionID, this.valueOf());
            			this.up('#xMissionView').fireEvent('LoadMissionDetailsCommand', this, this.getId().substr(14), smiley360.memberData.UserId);
            		}
            	}//'resources/images/lays.png',
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
            	style: 'font-size:1.1em; margin-top: -10px; padding: 0px 15px 10px 0px; word-wrap: break-all; background-color: #efecea; color:#413f40; font-family: \'din medium\';',
            }));

			allContainer.add(includeContainerImage);
			allContainer.add(includeContainerLabels);
			var xMissionList = this.down('#xMissionList')// + oneItem.mission_typeID);
			if (xMissionList) {//&& smiley360.memberData.isProfileComplete.complete) {
				//xOfferList.removeAll(true, true);
				xMissionList.add(allContainer);

				//this.down('#xMissionListHeader' + oneItem.mission_typeID).setCls('heading-text active-sign');
			}
			//else Ext.widget('missingoffersview').show();
		}
	},
});
