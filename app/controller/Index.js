var isLogined = false;

Ext.define('smiley360.controller.Index', {
	extend: 'Ext.app.Controller',
	requires: ['smiley360.store.Members', 'smiley360.model.Member'],
	config: {
		id: 'ParentController',
		refs: {
			mainView: 'mainview',
			//newList   : '#newList',
			homeView: 'homeview',
			loginView: 'loginview',
			signupView: 'signupview',
			editProfileView: 'editprofileview',
			forgetPasswordView: 'forgetpasswordview',
			shareToFacebookView: 'sharetofacebookview',
			shareToTwitterView: 'sharetotwitterview',
			surveyView: 'surveyview',
			missionsView: 'missionsview',
			detailsView: 'detailsview',
			offersView: 'offersview',
			offerDetailsView: 'offerdetailsview',
			browseView: 'browseview',
			browseInstrumentsView: 'browseinstrumentsview',
			connectView: 'connectview',
			brandView: 'brandview',
		},
		control: {
			mainView: {
			},
			loginView: {
				AuthentificateCommand: 'AuthentificateCommand',
				ShowSignupViewCommand: 'ShowSignupViewCommand',
				getProfileCommand: 'getProfileHomeCommand',
				//ShowSurveyViewCommand: 'ShowSurveyViewCommand',
				onMissionTapCommand: 'onMissionTapCommand',
				onMissionDetailsTapCommand: 'onMissionDetailsTapCommand',
				onOffersTapCommand: 'onShowOffersView',
				onOffersDetailsTapCommand: 'onOffersDetailsTapCommand',
				onShareTapCommand: 'onShareTapCommand',
				getSpecialOffersCommand: 'getSpecialOffersCommand'
			},
			signupView: {
				// The commands fired by the signup view.
				signupCommand: 'signupCommand',
				backButtonCommandSignup: 'backButtonCommandSignup',
				AuthentificateCommand: 'AuthentificateCommand'
			},
			homeView: {
				backButtonCommandHome: 'backButtonCommandHome',
				oneditLabelCommand: 'oneditLabelCommand',
				//GoToProfileCommand: 'GoToProfileCommand',
				getProfileHomeCommand: 'getProfileHomeCommand'

			},
			sharetofacebookview: {
			},
			sharetotwitterview: {
			},
			editProfileView: {
				backButtonCommandProfile: 'backButtonCommandProfile',
				onbtnSavechangesCommandProfile: 'onbtnSavechangesCommandProfile',
				getLocationCommand: 'getLocationCommand'
			},
			surveyView: {
				SurveyBackButtonCommand: 'SurveyBackButtonCommand'
			},
			missionsView:
            {
            	LoadMissionDetailsCommand: 'LoadMissionDetailsCommand',
            	backButtonCommandMissions: 'backButtonCommandMissions'
            },
			detailsView: {
				LoadMissionDetailsCommand: 'LoadMissionDetailsCommand',
				backButtonCommandDetails: 'backButtonCommandDetails'
			},
			offersView: {
				LoadOfferDetailsCommand: 'LoadOfferDetailsCommand',
				backButtonCommandOffers: 'backButtonCommandOffers',
				LoadOfferSurveyCommand: 'ShowSurveyViewCommand',
				acceptMissionCommand: 'acceptMissionCommand',
				declineMissionCommand: 'declineMissionCommand',
				getAddressCommand: 'getAddressCommand',
				setAddressCommand: 'setAddressCommand',
				verifyAddressCommand: 'verifyAddressCommand',
				LoadMissionDetailsCommand: 'LoadMissionDetailsCommand',
				getLocationCommand: 'getLocationCommand'
			},
			offerDetailsView: {
				backButtonCommandOfferDetails: 'backButtonCommandOfferDetails',
				LoadMissionDetailsCommand: 'LoadMissionDetailsCommand'
			},
			browseView: {
				backButtonCommandBrowse: 'backButtonCommandSignup',
				onBrowseResultsByCategoryTapCommand: 'onBrowseResultsByCategoryTapCommand',
				onBrandTapCommand: 'onBrandTapCommand'
			},
			connectView: {
				backButtonCommandConnect: 'backButtonCommandSignup',
				onBrandTapCommand: 'onBrandTapCommand',
				onBrowseTapCommand: 'onBrowseTapCommand',
				onSearchTapCommand: 'onSearchTapCommand',
				onConnectTapCommand: 'onConnectTapCommand',
				onBrowseLoadCommand: 'onBrowseLoadCommand'
			},
			browseInstrumentsView: {
				backButtonCommandBrowseInstruments: 'backButtonCommandSignup'
			},
			brandView: {
				backButtonCommandBrand: 'backButtonCommandSignup'
			},
		}
	},

	// Tansitions
	slideLeftTransition: { type: 'slide', direction: 'left' },
	slideRightTransition: { type: 'slide', direction: 'right' },
	// Commands

	getSpecialOffersCommand: function (view, memberID, brandID) {
		//var me = this;
		//console.log("onBrandTapCommand");
		//smiley360.services.getBrandDetails(memberID, brandID,
		//	function (response) {
		//		if (response.success) {
		//			smiley360.specialOffersBrands.push = response;
		//			//me.fireEvent('getSpecialOffersCommand', this, smiley360.memberData.UserId, smiley360.memberData.SpecialOffers[0].brandID);
		//			//Ext.Viewport.animateActiveItem(
		//			//	me.getBrandView(), me.slideLeftTransition);
		//		}
		//		else {
		//			console.log('BrandDetails is corrupted!');//show error on view
		//		}
		//	});
	},
	backButtonCommandDetails: function () {
		//================================
		console.log("");
		//================================
		Ext.Viewport.animateActiveItem(this.getMissionsView(), this.slideLeftTransition);

		//this.activateForgetPassword();
	},
	onShareTapCommand: function () {
		console.log("onShareTapCommand");
		Ext.Viewport.animateActiveItem(this.getShareView(), this.slideLeftTransition);
	},
	onBrandTapCommand: function (from, memberID, brandID, start, howmany) {
		var me = this;
		console.log("onBrandTapCommand");
		smiley360.services.getConnectBrand(memberID, brandID, start, howmany,
			function (response) {
				if (response.success) {
					smiley360.brandData = response;
					Ext.getCmp('xMainView').showExternalView('brandview');
				}
				else {
					console.log('BrandDetails is corrupted!');//show error on view
				}
			});
	},

	onConnectTapCommand: function () {
		console.log("onConnectTapCommand");
		var me = this;
		smiley360.services.getFeaturedBrands(
								function (response) {
									if (response.success) {
										delete response.success;
										smiley360.FeaturedBrands = response;
									}
								});
	},
	onBrowseLoadCommand: function () {
		console.log("onBrowseLoadCommand");

	},
	onBrowseResultsByCategoryTapCommand: function (from, category, subcategory, index, pageSize) {
		console.log("onBrInstrTapCommand");
		var me = this;
		smiley360.services.getConnects_byCategory(category, subcategory, index, pageSize,
			function (response) {
				if (response.success) {
					smiley360.CategoryResults = response;
					Ext.getCmp('xMainView').showExternalView('browseinstrumentsview');
				}
				else {
					console.log('Categories is corrupted!');//show error on view
				}
			});
	},
	onSearchTapCommand: function (from, query, index, pageSize) {
		console.log("onSearchTapCommand");
		smiley360.SearchStr = '';
		var me = this;
		smiley360.services.getConnects_bySearch(query, index, pageSize,
			function (response) {
				//alert('Searched!');
				if (response.success) {
					smiley360.SearchStr = query;
					smiley360.SearchResults = response;
					Ext.getCmp('xMainView').showExternalView('browsesearchview');
				}
				else {
					console.log('Search is corrupted!');//show error on view
				}
			});
	},
	onBrowseTapCommand: function (from, memberID) {
		console.log("onBrowseTapCommand");
		var me = this;
		smiley360.services.getMyBrands(memberID,
			function (response) {
				if (response.success) {
					smiley360.memberData.UserBrands = response;
					delete response.success;
					smiley360.services.getHotBrands(
								function (response) {
									if (response.success) {
										delete response.success;
										smiley360.HotBrands = response;
										Ext.getCmp('xMainView').showExternalView('browseview');
									}
									else console.log('HotBrands is corrupted!');//show error on view

								});
				}
				else {
					console.log('UserBrandDetails is corrupted!');//show error on view
				}
			});

	},

	onLocalstoragetestTapCommand: function () {
		Ext.Viewport.animateActiveItem(this.getMyMainView(), this.slideLeftTransition);
	},

	onOffersDetailsTapCommand: function () {
		Ext.getCmp('xOfferView').showExternalView('offerdetailsview');
		//Ext.Viewport.animateActiveItem(this.getOfferDetailsView(), this.slideLeftTransition);
	},

	onShowOffersView: function (reloadData) {
		console.log("onShowOffersView -> reloadData:", reloadData === true);
		//if (smiley360.memberData.isProfileComplete.complete)
		if (reloadData === true) {
			var me = this;

			smiley360.services.getOffers(smiley360.memberData.UserId,
				function (response) {
					if (response.success) {
						delete response.success;
						smiley360.memberData.Offers = response;

						Ext.Viewport.animateActiveItem(
							me.getOffersView(), me.slideLeftTransition);
					}
					else {
						console.log('getOffers is corrupted!');//show error on view
					}
				});
		}
		else {
			Ext.Viewport.animateActiveItem(this.getOffersView(), this.slideLeftTransition);
		}

		//smiley360.services.getOffers(function (response) {
		//	if (response.success) {
		//		//alert('Get an offer: ' + response.userOffers[0].text);//provess/close view
		//		//Ext.getCmp('offers_label_text').setHtml(response.userOffers[0].text.toString());
		//	}
		//else {
		//	Ext.widget('missingoffersview').show();//alert('smth wrong');//show error on view
		//};
		//});
	},
	backButtonCommandOffers: function () {
		//================================
		console.log("");
		//================================
		Ext.Viewport.animateActiveItem(this.getHomeView(), this.slideLeftTransition);

		//this.activateForgetPassword();
	},

	backButtonCommandOfferDetails: function () {
		//================================
		console.log("");
		//================================
		Ext.Viewport.animateActiveItem(this.getHomeView(), this.slideLeftTransition);

		//this.activateForgetPassword();
	},

	backButtonCommandMissions: function () {
		//================================
		console.log("");
		//================================
		Ext.Viewport.animateActiveItem(this.getHomeView(), this.slideLeftTransition);

		//this.activateForgetPassword();
	},
	//getProfileCommand: function () {
	//    //================================
	//    console.log('getProfileCommand');
	//    //================================
	//    if (isLogined) { Ext.Viewport.animateActiveItem(this.getEditProfileView(), this.slideLeftTransition); }
	//},
	//GoToProfileCommand: function () {
	//    //================================
	//    console.log('GoToProfileCommand');
	//    //================================
	//    if (isLogined) { Ext.Viewport.animateActiveItem(this.getEditProfileView(), this.slideLeftTransition); }
	//},
	onMissionDetailsTapCommand: function () {
		Ext.getCmp('xMissionView').showExternalView('detailsview');
		Ext.getCmp('xDetailsView').hideSharePanel();
		//Ext.Viewport.animateActiveItem(this.getDetailsView(), this.slideLeftTransition);
	},

	onMissionTapCommand: function () {
		Ext.Viewport.animateActiveItem(this.getMissionsView(), this.slideLeftTransition);
	},

	oneditLabelCommand: function () {
		console.log("oneditLabelCommand");
		Ext.Viewport.animateActiveItem(this.getEditProfileView(), this.slideLeftTransition);

	},
	declineMissionCommand: function (from, memberID, missionID) {
		var me = this;
		console.log('offer declined');
		smiley360.services.declineMission(memberID, missionID,
			function (response) {
				if (response.success) {
					//smiley360.missionData.MissionDetails = response;

					//Ext.getCmp('xMainView').showExternalView('offerdetailsview');
				}
				else {
					console.log('Offer is not declined!');//show error on view
				}
			});
	},
	getAddressCommand: function (from, memberID) {
		var me = this;
		smiley360.services.getMemberAddress(memberID,
			function (response) {
				if (response.success) {

					for (var field in response) {
						if (field != "success")
							smiley360.memberData.Profile.field = response[field];
					}
					console.log('Address is got successfully!');
				}
				else {
					console.log('Address load error!');//show error on view
				}
			});
	},
	setAddressCommand: function (from, memberID, addr1, addr2, city, stateID, zip, countryID) {
		var me = this;
		alert('try set address');
		smiley360.services.setMemberAddress(memberID, addr1, addr2, city, stateID, zip, countryID,
			function (response) {
				if (response.success) {
					console.log('Address is set successfully!');
					//smiley360.missionData.MissionDetails = response;

					//Ext.getCmp('xMainView').showExternalView('offerdetailsview');
				}
				else {
					console.log('Address setting error!');//show error on view
				}
			});
	},
	verifyAddressCommand: function (from, memberID) {
		var me = this;
		smiley360.services.verifyMemberAddress(memberID,
			function (response) {
				if (response.success) {
					console.log('Address is verified successfully!');
					//smiley360.missionData.MissionDetails = response;

					//Ext.getCmp('xMainView').showExternalView('offerdetailsview');
				}
				else {
					console.log('Address verification error!');//show error on view
				}
			});
	},
	acceptMissionCommand: function (from, memberID, missionID) {
		var me = this;
		console.log('offer accepted');
		smiley360.services.acceptMission(memberID, missionID,
			function (response) {
				if (response.success) {
					//smiley360.missionData.MissionDetails = response;

					//Ext.getCmp('xMainView').showExternalView('offerdetailsview');
				}
				else {
					console.log('Offer is not accepted!');//show error on view
				}
			});
	},

	LoadOfferDetailsCommand: function (image, missionID, memberID) {
		var me = this;
		smiley360.services.getMissionDetails(missionID, memberID,
			function (response) {
				if (response.success) {
					smiley360.missionData.MissionDetails = response;

					Ext.getCmp('xMainView').showExternalView('offerdetailsview');
				}
				else {
					console.log('Offerdetails is corrupted!');//show error on view
				}
			});
	},
	LoadMissionDetailsCommand: function (image, missionID, memberID) {
		var me = this;
		console.log('MissionDetails is loaded for' + missionID);
		smiley360.services.getMissionDetails(missionID, memberID,
			function (response) {
				if (response.success) {
					if (smiley360.missionData.MissionDetails) {
						delete smiley360.missionData.MissionDetails;
						//alert('delete old mission');
						if (smiley360.missionData.MissionDetails == null) {
							//alert('new mission setting');
							smiley360.missionData.MissionDetails = response;
							if (smiley360.missionData.MissionDetails.MissionDetails.mission_full == true) {
								Ext.getCmp('xMainView').showExternalView('detailsview');
								Ext.getCmp('xDetailsView').setMissionDetails();
							};
							Ext.getCmp('xDetailsView').hideSharePanel();
						}
					}
					else {
						//alert('firstly mission setting');
						smiley360.missionData.MissionDetails = response;
						if (smiley360.missionData.MissionDetails.MissionDetails.mission_full == true)
							Ext.getCmp('xMainView').showExternalView('detailsview');
						Ext.getCmp('xDetailsView').hideSharePanel();
					}

				}
				else {
					console.log('Missiondetails is corrupted!');//show error on view
				}
			});
	},
	getLocationCommand: function (view, zip) {
		var me = this;
		console.log('Location is set');
		smiley360.services.getLocation(zip,
			function (response) {
				if (response.success) {
					if ((response.State != 0) && (response.City)) {
						smiley360.memberData.Profile.city = response.City;
						smiley360.memberData.Profile.stateID = response.State;
						smiley360.memberData.Profile.zip = zip;
						view.setAddress();
					};
					//Ext.getCmp('xMainView').showExternalView('offerdetailsview');
				}
				else {
					console.log('Location cannot be setted!');//show error on view
				}
			});
	},
	goContactUsCommand: function (view, memberID, name, email, category, comment) {
		var me = this;
		console.log('ContactUs comment is sent successfully!');
		smiley360.services.contactUs(memberID, name, email, category, comment,
			function (response) {
				if (response.success) {
					delete response.success;
					smiley360.memberData.ContactData = response;
					//Ext.getCmp('xMainView').showExternalView('offerdetailsview');
				}
				else {
					console.log('ContactUs comment cannot be sent!');//show error on view
				}
			});
	},
	AuthentificateCommand: function (view, login, password) {
		var me = this;

		//adding to localstorage;
		smiley360.services.authenticateservice(login, password,
			function (response) {
				isLogined = response.success;

				if (isLogined) {
					console.log('Index -> Login Successful!');

					me.updateMemberId(response.ID);
					me.loadMemberData(response.ID, function () {
						smiley360.animateViewLeft('mainview');
					});
				}
				else {
					console.log('Login unsuccessful!');

					Ext.getCmp('login_btn').enable();//show error on view
				};
			});
	},

	ShowSignupViewCommand: function () {
		//================================
		console.log('ShowSignupViewCommand');
		//================================
		smiley360.animateViewLeft('signupview');
		//Ext.getCmp('xMainView').showExternalView('signupview');
		//Ext.Viewport.animateActiveItem(this.getSignupView(), this.slideLeftTransition);
	},

	getProfileCommand: function () {
		//disabled
		console.log('getProfileCommand');

		Ext.Viewport.animateActiveItem(this.getEditProfileView(), this.slideLeftTransition);
	},

	getProfileHomeCommand: function () {
		//================================
		//working 
		console.log('getProfileHomeCommand');
		Ext.Viewport.animateActiveItem(this.getEditProfileView(), this.slideLeftTransition);
	},

	onbtnSavechangesCommandProfile: function () {
		//================================
		console.log('SavechangesCommand');

		var fields = new Array(
			'fName',
			'lName',
			'email',
			'birthdate',
			'gender',
			'blogURL',
			'aboutself',
			'address1',
			'address2',
			'city',
			'stateID',
			'zip',
			'marital',
			'children',
			'howmanychildren',
			'income',
			'race');

		var profArray = {};

		for (var field in fields) {
			(fields[field] == 'birthdate' || fields[field] == 'race') ?
			console.log('Datebirthfield or Race') ://profArray[fields[field]] = Ext.ComponentQuery.query('#' + fields[field])[0].getFormattedValue() :
			profArray[fields[field]] = Ext.ComponentQuery.query('#' + fields[field])[0].getValue();
			if (fields[field] == 'race') {
				profArray[fields[field]] = '';
				var chbArray = Ext.ComponentQuery.query('#ddlCheckboxes checkboxfield');
				for (var chbItem in chbArray)
					if (chbArray[chbItem].isChecked()) {
						if (profArray[fields[field]] == '')
							profArray[fields[field]] += chbArray[chbItem].getId().toString().substr(chbArray[chbItem].getId().toString().length - 1, chbArray[chbItem].getId().toString().length - 1)
						else profArray[fields[field]] += ',' + chbArray[chbItem].getId().toString().substr(chbArray[chbItem].getId().toString().length - 1, chbArray[chbItem].getId().toString().length - 1)
					}
				//alert(profArray[fields[field]]);
				if (!Ext.getCmp('ddlCheckboxes').isHidden())
				{
					profArray['aboutself'] = smiley360.memberData.Profile.aboutself;
					profArray['blogURL'] = smiley360.memberData.Profile.blogURL;
				}
			}
			
		}

		smiley360.services.setProfile(smiley360.memberData.UserId, profArray,
			function (response) {
				if (response.success) {
					console.log('Your changes aplied successfully!');
				}
				else {
					console.log('Set Profile return error!');//show error on view
				}
			});

		Ext.getCmp('xMainView').showExternalView('homeview');
	},

	ShowSurveyViewCommand: function (fromView, missionID) {
		//=========================================================
		console.log('ShowSurveyViewCommand -> offerId: ', missionID);
		//=========================================================
		if (isLogined) {
			var surveyView = this.getSurveyView();
			var surveyFrame = Ext.get('xSurveyFrame');
			var surveyFrameUrl = 'http://smileys.ekonx.net.ua/survey.html?deviceId=' + getCookie('deviceId') + '&offerId=' + missionID;

			surveyFrame.dom.src = surveyFrameUrl;

			Ext.Viewport.animateActiveItem(surveyView, this.slideLeftTransition);
		}
	},

	SurveyBackButtonCommand: function () {
		//================================
		console.log('SurveyBackButtonCommand');
		//================================
		Ext.Viewport.animateActiveItem(this.getHomeView(), this.slideLeftTransition);
	},

	signupCommand: function () {
		console.log("signupCommand");
		//Ext.Viewport.animateActiveItem(this.getHomeView(), this.slideLeftTransition);
		console.log('SignUpCommand');
		var me = this;
		var fields = new Array(
		   'first',
		   'last',
		   'username',
		   'password',
		   'email',
		   'zip',
		   'birthdate',
		   'gender');

		var profArray = {};

		for (var field in fields) {
			if ((fields[field] != 'username') && (fields[field] != 'birthdate'))
				profArray[fields[field]] = Ext.ComponentQuery.query('#' + fields[field] + '_signup')[0].getValue(fields[field]);
			if (fields[field] == 'birthdate')
				profArray[fields[field]] = Ext.ComponentQuery.query('#' + fields[field] + '_signup')[0].getFormattedValue(fields[field]);
		}

		smiley360.services.signupMember(profArray.first,
										profArray.last,
										profArray.username,
										profArray.password,
										profArray.email,
										profArray.zip,
										profArray.birthdate,
										profArray.gender,
			function (response) {
				if (response.success) {
					console.log('Member signup is done successfully!');
				}
				else {
					console.log('Member signup returned an error!');
				}
			});

	},

	backButtonCommandHome: function () {
		console.log('Back button command home');
		Ext.Viewport.animateActiveItem(this.getLoginView(), this.slideRightTransition);
	},

	backButtonCommandProfile: function () {
		console.log('Back button command profile');
		Ext.Viewport.animateActiveItem(this.getHomeView(), this.slideRightTransition);
	},

	backButtonCommandSignup: function () {
		console.log('Back button command signup');
		Ext.Viewport.animateActiveItem(this.getLoginView(), this.slideRightTransition);
	},

	loadBrandData: function (memberID, brandID) {
		var me = this;

		smiley360.services.getBrandDetails(memberID, brandID,
			function (response) {
				if (response.success) {
					smiley360.memberData.SpecialOfferBrand = response;
				}
				else {
					//TODO: show error message on view
					console.log('Index -> [getBrandDetails] return error!');
				}
			});
	},

	loadMemberData: function (memberId, success) {
		var me = this;

		smiley360.services.getMemberData(memberId,
			function (response) {
				if (response.success) {
					isLogined = true;
					smiley360.memberData = response;

					if (success)
						success();
				}
				else {
					//TODO: show error message on view
					console.log('Index -> [getMemberData] return error!');
				}
			});
	},

	updateMemberId: function (memberId) {
		var members = Ext.getStore('Members');

		members.removeAll();
		members.add({ memberId: memberId });
		members.sync();
	},

	doJavascriptLoad: function (jsPath, callback) {
		var onload = function () {
			console.log('Index -> [' + jsPath + '] loading done!');

			callback({ success: true });
		}

		var onerror = function () {
			console.log('Index -> [' + jsPath + '] loading error!');

			callback({ success: false });
		}

		Ext.Loader.injectScriptElement(jsPath, onload, onerror, this);
	},

	loadProfileDropdowns: function (success) {
		smiley360.services.getProfileDropdowns(
			function (response) {
				if (response.success) {
					smiley360.ProfileDropdowns = response;
					console.log('Index -> [loadProfileDropdowns] completed!');

					if (success) {
						success();
					}
				}
				else {
					console.log('Index -> [loadProfileDropdowns] corrupted!');
				}
			});
	},

	tryLoginUser: function () {
		var members = Ext.getStore('Members');

		if (members.getCount() > 0) {
			var memberId = members.getAt(0).data.memberId;

			console.log('Index -> [tryLoginUser] with stored memberId:' + memberId);

			this.loadMemberData(memberId, function () {
				smiley360.destroySplash();
				smiley360.animateViewLeft('mainview');
			});
		}
		else {
			var me = this;
			var deviceId = getCookie('deviceId');

			console.log('Index -> [tryLoginUser] with cached deviceId:' + deviceId);

			smiley360.services.getMemberIdByDeviceId(deviceId,
				function (response) {
					if (response.success) {
						console.log('Index -> [tryLoginUser] with received memberId:' + response.ID);

						me.updateMemberId(response.ID);
						me.loadMemberData(response.ID, function () {
							smiley360.destroySplash();
							smiley360.animateViewLeft('mainview');
						});
					}
					else {
						console.log('Index -> [tryLoginUser] don\'t received memberId for deviceId:' + deviceId);

						smiley360.destroySplash();
						smiley360.animateViewLeft('loginview');
					}
				});
		}
	},

	//	Base Class functions.
	init: function () {
		//================================
		console.log("Index -> initialized!");
		//================================
		//this.callParent(arguments);
	},

	launch: function () {
		//================================
		console.log('Index -> launched!');
		//================================
		var me = this;

		me.callParent(arguments);
		me.doJavascriptLoad('app/services/Configuration.js',
			function (response) {
				if (!response.success) { return }

				me.doJavascriptLoad('app/services/Services.js',
					function (response) {
						if (!response.success) { return }

						if (smiley360.configuration.isDebugMode()) {
							me.doJavascriptLoad('app/services/Services.mock.js',
								function (response) {
									if (!response.success) { return }

									me.loadProfileDropdowns(function () {
										me.tryLoginUser();
									});
								});

						}
						else {
							me.loadProfileDropdowns(function () {
								me.tryLoginUser();
							});
						}
					});
			});
	}
});

/* Global models and methods */

smiley360.memberData = {};
smiley360.missionData = {};
smiley360.brandData = {};
smiley360.SearchStr = {};
//changeuserProfileImage
smiley360.userProfileImage = 'resources/images/smile-missions.png';

smiley360.viewStatus =
{
	initial: 'initial',
	progress: 'progress',
	successful: 'successful',
	unsuccessful: 'unsuccessful',
}

smiley360.sharingType =
{
	facebook: '2',
	twitter: '3',
	shareLink: '4',
	face2face: '5',
	smileyConnect: '6',
	uploadPhoto: '9',
	blog: '10',
	youtube: '11',
	pinterest: '12',
}

smiley360.setResponseStatus = function (view, response) {
	var status = response.success ?
        smiley360.viewStatus.successful :
        smiley360.viewStatus.unsuccessful;

	smiley360.setViewStatus(view, status);
}

smiley360.setViewStatus = function (view, status) {
	var viewName = Ext.getDisplayName(view);
	var logMessage = Ext.String.format(
        'Global -> setViewStatus: { view: {0}, status: {1} }', viewName, status);

	console.log(logMessage);

	var xShareButton = view.down('#xShareButton');
	var xStatusIndicator = view.down('#xStatusIndicator');
	var statusAnimation = {
		element: xStatusIndicator.element,
		easing: 'ease-out',
		duration: 2000,
		preserveEndState: true,
		from: { width: 0 },
		to: { width: view.getWidth() },
	};

	switch (status) {
		case smiley360.viewStatus.progress: {
			xShareButton.setText('POSTING...');

			if (xShareButton.getIcon()) {
				xShareButton.setIcon('resources/images/share-initial.png');
			}

			xStatusIndicator.setStyle('background-color: #F9A419;');

			statusAnimation.onEnd = function () {
				if (xShareButton.getText() == 'POSTING...') {
					Ext.Animator.run(statusAnimation);
				}
			};

			break;
		}
		case smiley360.viewStatus.successful: {
			xShareButton.setText('POST SUCCESSFUL');

			if (xShareButton.getIcon()) {
				xShareButton.setIcon('resources/images/share-successful.png');
			}

			xStatusIndicator.setStyle('background-color: #5F9E45;');

			statusAnimation.duration = 100;
			statusAnimation.easing = 'ease-in',
            statusAnimation.from = { width: xStatusIndicator.getWidth() };

			break;
		}
		case smiley360.viewStatus.unsuccessful: {
			xShareButton.setText('POST UNSUCCESSFUL');

			if (xShareButton.getIcon()) {
				xShareButton.setIcon('resources/images/share-unsuccessful.png');
			}

			xStatusIndicator.setStyle('background-color: #ED1C24;');

			statusAnimation.duration = 100;
			statusAnimation.easing = 'ease-in',
            statusAnimation.from = { width: xStatusIndicator.getWidth() };

			break;
		}
		default:
	}

	Ext.Animator.run(statusAnimation);
}

smiley360.adjustPopupSize = function (view) {
	var contentHeight = view.down('#xRootPanel').element.getHeight();
	var containerHeight = Ext.Viewport.element.getHeight() * 0.9;

	if (containerHeight > contentHeight) {
		view.setHeight(contentHeight);
	}
	else {
		view.setHeight(containerHeight);
	}
}

smiley360.animateViewLeft = function (viewAlias) {
	var view = smiley360.getOrCreateView(viewAlias);

	console.log('Global -> opened [' + viewAlias + ']');

	Ext.Viewport.animateActiveItem(view, { type: 'slide', direction: 'left' });
}

smiley360.getOrCreateView = function (viewAlias) {
	var view = Ext.Viewport.down(viewAlias);
	//create the form if it doesn't exists
	if (view == null) {
		view = Ext.Viewport.add({ xtype: viewAlias });

		console.log('Global -> created [' + viewAlias + ']');
	}

	return view;
}

smiley360.destroySplash = function () {
	// Destroy the #appLoadingIndicator element
	Ext.fly('appLoadingIndicator').destroy();
}
