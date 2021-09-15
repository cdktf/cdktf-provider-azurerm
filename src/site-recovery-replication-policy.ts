// https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replication_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SiteRecoveryReplicationPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replication_policy.html#application_consistent_snapshot_frequency_in_minutes SiteRecoveryReplicationPolicy#application_consistent_snapshot_frequency_in_minutes}
  */
  readonly applicationConsistentSnapshotFrequencyInMinutes: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replication_policy.html#name SiteRecoveryReplicationPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replication_policy.html#recovery_point_retention_in_minutes SiteRecoveryReplicationPolicy#recovery_point_retention_in_minutes}
  */
  readonly recoveryPointRetentionInMinutes: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replication_policy.html#recovery_vault_name SiteRecoveryReplicationPolicy#recovery_vault_name}
  */
  readonly recoveryVaultName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replication_policy.html#resource_group_name SiteRecoveryReplicationPolicy#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replication_policy.html#timeouts SiteRecoveryReplicationPolicy#timeouts}
  */
  readonly timeouts?: SiteRecoveryReplicationPolicyTimeouts;
}
export interface SiteRecoveryReplicationPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replication_policy.html#create SiteRecoveryReplicationPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replication_policy.html#delete SiteRecoveryReplicationPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replication_policy.html#read SiteRecoveryReplicationPolicy#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replication_policy.html#update SiteRecoveryReplicationPolicy#update}
  */
  readonly update?: string;
}

function siteRecoveryReplicationPolicyTimeoutsToTerraform(struct?: SiteRecoveryReplicationPolicyTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replication_policy.html azurerm_site_recovery_replication_policy}
*/
export class SiteRecoveryReplicationPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_site_recovery_replication_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replication_policy.html azurerm_site_recovery_replication_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SiteRecoveryReplicationPolicyConfig
  */
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
    return this.getNumberAttribute('application_consistent_snapshot_frequency_in_minutes');
  }
  public set applicationConsistentSnapshotFrequencyInMinutes(value: number) {
    this._applicationConsistentSnapshotFrequencyInMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationConsistentSnapshotFrequencyInMinutesInput() {
    return this._applicationConsistentSnapshotFrequencyInMinutes
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // recovery_point_retention_in_minutes - computed: false, optional: false, required: true
  private _recoveryPointRetentionInMinutes: number;
  public get recoveryPointRetentionInMinutes() {
    return this.getNumberAttribute('recovery_point_retention_in_minutes');
  }
  public set recoveryPointRetentionInMinutes(value: number) {
    this._recoveryPointRetentionInMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryPointRetentionInMinutesInput() {
    return this._recoveryPointRetentionInMinutes
  }

  // recovery_vault_name - computed: false, optional: false, required: true
  private _recoveryVaultName: string;
  public get recoveryVaultName() {
    return this.getStringAttribute('recovery_vault_name');
  }
  public set recoveryVaultName(value: string) {
    this._recoveryVaultName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryVaultNameInput() {
    return this._recoveryVaultName
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SiteRecoveryReplicationPolicyTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SiteRecoveryReplicationPolicyTimeouts ) {
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
      application_consistent_snapshot_frequency_in_minutes: cdktf.numberToTerraform(this._applicationConsistentSnapshotFrequencyInMinutes),
      name: cdktf.stringToTerraform(this._name),
      recovery_point_retention_in_minutes: cdktf.numberToTerraform(this._recoveryPointRetentionInMinutes),
      recovery_vault_name: cdktf.stringToTerraform(this._recoveryVaultName),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: siteRecoveryReplicationPolicyTimeoutsToTerraform(this._timeouts),
    };
  }
}
