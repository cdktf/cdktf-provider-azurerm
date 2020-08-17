// https://www.terraform.io/docs/providers/azurerm/r/site_recovery_protection_container_mapping.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SiteRecoveryProtectionContainerMappingConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly recoveryFabricName: string;
  readonly recoveryReplicationPolicyId: string;
  readonly recoverySourceProtectionContainerName: string;
  readonly recoveryTargetProtectionContainerId: string;
  readonly recoveryVaultName: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: SiteRecoveryProtectionContainerMappingTimeouts;
}
export interface SiteRecoveryProtectionContainerMappingTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class SiteRecoveryProtectionContainerMapping extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SiteRecoveryProtectionContainerMappingConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_site_recovery_protection_container_mapping',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._recoveryFabricName = config.recoveryFabricName;
    this._recoveryReplicationPolicyId = config.recoveryReplicationPolicyId;
    this._recoverySourceProtectionContainerName = config.recoverySourceProtectionContainerName;
    this._recoveryTargetProtectionContainerId = config.recoveryTargetProtectionContainerId;
    this._recoveryVaultName = config.recoveryVaultName;
    this._resourceGroupName = config.resourceGroupName;
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

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // recovery_fabric_name - computed: false, optional: false, required: true
  private _recoveryFabricName: string;
  public get recoveryFabricName() {
    return this._recoveryFabricName;
  }
  public set recoveryFabricName(value: string) {
    this._recoveryFabricName = value;
  }

  // recovery_replication_policy_id - computed: false, optional: false, required: true
  private _recoveryReplicationPolicyId: string;
  public get recoveryReplicationPolicyId() {
    return this._recoveryReplicationPolicyId;
  }
  public set recoveryReplicationPolicyId(value: string) {
    this._recoveryReplicationPolicyId = value;
  }

  // recovery_source_protection_container_name - computed: false, optional: false, required: true
  private _recoverySourceProtectionContainerName: string;
  public get recoverySourceProtectionContainerName() {
    return this._recoverySourceProtectionContainerName;
  }
  public set recoverySourceProtectionContainerName(value: string) {
    this._recoverySourceProtectionContainerName = value;
  }

  // recovery_target_protection_container_id - computed: false, optional: false, required: true
  private _recoveryTargetProtectionContainerId: string;
  public get recoveryTargetProtectionContainerId() {
    return this._recoveryTargetProtectionContainerId;
  }
  public set recoveryTargetProtectionContainerId(value: string) {
    this._recoveryTargetProtectionContainerId = value;
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
  private _timeouts?: SiteRecoveryProtectionContainerMappingTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: SiteRecoveryProtectionContainerMappingTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      recovery_fabric_name: this._recoveryFabricName,
      recovery_replication_policy_id: this._recoveryReplicationPolicyId,
      recovery_source_protection_container_name: this._recoverySourceProtectionContainerName,
      recovery_target_protection_container_id: this._recoveryTargetProtectionContainerId,
      recovery_vault_name: this._recoveryVaultName,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
