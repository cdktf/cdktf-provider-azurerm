// https://www.terraform.io/docs/providers/azurerm/r/dev_test_linux_virtual_machine.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DevTestLinuxVirtualMachineConfig extends TerraformMetaArguments {
  readonly allowClaim?: boolean;
  readonly disallowPublicIpAddress?: boolean;
  readonly labName: string;
  readonly labSubnetName: string;
  readonly labVirtualNetworkId: string;
  readonly location: string;
  readonly name: string;
  readonly notes?: string;
  readonly password?: string;
  readonly resourceGroupName: string;
  readonly size: string;
  readonly sshKey?: string;
  readonly storageType: string;
  readonly tags?: { [key: string]: string };
  readonly username: string;
  /** gallery_image_reference block */
  readonly galleryImageReference: DevTestLinuxVirtualMachineGalleryImageReference[];
  /** inbound_nat_rule block */
  readonly inboundNatRule?: DevTestLinuxVirtualMachineInboundNatRule[];
  /** timeouts block */
  readonly timeouts?: DevTestLinuxVirtualMachineTimeouts;
}
export interface DevTestLinuxVirtualMachineGalleryImageReference {
  readonly offer: string;
  readonly publisher: string;
  readonly sku: string;
  readonly version: string;
}
export interface DevTestLinuxVirtualMachineInboundNatRule {
  readonly backendPort: number;
  readonly protocol: string;
}
export interface DevTestLinuxVirtualMachineTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class DevTestLinuxVirtualMachine extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DevTestLinuxVirtualMachineConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_dev_test_linux_virtual_machine',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allowClaim = config.allowClaim;
    this._disallowPublicIpAddress = config.disallowPublicIpAddress;
    this._labName = config.labName;
    this._labSubnetName = config.labSubnetName;
    this._labVirtualNetworkId = config.labVirtualNetworkId;
    this._location = config.location;
    this._name = config.name;
    this._notes = config.notes;
    this._password = config.password;
    this._resourceGroupName = config.resourceGroupName;
    this._size = config.size;
    this._sshKey = config.sshKey;
    this._storageType = config.storageType;
    this._tags = config.tags;
    this._username = config.username;
    this._galleryImageReference = config.galleryImageReference;
    this._inboundNatRule = config.inboundNatRule;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_claim - computed: false, optional: true, required: false
  private _allowClaim?: boolean;
  public get allowClaim() {
    return this._allowClaim;
  }
  public set allowClaim(value: boolean | undefined) {
    this._allowClaim = value;
  }

  // disallow_public_ip_address - computed: false, optional: true, required: false
  private _disallowPublicIpAddress?: boolean;
  public get disallowPublicIpAddress() {
    return this._disallowPublicIpAddress;
  }
  public set disallowPublicIpAddress(value: boolean | undefined) {
    this._disallowPublicIpAddress = value;
  }

  // fqdn - computed: true, optional: false, required: true
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // lab_name - computed: false, optional: false, required: true
  private _labName: string;
  public get labName() {
    return this._labName;
  }
  public set labName(value: string) {
    this._labName = value;
  }

  // lab_subnet_name - computed: false, optional: false, required: true
  private _labSubnetName: string;
  public get labSubnetName() {
    return this._labSubnetName;
  }
  public set labSubnetName(value: string) {
    this._labSubnetName = value;
  }

  // lab_virtual_network_id - computed: false, optional: false, required: true
  private _labVirtualNetworkId: string;
  public get labVirtualNetworkId() {
    return this._labVirtualNetworkId;
  }
  public set labVirtualNetworkId(value: string) {
    this._labVirtualNetworkId = value;
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

  // notes - computed: false, optional: true, required: false
  private _notes?: string;
  public get notes() {
    return this._notes;
  }
  public set notes(value: string | undefined) {
    this._notes = value;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string;
  public get password() {
    return this._password;
  }
  public set password(value: string | undefined) {
    this._password = value;
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

  // ssh_key - computed: false, optional: true, required: false
  private _sshKey?: string;
  public get sshKey() {
    return this._sshKey;
  }
  public set sshKey(value: string | undefined) {
    this._sshKey = value;
  }

  // storage_type - computed: false, optional: false, required: true
  private _storageType: string;
  public get storageType() {
    return this._storageType;
  }
  public set storageType(value: string) {
    this._storageType = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // unique_identifier - computed: true, optional: false, required: true
  public get uniqueIdentifier() {
    return this.getStringAttribute('unique_identifier');
  }

  // username - computed: false, optional: false, required: true
  private _username: string;
  public get username() {
    return this._username;
  }
  public set username(value: string) {
    this._username = value;
  }

  // gallery_image_reference - computed: false, optional: false, required: true
  private _galleryImageReference: DevTestLinuxVirtualMachineGalleryImageReference[];
  public get galleryImageReference() {
    return this._galleryImageReference;
  }
  public set galleryImageReference(value: DevTestLinuxVirtualMachineGalleryImageReference[]) {
    this._galleryImageReference = value;
  }

  // inbound_nat_rule - computed: false, optional: true, required: false
  private _inboundNatRule?: DevTestLinuxVirtualMachineInboundNatRule[];
  public get inboundNatRule() {
    return this._inboundNatRule;
  }
  public set inboundNatRule(value: DevTestLinuxVirtualMachineInboundNatRule[] | undefined) {
    this._inboundNatRule = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DevTestLinuxVirtualMachineTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DevTestLinuxVirtualMachineTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_claim: this._allowClaim,
      disallow_public_ip_address: this._disallowPublicIpAddress,
      lab_name: this._labName,
      lab_subnet_name: this._labSubnetName,
      lab_virtual_network_id: this._labVirtualNetworkId,
      location: this._location,
      name: this._name,
      notes: this._notes,
      password: this._password,
      resource_group_name: this._resourceGroupName,
      size: this._size,
      ssh_key: this._sshKey,
      storage_type: this._storageType,
      tags: this._tags,
      username: this._username,
      gallery_image_reference: this._galleryImageReference,
      inbound_nat_rule: this._inboundNatRule,
      timeouts: this._timeouts,
    };
  }
}
