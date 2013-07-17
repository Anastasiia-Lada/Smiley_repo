var str;
smiley360 = smiley360 || {};
smiley360.services = smiley360.services || {};
Ext.require('Ext.data.JsonP');
smiley360.services.authenticate = function (login, password, onCompleted)
{
    
    Ext.data.JsonP.request({
        url: 'http://free.worldweatheronline.com/feed/weather.ashx',
        callbackKey: 'callback',
        params: {
            key: '23f6a0ab24185952101705',
            q: '94301',
            // Palo Alto
            format: 'json',
            num_of_days: 5
        },
        success: function (result, request) {

            var weather = result.data.weather;
            if (weather) {
                Ext.getCmp('login_btn').setText('The' + weather[0].tempMaxF + '° F</b>');
                
            }
        }
    });
	smiley360.services.ajax(
		"authenticate",
		{
			email: login,
			password: password
		},
		function (response)
		{
			response.success = response.success && response.memberID;
			onCompleted(response);
		});
};
/* Restore Password */

smiley360.services.recoverPassword = function (email, onCompleted)
{
	smiley360.services.ajax(
	"recoverPassword",
	{
		email: email
	},
	onCompleted);
}
/*getProfile*/
smiley360.services.getProfile = function (memberID, onCompleted) {
    smiley360.services.ajax(
		"getProfile",
		{
		    memberID: memberID
		},
		function (response) {
		    response.success = response.success && response.memberID;
		    onCompleted(response);
		});
};

/* Share Services Commands */
smiley360.services.shareToBlog = function (shareData, onCompleted)
{
}

smiley360.services.shareToFacebook = function (shareData, onCompleted)
{
}

smiley360.services.serverUrl = "http://173.18.18.52/index.php/";
smiley360.services.ajax = function (method, params, onCompleted)
{
	Ext.data.JsonP.request(
	{
		url: smiley360.services.serverUrl + "?method=" + method + "&params=" + Ext.JSON.encode(params),
		callback: function (result, response)
		{
			onCompleted(Ext.apply({ success: (result && !response.error) }, response));
		}
	});
};