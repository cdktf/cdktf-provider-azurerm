// https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrchestratedVirtualMachineScaleSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#encryption_at_host_enabled OrchestratedVirtualMachineScaleSet#encryption_at_host_enabled}
  */
  readonly encryptionAtHostEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#eviction_policy OrchestratedVirtualMachineScaleSet#eviction_policy}
  */
  readonly evictionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#instances OrchestratedVirtualMachineScaleSet#instances}
  */
  readonly instances?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#license_type OrchestratedVirtualMachineScaleSet#license_type}
  */
  readonly licenseType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#location OrchestratedVirtualMachineScaleSet#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#max_bid_price OrchestratedVirtualMachineScaleSet#max_bid_price}
  */
  readonly maxBidPrice?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#name OrchestratedVirtualMachineScaleSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#platform_fault_domain_count OrchestratedVirtualMachineScaleSet#platform_fault_domain_count}
  */
  readonly platformFaultDomainCount: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#priority OrchestratedVirtualMachineScaleSet#priority}
  */
  readonly priority?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#proximity_placement_group_id OrchestratedVirtualMachineScaleSet#proximity_placement_group_id}
  */
  readonly proximityPlacementGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#resource_group_name OrchestratedVirtualMachineScaleSet#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#sku_name OrchestratedVirtualMachineScaleSet#sku_name}
  */
  readonly skuName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#source_image_id OrchestratedVirtualMachineScaleSet#source_image_id}
  */
  readonly sourceImageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#tags OrchestratedVirtualMachineScaleSet#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#zone_balance OrchestratedVirtualMachineScaleSet#zone_balance}
  */
  readonly zoneBalance?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#zones OrchestratedVirtualMachineScaleSet#zones}
  */
  readonly zones?: string[];
  /**
  * automatic_instance_repair block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#automatic_instance_repair OrchestratedVirtualMachineScaleSet#automatic_instance_repair}
  */
  readonly automaticInstanceRepair?: OrchestratedVirtualMachineScaleSetAutomaticInstanceRepair;
  /**
  * boot_diagnostics block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#boot_diagnostics OrchestratedVirtualMachineScaleSet#boot_diagnostics}
  */
  readonly bootDiagnostics?: OrchestratedVirtualMachineScaleSetBootDiagnostics;
  /**
  * data_disk block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#data_disk OrchestratedVirtualMachineScaleSet#data_disk}
  */
  readonly dataDisk?: OrchestratedVirtualMachineScaleSetDataDisk[];
  /**
  * identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#identity OrchestratedVirtualMachineScaleSet#identity}
  */
  readonly identity?: OrchestratedVirtualMachineScaleSetIdentity;
  /**
  * network_interface block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#network_interface OrchestratedVirtualMachineScaleSet#network_interface}
  */
  readonly networkInterface?: OrchestratedVirtualMachineScaleSetNetworkInterface[];
  /**
  * os_disk block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#os_disk OrchestratedVirtualMachineScaleSet#os_disk}
  */
  readonly osDisk?: OrchestratedVirtualMachineScaleSetOsDisk;
  /**
  * os_profile block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#os_profile OrchestratedVirtualMachineScaleSet#os_profile}
  */
  readonly osProfile?: OrchestratedVirtualMachineScaleSetOsProfile;
  /**
  * plan block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#plan OrchestratedVirtualMachineScaleSet#plan}
  */
  readonly plan?: OrchestratedVirtualMachineScaleSetPlan;
  /**
  * source_image_reference block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#source_image_reference OrchestratedVirtualMachineScaleSet#source_image_reference}
  */
  readonly sourceImageReference?: OrchestratedVirtualMachineScaleSetSourceImageReference;
  /**
  * termination_notification block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#termination_notification OrchestratedVirtualMachineScaleSet#termination_notification}
  */
  readonly terminationNotification?: OrchestratedVirtualMachineScaleSetTerminationNotification;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#timeouts OrchestratedVirtualMachineScaleSet#timeouts}
  */
  readonly timeouts?: OrchestratedVirtualMachineScaleSetTimeouts;
}
export interface OrchestratedVirtualMachineScaleSetAutomaticInstanceRepair {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#enabled OrchestratedVirtualMachineScaleSet#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#grace_period OrchestratedVirtualMachineScaleSet#grace_period}
  */
  readonly gracePeriod?: string;
}

function orchestratedVirtualMachineScaleSetAutomaticInstanceRepairToTerraform(struct?: OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference | OrchestratedVirtualMachineScaleSetAutomaticInstanceRepair): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    grace_period: cdktf.stringToTerraform(struct!.gracePeriod),
  }
}

export class OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // grace_period - computed: false, optional: true, required: false
  private _gracePeriod?: string | undefined; 
  public get gracePeriod() {
    return this.getStringAttribute('grace_period');
  }
  public set gracePeriod(value: string | undefined) {
    this._gracePeriod = value;
  }
  public resetGracePeriod() {
    this._gracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracePeriodInput() {
    return this._gracePeriod
  }
}
export interface OrchestratedVirtualMachineScaleSetBootDiagnostics {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#storage_account_uri OrchestratedVirtualMachineScaleSet#storage_account_uri}
  */
  readonly storageAccountUri?: string;
}

function orchestratedVirtualMachineScaleSetBootDiagnosticsToTerraform(struct?: OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference | OrchestratedVirtualMachineScaleSetBootDiagnostics): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    storage_account_uri: cdktf.stringToTerraform(struct!.storageAccountUri),
  }
}

export class OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // storage_account_uri - computed: false, optional: true, required: false
  private _storageAccountUri?: string | undefined; 
  public get storageAccountUri() {
    return this.getStringAttribute('storage_account_uri');
  }
  public set storageAccountUri(value: string | undefined) {
    this._storageAccountUri = value;
  }
  public resetStorageAccountUri() {
    this._storageAccountUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountUriInput() {
    return this._storageAccountUri
  }
}
export interface OrchestratedVirtualMachineScaleSetDataDisk {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#caching OrchestratedVirtualMachineScaleSet#caching}
  */
  readonly caching: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#create_option OrchestratedVirtualMachineScaleSet#create_option}
  */
  readonly createOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#disk_encryption_set_id OrchestratedVirtualMachineScaleSet#disk_encryption_set_id}
  */
  readonly diskEncryptionSetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#disk_iops_read_write OrchestratedVirtualMachineScaleSet#disk_iops_read_write}
  */
  readonly diskIopsReadWrite?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#disk_mbps_read_write OrchestratedVirtualMachineScaleSet#disk_mbps_read_write}
  */
  readonly diskMbpsReadWrite?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#disk_size_gb OrchestratedVirtualMachineScaleSet#disk_size_gb}
  */
  readonly diskSizeGb: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#lun OrchestratedVirtualMachineScaleSet#lun}
  */
  readonly lun: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#storage_account_type OrchestratedVirtualMachineScaleSet#storage_account_type}
  */
  readonly storageAccountType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#write_accelerator_enabled OrchestratedVirtualMachineScaleSet#write_accelerator_enabled}
  */
  readonly writeAcceleratorEnabled?: boolean | cdktf.IResolvable;
}

function orchestratedVirtualMachineScaleSetDataDiskToTerraform(struct?: OrchestratedVirtualMachineScaleSetDataDisk): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    caching: cdktf.stringToTerraform(struct!.caching),
    create_option: cdktf.stringToTerraform(struct!.createOption),
    disk_encryption_set_id: cdktf.stringToTerraform(struct!.diskEncryptionSetId),
    disk_iops_read_write: cdktf.numberToTerraform(struct!.diskIopsReadWrite),
    disk_mbps_read_write: cdktf.numberToTerraform(struct!.diskMbpsReadWrite),
    disk_size_gb: cdktf.numberToTerraform(struct!.diskSizeGb),
    lun: cdktf.numberToTerraform(struct!.lun),
    storage_account_type: cdktf.stringToTerraform(struct!.storageAccountType),
    write_accelerator_enabled: cdktf.booleanToTerraform(struct!.writeAcceleratorEnabled),
  }
}

export interface OrchestratedVirtualMachineScaleSetIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#identity_ids OrchestratedVirtualMachineScaleSet#identity_ids}
  */
  readonly identityIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#type OrchestratedVirtualMachineScaleSet#type}
  */
  readonly type: string;
}

function orchestratedVirtualMachineScaleSetIdentityToTerraform(struct?: OrchestratedVirtualMachineScaleSetIdentityOutputReference | OrchestratedVirtualMachineScaleSetIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class OrchestratedVirtualMachineScaleSetIdentityOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // identity_ids - computed: false, optional: false, required: true
  private _identityIds?: string[]; 
  public get identityIds() {
    return this.getListAttribute('identity_ids');
  }
  public set identityIds(value: string[]) {
    this._identityIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdsInput() {
    return this._identityIds
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }
}
export interface OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#tag OrchestratedVirtualMachineScaleSet#tag}
  */
  readonly tag: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#type OrchestratedVirtualMachineScaleSet#type}
  */
  readonly type: string;
}

function orchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagToTerraform(struct?: OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag: cdktf.stringToTerraform(struct!.tag),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#domain_name_label OrchestratedVirtualMachineScaleSet#domain_name_label}
  */
  readonly domainNameLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#idle_timeout_in_minutes OrchestratedVirtualMachineScaleSet#idle_timeout_in_minutes}
  */
  readonly idleTimeoutInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#name OrchestratedVirtualMachineScaleSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#public_ip_prefix_id OrchestratedVirtualMachineScaleSet#public_ip_prefix_id}
  */
  readonly publicIpPrefixId?: string;
  /**
  * ip_tag block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#ip_tag OrchestratedVirtualMachineScaleSet#ip_tag}
  */
  readonly ipTag?: OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag[];
}

function orchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressToTerraform(struct?: OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_name_label: cdktf.stringToTerraform(struct!.domainNameLabel),
    idle_timeout_in_minutes: cdktf.numberToTerraform(struct!.idleTimeoutInMinutes),
    name: cdktf.stringToTerraform(struct!.name),
    public_ip_prefix_id: cdktf.stringToTerraform(struct!.publicIpPrefixId),
    ip_tag: cdktf.listMapper(orchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagToTerraform)(struct!.ipTag),
  }
}

export interface OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#application_gateway_backend_address_pool_ids OrchestratedVirtualMachineScaleSet#application_gateway_backend_address_pool_ids}
  */
  readonly applicationGatewayBackendAddressPoolIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#application_security_group_ids OrchestratedVirtualMachineScaleSet#application_security_group_ids}
  */
  readonly applicationSecurityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#load_balancer_backend_address_pool_ids OrchestratedVirtualMachineScaleSet#load_balancer_backend_address_pool_ids}
  */
  readonly loadBalancerBackendAddressPoolIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#name OrchestratedVirtualMachineScaleSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#primary OrchestratedVirtualMachineScaleSet#primary}
  */
  readonly primary?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#subnet_id OrchestratedVirtualMachineScaleSet#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#version OrchestratedVirtualMachineScaleSet#version}
  */
  readonly version?: string;
  /**
  * public_ip_address block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#public_ip_address OrchestratedVirtualMachineScaleSet#public_ip_address}
  */
  readonly publicIpAddress?: OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress[];
}

function orchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationToTerraform(struct?: OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_gateway_backend_address_pool_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.applicationGatewayBackendAddressPoolIds),
    application_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.applicationSecurityGroupIds),
    load_balancer_backend_address_pool_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.loadBalancerBackendAddressPoolIds),
    name: cdktf.stringToTerraform(struct!.name),
    primary: cdktf.booleanToTerraform(struct!.primary),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    version: cdktf.stringToTerraform(struct!.version),
    public_ip_address: cdktf.listMapper(orchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressToTerraform)(struct!.publicIpAddress),
  }
}

export interface OrchestratedVirtualMachineScaleSetNetworkInterface {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#dns_servers OrchestratedVirtualMachineScaleSet#dns_servers}
  */
  readonly dnsServers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#enable_accelerated_networking OrchestratedVirtualMachineScaleSet#enable_accelerated_networking}
  */
  readonly enableAcceleratedNetworking?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#enable_ip_forwarding OrchestratedVirtualMachineScaleSet#enable_ip_forwarding}
  */
  readonly enableIpForwarding?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#name OrchestratedVirtualMachineScaleSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#network_security_group_id OrchestratedVirtualMachineScaleSet#network_security_group_id}
  */
  readonly networkSecurityGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#primary OrchestratedVirtualMachineScaleSet#primary}
  */
  readonly primary?: boolean | cdktf.IResolvable;
  /**
  * ip_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#ip_configuration OrchestratedVirtualMachineScaleSet#ip_configuration}
  */
  readonly ipConfiguration: OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration[];
}

function orchestratedVirtualMachineScaleSetNetworkInterfaceToTerraform(struct?: OrchestratedVirtualMachineScaleSetNetworkInterface): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_servers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.dnsServers),
    enable_accelerated_networking: cdktf.booleanToTerraform(struct!.enableAcceleratedNetworking),
    enable_ip_forwarding: cdktf.booleanToTerraform(struct!.enableIpForwarding),
    name: cdktf.stringToTerraform(struct!.name),
    network_security_group_id: cdktf.stringToTerraform(struct!.networkSecurityGroupId),
    primary: cdktf.booleanToTerraform(struct!.primary),
    ip_configuration: cdktf.listMapper(orchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationToTerraform)(struct!.ipConfiguration),
  }
}

export interface OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#option OrchestratedVirtualMachineScaleSet#option}
  */
  readonly option: string;
}

function orchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsToTerraform(struct?: OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference | OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    option: cdktf.stringToTerraform(struct!.option),
  }
}

export class OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // option - computed: false, optional: false, required: true
  private _option?: string; 
  public get option() {
    return this.getStringAttribute('option');
  }
  public set option(value: string) {
    this._option = value;
  }
  // Temporarily expose input value. Use with caution.
  public get optionInput() {
    return this._option
  }
}
export interface OrchestratedVirtualMachineScaleSetOsDisk {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#caching OrchestratedVirtualMachineScaleSet#caching}
  */
  readonly caching: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#disk_encryption_set_id OrchestratedVirtualMachineScaleSet#disk_encryption_set_id}
  */
  readonly diskEncryptionSetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#disk_size_gb OrchestratedVirtualMachineScaleSet#disk_size_gb}
  */
  readonly diskSizeGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#storage_account_type OrchestratedVirtualMachineScaleSet#storage_account_type}
  */
  readonly storageAccountType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#write_accelerator_enabled OrchestratedVirtualMachineScaleSet#write_accelerator_enabled}
  */
  readonly writeAcceleratorEnabled?: boolean | cdktf.IResolvable;
  /**
  * diff_disk_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#diff_disk_settings OrchestratedVirtualMachineScaleSet#diff_disk_settings}
  */
  readonly diffDiskSettings?: OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettings;
}

function orchestratedVirtualMachineScaleSetOsDiskToTerraform(struct?: OrchestratedVirtualMachineScaleSetOsDiskOutputReference | OrchestratedVirtualMachineScaleSetOsDisk): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    caching: cdktf.stringToTerraform(struct!.caching),
    disk_encryption_set_id: cdktf.stringToTerraform(struct!.diskEncryptionSetId),
    disk_size_gb: cdktf.numberToTerraform(struct!.diskSizeGb),
    storage_account_type: cdktf.stringToTerraform(struct!.storageAccountType),
    write_accelerator_enabled: cdktf.booleanToTerraform(struct!.writeAcceleratorEnabled),
    diff_disk_settings: orchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsToTerraform(struct!.diffDiskSettings),
  }
}

export class OrchestratedVirtualMachineScaleSetOsDiskOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // caching - computed: false, optional: false, required: true
  private _caching?: string; 
  public get caching() {
    return this.getStringAttribute('caching');
  }
  public set caching(value: string) {
    this._caching = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cachingInput() {
    return this._caching
  }

  // disk_encryption_set_id - computed: false, optional: true, required: false
  private _diskEncryptionSetId?: string | undefined; 
  public get diskEncryptionSetId() {
    return this.getStringAttribute('disk_encryption_set_id');
  }
  public set diskEncryptionSetId(value: string | undefined) {
    this._diskEncryptionSetId = value;
  }
  public resetDiskEncryptionSetId() {
    this._diskEncryptionSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionSetIdInput() {
    return this._diskEncryptionSetId
  }

  // disk_size_gb - computed: true, optional: true, required: false
  private _diskSizeGb?: number | undefined; 
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
  }
  public set diskSizeGb(value: number | undefined) {
    this._diskSizeGb = value;
  }
  public resetDiskSizeGb() {
    this._diskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeGbInput() {
    return this._diskSizeGb
  }

  // storage_account_type - computed: false, optional: false, required: true
  private _storageAccountType?: string; 
  public get storageAccountType() {
    return this.getStringAttribute('storage_account_type');
  }
  public set storageAccountType(value: string) {
    this._storageAccountType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountTypeInput() {
    return this._storageAccountType
  }

  // write_accelerator_enabled - computed: false, optional: true, required: false
  private _writeAcceleratorEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get writeAcceleratorEnabled() {
    return this.getBooleanAttribute('write_accelerator_enabled') as any;
  }
  public set writeAcceleratorEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._writeAcceleratorEnabled = value;
  }
  public resetWriteAcceleratorEnabled() {
    this._writeAcceleratorEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeAcceleratorEnabledInput() {
    return this._writeAcceleratorEnabled
  }

  // diff_disk_settings - computed: false, optional: true, required: false
  private _diffDiskSettings?: OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettings | undefined; 
  private __diffDiskSettingsOutput = new OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference(this as any, "diff_disk_settings", true);
  public get diffDiskSettings() {
    return this.__diffDiskSettingsOutput;
  }
  public putDiffDiskSettings(value: OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettings | undefined) {
    this._diffDiskSettings = value;
  }
  public resetDiffDiskSettings() {
    this._diffDiskSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diffDiskSettingsInput() {
    return this._diffDiskSettings
  }
}
export interface OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKey {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#public_key OrchestratedVirtualMachineScaleSet#public_key}
  */
  readonly publicKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#username OrchestratedVirtualMachineScaleSet#username}
  */
  readonly username: string;
}

function orchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyToTerraform(struct?: OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKey): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_key: cdktf.stringToTerraform(struct!.publicKey),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export interface OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificate {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#url OrchestratedVirtualMachineScaleSet#url}
  */
  readonly url: string;
}

function orchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateToTerraform(struct?: OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}

export interface OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecret {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#key_vault_id OrchestratedVirtualMachineScaleSet#key_vault_id}
  */
  readonly keyVaultId: string;
  /**
  * certificate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#certificate OrchestratedVirtualMachineScaleSet#certificate}
  */
  readonly certificate: OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificate[];
}

function orchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretToTerraform(struct?: OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecret): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_vault_id: cdktf.stringToTerraform(struct!.keyVaultId),
    certificate: cdktf.listMapper(orchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateToTerraform)(struct!.certificate),
  }
}

export interface OrchestratedVirtualMachineScaleSetOsProfileLinuxConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#admin_password OrchestratedVirtualMachineScaleSet#admin_password}
  */
  readonly adminPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#admin_username OrchestratedVirtualMachineScaleSet#admin_username}
  */
  readonly adminUsername: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#computer_name_prefix OrchestratedVirtualMachineScaleSet#computer_name_prefix}
  */
  readonly computerNamePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#disable_password_authentication OrchestratedVirtualMachineScaleSet#disable_password_authentication}
  */
  readonly disablePasswordAuthentication?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#provision_vm_agent OrchestratedVirtualMachineScaleSet#provision_vm_agent}
  */
  readonly provisionVmAgent?: boolean | cdktf.IResolvable;
  /**
  * admin_ssh_key block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#admin_ssh_key OrchestratedVirtualMachineScaleSet#admin_ssh_key}
  */
  readonly adminSshKey?: OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKey[];
  /**
  * secret block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#secret OrchestratedVirtualMachineScaleSet#secret}
  */
  readonly secret?: OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecret[];
}

function orchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationToTerraform(struct?: OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference | OrchestratedVirtualMachineScaleSetOsProfileLinuxConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_password: cdktf.stringToTerraform(struct!.adminPassword),
    admin_username: cdktf.stringToTerraform(struct!.adminUsername),
    computer_name_prefix: cdktf.stringToTerraform(struct!.computerNamePrefix),
    disable_password_authentication: cdktf.booleanToTerraform(struct!.disablePasswordAuthentication),
    provision_vm_agent: cdktf.booleanToTerraform(struct!.provisionVmAgent),
    admin_ssh_key: cdktf.listMapper(orchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyToTerraform)(struct!.adminSshKey),
    secret: cdktf.listMapper(orchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretToTerraform)(struct!.secret),
  }
}

export class OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // admin_password - computed: false, optional: true, required: false
  private _adminPassword?: string | undefined; 
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }
  public set adminPassword(value: string | undefined) {
    this._adminPassword = value;
  }
  public resetAdminPassword() {
    this._adminPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword
  }

  // admin_username - computed: false, optional: false, required: true
  private _adminUsername?: string; 
  public get adminUsername() {
    return this.getStringAttribute('admin_username');
  }
  public set adminUsername(value: string) {
    this._adminUsername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUsernameInput() {
    return this._adminUsername
  }

  // computer_name_prefix - computed: true, optional: true, required: false
  private _computerNamePrefix?: string | undefined; 
  public get computerNamePrefix() {
    return this.getStringAttribute('computer_name_prefix');
  }
  public set computerNamePrefix(value: string | undefined) {
    this._computerNamePrefix = value;
  }
  public resetComputerNamePrefix() {
    this._computerNamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computerNamePrefixInput() {
    return this._computerNamePrefix
  }

  // disable_password_authentication - computed: false, optional: true, required: false
  private _disablePasswordAuthentication?: boolean | cdktf.IResolvable | undefined; 
  public get disablePasswordAuthentication() {
    return this.getBooleanAttribute('disable_password_authentication') as any;
  }
  public set disablePasswordAuthentication(value: boolean | cdktf.IResolvable | undefined) {
    this._disablePasswordAuthentication = value;
  }
  public resetDisablePasswordAuthentication() {
    this._disablePasswordAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePasswordAuthenticationInput() {
    return this._disablePasswordAuthentication
  }

  // provision_vm_agent - computed: false, optional: true, required: false
  private _provisionVmAgent?: boolean | cdktf.IResolvable | undefined; 
  public get provisionVmAgent() {
    return this.getBooleanAttribute('provision_vm_agent') as any;
  }
  public set provisionVmAgent(value: boolean | cdktf.IResolvable | undefined) {
    this._provisionVmAgent = value;
  }
  public resetProvisionVmAgent() {
    this._provisionVmAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionVmAgentInput() {
    return this._provisionVmAgent
  }

  // admin_ssh_key - computed: false, optional: true, required: false
  private _adminSshKey?: OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKey[] | undefined; 
  public get adminSshKey() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('admin_ssh_key') as any;
  }
  public set adminSshKey(value: OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKey[] | undefined) {
    this._adminSshKey = value;
  }
  public resetAdminSshKey() {
    this._adminSshKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminSshKeyInput() {
    return this._adminSshKey
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecret[] | undefined; 
  public get secret() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('secret') as any;
  }
  public set secret(value: OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecret[] | undefined) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret
  }
}
export interface OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificate {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#store OrchestratedVirtualMachineScaleSet#store}
  */
  readonly store: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#url OrchestratedVirtualMachineScaleSet#url}
  */
  readonly url: string;
}

function orchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateToTerraform(struct?: OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    store: cdktf.stringToTerraform(struct!.store),
    url: cdktf.stringToTerraform(struct!.url),
  }
}

export interface OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecret {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#key_vault_id OrchestratedVirtualMachineScaleSet#key_vault_id}
  */
  readonly keyVaultId: string;
  /**
  * certificate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#certificate OrchestratedVirtualMachineScaleSet#certificate}
  */
  readonly certificate: OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificate[];
}

function orchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretToTerraform(struct?: OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecret): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_vault_id: cdktf.stringToTerraform(struct!.keyVaultId),
    certificate: cdktf.listMapper(orchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateToTerraform)(struct!.certificate),
  }
}

export interface OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListener {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#certificate_url OrchestratedVirtualMachineScaleSet#certificate_url}
  */
  readonly certificateUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#protocol OrchestratedVirtualMachineScaleSet#protocol}
  */
  readonly protocol: string;
}

function orchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerToTerraform(struct?: OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListener): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_url: cdktf.stringToTerraform(struct!.certificateUrl),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}

export interface OrchestratedVirtualMachineScaleSetOsProfileWindowsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#admin_password OrchestratedVirtualMachineScaleSet#admin_password}
  */
  readonly adminPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#admin_username OrchestratedVirtualMachineScaleSet#admin_username}
  */
  readonly adminUsername: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#computer_name_prefix OrchestratedVirtualMachineScaleSet#computer_name_prefix}
  */
  readonly computerNamePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#enable_automatic_updates OrchestratedVirtualMachineScaleSet#enable_automatic_updates}
  */
  readonly enableAutomaticUpdates?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#provision_vm_agent OrchestratedVirtualMachineScaleSet#provision_vm_agent}
  */
  readonly provisionVmAgent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#timezone OrchestratedVirtualMachineScaleSet#timezone}
  */
  readonly timezone?: string;
  /**
  * secret block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#secret OrchestratedVirtualMachineScaleSet#secret}
  */
  readonly secret?: OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecret[];
  /**
  * winrm_listener block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#winrm_listener OrchestratedVirtualMachineScaleSet#winrm_listener}
  */
  readonly winrmListener?: OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListener[];
}

function orchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationToTerraform(struct?: OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference | OrchestratedVirtualMachineScaleSetOsProfileWindowsConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_password: cdktf.stringToTerraform(struct!.adminPassword),
    admin_username: cdktf.stringToTerraform(struct!.adminUsername),
    computer_name_prefix: cdktf.stringToTerraform(struct!.computerNamePrefix),
    enable_automatic_updates: cdktf.booleanToTerraform(struct!.enableAutomaticUpdates),
    provision_vm_agent: cdktf.booleanToTerraform(struct!.provisionVmAgent),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    secret: cdktf.listMapper(orchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretToTerraform)(struct!.secret),
    winrm_listener: cdktf.listMapper(orchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerToTerraform)(struct!.winrmListener),
  }
}

export class OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // admin_password - computed: false, optional: false, required: true
  private _adminPassword?: string; 
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }
  public set adminPassword(value: string) {
    this._adminPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword
  }

  // admin_username - computed: false, optional: false, required: true
  private _adminUsername?: string; 
  public get adminUsername() {
    return this.getStringAttribute('admin_username');
  }
  public set adminUsername(value: string) {
    this._adminUsername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUsernameInput() {
    return this._adminUsername
  }

  // computer_name_prefix - computed: true, optional: true, required: false
  private _computerNamePrefix?: string | undefined; 
  public get computerNamePrefix() {
    return this.getStringAttribute('computer_name_prefix');
  }
  public set computerNamePrefix(value: string | undefined) {
    this._computerNamePrefix = value;
  }
  public resetComputerNamePrefix() {
    this._computerNamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computerNamePrefixInput() {
    return this._computerNamePrefix
  }

  // enable_automatic_updates - computed: false, optional: true, required: false
  private _enableAutomaticUpdates?: boolean | cdktf.IResolvable | undefined; 
  public get enableAutomaticUpdates() {
    return this.getBooleanAttribute('enable_automatic_updates') as any;
  }
  public set enableAutomaticUpdates(value: boolean | cdktf.IResolvable | undefined) {
    this._enableAutomaticUpdates = value;
  }
  public resetEnableAutomaticUpdates() {
    this._enableAutomaticUpdates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutomaticUpdatesInput() {
    return this._enableAutomaticUpdates
  }

  // provision_vm_agent - computed: false, optional: true, required: false
  private _provisionVmAgent?: boolean | cdktf.IResolvable | undefined; 
  public get provisionVmAgent() {
    return this.getBooleanAttribute('provision_vm_agent') as any;
  }
  public set provisionVmAgent(value: boolean | cdktf.IResolvable | undefined) {
    this._provisionVmAgent = value;
  }
  public resetProvisionVmAgent() {
    this._provisionVmAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionVmAgentInput() {
    return this._provisionVmAgent
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string | undefined; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string | undefined) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecret[] | undefined; 
  public get secret() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('secret') as any;
  }
  public set secret(value: OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecret[] | undefined) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret
  }

  // winrm_listener - computed: false, optional: true, required: false
  private _winrmListener?: OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListener[] | undefined; 
  public get winrmListener() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('winrm_listener') as any;
  }
  public set winrmListener(value: OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListener[] | undefined) {
    this._winrmListener = value;
  }
  public resetWinrmListener() {
    this._winrmListener = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get winrmListenerInput() {
    return this._winrmListener
  }
}
export interface OrchestratedVirtualMachineScaleSetOsProfile {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#custom_data OrchestratedVirtualMachineScaleSet#custom_data}
  */
  readonly customData?: string;
  /**
  * linux_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#linux_configuration OrchestratedVirtualMachineScaleSet#linux_configuration}
  */
  readonly linuxConfiguration?: OrchestratedVirtualMachineScaleSetOsProfileLinuxConfiguration;
  /**
  * windows_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#windows_configuration OrchestratedVirtualMachineScaleSet#windows_configuration}
  */
  readonly windowsConfiguration?: OrchestratedVirtualMachineScaleSetOsProfileWindowsConfiguration;
}

function orchestratedVirtualMachineScaleSetOsProfileToTerraform(struct?: OrchestratedVirtualMachineScaleSetOsProfileOutputReference | OrchestratedVirtualMachineScaleSetOsProfile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_data: cdktf.stringToTerraform(struct!.customData),
    linux_configuration: orchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationToTerraform(struct!.linuxConfiguration),
    windows_configuration: orchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationToTerraform(struct!.windowsConfiguration),
  }
}

export class OrchestratedVirtualMachineScaleSetOsProfileOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // custom_data - computed: false, optional: true, required: false
  private _customData?: string | undefined; 
  public get customData() {
    return this.getStringAttribute('custom_data');
  }
  public set customData(value: string | undefined) {
    this._customData = value;
  }
  public resetCustomData() {
    this._customData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDataInput() {
    return this._customData
  }

  // linux_configuration - computed: false, optional: true, required: false
  private _linuxConfiguration?: OrchestratedVirtualMachineScaleSetOsProfileLinuxConfiguration | undefined; 
  private __linuxConfigurationOutput = new OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference(this as any, "linux_configuration", true);
  public get linuxConfiguration() {
    return this.__linuxConfigurationOutput;
  }
  public putLinuxConfiguration(value: OrchestratedVirtualMachineScaleSetOsProfileLinuxConfiguration | undefined) {
    this._linuxConfiguration = value;
  }
  public resetLinuxConfiguration() {
    this._linuxConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxConfigurationInput() {
    return this._linuxConfiguration
  }

  // windows_configuration - computed: false, optional: true, required: false
  private _windowsConfiguration?: OrchestratedVirtualMachineScaleSetOsProfileWindowsConfiguration | undefined; 
  private __windowsConfigurationOutput = new OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference(this as any, "windows_configuration", true);
  public get windowsConfiguration() {
    return this.__windowsConfigurationOutput;
  }
  public putWindowsConfiguration(value: OrchestratedVirtualMachineScaleSetOsProfileWindowsConfiguration | undefined) {
    this._windowsConfiguration = value;
  }
  public resetWindowsConfiguration() {
    this._windowsConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsConfigurationInput() {
    return this._windowsConfiguration
  }
}
export interface OrchestratedVirtualMachineScaleSetPlan {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#name OrchestratedVirtualMachineScaleSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#product OrchestratedVirtualMachineScaleSet#product}
  */
  readonly product: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#publisher OrchestratedVirtualMachineScaleSet#publisher}
  */
  readonly publisher: string;
}

function orchestratedVirtualMachineScaleSetPlanToTerraform(struct?: OrchestratedVirtualMachineScaleSetPlanOutputReference | OrchestratedVirtualMachineScaleSetPlan): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    product: cdktf.stringToTerraform(struct!.product),
    publisher: cdktf.stringToTerraform(struct!.publisher),
  }
}

export class OrchestratedVirtualMachineScaleSetPlanOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._name
  }

  // product - computed: false, optional: false, required: true
  private _product?: string; 
  public get product() {
    return this.getStringAttribute('product');
  }
  public set product(value: string) {
    this._product = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productInput() {
    return this._product
  }

  // publisher - computed: false, optional: false, required: true
  private _publisher?: string; 
  public get publisher() {
    return this.getStringAttribute('publisher');
  }
  public set publisher(value: string) {
    this._publisher = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publisherInput() {
    return this._publisher
  }
}
export interface OrchestratedVirtualMachineScaleSetSourceImageReference {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#offer OrchestratedVirtualMachineScaleSet#offer}
  */
  readonly offer: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#publisher OrchestratedVirtualMachineScaleSet#publisher}
  */
  readonly publisher: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#sku OrchestratedVirtualMachineScaleSet#sku}
  */
  readonly sku: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#version OrchestratedVirtualMachineScaleSet#version}
  */
  readonly version: string;
}

function orchestratedVirtualMachineScaleSetSourceImageReferenceToTerraform(struct?: OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference | OrchestratedVirtualMachineScaleSetSourceImageReference): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    offer: cdktf.stringToTerraform(struct!.offer),
    publisher: cdktf.stringToTerraform(struct!.publisher),
    sku: cdktf.stringToTerraform(struct!.sku),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export class OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // offer - computed: false, optional: false, required: true
  private _offer?: string; 
  public get offer() {
    return this.getStringAttribute('offer');
  }
  public set offer(value: string) {
    this._offer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get offerInput() {
    return this._offer
  }

  // publisher - computed: false, optional: false, required: true
  private _publisher?: string; 
  public get publisher() {
    return this.getStringAttribute('publisher');
  }
  public set publisher(value: string) {
    this._publisher = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publisherInput() {
    return this._publisher
  }

  // sku - computed: false, optional: false, required: true
  private _sku?: string; 
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string) {
    this._sku = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version
  }
}
export interface OrchestratedVirtualMachineScaleSetTerminationNotification {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#enabled OrchestratedVirtualMachineScaleSet#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#timeout OrchestratedVirtualMachineScaleSet#timeout}
  */
  readonly timeout?: string;
}

function orchestratedVirtualMachineScaleSetTerminationNotificationToTerraform(struct?: OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference | OrchestratedVirtualMachineScaleSetTerminationNotification): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}

export class OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string | undefined; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string | undefined) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout
  }
}
export interface OrchestratedVirtualMachineScaleSetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#create OrchestratedVirtualMachineScaleSet#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#delete OrchestratedVirtualMachineScaleSet#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#read OrchestratedVirtualMachineScaleSet#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html#update OrchestratedVirtualMachineScaleSet#update}
  */
  readonly update?: string;
}

function orchestratedVirtualMachineScaleSetTimeoutsToTerraform(struct?: OrchestratedVirtualMachineScaleSetTimeoutsOutputReference | OrchestratedVirtualMachineScaleSetTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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

export class OrchestratedVirtualMachineScaleSetTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html azurerm_orchestrated_virtual_machine_scale_set}
*/
export class OrchestratedVirtualMachineScaleSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_orchestrated_virtual_machine_scale_set";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/orchestrated_virtual_machine_scale_set.html azurerm_orchestrated_virtual_machine_scale_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrchestratedVirtualMachineScaleSetConfig
  */
  public constructor(scope: Construct, id: string, config: OrchestratedVirtualMachineScaleSetConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_orchestrated_virtual_machine_scale_set',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._encryptionAtHostEnabled = config.encryptionAtHostEnabled;
    this._evictionPolicy = config.evictionPolicy;
    this._instances = config.instances;
    this._licenseType = config.licenseType;
    this._location = config.location;
    this._maxBidPrice = config.maxBidPrice;
    this._name = config.name;
    this._platformFaultDomainCount = config.platformFaultDomainCount;
    this._priority = config.priority;
    this._proximityPlacementGroupId = config.proximityPlacementGroupId;
    this._resourceGroupName = config.resourceGroupName;
    this._skuName = config.skuName;
    this._sourceImageId = config.sourceImageId;
    this._tags = config.tags;
    this._zoneBalance = config.zoneBalance;
    this._zones = config.zones;
    this._automaticInstanceRepair = config.automaticInstanceRepair;
    this._bootDiagnostics = config.bootDiagnostics;
    this._dataDisk = config.dataDisk;
    this._identity = config.identity;
    this._networkInterface = config.networkInterface;
    this._osDisk = config.osDisk;
    this._osProfile = config.osProfile;
    this._plan = config.plan;
    this._sourceImageReference = config.sourceImageReference;
    this._terminationNotification = config.terminationNotification;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // encryption_at_host_enabled - computed: false, optional: true, required: false
  private _encryptionAtHostEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get encryptionAtHostEnabled() {
    return this.getBooleanAttribute('encryption_at_host_enabled') as any;
  }
  public set encryptionAtHostEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._encryptionAtHostEnabled = value;
  }
  public resetEncryptionAtHostEnabled() {
    this._encryptionAtHostEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionAtHostEnabledInput() {
    return this._encryptionAtHostEnabled
  }

  // eviction_policy - computed: false, optional: true, required: false
  private _evictionPolicy?: string | undefined; 
  public get evictionPolicy() {
    return this.getStringAttribute('eviction_policy');
  }
  public set evictionPolicy(value: string | undefined) {
    this._evictionPolicy = value;
  }
  public resetEvictionPolicy() {
    this._evictionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evictionPolicyInput() {
    return this._evictionPolicy
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: number | undefined; 
  public get instances() {
    return this.getNumberAttribute('instances');
  }
  public set instances(value: number | undefined) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances
  }

  // license_type - computed: false, optional: true, required: false
  private _licenseType?: string | undefined; 
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }
  public set licenseType(value: string | undefined) {
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
  private _location?: string; 
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

  // max_bid_price - computed: false, optional: true, required: false
  private _maxBidPrice?: number | undefined; 
  public get maxBidPrice() {
    return this.getNumberAttribute('max_bid_price');
  }
  public set maxBidPrice(value: number | undefined) {
    this._maxBidPrice = value;
  }
  public resetMaxBidPrice() {
    this._maxBidPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBidPriceInput() {
    return this._maxBidPrice
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
    return this._name
  }

  // platform_fault_domain_count - computed: false, optional: false, required: true
  private _platformFaultDomainCount?: number; 
  public get platformFaultDomainCount() {
    return this.getNumberAttribute('platform_fault_domain_count');
  }
  public set platformFaultDomainCount(value: number) {
    this._platformFaultDomainCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get platformFaultDomainCountInput() {
    return this._platformFaultDomainCount
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: string | undefined; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string | undefined) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority
  }

  // proximity_placement_group_id - computed: false, optional: true, required: false
  private _proximityPlacementGroupId?: string | undefined; 
  public get proximityPlacementGroupId() {
    return this.getStringAttribute('proximity_placement_group_id');
  }
  public set proximityPlacementGroupId(value: string | undefined) {
    this._proximityPlacementGroupId = value;
  }
  public resetProximityPlacementGroupId() {
    this._proximityPlacementGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proximityPlacementGroupIdInput() {
    return this._proximityPlacementGroupId
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
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

  // sku_name - computed: false, optional: true, required: false
  private _skuName?: string | undefined; 
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }
  public set skuName(value: string | undefined) {
    this._skuName = value;
  }
  public resetSkuName() {
    this._skuName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skuNameInput() {
    return this._skuName
  }

  // source_image_id - computed: false, optional: true, required: false
  private _sourceImageId?: string | undefined; 
  public get sourceImageId() {
    return this.getStringAttribute('source_image_id');
  }
  public set sourceImageId(value: string | undefined) {
    this._sourceImageId = value;
  }
  public resetSourceImageId() {
    this._sourceImageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceImageIdInput() {
    return this._sourceImageId
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // unique_id - computed: true, optional: false, required: false
  public get uniqueId() {
    return this.getStringAttribute('unique_id');
  }

  // zone_balance - computed: false, optional: true, required: false
  private _zoneBalance?: boolean | cdktf.IResolvable | undefined; 
  public get zoneBalance() {
    return this.getBooleanAttribute('zone_balance') as any;
  }
  public set zoneBalance(value: boolean | cdktf.IResolvable | undefined) {
    this._zoneBalance = value;
  }
  public resetZoneBalance() {
    this._zoneBalance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneBalanceInput() {
    return this._zoneBalance
  }

  // zones - computed: false, optional: true, required: false
  private _zones?: string[] | undefined; 
  public get zones() {
    return this.getListAttribute('zones');
  }
  public set zones(value: string[] | undefined) {
    this._zones = value;
  }
  public resetZones() {
    this._zones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones
  }

  // automatic_instance_repair - computed: false, optional: true, required: false
  private _automaticInstanceRepair?: OrchestratedVirtualMachineScaleSetAutomaticInstanceRepair | undefined; 
  private __automaticInstanceRepairOutput = new OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference(this as any, "automatic_instance_repair", true);
  public get automaticInstanceRepair() {
    return this.__automaticInstanceRepairOutput;
  }
  public putAutomaticInstanceRepair(value: OrchestratedVirtualMachineScaleSetAutomaticInstanceRepair | undefined) {
    this._automaticInstanceRepair = value;
  }
  public resetAutomaticInstanceRepair() {
    this._automaticInstanceRepair = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticInstanceRepairInput() {
    return this._automaticInstanceRepair
  }

  // boot_diagnostics - computed: false, optional: true, required: false
  private _bootDiagnostics?: OrchestratedVirtualMachineScaleSetBootDiagnostics | undefined; 
  private __bootDiagnosticsOutput = new OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference(this as any, "boot_diagnostics", true);
  public get bootDiagnostics() {
    return this.__bootDiagnosticsOutput;
  }
  public putBootDiagnostics(value: OrchestratedVirtualMachineScaleSetBootDiagnostics | undefined) {
    this._bootDiagnostics = value;
  }
  public resetBootDiagnostics() {
    this._bootDiagnostics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiagnosticsInput() {
    return this._bootDiagnostics
  }

  // data_disk - computed: false, optional: true, required: false
  private _dataDisk?: OrchestratedVirtualMachineScaleSetDataDisk[] | undefined; 
  public get dataDisk() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('data_disk') as any;
  }
  public set dataDisk(value: OrchestratedVirtualMachineScaleSetDataDisk[] | undefined) {
    this._dataDisk = value;
  }
  public resetDataDisk() {
    this._dataDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDiskInput() {
    return this._dataDisk
  }

  // identity - computed: false, optional: true, required: false
  private _identity?: OrchestratedVirtualMachineScaleSetIdentity | undefined; 
  private __identityOutput = new OrchestratedVirtualMachineScaleSetIdentityOutputReference(this as any, "identity", true);
  public get identity() {
    return this.__identityOutput;
  }
  public putIdentity(value: OrchestratedVirtualMachineScaleSetIdentity | undefined) {
    this._identity = value;
  }
  public resetIdentity() {
    this._identity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity
  }

  // network_interface - computed: false, optional: true, required: false
  private _networkInterface?: OrchestratedVirtualMachineScaleSetNetworkInterface[] | undefined; 
  public get networkInterface() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('network_interface') as any;
  }
  public set networkInterface(value: OrchestratedVirtualMachineScaleSetNetworkInterface[] | undefined) {
    this._networkInterface = value;
  }
  public resetNetworkInterface() {
    this._networkInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceInput() {
    return this._networkInterface
  }

  // os_disk - computed: false, optional: true, required: false
  private _osDisk?: OrchestratedVirtualMachineScaleSetOsDisk | undefined; 
  private __osDiskOutput = new OrchestratedVirtualMachineScaleSetOsDiskOutputReference(this as any, "os_disk", true);
  public get osDisk() {
    return this.__osDiskOutput;
  }
  public putOsDisk(value: OrchestratedVirtualMachineScaleSetOsDisk | undefined) {
    this._osDisk = value;
  }
  public resetOsDisk() {
    this._osDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osDiskInput() {
    return this._osDisk
  }

  // os_profile - computed: false, optional: true, required: false
  private _osProfile?: OrchestratedVirtualMachineScaleSetOsProfile | undefined; 
  private __osProfileOutput = new OrchestratedVirtualMachineScaleSetOsProfileOutputReference(this as any, "os_profile", true);
  public get osProfile() {
    return this.__osProfileOutput;
  }
  public putOsProfile(value: OrchestratedVirtualMachineScaleSetOsProfile | undefined) {
    this._osProfile = value;
  }
  public resetOsProfile() {
    this._osProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osProfileInput() {
    return this._osProfile
  }

  // plan - computed: false, optional: true, required: false
  private _plan?: OrchestratedVirtualMachineScaleSetPlan | undefined; 
  private __planOutput = new OrchestratedVirtualMachineScaleSetPlanOutputReference(this as any, "plan", true);
  public get plan() {
    return this.__planOutput;
  }
  public putPlan(value: OrchestratedVirtualMachineScaleSetPlan | undefined) {
    this._plan = value;
  }
  public resetPlan() {
    this._plan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan
  }

  // source_image_reference - computed: false, optional: true, required: false
  private _sourceImageReference?: OrchestratedVirtualMachineScaleSetSourceImageReference | undefined; 
  private __sourceImageReferenceOutput = new OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference(this as any, "source_image_reference", true);
  public get sourceImageReference() {
    return this.__sourceImageReferenceOutput;
  }
  public putSourceImageReference(value: OrchestratedVirtualMachineScaleSetSourceImageReference | undefined) {
    this._sourceImageReference = value;
  }
  public resetSourceImageReference() {
    this._sourceImageReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceImageReferenceInput() {
    return this._sourceImageReference
  }

  // termination_notification - computed: false, optional: true, required: false
  private _terminationNotification?: OrchestratedVirtualMachineScaleSetTerminationNotification | undefined; 
  private __terminationNotificationOutput = new OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference(this as any, "termination_notification", true);
  public get terminationNotification() {
    return this.__terminationNotificationOutput;
  }
  public putTerminationNotification(value: OrchestratedVirtualMachineScaleSetTerminationNotification | undefined) {
    this._terminationNotification = value;
  }
  public resetTerminationNotification() {
    this._terminationNotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationNotificationInput() {
    return this._terminationNotification
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: OrchestratedVirtualMachineScaleSetTimeouts | undefined; 
  private __timeoutsOutput = new OrchestratedVirtualMachineScaleSetTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: OrchestratedVirtualMachineScaleSetTimeouts | undefined) {
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
      encryption_at_host_enabled: cdktf.booleanToTerraform(this._encryptionAtHostEnabled),
      eviction_policy: cdktf.stringToTerraform(this._evictionPolicy),
      instances: cdktf.numberToTerraform(this._instances),
      license_type: cdktf.stringToTerraform(this._licenseType),
      location: cdktf.stringToTerraform(this._location),
      max_bid_price: cdktf.numberToTerraform(this._maxBidPrice),
      name: cdktf.stringToTerraform(this._name),
      platform_fault_domain_count: cdktf.numberToTerraform(this._platformFaultDomainCount),
      priority: cdktf.stringToTerraform(this._priority),
      proximity_placement_group_id: cdktf.stringToTerraform(this._proximityPlacementGroupId),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sku_name: cdktf.stringToTerraform(this._skuName),
      source_image_id: cdktf.stringToTerraform(this._sourceImageId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      zone_balance: cdktf.booleanToTerraform(this._zoneBalance),
      zones: cdktf.listMapper(cdktf.stringToTerraform)(this._zones),
      automatic_instance_repair: orchestratedVirtualMachineScaleSetAutomaticInstanceRepairToTerraform(this._automaticInstanceRepair),
      boot_diagnostics: orchestratedVirtualMachineScaleSetBootDiagnosticsToTerraform(this._bootDiagnostics),
      data_disk: cdktf.listMapper(orchestratedVirtualMachineScaleSetDataDiskToTerraform)(this._dataDisk),
      identity: orchestratedVirtualMachineScaleSetIdentityToTerraform(this._identity),
      network_interface: cdktf.listMapper(orchestratedVirtualMachineScaleSetNetworkInterfaceToTerraform)(this._networkInterface),
      os_disk: orchestratedVirtualMachineScaleSetOsDiskToTerraform(this._osDisk),
      os_profile: orchestratedVirtualMachineScaleSetOsProfileToTerraform(this._osProfile),
      plan: orchestratedVirtualMachineScaleSetPlanToTerraform(this._plan),
      source_image_reference: orchestratedVirtualMachineScaleSetSourceImageReferenceToTerraform(this._sourceImageReference),
      termination_notification: orchestratedVirtualMachineScaleSetTerminationNotificationToTerraform(this._terminationNotification),
      timeouts: orchestratedVirtualMachineScaleSetTimeoutsToTerraform(this._timeouts),
    };
  }
}
