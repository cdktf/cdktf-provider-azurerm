// https://www.terraform.io/docs/providers/azurerm/r/app_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppConfigurationConfig extends cdktf.TerraformMetaArguments {
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly sku?: string;
  readonly tags?: { [key: string]: string };
  /** identity block */
  readonly identity?: AppConfigurationIdentity[];
  /** timeouts block */
  readonly timeouts?: AppConfigurationTimeouts;
}
export class AppConfigurationPrimaryReadKey extends cdktf.ComplexComputedList {

  // connection_string - computed: true, optional: false, required: false
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }
}
export class AppConfigurationPrimaryWriteKey extends cdktf.ComplexComputedList {

  // connection_string - computed: true, optional: false, required: false
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }
}
export class AppConfigurationSecondaryReadKey extends cdktf.ComplexComputedList {

  // connection_string - computed: true, optional: false, required: false
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }
}
export class AppConfigurationSecondaryWriteKey extends cdktf.ComplexComputedList {

  // connection_string - computed: true, optional: false, required: false
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }
}
export interface AppConfigurationIdentity {
  readonly type: string;
}

function appConfigurationIdentityToTerraform(struct?: AppConfigurationIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface AppConfigurationTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function appConfigurationTimeoutsToTerraform(struct?: AppConfigurationTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class AppConfiguration extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AppConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_app_configuration',
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
    this._sku = config.sku;
    this._tags = config.tags;
    this._identity = config.identity;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
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

  // primary_read_key - computed: true, optional: false, required: false
  public primaryReadKey(index: string) {
    return new AppConfigurationPrimaryReadKey(this, 'primary_read_key', index);
  }

  // primary_write_key - computed: true, optional: false, required: false
  public primaryWriteKey(index: string) {
    return new AppConfigurationPrimaryWriteKey(this, 'primary_write_key', index);
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

  // secondary_read_key - computed: true, optional: false, required: false
  public secondaryReadKey(index: string) {
    return new AppConfigurationSecondaryReadKey(this, 'secondary_read_key', index);
  }

  // secondary_write_key - computed: true, optional: false, required: false
  public secondaryWriteKey(index: string) {
    return new AppConfigurationSecondaryWriteKey(this, 'secondary_write_key', index);
  }

  // sku - computed: false, optional: true, required: false
  private _sku?: string;
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string ) {
    this._sku = value;
  }
  public resetSku() {
    this._sku = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku
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

  // identity - computed: false, optional: true, required: false
  private _identity?: AppConfigurationIdentity[];
  public get identity() {
    return this.interpolationForAttribute('identity') as any;
  }
  public set identity(value: AppConfigurationIdentity[] ) {
    this._identity = value;
  }
  public resetIdentity() {
    this._identity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AppConfigurationTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: AppConfigurationTimeouts ) {
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
      sku: cdktf.stringToTerraform(this._sku),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      identity: cdktf.listMapper(appConfigurationIdentityToTerraform)(this._identity),
      timeouts: appConfigurationTimeoutsToTerraform(this._timeouts),
    };
  }
}
