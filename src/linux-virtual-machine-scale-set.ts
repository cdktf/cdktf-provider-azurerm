// https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine_scale_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LinuxVirtualMachineScaleSetConfig extends cdktf.TerraformMetaArguments {
  readonly adminPassword?: string;
  readonly adminUsername: string;
  readonly computerNamePrefix?: string;
  readonly customData?: string;
  readonly disablePasswordAuthentication?: boolean;
  readonly doNotRunExtensionsOnOverprovisionedMachines?: boolean;
  readonly encryptionAtHostEnabled?: boolean;
  readonly evictionPolicy?: string;
  readonly healthProbeId?: string;
  readonly instances: number;
  readonly location: string;
  readonly maxBidPrice?: number;
  readonly name: string;
  readonly overprovision?: boolean;
  readonly platformFaultDomainCount?: number;
  readonly priority?: string;
  readonly provisionVmAgent?: boolean;
  readonly proximityPlacementGroupId?: string;
  readonly resourceGroupName: string;
  readonly scaleInPolicy?: string;
  readonly singlePlacementGroup?: boolean;
  readonly sku: string;
  readonly sourceImageId?: string;
  readonly tags?: { [key: string]: string };
  readonly upgradeMode?: string;
  readonly zoneBalance?: boolean;
  readonly zones?: string[];
  /** additional_capabilities block */
  readonly additionalCapabilities?: LinuxVirtualMachineScaleSetAdditionalCapabilities[];
  /** admin_ssh_key block */
  readonly adminSshKey?: LinuxVirtualMachineScaleSetAdminSshKey[];
  /** automatic_instance_repair block */
  readonly automaticInstanceRepair?: LinuxVirtualMachineScaleSetAutomaticInstanceRepair[];
  /** automatic_os_upgrade_policy block */
  readonly automaticOsUpgradePolicy?: LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy[];
  /** boot_diagnostics block */
  readonly bootDiagnostics?: LinuxVirtualMachineScaleSetBootDiagnostics[];
  /** data_disk block */
  readonly dataDisk?: LinuxVirtualMachineScaleSetDataDisk[];
  /** extension block */
  readonly extension?: LinuxVirtualMachineScaleSetExtension[];
  /** identity block */
  readonly identity?: LinuxVirtualMachineScaleSetIdentity[];
  /** network_interface block */
  readonly networkInterface: LinuxVirtualMachineScaleSetNetworkInterface[];
  /** os_disk block */
  readonly osDisk: LinuxVirtualMachineScaleSetOsDisk[];
  /** plan block */
  readonly plan?: LinuxVirtualMachineScaleSetPlan[];
  /** rolling_upgrade_policy block */
  readonly rollingUpgradePolicy?: LinuxVirtualMachineScaleSetRollingUpgradePolicy[];
  /** secret block */
  readonly secret?: LinuxVirtualMachineScaleSetSecret[];
  /** source_image_reference block */
  readonly sourceImageReference?: LinuxVirtualMachineScaleSetSourceImageReference[];
  /** terminate_notification block */
  readonly terminateNotification?: LinuxVirtualMachineScaleSetTerminateNotification[];
  /** timeouts block */
  readonly timeouts?: LinuxVirtualMachineScaleSetTimeouts;
}
export interface LinuxVirtualMachineScaleSetAdditionalCapabilities {
  readonly ultraSsdEnabled?: boolean;
}

function linuxVirtualMachineScaleSetAdditionalCapabilitiesToTerraform(struct?: LinuxVirtualMachineScaleSetAdditionalCapabilities): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ultra_ssd_enabled: cdktf.booleanToTerraform(struct!.ultraSsdEnabled),
  }
}

export interface LinuxVirtualMachineScaleSetAdminSshKey {
  readonly publicKey: string;
  readonly username: string;
}

function linuxVirtualMachineScaleSetAdminSshKeyToTerraform(struct?: LinuxVirtualMachineScaleSetAdminSshKey): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    public_key: cdktf.stringToTerraform(struct!.publicKey),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export interface LinuxVirtualMachineScaleSetAutomaticInstanceRepair {
  readonly enabled: boolean;
  readonly gracePeriod?: string;
}

function linuxVirtualMachineScaleSetAutomaticInstanceRepairToTerraform(struct?: LinuxVirtualMachineScaleSetAutomaticInstanceRepair): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    grace_period: cdktf.stringToTerraform(struct!.gracePeriod),
  }
}

export interface LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy {
  readonly disableAutomaticRollback: boolean;
  readonly enableAutomaticOsUpgrade: boolean;
}

function linuxVirtualMachineScaleSetAutomaticOsUpgradePolicyToTerraform(struct?: LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    disable_automatic_rollback: cdktf.booleanToTerraform(struct!.disableAutomaticRollback),
    enable_automatic_os_upgrade: cdktf.booleanToTerraform(struct!.enableAutomaticOsUpgrade),
  }
}

export interface LinuxVirtualMachineScaleSetBootDiagnostics {
  readonly storageAccountUri?: string;
}

function linuxVirtualMachineScaleSetBootDiagnosticsToTerraform(struct?: LinuxVirtualMachineScaleSetBootDiagnostics): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    storage_account_uri: cdktf.stringToTerraform(struct!.storageAccountUri),
  }
}

export interface LinuxVirtualMachineScaleSetDataDisk {
  readonly caching: string;
  readonly createOption?: string;
  readonly diskEncryptionSetId?: string;
  readonly diskIopsReadWrite?: number;
  readonly diskMbpsReadWrite?: number;
  readonly diskSizeGb: number;
  readonly lun: number;
  readonly storageAccountType: string;
  readonly writeAcceleratorEnabled?: boolean;
}

function linuxVirtualMachineScaleSetDataDiskToTerraform(struct?: LinuxVirtualMachineScaleSetDataDisk): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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

export interface LinuxVirtualMachineScaleSetExtension {
  readonly autoUpgradeMinorVersion?: boolean;
  readonly forceUpdateTag?: string;
  readonly name: string;
  readonly protectedSettings?: string;
  readonly provisionAfterExtensions?: string[];
  readonly publisher: string;
  readonly settings?: string;
  readonly type: string;
  readonly typeHandlerVersion: string;
}

function linuxVirtualMachineScaleSetExtensionToTerraform(struct?: LinuxVirtualMachineScaleSetExtension): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    auto_upgrade_minor_version: cdktf.booleanToTerraform(struct!.autoUpgradeMinorVersion),
    force_update_tag: cdktf.stringToTerraform(struct!.forceUpdateTag),
    name: cdktf.stringToTerraform(struct!.name),
    protected_settings: cdktf.stringToTerraform(struct!.protectedSettings),
    provision_after_extensions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.provisionAfterExtensions),
    publisher: cdktf.stringToTerraform(struct!.publisher),
    settings: cdktf.stringToTerraform(struct!.settings),
    type: cdktf.stringToTerraform(struct!.type),
    type_handler_version: cdktf.stringToTerraform(struct!.typeHandlerVersion),
  }
}

export interface LinuxVirtualMachineScaleSetIdentity {
  readonly identityIds?: string[];
  readonly type: string;
}

function linuxVirtualMachineScaleSetIdentityToTerraform(struct?: LinuxVirtualMachineScaleSetIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag {
  readonly tag: string;
  readonly type: string;
}

function linuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagToTerraform(struct?: LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    tag: cdktf.stringToTerraform(struct!.tag),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress {
  readonly domainNameLabel?: string;
  readonly idleTimeoutInMinutes?: number;
  readonly name: string;
  readonly publicIpPrefixId?: string;
  /** ip_tag block */
  readonly ipTag?: LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag[];
}

function linuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressToTerraform(struct?: LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    domain_name_label: cdktf.stringToTerraform(struct!.domainNameLabel),
    idle_timeout_in_minutes: cdktf.numberToTerraform(struct!.idleTimeoutInMinutes),
    name: cdktf.stringToTerraform(struct!.name),
    public_ip_prefix_id: cdktf.stringToTerraform(struct!.publicIpPrefixId),
    ip_tag: cdktf.listMapper(linuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagToTerraform)(struct!.ipTag),
  }
}

export interface LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration {
  readonly applicationGatewayBackendAddressPoolIds?: string[];
  readonly applicationSecurityGroupIds?: string[];
  readonly loadBalancerBackendAddressPoolIds?: string[];
  readonly loadBalancerInboundNatRulesIds?: string[];
  readonly name: string;
  readonly primary?: boolean;
  readonly subnetId?: string;
  readonly version?: string;
  /** public_ip_address block */
  readonly publicIpAddress?: LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress[];
}

function linuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationToTerraform(struct?: LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    application_gateway_backend_address_pool_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.applicationGatewayBackendAddressPoolIds),
    application_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.applicationSecurityGroupIds),
    load_balancer_backend_address_pool_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.loadBalancerBackendAddressPoolIds),
    load_balancer_inbound_nat_rules_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.loadBalancerInboundNatRulesIds),
    name: cdktf.stringToTerraform(struct!.name),
    primary: cdktf.booleanToTerraform(struct!.primary),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    version: cdktf.stringToTerraform(struct!.version),
    public_ip_address: cdktf.listMapper(linuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressToTerraform)(struct!.publicIpAddress),
  }
}

export interface LinuxVirtualMachineScaleSetNetworkInterface {
  readonly dnsServers?: string[];
  readonly enableAcceleratedNetworking?: boolean;
  readonly enableIpForwarding?: boolean;
  readonly name: string;
  readonly networkSecurityGroupId?: string;
  readonly primary?: boolean;
  /** ip_configuration block */
  readonly ipConfiguration: LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration[];
}

function linuxVirtualMachineScaleSetNetworkInterfaceToTerraform(struct?: LinuxVirtualMachineScaleSetNetworkInterface): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dns_servers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.dnsServers),
    enable_accelerated_networking: cdktf.booleanToTerraform(struct!.enableAcceleratedNetworking),
    enable_ip_forwarding: cdktf.booleanToTerraform(struct!.enableIpForwarding),
    name: cdktf.stringToTerraform(struct!.name),
    network_security_group_id: cdktf.stringToTerraform(struct!.networkSecurityGroupId),
    primary: cdktf.booleanToTerraform(struct!.primary),
    ip_configuration: cdktf.listMapper(linuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationToTerraform)(struct!.ipConfiguration),
  }
}

export interface LinuxVirtualMachineScaleSetOsDiskDiffDiskSettings {
  readonly option: string;
}

function linuxVirtualMachineScaleSetOsDiskDiffDiskSettingsToTerraform(struct?: LinuxVirtualMachineScaleSetOsDiskDiffDiskSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    option: cdktf.stringToTerraform(struct!.option),
  }
}

export interface LinuxVirtualMachineScaleSetOsDisk {
  readonly caching: string;
  readonly diskEncryptionSetId?: string;
  readonly diskSizeGb?: number;
  readonly storageAccountType: string;
  readonly writeAcceleratorEnabled?: boolean;
  /** diff_disk_settings block */
  readonly diffDiskSettings?: LinuxVirtualMachineScaleSetOsDiskDiffDiskSettings[];
}

function linuxVirtualMachineScaleSetOsDiskToTerraform(struct?: LinuxVirtualMachineScaleSetOsDisk): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    caching: cdktf.stringToTerraform(struct!.caching),
    disk_encryption_set_id: cdktf.stringToTerraform(struct!.diskEncryptionSetId),
    disk_size_gb: cdktf.numberToTerraform(struct!.diskSizeGb),
    storage_account_type: cdktf.stringToTerraform(struct!.storageAccountType),
    write_accelerator_enabled: cdktf.booleanToTerraform(struct!.writeAcceleratorEnabled),
    diff_disk_settings: cdktf.listMapper(linuxVirtualMachineScaleSetOsDiskDiffDiskSettingsToTerraform)(struct!.diffDiskSettings),
  }
}

export interface LinuxVirtualMachineScaleSetPlan {
  readonly name: string;
  readonly product: string;
  readonly publisher: string;
}

function linuxVirtualMachineScaleSetPlanToTerraform(struct?: LinuxVirtualMachineScaleSetPlan): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    product: cdktf.stringToTerraform(struct!.product),
    publisher: cdktf.stringToTerraform(struct!.publisher),
  }
}

export interface LinuxVirtualMachineScaleSetRollingUpgradePolicy {
  readonly maxBatchInstancePercent: number;
  readonly maxUnhealthyInstancePercent: number;
  readonly maxUnhealthyUpgradedInstancePercent: number;
  readonly pauseTimeBetweenBatches: string;
}

function linuxVirtualMachineScaleSetRollingUpgradePolicyToTerraform(struct?: LinuxVirtualMachineScaleSetRollingUpgradePolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_batch_instance_percent: cdktf.numberToTerraform(struct!.maxBatchInstancePercent),
    max_unhealthy_instance_percent: cdktf.numberToTerraform(struct!.maxUnhealthyInstancePercent),
    max_unhealthy_upgraded_instance_percent: cdktf.numberToTerraform(struct!.maxUnhealthyUpgradedInstancePercent),
    pause_time_between_batches: cdktf.stringToTerraform(struct!.pauseTimeBetweenBatches),
  }
}

export interface LinuxVirtualMachineScaleSetSecretCertificate {
  readonly url: string;
}

function linuxVirtualMachineScaleSetSecretCertificateToTerraform(struct?: LinuxVirtualMachineScaleSetSecretCertificate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}

export interface LinuxVirtualMachineScaleSetSecret {
  readonly keyVaultId: string;
  /** certificate block */
  readonly certificate: LinuxVirtualMachineScaleSetSecretCertificate[];
}

function linuxVirtualMachineScaleSetSecretToTerraform(struct?: LinuxVirtualMachineScaleSetSecret): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key_vault_id: cdktf.stringToTerraform(struct!.keyVaultId),
    certificate: cdktf.listMapper(linuxVirtualMachineScaleSetSecretCertificateToTerraform)(struct!.certificate),
  }
}

export interface LinuxVirtualMachineScaleSetSourceImageReference {
  readonly offer: string;
  readonly publisher: string;
  readonly sku: string;
  readonly version: string;
}

function linuxVirtualMachineScaleSetSourceImageReferenceToTerraform(struct?: LinuxVirtualMachineScaleSetSourceImageReference): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    offer: cdktf.stringToTerraform(struct!.offer),
    publisher: cdktf.stringToTerraform(struct!.publisher),
    sku: cdktf.stringToTerraform(struct!.sku),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export interface LinuxVirtualMachineScaleSetTerminateNotification {
  readonly enabled: boolean;
  readonly timeout?: string;
}

function linuxVirtualMachineScaleSetTerminateNotificationToTerraform(struct?: LinuxVirtualMachineScaleSetTerminateNotification): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}

export interface LinuxVirtualMachineScaleSetTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function linuxVirtualMachineScaleSetTimeoutsToTerraform(struct?: LinuxVirtualMachineScaleSetTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class LinuxVirtualMachineScaleSet extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LinuxVirtualMachineScaleSetConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_linux_virtual_machine_scale_set',
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
    this._computerNamePrefix = config.computerNamePrefix;
    this._customData = config.customData;
    this._disablePasswordAuthentication = config.disablePasswordAuthentication;
    this._doNotRunExtensionsOnOverprovisionedMachines = config.doNotRunExtensionsOnOverprovisionedMachines;
    this._encryptionAtHostEnabled = config.encryptionAtHostEnabled;
    this._evictionPolicy = config.evictionPolicy;
    this._healthProbeId = config.healthProbeId;
    this._instances = config.instances;
    this._location = config.location;
    this._maxBidPrice = config.maxBidPrice;
    this._name = config.name;
    this._overprovision = config.overprovision;
    this._platformFaultDomainCount = config.platformFaultDomainCount;
    this._priority = config.priority;
    this._provisionVmAgent = config.provisionVmAgent;
    this._proximityPlacementGroupId = config.proximityPlacementGroupId;
    this._resourceGroupName = config.resourceGroupName;
    this._scaleInPolicy = config.scaleInPolicy;
    this._singlePlacementGroup = config.singlePlacementGroup;
    this._sku = config.sku;
    this._sourceImageId = config.sourceImageId;
    this._tags = config.tags;
    this._upgradeMode = config.upgradeMode;
    this._zoneBalance = config.zoneBalance;
    this._zones = config.zones;
    this._additionalCapabilities = config.additionalCapabilities;
    this._adminSshKey = config.adminSshKey;
    this._automaticInstanceRepair = config.automaticInstanceRepair;
    this._automaticOsUpgradePolicy = config.automaticOsUpgradePolicy;
    this._bootDiagnostics = config.bootDiagnostics;
    this._dataDisk = config.dataDisk;
    this._extension = config.extension;
    this._identity = config.identity;
    this._networkInterface = config.networkInterface;
    this._osDisk = config.osDisk;
    this._plan = config.plan;
    this._rollingUpgradePolicy = config.rollingUpgradePolicy;
    this._secret = config.secret;
    this._sourceImageReference = config.sourceImageReference;
    this._terminateNotification = config.terminateNotification;
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

  // computer_name_prefix - computed: true, optional: true, required: false
  private _computerNamePrefix?: string;
  public get computerNamePrefix() {
    return this.getStringAttribute('computer_name_prefix');
  }
  public set computerNamePrefix(value: string) {
    this._computerNamePrefix = value;
  }
  public resetComputerNamePrefix() {
    this._computerNamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computerNamePrefixInput() {
    return this._computerNamePrefix
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

  // do_not_run_extensions_on_overprovisioned_machines - computed: false, optional: true, required: false
  private _doNotRunExtensionsOnOverprovisionedMachines?: boolean;
  public get doNotRunExtensionsOnOverprovisionedMachines() {
    return this.getBooleanAttribute('do_not_run_extensions_on_overprovisioned_machines');
  }
  public set doNotRunExtensionsOnOverprovisionedMachines(value: boolean ) {
    this._doNotRunExtensionsOnOverprovisionedMachines = value;
  }
  public resetDoNotRunExtensionsOnOverprovisionedMachines() {
    this._doNotRunExtensionsOnOverprovisionedMachines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doNotRunExtensionsOnOverprovisionedMachinesInput() {
    return this._doNotRunExtensionsOnOverprovisionedMachines
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

  // instances - computed: false, optional: false, required: true
  private _instances: number;
  public get instances() {
    return this.getNumberAttribute('instances');
  }
  public set instances(value: number) {
    this._instances = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances
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

  // platform_fault_domain_count - computed: true, optional: true, required: false
  private _platformFaultDomainCount?: number;
  public get platformFaultDomainCount() {
    return this.getNumberAttribute('platform_fault_domain_count');
  }
  public set platformFaultDomainCount(value: number) {
    this._platformFaultDomainCount = value;
  }
  public resetPlatformFaultDomainCount() {
    this._platformFaultDomainCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformFaultDomainCountInput() {
    return this._platformFaultDomainCount
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

  // scale_in_policy - computed: false, optional: true, required: false
  private _scaleInPolicy?: string;
  public get scaleInPolicy() {
    return this.getStringAttribute('scale_in_policy');
  }
  public set scaleInPolicy(value: string ) {
    this._scaleInPolicy = value;
  }
  public resetScaleInPolicy() {
    this._scaleInPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleInPolicyInput() {
    return this._scaleInPolicy
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

  // sku - computed: false, optional: false, required: true
  private _sku: string;
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

  // unique_id - computed: true, optional: false, required: false
  public get uniqueId() {
    return this.getStringAttribute('unique_id');
  }

  // upgrade_mode - computed: false, optional: true, required: false
  private _upgradeMode?: string;
  public get upgradeMode() {
    return this.getStringAttribute('upgrade_mode');
  }
  public set upgradeMode(value: string ) {
    this._upgradeMode = value;
  }
  public resetUpgradeMode() {
    this._upgradeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeModeInput() {
    return this._upgradeMode
  }

  // zone_balance - computed: false, optional: true, required: false
  private _zoneBalance?: boolean;
  public get zoneBalance() {
    return this.getBooleanAttribute('zone_balance');
  }
  public set zoneBalance(value: boolean ) {
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

  // additional_capabilities - computed: false, optional: true, required: false
  private _additionalCapabilities?: LinuxVirtualMachineScaleSetAdditionalCapabilities[];
  public get additionalCapabilities() {
    return this.interpolationForAttribute('additional_capabilities') as any;
  }
  public set additionalCapabilities(value: LinuxVirtualMachineScaleSetAdditionalCapabilities[] ) {
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
  private _adminSshKey?: LinuxVirtualMachineScaleSetAdminSshKey[];
  public get adminSshKey() {
    return this.interpolationForAttribute('admin_ssh_key') as any;
  }
  public set adminSshKey(value: LinuxVirtualMachineScaleSetAdminSshKey[] ) {
    this._adminSshKey = value;
  }
  public resetAdminSshKey() {
    this._adminSshKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminSshKeyInput() {
    return this._adminSshKey
  }

  // automatic_instance_repair - computed: false, optional: true, required: false
  private _automaticInstanceRepair?: LinuxVirtualMachineScaleSetAutomaticInstanceRepair[];
  public get automaticInstanceRepair() {
    return this.interpolationForAttribute('automatic_instance_repair') as any;
  }
  public set automaticInstanceRepair(value: LinuxVirtualMachineScaleSetAutomaticInstanceRepair[] ) {
    this._automaticInstanceRepair = value;
  }
  public resetAutomaticInstanceRepair() {
    this._automaticInstanceRepair = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticInstanceRepairInput() {
    return this._automaticInstanceRepair
  }

  // automatic_os_upgrade_policy - computed: false, optional: true, required: false
  private _automaticOsUpgradePolicy?: LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy[];
  public get automaticOsUpgradePolicy() {
    return this.interpolationForAttribute('automatic_os_upgrade_policy') as any;
  }
  public set automaticOsUpgradePolicy(value: LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy[] ) {
    this._automaticOsUpgradePolicy = value;
  }
  public resetAutomaticOsUpgradePolicy() {
    this._automaticOsUpgradePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticOsUpgradePolicyInput() {
    return this._automaticOsUpgradePolicy
  }

  // boot_diagnostics - computed: false, optional: true, required: false
  private _bootDiagnostics?: LinuxVirtualMachineScaleSetBootDiagnostics[];
  public get bootDiagnostics() {
    return this.interpolationForAttribute('boot_diagnostics') as any;
  }
  public set bootDiagnostics(value: LinuxVirtualMachineScaleSetBootDiagnostics[] ) {
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
  private _dataDisk?: LinuxVirtualMachineScaleSetDataDisk[];
  public get dataDisk() {
    return this.interpolationForAttribute('data_disk') as any;
  }
  public set dataDisk(value: LinuxVirtualMachineScaleSetDataDisk[] ) {
    this._dataDisk = value;
  }
  public resetDataDisk() {
    this._dataDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDiskInput() {
    return this._dataDisk
  }

  // extension - computed: false, optional: true, required: false
  private _extension?: LinuxVirtualMachineScaleSetExtension[];
  public get extension() {
    return this.interpolationForAttribute('extension') as any;
  }
  public set extension(value: LinuxVirtualMachineScaleSetExtension[] ) {
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
  private _identity?: LinuxVirtualMachineScaleSetIdentity[];
  public get identity() {
    return this.interpolationForAttribute('identity') as any;
  }
  public set identity(value: LinuxVirtualMachineScaleSetIdentity[] ) {
    this._identity = value;
  }
  public resetIdentity() {
    this._identity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity
  }

  // network_interface - computed: false, optional: false, required: true
  private _networkInterface: LinuxVirtualMachineScaleSetNetworkInterface[];
  public get networkInterface() {
    return this.interpolationForAttribute('network_interface') as any;
  }
  public set networkInterface(value: LinuxVirtualMachineScaleSetNetworkInterface[]) {
    this._networkInterface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceInput() {
    return this._networkInterface
  }

  // os_disk - computed: false, optional: false, required: true
  private _osDisk: LinuxVirtualMachineScaleSetOsDisk[];
  public get osDisk() {
    return this.interpolationForAttribute('os_disk') as any;
  }
  public set osDisk(value: LinuxVirtualMachineScaleSetOsDisk[]) {
    this._osDisk = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osDiskInput() {
    return this._osDisk
  }

  // plan - computed: false, optional: true, required: false
  private _plan?: LinuxVirtualMachineScaleSetPlan[];
  public get plan() {
    return this.interpolationForAttribute('plan') as any;
  }
  public set plan(value: LinuxVirtualMachineScaleSetPlan[] ) {
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
  private _rollingUpgradePolicy?: LinuxVirtualMachineScaleSetRollingUpgradePolicy[];
  public get rollingUpgradePolicy() {
    return this.interpolationForAttribute('rolling_upgrade_policy') as any;
  }
  public set rollingUpgradePolicy(value: LinuxVirtualMachineScaleSetRollingUpgradePolicy[] ) {
    this._rollingUpgradePolicy = value;
  }
  public resetRollingUpgradePolicy() {
    this._rollingUpgradePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingUpgradePolicyInput() {
    return this._rollingUpgradePolicy
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: LinuxVirtualMachineScaleSetSecret[];
  public get secret() {
    return this.interpolationForAttribute('secret') as any;
  }
  public set secret(value: LinuxVirtualMachineScaleSetSecret[] ) {
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
  private _sourceImageReference?: LinuxVirtualMachineScaleSetSourceImageReference[];
  public get sourceImageReference() {
    return this.interpolationForAttribute('source_image_reference') as any;
  }
  public set sourceImageReference(value: LinuxVirtualMachineScaleSetSourceImageReference[] ) {
    this._sourceImageReference = value;
  }
  public resetSourceImageReference() {
    this._sourceImageReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceImageReferenceInput() {
    return this._sourceImageReference
  }

  // terminate_notification - computed: false, optional: true, required: false
  private _terminateNotification?: LinuxVirtualMachineScaleSetTerminateNotification[];
  public get terminateNotification() {
    return this.interpolationForAttribute('terminate_notification') as any;
  }
  public set terminateNotification(value: LinuxVirtualMachineScaleSetTerminateNotification[] ) {
    this._terminateNotification = value;
  }
  public resetTerminateNotification() {
    this._terminateNotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminateNotificationInput() {
    return this._terminateNotification
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LinuxVirtualMachineScaleSetTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: LinuxVirtualMachineScaleSetTimeouts ) {
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
      computer_name_prefix: cdktf.stringToTerraform(this._computerNamePrefix),
      custom_data: cdktf.stringToTerraform(this._customData),
      disable_password_authentication: cdktf.booleanToTerraform(this._disablePasswordAuthentication),
      do_not_run_extensions_on_overprovisioned_machines: cdktf.booleanToTerraform(this._doNotRunExtensionsOnOverprovisionedMachines),
      encryption_at_host_enabled: cdktf.booleanToTerraform(this._encryptionAtHostEnabled),
      eviction_policy: cdktf.stringToTerraform(this._evictionPolicy),
      health_probe_id: cdktf.stringToTerraform(this._healthProbeId),
      instances: cdktf.numberToTerraform(this._instances),
      location: cdktf.stringToTerraform(this._location),
      max_bid_price: cdktf.numberToTerraform(this._maxBidPrice),
      name: cdktf.stringToTerraform(this._name),
      overprovision: cdktf.booleanToTerraform(this._overprovision),
      platform_fault_domain_count: cdktf.numberToTerraform(this._platformFaultDomainCount),
      priority: cdktf.stringToTerraform(this._priority),
      provision_vm_agent: cdktf.booleanToTerraform(this._provisionVmAgent),
      proximity_placement_group_id: cdktf.stringToTerraform(this._proximityPlacementGroupId),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      scale_in_policy: cdktf.stringToTerraform(this._scaleInPolicy),
      single_placement_group: cdktf.booleanToTerraform(this._singlePlacementGroup),
      sku: cdktf.stringToTerraform(this._sku),
      source_image_id: cdktf.stringToTerraform(this._sourceImageId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      upgrade_mode: cdktf.stringToTerraform(this._upgradeMode),
      zone_balance: cdktf.booleanToTerraform(this._zoneBalance),
      zones: cdktf.listMapper(cdktf.stringToTerraform)(this._zones),
      additional_capabilities: cdktf.listMapper(linuxVirtualMachineScaleSetAdditionalCapabilitiesToTerraform)(this._additionalCapabilities),
      admin_ssh_key: cdktf.listMapper(linuxVirtualMachineScaleSetAdminSshKeyToTerraform)(this._adminSshKey),
      automatic_instance_repair: cdktf.listMapper(linuxVirtualMachineScaleSetAutomaticInstanceRepairToTerraform)(this._automaticInstanceRepair),
      automatic_os_upgrade_policy: cdktf.listMapper(linuxVirtualMachineScaleSetAutomaticOsUpgradePolicyToTerraform)(this._automaticOsUpgradePolicy),
      boot_diagnostics: cdktf.listMapper(linuxVirtualMachineScaleSetBootDiagnosticsToTerraform)(this._bootDiagnostics),
      data_disk: cdktf.listMapper(linuxVirtualMachineScaleSetDataDiskToTerraform)(this._dataDisk),
      extension: cdktf.listMapper(linuxVirtualMachineScaleSetExtensionToTerraform)(this._extension),
      identity: cdktf.listMapper(linuxVirtualMachineScaleSetIdentityToTerraform)(this._identity),
      network_interface: cdktf.listMapper(linuxVirtualMachineScaleSetNetworkInterfaceToTerraform)(this._networkInterface),
      os_disk: cdktf.listMapper(linuxVirtualMachineScaleSetOsDiskToTerraform)(this._osDisk),
      plan: cdktf.listMapper(linuxVirtualMachineScaleSetPlanToTerraform)(this._plan),
      rolling_upgrade_policy: cdktf.listMapper(linuxVirtualMachineScaleSetRollingUpgradePolicyToTerraform)(this._rollingUpgradePolicy),
      secret: cdktf.listMapper(linuxVirtualMachineScaleSetSecretToTerraform)(this._secret),
      source_image_reference: cdktf.listMapper(linuxVirtualMachineScaleSetSourceImageReferenceToTerraform)(this._sourceImageReference),
      terminate_notification: cdktf.listMapper(linuxVirtualMachineScaleSetTerminateNotificationToTerraform)(this._terminateNotification),
      timeouts: linuxVirtualMachineScaleSetTimeoutsToTerraform(this._timeouts),
    };
  }
}
