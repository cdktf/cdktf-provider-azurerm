// https://www.terraform.io/docs/providers/azurerm/r/database_migration_project.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DatabaseMigrationProjectConfig extends TerraformMetaArguments {
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly serviceName: string;
  readonly sourcePlatform: string;
  readonly tags?: { [key: string]: string };
  readonly targetPlatform: string;
  /** timeouts block */
  readonly timeouts?: DatabaseMigrationProjectTimeouts;
}
export interface DatabaseMigrationProjectTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class DatabaseMigrationProject extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DatabaseMigrationProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_database_migration_project',
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
    this._serviceName = config.serviceName;
    this._sourcePlatform = config.sourcePlatform;
    this._tags = config.tags;
    this._targetPlatform = config.targetPlatform;
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

  // service_name - computed: false, optional: false, required: true
  private _serviceName: string;
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName
  }

  // source_platform - computed: false, optional: false, required: true
  private _sourcePlatform: string;
  public get sourcePlatform() {
    return this.getStringAttribute('source_platform');
  }
  public set sourcePlatform(value: string) {
    this._sourcePlatform = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePlatformInput() {
    return this._sourcePlatform
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

  // target_platform - computed: false, optional: false, required: true
  private _targetPlatform: string;
  public get targetPlatform() {
    return this.getStringAttribute('target_platform');
  }
  public set targetPlatform(value: string) {
    this._targetPlatform = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPlatformInput() {
    return this._targetPlatform
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DatabaseMigrationProjectTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DatabaseMigrationProjectTimeouts ) {
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
      location: this._location,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      service_name: this._serviceName,
      source_platform: this._sourcePlatform,
      tags: this._tags,
      target_platform: this._targetPlatform,
      timeouts: this._timeouts,
    };
  }
}
