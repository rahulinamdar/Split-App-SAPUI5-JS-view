sap.ui.define([
	"sap/ui/Demo/controller/BaseController"
], function(BaseController) {
	"use strict";

	return BaseController.extend("sap.ui.Demo.controller.New", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf sap.ui.Demo.view.New
		 */
			onInit: function() {
				var oRouter = this.getRouter();
					var oTarget = oRouter.getTarget("new");
					oTarget.attachDisplay(function(oEvent){
						console.log(oEvent);
						alert("this will call every time");
					});
			},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf sap.ui.Demo.view.New
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf sap.ui.Demo.view.New
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf sap.ui.Demo.view.New
		 */
		//	onExit: function() {
		//
		//	}
		back:function(oEvent){
		    this.onNavBack()
		}

	});

});