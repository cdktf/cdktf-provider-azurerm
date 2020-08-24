// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_public_ip_prefix.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { StringMap } from "cdktf";

// Configuration

export interface DataAzurermPublicIpPrefixConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly resourceGroupName: string;
  readonly zones?: string[];
  /** timeouts block */
  readonly timeouts?: DataAzurermPublicIpPrefixTimeouts;
}
export interface DataAzurermPublicIpPrefixTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermPublicIpPrefix extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermPublicIpPrefixConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_public_ip_prefix',
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
    this._zones = config.zones;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // ip_prefix - computed: true, optional: false, required: true
  public get ipPrefix() {
    return this.getStringAttribute('ip_prefix');
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

  // prefix_length - computed: true, optional: false, required: true
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
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

  // zones - computed: true, optional: true, required: false
  private _zones?: string[];
  public get zones() {
    return this._zones ?? this.getListAttribute('zones');
  }
  public set zones(value: string[] | undefined) {
    this._zones = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermPublicIpPrefixTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermPublicIpPrefixTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      resource_group_name: this._resourceGroupName,
      zones: this._zones,
      timeouts: this._timeouts,
    };
  }
}
