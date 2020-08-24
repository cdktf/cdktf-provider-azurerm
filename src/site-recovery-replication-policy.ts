// https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replication_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SiteRecoveryReplicationPolicyConfig extends TerraformMetaArguments {
  readonly applicationConsistentSnapshotFrequencyInMinutes: number;
  readonly name: string;
  readonly recoveryPointRetentionInMinutes: number;
  readonly recoveryVaultName: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: SiteRecoveryReplicationPolicyTimeouts;
}
export interface SiteRecoveryReplicationPolicyTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class SiteRecoveryReplicationPolicy extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SiteRecoveryReplicationPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_site_recovery_replication_policy',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._applicationConsistentSnapshotFrequencyInMinutes = config.applicationConsistentSnapshotFrequencyInMinutes;
    this._name = config.name;
    this._recoveryPointRetentionInMinutes = config.recoveryPointRetentionInMinutes;
    this._recoveryVaultName = config.recoveryVaultName;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_consistent_snapshot_frequency_in_minutes - computed: false, optional: false, required: true
  private _applicationConsistentSnapshotFrequencyInMinutes: number;
  public get applicationConsistentSnapshotFrequencyInMinutes() {
    return this._applicationConsistentSnapshotFrequencyInMinutes;
  }
  public set applicationConsistentSnapshotFrequencyInMinutes(value: number) {
    this._applicationConsistentSnapshotFrequencyInMinutes = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // recovery_point_retention_in_minutes - computed: false, optional: false, required: true
  private _recoveryPointRetentionInMinutes: number;
  public get recoveryPointRetentionInMinutes() {
    return this._recoveryPointRetentionInMinutes;
  }
  public set recoveryPointRetentionInMinutes(value: number) {
    this._recoveryPointRetentionInMinutes = value;
  }

  // recovery_vault_name - computed: false, optional: false, required: true
  private _recoveryVaultName: string;
  public get recoveryVaultName() {
    return this._recoveryVaultName;
  }
  public set recoveryVaultName(value: string) {
    this._recoveryVaultName = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SiteRecoveryReplicationPolicyTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: SiteRecoveryReplicationPolicyTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_consistent_snapshot_frequency_in_minutes: this._applicationConsistentSnapshotFrequencyInMinutes,
      name: this._name,
      recovery_point_retention_in_minutes: this._recoveryPointRetentionInMinutes,
      recovery_vault_name: this._recoveryVaultName,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
