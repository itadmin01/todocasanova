odoo.define('custom_invoice.ConfirmPopup',function(require){'use strict';

const AbstractAwaitablePopup=require('point_of_sale.AbstractAwaitablePopup');
const Registries=require('point_of_sale.Registries');
const{useState,useRef}=owl.hooks;
const{useListener}=require('web.custom_hooks');
// formerly ConfirmPopupWidget
class CDFIDetailPopupWidget extends AbstractAwaitablePopup {
	/*
	 * constructor() { super(...arguments); useListener('click', this.onClick);
	 * 
	 * }
	 */
	constructor() {
        super(...arguments);
        
    }
	async getPayload() {
		return null;
	}
	async confirm() {
			 debugger;	
    		 var order = this.env.pos.get_order()
    		 var forma_pago  = document.getElementsByClassName("js_forma_pago")[0]
    	     var methodo_pago = document.getElementsByClassName("js_methodo_pago")[0]
    	     var uso_cfdi = document.getElementsByClassName("js_uso_cfdi")[0]		 
    	     order.forma_pago = forma_pago.value || undefined;
    	     order.methodo_pago = methodo_pago.value || undefined;
    	     order.uso_cfdi = uso_cfdi.value || undefined;
    	     this.props.resolve({ confirmed: false, payload: null });
    	     this.trigger('close-popup');
         }
	async cancel() {
		debugger;
		this.props.resolve({ confirmed: false, payload: null });
        this.trigger('close-popup');
    		 //this.destroy();
         }

	/*
	 * async confirm() { this.props.resolve({ confirmed: true, payload: await
	 * this.getPayload() }); debugger; this.trigger('close-popup');
	 * this.env.pos.set_synch('connected', 0); this.render()
	 * 
	 * }
	 */
	/*
	 * async onClick() { const { confirmed, payload: inputNote } = await
	 * this.showPopup('CDFIDetailPopupWidget', {});
	 * 
	 * 
	 * 
	 * 
	 * if (confirmed) { debugger; var order = this.env.pos.get_order() var
	 * forma_pago = document.getElementsByClassName("js_forma_pago")[0]
	 * //order.forma_pago = forma_pago.value
	 * this.env.pos.get_order().get_forma_pago(forma_pago) this.destroy() } if
	 * (!confirmed) { debugger; this.props.resolve({ confirmed: false, payload: null
	 * }); this.destroy() }
	 * 
	 * }
	 */
}
CDFIDetailPopupWidget.template='CDFIDetailPopupWidget';
CDFIDetailPopupWidget.defaultProps={
	confirmText:'Confirmar',
	cancelText:'Cancelar',
	body:'',
	startingValue:'',
	
};

Registries.Component.add(CDFIDetailPopupWidget);

return CDFIDetailPopupWidget;});
