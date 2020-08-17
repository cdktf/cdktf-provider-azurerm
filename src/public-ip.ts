// https://www.terraform.io/docs/providers/azurerm/r/public_ip.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface PublicIpConfig extends TerraformMetaArguments {
  readonly allocationMethod: string;
  readonly domainNameLabel?: string;
  readonly idleTimeoutInMinutes?: number;
  readonly ipVersion?: string;
  readonly location: string;
  readonly name: string;
  readonly publicIpPrefixId?: string;
  readonly resourceGroupName: string;
  readonly reverseFqdn?: string;
  readonly sku?: string;
  readonly tags?: { [key: string]: string };
  readonly zones?: string[];
  /** timeouts block */
  readonly timeouts?: PublicIpTimeouts;
}
export interface PublicIpTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class PublicIp extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: PublicIpConfig) {
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
    this._allocationMethod = config.allocationMethod;
    this._domainNameLabel = config.domainNameLabel;
    this._idleTimeoutInMinutes = config.idleTimeoutInMinutes;
    this._ipVersion = config.ipVersion;
    this._location = config.location;
    this._name = config.name;
    this._publicIpPrefixId = config.publicIpPrefixId;
    this._resourceGroupName = config.resourceGroupName;
    this._reverseFqdn = config.reverseFqdn;
    this._sku = config.sku;
    this._tags = config.tags;
    this._zones = config.zones;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allocation_method - computed: false, optional: false, required: true
  private _allocationMethod: string;
  public get allocationMethod() {
    return this._allocationMethod;
  }
  public set allocationMethod(value: string) {
    this._allocationMethod = value;
  }

  // domain_name_label - computed: false, optional: true, required: false
  private _domainNameLabel?: string;
  public get domainNameLabel() {
    return this._domainNameLabel;
  }
  public set domainNameLabel(value: string | undefined) {
    this._domainNameLabel = value;
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

  // idle_timeout_in_minutes - computed: false, optional: true, required: false
  private _idleTimeoutInMinutes?: number;
  public get idleTimeoutInMinutes() {
    return this._idleTimeoutInMinutes;
  }
  public set idleTimeoutInMinutes(value: number | undefined) {
    this._idleTimeoutInMinutes = value;
  }

  // ip_address - computed: true, optional: false, required: true
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // ip_version - computed: false, optional: true, required: false
  private _ipVersion?: string;
  public get ipVersion() {
    return this._ipVersion;
  }
  public set ipVersion(value: string | undefined) {
    this._ipVersion = value;
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

  // public_ip_prefix_id - computed: false, optional: true, required: false
  private _publicIpPrefixId?: string;
  public get publicIpPrefixId() {
    return this._publicIpPrefixId;
  }
  public set publicIpPrefixId(value: string | undefined) {
    this._publicIpPrefixId = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // reverse_fqdn - computed: false, optional: true, required: false
  private _reverseFqdn?: string;
  public get reverseFqdn() {
    return this._reverseFqdn;
  }
  public set reverseFqdn(value: string | undefined) {
    this._reverseFqdn = value;
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
  private _timeouts?: PublicIpTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: PublicIpTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      allocation_method: this._allocationMethod,
      domain_name_label: this._domainNameLabel,
      idle_timeout_in_minutes: this._idleTimeoutInMinutes,
      ip_version: this._ipVersion,
      location: this._location,
      name: this._name,
      public_ip_prefix_id: this._publicIpPrefixId,
      resource_group_name: this._resourceGroupName,
      reverse_fqdn: this._reverseFqdn,
      sku: this._sku,
      tags: this._tags,
      zones: this._zones,
      timeouts: this._timeouts,
    };
  }
}
