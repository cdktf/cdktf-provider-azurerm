// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_public_ip.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAzurermPublicIpConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  readonly zones?: string[];
  /** timeouts block */
  readonly timeouts?: DataAzurermPublicIpTimeouts;
}
export interface DataAzurermPublicIpTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermPublicIp extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermPublicIpConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_public_ip',
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
    this._tags = config.tags;
    this._zones = config.zones;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allocation_method - computed: true, optional: false, required: true
  public get allocationMethod() {
    return this.getStringAttribute('allocation_method');
  }

  // domain_name_label - computed: true, optional: false, required: true
  public get domainNameLabel() {
    return this.getStringAttribute('domain_name_label');
  }

  // fqdn - computed: true, optional: false, required: true
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // idle_timeout_in_minutes - computed: true, optional: false, required: true
  public get idleTimeoutInMinutes() {
    return this.getNumberAttribute('idle_timeout_in_minutes');
  }

  // ip_address - computed: true, optional: false, required: true
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // ip_version - computed: true, optional: false, required: true
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
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

  // reverse_fqdn - computed: true, optional: false, required: true
  public get reverseFqdn() {
    return this.getStringAttribute('reverse_fqdn');
  }

  // sku - computed: true, optional: false, required: true
  public get sku() {
    return this.getStringAttribute('sku');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
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
  private _timeouts?: DataAzurermPublicIpTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermPublicIpTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      resource_group_name: this._resourceGroupName,
      tags: this._tags,
      zones: this._zones,
      timeouts: this._timeouts,
    };
  }
}
