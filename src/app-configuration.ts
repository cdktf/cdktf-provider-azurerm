// https://www.terraform.io/docs/providers/azurerm/r/app_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface AppConfigurationConfig extends TerraformMetaArguments {
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly sku?: string;
  readonly tags?: { [key: string]: string };
  /** timeouts block */
  readonly timeouts?: AppConfigurationTimeouts;
}
export class AppConfigurationPrimaryReadKey extends ComplexComputedList {

  // connection_string - computed: true, optional: false, required: true
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // secret - computed: true, optional: false, required: true
  public get secret() {
    return this.getStringAttribute('secret');
  }
}
export class AppConfigurationPrimaryWriteKey extends ComplexComputedList {

  // connection_string - computed: true, optional: false, required: true
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // secret - computed: true, optional: false, required: true
  public get secret() {
    return this.getStringAttribute('secret');
  }
}
export class AppConfigurationSecondaryReadKey extends ComplexComputedList {

  // connection_string - computed: true, optional: false, required: true
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // secret - computed: true, optional: false, required: true
  public get secret() {
    return this.getStringAttribute('secret');
  }
}
export class AppConfigurationSecondaryWriteKey extends ComplexComputedList {

  // connection_string - computed: true, optional: false, required: true
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // secret - computed: true, optional: false, required: true
  public get secret() {
    return this.getStringAttribute('secret');
  }
}
export interface AppConfigurationTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class AppConfiguration extends TerraformResource {

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
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // endpoint - computed: true, optional: false, required: true
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this._location;
  }
  public set location(value: string) {
    this._location = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // primary_read_key - computed: true, optional: false, required: true
  public primaryReadKey(index: string) {
    return new AppConfigurationPrimaryReadKey(this, 'primary_read_key', index);
  }

  // primary_write_key - computed: true, optional: false, required: true
  public primaryWriteKey(index: string) {
    return new AppConfigurationPrimaryWriteKey(this, 'primary_write_key', index);
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // secondary_read_key - computed: true, optional: false, required: true
  public secondaryReadKey(index: string) {
    return new AppConfigurationSecondaryReadKey(this, 'secondary_read_key', index);
  }

  // secondary_write_key - computed: true, optional: false, required: true
  public secondaryWriteKey(index: string) {
    return new AppConfigurationSecondaryWriteKey(this, 'secondary_write_key', index);
  }

  // sku - computed: false, optional: true, required: false
  private _sku?: string;
  public get sku() {
    return this._sku;
  }
  public set sku(value: string | undefined) {
    this._sku = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AppConfigurationTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: AppConfigurationTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      location: this._location,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      sku: this._sku,
      tags: this._tags,
      timeouts: this._timeouts,
    };
  }
}
