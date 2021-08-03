// https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MaintenanceConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration.html#location MaintenanceConfiguration#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration.html#name MaintenanceConfiguration#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration.html#properties MaintenanceConfiguration#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration.html#resource_group_name MaintenanceConfiguration#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration.html#scope MaintenanceConfiguration#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration.html#tags MaintenanceConfiguration#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration.html#visibility MaintenanceConfiguration#visibility}
  */
  readonly visibility?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration.html#timeouts MaintenanceConfiguration#timeouts}
  */
  readonly timeouts?: MaintenanceConfigurationTimeouts;
  /**
  * window block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration.html#window MaintenanceConfiguration#window}
  */
  readonly window?: MaintenanceConfigurationWindow[];
}
export interface MaintenanceConfigurationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration.html#create MaintenanceConfiguration#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration.html#delete MaintenanceConfiguration#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration.html#read MaintenanceConfiguration#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration.html#update MaintenanceConfiguration#update}
  */
  readonly update?: string;
}

function maintenanceConfigurationTimeoutsToTerraform(struct?: MaintenanceConfigurationTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export interface MaintenanceConfigurationWindow {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration.html#duration MaintenanceConfiguration#duration}
  */
  readonly duration?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration.html#expiration_date_time MaintenanceConfiguration#expiration_date_time}
  */
  readonly expirationDateTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration.html#recur_every MaintenanceConfiguration#recur_every}
  */
  readonly recurEvery?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration.html#start_date_time MaintenanceConfiguration#start_date_time}
  */
  readonly startDateTime: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration.html#time_zone MaintenanceConfiguration#time_zone}
  */
  readonly timeZone: string;
}

function maintenanceConfigurationWindowToTerraform(struct?: MaintenanceConfigurationWindow): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    expiration_date_time: cdktf.stringToTerraform(struct!.expirationDateTime),
    recur_every: cdktf.stringToTerraform(struct!.recurEvery),
    start_date_time: cdktf.stringToTerraform(struct!.startDateTime),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration.html azurerm_maintenance_configuration}
*/
export class MaintenanceConfiguration extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration.html azurerm_maintenance_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MaintenanceConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: MaintenanceConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_maintenance_configuration',
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
    this._properties = config.properties;
    this._resourceGroupName = config.resourceGroupName;
    this._scope = config.scope;
    this._tags = config.tags;
    this._visibility = config.visibility;
    this._timeouts = config.timeouts;
    this._window = config.window;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // properties - computed: false, optional: true, required: false
  private _properties?: { [key: string]: string };
  public get properties() {
    return this.interpolationForAttribute('properties') as any;
  }
  public set properties(value: { [key: string]: string } ) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties
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

  // scope - computed: false, optional: true, required: false
  private _scope?: string;
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string ) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope
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

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string;
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string ) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MaintenanceConfigurationTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: MaintenanceConfigurationTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // window - computed: false, optional: true, required: false
  private _window?: MaintenanceConfigurationWindow[];
  public get window() {
    return this.interpolationForAttribute('window') as any;
  }
  public set window(value: MaintenanceConfigurationWindow[] ) {
    this._window = value;
  }
  public resetWindow() {
    this._window = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowInput() {
    return this._window
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      properties: cdktf.hashMapper(cdktf.anyToTerraform)(this._properties),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      scope: cdktf.stringToTerraform(this._scope),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      visibility: cdktf.stringToTerraform(this._visibility),
      timeouts: maintenanceConfigurationTimeoutsToTerraform(this._timeouts),
      window: cdktf.listMapper(maintenanceConfigurationWindowToTerraform)(this._window),
    };
  }
}
