// https://www.terraform.io/docs/providers/azurerm/r/iothub_dps.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IothubDpsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_dps.html#allocation_policy IothubDps#allocation_policy}
  */
  readonly allocationPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_dps.html#location IothubDps#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_dps.html#name IothubDps#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_dps.html#resource_group_name IothubDps#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_dps.html#tags IothubDps#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * linked_hub block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_dps.html#linked_hub IothubDps#linked_hub}
  */
  readonly linkedHub?: IothubDpsLinkedHub[];
  /**
  * sku block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_dps.html#sku IothubDps#sku}
  */
  readonly sku: IothubDpsSku[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_dps.html#timeouts IothubDps#timeouts}
  */
  readonly timeouts?: IothubDpsTimeouts;
}
export interface IothubDpsLinkedHub {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_dps.html#allocation_weight IothubDps#allocation_weight}
  */
  readonly allocationWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_dps.html#apply_allocation_policy IothubDps#apply_allocation_policy}
  */
  readonly applyAllocationPolicy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_dps.html#connection_string IothubDps#connection_string}
  */
  readonly connectionString: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_dps.html#location IothubDps#location}
  */
  readonly location: string;
}

function iothubDpsLinkedHubToTerraform(struct?: IothubDpsLinkedHub): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allocation_weight: cdktf.numberToTerraform(struct!.allocationWeight),
    apply_allocation_policy: cdktf.booleanToTerraform(struct!.applyAllocationPolicy),
    connection_string: cdktf.stringToTerraform(struct!.connectionString),
    location: cdktf.stringToTerraform(struct!.location),
  }
}

export interface IothubDpsSku {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_dps.html#capacity IothubDps#capacity}
  */
  readonly capacity: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_dps.html#name IothubDps#name}
  */
  readonly name: string;
}

function iothubDpsSkuToTerraform(struct?: IothubDpsSku): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    capacity: cdktf.numberToTerraform(struct!.capacity),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface IothubDpsTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_dps.html#create IothubDps#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_dps.html#delete IothubDps#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_dps.html#read IothubDps#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_dps.html#update IothubDps#update}
  */
  readonly update?: string;
}

function iothubDpsTimeoutsToTerraform(struct?: IothubDpsTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_dps.html azurerm_iothub_dps}
*/
export class IothubDps extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_iothub_dps";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_dps.html azurerm_iothub_dps} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IothubDpsConfig
  */
  public constructor(scope: Construct, id: string, config: IothubDpsConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_iothub_dps',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allocationPolicy = config.allocationPolicy;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._linkedHub = config.linkedHub;
    this._sku = config.sku;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allocation_policy - computed: false, optional: true, required: false
  private _allocationPolicy?: string;
  public get allocationPolicy() {
    return this.getStringAttribute('allocation_policy');
  }
  public set allocationPolicy(value: string ) {
    this._allocationPolicy = value;
  }
  public resetAllocationPolicy() {
    this._allocationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationPolicyInput() {
    return this._allocationPolicy
  }

  // device_provisioning_host_name - computed: true, optional: false, required: false
  public get deviceProvisioningHostName() {
    return this.getStringAttribute('device_provisioning_host_name');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // id_scope - computed: true, optional: false, required: false
  public get idScope() {
    return this.getStringAttribute('id_scope');
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
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

  // service_operations_host_name - computed: true, optional: false, required: false
  public get serviceOperationsHostName() {
    return this.getStringAttribute('service_operations_host_name');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // linked_hub - computed: false, optional: true, required: false
  private _linkedHub?: IothubDpsLinkedHub[];
  public get linkedHub() {
    return this.interpolationForAttribute('linked_hub') as any;
  }
  public set linkedHub(value: IothubDpsLinkedHub[] ) {
    this._linkedHub = value;
  }
  public resetLinkedHub() {
    this._linkedHub = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedHubInput() {
    return this._linkedHub
  }

  // sku - computed: false, optional: false, required: true
  private _sku: IothubDpsSku[];
  public get sku() {
    return this.interpolationForAttribute('sku') as any;
  }
  public set sku(value: IothubDpsSku[]) {
    this._sku = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: IothubDpsTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: IothubDpsTimeouts ) {
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
      allocation_policy: cdktf.stringToTerraform(this._allocationPolicy),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      linked_hub: cdktf.listMapper(iothubDpsLinkedHubToTerraform)(this._linkedHub),
      sku: cdktf.listMapper(iothubDpsSkuToTerraform)(this._sku),
      timeouts: iothubDpsTimeoutsToTerraform(this._timeouts),
    };
  }
}
