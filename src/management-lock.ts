// https://www.terraform.io/docs/providers/azurerm/r/management_lock.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ManagementLockConfig extends TerraformMetaArguments {
  readonly lockLevel: string;
  readonly name: string;
  readonly notes?: string;
  readonly scope: string;
  /** timeouts block */
  readonly timeouts?: ManagementLockTimeouts;
}
export interface ManagementLockTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class ManagementLock extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ManagementLockConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_management_lock',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._lockLevel = config.lockLevel;
    this._name = config.name;
    this._notes = config.notes;
    this._scope = config.scope;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // lock_level - computed: false, optional: false, required: true
  private _lockLevel: string;
  public get lockLevel() {
    return this._lockLevel;
  }
  public set lockLevel(value: string) {
    this._lockLevel = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // notes - computed: false, optional: true, required: false
  private _notes?: string;
  public get notes() {
    return this._notes;
  }
  public set notes(value: string | undefined) {
    this._notes = value;
  }

  // scope - computed: false, optional: false, required: true
  private _scope: string;
  public get scope() {
    return this._scope;
  }
  public set scope(value: string) {
    this._scope = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ManagementLockTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ManagementLockTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      lock_level: this._lockLevel,
      name: this._name,
      notes: this._notes,
      scope: this._scope,
      timeouts: this._timeouts,
    };
  }
}
