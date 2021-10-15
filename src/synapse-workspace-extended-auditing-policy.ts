// https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace_extended_auditing_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SynapseWorkspaceExtendedAuditingPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace_extended_auditing_policy.html#log_monitoring_enabled SynapseWorkspaceExtendedAuditingPolicy#log_monitoring_enabled}
  */
  readonly logMonitoringEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace_extended_auditing_policy.html#retention_in_days SynapseWorkspaceExtendedAuditingPolicy#retention_in_days}
  */
  readonly retentionInDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace_extended_auditing_policy.html#storage_account_access_key SynapseWorkspaceExtendedAuditingPolicy#storage_account_access_key}
  */
  readonly storageAccountAccessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace_extended_auditing_policy.html#storage_account_access_key_is_secondary SynapseWorkspaceExtendedAuditingPolicy#storage_account_access_key_is_secondary}
  */
  readonly storageAccountAccessKeyIsSecondary?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace_extended_auditing_policy.html#storage_endpoint SynapseWorkspaceExtendedAuditingPolicy#storage_endpoint}
  */
  readonly storageEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace_extended_auditing_policy.html#synapse_workspace_id SynapseWorkspaceExtendedAuditingPolicy#synapse_workspace_id}
  */
  readonly synapseWorkspaceId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace_extended_auditing_policy.html#timeouts SynapseWorkspaceExtendedAuditingPolicy#timeouts}
  */
  readonly timeouts?: SynapseWorkspaceExtendedAuditingPolicyTimeouts;
}
export interface SynapseWorkspaceExtendedAuditingPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace_extended_auditing_policy.html#create SynapseWorkspaceExtendedAuditingPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace_extended_auditing_policy.html#delete SynapseWorkspaceExtendedAuditingPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace_extended_auditing_policy.html#read SynapseWorkspaceExtendedAuditingPolicy#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace_extended_auditing_policy.html#update SynapseWorkspaceExtendedAuditingPolicy#update}
  */
  readonly update?: string;
}

function synapseWorkspaceExtendedAuditingPolicyTimeoutsToTerraform(struct?: SynapseWorkspaceExtendedAuditingPolicyTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace_extended_auditing_policy.html azurerm_synapse_workspace_extended_auditing_policy}
*/
export class SynapseWorkspaceExtendedAuditingPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_synapse_workspace_extended_auditing_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace_extended_auditing_policy.html azurerm_synapse_workspace_extended_auditing_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SynapseWorkspaceExtendedAuditingPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: SynapseWorkspaceExtendedAuditingPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_synapse_workspace_extended_auditing_policy',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._logMonitoringEnabled = config.logMonitoringEnabled;
    this._retentionInDays = config.retentionInDays;
    this._storageAccountAccessKey = config.storageAccountAccessKey;
    this._storageAccountAccessKeyIsSecondary = config.storageAccountAccessKeyIsSecondary;
    this._storageEndpoint = config.storageEndpoint;
    this._synapseWorkspaceId = config.synapseWorkspaceId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // log_monitoring_enabled - computed: false, optional: true, required: false
  private _logMonitoringEnabled?: boolean | cdktf.IResolvable;
  public get logMonitoringEnabled() {
    return this.getBooleanAttribute('log_monitoring_enabled');
  }
  public set logMonitoringEnabled(value: boolean | cdktf.IResolvable ) {
    this._logMonitoringEnabled = value;
  }
  public resetLogMonitoringEnabled() {
    this._logMonitoringEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logMonitoringEnabledInput() {
    return this._logMonitoringEnabled
  }

  // retention_in_days - computed: false, optional: true, required: false
  private _retentionInDays?: number;
  public get retentionInDays() {
    return this.getNumberAttribute('retention_in_days');
  }
  public set retentionInDays(value: number ) {
    this._retentionInDays = value;
  }
  public resetRetentionInDays() {
    this._retentionInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInDaysInput() {
    return this._retentionInDays
  }

  // storage_account_access_key - computed: false, optional: true, required: false
  private _storageAccountAccessKey?: string;
  public get storageAccountAccessKey() {
    return this.getStringAttribute('storage_account_access_key');
  }
  public set storageAccountAccessKey(value: string ) {
    this._storageAccountAccessKey = value;
  }
  public resetStorageAccountAccessKey() {
    this._storageAccountAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountAccessKeyInput() {
    return this._storageAccountAccessKey
  }

  // storage_account_access_key_is_secondary - computed: false, optional: true, required: false
  private _storageAccountAccessKeyIsSecondary?: boolean | cdktf.IResolvable;
  public get storageAccountAccessKeyIsSecondary() {
    return this.getBooleanAttribute('storage_account_access_key_is_secondary');
  }
  public set storageAccountAccessKeyIsSecondary(value: boolean | cdktf.IResolvable ) {
    this._storageAccountAccessKeyIsSecondary = value;
  }
  public resetStorageAccountAccessKeyIsSecondary() {
    this._storageAccountAccessKeyIsSecondary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountAccessKeyIsSecondaryInput() {
    return this._storageAccountAccessKeyIsSecondary
  }

  // storage_endpoint - computed: false, optional: true, required: false
  private _storageEndpoint?: string;
  public get storageEndpoint() {
    return this.getStringAttribute('storage_endpoint');
  }
  public set storageEndpoint(value: string ) {
    this._storageEndpoint = value;
  }
  public resetStorageEndpoint() {
    this._storageEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageEndpointInput() {
    return this._storageEndpoint
  }

  // synapse_workspace_id - computed: false, optional: false, required: true
  private _synapseWorkspaceId: string;
  public get synapseWorkspaceId() {
    return this.getStringAttribute('synapse_workspace_id');
  }
  public set synapseWorkspaceId(value: string) {
    this._synapseWorkspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get synapseWorkspaceIdInput() {
    return this._synapseWorkspaceId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SynapseWorkspaceExtendedAuditingPolicyTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SynapseWorkspaceExtendedAuditingPolicyTimeouts ) {
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
      log_monitoring_enabled: cdktf.booleanToTerraform(this._logMonitoringEnabled),
      retention_in_days: cdktf.numberToTerraform(this._retentionInDays),
      storage_account_access_key: cdktf.stringToTerraform(this._storageAccountAccessKey),
      storage_account_access_key_is_secondary: cdktf.booleanToTerraform(this._storageAccountAccessKeyIsSecondary),
      storage_endpoint: cdktf.stringToTerraform(this._storageEndpoint),
      synapse_workspace_id: cdktf.stringToTerraform(this._synapseWorkspaceId),
      timeouts: synapseWorkspaceExtendedAuditingPolicyTimeoutsToTerraform(this._timeouts),
    };
  }
}
