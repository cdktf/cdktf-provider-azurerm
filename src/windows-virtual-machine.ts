// https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface WindowsVirtualMachineConfig extends TerraformMetaArguments {
  readonly adminPassword: string;
  readonly adminUsername: string;
  readonly allowExtensionOperations?: boolean;
  readonly availabilitySetId?: string;
  readonly computerName?: string;
  readonly customData?: string;
  readonly dedicatedHostId?: string;
  readonly enableAutomaticUpdates?: boolean;
  readonly evictionPolicy?: string;
  readonly licenseType?: string;
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
  readonly timezone?: string;
  readonly zone?: string;
  /** additional_capabilities block */
  readonly additionalCapabilities?: WindowsVirtualMachineAdditionalCapabilities[];
  /** additional_unattend_content block */
  readonly additionalUnattendContent?: WindowsVirtualMachineAdditionalUnattendContent[];
  /** boot_diagnostics block */
  readonly bootDiagnostics?: WindowsVirtualMachineBootDiagnostics[];
  /** identity block */
  readonly identity?: WindowsVirtualMachineIdentity[];
  /** os_disk block */
  readonly osDisk: WindowsVirtualMachineOsDisk[];
  /** plan block */
  readonly plan?: WindowsVirtualMachinePlan[];
  /** secret block */
  readonly secret?: WindowsVirtualMachineSecret[];
  /** source_image_reference block */
  readonly sourceImageReference?: WindowsVirtualMachineSourceImageReference[];
  /** timeouts block */
  readonly timeouts?: WindowsVirtualMachineTimeouts;
  /** winrm_listener block */
  readonly winrmListener?: WindowsVirtualMachineWinrmListener[];
}
export interface WindowsVirtualMachineAdditionalCapabilities {
  readonly ultraSsdEnabled?: boolean;
}
export interface WindowsVirtualMachineAdditionalUnattendContent {
  readonly content: string;
  readonly setting: string;
}
export interface WindowsVirtualMachineBootDiagnostics {
  readonly storageAccountUri: string;
}
export interface WindowsVirtualMachineIdentity {
  readonly identityIds?: string[];
  readonly type: string;
}
export interface WindowsVirtualMachineOsDiskDiffDiskSettings {
  readonly option: string;
}
export interface WindowsVirtualMachineOsDisk {
  readonly caching: string;
  readonly diskEncryptionSetId?: string;
  readonly diskSizeGb?: number;
  readonly name?: string;
  readonly storageAccountType: string;
  readonly writeAcceleratorEnabled?: boolean;
  /** diff_disk_settings block */
  readonly diffDiskSettings?: WindowsVirtualMachineOsDiskDiffDiskSettings[];
}
export interface WindowsVirtualMachinePlan {
  readonly name: string;
  readonly product: string;
  readonly publisher: string;
}
export interface WindowsVirtualMachineSecretCertificate {
  readonly store: string;
  readonly url: string;
}
export interface WindowsVirtualMachineSecret {
  readonly keyVaultId: string;
  /** certificate block */
  readonly certificate: WindowsVirtualMachineSecretCertificate[];
}
export interface WindowsVirtualMachineSourceImageReference {
  readonly offer: string;
  readonly publisher: string;
  readonly sku: string;
  readonly version: string;
}
export interface WindowsVirtualMachineTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}
export interface WindowsVirtualMachineWinrmListener {
  readonly certificateUrl?: string;
  readonly protocol: string;
}

// Resource

export class WindowsVirtualMachine extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: WindowsVirtualMachineConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_windows_virtual_machine',
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
    this._enableAutomaticUpdates = config.enableAutomaticUpdates;
    this._evictionPolicy = config.evictionPolicy;
    this._licenseType = config.licenseType;
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
    this._timezone = config.timezone;
    this._zone = config.zone;
    this._additionalCapabilities = config.additionalCapabilities;
    this._additionalUnattendContent = config.additionalUnattendContent;
    this._bootDiagnostics = config.bootDiagnostics;
    this._identity = config.identity;
    this._osDisk = config.osDisk;
    this._plan = config.plan;
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

  // allow_extension_operations - computed: false, optional: true, required: false
  private _allowExtensionOperations?: boolean;
  public get allowExtensionOperations() {
    return this._allowExtensionOperations;
  }
  public set allowExtensionOperations(value: boolean | undefined) {
    this._allowExtensionOperations = value;
  }

  // availability_set_id - computed: false, optional: true, required: false
  private _availabilitySetId?: string;
  public get availabilitySetId() {
    return this._availabilitySetId;
  }
  public set availabilitySetId(value: string | undefined) {
    this._availabilitySetId = value;
  }

  // computer_name - computed: true, optional: true, required: false
  private _computerName?: string;
  public get computerName() {
    return this._computerName ?? this.getStringAttribute('computer_name');
  }
  public set computerName(value: string | undefined) {
    this._computerName = value;
  }

  // custom_data - computed: false, optional: true, required: false
  private _customData?: string;
  public get customData() {
    return this._customData;
  }
  public set customData(value: string | undefined) {
    this._customData = value;
  }

  // dedicated_host_id - computed: false, optional: true, required: false
  private _dedicatedHostId?: string;
  public get dedicatedHostId() {
    return this._dedicatedHostId;
  }
  public set dedicatedHostId(value: string | undefined) {
    this._dedicatedHostId = value;
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

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
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

  // network_interface_ids - computed: false, optional: false, required: true
  private _networkInterfaceIds: string[];
  public get networkInterfaceIds() {
    return this._networkInterfaceIds;
  }
  public set networkInterfaceIds(value: string[]) {
    this._networkInterfaceIds = value;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: string;
  public get priority() {
    return this._priority;
  }
  public set priority(value: string | undefined) {
    this._priority = value;
  }

  // private_ip_address - computed: true, optional: false, required: true
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }

  // private_ip_addresses - computed: true, optional: false, required: true
  public get privateIpAddresses() {
    return this.getListAttribute('private_ip_addresses');
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

  // public_ip_address - computed: true, optional: false, required: true
  public get publicIpAddress() {
    return this.getStringAttribute('public_ip_address');
  }

  // public_ip_addresses - computed: true, optional: false, required: true
  public get publicIpAddresses() {
    return this.getListAttribute('public_ip_addresses');
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // size - computed: false, optional: false, required: true
  private _size: string;
  public get size() {
    return this._size;
  }
  public set size(value: string) {
    this._size = value;
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

  // virtual_machine_id - computed: true, optional: false, required: true
  public get virtualMachineId() {
    return this.getStringAttribute('virtual_machine_id');
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string;
  public get zone() {
    return this._zone;
  }
  public set zone(value: string | undefined) {
    this._zone = value;
  }

  // additional_capabilities - computed: false, optional: true, required: false
  private _additionalCapabilities?: WindowsVirtualMachineAdditionalCapabilities[];
  public get additionalCapabilities() {
    return this._additionalCapabilities;
  }
  public set additionalCapabilities(value: WindowsVirtualMachineAdditionalCapabilities[] | undefined) {
    this._additionalCapabilities = value;
  }

  // additional_unattend_content - computed: false, optional: true, required: false
  private _additionalUnattendContent?: WindowsVirtualMachineAdditionalUnattendContent[];
  public get additionalUnattendContent() {
    return this._additionalUnattendContent;
  }
  public set additionalUnattendContent(value: WindowsVirtualMachineAdditionalUnattendContent[] | undefined) {
    this._additionalUnattendContent = value;
  }

  // boot_diagnostics - computed: false, optional: true, required: false
  private _bootDiagnostics?: WindowsVirtualMachineBootDiagnostics[];
  public get bootDiagnostics() {
    return this._bootDiagnostics;
  }
  public set bootDiagnostics(value: WindowsVirtualMachineBootDiagnostics[] | undefined) {
    this._bootDiagnostics = value;
  }

  // identity - computed: false, optional: true, required: false
  private _identity?: WindowsVirtualMachineIdentity[];
  public get identity() {
    return this._identity;
  }
  public set identity(value: WindowsVirtualMachineIdentity[] | undefined) {
    this._identity = value;
  }

  // os_disk - computed: false, optional: false, required: true
  private _osDisk: WindowsVirtualMachineOsDisk[];
  public get osDisk() {
    return this._osDisk;
  }
  public set osDisk(value: WindowsVirtualMachineOsDisk[]) {
    this._osDisk = value;
  }

  // plan - computed: false, optional: true, required: false
  private _plan?: WindowsVirtualMachinePlan[];
  public get plan() {
    return this._plan;
  }
  public set plan(value: WindowsVirtualMachinePlan[] | undefined) {
    this._plan = value;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: WindowsVirtualMachineSecret[];
  public get secret() {
    return this._secret;
  }
  public set secret(value: WindowsVirtualMachineSecret[] | undefined) {
    this._secret = value;
  }

  // source_image_reference - computed: false, optional: true, required: false
  private _sourceImageReference?: WindowsVirtualMachineSourceImageReference[];
  public get sourceImageReference() {
    return this._sourceImageReference;
  }
  public set sourceImageReference(value: WindowsVirtualMachineSourceImageReference[] | undefined) {
    this._sourceImageReference = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: WindowsVirtualMachineTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: WindowsVirtualMachineTimeouts | undefined) {
    this._timeouts = value;
  }

  // winrm_listener - computed: false, optional: true, required: false
  private _winrmListener?: WindowsVirtualMachineWinrmListener[];
  public get winrmListener() {
    return this._winrmListener;
  }
  public set winrmListener(value: WindowsVirtualMachineWinrmListener[] | undefined) {
    this._winrmListener = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_password: this._adminPassword,
      admin_username: this._adminUsername,
      allow_extension_operations: this._allowExtensionOperations,
      availability_set_id: this._availabilitySetId,
      computer_name: this._computerName,
      custom_data: this._customData,
      dedicated_host_id: this._dedicatedHostId,
      enable_automatic_updates: this._enableAutomaticUpdates,
      eviction_policy: this._evictionPolicy,
      license_type: this._licenseType,
      location: this._location,
      max_bid_price: this._maxBidPrice,
      name: this._name,
      network_interface_ids: this._networkInterfaceIds,
      priority: this._priority,
      provision_vm_agent: this._provisionVmAgent,
      proximity_placement_group_id: this._proximityPlacementGroupId,
      resource_group_name: this._resourceGroupName,
      size: this._size,
      source_image_id: this._sourceImageId,
      tags: this._tags,
      timezone: this._timezone,
      zone: this._zone,
      additional_capabilities: this._additionalCapabilities,
      additional_unattend_content: this._additionalUnattendContent,
      boot_diagnostics: this._bootDiagnostics,
      identity: this._identity,
      os_disk: this._osDisk,
      plan: this._plan,
      secret: this._secret,
      source_image_reference: this._sourceImageReference,
      timeouts: this._timeouts,
      winrm_listener: this._winrmListener,
    };
  }
}
