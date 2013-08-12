Ext.define('smiley360.view.BrandImage', {
	extend: 'Ext.Container',
	alias: 'widget.brandimageview',
	requires:[
	'Ext.util.DelayedTask'
	],
	config: {
		modal: true,
		centered: true,
		fullscreen: true,
		hideOnMaskTap: true,
		id: 'xBrandImageView',
		scrollable: 'vertical',
		cls: 'popup-panel',
		items: [{
			xtype: 'panel',
			id: 'xBrandImageRootPanel',
			cls: 'popup-root-panel',
			items: [{
				xtype: 'image',
				cls: 'popup-close-button',
				listeners: {
					tap: function () {
						Ext.getCmp('xBrandImageView').destroy();
					}
				}
			}, {
				xtype: 'carousel',
				height: 300,
				id:'xBrandImageCarousel',
				items: [{
					xtype: 'container',
					layout: 'vbox',
					style: 'background: transparent;',
					items: [
								{
									xtype: 'image',
									height: '100%',
									src: 'resources/images/guitar_.png',
								},
								{
									xtype: 'panel',
									html: '<div class="left-btn-brandimage"></div><div class="right-btn-brandimage"></div>'
								},
					],
				},
				///first
				{
					xtype: 'container',
					layout: 'vbox',
					style: 'background: transparent;',
					items: [
								{
									xtype: 'image',
									height: '100%',
									src: 'resources/images/guitar_3.png',
								},
								{
									xtype: 'panel',
									html: '<div class="left-btn-brandimage"></div><div class="right-btn-brandimage"></div>'
								},
					],
				},///second
				{
					xtype: 'container',
					layout: 'vbox',
					style: 'background: transparent;',
					items: [
								{
									xtype: 'image',
									height: '100%',
									src: 'resources/images/guitar_4.png',
								},
								{
									xtype: 'panel',
									html: '<div class="left-btn-brandimage"></div><div class="right-btn-brandimage"></div>'
								},
					],
				},///third
				{
					xtype: 'container',
					layout: 'vbox',
					style: 'background: transparent;',
					items: [
								{
									xtype: 'image',
									height: '100%',
									src: 'resources/images/guitar_5.png',
								},
								{
									xtype: 'panel',
									html: '<div class="left-btn-brandimage"></div><div class="right-btn-brandimage"></div>'
								},
					],
				},///fourth
				],},
			],},
		],
		listeners: {
			initialize: function () {
				this.setHeight(Ext.getCmp('xBrandImageRootPanel').element.getHeight());
			},
			hide: function () {
				this.destroy();
			},
			painted:
				function (carousel) {
					var slide_carousel = Ext.getCmp('xBrandImageCarousel');
					carousel.pageTurner = new Ext.util.DelayedTask(function () {
						if (slide_carousel.getActiveIndex() == slide_carousel.items.length - 1) {
							slide_carousel.setActiveItem(0, 'slide');
						}
						else {
							slide_carousel.next();

						}
						//console.log(slide_carousel.pageTurner.valueOf());
						slide_carousel.pageTurner.delay(3000); //comment this to avoid js-bug
					}, carousel);
					carousel.pageTurner.delay(3000);
				}
		},
	},
});