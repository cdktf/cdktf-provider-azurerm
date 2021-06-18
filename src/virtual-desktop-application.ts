// https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualDesktopApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application.html#application_group_id VirtualDesktopApplication#application_group_id}
  */
  readonly applicationGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application.html#command_line_argument_policy VirtualDesktopApplication#command_line_argument_policy}
  */
  readonly commandLineArgumentPolicy: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application.html#command_line_arguments VirtualDesktopApplication#command_line_arguments}
  */
  readonly commandLineArguments?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application.html#description VirtualDesktopApplication#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application.html#friendly_name VirtualDesktopApplication#friendly_name}
  */
  readonly friendlyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application.html#icon_index VirtualDesktopApplication#icon_index}
  */
  readonly iconIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application.html#icon_path VirtualDesktopApplication#icon_path}
  */
  readonly iconPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application.html#name VirtualDesktopApplication#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application.html#path VirtualDesktopApplication#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application.html#show_in_portal VirtualDesktopApplication#show_in_portal}
  */
  readonly showInPortal?: boolean;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application.html#timeouts VirtualDesktopApplication#timeouts}
  */
  readonly timeouts?: VirtualDesktopApplicationTimeouts;
}
export interface VirtualDesktopApplicationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application.html#create VirtualDesktopApplication#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application.html#delete VirtualDesktopApplication#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application.html#read VirtualDesktopApplication#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application.html#update VirtualDesktopApplication#update}
  */
  readonly update?: string;
}

function virtualDesktopApplicationTimeoutsToTerraform(struct?: VirtualDesktopApplicationTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application.html azurerm_virtual_desktop_application}
*/
export class VirtualDesktopApplication extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application.html azurerm_virtual_desktop_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualDesktopApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualDesktopApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_virtual_desktop_application',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._applicationGroupId = config.applicationGroupId;
    this._commandLineArgumentPolicy = config.commandLineArgumentPolicy;
    this._commandLineArguments = config.commandLineArguments;
    this._description = config.description;
    this._friendlyName = config.friendlyName;
    this._iconIndex = config.iconIndex;
    this._iconPath = config.iconPath;
    this._name = config.name;
    this._path = config.path;
    this._showInPortal = config.showInPortal;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_group_id - computed: false, optional: false, required: true
  private _applicationGroupId: string;
  public get applicationGroupId() {
    return this.getStringAttribute('application_group_id');
  }
  public set applicationGroupId(value: string) {
    this._applicationGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationGroupIdInput() {
    return this._applicationGroupId
  }

  // command_line_argument_policy - computed: false, optional: false, required: true
  private _commandLineArgumentPolicy: string;
  public get commandLineArgumentPolicy() {
    return this.getStringAttribute('command_line_argument_policy');
  }
  public set commandLineArgumentPolicy(value: string) {
    this._commandLineArgumentPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandLineArgumentPolicyInput() {
    return this._commandLineArgumentPolicy
  }

  // command_line_arguments - computed: false, optional: true, required: false
  private _commandLineArguments?: string;
  public get commandLineArguments() {
    return this.getStringAttribute('command_line_arguments');
  }
  public set commandLineArguments(value: string ) {
    this._commandLineArguments = value;
  }
  public resetCommandLineArguments() {
    this._commandLineArguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandLineArgumentsInput() {
    return this._commandLineArguments
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

  // friendly_name - computed: true, optional: true, required: false
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
    return this._friendlyName
  }

  // icon_index - computed: false, optional: true, required: false
  private _iconIndex?: number;
  public get iconIndex() {
    return this.getNumberAttribute('icon_index');
  }
  public set iconIndex(value: number ) {
    this._iconIndex = value;
  }
  public resetIconIndex() {
    this._iconIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconIndexInput() {
    return this._iconIndex
  }

  // icon_path - computed: true, optional: true, required: false
  private _iconPath?: string;
  public get iconPath() {
    return this.getStringAttribute('icon_path');
  }
  public set iconPath(value: string) {
    this._iconPath = value;
  }
  public resetIconPath() {
    this._iconPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconPathInput() {
    return this._iconPath
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // path - computed: false, optional: false, required: true
  private _path: string;
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path
  }

  // show_in_portal - computed: false, optional: true, required: false
  private _showInPortal?: boolean;
  public get showInPortal() {
    return this.getBooleanAttribute('show_in_portal');
  }
  public set showInPortal(value: boolean ) {
    this._showInPortal = value;
  }
  public resetShowInPortal() {
    this._showInPortal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showInPortalInput() {
    return this._showInPortal
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VirtualDesktopApplicationTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: VirtualDesktopApplicationTimeouts ) {
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
      application_group_id: cdktf.stringToTerraform(this._applicationGroupId),
      command_line_argument_policy: cdktf.stringToTerraform(this._commandLineArgumentPolicy),
      command_line_arguments: cdktf.stringToTerraform(this._commandLineArguments),
      description: cdktf.stringToTerraform(this._description),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      icon_index: cdktf.numberToTerraform(this._iconIndex),
      icon_path: cdktf.stringToTerraform(this._iconPath),
      name: cdktf.stringToTerraform(this._name),
      path: cdktf.stringToTerraform(this._path),
      show_in_portal: cdktf.booleanToTerraform(this._showInPortal),
      timeouts: virtualDesktopApplicationTimeoutsToTerraform(this._timeouts),
    };
  }
}
