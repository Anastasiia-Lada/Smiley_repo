var hide_panel, first_time, dock_panel;
Ext.define('smiley360.view.BrowseInstruments', {
	extend: 'Ext.Panel',
	alias: 'widget.browseinstrumentsview',
	requires: [
        'Ext.TitleBar',
        'Ext.Video',
		'Ext.List',
		'Ext.dataview.List',

	],
	config: {
		id: 'xBrowseInstruments',
		title: 'CONNECT/browse',
		items: [

                    {
                    	xtype: 'spacer',
                    	height: '14px',
                    	style: 'background-color: #f4f3f1; margin: 0px 2px; -webkit-border-radius: 5px 5px 0px 0px;'
                    },
							{
								xtype: 'spacer',
								height: '7px',
								style: 'background-color: #efecea;'
							},

                    {
                    	xtype: 'container',
                    	layout: 'hbox',
                    	id: 'browseinst-cont',
                    	style: 'box-shadow: 0px 1px 2px rgba(0,0,0,0.5);',
                    	items: [{
                    		xtype: 'container',
                    		layout: 'vbox',
                    		flex: 1,
                    		listeners:
                                {
                                	painted: function () {
                                	},
                                },
                    		items: [
                                {
                                	xtype: 'container',
                                	laytout: { type: 'vbox' },
                                	cls: 'has-shadow',
                                	items: [{
                                		xtype: 'container',
                                		style: 'box-shadow: 0px 1px 2px rgba(0,0,0,0.5);',
                                		layout: { type: 'hbox' },
                                		items: [{
                                			xtype: 'label',
                                			html: 'MUSIC AND ARTS / instruments',
                                			cls: 'heading-text active-sign',
                                			style: 'padding-left: 15px;',
                                			flex: 1
                                		},
                                		]
                                	},
									//{
									//	xtype: 'spacer',
									//	height: '14px',
									//	style: 'background-color: #efecea; margin: 0px 2px;',
									//},
									{
										xtype: 'container',
										id: 'xMyBrowse',
										style: 'background-color: #efecea;',
										cls: 'has-shadow',
										padding: 20,
										items: [
										],
									},
                                	{
                                		xtype: 'spacer',
                                		height: '7px',
                                		style: 'background-color: #f4f3f1; margin: 0px 2px; -webkit-border-radius: 0px 0px 5px 5px;'

                                	},
									{
										xtype: 'spacer',
										height: '10px',
										style: 'background: transparent;'
									}, ],
                                }],
                    	}]
                    }],
		listeners: {
			painted: function () {
				this.setBrowse();
			}
		}
	},

	setBrowse: function () {
		//Ext.getCmp('xMyBrowse').removeAll(true, true);
		var BrowseBrands = smiley360.CategoryResults;
		for (var key in BrowseBrands) {
			var oneBrowseIt = BrowseBrands[key];
			if (oneBrowseIt.sc_brand_name)
				this.setBrowseItem(oneBrowseIt);
		};
		console.log('Browse brands');
	},
	setBrowseItem: function (oneBrowseIt) {
		var BrowseItem = new Ext.Container({
			//id: id + 'container',
			layout: 'vbox',
			cls: 'has-shadow',
			width: 100,
			style: 'background: #f7f5f6; border-radius: 5px;margin-right: 20px;',
		});
		var ContItem = BrowseItem.add(new Ext.Container(
		{
			height: 100,
			width: 100,
			style: 'border-radius: 5px;',
		}));
		var Item = ContItem.add(new Ext.Img(
		{
			//src: 'resources/images/secret-logo.png',
			style: 'border-radius: 5px;',
			src: smiley360.configuration.getResourceDomain() + '/' + oneBrowseIt.smileyConnect_summaryImage_URL,
			padding: 50,
			listeners: {
				tap: function () {
					this.up('#xBrowse').fireEvent('onBrandTapCommand', this, smiley360.memberData.UserId, oneBrowseIt.sc_brandID, 0, 10);
				}
			}
		}));

		var NextItem = BrowseItem.add(new Ext.Label(
		{
			//html: 'McDonald\'s',
			html: oneBrowseIt.sc_brand_name,
			style: 'text-align: center; font-size:1.1em; padding: 10px; word-wrap: break-all; color:#413f40; font-family: \'din medium\';',

		}));

		Ext.getCmp('xMyBrowse').add(BrowseItem);
		if (NextItem.getHtml().toString().length > 12) {
			NextItem.setHtml(NextItem.getHtml().toString().substr(0, 9) + '...');
		};
	},
});
