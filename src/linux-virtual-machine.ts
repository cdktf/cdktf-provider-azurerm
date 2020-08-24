// https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface LinuxVirtualMachineConfig extends TerraformMetaArguments {
  readonly adminPassword?: string;
  readonly adminUsername: string;
  readonly allowExtensionOperations?: boolean;
  readonly availabilitySetId?: string;
  readonly computerName?: string;
  readonly customData?: string;
  readonly dedicatedHostId?: string;
  readonly disablePasswordAuthentication?: boolean;
  readonly evictionPolicy?: string;
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
export interface LinuxVirtualMachineAdminSshKey {
  readonly publicKey: string;
  readonly username: string;
}
export interface LinuxVirtualMachineBootDiagnostics {
  readonly storageAccountUri: string;
}
export interface LinuxVirtualMachineIdentity {
  readonly identityIds?: string[];
  readonly type: string;
}
export interface LinuxVirtualMachineOsDiskDiffDiskSettings {
  readonly option: string;
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
export interface LinuxVirtualMachinePlan {
  readonly name: string;
  readonly product: string;
  readonly publisher: string;
}
export interface LinuxVirtualMachineSecretCertificate {
  readonly url: string;
}
export interface LinuxVirtualMachineSecret {
  readonly keyVaultId: string;
  /** certificate block */
  readonly certificate: LinuxVirtualMachineSecretCertificate[];
}
export interface LinuxVirtualMachineSourceImageReference {
  readonly offer: string;
  readonly publisher: string;
  readonly sku: string;
  readonly version: string;
}
export interface LinuxVirtualMachineTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class LinuxVirtualMachine extends TerraformResource {

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
    this._evictionPolicy = config.evictionPolicy;
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

  // disable_password_authentication - computed: false, optional: true, required: false
  private _disablePasswordAuthentication?: boolean;
  public get disablePasswordAuthentication() {
    return this._disablePasswordAuthentication;
  }
  public set disablePasswordAuthentication(value: boolean | undefined) {
    this._disablePasswordAuthentication = value;
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
  private _additionalCapabilities?: LinuxVirtualMachineAdditionalCapabilities[];
  public get additionalCapabilities() {
    return this._additionalCapabilities;
  }
  public set additionalCapabilities(value: LinuxVirtualMachineAdditionalCapabilities[] | undefined) {
    this._additionalCapabilities = value;
  }

  // admin_ssh_key - computed: false, optional: true, required: false
  private _adminSshKey?: LinuxVirtualMachineAdminSshKey[];
  public get adminSshKey() {
    return this._adminSshKey;
  }
  public set adminSshKey(value: LinuxVirtualMachineAdminSshKey[] | undefined) {
    this._adminSshKey = value;
  }

  // boot_diagnostics - computed: false, optional: true, required: false
  private _bootDiagnostics?: LinuxVirtualMachineBootDiagnostics[];
  public get bootDiagnostics() {
    return this._bootDiagnostics;
  }
  public set bootDiagnostics(value: LinuxVirtualMachineBootDiagnostics[] | undefined) {
    this._bootDiagnostics = value;
  }

  // identity - computed: false, optional: true, required: false
  private _identity?: LinuxVirtualMachineIdentity[];
  public get identity() {
    return this._identity;
  }
  public set identity(value: LinuxVirtualMachineIdentity[] | undefined) {
    this._identity = value;
  }

  // os_disk - computed: false, optional: false, required: true
  private _osDisk: LinuxVirtualMachineOsDisk[];
  public get osDisk() {
    return this._osDisk;
  }
  public set osDisk(value: LinuxVirtualMachineOsDisk[]) {
    this._osDisk = value;
  }

  // plan - computed: false, optional: true, required: false
  private _plan?: LinuxVirtualMachinePlan[];
  public get plan() {
    return this._plan;
  }
  public set plan(value: LinuxVirtualMachinePlan[] | undefined) {
    this._plan = value;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: LinuxVirtualMachineSecret[];
  public get secret() {
    return this._secret;
  }
  public set secret(value: LinuxVirtualMachineSecret[] | undefined) {
    this._secret = value;
  }

  // source_image_reference - computed: false, optional: true, required: false
  private _sourceImageReference?: LinuxVirtualMachineSourceImageReference[];
  public get sourceImageReference() {
    return this._sourceImageReference;
  }
  public set sourceImageReference(value: LinuxVirtualMachineSourceImageReference[] | undefined) {
    this._sourceImageReference = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LinuxVirtualMachineTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: LinuxVirtualMachineTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_password: this._adminPassword,
      admin_username: this._adminUsername,
      allow_extension_operations: this._allowExtensionOperations,
      availability_set_id: this._availabilitySetId,
      computer_name: this._computerName,
      custom_data: this._customData,
      dedicated_host_id: this._dedicatedHostId,
      disable_password_authentication: this._disablePasswordAuthentication,
      eviction_policy: this._evictionPolicy,
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
      zone: this._zone,
      additional_capabilities: this._additionalCapabilities,
      admin_ssh_key: this._adminSshKey,
      boot_diagnostics: this._bootDiagnostics,
      identity: this._identity,
      os_disk: this._osDisk,
      plan: this._plan,
      secret: this._secret,
      source_image_reference: this._sourceImageReference,
      timeouts: this._timeouts,
    };
  }
}
