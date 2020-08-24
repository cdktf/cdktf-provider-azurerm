// https://www.terraform.io/docs/providers/azurerm/r/advanced_threat_protection.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface AdvancedThreatProtectionConfig extends TerraformMetaArguments {
  readonly enabled: boolean;
  readonly targetResourceId: string;
  /** timeouts block */
  readonly timeouts?: AdvancedThreatProtectionTimeouts;
}
export interface AdvancedThreatProtectionTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class AdvancedThreatProtection extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AdvancedThreatProtectionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_advanced_threat_protection',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._enabled = config.enabled;
    this._targetResourceId = config.targetResourceId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: false, required: true
  private _enabled: boolean;
  public get enabled() {
    return this._enabled;
  }
  public set enabled(value: boolean) {
    this._enabled = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // target_resource_id - computed: false, optional: false, required: true
  private _targetResourceId: string;
  public get targetResourceId() {
    return this._targetResourceId;
  }
  public set targetResourceId(value: string) {
    this._targetResourceId = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AdvancedThreatProtectionTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: AdvancedThreatProtectionTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: this._enabled,
      target_resource_id: this._targetResourceId,
      timeouts: this._timeouts,
    };
  }
}
