// https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replicated_vm.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SiteRecoveryReplicatedVmConfig extends TerraformMetaArguments {
  readonly managedDisk?: SiteRecoveryReplicatedVmManagedDisk[];
  readonly name: string;
  readonly networkInterface?: SiteRecoveryReplicatedVmNetworkInterface[];
  readonly recoveryReplicationPolicyId: string;
  readonly recoveryVaultName: string;
  readonly resourceGroupName: string;
  readonly sourceRecoveryFabricName: string;
  readonly sourceRecoveryProtectionContainerName: string;
  readonly sourceVmId: string;
  readonly targetAvailabilitySetId?: string;
  readonly targetNetworkId?: string;
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
export interface SiteRecoveryReplicatedVmNetworkInterface {
  readonly sourceNetworkInterfaceId?: string;
  readonly targetStaticIp?: string;
  readonly targetSubnetName?: string;
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
    this._networkInterface = config.networkInterface;
    this._recoveryReplicationPolicyId = config.recoveryReplicationPolicyId;
    this._recoveryVaultName = config.recoveryVaultName;
    this._resourceGroupName = config.resourceGroupName;
    this._sourceRecoveryFabricName = config.sourceRecoveryFabricName;
    this._sourceRecoveryProtectionContainerName = config.sourceRecoveryProtectionContainerName;
    this._sourceVmId = config.sourceVmId;
    this._targetAvailabilitySetId = config.targetAvailabilitySetId;
    this._targetNetworkId = config.targetNetworkId;
    this._targetRecoveryFabricId = config.targetRecoveryFabricId;
    this._targetRecoveryProtectionContainerId = config.targetRecoveryProtectionContainerId;
    this._targetResourceGroupId = config.targetResourceGroupId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // managed_disk - computed: false, optional: true, required: false
  private _managedDisk?: SiteRecoveryReplicatedVmManagedDisk[];
  public get managedDisk() {
    return this.interpolationForAttribute('managed_disk') as any;
  }
  public set managedDisk(value: SiteRecoveryReplicatedVmManagedDisk[] ) {
    this._managedDisk = value;
  }
  public resetManagedDisk() {
    this._managedDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedDiskInput() {
    return this._managedDisk
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

  // network_interface - computed: true, optional: true, required: false
  private _networkInterface?: SiteRecoveryReplicatedVmNetworkInterface[]
  public get networkInterface(): SiteRecoveryReplicatedVmNetworkInterface[] {
    return this.interpolationForAttribute('network_interface') as any; // Getting the computed value is not yet implemented
  }
  public set networkInterface(value: SiteRecoveryReplicatedVmNetworkInterface[]) {
    this._networkInterface = value;
  }
  public resetNetworkInterface() {
    this._networkInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceInput() {
    return this._networkInterface
  }

  // recovery_replication_policy_id - computed: false, optional: false, required: true
  private _recoveryReplicationPolicyId: string;
  public get recoveryReplicationPolicyId() {
    return this.getStringAttribute('recovery_replication_policy_id');
  }
  public set recoveryReplicationPolicyId(value: string) {
    this._recoveryReplicationPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryReplicationPolicyIdInput() {
    return this._recoveryReplicationPolicyId
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

  // source_recovery_fabric_name - computed: false, optional: false, required: true
  private _sourceRecoveryFabricName: string;
  public get sourceRecoveryFabricName() {
    return this.getStringAttribute('source_recovery_fabric_name');
  }
  public set sourceRecoveryFabricName(value: string) {
    this._sourceRecoveryFabricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRecoveryFabricNameInput() {
    return this._sourceRecoveryFabricName
  }

  // source_recovery_protection_container_name - computed: false, optional: false, required: true
  private _sourceRecoveryProtectionContainerName: string;
  public get sourceRecoveryProtectionContainerName() {
    return this.getStringAttribute('source_recovery_protection_container_name');
  }
  public set sourceRecoveryProtectionContainerName(value: string) {
    this._sourceRecoveryProtectionContainerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRecoveryProtectionContainerNameInput() {
    return this._sourceRecoveryProtectionContainerName
  }

  // source_vm_id - computed: false, optional: false, required: true
  private _sourceVmId: string;
  public get sourceVmId() {
    return this.getStringAttribute('source_vm_id');
  }
  public set sourceVmId(value: string) {
    this._sourceVmId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVmIdInput() {
    return this._sourceVmId
  }

  // target_availability_set_id - computed: false, optional: true, required: false
  private _targetAvailabilitySetId?: string;
  public get targetAvailabilitySetId() {
    return this.getStringAttribute('target_availability_set_id');
  }
  public set targetAvailabilitySetId(value: string ) {
    this._targetAvailabilitySetId = value;
  }
  public resetTargetAvailabilitySetId() {
    this._targetAvailabilitySetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetAvailabilitySetIdInput() {
    return this._targetAvailabilitySetId
  }

  // target_network_id - computed: true, optional: true, required: false
  private _targetNetworkId?: string;
  public get targetNetworkId() {
    return this.getStringAttribute('target_network_id');
  }
  public set targetNetworkId(value: string) {
    this._targetNetworkId = value;
  }
  public resetTargetNetworkId() {
    this._targetNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNetworkIdInput() {
    return this._targetNetworkId
  }

  // target_recovery_fabric_id - computed: false, optional: false, required: true
  private _targetRecoveryFabricId: string;
  public get targetRecoveryFabricId() {
    return this.getStringAttribute('target_recovery_fabric_id');
  }
  public set targetRecoveryFabricId(value: string) {
    this._targetRecoveryFabricId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRecoveryFabricIdInput() {
    return this._targetRecoveryFabricId
  }

  // target_recovery_protection_container_id - computed: false, optional: false, required: true
  private _targetRecoveryProtectionContainerId: string;
  public get targetRecoveryProtectionContainerId() {
    return this.getStringAttribute('target_recovery_protection_container_id');
  }
  public set targetRecoveryProtectionContainerId(value: string) {
    this._targetRecoveryProtectionContainerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRecoveryProtectionContainerIdInput() {
    return this._targetRecoveryProtectionContainerId
  }

  // target_resource_group_id - computed: false, optional: false, required: true
  private _targetResourceGroupId: string;
  public get targetResourceGroupId() {
    return this.getStringAttribute('target_resource_group_id');
  }
  public set targetResourceGroupId(value: string) {
    this._targetResourceGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourceGroupIdInput() {
    return this._targetResourceGroupId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SiteRecoveryReplicatedVmTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SiteRecoveryReplicatedVmTimeouts ) {
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
      managed_disk: this._managedDisk,
      name: this._name,
      network_interface: this._networkInterface,
      recovery_replication_policy_id: this._recoveryReplicationPolicyId,
      recovery_vault_name: this._recoveryVaultName,
      resource_group_name: this._resourceGroupName,
      source_recovery_fabric_name: this._sourceRecoveryFabricName,
      source_recovery_protection_container_name: this._sourceRecoveryProtectionContainerName,
      source_vm_id: this._sourceVmId,
      target_availability_set_id: this._targetAvailabilitySetId,
      target_network_id: this._targetNetworkId,
      target_recovery_fabric_id: this._targetRecoveryFabricId,
      target_recovery_protection_container_id: this._targetRecoveryProtectionContainerId,
      target_resource_group_id: this._targetResourceGroupId,
      timeouts: this._timeouts,
    };
  }
}
