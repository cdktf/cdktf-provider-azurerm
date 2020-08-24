// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_servicebus_namespace.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { StringMap } from "cdktf";

// Configuration

export interface DataAzurermServicebusNamespaceConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermServicebusNamespaceTimeouts;
}
export interface DataAzurermServicebusNamespaceTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermServicebusNamespace extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermServicebusNamespaceConfig) {
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
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capacity - computed: true, optional: false, required: true
  public get capacity() {
    return this.getNumberAttribute('capacity');
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

  // location - computed: true, optional: false, required: true
  public get location() {
    return this.getStringAttribute('location');
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

  // sku - computed: true, optional: false, required: true
  public get sku() {
    return this.getStringAttribute('sku');
  }

  // tags - computed: true, optional: false, required: true
  public tags(key: string): string {
    return new StringMap(this, 'tags').lookup(key);
  }

  // zone_redundant - computed: true, optional: false, required: true
  public get zoneRedundant() {
    return this.getBooleanAttribute('zone_redundant');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermServicebusNamespaceTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermServicebusNamespaceTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
