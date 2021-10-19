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
  readonly properties?: { [key: string]: string } | cdktf.IResolvable;
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
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
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
  readonly window?: MaintenanceConfigurationWindow;
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

function maintenanceConfigurationTimeoutsToTerraform(struct?: MaintenanceConfigurationTimeoutsOutputReference | MaintenanceConfigurationTimeouts): any {
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

export class MaintenanceConfigurationTimeoutsOutputReference extends cdktf.ComplexObject {
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

function maintenanceConfigurationWindowToTerraform(struct?: MaintenanceConfigurationWindowOutputReference | MaintenanceConfigurationWindow): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    expiration_date_time: cdktf.stringToTerraform(struct!.expirationDateTime),
    recur_every: cdktf.stringToTerraform(struct!.recurEvery),
    start_date_time: cdktf.stringToTerraform(struct!.startDateTime),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
  }
}

export class MaintenanceConfigurationWindowOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: string | undefined; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string | undefined) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration
  }

  // expiration_date_time - computed: false, optional: true, required: false
  private _expirationDateTime?: string | undefined; 
  public get expirationDateTime() {
    return this.getStringAttribute('expiration_date_time');
  }
  public set expirationDateTime(value: string | undefined) {
    this._expirationDateTime = value;
  }
  public resetExpirationDateTime() {
    this._expirationDateTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationDateTimeInput() {
    return this._expirationDateTime
  }

  // recur_every - computed: false, optional: true, required: false
  private _recurEvery?: string | undefined; 
  public get recurEvery() {
    return this.getStringAttribute('recur_every');
  }
  public set recurEvery(value: string | undefined) {
    this._recurEvery = value;
  }
  public resetRecurEvery() {
    this._recurEvery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurEveryInput() {
    return this._recurEvery
  }

  // start_date_time - computed: false, optional: false, required: true
  private _startDateTime?: string; 
  public get startDateTime() {
    return this.getStringAttribute('start_date_time');
  }
  public set startDateTime(value: string) {
    this._startDateTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateTimeInput() {
    return this._startDateTime
  }

  // time_zone - computed: false, optional: false, required: true
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration.html azurerm_maintenance_configuration}
*/
export class MaintenanceConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_maintenance_configuration";

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

  // properties - computed: false, optional: true, required: false
  private _properties?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get properties() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('properties') as any;
  }
  public set properties(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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

  // scope - computed: false, optional: true, required: false
  private _scope?: string | undefined; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string | undefined) {
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

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string | undefined; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string | undefined) {
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
  private _timeouts?: MaintenanceConfigurationTimeouts | undefined; 
  private __timeoutsOutput = new MaintenanceConfigurationTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: MaintenanceConfigurationTimeouts | undefined) {
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
  private _window?: MaintenanceConfigurationWindow | undefined; 
  private __windowOutput = new MaintenanceConfigurationWindowOutputReference(this as any, "window", true);
  public get window() {
    return this.__windowOutput;
  }
  public putWindow(value: MaintenanceConfigurationWindow | undefined) {
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
      window: maintenanceConfigurationWindowToTerraform(this._window),
    };
  }
}
