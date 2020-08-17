// https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replicated_vm.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SiteRecoveryReplicatedVmConfig extends TerraformMetaArguments {
  readonly managedDisk?: SiteRecoveryReplicatedVmManagedDisk[];
  readonly name: string;
  readonly recoveryReplicationPolicyId: string;
  readonly recoveryVaultName: string;
  readonly resourceGroupName: string;
  readonly sourceRecoveryFabricName: string;
  readonly sourceRecoveryProtectionContainerName: string;
  readonly sourceVmId: string;
  readonly targetAvailabilitySetId?: string;
  readonly targetRecoveryFabricId: string;
  readonly targetRecoveryProtectionContainerId: string;
  readonly targetResourceGroupId: string;
  /** timeouts block */
  readonly timeouts?: SiteRecoveryReplicatedVmTimeouts;
}
export interface SiteRecoveryReplicatedVmManagedDisk {
  readonly diskId?: string;
  readonly stagingStorageAccountId?: string;
  readonly targetDiskType?: string;
  readonly targetReplicaDiskType?: string;
  readonly targetResourceGroupId?: string;
}
export interface SiteRecoveryReplicatedVmTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class SiteRecoveryReplicatedVm extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SiteRecoveryReplicatedVmConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_site_recovery_replicated_vm',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._managedDisk = config.managedDisk;
    this._name = config.name;
    this._recoveryReplicationPolicyId = config.recoveryReplicationPolicyId;
    this._recoveryVaultName = config.recoveryVaultName;
    this._resourceGroupName = config.resourceGroupName;
    this._sourceRecoveryFabricName = config.sourceRecoveryFabricName;
    this._sourceRecoveryProtectionContainerName = config.sourceRecoveryProtectionContainerName;
    this._sourceVmId = config.sourceVmId;
    this._targetAvailabilitySetId = config.targetAvailabilitySetId;
    this._targetRecoveryFabricId = config.targetRecoveryFabricId;
    this._targetRecoveryProtectionContainerId = config.targetRecoveryProtectionContainerId;
    this._targetResourceGroupId = config.targetResourceGroupId;
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

  // managed_disk - computed: false, optional: true, required: false
  private _managedDisk?: SiteRecoveryReplicatedVmManagedDisk[];
  public get managedDisk() {
    return this._managedDisk;
  }
  public set managedDisk(value: SiteRecoveryReplicatedVmManagedDisk[] | undefined) {
    this._managedDisk = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // recovery_replication_policy_id - computed: false, optional: false, required: true
  private _recoveryReplicationPolicyId: string;
  public get recoveryReplicationPolicyId() {
    return this._recoveryReplicationPolicyId;
  }
  public set recoveryReplicationPolicyId(value: string) {
    this._recoveryReplicationPolicyId = value;
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

  // source_recovery_fabric_name - computed: false, optional: false, required: true
  private _sourceRecoveryFabricName: string;
  public get sourceRecoveryFabricName() {
    return this._sourceRecoveryFabricName;
  }
  public set sourceRecoveryFabricName(value: string) {
    this._sourceRecoveryFabricName = value;
  }

  // source_recovery_protection_container_name - computed: false, optional: false, required: true
  private _sourceRecoveryProtectionContainerName: string;
  public get sourceRecoveryProtectionContainerName() {
    return this._sourceRecoveryProtectionContainerName;
  }
  public set sourceRecoveryProtectionContainerName(value: string) {
    this._sourceRecoveryProtectionContainerName = value;
  }

  // source_vm_id - computed: false, optional: false, required: true
  private _sourceVmId: string;
  public get sourceVmId() {
    return this._sourceVmId;
  }
  public set sourceVmId(value: string) {
    this._sourceVmId = value;
  }

  // target_availability_set_id - computed: false, optional: true, required: false
  private _targetAvailabilitySetId?: string;
  public get targetAvailabilitySetId() {
    return this._targetAvailabilitySetId;
  }
  public set targetAvailabilitySetId(value: string | undefined) {
    this._targetAvailabilitySetId = value;
  }

  // target_recovery_fabric_id - computed: false, optional: false, required: true
  private _targetRecoveryFabricId: string;
  public get targetRecoveryFabricId() {
    return this._targetRecoveryFabricId;
  }
  public set targetRecoveryFabricId(value: string) {
    this._targetRecoveryFabricId = value;
  }

  // target_recovery_protection_container_id - computed: false, optional: false, required: true
  private _targetRecoveryProtectionContainerId: string;
  public get targetRecoveryProtectionContainerId() {
    return this._targetRecoveryProtectionContainerId;
  }
  public set targetRecoveryProtectionContainerId(value: string) {
    this._targetRecoveryProtectionContainerId = value;
  }

  // target_resource_group_id - computed: false, optional: false, required: true
  private _targetResourceGroupId: string;
  public get targetResourceGroupId() {
    return this._targetResourceGroupId;
  }
  public set targetResourceGroupId(value: string) {
    this._targetResourceGroupId = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SiteRecoveryReplicatedVmTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: SiteRecoveryReplicatedVmTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      managed_disk: this._managedDisk,
      name: this._name,
      recovery_replication_policy_id: this._recoveryReplicationPolicyId,
      recovery_vault_name: this._recoveryVaultName,
      resource_group_name: this._resourceGroupName,
      source_recovery_fabric_name: this._sourceRecoveryFabricName,
      source_recovery_protection_container_name: this._sourceRecoveryProtectionContainerName,
      source_vm_id: this._sourceVmId,
      target_availability_set_id: this._targetAvailabilitySetId,
      target_recovery_fabric_id: this._targetRecoveryFabricId,
      target_recovery_protection_container_id: this._targetRecoveryProtectionContainerId,
      target_resource_group_id: this._targetResourceGroupId,
      timeouts: this._timeouts,
    };
  }
}
