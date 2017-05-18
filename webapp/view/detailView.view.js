sap.ui.jsview("sap.ui.Demo.view.detailView", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf sap.ui.Demo.view.detailView
	 */
	getControllerName: function() {
		return "sap.ui.Demo.controller.detailView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf sap.ui.Demo.view.detailView
	 */
	createContent: function(oController) {
		var oText =  new sap.m.Text({
				text: "Hello World" // string
			});
			
				return new sap.m.Page(
			{
				title: "Mater", // string
				content: [oText]// sap.ui.core.Control[]
			}
		);
		
	}

});