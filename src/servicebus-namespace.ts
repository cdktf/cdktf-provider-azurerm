// https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ServicebusNamespaceConfig extends TerraformMetaArguments {
  readonly capacity?: number;
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly sku: string;
  readonly tags?: { [key: string]: string };
  readonly zoneRedundant?: boolean;
  /** timeouts block */
  readonly timeouts?: ServicebusNamespaceTimeouts;
}
export interface ServicebusNamespaceTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class ServicebusNamespace extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ServicebusNamespaceConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_servicebus_namespace',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._capacity = config.capacity;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._sku = config.sku;
    this._tags = config.tags;
    this._zoneRedundant = config.zoneRedundant;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capacity - computed: false, optional: true, required: false
  private _capacity?: number;
  public get capacity() {
    return this._capacity;
  }
  public set capacity(value: number | undefined) {
    this._capacity = value;
  }

  // default_primary_connection_string - computed: true, optional: false, required: true
  public get defaultPrimaryConnectionString() {
    return this.getStringAttribute('default_primary_connection_string');
  }

  // default_primary_key - computed: true, optional: false, required: true
  public get defaultPrimaryKey() {
    return this.getStringAttribute('default_primary_key');
  }

  // default_secondary_connection_string - computed: true, optional: false, required: true
  public get defaultSecondaryConnectionString() {
    return this.getStringAttribute('default_secondary_connection_string');
  }

  // default_secondary_key - computed: true, optional: false, required: true
  public get defaultSecondaryKey() {
    return this.getStringAttribute('default_secondary_key');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
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

  // sku - computed: false, optional: false, required: true
  private _sku: string;
  public get sku() {
    return this._sku;
  }
  public set sku(value: string) {
    this._sku = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // zone_redundant - computed: false, optional: true, required: false
  private _zoneRedundant?: boolean;
  public get zoneRedundant() {
    return this._zoneRedundant;
  }
  public set zoneRedundant(value: boolean | undefined) {
    this._zoneRedundant = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ServicebusNamespaceTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ServicebusNamespaceTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      capacity: this._capacity,
      location: this._location,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      sku: this._sku,
      tags: this._tags,
      zone_redundant: this._zoneRedundant,
      timeouts: this._timeouts,
    };
  }
}
