// https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_host_pool.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface VirtualDesktopHostPoolConfig extends TerraformMetaArguments {
  readonly description?: string;
  readonly friendlyName?: string;
  readonly loadBalancerType: string;
  readonly location: string;
  readonly maximumSessionsAllowed?: number;
  readonly name: string;
  readonly personalDesktopAssignmentType?: string;
  /** Preferred App Group type to display */
  readonly preferredAppGroupType?: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  readonly type: string;
  readonly validateEnvironment?: boolean;
  /** registration_info block */
  readonly registrationInfo?: VirtualDesktopHostPoolRegistrationInfo[];
  /** timeouts block */
  readonly timeouts?: VirtualDesktopHostPoolTimeouts;
}
export interface VirtualDesktopHostPoolRegistrationInfo {
  readonly expirationDate: string;
}
export interface VirtualDesktopHostPoolTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class VirtualDesktopHostPool extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._description = config.description;
    this._friendlyName = config.friendlyName;
    this._loadBalancerType = config.loadBalancerType;
    this._location = config.location;
    this._maximumSessionsAllowed = config.maximumSessionsAllowed;
    this._name = config.name;
    this._personalDesktopAssignmentType = config.personalDesktopAssignmentType;
    this._preferredAppGroupType = config.preferredAppGroupType;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._type = config.type;
    this._validateEnvironment = config.validateEnvironment;
    this._registrationInfo = config.registrationInfo;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
      description: this._description,
      friendly_name: this._friendlyName,
      load_balancer_type: this._loadBalancerType,
      location: this._location,
      maximum_sessions_allowed: this._maximumSessionsAllowed,
      name: this._name,
      personal_desktop_assignment_type: this._personalDesktopAssignmentType,
      preferred_app_group_type: this._preferredAppGroupType,
      resource_group_name: this._resourceGroupName,
      tags: this._tags,
      type: this._type,
      validate_environment: this._validateEnvironment,
      registration_info: this._registrationInfo,
      timeouts: this._timeouts,
    };
  }
}
