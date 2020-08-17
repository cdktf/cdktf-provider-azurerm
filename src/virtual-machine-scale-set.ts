// https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface VirtualMachineScaleSetConfig extends TerraformMetaArguments {
  readonly automaticOsUpgrade?: boolean;
  readonly evictionPolicy?: string;
  readonly healthProbeId?: string;
  readonly licenseType?: string;
  readonly location: string;
  readonly name: string;
  readonly overprovision?: boolean;
  readonly priority?: string;
  readonly proximityPlacementGroupId?: string;
  readonly resourceGroupName: string;
  readonly singlePlacementGroup?: boolean;
  readonly tags?: { [key: string]: string };
  readonly upgradePolicyMode: string;
  readonly zones?: string[];
  /** boot_diagnostics block */
  readonly bootDiagnostics?: VirtualMachineScaleSetBootDiagnostics[];
  /** extension block */
  readonly extension?: VirtualMachineScaleSetExtension[];
  /** identity block */
  readonly identity?: VirtualMachineScaleSetIdentity[];
  /** network_profile block */
  readonly networkProfile: VirtualMachineScaleSetNetworkProfile[];
  /** os_profile block */
  readonly osProfile: VirtualMachineScaleSetOsProfile[];
  /** os_profile_linux_config block */
  readonly osProfileLinuxConfig?: VirtualMachineScaleSetOsProfileLinuxConfig[];
  /** os_profile_secrets block */
  readonly osProfileSecrets?: VirtualMachineScaleSetOsProfileSecrets[];
  /** os_profile_windows_config block */
  readonly osProfileWindowsConfig?: VirtualMachineScaleSetOsProfileWindowsConfig[];
  /** plan block */
  readonly plan?: VirtualMachineScaleSetPlan[];
  /** rolling_upgrade_policy block */
  readonly rollingUpgradePolicy?: VirtualMachineScaleSetRollingUpgradePolicy[];
  /** sku block */
  readonly sku: VirtualMachineScaleSetSku[];
  /** storage_profile_data_disk block */
  readonly storageProfileDataDisk?: VirtualMachineScaleSetStorageProfileDataDisk[];
  /** storage_profile_image_reference block */
  readonly storageProfileImageReference?: VirtualMachineScaleSetStorageProfileImageReference[];
  /** storage_profile_os_disk block */
  readonly storageProfileOsDisk: VirtualMachineScaleSetStorageProfileOsDisk[];
  /** timeouts block */
  readonly timeouts?: VirtualMachineScaleSetTimeouts;
}
export interface VirtualMachineScaleSetBootDiagnostics {
  readonly enabled?: boolean;
  readonly storageUri: string;
}
export interface VirtualMachineScaleSetExtension {
  readonly autoUpgradeMinorVersion?: boolean;
  readonly name: string;
  readonly protectedSettings?: string;
  readonly provisionAfterExtensions?: string[];
  readonly publisher: string;
  readonly settings?: string;
  readonly type: string;
  readonly typeHandlerVersion: string;
}
export interface VirtualMachineScaleSetIdentity {
  readonly identityIds?: string[];
  readonly type: string;
}
export interface VirtualMachineScaleSetNetworkProfileDnsSettings {
  readonly dnsServers: string[];
}
export interface VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfiguration {
  readonly domainNameLabel: string;
  readonly idleTimeout: number;
  readonly name: string;
}
export interface VirtualMachineScaleSetNetworkProfileIpConfiguration {
  readonly applicationGatewayBackendAddressPoolIds?: string[];
  readonly applicationSecurityGroupIds?: string[];
  readonly loadBalancerBackendAddressPoolIds?: string[];
  readonly loadBalancerInboundNatRulesIds?: string[];
  readonly name: string;
  readonly primary: boolean;
  readonly subnetId: string;
  /** public_ip_address_configuration block */
  readonly publicIpAddressConfiguration?: VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfiguration[];
}
export interface VirtualMachineScaleSetNetworkProfile {
  readonly acceleratedNetworking?: boolean;
  readonly ipForwarding?: boolean;
  readonly name: string;
  readonly networkSecurityGroupId?: string;
  readonly primary: boolean;
  /** dns_settings block */
  readonly dnsSettings?: VirtualMachineScaleSetNetworkProfileDnsSettings[];
  /** ip_configuration block */
  readonly ipConfiguration: VirtualMachineScaleSetNetworkProfileIpConfiguration[];
}
export interface VirtualMachineScaleSetOsProfile {
  readonly adminPassword?: string;
  readonly adminUsername: string;
  readonly computerNamePrefix: string;
  readonly customData?: string;
}
export interface VirtualMachineScaleSetOsProfileLinuxConfigSshKeys {
  readonly keyData?: string;
  readonly path: string;
}
export interface VirtualMachineScaleSetOsProfileLinuxConfig {
  readonly disablePasswordAuthentication?: boolean;
  /** ssh_keys block */
  readonly sshKeys?: VirtualMachineScaleSetOsProfileLinuxConfigSshKeys[];
}
export interface VirtualMachineScaleSetOsProfileSecretsVaultCertificates {
  readonly certificateStore?: string;
  readonly certificateUrl: string;
}
export interface VirtualMachineScaleSetOsProfileSecrets {
  readonly sourceVaultId: string;
  /** vault_certificates block */
  readonly vaultCertificates?: VirtualMachineScaleSetOsProfileSecretsVaultCertificates[];
}
export interface VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfig {
  readonly component: string;
  readonly content: string;
  readonly pass: string;
  readonly settingName: string;
}
export interface VirtualMachineScaleSetOsProfileWindowsConfigWinrm {
  readonly certificateUrl?: string;
  readonly protocol: string;
}
export interface VirtualMachineScaleSetOsProfileWindowsConfig {
  readonly enableAutomaticUpgrades?: boolean;
  readonly provisionVmAgent?: boolean;
  /** additional_unattend_config block */
  readonly additionalUnattendConfig?: VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfig[];
  /** winrm block */
  readonly winrm?: VirtualMachineScaleSetOsProfileWindowsConfigWinrm[];
}
export interface VirtualMachineScaleSetPlan {
  readonly name: string;
  readonly product: string;
  readonly publisher: string;
}
export interface VirtualMachineScaleSetRollingUpgradePolicy {
  readonly maxBatchInstancePercent?: number;
  readonly maxUnhealthyInstancePercent?: number;
  readonly maxUnhealthyUpgradedInstancePercent?: number;
  readonly pauseTimeBetweenBatches?: string;
}
export interface VirtualMachineScaleSetSku {
  readonly capacity: number;
  readonly name: string;
  readonly tier?: string;
}
export interface VirtualMachineScaleSetStorageProfileDataDisk {
  readonly caching?: string;
  readonly createOption: string;
  readonly diskSizeGb?: number;
  readonly lun: number;
  readonly managedDiskType?: string;
}
export interface VirtualMachineScaleSetStorageProfileImageReference {
  readonly id?: string;
  readonly offer?: string;
  readonly publisher?: string;
  readonly sku?: string;
  readonly version?: string;
}
export interface VirtualMachineScaleSetStorageProfileOsDisk {
  readonly caching?: string;
  readonly createOption: string;
  readonly image?: string;
  readonly managedDiskType?: string;
  readonly name?: string;
  readonly osType?: string;
  readonly vhdContainers?: string[];
}
export interface VirtualMachineScaleSetTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class VirtualMachineScaleSet extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    return this._automaticOsUpgrade;
  }
  public set automaticOsUpgrade(value: boolean | undefined) {
    this._automaticOsUpgrade = value;
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

  // license_type - computed: true, optional: true, required: false
  private _licenseType?: string;
  public get licenseType() {
    return this._licenseType ?? this.getStringAttribute('license_type');
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // upgrade_policy_mode - computed: false, optional: false, required: true
  private _upgradePolicyMode: string;
  public get upgradePolicyMode() {
    return this._upgradePolicyMode;
  }
  public set upgradePolicyMode(value: string) {
    this._upgradePolicyMode = value;
  }

  // zones - computed: false, optional: true, required: false
  private _zones?: string[];
  public get zones() {
    return this._zones;
  }
  public set zones(value: string[] | undefined) {
    this._zones = value;
  }

  // boot_diagnostics - computed: false, optional: true, required: false
  private _bootDiagnostics?: VirtualMachineScaleSetBootDiagnostics[];
  public get bootDiagnostics() {
    return this._bootDiagnostics;
  }
  public set bootDiagnostics(value: VirtualMachineScaleSetBootDiagnostics[] | undefined) {
    this._bootDiagnostics = value;
  }

  // extension - computed: false, optional: true, required: false
  private _extension?: VirtualMachineScaleSetExtension[];
  public get extension() {
    return this._extension;
  }
  public set extension(value: VirtualMachineScaleSetExtension[] | undefined) {
    this._extension = value;
  }

  // identity - computed: false, optional: true, required: false
  private _identity?: VirtualMachineScaleSetIdentity[];
  public get identity() {
    return this._identity;
  }
  public set identity(value: VirtualMachineScaleSetIdentity[] | undefined) {
    this._identity = value;
  }

  // network_profile - computed: false, optional: false, required: true
  private _networkProfile: VirtualMachineScaleSetNetworkProfile[];
  public get networkProfile() {
    return this._networkProfile;
  }
  public set networkProfile(value: VirtualMachineScaleSetNetworkProfile[]) {
    this._networkProfile = value;
  }

  // os_profile - computed: false, optional: false, required: true
  private _osProfile: VirtualMachineScaleSetOsProfile[];
  public get osProfile() {
    return this._osProfile;
  }
  public set osProfile(value: VirtualMachineScaleSetOsProfile[]) {
    this._osProfile = value;
  }

  // os_profile_linux_config - computed: false, optional: true, required: false
  private _osProfileLinuxConfig?: VirtualMachineScaleSetOsProfileLinuxConfig[];
  public get osProfileLinuxConfig() {
    return this._osProfileLinuxConfig;
  }
  public set osProfileLinuxConfig(value: VirtualMachineScaleSetOsProfileLinuxConfig[] | undefined) {
    this._osProfileLinuxConfig = value;
  }

  // os_profile_secrets - computed: false, optional: true, required: false
  private _osProfileSecrets?: VirtualMachineScaleSetOsProfileSecrets[];
  public get osProfileSecrets() {
    return this._osProfileSecrets;
  }
  public set osProfileSecrets(value: VirtualMachineScaleSetOsProfileSecrets[] | undefined) {
    this._osProfileSecrets = value;
  }

  // os_profile_windows_config - computed: false, optional: true, required: false
  private _osProfileWindowsConfig?: VirtualMachineScaleSetOsProfileWindowsConfig[];
  public get osProfileWindowsConfig() {
    return this._osProfileWindowsConfig;
  }
  public set osProfileWindowsConfig(value: VirtualMachineScaleSetOsProfileWindowsConfig[] | undefined) {
    this._osProfileWindowsConfig = value;
  }

  // plan - computed: false, optional: true, required: false
  private _plan?: VirtualMachineScaleSetPlan[];
  public get plan() {
    return this._plan;
  }
  public set plan(value: VirtualMachineScaleSetPlan[] | undefined) {
    this._plan = value;
  }

  // rolling_upgrade_policy - computed: false, optional: true, required: false
  private _rollingUpgradePolicy?: VirtualMachineScaleSetRollingUpgradePolicy[];
  public get rollingUpgradePolicy() {
    return this._rollingUpgradePolicy;
  }
  public set rollingUpgradePolicy(value: VirtualMachineScaleSetRollingUpgradePolicy[] | undefined) {
    this._rollingUpgradePolicy = value;
  }

  // sku - computed: false, optional: false, required: true
  private _sku: VirtualMachineScaleSetSku[];
  public get sku() {
    return this._sku;
  }
  public set sku(value: VirtualMachineScaleSetSku[]) {
    this._sku = value;
  }

  // storage_profile_data_disk - computed: false, optional: true, required: false
  private _storageProfileDataDisk?: VirtualMachineScaleSetStorageProfileDataDisk[];
  public get storageProfileDataDisk() {
    return this._storageProfileDataDisk;
  }
  public set storageProfileDataDisk(value: VirtualMachineScaleSetStorageProfileDataDisk[] | undefined) {
    this._storageProfileDataDisk = value;
  }

  // storage_profile_image_reference - computed: false, optional: true, required: false
  private _storageProfileImageReference?: VirtualMachineScaleSetStorageProfileImageReference[];
  public get storageProfileImageReference() {
    return this._storageProfileImageReference;
  }
  public set storageProfileImageReference(value: VirtualMachineScaleSetStorageProfileImageReference[] | undefined) {
    this._storageProfileImageReference = value;
  }

  // storage_profile_os_disk - computed: false, optional: false, required: true
  private _storageProfileOsDisk: VirtualMachineScaleSetStorageProfileOsDisk[];
  public get storageProfileOsDisk() {
    return this._storageProfileOsDisk;
  }
  public set storageProfileOsDisk(value: VirtualMachineScaleSetStorageProfileOsDisk[]) {
    this._storageProfileOsDisk = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VirtualMachineScaleSetTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: VirtualMachineScaleSetTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      automatic_os_upgrade: this._automaticOsUpgrade,
      eviction_policy: this._evictionPolicy,
      health_probe_id: this._healthProbeId,
      license_type: this._licenseType,
      location: this._location,
      name: this._name,
      overprovision: this._overprovision,
      priority: this._priority,
      proximity_placement_group_id: this._proximityPlacementGroupId,
      resource_group_name: this._resourceGroupName,
      single_placement_group: this._singlePlacementGroup,
      tags: this._tags,
      upgrade_policy_mode: this._upgradePolicyMode,
      zones: this._zones,
      boot_diagnostics: this._bootDiagnostics,
      extension: this._extension,
      identity: this._identity,
      network_profile: this._networkProfile,
      os_profile: this._osProfile,
      os_profile_linux_config: this._osProfileLinuxConfig,
      os_profile_secrets: this._osProfileSecrets,
      os_profile_windows_config: this._osProfileWindowsConfig,
      plan: this._plan,
      rolling_upgrade_policy: this._rollingUpgradePolicy,
      sku: this._sku,
      storage_profile_data_disk: this._storageProfileDataDisk,
      storage_profile_image_reference: this._storageProfileImageReference,
      storage_profile_os_disk: this._storageProfileOsDisk,
      timeouts: this._timeouts,
    };
  }
}
