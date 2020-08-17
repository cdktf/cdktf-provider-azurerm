// https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine_scale_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface LinuxVirtualMachineScaleSetConfig extends TerraformMetaArguments {
  readonly adminPassword?: string;
  readonly adminUsername: string;
  readonly computerNamePrefix?: string;
  readonly customData?: string;
  readonly disablePasswordAuthentication?: boolean;
  readonly doNotRunExtensionsOnOverprovisionedMachines?: boolean;
  readonly evictionPolicy?: string;
  readonly healthProbeId?: string;
  readonly instances: number;
  readonly location: string;
  readonly maxBidPrice?: number;
  readonly name: string;
  readonly overprovision?: boolean;
  readonly priority?: string;
  readonly provisionVmAgent?: boolean;
  readonly proximityPlacementGroupId?: string;
  readonly resourceGroupName: string;
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
  /** automatic_os_upgrade_policy block */
  readonly automaticOsUpgradePolicy?: LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy[];
  /** boot_diagnostics block */
  readonly bootDiagnostics?: LinuxVirtualMachineScaleSetBootDiagnostics[];
  /** data_disk block */
  readonly dataDisk?: LinuxVirtualMachineScaleSetDataDisk[];
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
  /** timeouts block */
  readonly timeouts?: LinuxVirtualMachineScaleSetTimeouts;
}
export interface LinuxVirtualMachineScaleSetAdditionalCapabilities {
  readonly ultraSsdEnabled?: boolean;
}
export interface LinuxVirtualMachineScaleSetAdminSshKey {
  readonly publicKey: string;
  readonly username: string;
}
export interface LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy {
  readonly disableAutomaticRollback: boolean;
  readonly enableAutomaticOsUpgrade: boolean;
}
export interface LinuxVirtualMachineScaleSetBootDiagnostics {
  readonly storageAccountUri: string;
}
export interface LinuxVirtualMachineScaleSetDataDisk {
  readonly caching: string;
  readonly diskEncryptionSetId?: string;
  readonly diskSizeGb: number;
  readonly lun: number;
  readonly storageAccountType: string;
  readonly writeAcceleratorEnabled?: boolean;
}
export interface LinuxVirtualMachineScaleSetIdentity {
  readonly identityIds?: string[];
  readonly type: string;
}
export interface LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag {
  readonly tag: string;
  readonly type: string;
}
export interface LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress {
  readonly domainNameLabel?: string;
  readonly idleTimeoutInMinutes?: number;
  readonly name: string;
  readonly publicIpPrefixId?: string;
  /** ip_tag block */
  readonly ipTag?: LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag[];
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
export interface LinuxVirtualMachineScaleSetOsDiskDiffDiskSettings {
  readonly option: string;
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
export interface LinuxVirtualMachineScaleSetPlan {
  readonly name: string;
  readonly product: string;
  readonly publisher: string;
}
export interface LinuxVirtualMachineScaleSetRollingUpgradePolicy {
  readonly maxBatchInstancePercent: number;
  readonly maxUnhealthyInstancePercent: number;
  readonly maxUnhealthyUpgradedInstancePercent: number;
  readonly pauseTimeBetweenBatches: string;
}
export interface LinuxVirtualMachineScaleSetSecretCertificate {
  readonly url: string;
}
export interface LinuxVirtualMachineScaleSetSecret {
  readonly keyVaultId: string;
  /** certificate block */
  readonly certificate: LinuxVirtualMachineScaleSetSecretCertificate[];
}
export interface LinuxVirtualMachineScaleSetSourceImageReference {
  readonly offer: string;
  readonly publisher: string;
  readonly sku: string;
  readonly version: string;
}
export interface LinuxVirtualMachineScaleSetTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class LinuxVirtualMachineScaleSet extends TerraformResource {

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
    this._evictionPolicy = config.evictionPolicy;
    this._healthProbeId = config.healthProbeId;
    this._instances = config.instances;
    this._location = config.location;
    this._maxBidPrice = config.maxBidPrice;
    this._name = config.name;
    this._overprovision = config.overprovision;
    this._priority = config.priority;
    this._provisionVmAgent = config.provisionVmAgent;
    this._proximityPlacementGroupId = config.proximityPlacementGroupId;
    this._resourceGroupName = config.resourceGroupName;
    this._singlePlacementGroup = config.singlePlacementGroup;
    this._sku = config.sku;
    this._sourceImageId = config.sourceImageId;
    this._tags = config.tags;
    this._upgradeMode = config.upgradeMode;
    this._zoneBalance = config.zoneBalance;
    this._zones = config.zones;
    this._additionalCapabilities = config.additionalCapabilities;
    this._adminSshKey = config.adminSshKey;
    this._automaticOsUpgradePolicy = config.automaticOsUpgradePolicy;
    this._bootDiagnostics = config.bootDiagnostics;
    this._dataDisk = config.dataDisk;
    this._identity = config.identity;
    this._networkInterface = config.networkInterface;
    this._osDisk = config.osDisk;
    this._plan = config.plan;
    this._rollingUpgradePolicy = config.rollingUpgradePolicy;
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
    return this._adminPassword;
  }
  public set adminPassword(value: string | undefined) {
    this._adminPassword = value;
  }

  // admin_username - computed: false, optional: false, required: true
  private _adminUsername: string;
  public get adminUsername() {
    return this._adminUsername;
  }
  public set adminUsername(value: string) {
    this._adminUsername = value;
  }

  // computer_name_prefix - computed: true, optional: true, required: false
  private _computerNamePrefix?: string;
  public get computerNamePrefix() {
    return this._computerNamePrefix ?? this.getStringAttribute('computer_name_prefix');
  }
  public set computerNamePrefix(value: string | undefined) {
    this._computerNamePrefix = value;
  }

  // custom_data - computed: false, optional: true, required: false
  private _customData?: string;
  public get customData() {
    return this._customData;
  }
  public set customData(value: string | undefined) {
    this._customData = value;
  }

  // disable_password_authentication - computed: false, optional: true, required: false
  private _disablePasswordAuthentication?: boolean;
  public get disablePasswordAuthentication() {
    return this._disablePasswordAuthentication;
  }
  public set disablePasswordAuthentication(value: boolean | undefined) {
    this._disablePasswordAuthentication = value;
  }

  // do_not_run_extensions_on_overprovisioned_machines - computed: false, optional: true, required: false
  private _doNotRunExtensionsOnOverprovisionedMachines?: boolean;
  public get doNotRunExtensionsOnOverprovisionedMachines() {
    return this._doNotRunExtensionsOnOverprovisionedMachines;
  }
  public set doNotRunExtensionsOnOverprovisionedMachines(value: boolean | undefined) {
    this._doNotRunExtensionsOnOverprovisionedMachines = value;
  }

  // eviction_policy - computed: false, optional: true, required: false
  private _evictionPolicy?: string;
  public get evictionPolicy() {
    return this._evictionPolicy;
  }
  public set evictionPolicy(value: string | undefined) {
    this._evictionPolicy = value;
  }

  // health_probe_id - computed: false, optional: true, required: false
  private _healthProbeId?: string;
  public get healthProbeId() {
    return this._healthProbeId;
  }
  public set healthProbeId(value: string | undefined) {
    this._healthProbeId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // instances - computed: false, optional: false, required: true
  private _instances: number;
  public get instances() {
    return this._instances;
  }
  public set instances(value: number) {
    this._instances = value;
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this._location;
  }
  public set location(value: string) {
    this._location = value;
  }

  // max_bid_price - computed: false, optional: true, required: false
  private _maxBidPrice?: number;
  public get maxBidPrice() {
    return this._maxBidPrice;
  }
  public set maxBidPrice(value: number | undefined) {
    this._maxBidPrice = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // overprovision - computed: false, optional: true, required: false
  private _overprovision?: boolean;
  public get overprovision() {
    return this._overprovision;
  }
  public set overprovision(value: boolean | undefined) {
    this._overprovision = value;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: string;
  public get priority() {
    return this._priority;
  }
  public set priority(value: string | undefined) {
    this._priority = value;
  }

  // provision_vm_agent - computed: false, optional: true, required: false
  private _provisionVmAgent?: boolean;
  public get provisionVmAgent() {
    return this._provisionVmAgent;
  }
  public set provisionVmAgent(value: boolean | undefined) {
    this._provisionVmAgent = value;
  }

  // proximity_placement_group_id - computed: false, optional: true, required: false
  private _proximityPlacementGroupId?: string;
  public get proximityPlacementGroupId() {
    return this._proximityPlacementGroupId;
  }
  public set proximityPlacementGroupId(value: string | undefined) {
    this._proximityPlacementGroupId = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // single_placement_group - computed: false, optional: true, required: false
  private _singlePlacementGroup?: boolean;
  public get singlePlacementGroup() {
    return this._singlePlacementGroup;
  }
  public set singlePlacementGroup(value: boolean | undefined) {
    this._singlePlacementGroup = value;
  }

  // sku - computed: false, optional: false, required: true
  private _sku: string;
  public get sku() {
    return this._sku;
  }
  public set sku(value: string) {
    this._sku = value;
  }

  // source_image_id - computed: false, optional: true, required: false
  private _sourceImageId?: string;
  public get sourceImageId() {
    return this._sourceImageId;
  }
  public set sourceImageId(value: string | undefined) {
    this._sourceImageId = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // unique_id - computed: true, optional: false, required: true
  public get uniqueId() {
    return this.getStringAttribute('unique_id');
  }

  // upgrade_mode - computed: false, optional: true, required: false
  private _upgradeMode?: string;
  public get upgradeMode() {
    return this._upgradeMode;
  }
  public set upgradeMode(value: string | undefined) {
    this._upgradeMode = value;
  }

  // zone_balance - computed: false, optional: true, required: false
  private _zoneBalance?: boolean;
  public get zoneBalance() {
    return this._zoneBalance;
  }
  public set zoneBalance(value: boolean | undefined) {
    this._zoneBalance = value;
  }

  // zones - computed: false, optional: true, required: false
  private _zones?: string[];
  public get zones() {
    return this._zones;
  }
  public set zones(value: string[] | undefined) {
    this._zones = value;
  }

  // additional_capabilities - computed: false, optional: true, required: false
  private _additionalCapabilities?: LinuxVirtualMachineScaleSetAdditionalCapabilities[];
  public get additionalCapabilities() {
    return this._additionalCapabilities;
  }
  public set additionalCapabilities(value: LinuxVirtualMachineScaleSetAdditionalCapabilities[] | undefined) {
    this._additionalCapabilities = value;
  }

  // admin_ssh_key - computed: false, optional: true, required: false
  private _adminSshKey?: LinuxVirtualMachineScaleSetAdminSshKey[];
  public get adminSshKey() {
    return this._adminSshKey;
  }
  public set adminSshKey(value: LinuxVirtualMachineScaleSetAdminSshKey[] | undefined) {
    this._adminSshKey = value;
  }

  // automatic_os_upgrade_policy - computed: false, optional: true, required: false
  private _automaticOsUpgradePolicy?: LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy[];
  public get automaticOsUpgradePolicy() {
    return this._automaticOsUpgradePolicy;
  }
  public set automaticOsUpgradePolicy(value: LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy[] | undefined) {
    this._automaticOsUpgradePolicy = value;
  }

  // boot_diagnostics - computed: false, optional: true, required: false
  private _bootDiagnostics?: LinuxVirtualMachineScaleSetBootDiagnostics[];
  public get bootDiagnostics() {
    return this._bootDiagnostics;
  }
  public set bootDiagnostics(value: LinuxVirtualMachineScaleSetBootDiagnostics[] | undefined) {
    this._bootDiagnostics = value;
  }

  // data_disk - computed: false, optional: true, required: false
  private _dataDisk?: LinuxVirtualMachineScaleSetDataDisk[];
  public get dataDisk() {
    return this._dataDisk;
  }
  public set dataDisk(value: LinuxVirtualMachineScaleSetDataDisk[] | undefined) {
    this._dataDisk = value;
  }

  // identity - computed: false, optional: true, required: false
  private _identity?: LinuxVirtualMachineScaleSetIdentity[];
  public get identity() {
    return this._identity;
  }
  public set identity(value: LinuxVirtualMachineScaleSetIdentity[] | undefined) {
    this._identity = value;
  }

  // network_interface - computed: false, optional: false, required: true
  private _networkInterface: LinuxVirtualMachineScaleSetNetworkInterface[];
  public get networkInterface() {
    return this._networkInterface;
  }
  public set networkInterface(value: LinuxVirtualMachineScaleSetNetworkInterface[]) {
    this._networkInterface = value;
  }

  // os_disk - computed: false, optional: false, required: true
  private _osDisk: LinuxVirtualMachineScaleSetOsDisk[];
  public get osDisk() {
    return this._osDisk;
  }
  public set osDisk(value: LinuxVirtualMachineScaleSetOsDisk[]) {
    this._osDisk = value;
  }

  // plan - computed: false, optional: true, required: false
  private _plan?: LinuxVirtualMachineScaleSetPlan[];
  public get plan() {
    return this._plan;
  }
  public set plan(value: LinuxVirtualMachineScaleSetPlan[] | undefined) {
    this._plan = value;
  }

  // rolling_upgrade_policy - computed: false, optional: true, required: false
  private _rollingUpgradePolicy?: LinuxVirtualMachineScaleSetRollingUpgradePolicy[];
  public get rollingUpgradePolicy() {
    return this._rollingUpgradePolicy;
  }
  public set rollingUpgradePolicy(value: LinuxVirtualMachineScaleSetRollingUpgradePolicy[] | undefined) {
    this._rollingUpgradePolicy = value;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: LinuxVirtualMachineScaleSetSecret[];
  public get secret() {
    return this._secret;
  }
  public set secret(value: LinuxVirtualMachineScaleSetSecret[] | undefined) {
    this._secret = value;
  }

  // source_image_reference - computed: false, optional: true, required: false
  private _sourceImageReference?: LinuxVirtualMachineScaleSetSourceImageReference[];
  public get sourceImageReference() {
    return this._sourceImageReference;
  }
  public set sourceImageReference(value: LinuxVirtualMachineScaleSetSourceImageReference[] | undefined) {
    this._sourceImageReference = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LinuxVirtualMachineScaleSetTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: LinuxVirtualMachineScaleSetTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_password: this._adminPassword,
      admin_username: this._adminUsername,
      computer_name_prefix: this._computerNamePrefix,
      custom_data: this._customData,
      disable_password_authentication: this._disablePasswordAuthentication,
      do_not_run_extensions_on_overprovisioned_machines: this._doNotRunExtensionsOnOverprovisionedMachines,
      eviction_policy: this._evictionPolicy,
      health_probe_id: this._healthProbeId,
      instances: this._instances,
      location: this._location,
      max_bid_price: this._maxBidPrice,
      name: this._name,
      overprovision: this._overprovision,
      priority: this._priority,
      provision_vm_agent: this._provisionVmAgent,
      proximity_placement_group_id: this._proximityPlacementGroupId,
      resource_group_name: this._resourceGroupName,
      single_placement_group: this._singlePlacementGroup,
      sku: this._sku,
      source_image_id: this._sourceImageId,
      tags: this._tags,
      upgrade_mode: this._upgradeMode,
      zone_balance: this._zoneBalance,
      zones: this._zones,
      additional_capabilities: this._additionalCapabilities,
      admin_ssh_key: this._adminSshKey,
      automatic_os_upgrade_policy: this._automaticOsUpgradePolicy,
      boot_diagnostics: this._bootDiagnostics,
      data_disk: this._dataDisk,
      identity: this._identity,
      network_interface: this._networkInterface,
      os_disk: this._osDisk,
      plan: this._plan,
      rolling_upgrade_policy: this._rollingUpgradePolicy,
      secret: this._secret,
      source_image_reference: this._sourceImageReference,
      timeouts: this._timeouts,
    };
  }
}
