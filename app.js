//http://docs.sencha.com/extjs/4.2.2/#!/example/build/KitchenSink/ext-theme-neptune/#tree-two
Ext.application({
    name: 'ClearOne',
    views: ['projects.List', 'templates.Tree', 'templates.Toolbar', 'projects.Info'],
    controllers: ['projects.Projects'],
    
    launch : function(){
        
        Ext.create('Ext.container.Viewport', 
        {
            layout : 'border',
            bodyBorder: false,
			defaults: {
				collapsible: true,
				split: true,
				bodyPadding: 15
			},
            items: [{
				title: 'Footer',
				region: 'north',
				height: 50,
				minHeight: 50,
				maxHeight: 50,
				xtype: 'Toolbar',
			},{
				title: 'Navigation',
				region:'west',
				floatable: false,
				margins: '0 0 0 0',
				width: 250,
				minWidth: 100,
				maxWidth: 450,
				bodyPadding: 0,
				items:[{
					xtype: 'Tree',
					ui: 'highlight',
					margins: '0 0 0 0',
					frame: true,
					bodyPadding: 0
				}]
			},{
				collapsible: false,
				region: 'center',
				margins: '5 0 0 0',
				layout: 'absolute',
				bodyPadding: 0,
				items:[{
					xtype: 'ProjectsInfo',
					margins: '0 0 0 0',
					bodyPadding: 0
				}]
			}]
        });
        
    }
});
