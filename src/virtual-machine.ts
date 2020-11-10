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
    return this.getStringAttribute('availability_set_id');
  }
  public set availabilitySetId(value: string) {
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
  private _deleteDataDisksOnTermination?: boolean;
  public get deleteDataDisksOnTermination() {
    return this.getBooleanAttribute('delete_data_disks_on_termination');
  }
  public set deleteDataDisksOnTermination(value: boolean ) {
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
  private _deleteOsDiskOnTermination?: boolean;
  public get deleteOsDiskOnTermination() {
    return this.getBooleanAttribute('delete_os_disk_on_termination');
  }
  public set deleteOsDiskOnTermination(value: boolean ) {
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

  // primary_network_interface_id - computed: false, optional: true, required: false
  private _primaryNetworkInterfaceId?: string;
  public get primaryNetworkInterfaceId() {
    return this.getStringAttribute('primary_network_interface_id');
  }
  public set primaryNetworkInterfaceId(value: string ) {
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

  // vm_size - computed: false, optional: false, required: true
  private _vmSize: string;
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
  private _additionalCapabilities?: VirtualMachineAdditionalCapabilities[];
  public get additionalCapabilities() {
    return this.interpolationForAttribute('additional_capabilities') as any;
  }
  public set additionalCapabilities(value: VirtualMachineAdditionalCapabilities[] ) {
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
  private _bootDiagnostics?: VirtualMachineBootDiagnostics[];
  public get bootDiagnostics() {
    return this.interpolationForAttribute('boot_diagnostics') as any;
  }
  public set bootDiagnostics(value: VirtualMachineBootDiagnostics[] ) {
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
  private _identity?: VirtualMachineIdentity[];
  public get identity() {
    return this.interpolationForAttribute('identity') as any;
  }
  public set identity(value: VirtualMachineIdentity[] ) {
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
  private _osProfile?: VirtualMachineOsProfile[];
  public get osProfile() {
    return this.interpolationForAttribute('os_profile') as any;
  }
  public set osProfile(value: VirtualMachineOsProfile[] ) {
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
  private _osProfileLinuxConfig?: VirtualMachineOsProfileLinuxConfig[];
  public get osProfileLinuxConfig() {
    return this.interpolationForAttribute('os_profile_linux_config') as any;
  }
  public set osProfileLinuxConfig(value: VirtualMachineOsProfileLinuxConfig[] ) {
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
  private _osProfileSecrets?: VirtualMachineOsProfileSecrets[];
  public get osProfileSecrets() {
    return this.interpolationForAttribute('os_profile_secrets') as any;
  }
  public set osProfileSecrets(value: VirtualMachineOsProfileSecrets[] ) {
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
  private _osProfileWindowsConfig?: VirtualMachineOsProfileWindowsConfig[];
  public get osProfileWindowsConfig() {
    return this.interpolationForAttribute('os_profile_windows_config') as any;
  }
  public set osProfileWindowsConfig(value: VirtualMachineOsProfileWindowsConfig[] ) {
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
  private _plan?: VirtualMachinePlan[];
  public get plan() {
    return this.interpolationForAttribute('plan') as any;
  }
  public set plan(value: VirtualMachinePlan[] ) {
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
  private _storageDataDisk?: VirtualMachineStorageDataDisk[];
  public get storageDataDisk() {
    return this.interpolationForAttribute('storage_data_disk') as any;
  }
  public set storageDataDisk(value: VirtualMachineStorageDataDisk[] ) {
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
  private _storageImageReference?: VirtualMachineStorageImageReference[];
  public get storageImageReference() {
    return this.interpolationForAttribute('storage_image_reference') as any;
  }
  public set storageImageReference(value: VirtualMachineStorageImageReference[] ) {
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
  private _storageOsDisk: VirtualMachineStorageOsDisk[];
  public get storageOsDisk() {
    return this.interpolationForAttribute('storage_os_disk') as any;
  }
  public set storageOsDisk(value: VirtualMachineStorageOsDisk[]) {
    this._storageOsDisk = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageOsDiskInput() {
    return this._storageOsDisk
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VirtualMachineTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: VirtualMachineTimeouts ) {
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
