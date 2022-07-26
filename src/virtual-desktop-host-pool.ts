// https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_host_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualDesktopHostPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_host_pool#custom_rdp_properties VirtualDesktopHostPool#custom_rdp_properties}
  */
  readonly customRdpProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_host_pool#description VirtualDesktopHostPool#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_host_pool#friendly_name VirtualDesktopHostPool#friendly_name}
  */
  readonly friendlyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_host_pool#id VirtualDesktopHostPool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_host_pool#load_balancer_type VirtualDesktopHostPool#load_balancer_type}
  */
  readonly loadBalancerType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_host_pool#location VirtualDesktopHostPool#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_host_pool#maximum_sessions_allowed VirtualDesktopHostPool#maximum_sessions_allowed}
  */
  readonly maximumSessionsAllowed?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_host_pool#name VirtualDesktopHostPool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_host_pool#personal_desktop_assignment_type VirtualDesktopHostPool#personal_desktop_assignment_type}
  */
  readonly personalDesktopAssignmentType?: string;
  /**
  * Preferred App Group type to display
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_host_pool#preferred_app_group_type VirtualDesktopHostPool#preferred_app_group_type}
  */
  readonly preferredAppGroupType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_host_pool#resource_group_name VirtualDesktopHostPool#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_host_pool#start_vm_on_connect VirtualDesktopHostPool#start_vm_on_connect}
  */
  readonly startVmOnConnect?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_host_pool#tags VirtualDesktopHostPool#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_host_pool#type VirtualDesktopHostPool#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_host_pool#validate_environment VirtualDesktopHostPool#validate_environment}
  */
  readonly validateEnvironment?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_host_pool#timeouts VirtualDesktopHostPool#timeouts}
  */
  readonly timeouts?: VirtualDesktopHostPoolTimeouts;
}
export interface VirtualDesktopHostPoolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_host_pool#create VirtualDesktopHostPool#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_host_pool#delete VirtualDesktopHostPool#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_host_pool#read VirtualDesktopHostPool#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_host_pool#update VirtualDesktopHostPool#update}
  */
  readonly update?: string;
}

export function virtualDesktopHostPoolTimeoutsToTerraform(struct?: VirtualDesktopHostPoolTimeoutsOutputReference | VirtualDesktopHostPoolTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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

export class VirtualDesktopHostPoolTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualDesktopHostPoolTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualDesktopHostPoolTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_host_pool azurerm_virtual_desktop_host_pool}
*/
export class VirtualDesktopHostPool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_virtual_desktop_host_pool";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_host_pool azurerm_virtual_desktop_host_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualDesktopHostPoolConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualDesktopHostPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_virtual_desktop_host_pool',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '3.15.1',
        providerVersionConstraint: '~> 3.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customRdpProperties = config.customRdpProperties;
    this._description = config.description;
    this._friendlyName = config.friendlyName;
    this._id = config.id;
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
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_rdp_properties - computed: false, optional: true, required: false
  private _customRdpProperties?: string; 
  public get customRdpProperties() {
    return this.getStringAttribute('custom_rdp_properties');
  }
  public set customRdpProperties(value: string) {
    this._customRdpProperties = value;
  }
  public resetCustomRdpProperties() {
    this._customRdpProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRdpPropertiesInput() {
    return this._customRdpProperties;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // friendly_name - computed: false, optional: true, required: false
  private _friendlyName?: string; 
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }
  public set friendlyName(value: string) {
    this._friendlyName = value;
  }
  public resetFriendlyName() {
    this._friendlyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get friendlyNameInput() {
    return this._friendlyName;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // load_balancer_type - computed: false, optional: false, required: true
  private _loadBalancerType?: string; 
  public get loadBalancerType() {
    return this.getStringAttribute('load_balancer_type');
  }
  public set loadBalancerType(value: string) {
    this._loadBalancerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerTypeInput() {
    return this._loadBalancerType;
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
    return this._location;
  }

  // maximum_sessions_allowed - computed: false, optional: true, required: false
  private _maximumSessionsAllowed?: number; 
  public get maximumSessionsAllowed() {
    return this.getNumberAttribute('maximum_sessions_allowed');
  }
  public set maximumSessionsAllowed(value: number) {
    this._maximumSessionsAllowed = value;
  }
  public resetMaximumSessionsAllowed() {
    this._maximumSessionsAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumSessionsAllowedInput() {
    return this._maximumSessionsAllowed;
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
    return this._name;
  }

  // personal_desktop_assignment_type - computed: false, optional: true, required: false
  private _personalDesktopAssignmentType?: string; 
  public get personalDesktopAssignmentType() {
    return this.getStringAttribute('personal_desktop_assignment_type');
  }
  public set personalDesktopAssignmentType(value: string) {
    this._personalDesktopAssignmentType = value;
  }
  public resetPersonalDesktopAssignmentType() {
    this._personalDesktopAssignmentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get personalDesktopAssignmentTypeInput() {
    return this._personalDesktopAssignmentType;
  }

  // preferred_app_group_type - computed: false, optional: true, required: false
  private _preferredAppGroupType?: string; 
  public get preferredAppGroupType() {
    return this.getStringAttribute('preferred_app_group_type');
  }
  public set preferredAppGroupType(value: string) {
    this._preferredAppGroupType = value;
  }
  public resetPreferredAppGroupType() {
    this._preferredAppGroupType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredAppGroupTypeInput() {
    return this._preferredAppGroupType;
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
    return this._resourceGroupName;
  }

  // start_vm_on_connect - computed: false, optional: true, required: false
  private _startVmOnConnect?: boolean | cdktf.IResolvable; 
  public get startVmOnConnect() {
    return this.getBooleanAttribute('start_vm_on_connect');
  }
  public set startVmOnConnect(value: boolean | cdktf.IResolvable) {
    this._startVmOnConnect = value;
  }
  public resetStartVmOnConnect() {
    this._startVmOnConnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startVmOnConnectInput() {
    return this._startVmOnConnect;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // validate_environment - computed: false, optional: true, required: false
  private _validateEnvironment?: boolean | cdktf.IResolvable; 
  public get validateEnvironment() {
    return this.getBooleanAttribute('validate_environment');
  }
  public set validateEnvironment(value: boolean | cdktf.IResolvable) {
    this._validateEnvironment = value;
  }
  public resetValidateEnvironment() {
    this._validateEnvironment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateEnvironmentInput() {
    return this._validateEnvironment;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VirtualDesktopHostPoolTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VirtualDesktopHostPoolTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_rdp_properties: cdktf.stringToTerraform(this._customRdpProperties),
      description: cdktf.stringToTerraform(this._description),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      id: cdktf.stringToTerraform(this._id),
      load_balancer_type: cdktf.stringToTerraform(this._loadBalancerType),
      location: cdktf.stringToTerraform(this._location),
      maximum_sessions_allowed: cdktf.numberToTerraform(this._maximumSessionsAllowed),
      name: cdktf.stringToTerraform(this._name),
      personal_desktop_assignment_type: cdktf.stringToTerraform(this._personalDesktopAssignmentType),
      preferred_app_group_type: cdktf.stringToTerraform(this._preferredAppGroupType),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      start_vm_on_connect: cdktf.booleanToTerraform(this._startVmOnConnect),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      type: cdktf.stringToTerraform(this._type),
      validate_environment: cdktf.booleanToTerraform(this._validateEnvironment),
      timeouts: virtualDesktopHostPoolTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
