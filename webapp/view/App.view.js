sap.ui.jsview("sap.ui.Demo.view.App", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf sap.ui.Demo.view.App
	 */
	getControllerName: function() {
		return "sap.ui.Demo.controller.App";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf sap.ui.Demo.view.App
	 */
	createContent: function(oController) {
		

		var app = new sap.m.App("app", {
		});
		return app;
	}

});