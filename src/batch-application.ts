// https://www.terraform.io/docs/providers/azurerm/r/batch_application.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface BatchApplicationConfig extends TerraformMetaArguments {
  readonly accountName: string;
  readonly allowUpdates?: boolean;
  readonly defaultVersion?: string;
  readonly displayName?: string;
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: BatchApplicationTimeouts;
}
export interface BatchApplicationTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class BatchApplication extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: BatchApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_batch_application',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountName = config.accountName;
    this._allowUpdates = config.allowUpdates;
    this._defaultVersion = config.defaultVersion;
    this._displayName = config.displayName;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_name - computed: false, optional: false, required: true
  private _accountName: string;
  public get accountName() {
    return this._accountName;
  }
  public set accountName(value: string) {
    this._accountName = value;
  }

  // allow_updates - computed: false, optional: true, required: false
  private _allowUpdates?: boolean;
  public get allowUpdates() {
    return this._allowUpdates;
  }
  public set allowUpdates(value: boolean | undefined) {
    this._allowUpdates = value;
  }

  // default_version - computed: false, optional: true, required: false
  private _defaultVersion?: string;
  public get defaultVersion() {
    return this._defaultVersion;
  }
  public set defaultVersion(value: string | undefined) {
    this._defaultVersion = value;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: BatchApplicationTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: BatchApplicationTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_name: this._accountName,
      allow_updates: this._allowUpdates,
      default_version: this._defaultVersion,
      display_name: this._displayName,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
