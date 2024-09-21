// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/site_recovery_vmware_replicated_vm
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SiteRecoveryVmwareReplicatedVmConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/site_recovery_vmware_replicated_vm#appliance_name SiteRecoveryVmwareReplicatedVm#appliance_name}
  */
  readonly applianceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/site_recovery_vmware_replicated_vm#default_log_storage_account_id SiteRecoveryVmwareReplicatedVm#default_log_storage_account_id}
  */
  readonly defaultLogStorageAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/site_recovery_vmware_replicated_vm#default_recovery_disk_type SiteRecoveryVmwareReplicatedVm#default_recovery_disk_type}
  */
  readonly defaultRecoveryDiskType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/site_recovery_vmware_replicated_vm#default_target_disk_encryption_set_id SiteRecoveryVmwareReplicatedVm#default_target_disk_encryption_set_id}
  */
  readonly defaultTargetDiskEncryptionSetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/site_recovery_vmware_replicated_vm#id SiteRecoveryVmwareReplicatedVm#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/site_recovery_vmware_replicated_vm#license_type SiteRecoveryVmwareReplicatedVm#license_type}
  */
  readonly licenseType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/site_recovery_vmware_replicated_vm#multi_vm_group_name SiteRecoveryVmwareReplicatedVm#multi_vm_group_name}
  */
  readonly multiVmGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/site_recovery_vmware_replicated_vm#name SiteRecoveryVmwareReplicatedVm#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/site_recovery_vmware_replicated_vm#physical_server_credential_name SiteRecoveryVmwareReplicatedVm#physical_server_credential_name}
  */
  readonly physicalServerCredentialName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/site_recovery_vmware_replicated_vm#recovery_replication_policy_id SiteRecoveryVmwareReplicatedVm#recovery_replication_policy_id}
  */
  readonly recoveryReplicationPolicyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/site_recovery_vmware_replicated_vm#recovery_vault_id SiteRecoveryVmwareReplicatedVm#recovery_vault_id}
  */
  readonly recoveryVaultId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/site_recovery_vmware_replicated_vm#source_vm_name SiteRecoveryVmwareReplicatedVm#source_vm_name}
  */
  readonly sourceVmName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/site_recovery_vmware_replicated_vm#target_availability_set_id SiteRecoveryVmwareReplicatedVm#target_availability_set_id}
  */
  readonly targetAvailabilitySetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/site_recovery_vmware_replicated_vm#target_boot_diagnostics_storage_account_id SiteRecoveryVmwareReplicatedVm#target_boot_diagnostics_storage_account_id}
  */
  readonly targetBootDiagnosticsStorageAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/site_recovery_vmware_replicated_vm#target_network_id SiteRecoveryVmwareReplicatedVm#target_network_id}
  */
  readonly targetNetworkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/site_recovery_vmware_replicated_vm#target_proximity_placement_group_id SiteRecoveryVmwareReplicatedVm#target_proximity_placement_group_id}
  */
  readonly targetProximityPlacementGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/site_recovery_vmware_replicated_vm#target_resource_group_id SiteRecoveryVmwareReplicatedVm#target_resource_group_id}
  */
  readonly targetResourceGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/site_recovery_vmware_replicated_vm#target_vm_name SiteRecoveryVmwareReplicatedVm#target_vm_name}
  */
  readonly targetVmName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/site_recovery_vmware_replicated_vm#target_vm_size SiteRecoveryVmwareReplicatedVm#target_vm_size}
  */
  readonly targetVmSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/site_recovery_vmware_replicated_vm#target_zone SiteRecoveryVmwareReplicatedVm#target_zone}
  */
  readonly targetZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/site_recovery_vmware_replicated_vm#test_network_id SiteRecoveryVmwareReplicatedVm#test_network_id}
  */
  readonly testNetworkId?: string;
  /**
  * managed_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/site_recovery_vmware_replicated_vm#managed_disk SiteRecoveryVmwareReplicatedVm#managed_disk}
  */
  readonly managedDisk?: SiteRecoveryVmwareReplicatedVmManagedDisk[] | cdktf.IResolvable;
  /**
  * network_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/site_recovery_vmware_replicated_vm#network_interface SiteRecoveryVmwareReplicatedVm#network_interface}
  */
  readonly networkInterface?: SiteRecoveryVmwareReplicatedVmNetworkInterface[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/site_recovery_vmware_replicated_vm#timeouts SiteRecoveryVmwareReplicatedVm#timeouts}
  */
  readonly timeouts?: SiteRecoveryVmwareReplicatedVmTimeouts;
}
export interface SiteRecoveryVmwareReplicatedVmManagedDisk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/site_recovery_vmware_replicated_vm#disk_id SiteRecoveryVmwareReplicatedVm#disk_id}
  */
  readonly diskId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/site_recovery_vmware_replicated_vm#log_storage_account_id SiteRecoveryVmwareReplicatedVm#log_storage_account_id}
  */
  readonly logStorageAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/site_recovery_vmware_replicated_vm#target_disk_encryption_set_id SiteRecoveryVmwareReplicatedVm#target_disk_encryption_set_id}
  */
  readonly targetDiskEncryptionSetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/site_recovery_vmware_replicated_vm#target_disk_type SiteRecoveryVmwareReplicatedVm#target_disk_type}
  */
  readonly targetDiskType: string;
}

export function siteRecoveryVmwareReplicatedVmManagedDiskToTerraform(struct?: SiteRecoveryVmwareReplicatedVmManagedDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_id: cdktf.stringToTerraform(struct!.diskId),
    log_storage_account_id: cdktf.stringToTerraform(struct!.logStorageAccountId),
    target_disk_encryption_set_id: cdktf.stringToTerraform(struct!.targetDiskEncryptionSetId),
    target_disk_type: cdktf.stringToTerraform(struct!.targetDiskType),
  }
}


export function siteRecoveryVmwareReplicatedVmManagedDiskToHclTerraform(struct?: SiteRecoveryVmwareReplicatedVmManagedDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_id: {
      value: cdktf.stringToHclTerraform(struct!.diskId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_storage_account_id: {
      value: cdktf.stringToHclTerraform(struct!.logStorageAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_disk_encryption_set_id: {
      value: cdktf.stringToHclTerraform(struct!.targetDiskEncryptionSetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_disk_type: {
      value: cdktf.stringToHclTerraform(struct!.targetDiskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SiteRecoveryVmwareReplicatedVmManagedDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskId = this._diskId;
    }
    if (this._logStorageAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStorageAccountId = this._logStorageAccountId;
    }
    if (this._targetDiskEncryptionSetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetDiskEncryptionSetId = this._targetDiskEncryptionSetId;
    }
    if (this._targetDiskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetDiskType = this._targetDiskType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteRecoveryVmwareReplicatedVmManagedDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskId = undefined;
      this._logStorageAccountId = undefined;
      this._targetDiskEncryptionSetId = undefined;
      this._targetDiskType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskId = value.diskId;
      this._logStorageAccountId = value.logStorageAccountId;
      this._targetDiskEncryptionSetId = value.targetDiskEncryptionSetId;
      this._targetDiskType = value.targetDiskType;
    }
  }

  // disk_id - computed: false, optional: false, required: true
  private _diskId?: string; 
  public get diskId() {
    return this.getStringAttribute('disk_id');
  }
  public set diskId(value: string) {
    this._diskId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskIdInput() {
    return this._diskId;
  }

  // log_storage_account_id - computed: false, optional: true, required: false
  private _logStorageAccountId?: string; 
  public get logStorageAccountId() {
    return this.getStringAttribute('log_storage_account_id');
  }
  public set logStorageAccountId(value: string) {
    this._logStorageAccountId = value;
  }
  public resetLogStorageAccountId() {
    this._logStorageAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStorageAccountIdInput() {
    return this._logStorageAccountId;
  }

  // target_disk_encryption_set_id - computed: false, optional: true, required: false
  private _targetDiskEncryptionSetId?: string; 
  public get targetDiskEncryptionSetId() {
    return this.getStringAttribute('target_disk_encryption_set_id');
  }
  public set targetDiskEncryptionSetId(value: string) {
    this._targetDiskEncryptionSetId = value;
  }
  public resetTargetDiskEncryptionSetId() {
    this._targetDiskEncryptionSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDiskEncryptionSetIdInput() {
    return this._targetDiskEncryptionSetId;
  }

  // target_disk_type - computed: false, optional: false, required: true
  private _targetDiskType?: string; 
  public get targetDiskType() {
    return this.getStringAttribute('target_disk_type');
  }
  public set targetDiskType(value: string) {
    this._targetDiskType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDiskTypeInput() {
    return this._targetDiskType;
  }
}

export class SiteRecoveryVmwareReplicatedVmManagedDiskList extends cdktf.ComplexList {
  public internalValue? : SiteRecoveryVmwareReplicatedVmManagedDisk[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference {
    return new SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteRecoveryVmwareReplicatedVmNetworkInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/site_recovery_vmware_replicated_vm#is_primary SiteRecoveryVmwareReplicatedVm#is_primary}
  */
  readonly isPrimary: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/site_recovery_vmware_replicated_vm#source_mac_address SiteRecoveryVmwareReplicatedVm#source_mac_address}
  */
  readonly sourceMacAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/site_recovery_vmware_replicated_vm#target_static_ip SiteRecoveryVmwareReplicatedVm#target_static_ip}
  */
  readonly targetStaticIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/site_recovery_vmware_replicated_vm#target_subnet_name SiteRecoveryVmwareReplicatedVm#target_subnet_name}
  */
  readonly targetSubnetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/site_recovery_vmware_replicated_vm#test_subnet_name SiteRecoveryVmwareReplicatedVm#test_subnet_name}
  */
  readonly testSubnetName?: string;
}

export function siteRecoveryVmwareReplicatedVmNetworkInterfaceToTerraform(struct?: SiteRecoveryVmwareReplicatedVmNetworkInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_primary: cdktf.booleanToTerraform(struct!.isPrimary),
    source_mac_address: cdktf.stringToTerraform(struct!.sourceMacAddress),
    target_static_ip: cdktf.stringToTerraform(struct!.targetStaticIp),
    target_subnet_name: cdktf.stringToTerraform(struct!.targetSubnetName),
    test_subnet_name: cdktf.stringToTerraform(struct!.testSubnetName),
  }
}


export function siteRecoveryVmwareReplicatedVmNetworkInterfaceToHclTerraform(struct?: SiteRecoveryVmwareReplicatedVmNetworkInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_primary: {
      value: cdktf.booleanToHclTerraform(struct!.isPrimary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source_mac_address: {
      value: cdktf.stringToHclTerraform(struct!.sourceMacAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_static_ip: {
      value: cdktf.stringToHclTerraform(struct!.targetStaticIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_subnet_name: {
      value: cdktf.stringToHclTerraform(struct!.targetSubnetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    test_subnet_name: {
      value: cdktf.stringToHclTerraform(struct!.testSubnetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SiteRecoveryVmwareReplicatedVmNetworkInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isPrimary !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPrimary = this._isPrimary;
    }
    if (this._sourceMacAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceMacAddress = this._sourceMacAddress;
    }
    if (this._targetStaticIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetStaticIp = this._targetStaticIp;
    }
    if (this._targetSubnetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetSubnetName = this._targetSubnetName;
    }
    if (this._testSubnetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.testSubnetName = this._testSubnetName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteRecoveryVmwareReplicatedVmNetworkInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isPrimary = undefined;
      this._sourceMacAddress = undefined;
      this._targetStaticIp = undefined;
      this._targetSubnetName = undefined;
      this._testSubnetName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isPrimary = value.isPrimary;
      this._sourceMacAddress = value.sourceMacAddress;
      this._targetStaticIp = value.targetStaticIp;
      this._targetSubnetName = value.targetSubnetName;
      this._testSubnetName = value.testSubnetName;
    }
  }

  // is_primary - computed: false, optional: false, required: true
  private _isPrimary?: boolean | cdktf.IResolvable; 
  public get isPrimary() {
    return this.getBooleanAttribute('is_primary');
  }
  public set isPrimary(value: boolean | cdktf.IResolvable) {
    this._isPrimary = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isPrimaryInput() {
    return this._isPrimary;
  }

  // source_mac_address - computed: false, optional: false, required: true
  private _sourceMacAddress?: string; 
  public get sourceMacAddress() {
    return this.getStringAttribute('source_mac_address');
  }
  public set sourceMacAddress(value: string) {
    this._sourceMacAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceMacAddressInput() {
    return this._sourceMacAddress;
  }

  // target_static_ip - computed: false, optional: true, required: false
  private _targetStaticIp?: string; 
  public get targetStaticIp() {
    return this.getStringAttribute('target_static_ip');
  }
  public set targetStaticIp(value: string) {
    this._targetStaticIp = value;
  }
  public resetTargetStaticIp() {
    this._targetStaticIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetStaticIpInput() {
    return this._targetStaticIp;
  }

  // target_subnet_name - computed: false, optional: true, required: false
  private _targetSubnetName?: string; 
  public get targetSubnetName() {
    return this.getStringAttribute('target_subnet_name');
  }
  public set targetSubnetName(value: string) {
    this._targetSubnetName = value;
  }
  public resetTargetSubnetName() {
    this._targetSubnetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetSubnetNameInput() {
    return this._targetSubnetName;
  }

  // test_subnet_name - computed: false, optional: true, required: false
  private _testSubnetName?: string; 
  public get testSubnetName() {
    return this.getStringAttribute('test_subnet_name');
  }
  public set testSubnetName(value: string) {
    this._testSubnetName = value;
  }
  public resetTestSubnetName() {
    this._testSubnetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testSubnetNameInput() {
    return this._testSubnetName;
  }
}

export class SiteRecoveryVmwareReplicatedVmNetworkInterfaceList extends cdktf.ComplexList {
  public internalValue? : SiteRecoveryVmwareReplicatedVmNetworkInterface[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference {
    return new SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteRecoveryVmwareReplicatedVmTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/site_recovery_vmware_replicated_vm#create SiteRecoveryVmwareReplicatedVm#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/site_recovery_vmware_replicated_vm#delete SiteRecoveryVmwareReplicatedVm#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/site_recovery_vmware_replicated_vm#read SiteRecoveryVmwareReplicatedVm#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/site_recovery_vmware_replicated_vm#update SiteRecoveryVmwareReplicatedVm#update}
  */
  readonly update?: string;
}

export function siteRecoveryVmwareReplicatedVmTimeoutsToTerraform(struct?: SiteRecoveryVmwareReplicatedVmTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function siteRecoveryVmwareReplicatedVmTimeoutsToHclTerraform(struct?: SiteRecoveryVmwareReplicatedVmTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteRecoveryVmwareReplicatedVmTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteRecoveryVmwareReplicatedVmTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/site_recovery_vmware_replicated_vm azurerm_site_recovery_vmware_replicated_vm}
*/
export class SiteRecoveryVmwareReplicatedVm extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_site_recovery_vmware_replicated_vm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SiteRecoveryVmwareReplicatedVm resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SiteRecoveryVmwareReplicatedVm to import
  * @param importFromId The id of the existing SiteRecoveryVmwareReplicatedVm that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/site_recovery_vmware_replicated_vm#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SiteRecoveryVmwareReplicatedVm to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_site_recovery_vmware_replicated_vm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/site_recovery_vmware_replicated_vm azurerm_site_recovery_vmware_replicated_vm} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SiteRecoveryVmwareReplicatedVmConfig
  */
  public constructor(scope: Construct, id: string, config: SiteRecoveryVmwareReplicatedVmConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_site_recovery_vmware_replicated_vm',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.3.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applianceName = config.applianceName;
    this._defaultLogStorageAccountId = config.defaultLogStorageAccountId;
    this._defaultRecoveryDiskType = config.defaultRecoveryDiskType;
    this._defaultTargetDiskEncryptionSetId = config.defaultTargetDiskEncryptionSetId;
    this._id = config.id;
    this._licenseType = config.licenseType;
    this._multiVmGroupName = config.multiVmGroupName;
    this._name = config.name;
    this._physicalServerCredentialName = config.physicalServerCredentialName;
    this._recoveryReplicationPolicyId = config.recoveryReplicationPolicyId;
    this._recoveryVaultId = config.recoveryVaultId;
    this._sourceVmName = config.sourceVmName;
    this._targetAvailabilitySetId = config.targetAvailabilitySetId;
    this._targetBootDiagnosticsStorageAccountId = config.targetBootDiagnosticsStorageAccountId;
    this._targetNetworkId = config.targetNetworkId;
    this._targetProximityPlacementGroupId = config.targetProximityPlacementGroupId;
    this._targetResourceGroupId = config.targetResourceGroupId;
    this._targetVmName = config.targetVmName;
    this._targetVmSize = config.targetVmSize;
    this._targetZone = config.targetZone;
    this._testNetworkId = config.testNetworkId;
    this._managedDisk.internalValue = config.managedDisk;
    this._networkInterface.internalValue = config.networkInterface;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // appliance_name - computed: false, optional: false, required: true
  private _applianceName?: string; 
  public get applianceName() {
    return this.getStringAttribute('appliance_name');
  }
  public set applianceName(value: string) {
    this._applianceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applianceNameInput() {
    return this._applianceName;
  }

  // default_log_storage_account_id - computed: false, optional: true, required: false
  private _defaultLogStorageAccountId?: string; 
  public get defaultLogStorageAccountId() {
    return this.getStringAttribute('default_log_storage_account_id');
  }
  public set defaultLogStorageAccountId(value: string) {
    this._defaultLogStorageAccountId = value;
  }
  public resetDefaultLogStorageAccountId() {
    this._defaultLogStorageAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLogStorageAccountIdInput() {
    return this._defaultLogStorageAccountId;
  }

  // default_recovery_disk_type - computed: false, optional: true, required: false
  private _defaultRecoveryDiskType?: string; 
  public get defaultRecoveryDiskType() {
    return this.getStringAttribute('default_recovery_disk_type');
  }
  public set defaultRecoveryDiskType(value: string) {
    this._defaultRecoveryDiskType = value;
  }
  public resetDefaultRecoveryDiskType() {
    this._defaultRecoveryDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRecoveryDiskTypeInput() {
    return this._defaultRecoveryDiskType;
  }

  // default_target_disk_encryption_set_id - computed: false, optional: true, required: false
  private _defaultTargetDiskEncryptionSetId?: string; 
  public get defaultTargetDiskEncryptionSetId() {
    return this.getStringAttribute('default_target_disk_encryption_set_id');
  }
  public set defaultTargetDiskEncryptionSetId(value: string) {
    this._defaultTargetDiskEncryptionSetId = value;
  }
  public resetDefaultTargetDiskEncryptionSetId() {
    this._defaultTargetDiskEncryptionSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTargetDiskEncryptionSetIdInput() {
    return this._defaultTargetDiskEncryptionSetId;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // license_type - computed: false, optional: true, required: false
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
    return this._licenseType;
  }

  // multi_vm_group_name - computed: false, optional: true, required: false
  private _multiVmGroupName?: string; 
  public get multiVmGroupName() {
    return this.getStringAttribute('multi_vm_group_name');
  }
  public set multiVmGroupName(value: string) {
    this._multiVmGroupName = value;
  }
  public resetMultiVmGroupName() {
    this._multiVmGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiVmGroupNameInput() {
    return this._multiVmGroupName;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // physical_server_credential_name - computed: false, optional: false, required: true
  private _physicalServerCredentialName?: string; 
  public get physicalServerCredentialName() {
    return this.getStringAttribute('physical_server_credential_name');
  }
  public set physicalServerCredentialName(value: string) {
    this._physicalServerCredentialName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get physicalServerCredentialNameInput() {
    return this._physicalServerCredentialName;
  }

  // recovery_replication_policy_id - computed: false, optional: false, required: true
  private _recoveryReplicationPolicyId?: string; 
  public get recoveryReplicationPolicyId() {
    return this.getStringAttribute('recovery_replication_policy_id');
  }
  public set recoveryReplicationPolicyId(value: string) {
    this._recoveryReplicationPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryReplicationPolicyIdInput() {
    return this._recoveryReplicationPolicyId;
  }

  // recovery_vault_id - computed: false, optional: false, required: true
  private _recoveryVaultId?: string; 
  public get recoveryVaultId() {
    return this.getStringAttribute('recovery_vault_id');
  }
  public set recoveryVaultId(value: string) {
    this._recoveryVaultId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryVaultIdInput() {
    return this._recoveryVaultId;
  }

  // source_vm_name - computed: false, optional: false, required: true
  private _sourceVmName?: string; 
  public get sourceVmName() {
    return this.getStringAttribute('source_vm_name');
  }
  public set sourceVmName(value: string) {
    this._sourceVmName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVmNameInput() {
    return this._sourceVmName;
  }

  // target_availability_set_id - computed: false, optional: true, required: false
  private _targetAvailabilitySetId?: string; 
  public get targetAvailabilitySetId() {
    return this.getStringAttribute('target_availability_set_id');
  }
  public set targetAvailabilitySetId(value: string) {
    this._targetAvailabilitySetId = value;
  }
  public resetTargetAvailabilitySetId() {
    this._targetAvailabilitySetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetAvailabilitySetIdInput() {
    return this._targetAvailabilitySetId;
  }

  // target_boot_diagnostics_storage_account_id - computed: false, optional: true, required: false
  private _targetBootDiagnosticsStorageAccountId?: string; 
  public get targetBootDiagnosticsStorageAccountId() {
    return this.getStringAttribute('target_boot_diagnostics_storage_account_id');
  }
  public set targetBootDiagnosticsStorageAccountId(value: string) {
    this._targetBootDiagnosticsStorageAccountId = value;
  }
  public resetTargetBootDiagnosticsStorageAccountId() {
    this._targetBootDiagnosticsStorageAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetBootDiagnosticsStorageAccountIdInput() {
    return this._targetBootDiagnosticsStorageAccountId;
  }

  // target_network_id - computed: false, optional: true, required: false
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
    return this._targetNetworkId;
  }

  // target_proximity_placement_group_id - computed: false, optional: true, required: false
  private _targetProximityPlacementGroupId?: string; 
  public get targetProximityPlacementGroupId() {
    return this.getStringAttribute('target_proximity_placement_group_id');
  }
  public set targetProximityPlacementGroupId(value: string) {
    this._targetProximityPlacementGroupId = value;
  }
  public resetTargetProximityPlacementGroupId() {
    this._targetProximityPlacementGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetProximityPlacementGroupIdInput() {
    return this._targetProximityPlacementGroupId;
  }

  // target_resource_group_id - computed: false, optional: false, required: true
  private _targetResourceGroupId?: string; 
  public get targetResourceGroupId() {
    return this.getStringAttribute('target_resource_group_id');
  }
  public set targetResourceGroupId(value: string) {
    this._targetResourceGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourceGroupIdInput() {
    return this._targetResourceGroupId;
  }

  // target_vm_name - computed: false, optional: false, required: true
  private _targetVmName?: string; 
  public get targetVmName() {
    return this.getStringAttribute('target_vm_name');
  }
  public set targetVmName(value: string) {
    this._targetVmName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetVmNameInput() {
    return this._targetVmName;
  }

  // target_vm_size - computed: false, optional: true, required: false
  private _targetVmSize?: string; 
  public get targetVmSize() {
    return this.getStringAttribute('target_vm_size');
  }
  public set targetVmSize(value: string) {
    this._targetVmSize = value;
  }
  public resetTargetVmSize() {
    this._targetVmSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetVmSizeInput() {
    return this._targetVmSize;
  }

  // target_zone - computed: false, optional: true, required: false
  private _targetZone?: string; 
  public get targetZone() {
    return this.getStringAttribute('target_zone');
  }
  public set targetZone(value: string) {
    this._targetZone = value;
  }
  public resetTargetZone() {
    this._targetZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetZoneInput() {
    return this._targetZone;
  }

  // test_network_id - computed: false, optional: true, required: false
  private _testNetworkId?: string; 
  public get testNetworkId() {
    return this.getStringAttribute('test_network_id');
  }
  public set testNetworkId(value: string) {
    this._testNetworkId = value;
  }
  public resetTestNetworkId() {
    this._testNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testNetworkIdInput() {
    return this._testNetworkId;
  }

  // managed_disk - computed: false, optional: true, required: false
  private _managedDisk = new SiteRecoveryVmwareReplicatedVmManagedDiskList(this, "managed_disk", false);
  public get managedDisk() {
    return this._managedDisk;
  }
  public putManagedDisk(value: SiteRecoveryVmwareReplicatedVmManagedDisk[] | cdktf.IResolvable) {
    this._managedDisk.internalValue = value;
  }
  public resetManagedDisk() {
    this._managedDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedDiskInput() {
    return this._managedDisk.internalValue;
  }

  // network_interface - computed: false, optional: true, required: false
  private _networkInterface = new SiteRecoveryVmwareReplicatedVmNetworkInterfaceList(this, "network_interface", false);
  public get networkInterface() {
    return this._networkInterface;
  }
  public putNetworkInterface(value: SiteRecoveryVmwareReplicatedVmNetworkInterface[] | cdktf.IResolvable) {
    this._networkInterface.internalValue = value;
  }
  public resetNetworkInterface() {
    this._networkInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceInput() {
    return this._networkInterface.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SiteRecoveryVmwareReplicatedVmTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      appliance_name: cdktf.stringToTerraform(this._applianceName),
      default_log_storage_account_id: cdktf.stringToTerraform(this._defaultLogStorageAccountId),
      default_recovery_disk_type: cdktf.stringToTerraform(this._defaultRecoveryDiskType),
      default_target_disk_encryption_set_id: cdktf.stringToTerraform(this._defaultTargetDiskEncryptionSetId),
      id: cdktf.stringToTerraform(this._id),
      license_type: cdktf.stringToTerraform(this._licenseType),
      multi_vm_group_name: cdktf.stringToTerraform(this._multiVmGroupName),
      name: cdktf.stringToTerraform(this._name),
      physical_server_credential_name: cdktf.stringToTerraform(this._physicalServerCredentialName),
      recovery_replication_policy_id: cdktf.stringToTerraform(this._recoveryReplicationPolicyId),
      recovery_vault_id: cdktf.stringToTerraform(this._recoveryVaultId),
      source_vm_name: cdktf.stringToTerraform(this._sourceVmName),
      target_availability_set_id: cdktf.stringToTerraform(this._targetAvailabilitySetId),
      target_boot_diagnostics_storage_account_id: cdktf.stringToTerraform(this._targetBootDiagnosticsStorageAccountId),
      target_network_id: cdktf.stringToTerraform(this._targetNetworkId),
      target_proximity_placement_group_id: cdktf.stringToTerraform(this._targetProximityPlacementGroupId),
      target_resource_group_id: cdktf.stringToTerraform(this._targetResourceGroupId),
      target_vm_name: cdktf.stringToTerraform(this._targetVmName),
      target_vm_size: cdktf.stringToTerraform(this._targetVmSize),
      target_zone: cdktf.stringToTerraform(this._targetZone),
      test_network_id: cdktf.stringToTerraform(this._testNetworkId),
      managed_disk: cdktf.listMapper(siteRecoveryVmwareReplicatedVmManagedDiskToTerraform, true)(this._managedDisk.internalValue),
      network_interface: cdktf.listMapper(siteRecoveryVmwareReplicatedVmNetworkInterfaceToTerraform, true)(this._networkInterface.internalValue),
      timeouts: siteRecoveryVmwareReplicatedVmTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      appliance_name: {
        value: cdktf.stringToHclTerraform(this._applianceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_log_storage_account_id: {
        value: cdktf.stringToHclTerraform(this._defaultLogStorageAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_recovery_disk_type: {
        value: cdktf.stringToHclTerraform(this._defaultRecoveryDiskType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_target_disk_encryption_set_id: {
        value: cdktf.stringToHclTerraform(this._defaultTargetDiskEncryptionSetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      license_type: {
        value: cdktf.stringToHclTerraform(this._licenseType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multi_vm_group_name: {
        value: cdktf.stringToHclTerraform(this._multiVmGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      physical_server_credential_name: {
        value: cdktf.stringToHclTerraform(this._physicalServerCredentialName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recovery_replication_policy_id: {
        value: cdktf.stringToHclTerraform(this._recoveryReplicationPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recovery_vault_id: {
        value: cdktf.stringToHclTerraform(this._recoveryVaultId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_vm_name: {
        value: cdktf.stringToHclTerraform(this._sourceVmName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_availability_set_id: {
        value: cdktf.stringToHclTerraform(this._targetAvailabilitySetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_boot_diagnostics_storage_account_id: {
        value: cdktf.stringToHclTerraform(this._targetBootDiagnosticsStorageAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_network_id: {
        value: cdktf.stringToHclTerraform(this._targetNetworkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_proximity_placement_group_id: {
        value: cdktf.stringToHclTerraform(this._targetProximityPlacementGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_resource_group_id: {
        value: cdktf.stringToHclTerraform(this._targetResourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_vm_name: {
        value: cdktf.stringToHclTerraform(this._targetVmName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_vm_size: {
        value: cdktf.stringToHclTerraform(this._targetVmSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_zone: {
        value: cdktf.stringToHclTerraform(this._targetZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      test_network_id: {
        value: cdktf.stringToHclTerraform(this._testNetworkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managed_disk: {
        value: cdktf.listMapperHcl(siteRecoveryVmwareReplicatedVmManagedDiskToHclTerraform, true)(this._managedDisk.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SiteRecoveryVmwareReplicatedVmManagedDiskList",
      },
      network_interface: {
        value: cdktf.listMapperHcl(siteRecoveryVmwareReplicatedVmNetworkInterfaceToHclTerraform, true)(this._networkInterface.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SiteRecoveryVmwareReplicatedVmNetworkInterfaceList",
      },
      timeouts: {
        value: siteRecoveryVmwareReplicatedVmTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SiteRecoveryVmwareReplicatedVmTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
