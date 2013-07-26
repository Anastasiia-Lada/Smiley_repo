Ext.define('smiley360.model.Member', {
    extend: 'Ext.data.Model',
    config: {
        identifier: 'sequential',
        fields: [
            { name: 'memberId', type: 'string' },
        ],
        proxy: {
            type: 'localstorage',
            id: 'member'
        }
    }
});