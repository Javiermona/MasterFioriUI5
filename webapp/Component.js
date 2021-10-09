sap.ui.define([
    "sap/ui/core/UIComponent",      
    "logaligroup/invoces/model/Models", 
    "sap/ui/model/resource/ResourceModel"
],
/**
 * @param {typeof sap.ui.core.UIComponen}  UIComponen
 * @param {typeof sap.ui.model.resource.ResourceModel}  ResourceModel  
 */
    function (UIComponent, Models, ResourceModel) {

    return UIComponent.extend("logaligroup.invoces.Component", {

        metadata: {
            manifest:  "json"
        },
        init: function () { // call init function of the parent
            UIComponent.prototype.init.apply(this, arguments)
            // Logica

            // Vincular la vista
            this.setModel(Models.createRecipient());
            // set data modelo
            // Set i18n
            var i18nModel = new ResourceModel({bundleName: "logaligroup.invoces.i18n.i18n"});
            this.setModel(i18nModel, "i18n");
        }
    });

});
