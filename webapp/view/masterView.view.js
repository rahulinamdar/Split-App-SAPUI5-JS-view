sap.ui.jsview("sap.ui.Demo.view.masterView", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf sap.ui.Demo.view.masterView
	 */
	getControllerName: function() {
		return "sap.ui.Demo.controller.masterView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf sap.ui.Demo.view.masterView
	 */
	createContent: function(oController) {
	var oList =  new sap.m.List("List",{
			items:[
				new sap.m.StandardListItem(
					{
						title: "Item1", // string
						type: "Active"
					}
				),
				new sap.m.StandardListItem(
					{
						title: "Item2" // string
					}
				)
				],
				itemPress:function(oEvent){
					oController.press(oEvent);
				}
		});
		
		
		return new sap.m.Page(
			{
				title: "Mater", // string
				content: [oList]// sap.ui.core.Control[]
			}
		);
		
	}

});