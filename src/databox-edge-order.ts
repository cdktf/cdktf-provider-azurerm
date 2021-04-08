// https://www.terraform.io/docs/providers/azurerm/r/databox_edge_order.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataboxEdgeOrderConfig extends cdktf.TerraformMetaArguments {
  readonly deviceName: string;
  readonly resourceGroupName: string;
  /** contact block */
  readonly contact: DataboxEdgeOrderContact[];
  /** shipment_address block */
  readonly shipmentAddress: DataboxEdgeOrderShipmentAddress[];
  /** timeouts block */
  readonly timeouts?: DataboxEdgeOrderTimeouts;
}
export class DataboxEdgeOrderReturnTracking extends cdktf.ComplexComputedList {

  // carrier_name - computed: true, optional: false, required: false
  public get carrierName() {
    return this.getStringAttribute('carrier_name');
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // tracking_id - computed: true, optional: false, required: false
  public get trackingId() {
    return this.getStringAttribute('tracking_id');
  }

  // tracking_url - computed: true, optional: false, required: false
  public get trackingUrl() {
    return this.getStringAttribute('tracking_url');
  }
}
export class DataboxEdgeOrderShipmentHistory extends cdktf.ComplexComputedList {

  // additional_details - computed: true, optional: false, required: false
  public get additionalDetails() {
    return this.interpolationForAttribute('additional_details') as any;
  }

  // comments - computed: true, optional: false, required: false
  public get comments() {
    return this.getStringAttribute('comments');
  }

  // last_update - computed: true, optional: false, required: false
  public get lastUpdate() {
    return this.getStringAttribute('last_update');
  }
}
export class DataboxEdgeOrderShipmentTracking extends cdktf.ComplexComputedList {

  // carrier_name - computed: true, optional: false, required: false
  public get carrierName() {
    return this.getStringAttribute('carrier_name');
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // tracking_id - computed: true, optional: false, required: false
  public get trackingId() {
    return this.getStringAttribute('tracking_id');
  }

  // tracking_url - computed: true, optional: false, required: false
  public get trackingUrl() {
    return this.getStringAttribute('tracking_url');
  }
}
export class DataboxEdgeOrderStatus extends cdktf.ComplexComputedList {

  // additional_details - computed: true, optional: false, required: false
  public get additionalDetails() {
    return this.interpolationForAttribute('additional_details') as any;
  }

  // comments - computed: true, optional: false, required: false
  public get comments() {
    return this.getStringAttribute('comments');
  }

  // info - computed: true, optional: false, required: false
  public get info() {
    return this.getStringAttribute('info');
  }

  // last_update - computed: true, optional: false, required: false
  public get lastUpdate() {
    return this.getStringAttribute('last_update');
  }
}
export interface DataboxEdgeOrderContact {
  readonly companyName: string;
  readonly emails: string[];
  readonly name: string;
  readonly phoneNumber: string;
}

function databoxEdgeOrderContactToTerraform(struct?: DataboxEdgeOrderContact): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    company_name: cdktf.stringToTerraform(struct!.companyName),
    emails: cdktf.listMapper(cdktf.stringToTerraform)(struct!.emails),
    name: cdktf.stringToTerraform(struct!.name),
    phone_number: cdktf.stringToTerraform(struct!.phoneNumber),
  }
}

export interface DataboxEdgeOrderShipmentAddress {
  readonly address: string[];
  readonly city: string;
  readonly country: string;
  readonly postalCode: string;
  readonly state: string;
}

function databoxEdgeOrderShipmentAddressToTerraform(struct?: DataboxEdgeOrderShipmentAddress): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    address: cdktf.listMapper(cdktf.stringToTerraform)(struct!.address),
    city: cdktf.stringToTerraform(struct!.city),
    country: cdktf.stringToTerraform(struct!.country),
    postal_code: cdktf.stringToTerraform(struct!.postalCode),
    state: cdktf.stringToTerraform(struct!.state),
  }
}

export interface DataboxEdgeOrderTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function databoxEdgeOrderTimeoutsToTerraform(struct?: DataboxEdgeOrderTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class DataboxEdgeOrder extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataboxEdgeOrderConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_databox_edge_order',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._deviceName = config.deviceName;
    this._resourceGroupName = config.resourceGroupName;
    this._contact = config.contact;
    this._shipmentAddress = config.shipmentAddress;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_name - computed: false, optional: false, required: true
  private _deviceName: string;
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName
  }

  // return_tracking - computed: true, optional: false, required: false
  public returnTracking(index: string) {
    return new DataboxEdgeOrderReturnTracking(this, 'return_tracking', index);
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // shipment_history - computed: true, optional: false, required: false
  public shipmentHistory(index: string) {
    return new DataboxEdgeOrderShipmentHistory(this, 'shipment_history', index);
  }

  // shipment_tracking - computed: true, optional: false, required: false
  public shipmentTracking(index: string) {
    return new DataboxEdgeOrderShipmentTracking(this, 'shipment_tracking', index);
  }

  // status - computed: true, optional: false, required: false
  public status(index: string) {
    return new DataboxEdgeOrderStatus(this, 'status', index);
  }

  // contact - computed: false, optional: false, required: true
  private _contact: DataboxEdgeOrderContact[];
  public get contact() {
    return this.interpolationForAttribute('contact') as any;
  }
  public set contact(value: DataboxEdgeOrderContact[]) {
    this._contact = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contactInput() {
    return this._contact
  }

  // shipment_address - computed: false, optional: false, required: true
  private _shipmentAddress: DataboxEdgeOrderShipmentAddress[];
  public get shipmentAddress() {
    return this.interpolationForAttribute('shipment_address') as any;
  }
  public set shipmentAddress(value: DataboxEdgeOrderShipmentAddress[]) {
    this._shipmentAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shipmentAddressInput() {
    return this._shipmentAddress
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataboxEdgeOrderTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataboxEdgeOrderTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_name: cdktf.stringToTerraform(this._deviceName),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      contact: cdktf.listMapper(databoxEdgeOrderContactToTerraform)(this._contact),
      shipment_address: cdktf.listMapper(databoxEdgeOrderShipmentAddressToTerraform)(this._shipmentAddress),
      timeouts: databoxEdgeOrderTimeoutsToTerraform(this._timeouts),
    };
  }
}
