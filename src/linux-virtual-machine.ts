// https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LinuxVirtualMachineConfig extends cdktf.TerraformMetaArguments {
  readonly adminPassword?: string;
  readonly adminUsername: string;
  readonly allowExtensionOperations?: boolean;
  readonly availabilitySetId?: string;
  readonly computerName?: string;
  readonly customData?: string;
  readonly dedicatedHostId?: string;
  readonly disablePasswordAuthentication?: boolean;
  readonly encryptionAtHostEnabled?: boolean;
  readonly evictionPolicy?: string;
  readonly extensionsTimeBudget?: string;
  readonly location: string;
  readonly maxBidPrice?: number;
  readonly name: string;
  readonly networkInterfaceIds: string[];
  readonly priority?: string;
  readonly provisionVmAgent?: boolean;
  readonly proximityPlacementGroupId?: string;
  readonly resourceGroupName: string;
  readonly size: string;
  readonly sourceImageId?: string;
  readonly tags?: { [key: string]: string };
  readonly virtualMachineScaleSetId?: string;
  readonly zone?: string;
  /** additional_capabilities block */
  readonly additionalCapabilities?: LinuxVirtualMachineAdditionalCapabilities[];
  /** admin_ssh_key block */
  readonly adminSshKey?: LinuxVirtualMachineAdminSshKey[];
  /** boot_diagnostics block */
  readonly bootDiagnostics?: LinuxVirtualMachineBootDiagnostics[];
  /** identity block */
  readonly identity?: LinuxVirtualMachineIdentity[];
  /** os_disk block */
  readonly osDisk: LinuxVirtualMachineOsDisk[];
  /** plan block */
  readonly plan?: LinuxVirtualMachinePlan[];
  /** secret block */
  readonly secret?: LinuxVirtualMachineSecret[];
  /** source_image_reference block */
  readonly sourceImageReference?: LinuxVirtualMachineSourceImageReference[];
  /** timeouts block */
  readonly timeouts?: LinuxVirtualMachineTimeouts;
}
export interface LinuxVirtualMachineAdditionalCapabilities {
  readonly ultraSsdEnabled?: boolean;
}

function linuxVirtualMachineAdditionalCapabilitiesToTerraform(struct?: LinuxVirtualMachineAdditionalCapabilities): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ultra_ssd_enabled: cdktf.booleanToTerraform(struct!.ultraSsdEnabled),
  }
}

export interface LinuxVirtualMachineAdminSshKey {
  readonly publicKey: string;
  readonly username: string;
}

function linuxVirtualMachineAdminSshKeyToTerraform(struct?: LinuxVirtualMachineAdminSshKey): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    public_key: cdktf.stringToTerraform(struct!.publicKey),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export interface LinuxVirtualMachineBootDiagnostics {
  readonly storageAccountUri?: string;
}

function linuxVirtualMachineBootDiagnosticsToTerraform(struct?: LinuxVirtualMachineBootDiagnostics): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    storage_account_uri: cdktf.stringToTerraform(struct!.storageAccountUri),
  }
}

export interface LinuxVirtualMachineIdentity {
  readonly identityIds?: string[];
  readonly type: string;
}

function linuxVirtualMachineIdentityToTerraform(struct?: LinuxVirtualMachineIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface LinuxVirtualMachineOsDiskDiffDiskSettings {
  readonly option: string;
}

function linuxVirtualMachineOsDiskDiffDiskSettingsToTerraform(struct?: LinuxVirtualMachineOsDiskDiffDiskSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    option: cdktf.stringToTerraform(struct!.option),
  }
}

export interface LinuxVirtualMachineOsDisk {
  readonly caching: string;
  readonly diskEncryptionSetId?: string;
  readonly diskSizeGb?: number;
  readonly name?: string;
  readonly storageAccountType: string;
  readonly writeAcceleratorEnabled?: boolean;
  /** diff_disk_settings block */
  readonly diffDiskSettings?: LinuxVirtualMachineOsDiskDiffDiskSettings[];
}

function linuxVirtualMachineOsDiskToTerraform(struct?: LinuxVirtualMachineOsDisk): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    caching: cdktf.stringToTerraform(struct!.caching),
    disk_encryption_set_id: cdktf.stringToTerraform(struct!.diskEncryptionSetId),
    disk_size_gb: cdktf.numberToTerraform(struct!.diskSizeGb),
    name: cdktf.stringToTerraform(struct!.name),
    storage_account_type: cdktf.stringToTerraform(struct!.storageAccountType),
    write_accelerator_enabled: cdktf.booleanToTerraform(struct!.writeAcceleratorEnabled),
    diff_disk_settings: cdktf.listMapper(linuxVirtualMachineOsDiskDiffDiskSettingsToTerraform)(struct!.diffDiskSettings),
  }
}

export interface LinuxVirtualMachinePlan {
  readonly name: string;
  readonly product: string;
  readonly publisher: string;
}

function linuxVirtualMachinePlanToTerraform(struct?: LinuxVirtualMachinePlan): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    product: cdktf.stringToTerraform(struct!.product),
    publisher: cdktf.stringToTerraform(struct!.publisher),
  }
}

export interface LinuxVirtualMachineSecretCertificate {
  readonly url: string;
}

function linuxVirtualMachineSecretCertificateToTerraform(struct?: LinuxVirtualMachineSecretCertificate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}

export interface LinuxVirtualMachineSecret {
  readonly keyVaultId: string;
  /** certificate block */
  readonly certificate: LinuxVirtualMachineSecretCertificate[];
}

function linuxVirtualMachineSecretToTerraform(struct?: LinuxVirtualMachineSecret): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key_vault_id: cdktf.stringToTerraform(struct!.keyVaultId),
    certificate: cdktf.listMapper(linuxVirtualMachineSecretCertificateToTerraform)(struct!.certificate),
  }
}

export interface LinuxVirtualMachineSourceImageReference {
  readonly offer: string;
  readonly publisher: string;
  readonly sku: string;
  readonly version: string;
}

function linuxVirtualMachineSourceImageReferenceToTerraform(struct?: LinuxVirtualMachineSourceImageReference): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    offer: cdktf.stringToTerraform(struct!.offer),
    publisher: cdktf.stringToTerraform(struct!.publisher),
    sku: cdktf.stringToTerraform(struct!.sku),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export interface LinuxVirtualMachineTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function linuxVirtualMachineTimeoutsToTerraform(struct?: LinuxVirtualMachineTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class LinuxVirtualMachine extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LinuxVirtualMachineConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_linux_virtual_machine',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._adminPassword = config.adminPassword;
    this._adminUsername = config.adminUsername;
    this._allowExtensionOperations = config.allowExtensionOperations;
    this._availabilitySetId = config.availabilitySetId;
    this._computerName = config.computerName;
    this._customData = config.customData;
    this._dedicatedHostId = config.dedicatedHostId;
    this._disablePasswordAuthentication = config.disablePasswordAuthentication;
    this._encryptionAtHostEnabled = config.encryptionAtHostEnabled;
    this._evictionPolicy = config.evictionPolicy;
    this._extensionsTimeBudget = config.extensionsTimeBudget;
    this._location = config.location;
    this._maxBidPrice = config.maxBidPrice;
    this._name = config.name;
    this._networkInterfaceIds = config.networkInterfaceIds;
    this._priority = config.priority;
    this._provisionVmAgent = config.provisionVmAgent;
    this._proximityPlacementGroupId = config.proximityPlacementGroupId;
    this._resourceGroupName = config.resourceGroupName;
    this._size = config.size;
    this._sourceImageId = config.sourceImageId;
    this._tags = config.tags;
    this._virtualMachineScaleSetId = config.virtualMachineScaleSetId;
    this._zone = config.zone;
    this._additionalCapabilities = config.additionalCapabilities;
    this._adminSshKey = config.adminSshKey;
    this._bootDiagnostics = config.bootDiagnostics;
    this._identity = config.identity;
    this._osDisk = config.osDisk;
    this._plan = config.plan;
    this._secret = config.secret;
    this._sourceImageReference = config.sourceImageReference;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_password - computed: false, optional: true, required: false
  private _adminPassword?: string;
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }
  public set adminPassword(value: string ) {
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
  private _adminUsername: string;
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

  // allow_extension_operations - computed: false, optional: true, required: false
  private _allowExtensionOperations?: boolean;
  public get allowExtensionOperations() {
    return this.getBooleanAttribute('allow_extension_operations');
  }
  public set allowExtensionOperations(value: boolean ) {
    this._allowExtensionOperations = value;
  }
  public resetAllowExtensionOperations() {
    this._allowExtensionOperations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowExtensionOperationsInput() {
    return this._allowExtensionOperations
  }

  // availability_set_id - computed: false, optional: true, required: false
  private _availabilitySetId?: string;
  public get availabilitySetId() {
    return this.getStringAttribute('availability_set_id');
  }
  public set availabilitySetId(value: string ) {
    this._availabilitySetId = value;
  }
  public resetAvailabilitySetId() {
    this._availabilitySetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilitySetIdInput() {
    return this._availabilitySetId
  }

  // computer_name - computed: true, optional: true, required: false
  private _computerName?: string;
  public get computerName() {
    return this.getStringAttribute('computer_name');
  }
  public set computerName(value: string) {
    this._computerName = value;
  }
  public resetComputerName() {
    this._computerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computerNameInput() {
    return this._computerName
  }

  // custom_data - computed: false, optional: true, required: false
  private _customData?: string;
  public get customData() {
    return this.getStringAttribute('custom_data');
  }
  public set customData(value: string ) {
    this._customData = value;
  }
  public resetCustomData() {
    this._customData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDataInput() {
    return this._customData
  }

  // dedicated_host_id - computed: false, optional: true, required: false
  private _dedicatedHostId?: string;
  public get dedicatedHostId() {
    return this.getStringAttribute('dedicated_host_id');
  }
  public set dedicatedHostId(value: string ) {
    this._dedicatedHostId = value;
  }
  public resetDedicatedHostId() {
    this._dedicatedHostId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedHostIdInput() {
    return this._dedicatedHostId
  }

  // disable_password_authentication - computed: false, optional: true, required: false
  private _disablePasswordAuthentication?: boolean;
  public get disablePasswordAuthentication() {
    return this.getBooleanAttribute('disable_password_authentication');
  }
  public set disablePasswordAuthentication(value: boolean ) {
    this._disablePasswordAuthentication = value;
  }
  public resetDisablePasswordAuthentication() {
    this._disablePasswordAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePasswordAuthenticationInput() {
    return this._disablePasswordAuthentication
  }

  // encryption_at_host_enabled - computed: false, optional: true, required: false
  private _encryptionAtHostEnabled?: boolean;
  public get encryptionAtHostEnabled() {
    return this.getBooleanAttribute('encryption_at_host_enabled');
  }
  public set encryptionAtHostEnabled(value: boolean ) {
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

  // extensions_time_budget - computed: false, optional: true, required: false
  private _extensionsTimeBudget?: string;
  public get extensionsTimeBudget() {
    return this.getStringAttribute('extensions_time_budget');
  }
  public set extensionsTimeBudget(value: string ) {
    this._extensionsTimeBudget = value;
  }
  public resetExtensionsTimeBudget() {
    this._extensionsTimeBudget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionsTimeBudgetInput() {
    return this._extensionsTimeBudget
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // max_bid_price - computed: false, optional: true, required: false
  private _maxBidPrice?: number;
  public get maxBidPrice() {
    return this.getNumberAttribute('max_bid_price');
  }
  public set maxBidPrice(value: number ) {
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

  // network_interface_ids - computed: false, optional: false, required: true
  private _networkInterfaceIds: string[];
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

  // private_ip_address - computed: true, optional: false, required: false
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }

  // private_ip_addresses - computed: true, optional: false, required: false
  public get privateIpAddresses() {
    return this.getListAttribute('private_ip_addresses');
  }

  // provision_vm_agent - computed: false, optional: true, required: false
  private _provisionVmAgent?: boolean;
  public get provisionVmAgent() {
    return this.getBooleanAttribute('provision_vm_agent');
  }
  public set provisionVmAgent(value: boolean ) {
    this._provisionVmAgent = value;
  }
  public resetProvisionVmAgent() {
    this._provisionVmAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionVmAgentInput() {
    return this._provisionVmAgent
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

  // public_ip_address - computed: true, optional: false, required: false
  public get publicIpAddress() {
    return this.getStringAttribute('public_ip_address');
  }

  // public_ip_addresses - computed: true, optional: false, required: false
  public get publicIpAddresses() {
    return this.getListAttribute('public_ip_addresses');
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

  // size - computed: false, optional: false, required: true
  private _size: string;
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size
  }

  // source_image_id - computed: false, optional: true, required: false
  private _sourceImageId?: string;
  public get sourceImageId() {
    return this.getStringAttribute('source_image_id');
  }
  public set sourceImageId(value: string ) {
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

  // virtual_machine_id - computed: true, optional: false, required: false
  public get virtualMachineId() {
    return this.getStringAttribute('virtual_machine_id');
  }

  // virtual_machine_scale_set_id - computed: false, optional: true, required: false
  private _virtualMachineScaleSetId?: string;
  public get virtualMachineScaleSetId() {
    return this.getStringAttribute('virtual_machine_scale_set_id');
  }
  public set virtualMachineScaleSetId(value: string ) {
    this._virtualMachineScaleSetId = value;
  }
  public resetVirtualMachineScaleSetId() {
    this._virtualMachineScaleSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMachineScaleSetIdInput() {
    return this._virtualMachineScaleSetId
  }

  // zone - computed: true, optional: true, required: false
  private _zone?: string;
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone
  }

  // additional_capabilities - computed: false, optional: true, required: false
  private _additionalCapabilities?: LinuxVirtualMachineAdditionalCapabilities[];
  public get additionalCapabilities() {
    return this.interpolationForAttribute('additional_capabilities') as any;
  }
  public set additionalCapabilities(value: LinuxVirtualMachineAdditionalCapabilities[] ) {
    this._additionalCapabilities = value;
  }
  public resetAdditionalCapabilities() {
    this._additionalCapabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalCapabilitiesInput() {
    return this._additionalCapabilities
  }

  // admin_ssh_key - computed: false, optional: true, required: false
  private _adminSshKey?: LinuxVirtualMachineAdminSshKey[];
  public get adminSshKey() {
    return this.interpolationForAttribute('admin_ssh_key') as any;
  }
  public set adminSshKey(value: LinuxVirtualMachineAdminSshKey[] ) {
    this._adminSshKey = value;
  }
  public resetAdminSshKey() {
    this._adminSshKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminSshKeyInput() {
    return this._adminSshKey
  }

  // boot_diagnostics - computed: false, optional: true, required: false
  private _bootDiagnostics?: LinuxVirtualMachineBootDiagnostics[];
  public get bootDiagnostics() {
    return this.interpolationForAttribute('boot_diagnostics') as any;
  }
  public set bootDiagnostics(value: LinuxVirtualMachineBootDiagnostics[] ) {
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
  private _identity?: LinuxVirtualMachineIdentity[];
  public get identity() {
    return this.interpolationForAttribute('identity') as any;
  }
  public set identity(value: LinuxVirtualMachineIdentity[] ) {
    this._identity = value;
  }
  public resetIdentity() {
    this._identity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity
  }

  // os_disk - computed: false, optional: false, required: true
  private _osDisk: LinuxVirtualMachineOsDisk[];
  public get osDisk() {
    return this.interpolationForAttribute('os_disk') as any;
  }
  public set osDisk(value: LinuxVirtualMachineOsDisk[]) {
    this._osDisk = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osDiskInput() {
    return this._osDisk
  }

  // plan - computed: false, optional: true, required: false
  private _plan?: LinuxVirtualMachinePlan[];
  public get plan() {
    return this.interpolationForAttribute('plan') as any;
  }
  public set plan(value: LinuxVirtualMachinePlan[] ) {
    this._plan = value;
  }
  public resetPlan() {
    this._plan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: LinuxVirtualMachineSecret[];
  public get secret() {
    return this.interpolationForAttribute('secret') as any;
  }
  public set secret(value: LinuxVirtualMachineSecret[] ) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret
  }

  // source_image_reference - computed: false, optional: true, required: false
  private _sourceImageReference?: LinuxVirtualMachineSourceImageReference[];
  public get sourceImageReference() {
    return this.interpolationForAttribute('source_image_reference') as any;
  }
  public set sourceImageReference(value: LinuxVirtualMachineSourceImageReference[] ) {
    this._sourceImageReference = value;
  }
  public resetSourceImageReference() {
    this._sourceImageReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceImageReferenceInput() {
    return this._sourceImageReference
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LinuxVirtualMachineTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: LinuxVirtualMachineTimeouts ) {
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
      admin_password: cdktf.stringToTerraform(this._adminPassword),
      admin_username: cdktf.stringToTerraform(this._adminUsername),
      allow_extension_operations: cdktf.booleanToTerraform(this._allowExtensionOperations),
      availability_set_id: cdktf.stringToTerraform(this._availabilitySetId),
      computer_name: cdktf.stringToTerraform(this._computerName),
      custom_data: cdktf.stringToTerraform(this._customData),
      dedicated_host_id: cdktf.stringToTerraform(this._dedicatedHostId),
      disable_password_authentication: cdktf.booleanToTerraform(this._disablePasswordAuthentication),
      encryption_at_host_enabled: cdktf.booleanToTerraform(this._encryptionAtHostEnabled),
      eviction_policy: cdktf.stringToTerraform(this._evictionPolicy),
      extensions_time_budget: cdktf.stringToTerraform(this._extensionsTimeBudget),
      location: cdktf.stringToTerraform(this._location),
      max_bid_price: cdktf.numberToTerraform(this._maxBidPrice),
      name: cdktf.stringToTerraform(this._name),
      network_interface_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._networkInterfaceIds),
      priority: cdktf.stringToTerraform(this._priority),
      provision_vm_agent: cdktf.booleanToTerraform(this._provisionVmAgent),
      proximity_placement_group_id: cdktf.stringToTerraform(this._proximityPlacementGroupId),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      size: cdktf.stringToTerraform(this._size),
      source_image_id: cdktf.stringToTerraform(this._sourceImageId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      virtual_machine_scale_set_id: cdktf.stringToTerraform(this._virtualMachineScaleSetId),
      zone: cdktf.stringToTerraform(this._zone),
      additional_capabilities: cdktf.listMapper(linuxVirtualMachineAdditionalCapabilitiesToTerraform)(this._additionalCapabilities),
      admin_ssh_key: cdktf.listMapper(linuxVirtualMachineAdminSshKeyToTerraform)(this._adminSshKey),
      boot_diagnostics: cdktf.listMapper(linuxVirtualMachineBootDiagnosticsToTerraform)(this._bootDiagnostics),
      identity: cdktf.listMapper(linuxVirtualMachineIdentityToTerraform)(this._identity),
      os_disk: cdktf.listMapper(linuxVirtualMachineOsDiskToTerraform)(this._osDisk),
      plan: cdktf.listMapper(linuxVirtualMachinePlanToTerraform)(this._plan),
      secret: cdktf.listMapper(linuxVirtualMachineSecretToTerraform)(this._secret),
      source_image_reference: cdktf.listMapper(linuxVirtualMachineSourceImageReferenceToTerraform)(this._sourceImageReference),
      timeouts: linuxVirtualMachineTimeoutsToTerraform(this._timeouts),
    };
  }
}
