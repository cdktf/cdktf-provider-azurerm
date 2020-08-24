// https://www.terraform.io/docs/providers/azurerm/r/netapp_volume.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface NetappVolumeConfig extends TerraformMetaArguments {
  readonly accountName: string;
  readonly location: string;
  readonly name: string;
  readonly poolName: string;
  readonly resourceGroupName: string;
  readonly serviceLevel: string;
  readonly storageQuotaInGb: number;
  readonly subnetId: string;
  readonly volumePath: string;
  /** export_policy_rule block */
  readonly exportPolicyRule?: NetappVolumeExportPolicyRule[];
  /** timeouts block */
  readonly timeouts?: NetappVolumeTimeouts;
}
export interface NetappVolumeExportPolicyRule {
  readonly allowedClients: string[];
  readonly cifsEnabled: boolean;
  readonly nfsv3Enabled: boolean;
  readonly nfsv4Enabled: boolean;
  readonly ruleIndex: number;
  readonly unixReadOnly?: boolean;
  readonly unixReadWrite?: boolean;
}
export interface NetappVolumeTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class NetappVolume extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: NetappVolumeConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_netapp_volume',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountName = config.accountName;
    this._location = config.location;
    this._name = config.name;
    this._poolName = config.poolName;
    this._resourceGroupName = config.resourceGroupName;
    this._serviceLevel = config.serviceLevel;
    this._storageQuotaInGb = config.storageQuotaInGb;
    this._subnetId = config.subnetId;
    this._volumePath = config.volumePath;
    this._exportPolicyRule = config.exportPolicyRule;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_name - computed: false, optional: false, required: true
  private _accountName: string;
  public get accountName() {
    return this._accountName;
  }
  public set accountName(value: string) {
    this._accountName = value;
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

  // pool_name - computed: false, optional: false, required: true
  private _poolName: string;
  public get poolName() {
    return this._poolName;
  }
  public set poolName(value: string) {
    this._poolName = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // service_level - computed: false, optional: false, required: true
  private _serviceLevel: string;
  public get serviceLevel() {
    return this._serviceLevel;
  }
  public set serviceLevel(value: string) {
    this._serviceLevel = value;
  }

  // storage_quota_in_gb - computed: false, optional: false, required: true
  private _storageQuotaInGb: number;
  public get storageQuotaInGb() {
    return this._storageQuotaInGb;
  }
  public set storageQuotaInGb(value: number) {
    this._storageQuotaInGb = value;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId: string;
  public get subnetId() {
    return this._subnetId;
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }

  // volume_path - computed: false, optional: false, required: true
  private _volumePath: string;
  public get volumePath() {
    return this._volumePath;
  }
  public set volumePath(value: string) {
    this._volumePath = value;
  }

  // export_policy_rule - computed: false, optional: true, required: false
  private _exportPolicyRule?: NetappVolumeExportPolicyRule[];
  public get exportPolicyRule() {
    return this._exportPolicyRule;
  }
  public set exportPolicyRule(value: NetappVolumeExportPolicyRule[] | undefined) {
    this._exportPolicyRule = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: NetappVolumeTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: NetappVolumeTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_name: this._accountName,
      location: this._location,
      name: this._name,
      pool_name: this._poolName,
      resource_group_name: this._resourceGroupName,
      service_level: this._serviceLevel,
      storage_quota_in_gb: this._storageQuotaInGb,
      subnet_id: this._subnetId,
      volume_path: this._volumePath,
      export_policy_rule: this._exportPolicyRule,
      timeouts: this._timeouts,
    };
  }
}
