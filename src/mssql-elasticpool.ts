// https://www.terraform.io/docs/providers/azurerm/r/mssql_elasticpool.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MssqlElasticpoolConfig extends cdktf.TerraformMetaArguments {
  readonly licenseType?: string;
  readonly location: string;
  readonly maxSizeBytes?: number;
  readonly maxSizeGb?: number;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly serverName: string;
  readonly tags?: { [key: string]: string };
  readonly zoneRedundant?: boolean;
  /** per_database_settings block */
  readonly perDatabaseSettings: MssqlElasticpoolPerDatabaseSettings[];
  /** sku block */
  readonly sku: MssqlElasticpoolSku[];
  /** timeouts block */
  readonly timeouts?: MssqlElasticpoolTimeouts;
}
export interface MssqlElasticpoolPerDatabaseSettings {
  readonly maxCapacity: number;
  readonly minCapacity: number;
}

function mssqlElasticpoolPerDatabaseSettingsToTerraform(struct?: MssqlElasticpoolPerDatabaseSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_capacity: cdktf.numberToTerraform(struct!.maxCapacity),
    min_capacity: cdktf.numberToTerraform(struct!.minCapacity),
  }
}

export interface MssqlElasticpoolSku {
  readonly capacity: number;
  readonly family?: string;
  readonly name: string;
  readonly tier: string;
}

function mssqlElasticpoolSkuToTerraform(struct?: MssqlElasticpoolSku): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    capacity: cdktf.numberToTerraform(struct!.capacity),
    family: cdktf.stringToTerraform(struct!.family),
    name: cdktf.stringToTerraform(struct!.name),
    tier: cdktf.stringToTerraform(struct!.tier),
  }
}

export interface MssqlElasticpoolTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function mssqlElasticpoolTimeoutsToTerraform(struct?: MssqlElasticpoolTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class MssqlElasticpool extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: MssqlElasticpoolConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_mssql_elasticpool',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._licenseType = config.licenseType;
    this._location = config.location;
    this._maxSizeBytes = config.maxSizeBytes;
    this._maxSizeGb = config.maxSizeGb;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._serverName = config.serverName;
    this._tags = config.tags;
    this._zoneRedundant = config.zoneRedundant;
    this._perDatabaseSettings = config.perDatabaseSettings;
    this._sku = config.sku;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // license_type - computed: true, optional: true, required: false
  private _licenseType?: string;
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }
  public set licenseType(value: string) {
    this._licenseType = value;
  }
  public resetLicenseType() {
    this._licenseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseTypeInput() {
    return this._licenseType
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

  // max_size_bytes - computed: true, optional: true, required: false
  private _maxSizeBytes?: number;
  public get maxSizeBytes() {
    return this.getNumberAttribute('max_size_bytes');
  }
  public set maxSizeBytes(value: number) {
    this._maxSizeBytes = value;
  }
  public resetMaxSizeBytes() {
    this._maxSizeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeBytesInput() {
    return this._maxSizeBytes
  }

  // max_size_gb - computed: true, optional: true, required: false
  private _maxSizeGb?: number;
  public get maxSizeGb() {
    return this.getNumberAttribute('max_size_gb');
  }
  public set maxSizeGb(value: number) {
    this._maxSizeGb = value;
  }
  public resetMaxSizeGb() {
    this._maxSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeGbInput() {
    return this._maxSizeGb
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

  // server_name - computed: false, optional: false, required: true
  private _serverName: string;
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName
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

  // zone_redundant - computed: false, optional: true, required: false
  private _zoneRedundant?: boolean;
  public get zoneRedundant() {
    return this.getBooleanAttribute('zone_redundant');
  }
  public set zoneRedundant(value: boolean ) {
    this._zoneRedundant = value;
  }
  public resetZoneRedundant() {
    this._zoneRedundant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneRedundantInput() {
    return this._zoneRedundant
  }

  // per_database_settings - computed: false, optional: false, required: true
  private _perDatabaseSettings: MssqlElasticpoolPerDatabaseSettings[];
  public get perDatabaseSettings() {
    return this.interpolationForAttribute('per_database_settings') as any;
  }
  public set perDatabaseSettings(value: MssqlElasticpoolPerDatabaseSettings[]) {
    this._perDatabaseSettings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get perDatabaseSettingsInput() {
    return this._perDatabaseSettings
  }

  // sku - computed: false, optional: false, required: true
  private _sku: MssqlElasticpoolSku[];
  public get sku() {
    return this.interpolationForAttribute('sku') as any;
  }
  public set sku(value: MssqlElasticpoolSku[]) {
    this._sku = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MssqlElasticpoolTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: MssqlElasticpoolTimeouts ) {
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
      license_type: cdktf.stringToTerraform(this._licenseType),
      location: cdktf.stringToTerraform(this._location),
      max_size_bytes: cdktf.numberToTerraform(this._maxSizeBytes),
      max_size_gb: cdktf.numberToTerraform(this._maxSizeGb),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      server_name: cdktf.stringToTerraform(this._serverName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      zone_redundant: cdktf.booleanToTerraform(this._zoneRedundant),
      per_database_settings: cdktf.listMapper(mssqlElasticpoolPerDatabaseSettingsToTerraform)(this._perDatabaseSettings),
      sku: cdktf.listMapper(mssqlElasticpoolSkuToTerraform)(this._sku),
      timeouts: mssqlElasticpoolTimeoutsToTerraform(this._timeouts),
    };
  }
}
