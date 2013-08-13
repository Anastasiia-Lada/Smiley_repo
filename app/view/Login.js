Ext.define('smiley360.view.Login', {
    extend: 'Ext.form.Panel',
    alias: 'widget.loginview',
    requires: [
        'Ext.Img',
        'Ext.Label',
        'Ext.form.FieldSet',
        'Ext.form.Password',
        'Ext.field.Text',
    ],
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
            }],
        }],

        listeners: [{
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
        }]
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
});
