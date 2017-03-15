(function() {

	Ext.require('CMDBuild.core.constants.Proxy');

	Ext.define('CMDBuild.model.common.field.grid.KeyValue', {
		extend: 'Ext.data.Model',

		fields: [
			{ name: CMDBuild.core.constants.Proxy.KEY, type: 'string' },
			{ name: CMDBuild.core.constants.Proxy.VALUE, type: 'string' }
		]
	});

})();