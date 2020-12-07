// https://www.terraform.io/docs/providers/azurerm/r/batch_application.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BatchApplicationConfig extends cdktf.TerraformMetaArguments {
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

function batchApplicationTimeoutsToTerraform(struct?: BatchApplicationTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class BatchApplication extends cdktf.TerraformResource {

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
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName
  }

  // allow_updates - computed: false, optional: true, required: false
  private _allowUpdates?: boolean;
  public get allowUpdates() {
    return this.getBooleanAttribute('allow_updates');
  }
  public set allowUpdates(value: boolean ) {
    this._allowUpdates = value;
  }
  public resetAllowUpdates() {
    this._allowUpdates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUpdatesInput() {
    return this._allowUpdates
  }

  // default_version - computed: false, optional: true, required: false
  private _defaultVersion?: string;
  public get defaultVersion() {
    return this.getStringAttribute('default_version');
  }
  public set defaultVersion(value: string ) {
    this._defaultVersion = value;
  }
  public resetDefaultVersion() {
    this._defaultVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultVersionInput() {
    return this._defaultVersion
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string ) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: BatchApplicationTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: BatchApplicationTimeouts ) {
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
      account_name: cdktf.stringToTerraform(this._accountName),
      allow_updates: cdktf.booleanToTerraform(this._allowUpdates),
      default_version: cdktf.stringToTerraform(this._defaultVersion),
      display_name: cdktf.stringToTerraform(this._displayName),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: batchApplicationTimeoutsToTerraform(this._timeouts),
    };
  }
}
