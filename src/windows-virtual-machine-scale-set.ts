// https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface WindowsVirtualMachineScaleSetConfig extends TerraformMetaArguments {
  readonly adminPassword: string;
  readonly adminUsername: string;
  readonly computerNamePrefix?: string;
  readonly customData?: string;
  readonly doNotRunExtensionsOnOverprovisionedMachines?: boolean;
  readonly enableAutomaticUpdates?: boolean;
  readonly evictionPolicy?: string;
  readonly healthProbeId?: string;
  readonly instances: number;
  readonly licenseType?: string;
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
  readonly timezone?: string;
  readonly upgradeMode?: string;
  readonly zoneBalance?: boolean;
  readonly zones?: string[];
  /** additional_capabilities block */
  readonly additionalCapabilities?: WindowsVirtualMachineScaleSetAdditionalCapabilities[];
  /** additional_unattend_content block */
  readonly additionalUnattendContent?: WindowsVirtualMachineScaleSetAdditionalUnattendContent[];
  /** automatic_os_upgrade_policy block */
  readonly automaticOsUpgradePolicy?: WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy[];
  /** boot_diagnostics block */
  readonly bootDiagnostics?: WindowsVirtualMachineScaleSetBootDiagnostics[];
  /** data_disk block */
  readonly dataDisk?: WindowsVirtualMachineScaleSetDataDisk[];
  /** identity block */
  readonly identity?: WindowsVirtualMachineScaleSetIdentity[];
  /** network_interface block */
  readonly networkInterface: WindowsVirtualMachineScaleSetNetworkInterface[];
  /** os_disk block */
  readonly osDisk: WindowsVirtualMachineScaleSetOsDisk[];
  /** plan block */
  readonly plan?: WindowsVirtualMachineScaleSetPlan[];
  /** rolling_upgrade_policy block */
  readonly rollingUpgradePolicy?: WindowsVirtualMachineScaleSetRollingUpgradePolicy[];
  /** secret block */
  readonly secret?: WindowsVirtualMachineScaleSetSecret[];
  /** source_image_reference block */
  readonly sourceImageReference?: WindowsVirtualMachineScaleSetSourceImageReference[];
  /** timeouts block */
  readonly timeouts?: WindowsVirtualMachineScaleSetTimeouts;
  /** winrm_listener block */
  readonly winrmListener?: WindowsVirtualMachineScaleSetWinrmListener[];
}
export interface WindowsVirtualMachineScaleSetAdditionalCapabilities {
  readonly ultraSsdEnabled?: boolean;
}
export interface WindowsVirtualMachineScaleSetAdditionalUnattendContent {
  readonly content: string;
  readonly setting: string;
}
export interface WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy {
  readonly disableAutomaticRollback: boolean;
  readonly enableAutomaticOsUpgrade: boolean;
}
export interface WindowsVirtualMachineScaleSetBootDiagnostics {
  readonly storageAccountUri: string;
}
export interface WindowsVirtualMachineScaleSetDataDisk {
  readonly caching: string;
  readonly diskEncryptionSetId?: string;
  readonly diskSizeGb: number;
  readonly lun: number;
  readonly storageAccountType: string;
  readonly writeAcceleratorEnabled?: boolean;
}
export interface WindowsVirtualMachineScaleSetIdentity {
  readonly identityIds?: string[];
  readonly type: string;
}
export interface WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag {
  readonly tag: string;
  readonly type: string;
}
export interface WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress {
  readonly domainNameLabel?: string;
  readonly idleTimeoutInMinutes?: number;
  readonly name: string;
  readonly publicIpPrefixId?: string;
  /** ip_tag block */
  readonly ipTag?: WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag[];
}
export interface WindowsVirtualMachineScaleSetNetworkInterfaceIpConfiguration {
  readonly applicationGatewayBackendAddressPoolIds?: string[];
  readonly applicationSecurityGroupIds?: string[];
  readonly loadBalancerBackendAddressPoolIds?: string[];
  readonly loadBalancerInboundNatRulesIds?: string[];
  readonly name: string;
  readonly primary?: boolean;
  readonly subnetId?: string;
  readonly version?: string;
  /** public_ip_address block */
  readonly publicIpAddress?: WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress[];
}
export interface WindowsVirtualMachineScaleSetNetworkInterface {
  readonly dnsServers?: string[];
  readonly enableAcceleratedNetworking?: boolean;
  readonly enableIpForwarding?: boolean;
  readonly name: string;
  readonly networkSecurityGroupId?: string;
  readonly primary?: boolean;
  /** ip_configuration block */
  readonly ipConfiguration: WindowsVirtualMachineScaleSetNetworkInterfaceIpConfiguration[];
}
export interface WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings {
  readonly option: string;
}
export interface WindowsVirtualMachineScaleSetOsDisk {
  readonly caching: string;
  readonly diskEncryptionSetId?: string;
  readonly diskSizeGb?: number;
  readonly storageAccountType: string;
  readonly writeAcceleratorEnabled?: boolean;
  /** diff_disk_settings block */
  readonly diffDiskSettings?: WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings[];
}
export interface WindowsVirtualMachineScaleSetPlan {
  readonly name: string;
  readonly product: string;
  readonly publisher: string;
}
export interface WindowsVirtualMachineScaleSetRollingUpgradePolicy {
  readonly maxBatchInstancePercent: number;
  readonly maxUnhealthyInstancePercent: number;
  readonly maxUnhealthyUpgradedInstancePercent: number;
  readonly pauseTimeBetweenBatches: string;
}
export interface WindowsVirtualMachineScaleSetSecretCertificate {
  readonly store: string;
  readonly url: string;
}
export interface WindowsVirtualMachineScaleSetSecret {
  readonly keyVaultId: string;
  /** certificate block */
  readonly certificate: WindowsVirtualMachineScaleSetSecretCertificate[];
}
export interface WindowsVirtualMachineScaleSetSourceImageReference {
  readonly offer: string;
  readonly publisher: string;
  readonly sku: string;
  readonly version: string;
}
export interface WindowsVirtualMachineScaleSetTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}
export interface WindowsVirtualMachineScaleSetWinrmListener {
  readonly certificateUrl?: string;
  readonly protocol: string;
}

// Resource

export class WindowsVirtualMachineScaleSet extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: WindowsVirtualMachineScaleSetConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_windows_virtual_machine_scale_set',
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
    this._doNotRunExtensionsOnOverprovisionedMachines = config.doNotRunExtensionsOnOverprovisionedMachines;
    this._enableAutomaticUpdates = config.enableAutomaticUpdates;
    this._evictionPolicy = config.evictionPolicy;
    this._healthProbeId = config.healthProbeId;
    this._instances = config.instances;
    this._licenseType = config.licenseType;
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
    this._timezone = config.timezone;
    this._upgradeMode = config.upgradeMode;
    this._zoneBalance = config.zoneBalance;
    this._zones = config.zones;
    this._additionalCapabilities = config.additionalCapabilities;
    this._additionalUnattendContent = config.additionalUnattendContent;
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
    this._winrmListener = config.winrmListener;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_password - computed: false, optional: false, required: true
  private _adminPassword: string;
  public get adminPassword() {
    return this._adminPassword;
  }
  public set adminPassword(value: string) {
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

  // do_not_run_extensions_on_overprovisioned_machines - computed: false, optional: true, required: false
  private _doNotRunExtensionsOnOverprovisionedMachines?: boolean;
  public get doNotRunExtensionsOnOverprovisionedMachines() {
    return this._doNotRunExtensionsOnOverprovisionedMachines;
  }
  public set doNotRunExtensionsOnOverprovisionedMachines(value: boolean | undefined) {
    this._doNotRunExtensionsOnOverprovisionedMachines = value;
  }

  // enable_automatic_updates - computed: false, optional: true, required: false
  private _enableAutomaticUpdates?: boolean;
  public get enableAutomaticUpdates() {
    return this._enableAutomaticUpdates;
  }
  public set enableAutomaticUpdates(value: boolean | undefined) {
    this._enableAutomaticUpdates = value;
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

  // license_type - computed: false, optional: true, required: false
  private _licenseType?: string;
  public get licenseType() {
    return this._licenseType;
  }
  public set licenseType(value: string | undefined) {
    this._licenseType = value;
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

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string;
  public get timezone() {
    return this._timezone;
  }
  public set timezone(value: string | undefined) {
    this._timezone = value;
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
  private _additionalCapabilities?: WindowsVirtualMachineScaleSetAdditionalCapabilities[];
  public get additionalCapabilities() {
    return this._additionalCapabilities;
  }
  public set additionalCapabilities(value: WindowsVirtualMachineScaleSetAdditionalCapabilities[] | undefined) {
    this._additionalCapabilities = value;
  }

  // additional_unattend_content - computed: false, optional: true, required: false
  private _additionalUnattendContent?: WindowsVirtualMachineScaleSetAdditionalUnattendContent[];
  public get additionalUnattendContent() {
    return this._additionalUnattendContent;
  }
  public set additionalUnattendContent(value: WindowsVirtualMachineScaleSetAdditionalUnattendContent[] | undefined) {
    this._additionalUnattendContent = value;
  }

  // automatic_os_upgrade_policy - computed: false, optional: true, required: false
  private _automaticOsUpgradePolicy?: WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy[];
  public get automaticOsUpgradePolicy() {
    return this._automaticOsUpgradePolicy;
  }
  public set automaticOsUpgradePolicy(value: WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy[] | undefined) {
    this._automaticOsUpgradePolicy = value;
  }

  // boot_diagnostics - computed: false, optional: true, required: false
  private _bootDiagnostics?: WindowsVirtualMachineScaleSetBootDiagnostics[];
  public get bootDiagnostics() {
    return this._bootDiagnostics;
  }
  public set bootDiagnostics(value: WindowsVirtualMachineScaleSetBootDiagnostics[] | undefined) {
    this._bootDiagnostics = value;
  }

  // data_disk - computed: false, optional: true, required: false
  private _dataDisk?: WindowsVirtualMachineScaleSetDataDisk[];
  public get dataDisk() {
    return this._dataDisk;
  }
  public set dataDisk(value: WindowsVirtualMachineScaleSetDataDisk[] | undefined) {
    this._dataDisk = value;
  }

  // identity - computed: false, optional: true, required: false
  private _identity?: WindowsVirtualMachineScaleSetIdentity[];
  public get identity() {
    return this._identity;
  }
  public set identity(value: WindowsVirtualMachineScaleSetIdentity[] | undefined) {
    this._identity = value;
  }

  // network_interface - computed: false, optional: false, required: true
  private _networkInterface: WindowsVirtualMachineScaleSetNetworkInterface[];
  public get networkInterface() {
    return this._networkInterface;
  }
  public set networkInterface(value: WindowsVirtualMachineScaleSetNetworkInterface[]) {
    this._networkInterface = value;
  }

  // os_disk - computed: false, optional: false, required: true
  private _osDisk: WindowsVirtualMachineScaleSetOsDisk[];
  public get osDisk() {
    return this._osDisk;
  }
  public set osDisk(value: WindowsVirtualMachineScaleSetOsDisk[]) {
    this._osDisk = value;
  }

  // plan - computed: false, optional: true, required: false
  private _plan?: WindowsVirtualMachineScaleSetPlan[];
  public get plan() {
    return this._plan;
  }
  public set plan(value: WindowsVirtualMachineScaleSetPlan[] | undefined) {
    this._plan = value;
  }

  // rolling_upgrade_policy - computed: false, optional: true, required: false
  private _rollingUpgradePolicy?: WindowsVirtualMachineScaleSetRollingUpgradePolicy[];
  public get rollingUpgradePolicy() {
    return this._rollingUpgradePolicy;
  }
  public set rollingUpgradePolicy(value: WindowsVirtualMachineScaleSetRollingUpgradePolicy[] | undefined) {
    this._rollingUpgradePolicy = value;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: WindowsVirtualMachineScaleSetSecret[];
  public get secret() {
    return this._secret;
  }
  public set secret(value: WindowsVirtualMachineScaleSetSecret[] | undefined) {
    this._secret = value;
  }

  // source_image_reference - computed: false, optional: true, required: false
  private _sourceImageReference?: WindowsVirtualMachineScaleSetSourceImageReference[];
  public get sourceImageReference() {
    return this._sourceImageReference;
  }
  public set sourceImageReference(value: WindowsVirtualMachineScaleSetSourceImageReference[] | undefined) {
    this._sourceImageReference = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: WindowsVirtualMachineScaleSetTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: WindowsVirtualMachineScaleSetTimeouts | undefined) {
    this._timeouts = value;
  }

  // winrm_listener - computed: false, optional: true, required: false
  private _winrmListener?: WindowsVirtualMachineScaleSetWinrmListener[];
  public get winrmListener() {
    return this._winrmListener;
  }
  public set winrmListener(value: WindowsVirtualMachineScaleSetWinrmListener[] | undefined) {
    this._winrmListener = value;
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
      do_not_run_extensions_on_overprovisioned_machines: this._doNotRunExtensionsOnOverprovisionedMachines,
      enable_automatic_updates: this._enableAutomaticUpdates,
      eviction_policy: this._evictionPolicy,
      health_probe_id: this._healthProbeId,
      instances: this._instances,
      license_type: this._licenseType,
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
      timezone: this._timezone,
      upgrade_mode: this._upgradeMode,
      zone_balance: this._zoneBalance,
      zones: this._zones,
      additional_capabilities: this._additionalCapabilities,
      additional_unattend_content: this._additionalUnattendContent,
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
      winrm_listener: this._winrmListener,
    };
  }
}
