sap.ui.jsview("sap.ui.Demo.view.home", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf sap.ui.Demo.view.home
	 */
	getControllerName: function() {
		return "sap.ui.Demo.controller.home";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf sap.ui.Demo.view.home
	 */
	createContent: function(oController) {
		var oPage = new sap.m.Page({
			title: "Home",
			content: [
			    new sap.m.Button({
			        text:"navigate"
			    }).attachPress(oController.click,oController),
			    new sap.m.Button({
			        text:"SplitApp"
			    }).attachPress(oController.clickSplit,oController)
			    ]
		});

		
		return oPage;
	}

});