// https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_application_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualDesktopApplicationGroupConfig extends cdktf.TerraformMetaArguments {
  readonly description?: string;
  readonly friendlyName?: string;
  readonly hostPoolId: string;
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  readonly type: string;
  /** timeouts block */
  readonly timeouts?: VirtualDesktopApplicationGroupTimeouts;
}
export interface VirtualDesktopApplicationGroupTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function virtualDesktopApplicationGroupTimeoutsToTerraform(struct?: VirtualDesktopApplicationGroupTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class VirtualDesktopApplicationGroup extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: VirtualDesktopApplicationGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_virtual_desktop_application_group',
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
    this._hostPoolId = config.hostPoolId;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._type = config.type;
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

  // host_pool_id - computed: false, optional: false, required: true
  private _hostPoolId: string;
  public get hostPoolId() {
    return this.getStringAttribute('host_pool_id');
  }
  public set hostPoolId(value: string) {
    this._hostPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPoolIdInput() {
    return this._hostPoolId
  }

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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VirtualDesktopApplicationGroupTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: VirtualDesktopApplicationGroupTimeouts ) {
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
      description: cdktf.stringToTerraform(this._description),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      host_pool_id: cdktf.stringToTerraform(this._hostPoolId),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      type: cdktf.stringToTerraform(this._type),
      timeouts: virtualDesktopApplicationGroupTimeoutsToTerraform(this._timeouts),
    };
  }
}
