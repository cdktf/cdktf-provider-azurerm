// https://www.terraform.io/docs/providers/azurerm/r/public_ip_prefix.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface PublicIpPrefixConfig extends TerraformMetaArguments {
  readonly location: string;
  readonly name: string;
  readonly prefixLength?: number;
  readonly resourceGroupName: string;
  readonly sku?: string;
  readonly tags?: { [key: string]: string };
  readonly zones?: string[];
  /** timeouts block */
  readonly timeouts?: PublicIpPrefixTimeouts;
}
export interface PublicIpPrefixTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class PublicIpPrefix extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: PublicIpPrefixConfig) {
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
    this._location = config.location;
    this._name = config.name;
    this._prefixLength = config.prefixLength;
    this._resourceGroupName = config.resourceGroupName;
    this._sku = config.sku;
    this._tags = config.tags;
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

  // prefix_length - computed: false, optional: true, required: false
  private _prefixLength?: number;
  public get prefixLength() {
    return this._prefixLength;
  }
  public set prefixLength(value: number | undefined) {
    this._prefixLength = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // sku - computed: false, optional: true, required: false
  private _sku?: string;
  public get sku() {
    return this._sku;
  }
  public set sku(value: string | undefined) {
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

  // zones - computed: false, optional: true, required: false
  private _zones?: string[];
  public get zones() {
    return this._zones;
  }
  public set zones(value: string[] | undefined) {
    this._zones = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: PublicIpPrefixTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: PublicIpPrefixTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      location: this._location,
      name: this._name,
      prefix_length: this._prefixLength,
      resource_group_name: this._resourceGroupName,
      sku: this._sku,
      tags: this._tags,
      zones: this._zones,
      timeouts: this._timeouts,
    };
  }
}
