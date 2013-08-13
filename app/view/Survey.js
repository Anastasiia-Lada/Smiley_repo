Ext.define('smiley360.view.Survey', {
    extend: 'Ext.Panel',
    alias: 'widget.surveyview',
    config: {
        title: 'Take This Survey',
        items: [{
            xtype: 'container',
            cls: 'popup-survey-innerpanel',
            html: '<iframe id="xSurveyFrame" frameborder="0" scrolling="no" class="popup-survey-iframe"></iframe>'
        }],
    },
});