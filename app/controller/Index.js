var isLogined = false;

Ext.define('smiley360.controller.Index', {
    extend: 'Ext.app.Controller',
    requires: ['smiley360.store.Members', 'smiley360.model.Member'],
    config: {
        id: 'ParentController',
        refs: {
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
            shareView: 'shareview',
        },
        control: {
            loginView: {
                AuthentificateCommand: 'AuthentificateCommand',
                ShowSignupViewCommand: 'ShowSignupViewCommand',
                getProfileCommand: 'getProfileHomeCommand',
                ShowSurveyViewCommand: 'ShowSurveyViewCommand',
                onMissionTapCommand: 'onMissionTapCommand',
                onMissionDetailsTapCommand: 'onMissionDetailsTapCommand',
                onOffersTapCommand: 'onOffersTapCommand',
                onOffersDetailsTapCommand: 'onOffersDetailsTapCommand',
                onBrowseTapCommand: 'onBrowseTapCommand',
                onConnectTapCommand: 'onConnectTapCommand',
                onBrowseInstrumentsTapCommand: 'onBrowseInstrumentsTapCommand',
                onBrandTapCommand: 'onBrandTapCommand',
                onShareTapCommand: 'onShareTapCommand',
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
                getProfileHomeCommand: 'getProfileHomeCommand',
            },
            sharetofacebookview: {
            },
            sharetotwitterview: {
            },
            editProfileView: {
                backButtonCommandProfile: 'backButtonCommandProfile',
                onbtnSavechangesCommandProfile: 'onbtnSavechangesCommandProfile',
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
				
                backButtonCommandDetails: 'backButtonCommandDetails'
            },
            offersView: {
				LoadOfferDetailsCommand: 'LoadOfferDetailsCommand',
                backButtonCommandOffers: 'backButtonCommandOffers'
            },
            offerDetailsView: {
                backButtonCommandOfferDetails: 'backButtonCommandOfferDetails'
            },
            browseView: {
                backButtonCommandBrowse: 'backButtonCommandSignup'
            },
            connectView: {
                backButtonCommandConnect: 'backButtonCommandSignup'
            },
            browseInstrumentsView: {
                backButtonCommandBrowseInstruments: 'backButtonCommandSignup'
            },
            brandView: {
                backButtonCommandBrand: 'backButtonCommandSignup'
            },
            shareView: {
                backButtonCommandShare: 'backButtonCommandSignup'
            },
        }
    },

    // Tansitions
    slideLeftTransition: { type: 'slide', direction: 'left' },
    slideRightTransition: { type: 'slide', direction: 'right' },
    // Commands


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
    onBrandTapCommand: function () {
        console.log("onBrandTapCommand");
        Ext.Viewport.animateActiveItem(this.getBrandView(), this.slideLeftTransition);
    },
    onConnectTapCommand: function () {
        console.log("onConnectTapCommand");
        Ext.Viewport.animateActiveItem(this.getConnectView(), this.slideLeftTransition);
    },
    onBrowseInstrumentsTapCommand: function () {
        console.log("onConnectTapCommand");
        Ext.Viewport.animateActiveItem(this.getBrowseInstrumentsView(), this.slideLeftTransition);
    },
    onBrowseTapCommand: function () {
        console.log("onConnectTapCommand");
        Ext.Viewport.animateActiveItem(this.getBrowseView(), this.slideLeftTransition);
    },

    onLocalstoragetestTapCommand: function () {
        Ext.Viewport.animateActiveItem(this.getMyMainView(), this.slideLeftTransition);
    },

    onOffersDetailsTapCommand: function () {
        Ext.Viewport.animateActiveItem(this.getOfferDetailsView(), this.slideLeftTransition);
    },

    onOffersTapCommand: function () {

        //if (smiley360.memberData.isProfileComplete.complete)
        Ext.Viewport.animateActiveItem(this.getOffersView(), this.slideLeftTransition)

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
        Ext.Viewport.animateActiveItem(this.getDetailsView(), this.slideLeftTransition);
    },

    onMissionTapCommand: function () {
        Ext.Viewport.animateActiveItem(this.getMissionsView(), this.slideLeftTransition);
    },

    oneditLabelCommand: function () {
        console.log("oneditLabelCommand");
        Ext.Viewport.animateActiveItem(this.getEditProfileView(), this.slideLeftTransition);

    },
    LoadOfferDetailsCommand: function (image, missionID, memberID)
	{
		var me = this;
		smiley360.services.getMissionDetails(missionID, memberID,
			function (response) {
				if (response.success) {
					smiley360.missionData.MissionDetails = response;

					Ext.Viewport.animateActiveItem(
						me.getOfferDetailsView(), me.slideLeftTransition);
				}
				else {
					console.log('Offerdetails is corrupted!');//show error on view
				}
			});
	},
	LoadMissionDetailsCommand: function (image, missionID, memberID)
	{
		var me = this;
		smiley360.services.getMissionDetails(missionID, memberID,
			function(response) {
				if (response.success) {
					smiley360.missionData.MissionDetails = response;

					Ext.Viewport.animateActiveItem(
						me.getDetailsView(), me.slideLeftTransition);
				}
				else {
					console.log('Missiondetails is corrupted!');//show error on view
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
                    me.getMemberData(response.ID);
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
        Ext.Viewport.animateActiveItem(this.getSignupView(), this.slideLeftTransition);
    },

    getProfileCommand: function () {
        //================================
        console.log('getProfileCommand');
        //================================
        //smiley360.services.getProfile(memberID,
        //    function (response) {
        //        if (response.success) {
        //            alert('Profile: ' + response);
        //        }
        //        else {
        //            alert('Profile is corrupted!');//show error on view
        //        }
        //    });
        if (isLogined) { Ext.Viewport.animateActiveItem(this.getEditProfileView(), this.slideLeftTransition); }
    },

    getProfileHomeCommand: function () {
        //================================
        console.log('getProfileHomeCommand');
        //================================

        if (isLogined) {
            Ext.Viewport.animateActiveItem(
                this.getEditProfileView(), this.slideLeftTransition);
        }
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
            'income');

        var profArray = {};

        for (var field in fields) {
            (fields[field] == 'birthdate') ?
			profArray[fields[field]] = Ext.ComponentQuery.query('#' + fields[field])[0].getFormattedValue() :
			profArray[fields[field]] = Ext.ComponentQuery.query('#' + fields[field])[0].getValue();
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

        if (isLogined) {
            Ext.Viewport.animateActiveItem(this.getEditProfileView(), this.slideLeftTransition);
        }
    },

    ShowSurveyViewCommand: function () {
        //================================
        console.log('ShowSurveyViewCommand');
        //================================
        if (isLogined) { Ext.Viewport.animateActiveItem(this.getSurveyView(), this.slideLeftTransition); }
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

    getMemberData: function (memberId) {
        var me = this;

        smiley360.services.getMemberData(memberId,
            function (response) {
                if (response.success) {
                    smiley360.memberData = response;
                    Ext.Viewport.animateActiveItem(me.getHomeView(), me.slideRightTransition);
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

    tryLoginUser: function () {
        var members = Ext.getStore('Members');

        if (members.getCount() > 0) {
            var memberId = members.getAt(0).data.memberId;

            console.log('Index -> [tryLoginUser] memberId:' + memberId);

            this.getMemberData(memberId);
        }
        else {
            var me = this;
            var deviceId = getCookie('deviceId');

            smiley360.services.getMemberIdByDeviceId(deviceId,
                function (response) {
                    if (response.success) {
                        me.updateMemberId(response.ID);
                        me.getMemberData(response.ID);
                    }
                    else {
                        //Ext.Viewport.add({ xtype: 'loginview' });
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

                                    me.tryLoginUser();
                                });

                        }
                        else {
                            me.tryLoginUser();
                        }
                    });
            });
    }
});

/* Global models and methods */

smiley360.memberData = {};
smiley360.missionData = {};
smiley360.viewStatus =
{
    initial: 'initial',
    progress: 'progress',
    successful: 'successful',
    unsuccessful: 'unsuccessful',
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

    view.setStatus(status);
}

//smiley360.animateViewLeft = function (viewAlias) {
//    var view = smiley360.getOrCreateView(viewAlias);

//    console.log('Global -> opened [' + viewAlias + ']');

//    Ext.Viewport.animateActiveItem(view, this.slideLeftTransition);
//}

//smiley360.getOrCreateView = function (viewAlias) {
//    var view = Ext.Viewport.down(viewAlias);
//    //create the form if it doesn't exists
//    if (view == null) {
//        view = Ext.widget(viewAlias);

//        Ext.Viewport.add(view);

//        console.log('Global -> created [' + viewAlias + ']');
//    }

//    return Ext.valueOf(view);
//}
