// https://www.terraform.io/docs/providers/azurerm/r/iothub_dps.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface IothubDpsConfig extends TerraformMetaArguments {
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
export interface IothubDpsSku {
  readonly capacity: number;
  readonly name: string;
}
export interface IothubDpsTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class IothubDps extends TerraformResource {

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

  // allocation_policy - computed: true, optional: false, required: true
  public get allocationPolicy() {
    return this.getStringAttribute('allocation_policy');
  }

  // device_provisioning_host_name - computed: true, optional: false, required: true
  public get deviceProvisioningHostName() {
    return this.getStringAttribute('device_provisioning_host_name');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // id_scope - computed: true, optional: false, required: true
  public get idScope() {
    return this.getStringAttribute('id_scope');
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this._location;
  }
  public set location(value: string) {
    this._location = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // service_operations_host_name - computed: true, optional: false, required: true
  public get serviceOperationsHostName() {
    return this.getStringAttribute('service_operations_host_name');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // linked_hub - computed: false, optional: true, required: false
  private _linkedHub?: IothubDpsLinkedHub[];
  public get linkedHub() {
    return this._linkedHub;
  }
  public set linkedHub(value: IothubDpsLinkedHub[] | undefined) {
    this._linkedHub = value;
  }

  // sku - computed: false, optional: false, required: true
  private _sku: IothubDpsSku[];
  public get sku() {
    return this._sku;
  }
  public set sku(value: IothubDpsSku[]) {
    this._sku = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: IothubDpsTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: IothubDpsTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      location: this._location,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      tags: this._tags,
      linked_hub: this._linkedHub,
      sku: this._sku,
      timeouts: this._timeouts,
    };
  }
}
