export class PurchaseOrderItemHeader {

    activate(context) {
        this.context = context;
        this.data = context.data;
        this.error = context.error;
        this.options = context.options;
        this.isUseIncomeTax = this.options.isUseIncomeTax || false;
    }

    controlOptions = {
        control: {
            length: 12
        }
    };
}