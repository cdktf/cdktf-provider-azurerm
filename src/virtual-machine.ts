// https://www.terraform.io/docs/providers/azurerm/r/virtual_machine.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface VirtualMachineConfig extends TerraformMetaArguments {
  readonly availabilitySetId?: string;
  readonly deleteDataDisksOnTermination?: boolean;
  readonly deleteOsDiskOnTermination?: boolean;
  readonly licenseType?: string;
  readonly location: string;
  readonly name: string;
  readonly networkInterfaceIds: string[];
  readonly primaryNetworkInterfaceId?: string;
  readonly proximityPlacementGroupId?: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  readonly vmSize: string;
  readonly zones?: string[];
  /** additional_capabilities block */
  readonly additionalCapabilities?: VirtualMachineAdditionalCapabilities[];
  /** boot_diagnostics block */
  readonly bootDiagnostics?: VirtualMachineBootDiagnostics[];
  /** identity block */
  readonly identity?: VirtualMachineIdentity[];
  /** os_profile block */
  readonly osProfile?: VirtualMachineOsProfile[];
  /** os_profile_linux_config block */
  readonly osProfileLinuxConfig?: VirtualMachineOsProfileLinuxConfig[];
  /** os_profile_secrets block */
  readonly osProfileSecrets?: VirtualMachineOsProfileSecrets[];
  /** os_profile_windows_config block */
  readonly osProfileWindowsConfig?: VirtualMachineOsProfileWindowsConfig[];
  /** plan block */
  readonly plan?: VirtualMachinePlan[];
  /** storage_data_disk block */
  readonly storageDataDisk?: VirtualMachineStorageDataDisk[];
  /** storage_image_reference block */
  readonly storageImageReference?: VirtualMachineStorageImageReference[];
  /** storage_os_disk block */
  readonly storageOsDisk: VirtualMachineStorageOsDisk[];
  /** timeouts block */
  readonly timeouts?: VirtualMachineTimeouts;
}
export interface VirtualMachineAdditionalCapabilities {
  readonly ultraSsdEnabled: boolean;
}
export interface VirtualMachineBootDiagnostics {
  readonly enabled: boolean;
  readonly storageUri: string;
}
export interface VirtualMachineIdentity {
  readonly identityIds?: string[];
  readonly type: string;
}
export interface VirtualMachineOsProfile {
  readonly adminPassword?: string;
  readonly adminUsername: string;
  readonly computerName: string;
  readonly customData?: string;
}
export interface VirtualMachineOsProfileLinuxConfigSshKeys {
  readonly keyData: string;
  readonly path: string;
}
export interface VirtualMachineOsProfileLinuxConfig {
  readonly disablePasswordAuthentication: boolean;
  /** ssh_keys block */
  readonly sshKeys?: VirtualMachineOsProfileLinuxConfigSshKeys[];
}
export interface VirtualMachineOsProfileSecretsVaultCertificates {
  readonly certificateStore?: string;
  readonly certificateUrl: string;
}
export interface VirtualMachineOsProfileSecrets {
  readonly sourceVaultId: string;
  /** vault_certificates block */
  readonly vaultCertificates?: VirtualMachineOsProfileSecretsVaultCertificates[];
}
export interface VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig {
  readonly component: string;
  readonly content: string;
  readonly pass: string;
  readonly settingName: string;
}
export interface VirtualMachineOsProfileWindowsConfigWinrm {
  readonly certificateUrl?: string;
  readonly protocol: string;
}
export interface VirtualMachineOsProfileWindowsConfig {
  readonly enableAutomaticUpgrades?: boolean;
  readonly provisionVmAgent?: boolean;
  readonly timezone?: string;
  /** additional_unattend_config block */
  readonly additionalUnattendConfig?: VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig[];
  /** winrm block */
  readonly winrm?: VirtualMachineOsProfileWindowsConfigWinrm[];
}
export interface VirtualMachinePlan {
  readonly name: string;
  readonly product: string;
  readonly publisher: string;
}
export interface VirtualMachineStorageDataDisk {
  readonly caching?: string;
  readonly createOption: string;
  readonly diskSizeGb?: number;
  readonly lun: number;
  readonly managedDiskId?: string;
  readonly managedDiskType?: string;
  readonly name: string;
  readonly vhdUri?: string;
  readonly writeAcceleratorEnabled?: boolean;
}
export interface VirtualMachineStorageImageReference {
  readonly id?: string;
  readonly offer?: string;
  readonly publisher?: string;
  readonly sku?: string;
  readonly version?: string;
}
export interface VirtualMachineStorageOsDisk {
  readonly caching?: string;
  readonly createOption: string;
  readonly diskSizeGb?: number;
  readonly imageUri?: string;
  readonly managedDiskId?: string;
  readonly managedDiskType?: string;
  readonly name: string;
  readonly osType?: string;
  readonly vhdUri?: string;
  readonly writeAcceleratorEnabled?: boolean;
}
export interface VirtualMachineTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class VirtualMachine extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _availabilitySetId?: string;
  public get availabilitySetId() {
    return this._availabilitySetId ?? this.getStringAttribute('availability_set_id');
  }
  public set availabilitySetId(value: string | undefined) {
    this._availabilitySetId = value;
  }

  // delete_data_disks_on_termination - computed: false, optional: true, required: false
  private _deleteDataDisksOnTermination?: boolean;
  public get deleteDataDisksOnTermination() {
    return this._deleteDataDisksOnTermination;
  }
  public set deleteDataDisksOnTermination(value: boolean | undefined) {
    this._deleteDataDisksOnTermination = value;
  }

  // delete_os_disk_on_termination - computed: false, optional: true, required: false
  private _deleteOsDiskOnTermination?: boolean;
  public get deleteOsDiskOnTermination() {
    return this._deleteOsDiskOnTermination;
  }
  public set deleteOsDiskOnTermination(value: boolean | undefined) {
    this._deleteOsDiskOnTermination = value;
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

  // network_interface_ids - computed: false, optional: false, required: true
  private _networkInterfaceIds: string[];
  public get networkInterfaceIds() {
    return this._networkInterfaceIds;
  }
  public set networkInterfaceIds(value: string[]) {
    this._networkInterfaceIds = value;
  }

  // primary_network_interface_id - computed: false, optional: true, required: false
  private _primaryNetworkInterfaceId?: string;
  public get primaryNetworkInterfaceId() {
    return this._primaryNetworkInterfaceId;
  }
  public set primaryNetworkInterfaceId(value: string | undefined) {
    this._primaryNetworkInterfaceId = value;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // vm_size - computed: false, optional: false, required: true
  private _vmSize: string;
  public get vmSize() {
    return this._vmSize;
  }
  public set vmSize(value: string) {
    this._vmSize = value;
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
  private _additionalCapabilities?: VirtualMachineAdditionalCapabilities[];
  public get additionalCapabilities() {
    return this._additionalCapabilities;
  }
  public set additionalCapabilities(value: VirtualMachineAdditionalCapabilities[] | undefined) {
    this._additionalCapabilities = value;
  }

  // boot_diagnostics - computed: false, optional: true, required: false
  private _bootDiagnostics?: VirtualMachineBootDiagnostics[];
  public get bootDiagnostics() {
    return this._bootDiagnostics;
  }
  public set bootDiagnostics(value: VirtualMachineBootDiagnostics[] | undefined) {
    this._bootDiagnostics = value;
  }

  // identity - computed: false, optional: true, required: false
  private _identity?: VirtualMachineIdentity[];
  public get identity() {
    return this._identity;
  }
  public set identity(value: VirtualMachineIdentity[] | undefined) {
    this._identity = value;
  }

  // os_profile - computed: false, optional: true, required: false
  private _osProfile?: VirtualMachineOsProfile[];
  public get osProfile() {
    return this._osProfile;
  }
  public set osProfile(value: VirtualMachineOsProfile[] | undefined) {
    this._osProfile = value;
  }

  // os_profile_linux_config - computed: false, optional: true, required: false
  private _osProfileLinuxConfig?: VirtualMachineOsProfileLinuxConfig[];
  public get osProfileLinuxConfig() {
    return this._osProfileLinuxConfig;
  }
  public set osProfileLinuxConfig(value: VirtualMachineOsProfileLinuxConfig[] | undefined) {
    this._osProfileLinuxConfig = value;
  }

  // os_profile_secrets - computed: false, optional: true, required: false
  private _osProfileSecrets?: VirtualMachineOsProfileSecrets[];
  public get osProfileSecrets() {
    return this._osProfileSecrets;
  }
  public set osProfileSecrets(value: VirtualMachineOsProfileSecrets[] | undefined) {
    this._osProfileSecrets = value;
  }

  // os_profile_windows_config - computed: false, optional: true, required: false
  private _osProfileWindowsConfig?: VirtualMachineOsProfileWindowsConfig[];
  public get osProfileWindowsConfig() {
    return this._osProfileWindowsConfig;
  }
  public set osProfileWindowsConfig(value: VirtualMachineOsProfileWindowsConfig[] | undefined) {
    this._osProfileWindowsConfig = value;
  }

  // plan - computed: false, optional: true, required: false
  private _plan?: VirtualMachinePlan[];
  public get plan() {
    return this._plan;
  }
  public set plan(value: VirtualMachinePlan[] | undefined) {
    this._plan = value;
  }

  // storage_data_disk - computed: false, optional: true, required: false
  private _storageDataDisk?: VirtualMachineStorageDataDisk[];
  public get storageDataDisk() {
    return this._storageDataDisk;
  }
  public set storageDataDisk(value: VirtualMachineStorageDataDisk[] | undefined) {
    this._storageDataDisk = value;
  }

  // storage_image_reference - computed: false, optional: true, required: false
  private _storageImageReference?: VirtualMachineStorageImageReference[];
  public get storageImageReference() {
    return this._storageImageReference;
  }
  public set storageImageReference(value: VirtualMachineStorageImageReference[] | undefined) {
    this._storageImageReference = value;
  }

  // storage_os_disk - computed: false, optional: false, required: true
  private _storageOsDisk: VirtualMachineStorageOsDisk[];
  public get storageOsDisk() {
    return this._storageOsDisk;
  }
  public set storageOsDisk(value: VirtualMachineStorageOsDisk[]) {
    this._storageOsDisk = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VirtualMachineTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: VirtualMachineTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_set_id: this._availabilitySetId,
      delete_data_disks_on_termination: this._deleteDataDisksOnTermination,
      delete_os_disk_on_termination: this._deleteOsDiskOnTermination,
      license_type: this._licenseType,
      location: this._location,
      name: this._name,
      network_interface_ids: this._networkInterfaceIds,
      primary_network_interface_id: this._primaryNetworkInterfaceId,
      proximity_placement_group_id: this._proximityPlacementGroupId,
      resource_group_name: this._resourceGroupName,
      tags: this._tags,
      vm_size: this._vmSize,
      zones: this._zones,
      additional_capabilities: this._additionalCapabilities,
      boot_diagnostics: this._bootDiagnostics,
      identity: this._identity,
      os_profile: this._osProfile,
      os_profile_linux_config: this._osProfileLinuxConfig,
      os_profile_secrets: this._osProfileSecrets,
      os_profile_windows_config: this._osProfileWindowsConfig,
      plan: this._plan,
      storage_data_disk: this._storageDataDisk,
      storage_image_reference: this._storageImageReference,
      storage_os_disk: this._storageOsDisk,
      timeouts: this._timeouts,
    };
  }
}
