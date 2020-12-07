// https://www.terraform.io/docs/providers/azurerm/r/iothub_dps.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IothubDpsConfig extends cdktf.TerraformMetaArguments {
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  /** linked_hub block */
  readonly linkedHub?: IothubDpsLinkedHub[];
  /** sku block */
  readonly sku: IothubDpsSku[];
  /** timeouts block */
  readonly timeouts?: IothubDpsTimeouts;
}
export interface IothubDpsLinkedHub {
  readonly allocationWeight?: number;
  readonly applyAllocationPolicy?: boolean;
  readonly connectionString: string;
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
  readonly capacity: number;
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
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
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


// Resource

export class IothubDps extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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

  // allocation_policy - computed: true, optional: false, required: false
  public get allocationPolicy() {
    return this.getStringAttribute('allocation_policy');
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
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
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
