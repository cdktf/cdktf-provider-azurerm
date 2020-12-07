// https://www.terraform.io/docs/providers/azurerm/r/public_ip.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PublicIpConfig extends cdktf.TerraformMetaArguments {
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

function publicIpTimeoutsToTerraform(struct?: PublicIpTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class PublicIp extends cdktf.TerraformResource {

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
    return this.getStringAttribute('allocation_method');
  }
  public set allocationMethod(value: string) {
    this._allocationMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationMethodInput() {
    return this._allocationMethod
  }

  // domain_name_label - computed: false, optional: true, required: false
  private _domainNameLabel?: string;
  public get domainNameLabel() {
    return this.getStringAttribute('domain_name_label');
  }
  public set domainNameLabel(value: string ) {
    this._domainNameLabel = value;
  }
  public resetDomainNameLabel() {
    this._domainNameLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameLabelInput() {
    return this._domainNameLabel
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idle_timeout_in_minutes - computed: false, optional: true, required: false
  private _idleTimeoutInMinutes?: number;
  public get idleTimeoutInMinutes() {
    return this.getNumberAttribute('idle_timeout_in_minutes');
  }
  public set idleTimeoutInMinutes(value: number ) {
    this._idleTimeoutInMinutes = value;
  }
  public resetIdleTimeoutInMinutes() {
    this._idleTimeoutInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInMinutesInput() {
    return this._idleTimeoutInMinutes
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // ip_version - computed: false, optional: true, required: false
  private _ipVersion?: string;
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }
  public set ipVersion(value: string ) {
    this._ipVersion = value;
  }
  public resetIpVersion() {
    this._ipVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVersionInput() {
    return this._ipVersion
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

  // public_ip_prefix_id - computed: false, optional: true, required: false
  private _publicIpPrefixId?: string;
  public get publicIpPrefixId() {
    return this.getStringAttribute('public_ip_prefix_id');
  }
  public set publicIpPrefixId(value: string ) {
    this._publicIpPrefixId = value;
  }
  public resetPublicIpPrefixId() {
    this._publicIpPrefixId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpPrefixIdInput() {
    return this._publicIpPrefixId
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

  // reverse_fqdn - computed: false, optional: true, required: false
  private _reverseFqdn?: string;
  public get reverseFqdn() {
    return this.getStringAttribute('reverse_fqdn');
  }
  public set reverseFqdn(value: string ) {
    this._reverseFqdn = value;
  }
  public resetReverseFqdn() {
    this._reverseFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reverseFqdnInput() {
    return this._reverseFqdn
  }

  // sku - computed: false, optional: true, required: false
  private _sku?: string;
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string ) {
    this._sku = value;
  }
  public resetSku() {
    this._sku = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku
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

  // zones - computed: false, optional: true, required: false
  private _zones?: string[];
  public get zones() {
    return this.getListAttribute('zones');
  }
  public set zones(value: string[] ) {
    this._zones = value;
  }
  public resetZones() {
    this._zones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: PublicIpTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: PublicIpTimeouts ) {
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
      allocation_method: cdktf.stringToTerraform(this._allocationMethod),
      domain_name_label: cdktf.stringToTerraform(this._domainNameLabel),
      idle_timeout_in_minutes: cdktf.numberToTerraform(this._idleTimeoutInMinutes),
      ip_version: cdktf.stringToTerraform(this._ipVersion),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      public_ip_prefix_id: cdktf.stringToTerraform(this._publicIpPrefixId),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      reverse_fqdn: cdktf.stringToTerraform(this._reverseFqdn),
      sku: cdktf.stringToTerraform(this._sku),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      zones: cdktf.listMapper(cdktf.stringToTerraform)(this._zones),
      timeouts: publicIpTimeoutsToTerraform(this._timeouts),
    };
  }
}
