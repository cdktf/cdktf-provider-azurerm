// https://www.terraform.io/docs/providers/azurerm/r/databox_edge_order.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataboxEdgeOrderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databox_edge_order.html#device_name DataboxEdgeOrder#device_name}
  */
  readonly deviceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databox_edge_order.html#resource_group_name DataboxEdgeOrder#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * contact block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databox_edge_order.html#contact DataboxEdgeOrder#contact}
  */
  readonly contact: DataboxEdgeOrderContact;
  /**
  * shipment_address block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databox_edge_order.html#shipment_address DataboxEdgeOrder#shipment_address}
  */
  readonly shipmentAddress: DataboxEdgeOrderShipmentAddress;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databox_edge_order.html#timeouts DataboxEdgeOrder#timeouts}
  */
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
    // Getting the computed value is not yet implemented
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
    // Getting the computed value is not yet implemented
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databox_edge_order.html#company_name DataboxEdgeOrder#company_name}
  */
  readonly companyName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databox_edge_order.html#emails DataboxEdgeOrder#emails}
  */
  readonly emails: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databox_edge_order.html#name DataboxEdgeOrder#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databox_edge_order.html#phone_number DataboxEdgeOrder#phone_number}
  */
  readonly phoneNumber: string;
}

export function databoxEdgeOrderContactToTerraform(struct?: DataboxEdgeOrderContactOutputReference | DataboxEdgeOrderContact): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    company_name: cdktf.stringToTerraform(struct!.companyName),
    emails: cdktf.listMapper(cdktf.stringToTerraform)(struct!.emails),
    name: cdktf.stringToTerraform(struct!.name),
    phone_number: cdktf.stringToTerraform(struct!.phoneNumber),
  }
}

export class DataboxEdgeOrderContactOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataboxEdgeOrderContact | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._companyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.companyName = this._companyName;
    }
    if (this._emails !== undefined) {
      hasAnyValues = true;
      internalValueResult.emails = this._emails;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._phoneNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneNumber = this._phoneNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataboxEdgeOrderContact | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._companyName = undefined;
      this._emails = undefined;
      this._name = undefined;
      this._phoneNumber = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._companyName = value.companyName;
      this._emails = value.emails;
      this._name = value.name;
      this._phoneNumber = value.phoneNumber;
    }
  }

  // company_name - computed: false, optional: false, required: true
  private _companyName?: string; 
  public get companyName() {
    return this.getStringAttribute('company_name');
  }
  public set companyName(value: string) {
    this._companyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get companyNameInput() {
    return this._companyName;
  }

  // emails - computed: false, optional: false, required: true
  private _emails?: string[]; 
  public get emails() {
    return this.getListAttribute('emails');
  }
  public set emails(value: string[]) {
    this._emails = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailsInput() {
    return this._emails;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // phone_number - computed: false, optional: false, required: true
  private _phoneNumber?: string; 
  public get phoneNumber() {
    return this.getStringAttribute('phone_number');
  }
  public set phoneNumber(value: string) {
    this._phoneNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumberInput() {
    return this._phoneNumber;
  }
}
export interface DataboxEdgeOrderShipmentAddress {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databox_edge_order.html#address DataboxEdgeOrder#address}
  */
  readonly address: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databox_edge_order.html#city DataboxEdgeOrder#city}
  */
  readonly city: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databox_edge_order.html#country DataboxEdgeOrder#country}
  */
  readonly country: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databox_edge_order.html#postal_code DataboxEdgeOrder#postal_code}
  */
  readonly postalCode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databox_edge_order.html#state DataboxEdgeOrder#state}
  */
  readonly state: string;
}

export function databoxEdgeOrderShipmentAddressToTerraform(struct?: DataboxEdgeOrderShipmentAddressOutputReference | DataboxEdgeOrderShipmentAddress): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.listMapper(cdktf.stringToTerraform)(struct!.address),
    city: cdktf.stringToTerraform(struct!.city),
    country: cdktf.stringToTerraform(struct!.country),
    postal_code: cdktf.stringToTerraform(struct!.postalCode),
    state: cdktf.stringToTerraform(struct!.state),
  }
}

export class DataboxEdgeOrderShipmentAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataboxEdgeOrderShipmentAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._city !== undefined) {
      hasAnyValues = true;
      internalValueResult.city = this._city;
    }
    if (this._country !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country;
    }
    if (this._postalCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.postalCode = this._postalCode;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataboxEdgeOrderShipmentAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
      this._city = undefined;
      this._country = undefined;
      this._postalCode = undefined;
      this._state = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
      this._city = value.city;
      this._country = value.country;
      this._postalCode = value.postalCode;
      this._state = value.state;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string[]; 
  public get address() {
    return this.getListAttribute('address');
  }
  public set address(value: string[]) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // city - computed: false, optional: false, required: true
  private _city?: string; 
  public get city() {
    return this.getStringAttribute('city');
  }
  public set city(value: string) {
    this._city = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cityInput() {
    return this._city;
  }

  // country - computed: false, optional: false, required: true
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // postal_code - computed: false, optional: false, required: true
  private _postalCode?: string; 
  public get postalCode() {
    return this.getStringAttribute('postal_code');
  }
  public set postalCode(value: string) {
    this._postalCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get postalCodeInput() {
    return this._postalCode;
  }

  // state - computed: false, optional: false, required: true
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}
export interface DataboxEdgeOrderTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databox_edge_order.html#create DataboxEdgeOrder#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databox_edge_order.html#delete DataboxEdgeOrder#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databox_edge_order.html#read DataboxEdgeOrder#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databox_edge_order.html#update DataboxEdgeOrder#update}
  */
  readonly update?: string;
}

export function databoxEdgeOrderTimeoutsToTerraform(struct?: DataboxEdgeOrderTimeoutsOutputReference | DataboxEdgeOrderTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class DataboxEdgeOrderTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataboxEdgeOrderTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataboxEdgeOrderTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/databox_edge_order.html azurerm_databox_edge_order}
*/
export class DataboxEdgeOrder extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_databox_edge_order";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/databox_edge_order.html azurerm_databox_edge_order} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataboxEdgeOrderConfig
  */
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
    this._contact.internalValue = config.contact;
    this._shipmentAddress.internalValue = config.shipmentAddress;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_name - computed: false, optional: false, required: true
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
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
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
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
  private _contact = new DataboxEdgeOrderContactOutputReference(this as any, "contact", true);
  public get contact() {
    return this._contact;
  }
  public putContact(value: DataboxEdgeOrderContact) {
    this._contact.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contactInput() {
    return this._contact.internalValue;
  }

  // shipment_address - computed: false, optional: false, required: true
  private _shipmentAddress = new DataboxEdgeOrderShipmentAddressOutputReference(this as any, "shipment_address", true);
  public get shipmentAddress() {
    return this._shipmentAddress;
  }
  public putShipmentAddress(value: DataboxEdgeOrderShipmentAddress) {
    this._shipmentAddress.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shipmentAddressInput() {
    return this._shipmentAddress.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataboxEdgeOrderTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataboxEdgeOrderTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_name: cdktf.stringToTerraform(this._deviceName),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      contact: databoxEdgeOrderContactToTerraform(this._contact.internalValue),
      shipment_address: databoxEdgeOrderShipmentAddressToTerraform(this._shipmentAddress.internalValue),
      timeouts: databoxEdgeOrderTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
