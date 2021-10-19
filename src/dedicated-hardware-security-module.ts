// https://www.terraform.io/docs/providers/azurerm/r/dedicated_hardware_security_module.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DedicatedHardwareSecurityModuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dedicated_hardware_security_module.html#location DedicatedHardwareSecurityModule#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dedicated_hardware_security_module.html#name DedicatedHardwareSecurityModule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dedicated_hardware_security_module.html#resource_group_name DedicatedHardwareSecurityModule#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dedicated_hardware_security_module.html#sku_name DedicatedHardwareSecurityModule#sku_name}
  */
  readonly skuName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dedicated_hardware_security_module.html#stamp_id DedicatedHardwareSecurityModule#stamp_id}
  */
  readonly stampId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dedicated_hardware_security_module.html#tags DedicatedHardwareSecurityModule#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dedicated_hardware_security_module.html#zones DedicatedHardwareSecurityModule#zones}
  */
  readonly zones?: string[];
  /**
  * network_profile block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dedicated_hardware_security_module.html#network_profile DedicatedHardwareSecurityModule#network_profile}
  */
  readonly networkProfile: DedicatedHardwareSecurityModuleNetworkProfile;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dedicated_hardware_security_module.html#timeouts DedicatedHardwareSecurityModule#timeouts}
  */
  readonly timeouts?: DedicatedHardwareSecurityModuleTimeouts;
}
export interface DedicatedHardwareSecurityModuleNetworkProfile {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dedicated_hardware_security_module.html#network_interface_private_ip_addresses DedicatedHardwareSecurityModule#network_interface_private_ip_addresses}
  */
  readonly networkInterfacePrivateIpAddresses: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dedicated_hardware_security_module.html#subnet_id DedicatedHardwareSecurityModule#subnet_id}
  */
  readonly subnetId: string;
}

function dedicatedHardwareSecurityModuleNetworkProfileToTerraform(struct?: DedicatedHardwareSecurityModuleNetworkProfileOutputReference | DedicatedHardwareSecurityModuleNetworkProfile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_interface_private_ip_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.networkInterfacePrivateIpAddresses),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}

export class DedicatedHardwareSecurityModuleNetworkProfileOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // network_interface_private_ip_addresses - computed: false, optional: false, required: true
  private _networkInterfacePrivateIpAddresses?: string[]; 
  public get networkInterfacePrivateIpAddresses() {
    return this.getListAttribute('network_interface_private_ip_addresses');
  }
  public set networkInterfacePrivateIpAddresses(value: string[]) {
    this._networkInterfacePrivateIpAddresses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfacePrivateIpAddressesInput() {
    return this._networkInterfacePrivateIpAddresses
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId
  }
}
export interface DedicatedHardwareSecurityModuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dedicated_hardware_security_module.html#create DedicatedHardwareSecurityModule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dedicated_hardware_security_module.html#delete DedicatedHardwareSecurityModule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dedicated_hardware_security_module.html#read DedicatedHardwareSecurityModule#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dedicated_hardware_security_module.html#update DedicatedHardwareSecurityModule#update}
  */
  readonly update?: string;
}

function dedicatedHardwareSecurityModuleTimeoutsToTerraform(struct?: DedicatedHardwareSecurityModuleTimeoutsOutputReference | DedicatedHardwareSecurityModuleTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class DedicatedHardwareSecurityModuleTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/dedicated_hardware_security_module.html azurerm_dedicated_hardware_security_module}
*/
export class DedicatedHardwareSecurityModule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_dedicated_hardware_security_module";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/dedicated_hardware_security_module.html azurerm_dedicated_hardware_security_module} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DedicatedHardwareSecurityModuleConfig
  */
  public constructor(scope: Construct, id: string, config: DedicatedHardwareSecurityModuleConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_dedicated_hardware_security_module',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._skuName = config.skuName;
    this._stampId = config.stampId;
    this._tags = config.tags;
    this._zones = config.zones;
    this._networkProfile = config.networkProfile;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
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
  private _name?: string; 
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

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
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

  // sku_name - computed: false, optional: false, required: true
  private _skuName?: string; 
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }
  public set skuName(value: string) {
    this._skuName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuNameInput() {
    return this._skuName
  }

  // stamp_id - computed: false, optional: true, required: false
  private _stampId?: string | undefined; 
  public get stampId() {
    return this.getStringAttribute('stamp_id');
  }
  public set stampId(value: string | undefined) {
    this._stampId = value;
  }
  public resetStampId() {
    this._stampId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stampIdInput() {
    return this._stampId
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // zones - computed: false, optional: true, required: false
  private _zones?: string[] | undefined; 
  public get zones() {
    return this.getListAttribute('zones');
  }
  public set zones(value: string[] | undefined) {
    this._zones = value;
  }
  public resetZones() {
    this._zones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones
  }

  // network_profile - computed: false, optional: false, required: true
  private _networkProfile?: DedicatedHardwareSecurityModuleNetworkProfile; 
  private __networkProfileOutput = new DedicatedHardwareSecurityModuleNetworkProfileOutputReference(this as any, "network_profile", true);
  public get networkProfile() {
    return this.__networkProfileOutput;
  }
  public putNetworkProfile(value: DedicatedHardwareSecurityModuleNetworkProfile) {
    this._networkProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkProfileInput() {
    return this._networkProfile
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DedicatedHardwareSecurityModuleTimeouts | undefined; 
  private __timeoutsOutput = new DedicatedHardwareSecurityModuleTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DedicatedHardwareSecurityModuleTimeouts | undefined) {
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
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sku_name: cdktf.stringToTerraform(this._skuName),
      stamp_id: cdktf.stringToTerraform(this._stampId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      zones: cdktf.listMapper(cdktf.stringToTerraform)(this._zones),
      network_profile: dedicatedHardwareSecurityModuleNetworkProfileToTerraform(this._networkProfile),
      timeouts: dedicatedHardwareSecurityModuleTimeoutsToTerraform(this._timeouts),
    };
  }
}
