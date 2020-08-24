// https://www.terraform.io/docs/providers/azurerm/r/mssql_elasticpool.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface MssqlElasticpoolConfig extends TerraformMetaArguments {
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
export interface MssqlElasticpoolSku {
  readonly capacity: number;
  readonly family?: string;
  readonly name: string;
  readonly tier: string;
}
export interface MssqlElasticpoolTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class MssqlElasticpool extends TerraformResource {

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

  // max_size_bytes - computed: true, optional: true, required: false
  private _maxSizeBytes?: number;
  public get maxSizeBytes() {
    return this._maxSizeBytes ?? this.getNumberAttribute('max_size_bytes');
  }
  public set maxSizeBytes(value: number | undefined) {
    this._maxSizeBytes = value;
  }

  // max_size_gb - computed: true, optional: true, required: false
  private _maxSizeGb?: number;
  public get maxSizeGb() {
    return this._maxSizeGb ?? this.getNumberAttribute('max_size_gb');
  }
  public set maxSizeGb(value: number | undefined) {
    this._maxSizeGb = value;
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

  // server_name - computed: false, optional: false, required: true
  private _serverName: string;
  public get serverName() {
    return this._serverName;
  }
  public set serverName(value: string) {
    this._serverName = value;
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

  // per_database_settings - computed: false, optional: false, required: true
  private _perDatabaseSettings: MssqlElasticpoolPerDatabaseSettings[];
  public get perDatabaseSettings() {
    return this._perDatabaseSettings;
  }
  public set perDatabaseSettings(value: MssqlElasticpoolPerDatabaseSettings[]) {
    this._perDatabaseSettings = value;
  }

  // sku - computed: false, optional: false, required: true
  private _sku: MssqlElasticpoolSku[];
  public get sku() {
    return this._sku;
  }
  public set sku(value: MssqlElasticpoolSku[]) {
    this._sku = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MssqlElasticpoolTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: MssqlElasticpoolTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      location: this._location,
      max_size_bytes: this._maxSizeBytes,
      max_size_gb: this._maxSizeGb,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      server_name: this._serverName,
      tags: this._tags,
      zone_redundant: this._zoneRedundant,
      per_database_settings: this._perDatabaseSettings,
      sku: this._sku,
      timeouts: this._timeouts,
    };
  }
}
