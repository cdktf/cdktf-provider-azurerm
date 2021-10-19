// https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualMachineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#availability_set_id VirtualMachine#availability_set_id}
  */
  readonly availabilitySetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#delete_data_disks_on_termination VirtualMachine#delete_data_disks_on_termination}
  */
  readonly deleteDataDisksOnTermination?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#delete_os_disk_on_termination VirtualMachine#delete_os_disk_on_termination}
  */
  readonly deleteOsDiskOnTermination?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#license_type VirtualMachine#license_type}
  */
  readonly licenseType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#location VirtualMachine#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#name VirtualMachine#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#network_interface_ids VirtualMachine#network_interface_ids}
  */
  readonly networkInterfaceIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#primary_network_interface_id VirtualMachine#primary_network_interface_id}
  */
  readonly primaryNetworkInterfaceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#proximity_placement_group_id VirtualMachine#proximity_placement_group_id}
  */
  readonly proximityPlacementGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#resource_group_name VirtualMachine#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#tags VirtualMachine#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#vm_size VirtualMachine#vm_size}
  */
  readonly vmSize: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#zones VirtualMachine#zones}
  */
  readonly zones?: string[];
  /**
  * additional_capabilities block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#additional_capabilities VirtualMachine#additional_capabilities}
  */
  readonly additionalCapabilities?: VirtualMachineAdditionalCapabilities;
  /**
  * boot_diagnostics block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#boot_diagnostics VirtualMachine#boot_diagnostics}
  */
  readonly bootDiagnostics?: VirtualMachineBootDiagnostics;
  /**
  * identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#identity VirtualMachine#identity}
  */
  readonly identity?: VirtualMachineIdentity;
  /**
  * os_profile block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#os_profile VirtualMachine#os_profile}
  */
  readonly osProfile?: VirtualMachineOsProfile;
  /**
  * os_profile_linux_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#os_profile_linux_config VirtualMachine#os_profile_linux_config}
  */
  readonly osProfileLinuxConfig?: VirtualMachineOsProfileLinuxConfig;
  /**
  * os_profile_secrets block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#os_profile_secrets VirtualMachine#os_profile_secrets}
  */
  readonly osProfileSecrets?: VirtualMachineOsProfileSecrets[];
  /**
  * os_profile_windows_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#os_profile_windows_config VirtualMachine#os_profile_windows_config}
  */
  readonly osProfileWindowsConfig?: VirtualMachineOsProfileWindowsConfig;
  /**
  * plan block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#plan VirtualMachine#plan}
  */
  readonly plan?: VirtualMachinePlan;
  /**
  * storage_data_disk block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#storage_data_disk VirtualMachine#storage_data_disk}
  */
  readonly storageDataDisk?: VirtualMachineStorageDataDisk[];
  /**
  * storage_image_reference block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#storage_image_reference VirtualMachine#storage_image_reference}
  */
  readonly storageImageReference?: VirtualMachineStorageImageReference;
  /**
  * storage_os_disk block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#storage_os_disk VirtualMachine#storage_os_disk}
  */
  readonly storageOsDisk: VirtualMachineStorageOsDisk;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#timeouts VirtualMachine#timeouts}
  */
  readonly timeouts?: VirtualMachineTimeouts;
}
export interface VirtualMachineAdditionalCapabilities {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#ultra_ssd_enabled VirtualMachine#ultra_ssd_enabled}
  */
  readonly ultraSsdEnabled: boolean | cdktf.IResolvable;
}

function virtualMachineAdditionalCapabilitiesToTerraform(struct?: VirtualMachineAdditionalCapabilitiesOutputReference | VirtualMachineAdditionalCapabilities): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ultra_ssd_enabled: cdktf.booleanToTerraform(struct!.ultraSsdEnabled),
  }
}

export class VirtualMachineAdditionalCapabilitiesOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // ultra_ssd_enabled - computed: false, optional: false, required: true
  private _ultraSsdEnabled?: boolean | cdktf.IResolvable; 
  public get ultraSsdEnabled() {
    return this.getBooleanAttribute('ultra_ssd_enabled') as any;
  }
  public set ultraSsdEnabled(value: boolean | cdktf.IResolvable) {
    this._ultraSsdEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ultraSsdEnabledInput() {
    return this._ultraSsdEnabled
  }
}
export interface VirtualMachineBootDiagnostics {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#enabled VirtualMachine#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#storage_uri VirtualMachine#storage_uri}
  */
  readonly storageUri: string;
}

function virtualMachineBootDiagnosticsToTerraform(struct?: VirtualMachineBootDiagnosticsOutputReference | VirtualMachineBootDiagnostics): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    storage_uri: cdktf.stringToTerraform(struct!.storageUri),
  }
}

export class VirtualMachineBootDiagnosticsOutputReference extends cdktf.ComplexObject {
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

  // storage_uri - computed: false, optional: false, required: true
  private _storageUri?: string; 
  public get storageUri() {
    return this.getStringAttribute('storage_uri');
  }
  public set storageUri(value: string) {
    this._storageUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageUriInput() {
    return this._storageUri
  }
}
export interface VirtualMachineIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#identity_ids VirtualMachine#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#type VirtualMachine#type}
  */
  readonly type: string;
}

function virtualMachineIdentityToTerraform(struct?: VirtualMachineIdentityOutputReference | VirtualMachineIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class VirtualMachineIdentityOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // identity_ids - computed: false, optional: true, required: false
  private _identityIds?: string[] | undefined; 
  public get identityIds() {
    return this.getListAttribute('identity_ids');
  }
  public set identityIds(value: string[] | undefined) {
    this._identityIds = value;
  }
  public resetIdentityIds() {
    this._identityIds = undefined;
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
export interface VirtualMachineOsProfile {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#admin_password VirtualMachine#admin_password}
  */
  readonly adminPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#admin_username VirtualMachine#admin_username}
  */
  readonly adminUsername: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#computer_name VirtualMachine#computer_name}
  */
  readonly computerName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#custom_data VirtualMachine#custom_data}
  */
  readonly customData?: string;
}

function virtualMachineOsProfileToTerraform(struct?: VirtualMachineOsProfileOutputReference | VirtualMachineOsProfile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_password: cdktf.stringToTerraform(struct!.adminPassword),
    admin_username: cdktf.stringToTerraform(struct!.adminUsername),
    computer_name: cdktf.stringToTerraform(struct!.computerName),
    custom_data: cdktf.stringToTerraform(struct!.customData),
  }
}

export class VirtualMachineOsProfileOutputReference extends cdktf.ComplexObject {
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

  // computer_name - computed: false, optional: false, required: true
  private _computerName?: string; 
  public get computerName() {
    return this.getStringAttribute('computer_name');
  }
  public set computerName(value: string) {
    this._computerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computerNameInput() {
    return this._computerName
  }

  // custom_data - computed: true, optional: true, required: false
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
}
export interface VirtualMachineOsProfileLinuxConfigSshKeys {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#key_data VirtualMachine#key_data}
  */
  readonly keyData: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#path VirtualMachine#path}
  */
  readonly path: string;
}

function virtualMachineOsProfileLinuxConfigSshKeysToTerraform(struct?: VirtualMachineOsProfileLinuxConfigSshKeys): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_data: cdktf.stringToTerraform(struct!.keyData),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface VirtualMachineOsProfileLinuxConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#disable_password_authentication VirtualMachine#disable_password_authentication}
  */
  readonly disablePasswordAuthentication: boolean | cdktf.IResolvable;
  /**
  * ssh_keys block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#ssh_keys VirtualMachine#ssh_keys}
  */
  readonly sshKeys?: VirtualMachineOsProfileLinuxConfigSshKeys[];
}

function virtualMachineOsProfileLinuxConfigToTerraform(struct?: VirtualMachineOsProfileLinuxConfigOutputReference | VirtualMachineOsProfileLinuxConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_password_authentication: cdktf.booleanToTerraform(struct!.disablePasswordAuthentication),
    ssh_keys: cdktf.listMapper(virtualMachineOsProfileLinuxConfigSshKeysToTerraform)(struct!.sshKeys),
  }
}

export class VirtualMachineOsProfileLinuxConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // disable_password_authentication - computed: false, optional: false, required: true
  private _disablePasswordAuthentication?: boolean | cdktf.IResolvable; 
  public get disablePasswordAuthentication() {
    return this.getBooleanAttribute('disable_password_authentication') as any;
  }
  public set disablePasswordAuthentication(value: boolean | cdktf.IResolvable) {
    this._disablePasswordAuthentication = value;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePasswordAuthenticationInput() {
    return this._disablePasswordAuthentication
  }

  // ssh_keys - computed: false, optional: true, required: false
  private _sshKeys?: VirtualMachineOsProfileLinuxConfigSshKeys[] | undefined; 
  public get sshKeys() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ssh_keys') as any;
  }
  public set sshKeys(value: VirtualMachineOsProfileLinuxConfigSshKeys[] | undefined) {
    this._sshKeys = value;
  }
  public resetSshKeys() {
    this._sshKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeysInput() {
    return this._sshKeys
  }
}
export interface VirtualMachineOsProfileSecretsVaultCertificates {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#certificate_store VirtualMachine#certificate_store}
  */
  readonly certificateStore?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#certificate_url VirtualMachine#certificate_url}
  */
  readonly certificateUrl: string;
}

function virtualMachineOsProfileSecretsVaultCertificatesToTerraform(struct?: VirtualMachineOsProfileSecretsVaultCertificates): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_store: cdktf.stringToTerraform(struct!.certificateStore),
    certificate_url: cdktf.stringToTerraform(struct!.certificateUrl),
  }
}

export interface VirtualMachineOsProfileSecrets {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#source_vault_id VirtualMachine#source_vault_id}
  */
  readonly sourceVaultId: string;
  /**
  * vault_certificates block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#vault_certificates VirtualMachine#vault_certificates}
  */
  readonly vaultCertificates?: VirtualMachineOsProfileSecretsVaultCertificates[];
}

function virtualMachineOsProfileSecretsToTerraform(struct?: VirtualMachineOsProfileSecrets): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_vault_id: cdktf.stringToTerraform(struct!.sourceVaultId),
    vault_certificates: cdktf.listMapper(virtualMachineOsProfileSecretsVaultCertificatesToTerraform)(struct!.vaultCertificates),
  }
}

export interface VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#component VirtualMachine#component}
  */
  readonly component: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#content VirtualMachine#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#pass VirtualMachine#pass}
  */
  readonly pass: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#setting_name VirtualMachine#setting_name}
  */
  readonly settingName: string;
}

function virtualMachineOsProfileWindowsConfigAdditionalUnattendConfigToTerraform(struct?: VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    component: cdktf.stringToTerraform(struct!.component),
    content: cdktf.stringToTerraform(struct!.content),
    pass: cdktf.stringToTerraform(struct!.pass),
    setting_name: cdktf.stringToTerraform(struct!.settingName),
  }
}

export interface VirtualMachineOsProfileWindowsConfigWinrm {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#certificate_url VirtualMachine#certificate_url}
  */
  readonly certificateUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#protocol VirtualMachine#protocol}
  */
  readonly protocol: string;
}

function virtualMachineOsProfileWindowsConfigWinrmToTerraform(struct?: VirtualMachineOsProfileWindowsConfigWinrm): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_url: cdktf.stringToTerraform(struct!.certificateUrl),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}

export interface VirtualMachineOsProfileWindowsConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#enable_automatic_upgrades VirtualMachine#enable_automatic_upgrades}
  */
  readonly enableAutomaticUpgrades?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#provision_vm_agent VirtualMachine#provision_vm_agent}
  */
  readonly provisionVmAgent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#timezone VirtualMachine#timezone}
  */
  readonly timezone?: string;
  /**
  * additional_unattend_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#additional_unattend_config VirtualMachine#additional_unattend_config}
  */
  readonly additionalUnattendConfig?: VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig[];
  /**
  * winrm block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#winrm VirtualMachine#winrm}
  */
  readonly winrm?: VirtualMachineOsProfileWindowsConfigWinrm[];
}

function virtualMachineOsProfileWindowsConfigToTerraform(struct?: VirtualMachineOsProfileWindowsConfigOutputReference | VirtualMachineOsProfileWindowsConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_automatic_upgrades: cdktf.booleanToTerraform(struct!.enableAutomaticUpgrades),
    provision_vm_agent: cdktf.booleanToTerraform(struct!.provisionVmAgent),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    additional_unattend_config: cdktf.listMapper(virtualMachineOsProfileWindowsConfigAdditionalUnattendConfigToTerraform)(struct!.additionalUnattendConfig),
    winrm: cdktf.listMapper(virtualMachineOsProfileWindowsConfigWinrmToTerraform)(struct!.winrm),
  }
}

export class VirtualMachineOsProfileWindowsConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // enable_automatic_upgrades - computed: false, optional: true, required: false
  private _enableAutomaticUpgrades?: boolean | cdktf.IResolvable | undefined; 
  public get enableAutomaticUpgrades() {
    return this.getBooleanAttribute('enable_automatic_upgrades') as any;
  }
  public set enableAutomaticUpgrades(value: boolean | cdktf.IResolvable | undefined) {
    this._enableAutomaticUpgrades = value;
  }
  public resetEnableAutomaticUpgrades() {
    this._enableAutomaticUpgrades = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutomaticUpgradesInput() {
    return this._enableAutomaticUpgrades
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

  // additional_unattend_config - computed: false, optional: true, required: false
  private _additionalUnattendConfig?: VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig[] | undefined; 
  public get additionalUnattendConfig() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('additional_unattend_config') as any;
  }
  public set additionalUnattendConfig(value: VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig[] | undefined) {
    this._additionalUnattendConfig = value;
  }
  public resetAdditionalUnattendConfig() {
    this._additionalUnattendConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalUnattendConfigInput() {
    return this._additionalUnattendConfig
  }

  // winrm - computed: false, optional: true, required: false
  private _winrm?: VirtualMachineOsProfileWindowsConfigWinrm[] | undefined; 
  public get winrm() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('winrm') as any;
  }
  public set winrm(value: VirtualMachineOsProfileWindowsConfigWinrm[] | undefined) {
    this._winrm = value;
  }
  public resetWinrm() {
    this._winrm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get winrmInput() {
    return this._winrm
  }
}
export interface VirtualMachinePlan {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#name VirtualMachine#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#product VirtualMachine#product}
  */
  readonly product: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#publisher VirtualMachine#publisher}
  */
  readonly publisher: string;
}

function virtualMachinePlanToTerraform(struct?: VirtualMachinePlanOutputReference | VirtualMachinePlan): any {
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

export class VirtualMachinePlanOutputReference extends cdktf.ComplexObject {
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
export interface VirtualMachineStorageDataDisk {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#caching VirtualMachine#caching}
  */
  readonly caching?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#create_option VirtualMachine#create_option}
  */
  readonly createOption: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#disk_size_gb VirtualMachine#disk_size_gb}
  */
  readonly diskSizeGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#lun VirtualMachine#lun}
  */
  readonly lun: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#managed_disk_id VirtualMachine#managed_disk_id}
  */
  readonly managedDiskId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#managed_disk_type VirtualMachine#managed_disk_type}
  */
  readonly managedDiskType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#name VirtualMachine#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#vhd_uri VirtualMachine#vhd_uri}
  */
  readonly vhdUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#write_accelerator_enabled VirtualMachine#write_accelerator_enabled}
  */
  readonly writeAcceleratorEnabled?: boolean | cdktf.IResolvable;
}

function virtualMachineStorageDataDiskToTerraform(struct?: VirtualMachineStorageDataDisk): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    caching: cdktf.stringToTerraform(struct!.caching),
    create_option: cdktf.stringToTerraform(struct!.createOption),
    disk_size_gb: cdktf.numberToTerraform(struct!.diskSizeGb),
    lun: cdktf.numberToTerraform(struct!.lun),
    managed_disk_id: cdktf.stringToTerraform(struct!.managedDiskId),
    managed_disk_type: cdktf.stringToTerraform(struct!.managedDiskType),
    name: cdktf.stringToTerraform(struct!.name),
    vhd_uri: cdktf.stringToTerraform(struct!.vhdUri),
    write_accelerator_enabled: cdktf.booleanToTerraform(struct!.writeAcceleratorEnabled),
  }
}

export interface VirtualMachineStorageImageReference {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#id VirtualMachine#id}
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#offer VirtualMachine#offer}
  */
  readonly offer?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#publisher VirtualMachine#publisher}
  */
  readonly publisher?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#sku VirtualMachine#sku}
  */
  readonly sku?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#version VirtualMachine#version}
  */
  readonly version?: string;
}

function virtualMachineStorageImageReferenceToTerraform(struct?: VirtualMachineStorageImageReferenceOutputReference | VirtualMachineStorageImageReference): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    offer: cdktf.stringToTerraform(struct!.offer),
    publisher: cdktf.stringToTerraform(struct!.publisher),
    sku: cdktf.stringToTerraform(struct!.sku),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export class VirtualMachineStorageImageReferenceOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // id - computed: false, optional: true, required: false
  private _id?: string | undefined; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id
  }

  // offer - computed: false, optional: true, required: false
  private _offer?: string | undefined; 
  public get offer() {
    return this.getStringAttribute('offer');
  }
  public set offer(value: string | undefined) {
    this._offer = value;
  }
  public resetOffer() {
    this._offer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offerInput() {
    return this._offer
  }

  // publisher - computed: false, optional: true, required: false
  private _publisher?: string | undefined; 
  public get publisher() {
    return this.getStringAttribute('publisher');
  }
  public set publisher(value: string | undefined) {
    this._publisher = value;
  }
  public resetPublisher() {
    this._publisher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publisherInput() {
    return this._publisher
  }

  // sku - computed: false, optional: true, required: false
  private _sku?: string | undefined; 
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string | undefined) {
    this._sku = value;
  }
  public resetSku() {
    this._sku = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku
  }

  // version - computed: true, optional: true, required: false
  private _version?: string | undefined; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string | undefined) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version
  }
}
export interface VirtualMachineStorageOsDisk {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#caching VirtualMachine#caching}
  */
  readonly caching?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#create_option VirtualMachine#create_option}
  */
  readonly createOption: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#disk_size_gb VirtualMachine#disk_size_gb}
  */
  readonly diskSizeGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#image_uri VirtualMachine#image_uri}
  */
  readonly imageUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#managed_disk_id VirtualMachine#managed_disk_id}
  */
  readonly managedDiskId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#managed_disk_type VirtualMachine#managed_disk_type}
  */
  readonly managedDiskType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#name VirtualMachine#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#os_type VirtualMachine#os_type}
  */
  readonly osType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#vhd_uri VirtualMachine#vhd_uri}
  */
  readonly vhdUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#write_accelerator_enabled VirtualMachine#write_accelerator_enabled}
  */
  readonly writeAcceleratorEnabled?: boolean | cdktf.IResolvable;
}

function virtualMachineStorageOsDiskToTerraform(struct?: VirtualMachineStorageOsDiskOutputReference | VirtualMachineStorageOsDisk): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    caching: cdktf.stringToTerraform(struct!.caching),
    create_option: cdktf.stringToTerraform(struct!.createOption),
    disk_size_gb: cdktf.numberToTerraform(struct!.diskSizeGb),
    image_uri: cdktf.stringToTerraform(struct!.imageUri),
    managed_disk_id: cdktf.stringToTerraform(struct!.managedDiskId),
    managed_disk_type: cdktf.stringToTerraform(struct!.managedDiskType),
    name: cdktf.stringToTerraform(struct!.name),
    os_type: cdktf.stringToTerraform(struct!.osType),
    vhd_uri: cdktf.stringToTerraform(struct!.vhdUri),
    write_accelerator_enabled: cdktf.booleanToTerraform(struct!.writeAcceleratorEnabled),
  }
}

export class VirtualMachineStorageOsDiskOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // caching - computed: true, optional: true, required: false
  private _caching?: string | undefined; 
  public get caching() {
    return this.getStringAttribute('caching');
  }
  public set caching(value: string | undefined) {
    this._caching = value;
  }
  public resetCaching() {
    this._caching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachingInput() {
    return this._caching
  }

  // create_option - computed: false, optional: false, required: true
  private _createOption?: string; 
  public get createOption() {
    return this.getStringAttribute('create_option');
  }
  public set createOption(value: string) {
    this._createOption = value;
  }
  // Temporarily expose input value. Use with caution.
  public get createOptionInput() {
    return this._createOption
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

  // image_uri - computed: false, optional: true, required: false
  private _imageUri?: string | undefined; 
  public get imageUri() {
    return this.getStringAttribute('image_uri');
  }
  public set imageUri(value: string | undefined) {
    this._imageUri = value;
  }
  public resetImageUri() {
    this._imageUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUriInput() {
    return this._imageUri
  }

  // managed_disk_id - computed: true, optional: true, required: false
  private _managedDiskId?: string | undefined; 
  public get managedDiskId() {
    return this.getStringAttribute('managed_disk_id');
  }
  public set managedDiskId(value: string | undefined) {
    this._managedDiskId = value;
  }
  public resetManagedDiskId() {
    this._managedDiskId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedDiskIdInput() {
    return this._managedDiskId
  }

  // managed_disk_type - computed: true, optional: true, required: false
  private _managedDiskType?: string | undefined; 
  public get managedDiskType() {
    return this.getStringAttribute('managed_disk_type');
  }
  public set managedDiskType(value: string | undefined) {
    this._managedDiskType = value;
  }
  public resetManagedDiskType() {
    this._managedDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedDiskTypeInput() {
    return this._managedDiskType
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

  // os_type - computed: true, optional: true, required: false
  private _osType?: string | undefined; 
  public get osType() {
    return this.getStringAttribute('os_type');
  }
  public set osType(value: string | undefined) {
    this._osType = value;
  }
  public resetOsType() {
    this._osType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osTypeInput() {
    return this._osType
  }

  // vhd_uri - computed: false, optional: true, required: false
  private _vhdUri?: string | undefined; 
  public get vhdUri() {
    return this.getStringAttribute('vhd_uri');
  }
  public set vhdUri(value: string | undefined) {
    this._vhdUri = value;
  }
  public resetVhdUri() {
    this._vhdUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vhdUriInput() {
    return this._vhdUri
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
}
export interface VirtualMachineTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#create VirtualMachine#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#delete VirtualMachine#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#read VirtualMachine#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html#update VirtualMachine#update}
  */
  readonly update?: string;
}

function virtualMachineTimeoutsToTerraform(struct?: VirtualMachineTimeoutsOutputReference | VirtualMachineTimeouts): any {
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

export class VirtualMachineTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html azurerm_virtual_machine}
*/
export class VirtualMachine extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_virtual_machine";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html azurerm_virtual_machine} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualMachineConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualMachineConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_virtual_machine',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._availabilitySetId = config.availabilitySetId;
    this._deleteDataDisksOnTermination = config.deleteDataDisksOnTermination;
    this._deleteOsDiskOnTermination = config.deleteOsDiskOnTermination;
    this._licenseType = config.licenseType;
    this._location = config.location;
    this._name = config.name;
    this._networkInterfaceIds = config.networkInterfaceIds;
    this._primaryNetworkInterfaceId = config.primaryNetworkInterfaceId;
    this._proximityPlacementGroupId = config.proximityPlacementGroupId;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._vmSize = config.vmSize;
    this._zones = config.zones;
    this._additionalCapabilities = config.additionalCapabilities;
    this._bootDiagnostics = config.bootDiagnostics;
    this._identity = config.identity;
    this._osProfile = config.osProfile;
    this._osProfileLinuxConfig = config.osProfileLinuxConfig;
    this._osProfileSecrets = config.osProfileSecrets;
    this._osProfileWindowsConfig = config.osProfileWindowsConfig;
    this._plan = config.plan;
    this._storageDataDisk = config.storageDataDisk;
    this._storageImageReference = config.storageImageReference;
    this._storageOsDisk = config.storageOsDisk;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_set_id - computed: true, optional: true, required: false
  private _availabilitySetId?: string | undefined; 
  public get availabilitySetId() {
    return this.getStringAttribute('availability_set_id');
  }
  public set availabilitySetId(value: string | undefined) {
    this._availabilitySetId = value;
  }
  public resetAvailabilitySetId() {
    this._availabilitySetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilitySetIdInput() {
    return this._availabilitySetId
  }

  // delete_data_disks_on_termination - computed: false, optional: true, required: false
  private _deleteDataDisksOnTermination?: boolean | cdktf.IResolvable | undefined; 
  public get deleteDataDisksOnTermination() {
    return this.getBooleanAttribute('delete_data_disks_on_termination') as any;
  }
  public set deleteDataDisksOnTermination(value: boolean | cdktf.IResolvable | undefined) {
    this._deleteDataDisksOnTermination = value;
  }
  public resetDeleteDataDisksOnTermination() {
    this._deleteDataDisksOnTermination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteDataDisksOnTerminationInput() {
    return this._deleteDataDisksOnTermination
  }

  // delete_os_disk_on_termination - computed: false, optional: true, required: false
  private _deleteOsDiskOnTermination?: boolean | cdktf.IResolvable | undefined; 
  public get deleteOsDiskOnTermination() {
    return this.getBooleanAttribute('delete_os_disk_on_termination') as any;
  }
  public set deleteOsDiskOnTermination(value: boolean | cdktf.IResolvable | undefined) {
    this._deleteOsDiskOnTermination = value;
  }
  public resetDeleteOsDiskOnTermination() {
    this._deleteOsDiskOnTermination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteOsDiskOnTerminationInput() {
    return this._deleteOsDiskOnTermination
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // license_type - computed: true, optional: true, required: false
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

  // network_interface_ids - computed: false, optional: false, required: true
  private _networkInterfaceIds?: string[]; 
  public get networkInterfaceIds() {
    return this.getListAttribute('network_interface_ids');
  }
  public set networkInterfaceIds(value: string[]) {
    this._networkInterfaceIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceIdsInput() {
    return this._networkInterfaceIds
  }

  // primary_network_interface_id - computed: false, optional: true, required: false
  private _primaryNetworkInterfaceId?: string | undefined; 
  public get primaryNetworkInterfaceId() {
    return this.getStringAttribute('primary_network_interface_id');
  }
  public set primaryNetworkInterfaceId(value: string | undefined) {
    this._primaryNetworkInterfaceId = value;
  }
  public resetPrimaryNetworkInterfaceId() {
    this._primaryNetworkInterfaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryNetworkInterfaceIdInput() {
    return this._primaryNetworkInterfaceId
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

  // vm_size - computed: false, optional: false, required: true
  private _vmSize?: string; 
  public get vmSize() {
    return this.getStringAttribute('vm_size');
  }
  public set vmSize(value: string) {
    this._vmSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmSizeInput() {
    return this._vmSize
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

  // additional_capabilities - computed: false, optional: true, required: false
  private _additionalCapabilities?: VirtualMachineAdditionalCapabilities | undefined; 
  private __additionalCapabilitiesOutput = new VirtualMachineAdditionalCapabilitiesOutputReference(this as any, "additional_capabilities", true);
  public get additionalCapabilities() {
    return this.__additionalCapabilitiesOutput;
  }
  public putAdditionalCapabilities(value: VirtualMachineAdditionalCapabilities | undefined) {
    this._additionalCapabilities = value;
  }
  public resetAdditionalCapabilities() {
    this._additionalCapabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalCapabilitiesInput() {
    return this._additionalCapabilities
  }

  // boot_diagnostics - computed: false, optional: true, required: false
  private _bootDiagnostics?: VirtualMachineBootDiagnostics | undefined; 
  private __bootDiagnosticsOutput = new VirtualMachineBootDiagnosticsOutputReference(this as any, "boot_diagnostics", true);
  public get bootDiagnostics() {
    return this.__bootDiagnosticsOutput;
  }
  public putBootDiagnostics(value: VirtualMachineBootDiagnostics | undefined) {
    this._bootDiagnostics = value;
  }
  public resetBootDiagnostics() {
    this._bootDiagnostics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiagnosticsInput() {
    return this._bootDiagnostics
  }

  // identity - computed: false, optional: true, required: false
  private _identity?: VirtualMachineIdentity | undefined; 
  private __identityOutput = new VirtualMachineIdentityOutputReference(this as any, "identity", true);
  public get identity() {
    return this.__identityOutput;
  }
  public putIdentity(value: VirtualMachineIdentity | undefined) {
    this._identity = value;
  }
  public resetIdentity() {
    this._identity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity
  }

  // os_profile - computed: false, optional: true, required: false
  private _osProfile?: VirtualMachineOsProfile | undefined; 
  private __osProfileOutput = new VirtualMachineOsProfileOutputReference(this as any, "os_profile", true);
  public get osProfile() {
    return this.__osProfileOutput;
  }
  public putOsProfile(value: VirtualMachineOsProfile | undefined) {
    this._osProfile = value;
  }
  public resetOsProfile() {
    this._osProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osProfileInput() {
    return this._osProfile
  }

  // os_profile_linux_config - computed: false, optional: true, required: false
  private _osProfileLinuxConfig?: VirtualMachineOsProfileLinuxConfig | undefined; 
  private __osProfileLinuxConfigOutput = new VirtualMachineOsProfileLinuxConfigOutputReference(this as any, "os_profile_linux_config", true);
  public get osProfileLinuxConfig() {
    return this.__osProfileLinuxConfigOutput;
  }
  public putOsProfileLinuxConfig(value: VirtualMachineOsProfileLinuxConfig | undefined) {
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
  private _osProfileSecrets?: VirtualMachineOsProfileSecrets[] | undefined; 
  public get osProfileSecrets() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('os_profile_secrets') as any;
  }
  public set osProfileSecrets(value: VirtualMachineOsProfileSecrets[] | undefined) {
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
  private _osProfileWindowsConfig?: VirtualMachineOsProfileWindowsConfig | undefined; 
  private __osProfileWindowsConfigOutput = new VirtualMachineOsProfileWindowsConfigOutputReference(this as any, "os_profile_windows_config", true);
  public get osProfileWindowsConfig() {
    return this.__osProfileWindowsConfigOutput;
  }
  public putOsProfileWindowsConfig(value: VirtualMachineOsProfileWindowsConfig | undefined) {
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
  private _plan?: VirtualMachinePlan | undefined; 
  private __planOutput = new VirtualMachinePlanOutputReference(this as any, "plan", true);
  public get plan() {
    return this.__planOutput;
  }
  public putPlan(value: VirtualMachinePlan | undefined) {
    this._plan = value;
  }
  public resetPlan() {
    this._plan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan
  }

  // storage_data_disk - computed: false, optional: true, required: false
  private _storageDataDisk?: VirtualMachineStorageDataDisk[] | undefined; 
  public get storageDataDisk() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('storage_data_disk') as any;
  }
  public set storageDataDisk(value: VirtualMachineStorageDataDisk[] | undefined) {
    this._storageDataDisk = value;
  }
  public resetStorageDataDisk() {
    this._storageDataDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageDataDiskInput() {
    return this._storageDataDisk
  }

  // storage_image_reference - computed: false, optional: true, required: false
  private _storageImageReference?: VirtualMachineStorageImageReference | undefined; 
  private __storageImageReferenceOutput = new VirtualMachineStorageImageReferenceOutputReference(this as any, "storage_image_reference", true);
  public get storageImageReference() {
    return this.__storageImageReferenceOutput;
  }
  public putStorageImageReference(value: VirtualMachineStorageImageReference | undefined) {
    this._storageImageReference = value;
  }
  public resetStorageImageReference() {
    this._storageImageReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageImageReferenceInput() {
    return this._storageImageReference
  }

  // storage_os_disk - computed: false, optional: false, required: true
  private _storageOsDisk?: VirtualMachineStorageOsDisk; 
  private __storageOsDiskOutput = new VirtualMachineStorageOsDiskOutputReference(this as any, "storage_os_disk", true);
  public get storageOsDisk() {
    return this.__storageOsDiskOutput;
  }
  public putStorageOsDisk(value: VirtualMachineStorageOsDisk) {
    this._storageOsDisk = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageOsDiskInput() {
    return this._storageOsDisk
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VirtualMachineTimeouts | undefined; 
  private __timeoutsOutput = new VirtualMachineTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: VirtualMachineTimeouts | undefined) {
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
      availability_set_id: cdktf.stringToTerraform(this._availabilitySetId),
      delete_data_disks_on_termination: cdktf.booleanToTerraform(this._deleteDataDisksOnTermination),
      delete_os_disk_on_termination: cdktf.booleanToTerraform(this._deleteOsDiskOnTermination),
      license_type: cdktf.stringToTerraform(this._licenseType),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      network_interface_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._networkInterfaceIds),
      primary_network_interface_id: cdktf.stringToTerraform(this._primaryNetworkInterfaceId),
      proximity_placement_group_id: cdktf.stringToTerraform(this._proximityPlacementGroupId),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      vm_size: cdktf.stringToTerraform(this._vmSize),
      zones: cdktf.listMapper(cdktf.stringToTerraform)(this._zones),
      additional_capabilities: virtualMachineAdditionalCapabilitiesToTerraform(this._additionalCapabilities),
      boot_diagnostics: virtualMachineBootDiagnosticsToTerraform(this._bootDiagnostics),
      identity: virtualMachineIdentityToTerraform(this._identity),
      os_profile: virtualMachineOsProfileToTerraform(this._osProfile),
      os_profile_linux_config: virtualMachineOsProfileLinuxConfigToTerraform(this._osProfileLinuxConfig),
      os_profile_secrets: cdktf.listMapper(virtualMachineOsProfileSecretsToTerraform)(this._osProfileSecrets),
      os_profile_windows_config: virtualMachineOsProfileWindowsConfigToTerraform(this._osProfileWindowsConfig),
      plan: virtualMachinePlanToTerraform(this._plan),
      storage_data_disk: cdktf.listMapper(virtualMachineStorageDataDiskToTerraform)(this._storageDataDisk),
      storage_image_reference: virtualMachineStorageImageReferenceToTerraform(this._storageImageReference),
      storage_os_disk: virtualMachineStorageOsDiskToTerraform(this._storageOsDisk),
      timeouts: virtualMachineTimeoutsToTerraform(this._timeouts),
    };
  }
}
