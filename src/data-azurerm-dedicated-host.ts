// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_dedicated_host.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { StringMap } from "cdktf";

// Configuration

export interface DataAzurermDedicatedHostConfig extends TerraformMetaArguments {
  readonly dedicatedHostGroupName: string;
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermDedicatedHostTimeouts;
}
export interface DataAzurermDedicatedHostTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermDedicatedHost extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermDedicatedHostConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_dedicated_host',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dedicatedHostGroupName = config.dedicatedHostGroupName;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dedicated_host_group_name - computed: false, optional: false, required: true
  private _dedicatedHostGroupName: string;
  public get dedicatedHostGroupName() {
    return this._dedicatedHostGroupName;
  }
  public set dedicatedHostGroupName(value: string) {
    this._dedicatedHostGroupName = value;
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

  // tags - computed: true, optional: false, required: true
  public tags(key: string): string {
    return new StringMap(this, 'tags').lookup(key);
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermDedicatedHostTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermDedicatedHostTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dedicated_host_group_name: this._dedicatedHostGroupName,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
