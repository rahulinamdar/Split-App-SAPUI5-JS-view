sap.ui.jsview("sap.ui.Demo.view.splitApp", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf sap.ui.Demo.view.splitApp
	 */
	getControllerName: function() {
		return "sap.ui.Demo.controller.splitApp";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf sap.ui.Demo.view.splitApp
	 */
	createContent: function(oController) {

		var app = new sap.m.SplitApp("mySplitApp");
		return app;
	}

});