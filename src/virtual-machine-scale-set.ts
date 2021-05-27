// https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualMachineScaleSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#automatic_os_upgrade VirtualMachineScaleSet#automatic_os_upgrade}
  */
  readonly automaticOsUpgrade?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#eviction_policy VirtualMachineScaleSet#eviction_policy}
  */
  readonly evictionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#health_probe_id VirtualMachineScaleSet#health_probe_id}
  */
  readonly healthProbeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#license_type VirtualMachineScaleSet#license_type}
  */
  readonly licenseType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#location VirtualMachineScaleSet#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#name VirtualMachineScaleSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#overprovision VirtualMachineScaleSet#overprovision}
  */
  readonly overprovision?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#priority VirtualMachineScaleSet#priority}
  */
  readonly priority?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#proximity_placement_group_id VirtualMachineScaleSet#proximity_placement_group_id}
  */
  readonly proximityPlacementGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#resource_group_name VirtualMachineScaleSet#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#single_placement_group VirtualMachineScaleSet#single_placement_group}
  */
  readonly singlePlacementGroup?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#tags VirtualMachineScaleSet#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#upgrade_policy_mode VirtualMachineScaleSet#upgrade_policy_mode}
  */
  readonly upgradePolicyMode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#zones VirtualMachineScaleSet#zones}
  */
  readonly zones?: string[];
  /**
  * boot_diagnostics block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#boot_diagnostics VirtualMachineScaleSet#boot_diagnostics}
  */
  readonly bootDiagnostics?: VirtualMachineScaleSetBootDiagnostics[];
  /**
  * extension block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#extension VirtualMachineScaleSet#extension}
  */
  readonly extension?: VirtualMachineScaleSetExtension[];
  /**
  * identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#identity VirtualMachineScaleSet#identity}
  */
  readonly identity?: VirtualMachineScaleSetIdentity[];
  /**
  * network_profile block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#network_profile VirtualMachineScaleSet#network_profile}
  */
  readonly networkProfile: VirtualMachineScaleSetNetworkProfile[];
  /**
  * os_profile block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#os_profile VirtualMachineScaleSet#os_profile}
  */
  readonly osProfile: VirtualMachineScaleSetOsProfile[];
  /**
  * os_profile_linux_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#os_profile_linux_config VirtualMachineScaleSet#os_profile_linux_config}
  */
  readonly osProfileLinuxConfig?: VirtualMachineScaleSetOsProfileLinuxConfig[];
  /**
  * os_profile_secrets block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#os_profile_secrets VirtualMachineScaleSet#os_profile_secrets}
  */
  readonly osProfileSecrets?: VirtualMachineScaleSetOsProfileSecrets[];
  /**
  * os_profile_windows_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#os_profile_windows_config VirtualMachineScaleSet#os_profile_windows_config}
  */
  readonly osProfileWindowsConfig?: VirtualMachineScaleSetOsProfileWindowsConfig[];
  /**
  * plan block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#plan VirtualMachineScaleSet#plan}
  */
  readonly plan?: VirtualMachineScaleSetPlan[];
  /**
  * rolling_upgrade_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#rolling_upgrade_policy VirtualMachineScaleSet#rolling_upgrade_policy}
  */
  readonly rollingUpgradePolicy?: VirtualMachineScaleSetRollingUpgradePolicy[];
  /**
  * sku block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#sku VirtualMachineScaleSet#sku}
  */
  readonly sku: VirtualMachineScaleSetSku[];
  /**
  * storage_profile_data_disk block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#storage_profile_data_disk VirtualMachineScaleSet#storage_profile_data_disk}
  */
  readonly storageProfileDataDisk?: VirtualMachineScaleSetStorageProfileDataDisk[];
  /**
  * storage_profile_image_reference block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#storage_profile_image_reference VirtualMachineScaleSet#storage_profile_image_reference}
  */
  readonly storageProfileImageReference?: VirtualMachineScaleSetStorageProfileImageReference[];
  /**
  * storage_profile_os_disk block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#storage_profile_os_disk VirtualMachineScaleSet#storage_profile_os_disk}
  */
  readonly storageProfileOsDisk: VirtualMachineScaleSetStorageProfileOsDisk[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#timeouts VirtualMachineScaleSet#timeouts}
  */
  readonly timeouts?: VirtualMachineScaleSetTimeouts;
}
export interface VirtualMachineScaleSetBootDiagnostics {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#enabled VirtualMachineScaleSet#enabled}
  */
  readonly enabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#storage_uri VirtualMachineScaleSet#storage_uri}
  */
  readonly storageUri: string;
}

function virtualMachineScaleSetBootDiagnosticsToTerraform(struct?: VirtualMachineScaleSetBootDiagnostics): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    storage_uri: cdktf.stringToTerraform(struct!.storageUri),
  }
}

export interface VirtualMachineScaleSetExtension {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#auto_upgrade_minor_version VirtualMachineScaleSet#auto_upgrade_minor_version}
  */
  readonly autoUpgradeMinorVersion?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#name VirtualMachineScaleSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#protected_settings VirtualMachineScaleSet#protected_settings}
  */
  readonly protectedSettings?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#provision_after_extensions VirtualMachineScaleSet#provision_after_extensions}
  */
  readonly provisionAfterExtensions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#publisher VirtualMachineScaleSet#publisher}
  */
  readonly publisher: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#settings VirtualMachineScaleSet#settings}
  */
  readonly settings?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#type VirtualMachineScaleSet#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#type_handler_version VirtualMachineScaleSet#type_handler_version}
  */
  readonly typeHandlerVersion: string;
}

function virtualMachineScaleSetExtensionToTerraform(struct?: VirtualMachineScaleSetExtension): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    auto_upgrade_minor_version: cdktf.booleanToTerraform(struct!.autoUpgradeMinorVersion),
    name: cdktf.stringToTerraform(struct!.name),
    protected_settings: cdktf.stringToTerraform(struct!.protectedSettings),
    provision_after_extensions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.provisionAfterExtensions),
    publisher: cdktf.stringToTerraform(struct!.publisher),
    settings: cdktf.stringToTerraform(struct!.settings),
    type: cdktf.stringToTerraform(struct!.type),
    type_handler_version: cdktf.stringToTerraform(struct!.typeHandlerVersion),
  }
}

export interface VirtualMachineScaleSetIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#identity_ids VirtualMachineScaleSet#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#type VirtualMachineScaleSet#type}
  */
  readonly type: string;
}

function virtualMachineScaleSetIdentityToTerraform(struct?: VirtualMachineScaleSetIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface VirtualMachineScaleSetNetworkProfileDnsSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#dns_servers VirtualMachineScaleSet#dns_servers}
  */
  readonly dnsServers: string[];
}

function virtualMachineScaleSetNetworkProfileDnsSettingsToTerraform(struct?: VirtualMachineScaleSetNetworkProfileDnsSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dns_servers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.dnsServers),
  }
}

export interface VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#domain_name_label VirtualMachineScaleSet#domain_name_label}
  */
  readonly domainNameLabel: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#idle_timeout VirtualMachineScaleSet#idle_timeout}
  */
  readonly idleTimeout: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#name VirtualMachineScaleSet#name}
  */
  readonly name: string;
}

function virtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationToTerraform(struct?: VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    domain_name_label: cdktf.stringToTerraform(struct!.domainNameLabel),
    idle_timeout: cdktf.numberToTerraform(struct!.idleTimeout),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface VirtualMachineScaleSetNetworkProfileIpConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#application_gateway_backend_address_pool_ids VirtualMachineScaleSet#application_gateway_backend_address_pool_ids}
  */
  readonly applicationGatewayBackendAddressPoolIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#application_security_group_ids VirtualMachineScaleSet#application_security_group_ids}
  */
  readonly applicationSecurityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#load_balancer_backend_address_pool_ids VirtualMachineScaleSet#load_balancer_backend_address_pool_ids}
  */
  readonly loadBalancerBackendAddressPoolIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#load_balancer_inbound_nat_rules_ids VirtualMachineScaleSet#load_balancer_inbound_nat_rules_ids}
  */
  readonly loadBalancerInboundNatRulesIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#name VirtualMachineScaleSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#primary VirtualMachineScaleSet#primary}
  */
  readonly primary: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#subnet_id VirtualMachineScaleSet#subnet_id}
  */
  readonly subnetId: string;
  /**
  * public_ip_address_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#public_ip_address_configuration VirtualMachineScaleSet#public_ip_address_configuration}
  */
  readonly publicIpAddressConfiguration?: VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfiguration[];
}

function virtualMachineScaleSetNetworkProfileIpConfigurationToTerraform(struct?: VirtualMachineScaleSetNetworkProfileIpConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    application_gateway_backend_address_pool_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.applicationGatewayBackendAddressPoolIds),
    application_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.applicationSecurityGroupIds),
    load_balancer_backend_address_pool_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.loadBalancerBackendAddressPoolIds),
    load_balancer_inbound_nat_rules_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.loadBalancerInboundNatRulesIds),
    name: cdktf.stringToTerraform(struct!.name),
    primary: cdktf.booleanToTerraform(struct!.primary),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    public_ip_address_configuration: cdktf.listMapper(virtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationToTerraform)(struct!.publicIpAddressConfiguration),
  }
}

export interface VirtualMachineScaleSetNetworkProfile {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#accelerated_networking VirtualMachineScaleSet#accelerated_networking}
  */
  readonly acceleratedNetworking?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#ip_forwarding VirtualMachineScaleSet#ip_forwarding}
  */
  readonly ipForwarding?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#name VirtualMachineScaleSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#network_security_group_id VirtualMachineScaleSet#network_security_group_id}
  */
  readonly networkSecurityGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#primary VirtualMachineScaleSet#primary}
  */
  readonly primary: boolean;
  /**
  * dns_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#dns_settings VirtualMachineScaleSet#dns_settings}
  */
  readonly dnsSettings?: VirtualMachineScaleSetNetworkProfileDnsSettings[];
  /**
  * ip_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#ip_configuration VirtualMachineScaleSet#ip_configuration}
  */
  readonly ipConfiguration: VirtualMachineScaleSetNetworkProfileIpConfiguration[];
}

function virtualMachineScaleSetNetworkProfileToTerraform(struct?: VirtualMachineScaleSetNetworkProfile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    accelerated_networking: cdktf.booleanToTerraform(struct!.acceleratedNetworking),
    ip_forwarding: cdktf.booleanToTerraform(struct!.ipForwarding),
    name: cdktf.stringToTerraform(struct!.name),
    network_security_group_id: cdktf.stringToTerraform(struct!.networkSecurityGroupId),
    primary: cdktf.booleanToTerraform(struct!.primary),
    dns_settings: cdktf.listMapper(virtualMachineScaleSetNetworkProfileDnsSettingsToTerraform)(struct!.dnsSettings),
    ip_configuration: cdktf.listMapper(virtualMachineScaleSetNetworkProfileIpConfigurationToTerraform)(struct!.ipConfiguration),
  }
}

export interface VirtualMachineScaleSetOsProfile {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#admin_password VirtualMachineScaleSet#admin_password}
  */
  readonly adminPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#admin_username VirtualMachineScaleSet#admin_username}
  */
  readonly adminUsername: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#computer_name_prefix VirtualMachineScaleSet#computer_name_prefix}
  */
  readonly computerNamePrefix: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#custom_data VirtualMachineScaleSet#custom_data}
  */
  readonly customData?: string;
}

function virtualMachineScaleSetOsProfileToTerraform(struct?: VirtualMachineScaleSetOsProfile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    admin_password: cdktf.stringToTerraform(struct!.adminPassword),
    admin_username: cdktf.stringToTerraform(struct!.adminUsername),
    computer_name_prefix: cdktf.stringToTerraform(struct!.computerNamePrefix),
    custom_data: cdktf.stringToTerraform(struct!.customData),
  }
}

export interface VirtualMachineScaleSetOsProfileLinuxConfigSshKeys {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#key_data VirtualMachineScaleSet#key_data}
  */
  readonly keyData?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#path VirtualMachineScaleSet#path}
  */
  readonly path: string;
}

function virtualMachineScaleSetOsProfileLinuxConfigSshKeysToTerraform(struct?: VirtualMachineScaleSetOsProfileLinuxConfigSshKeys): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key_data: cdktf.stringToTerraform(struct!.keyData),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface VirtualMachineScaleSetOsProfileLinuxConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#disable_password_authentication VirtualMachineScaleSet#disable_password_authentication}
  */
  readonly disablePasswordAuthentication?: boolean;
  /**
  * ssh_keys block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#ssh_keys VirtualMachineScaleSet#ssh_keys}
  */
  readonly sshKeys?: VirtualMachineScaleSetOsProfileLinuxConfigSshKeys[];
}

function virtualMachineScaleSetOsProfileLinuxConfigToTerraform(struct?: VirtualMachineScaleSetOsProfileLinuxConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    disable_password_authentication: cdktf.booleanToTerraform(struct!.disablePasswordAuthentication),
    ssh_keys: cdktf.listMapper(virtualMachineScaleSetOsProfileLinuxConfigSshKeysToTerraform)(struct!.sshKeys),
  }
}

export interface VirtualMachineScaleSetOsProfileSecretsVaultCertificates {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#certificate_store VirtualMachineScaleSet#certificate_store}
  */
  readonly certificateStore?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#certificate_url VirtualMachineScaleSet#certificate_url}
  */
  readonly certificateUrl: string;
}

function virtualMachineScaleSetOsProfileSecretsVaultCertificatesToTerraform(struct?: VirtualMachineScaleSetOsProfileSecretsVaultCertificates): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    certificate_store: cdktf.stringToTerraform(struct!.certificateStore),
    certificate_url: cdktf.stringToTerraform(struct!.certificateUrl),
  }
}

export interface VirtualMachineScaleSetOsProfileSecrets {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#source_vault_id VirtualMachineScaleSet#source_vault_id}
  */
  readonly sourceVaultId: string;
  /**
  * vault_certificates block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#vault_certificates VirtualMachineScaleSet#vault_certificates}
  */
  readonly vaultCertificates?: VirtualMachineScaleSetOsProfileSecretsVaultCertificates[];
}

function virtualMachineScaleSetOsProfileSecretsToTerraform(struct?: VirtualMachineScaleSetOsProfileSecrets): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    source_vault_id: cdktf.stringToTerraform(struct!.sourceVaultId),
    vault_certificates: cdktf.listMapper(virtualMachineScaleSetOsProfileSecretsVaultCertificatesToTerraform)(struct!.vaultCertificates),
  }
}

export interface VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#component VirtualMachineScaleSet#component}
  */
  readonly component: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#content VirtualMachineScaleSet#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#pass VirtualMachineScaleSet#pass}
  */
  readonly pass: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#setting_name VirtualMachineScaleSet#setting_name}
  */
  readonly settingName: string;
}

function virtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigToTerraform(struct?: VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    component: cdktf.stringToTerraform(struct!.component),
    content: cdktf.stringToTerraform(struct!.content),
    pass: cdktf.stringToTerraform(struct!.pass),
    setting_name: cdktf.stringToTerraform(struct!.settingName),
  }
}

export interface VirtualMachineScaleSetOsProfileWindowsConfigWinrm {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#certificate_url VirtualMachineScaleSet#certificate_url}
  */
  readonly certificateUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#protocol VirtualMachineScaleSet#protocol}
  */
  readonly protocol: string;
}

function virtualMachineScaleSetOsProfileWindowsConfigWinrmToTerraform(struct?: VirtualMachineScaleSetOsProfileWindowsConfigWinrm): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    certificate_url: cdktf.stringToTerraform(struct!.certificateUrl),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}

export interface VirtualMachineScaleSetOsProfileWindowsConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#enable_automatic_upgrades VirtualMachineScaleSet#enable_automatic_upgrades}
  */
  readonly enableAutomaticUpgrades?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#provision_vm_agent VirtualMachineScaleSet#provision_vm_agent}
  */
  readonly provisionVmAgent?: boolean;
  /**
  * additional_unattend_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#additional_unattend_config VirtualMachineScaleSet#additional_unattend_config}
  */
  readonly additionalUnattendConfig?: VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfig[];
  /**
  * winrm block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#winrm VirtualMachineScaleSet#winrm}
  */
  readonly winrm?: VirtualMachineScaleSetOsProfileWindowsConfigWinrm[];
}

function virtualMachineScaleSetOsProfileWindowsConfigToTerraform(struct?: VirtualMachineScaleSetOsProfileWindowsConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enable_automatic_upgrades: cdktf.booleanToTerraform(struct!.enableAutomaticUpgrades),
    provision_vm_agent: cdktf.booleanToTerraform(struct!.provisionVmAgent),
    additional_unattend_config: cdktf.listMapper(virtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigToTerraform)(struct!.additionalUnattendConfig),
    winrm: cdktf.listMapper(virtualMachineScaleSetOsProfileWindowsConfigWinrmToTerraform)(struct!.winrm),
  }
}

export interface VirtualMachineScaleSetPlan {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#name VirtualMachineScaleSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#product VirtualMachineScaleSet#product}
  */
  readonly product: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#publisher VirtualMachineScaleSet#publisher}
  */
  readonly publisher: string;
}

function virtualMachineScaleSetPlanToTerraform(struct?: VirtualMachineScaleSetPlan): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    product: cdktf.stringToTerraform(struct!.product),
    publisher: cdktf.stringToTerraform(struct!.publisher),
  }
}

export interface VirtualMachineScaleSetRollingUpgradePolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#max_batch_instance_percent VirtualMachineScaleSet#max_batch_instance_percent}
  */
  readonly maxBatchInstancePercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#max_unhealthy_instance_percent VirtualMachineScaleSet#max_unhealthy_instance_percent}
  */
  readonly maxUnhealthyInstancePercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#max_unhealthy_upgraded_instance_percent VirtualMachineScaleSet#max_unhealthy_upgraded_instance_percent}
  */
  readonly maxUnhealthyUpgradedInstancePercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#pause_time_between_batches VirtualMachineScaleSet#pause_time_between_batches}
  */
  readonly pauseTimeBetweenBatches?: string;
}

function virtualMachineScaleSetRollingUpgradePolicyToTerraform(struct?: VirtualMachineScaleSetRollingUpgradePolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_batch_instance_percent: cdktf.numberToTerraform(struct!.maxBatchInstancePercent),
    max_unhealthy_instance_percent: cdktf.numberToTerraform(struct!.maxUnhealthyInstancePercent),
    max_unhealthy_upgraded_instance_percent: cdktf.numberToTerraform(struct!.maxUnhealthyUpgradedInstancePercent),
    pause_time_between_batches: cdktf.stringToTerraform(struct!.pauseTimeBetweenBatches),
  }
}

export interface VirtualMachineScaleSetSku {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#capacity VirtualMachineScaleSet#capacity}
  */
  readonly capacity: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#name VirtualMachineScaleSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#tier VirtualMachineScaleSet#tier}
  */
  readonly tier?: string;
}

function virtualMachineScaleSetSkuToTerraform(struct?: VirtualMachineScaleSetSku): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    capacity: cdktf.numberToTerraform(struct!.capacity),
    name: cdktf.stringToTerraform(struct!.name),
    tier: cdktf.stringToTerraform(struct!.tier),
  }
}

export interface VirtualMachineScaleSetStorageProfileDataDisk {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#caching VirtualMachineScaleSet#caching}
  */
  readonly caching?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#create_option VirtualMachineScaleSet#create_option}
  */
  readonly createOption: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#disk_size_gb VirtualMachineScaleSet#disk_size_gb}
  */
  readonly diskSizeGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#lun VirtualMachineScaleSet#lun}
  */
  readonly lun: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#managed_disk_type VirtualMachineScaleSet#managed_disk_type}
  */
  readonly managedDiskType?: string;
}

function virtualMachineScaleSetStorageProfileDataDiskToTerraform(struct?: VirtualMachineScaleSetStorageProfileDataDisk): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    caching: cdktf.stringToTerraform(struct!.caching),
    create_option: cdktf.stringToTerraform(struct!.createOption),
    disk_size_gb: cdktf.numberToTerraform(struct!.diskSizeGb),
    lun: cdktf.numberToTerraform(struct!.lun),
    managed_disk_type: cdktf.stringToTerraform(struct!.managedDiskType),
  }
}

export interface VirtualMachineScaleSetStorageProfileImageReference {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#id VirtualMachineScaleSet#id}
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#offer VirtualMachineScaleSet#offer}
  */
  readonly offer?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#publisher VirtualMachineScaleSet#publisher}
  */
  readonly publisher?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#sku VirtualMachineScaleSet#sku}
  */
  readonly sku?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#version VirtualMachineScaleSet#version}
  */
  readonly version?: string;
}

function virtualMachineScaleSetStorageProfileImageReferenceToTerraform(struct?: VirtualMachineScaleSetStorageProfileImageReference): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    offer: cdktf.stringToTerraform(struct!.offer),
    publisher: cdktf.stringToTerraform(struct!.publisher),
    sku: cdktf.stringToTerraform(struct!.sku),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export interface VirtualMachineScaleSetStorageProfileOsDisk {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#caching VirtualMachineScaleSet#caching}
  */
  readonly caching?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#create_option VirtualMachineScaleSet#create_option}
  */
  readonly createOption: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#image VirtualMachineScaleSet#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#managed_disk_type VirtualMachineScaleSet#managed_disk_type}
  */
  readonly managedDiskType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#name VirtualMachineScaleSet#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#os_type VirtualMachineScaleSet#os_type}
  */
  readonly osType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#vhd_containers VirtualMachineScaleSet#vhd_containers}
  */
  readonly vhdContainers?: string[];
}

function virtualMachineScaleSetStorageProfileOsDiskToTerraform(struct?: VirtualMachineScaleSetStorageProfileOsDisk): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    caching: cdktf.stringToTerraform(struct!.caching),
    create_option: cdktf.stringToTerraform(struct!.createOption),
    image: cdktf.stringToTerraform(struct!.image),
    managed_disk_type: cdktf.stringToTerraform(struct!.managedDiskType),
    name: cdktf.stringToTerraform(struct!.name),
    os_type: cdktf.stringToTerraform(struct!.osType),
    vhd_containers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.vhdContainers),
  }
}

export interface VirtualMachineScaleSetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#create VirtualMachineScaleSet#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#delete VirtualMachineScaleSet#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#read VirtualMachineScaleSet#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html#update VirtualMachineScaleSet#update}
  */
  readonly update?: string;
}

function virtualMachineScaleSetTimeoutsToTerraform(struct?: VirtualMachineScaleSetTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html azurerm_virtual_machine_scale_set}
*/
export class VirtualMachineScaleSet extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html azurerm_virtual_machine_scale_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualMachineScaleSetConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualMachineScaleSetConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_virtual_machine_scale_set',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._automaticOsUpgrade = config.automaticOsUpgrade;
    this._evictionPolicy = config.evictionPolicy;
    this._healthProbeId = config.healthProbeId;
    this._licenseType = config.licenseType;
    this._location = config.location;
    this._name = config.name;
    this._overprovision = config.overprovision;
    this._priority = config.priority;
    this._proximityPlacementGroupId = config.proximityPlacementGroupId;
    this._resourceGroupName = config.resourceGroupName;
    this._singlePlacementGroup = config.singlePlacementGroup;
    this._tags = config.tags;
    this._upgradePolicyMode = config.upgradePolicyMode;
    this._zones = config.zones;
    this._bootDiagnostics = config.bootDiagnostics;
    this._extension = config.extension;
    this._identity = config.identity;
    this._networkProfile = config.networkProfile;
    this._osProfile = config.osProfile;
    this._osProfileLinuxConfig = config.osProfileLinuxConfig;
    this._osProfileSecrets = config.osProfileSecrets;
    this._osProfileWindowsConfig = config.osProfileWindowsConfig;
    this._plan = config.plan;
    this._rollingUpgradePolicy = config.rollingUpgradePolicy;
    this._sku = config.sku;
    this._storageProfileDataDisk = config.storageProfileDataDisk;
    this._storageProfileImageReference = config.storageProfileImageReference;
    this._storageProfileOsDisk = config.storageProfileOsDisk;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // automatic_os_upgrade - computed: false, optional: true, required: false
  private _automaticOsUpgrade?: boolean;
  public get automaticOsUpgrade() {
    return this.getBooleanAttribute('automatic_os_upgrade');
  }
  public set automaticOsUpgrade(value: boolean ) {
    this._automaticOsUpgrade = value;
  }
  public resetAutomaticOsUpgrade() {
    this._automaticOsUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticOsUpgradeInput() {
    return this._automaticOsUpgrade
  }

  // eviction_policy - computed: false, optional: true, required: false
  private _evictionPolicy?: string;
  public get evictionPolicy() {
    return this.getStringAttribute('eviction_policy');
  }
  public set evictionPolicy(value: string ) {
    this._evictionPolicy = value;
  }
  public resetEvictionPolicy() {
    this._evictionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evictionPolicyInput() {
    return this._evictionPolicy
  }

  // health_probe_id - computed: false, optional: true, required: false
  private _healthProbeId?: string;
  public get healthProbeId() {
    return this.getStringAttribute('health_probe_id');
  }
  public set healthProbeId(value: string ) {
    this._healthProbeId = value;
  }
  public resetHealthProbeId() {
    this._healthProbeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthProbeIdInput() {
    return this._healthProbeId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // license_type - computed: true, optional: true, required: false
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
    return this._licenseType
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
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

  // overprovision - computed: false, optional: true, required: false
  private _overprovision?: boolean;
  public get overprovision() {
    return this.getBooleanAttribute('overprovision');
  }
  public set overprovision(value: boolean ) {
    this._overprovision = value;
  }
  public resetOverprovision() {
    this._overprovision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overprovisionInput() {
    return this._overprovision
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: string;
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string ) {
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
  private _proximityPlacementGroupId?: string;
  public get proximityPlacementGroupId() {
    return this.getStringAttribute('proximity_placement_group_id');
  }
  public set proximityPlacementGroupId(value: string ) {
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

  // single_placement_group - computed: false, optional: true, required: false
  private _singlePlacementGroup?: boolean;
  public get singlePlacementGroup() {
    return this.getBooleanAttribute('single_placement_group');
  }
  public set singlePlacementGroup(value: boolean ) {
    this._singlePlacementGroup = value;
  }
  public resetSinglePlacementGroup() {
    this._singlePlacementGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singlePlacementGroupInput() {
    return this._singlePlacementGroup
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // upgrade_policy_mode - computed: false, optional: false, required: true
  private _upgradePolicyMode: string;
  public get upgradePolicyMode() {
    return this.getStringAttribute('upgrade_policy_mode');
  }
  public set upgradePolicyMode(value: string) {
    this._upgradePolicyMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradePolicyModeInput() {
    return this._upgradePolicyMode
  }

  // zones - computed: false, optional: true, required: false
  private _zones?: string[];
  public get zones() {
    return this.getListAttribute('zones');
  }
  public set zones(value: string[] ) {
    this._zones = value;
  }
  public resetZones() {
    this._zones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones
  }

  // boot_diagnostics - computed: false, optional: true, required: false
  private _bootDiagnostics?: VirtualMachineScaleSetBootDiagnostics[];
  public get bootDiagnostics() {
    return this.interpolationForAttribute('boot_diagnostics') as any;
  }
  public set bootDiagnostics(value: VirtualMachineScaleSetBootDiagnostics[] ) {
    this._bootDiagnostics = value;
  }
  public resetBootDiagnostics() {
    this._bootDiagnostics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiagnosticsInput() {
    return this._bootDiagnostics
  }

  // extension - computed: false, optional: true, required: false
  private _extension?: VirtualMachineScaleSetExtension[];
  public get extension() {
    return this.interpolationForAttribute('extension') as any;
  }
  public set extension(value: VirtualMachineScaleSetExtension[] ) {
    this._extension = value;
  }
  public resetExtension() {
    this._extension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionInput() {
    return this._extension
  }

  // identity - computed: false, optional: true, required: false
  private _identity?: VirtualMachineScaleSetIdentity[];
  public get identity() {
    return this.interpolationForAttribute('identity') as any;
  }
  public set identity(value: VirtualMachineScaleSetIdentity[] ) {
    this._identity = value;
  }
  public resetIdentity() {
    this._identity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity
  }

  // network_profile - computed: false, optional: false, required: true
  private _networkProfile: VirtualMachineScaleSetNetworkProfile[];
  public get networkProfile() {
    return this.interpolationForAttribute('network_profile') as any;
  }
  public set networkProfile(value: VirtualMachineScaleSetNetworkProfile[]) {
    this._networkProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkProfileInput() {
    return this._networkProfile
  }

  // os_profile - computed: false, optional: false, required: true
  private _osProfile: VirtualMachineScaleSetOsProfile[];
  public get osProfile() {
    return this.interpolationForAttribute('os_profile') as any;
  }
  public set osProfile(value: VirtualMachineScaleSetOsProfile[]) {
    this._osProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osProfileInput() {
    return this._osProfile
  }

  // os_profile_linux_config - computed: false, optional: true, required: false
  private _osProfileLinuxConfig?: VirtualMachineScaleSetOsProfileLinuxConfig[];
  public get osProfileLinuxConfig() {
    return this.interpolationForAttribute('os_profile_linux_config') as any;
  }
  public set osProfileLinuxConfig(value: VirtualMachineScaleSetOsProfileLinuxConfig[] ) {
    this._osProfileLinuxConfig = value;
  }
  public resetOsProfileLinuxConfig() {
    this._osProfileLinuxConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osProfileLinuxConfigInput() {
    return this._osProfileLinuxConfig
  }

  // os_profile_secrets - computed: false, optional: true, required: false
  private _osProfileSecrets?: VirtualMachineScaleSetOsProfileSecrets[];
  public get osProfileSecrets() {
    return this.interpolationForAttribute('os_profile_secrets') as any;
  }
  public set osProfileSecrets(value: VirtualMachineScaleSetOsProfileSecrets[] ) {
    this._osProfileSecrets = value;
  }
  public resetOsProfileSecrets() {
    this._osProfileSecrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osProfileSecretsInput() {
    return this._osProfileSecrets
  }

  // os_profile_windows_config - computed: false, optional: true, required: false
  private _osProfileWindowsConfig?: VirtualMachineScaleSetOsProfileWindowsConfig[];
  public get osProfileWindowsConfig() {
    return this.interpolationForAttribute('os_profile_windows_config') as any;
  }
  public set osProfileWindowsConfig(value: VirtualMachineScaleSetOsProfileWindowsConfig[] ) {
    this._osProfileWindowsConfig = value;
  }
  public resetOsProfileWindowsConfig() {
    this._osProfileWindowsConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osProfileWindowsConfigInput() {
    return this._osProfileWindowsConfig
  }

  // plan - computed: false, optional: true, required: false
  private _plan?: VirtualMachineScaleSetPlan[];
  public get plan() {
    return this.interpolationForAttribute('plan') as any;
  }
  public set plan(value: VirtualMachineScaleSetPlan[] ) {
    this._plan = value;
  }
  public resetPlan() {
    this._plan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan
  }

  // rolling_upgrade_policy - computed: false, optional: true, required: false
  private _rollingUpgradePolicy?: VirtualMachineScaleSetRollingUpgradePolicy[];
  public get rollingUpgradePolicy() {
    return this.interpolationForAttribute('rolling_upgrade_policy') as any;
  }
  public set rollingUpgradePolicy(value: VirtualMachineScaleSetRollingUpgradePolicy[] ) {
    this._rollingUpgradePolicy = value;
  }
  public resetRollingUpgradePolicy() {
    this._rollingUpgradePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingUpgradePolicyInput() {
    return this._rollingUpgradePolicy
  }

  // sku - computed: false, optional: false, required: true
  private _sku: VirtualMachineScaleSetSku[];
  public get sku() {
    return this.interpolationForAttribute('sku') as any;
  }
  public set sku(value: VirtualMachineScaleSetSku[]) {
    this._sku = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku
  }

  // storage_profile_data_disk - computed: false, optional: true, required: false
  private _storageProfileDataDisk?: VirtualMachineScaleSetStorageProfileDataDisk[];
  public get storageProfileDataDisk() {
    return this.interpolationForAttribute('storage_profile_data_disk') as any;
  }
  public set storageProfileDataDisk(value: VirtualMachineScaleSetStorageProfileDataDisk[] ) {
    this._storageProfileDataDisk = value;
  }
  public resetStorageProfileDataDisk() {
    this._storageProfileDataDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageProfileDataDiskInput() {
    return this._storageProfileDataDisk
  }

  // storage_profile_image_reference - computed: false, optional: true, required: false
  private _storageProfileImageReference?: VirtualMachineScaleSetStorageProfileImageReference[];
  public get storageProfileImageReference() {
    return this.interpolationForAttribute('storage_profile_image_reference') as any;
  }
  public set storageProfileImageReference(value: VirtualMachineScaleSetStorageProfileImageReference[] ) {
    this._storageProfileImageReference = value;
  }
  public resetStorageProfileImageReference() {
    this._storageProfileImageReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageProfileImageReferenceInput() {
    return this._storageProfileImageReference
  }

  // storage_profile_os_disk - computed: false, optional: false, required: true
  private _storageProfileOsDisk: VirtualMachineScaleSetStorageProfileOsDisk[];
  public get storageProfileOsDisk() {
    return this.interpolationForAttribute('storage_profile_os_disk') as any;
  }
  public set storageProfileOsDisk(value: VirtualMachineScaleSetStorageProfileOsDisk[]) {
    this._storageProfileOsDisk = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageProfileOsDiskInput() {
    return this._storageProfileOsDisk
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VirtualMachineScaleSetTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: VirtualMachineScaleSetTimeouts ) {
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
      automatic_os_upgrade: cdktf.booleanToTerraform(this._automaticOsUpgrade),
      eviction_policy: cdktf.stringToTerraform(this._evictionPolicy),
      health_probe_id: cdktf.stringToTerraform(this._healthProbeId),
      license_type: cdktf.stringToTerraform(this._licenseType),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      overprovision: cdktf.booleanToTerraform(this._overprovision),
      priority: cdktf.stringToTerraform(this._priority),
      proximity_placement_group_id: cdktf.stringToTerraform(this._proximityPlacementGroupId),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      single_placement_group: cdktf.booleanToTerraform(this._singlePlacementGroup),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      upgrade_policy_mode: cdktf.stringToTerraform(this._upgradePolicyMode),
      zones: cdktf.listMapper(cdktf.stringToTerraform)(this._zones),
      boot_diagnostics: cdktf.listMapper(virtualMachineScaleSetBootDiagnosticsToTerraform)(this._bootDiagnostics),
      extension: cdktf.listMapper(virtualMachineScaleSetExtensionToTerraform)(this._extension),
      identity: cdktf.listMapper(virtualMachineScaleSetIdentityToTerraform)(this._identity),
      network_profile: cdktf.listMapper(virtualMachineScaleSetNetworkProfileToTerraform)(this._networkProfile),
      os_profile: cdktf.listMapper(virtualMachineScaleSetOsProfileToTerraform)(this._osProfile),
      os_profile_linux_config: cdktf.listMapper(virtualMachineScaleSetOsProfileLinuxConfigToTerraform)(this._osProfileLinuxConfig),
      os_profile_secrets: cdktf.listMapper(virtualMachineScaleSetOsProfileSecretsToTerraform)(this._osProfileSecrets),
      os_profile_windows_config: cdktf.listMapper(virtualMachineScaleSetOsProfileWindowsConfigToTerraform)(this._osProfileWindowsConfig),
      plan: cdktf.listMapper(virtualMachineScaleSetPlanToTerraform)(this._plan),
      rolling_upgrade_policy: cdktf.listMapper(virtualMachineScaleSetRollingUpgradePolicyToTerraform)(this._rollingUpgradePolicy),
      sku: cdktf.listMapper(virtualMachineScaleSetSkuToTerraform)(this._sku),
      storage_profile_data_disk: cdktf.listMapper(virtualMachineScaleSetStorageProfileDataDiskToTerraform)(this._storageProfileDataDisk),
      storage_profile_image_reference: cdktf.listMapper(virtualMachineScaleSetStorageProfileImageReferenceToTerraform)(this._storageProfileImageReference),
      storage_profile_os_disk: cdktf.listMapper(virtualMachineScaleSetStorageProfileOsDiskToTerraform)(this._storageProfileOsDisk),
      timeouts: virtualMachineScaleSetTimeoutsToTerraform(this._timeouts),
    };
  }
}
