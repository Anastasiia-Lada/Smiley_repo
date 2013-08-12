Ext.define('smiley360.view.Login', {
    extend: 'Ext.form.Panel',
    requires: [
        'Ext.Img',
        'Ext.Label',
        'Ext.form.FieldSet',
        'Ext.form.Password',
        'Ext.field.Text',
    ],
    alias: 'widget.loginview',
    config: {
        id: 'xLoginView',
        cls: 'page-bg',
        title: 'Login',
        padding: '15px',
        scrollable: 'none',
        items: [{
            xtype: 'image',
            src: 'resources/images/logo.png',
            cls: 'logo'
        }, {
            xtype: 'spacer',
            height: '14px'
        }, {
            xtype: 'panel',
            cls: 'login-box',
            height: '254px',
            items: [{
                xtype: 'textfield',
                placeHolder: 'Username',
                itemId: 'txtUserName',
                id: 'txtLogin',
                name: 'txtUserName',
                cls: 'cust-input cust-input-user',
                clearIcon: false,
                required: true,
                value: 'mantelln@hotmail.com',
            }, {
                xtype: 'passwordfield',
                maxHeight: '20px',
                placeHolder: '******',
                id: 'txtPassword',
                itemId: 'txtPassword',
                name: 'txtPassword',
                cls: 'cust-input cust-input-pwd',
                clearIcon: false,
                required: true,
                value: 'General1234',
            }, {
                xtype: 'spacer',
                height: '12px'
            }, {
                xtype: 'button',
                itemId: 'xLogin',
                id: 'login_btn',
                cls: 'cust-btn login-btn',
                text: 'LOG IN'
            }, {
                xtype: 'label',
                id: 'xForgetPassword',
                html: 'Lost your password?',
                cls: 'left cust-label'
            }, {
                xtype: 'label',
                id: 'xSignup',
                html: 'Need to set up a New Account?',
                cls: 'right cust-label'
            }, {
                xtype: 'spacer',
                cls: 'clear',
                height: '27px'
            }, {
                xtype: 'button',
                text: 'LOG IN WITH FACEBOOK',
                ui: 'action',
                listeners: {
                    tap: function () {
                        window.location = 'http://smileys.ekonx.net.ua/oauth/Facebook.html?deviceId=' + getCookie('deviceId');
                    }
                }
            }, {
                xtype: 'button',
                text: 'LOG IN WITH TWITTER',
                ui: 'action',
                listeners: {
                    tap: function () {
                        window.location = 'http://smileys.ekonx.net.ua/oauth/Twitter.html?deviceId=' + getCookie('deviceId');
                    }
                }
            }, {
                xtype: 'panel',
                layout: 'hbox',
                items: [  ]
            }, {
                xtype: 'panel',
                layout: 'hbox',
                items: [{  xtype: 'button',
                    style: 'background-color: #3f4b4e !important;',
                    itemId: 'xSurvey',
                    text: 'S',
                    width: '50px',
                    ui: 'action',
                    tap: 'onSurveyTap'
                }],
            }, {
                xtype: 'panel',
                layout: 'hbox',
                items: [ ],
            }, ],
        }],
        listeners: [{
            delegate: "#xShare",
            fn: "onShareTap",
            event: "tap",
        }, {
            delegate: "#xBrand",
            fn: "onBrandTap",
            event: "tap",
        }, {
            delegate: "#xConnect",
            fn: "onConnectTap",
            event: "tap",
        }, {
            delegate: "#xBrowseInstruments",
            fn: "onBrowseInstrumentsTap",
            event: "tap",
        }, {
            delegate: "#xBrowse",
            fn: "onBrowseTap",
            event: "tap",
        }, {
            delegate: "#xOffersDetails",
            fn: "onOffersDetailsTap",
            event: "tap",
        }, {
            delegate: "#xOffers",
            fn: "onOffersTap",
            event: "tap",
        }, {
            delegate: "#xMission",
            fn: "onMissionTap",
            event: "tap",
        }, {
            delegate: "#xMissionDetails",
            fn: "onMissionDetailsTap",
            event: "tap",
        }, {
            delegate: "#xLogin",
            fn: "onLoginTap",
            event: "tap",
        }, {
            delegate: 'div#xSignup',
            fn: 'onSignupTap',
            element: 'element',
            event: 'tap',
        }, {
            delegate: 'div#xForgetPassword',
            fn: 'onForgetPasswordTap',
            event: 'tap',
            element: 'element',
        }, {
            delegate: "#xEditProfile",
            fn: "onEditProfileTap",
            event: "tap",
        }, {
            delegate: "#xSurvey",
            fn: "onSurveyTap",
            event: "tap",
        }]
    },
    onShareTap: function () {
        //================================
        console.log("onShareTap");
        //================================
        this.fireEvent('onShareTapCommand', this);
    },
    onBrandTap: function () {
        //================================
        console.log("onBrandTap");
        //================================
        this.fireEvent('onBrandTapCommand', this);
    },
    onConnectTap: function () {
        //================================
        console.log("onConnectTap");
        //================================
        this.fireEvent('onConnectTapCommand', this);
    },
    onBrowseInstrumentsTap: function () {
        //================================
        console.log("onBrowseTap");
        //================================
        this.fireEvent('onBrowseResultsByCategoryTapCommand', this);
    },
    onBrowseTap: function () {
        //================================
        console.log("onBrowseTap");
        //================================
        this.fireEvent('onBrowseTapCommand', this);
    },

    onLocalstoragetestTap: function () {
        //================================
        console.log("onLocalstoragetestTap");
        //================================
        this.fireEvent('onLocalstoragetestTapCommand', this);
    },

    onOffersDetailsTap: function () {
        //================================
        console.log("onLoginTap");
        //================================
        this.fireEvent('onOffersDetailsTapCommand', this);
    },

    onOffersTap: function () {
        //================================
        console.log("onLoginTap");
        //================================
        this.fireEvent('onOffersTapCommand', this);
    },

    onMissionDetailsTap: function () {
        //================================
        console.log("onLoginTap");
        //================================
        this.fireEvent('onMissionDetailsTapCommand', this);
    },

    onMissionTap: function () {
        //================================
        console.log("onLoginTap");
        //================================
        this.fireEvent('onMissionTapCommand', this);
    },

    onLoginTap: function () {
        Ext.getCmp('login_btn').setDisabled(true);
        this.fireEvent('AuthentificateCommand', this, this.down("#txtLogin").getValue(), this.down("#txtPassword").getValue());


    },

    onSignupTap: function () {
        //================================
        console.log("onSignupTap");
        //================================
        this.fireEvent('ShowSignupViewCommand', this);
    },

    onForgetPasswordTap: function () {
        Ext.widget('forgetpasswordview').show();
    },

    onEditProfileTap: function () {
        this.fireEvent('getProfileCommand', this);
    },

    onSurveyTap: function () {
        //================================
        console.log("onSurveyTap");
        //================================
        //this.fireEvent('ShowSurveyViewCommand', this);
    },

    getAuthData: function () {
        var getView = this;
        var getData = {
            loginData: Ext.getCmp('txtLogin').getValue(),
            passwordData: Ext.getCmp('txtPassword').getValue()
        };
        //smiley360.authenticate(getView, getData.loginData, getData.passwordData);
    },
});
