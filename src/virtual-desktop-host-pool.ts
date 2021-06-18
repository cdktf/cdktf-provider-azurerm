// https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_host_pool.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualDesktopHostPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_host_pool.html#custom_rdp_properties VirtualDesktopHostPool#custom_rdp_properties}
  */
  readonly customRdpProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_host_pool.html#description VirtualDesktopHostPool#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_host_pool.html#friendly_name VirtualDesktopHostPool#friendly_name}
  */
  readonly friendlyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_host_pool.html#load_balancer_type VirtualDesktopHostPool#load_balancer_type}
  */
  readonly loadBalancerType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_host_pool.html#location VirtualDesktopHostPool#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_host_pool.html#maximum_sessions_allowed VirtualDesktopHostPool#maximum_sessions_allowed}
  */
  readonly maximumSessionsAllowed?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_host_pool.html#name VirtualDesktopHostPool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_host_pool.html#personal_desktop_assignment_type VirtualDesktopHostPool#personal_desktop_assignment_type}
  */
  readonly personalDesktopAssignmentType?: string;
  /**
  * Preferred App Group type to display
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_host_pool.html#preferred_app_group_type VirtualDesktopHostPool#preferred_app_group_type}
  */
  readonly preferredAppGroupType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_host_pool.html#resource_group_name VirtualDesktopHostPool#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_host_pool.html#start_vm_on_connect VirtualDesktopHostPool#start_vm_on_connect}
  */
  readonly startVmOnConnect?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_host_pool.html#tags VirtualDesktopHostPool#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_host_pool.html#type VirtualDesktopHostPool#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_host_pool.html#validate_environment VirtualDesktopHostPool#validate_environment}
  */
  readonly validateEnvironment?: boolean;
  /**
  * registration_info block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_host_pool.html#registration_info VirtualDesktopHostPool#registration_info}
  */
  readonly registrationInfo?: VirtualDesktopHostPoolRegistrationInfo[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_host_pool.html#timeouts VirtualDesktopHostPool#timeouts}
  */
  readonly timeouts?: VirtualDesktopHostPoolTimeouts;
}
export interface VirtualDesktopHostPoolRegistrationInfo {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_host_pool.html#expiration_date VirtualDesktopHostPool#expiration_date}
  */
  readonly expirationDate: string;
}

function virtualDesktopHostPoolRegistrationInfoToTerraform(struct?: VirtualDesktopHostPoolRegistrationInfo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    expiration_date: cdktf.stringToTerraform(struct!.expirationDate),
  }
}

export interface VirtualDesktopHostPoolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_host_pool.html#create VirtualDesktopHostPool#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_host_pool.html#delete VirtualDesktopHostPool#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_host_pool.html#read VirtualDesktopHostPool#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_host_pool.html#update VirtualDesktopHostPool#update}
  */
  readonly update?: string;
}

function virtualDesktopHostPoolTimeoutsToTerraform(struct?: VirtualDesktopHostPoolTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_host_pool.html azurerm_virtual_desktop_host_pool}
*/
export class VirtualDesktopHostPool extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_host_pool.html azurerm_virtual_desktop_host_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualDesktopHostPoolConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualDesktopHostPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_virtual_desktop_host_pool',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._customRdpProperties = config.customRdpProperties;
    this._description = config.description;
    this._friendlyName = config.friendlyName;
    this._loadBalancerType = config.loadBalancerType;
    this._location = config.location;
    this._maximumSessionsAllowed = config.maximumSessionsAllowed;
    this._name = config.name;
    this._personalDesktopAssignmentType = config.personalDesktopAssignmentType;
    this._preferredAppGroupType = config.preferredAppGroupType;
    this._resourceGroupName = config.resourceGroupName;
    this._startVmOnConnect = config.startVmOnConnect;
    this._tags = config.tags;
    this._type = config.type;
    this._validateEnvironment = config.validateEnvironment;
    this._registrationInfo = config.registrationInfo;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_rdp_properties - computed: false, optional: true, required: false
  private _customRdpProperties?: string;
  public get customRdpProperties() {
    return this.getStringAttribute('custom_rdp_properties');
  }
  public set customRdpProperties(value: string ) {
    this._customRdpProperties = value;
  }
  public resetCustomRdpProperties() {
    this._customRdpProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRdpPropertiesInput() {
    return this._customRdpProperties
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // friendly_name - computed: false, optional: true, required: false
  private _friendlyName?: string;
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }
  public set friendlyName(value: string ) {
    this._friendlyName = value;
  }
  public resetFriendlyName() {
    this._friendlyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get friendlyNameInput() {
    return this._friendlyName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // load_balancer_type - computed: false, optional: false, required: true
  private _loadBalancerType: string;
  public get loadBalancerType() {
    return this.getStringAttribute('load_balancer_type');
  }
  public set loadBalancerType(value: string) {
    this._loadBalancerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerTypeInput() {
    return this._loadBalancerType
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

  // maximum_sessions_allowed - computed: false, optional: true, required: false
  private _maximumSessionsAllowed?: number;
  public get maximumSessionsAllowed() {
    return this.getNumberAttribute('maximum_sessions_allowed');
  }
  public set maximumSessionsAllowed(value: number ) {
    this._maximumSessionsAllowed = value;
  }
  public resetMaximumSessionsAllowed() {
    this._maximumSessionsAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumSessionsAllowedInput() {
    return this._maximumSessionsAllowed
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

  // personal_desktop_assignment_type - computed: false, optional: true, required: false
  private _personalDesktopAssignmentType?: string;
  public get personalDesktopAssignmentType() {
    return this.getStringAttribute('personal_desktop_assignment_type');
  }
  public set personalDesktopAssignmentType(value: string ) {
    this._personalDesktopAssignmentType = value;
  }
  public resetPersonalDesktopAssignmentType() {
    this._personalDesktopAssignmentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get personalDesktopAssignmentTypeInput() {
    return this._personalDesktopAssignmentType
  }

  // preferred_app_group_type - computed: false, optional: true, required: false
  private _preferredAppGroupType?: string;
  public get preferredAppGroupType() {
    return this.getStringAttribute('preferred_app_group_type');
  }
  public set preferredAppGroupType(value: string ) {
    this._preferredAppGroupType = value;
  }
  public resetPreferredAppGroupType() {
    this._preferredAppGroupType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredAppGroupTypeInput() {
    return this._preferredAppGroupType
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

  // start_vm_on_connect - computed: false, optional: true, required: false
  private _startVmOnConnect?: boolean;
  public get startVmOnConnect() {
    return this.getBooleanAttribute('start_vm_on_connect');
  }
  public set startVmOnConnect(value: boolean ) {
    this._startVmOnConnect = value;
  }
  public resetStartVmOnConnect() {
    this._startVmOnConnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startVmOnConnectInput() {
    return this._startVmOnConnect
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

  // type - computed: false, optional: false, required: true
  private _type: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // validate_environment - computed: false, optional: true, required: false
  private _validateEnvironment?: boolean;
  public get validateEnvironment() {
    return this.getBooleanAttribute('validate_environment');
  }
  public set validateEnvironment(value: boolean ) {
    this._validateEnvironment = value;
  }
  public resetValidateEnvironment() {
    this._validateEnvironment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateEnvironmentInput() {
    return this._validateEnvironment
  }

  // registration_info - computed: false, optional: true, required: false
  private _registrationInfo?: VirtualDesktopHostPoolRegistrationInfo[];
  public get registrationInfo() {
    return this.interpolationForAttribute('registration_info') as any;
  }
  public set registrationInfo(value: VirtualDesktopHostPoolRegistrationInfo[] ) {
    this._registrationInfo = value;
  }
  public resetRegistrationInfo() {
    this._registrationInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationInfoInput() {
    return this._registrationInfo
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VirtualDesktopHostPoolTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: VirtualDesktopHostPoolTimeouts ) {
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
      custom_rdp_properties: cdktf.stringToTerraform(this._customRdpProperties),
      description: cdktf.stringToTerraform(this._description),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      load_balancer_type: cdktf.stringToTerraform(this._loadBalancerType),
      location: cdktf.stringToTerraform(this._location),
      maximum_sessions_allowed: cdktf.numberToTerraform(this._maximumSessionsAllowed),
      name: cdktf.stringToTerraform(this._name),
      personal_desktop_assignment_type: cdktf.stringToTerraform(this._personalDesktopAssignmentType),
      preferred_app_group_type: cdktf.stringToTerraform(this._preferredAppGroupType),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      start_vm_on_connect: cdktf.booleanToTerraform(this._startVmOnConnect),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      type: cdktf.stringToTerraform(this._type),
      validate_environment: cdktf.booleanToTerraform(this._validateEnvironment),
      registration_info: cdktf.listMapper(virtualDesktopHostPoolRegistrationInfoToTerraform)(this._registrationInfo),
      timeouts: virtualDesktopHostPoolTimeoutsToTerraform(this._timeouts),
    };
  }
}
