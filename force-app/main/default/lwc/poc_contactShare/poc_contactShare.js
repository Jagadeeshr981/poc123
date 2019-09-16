import { LightningElement, api, wire, track } from 'lwc';
import getGrpList from 'poc_contactShare/node_modules/@salesforce/apex/POC_ContactShareClass.getGrpList';

export default class ApexWireMethodToFunction extends LightningElement {
    @api recordId;
    @track Grp;
    @track error;

    @wire(getGrpList, {recordId: '$recordId'})
    wiredGrp({ error, data }) {
        if (data) {
            this.Grp = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.Grp = undefined;
        }
    }
}