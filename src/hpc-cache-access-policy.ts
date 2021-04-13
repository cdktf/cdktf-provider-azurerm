// https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_access_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HpcCacheAccessPolicyConfig extends cdktf.TerraformMetaArguments {
  readonly hpcCacheId: string;
  readonly name: string;
  /** access_rule block */
  readonly accessRule: HpcCacheAccessPolicyAccessRule[];
  /** timeouts block */
  readonly timeouts?: HpcCacheAccessPolicyTimeouts;
}
export interface HpcCacheAccessPolicyAccessRule {
  readonly access: string;
  readonly anonymousGid?: number;
  readonly anonymousUid?: number;
  readonly filter?: string;
  readonly rootSquashEnabled?: boolean;
  readonly scope: string;
  readonly submountAccessEnabled?: boolean;
  readonly suidEnabled?: boolean;
}

function hpcCacheAccessPolicyAccessRuleToTerraform(struct?: HpcCacheAccessPolicyAccessRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    access: cdktf.stringToTerraform(struct!.access),
    anonymous_gid: cdktf.numberToTerraform(struct!.anonymousGid),
    anonymous_uid: cdktf.numberToTerraform(struct!.anonymousUid),
    filter: cdktf.stringToTerraform(struct!.filter),
    root_squash_enabled: cdktf.booleanToTerraform(struct!.rootSquashEnabled),
    scope: cdktf.stringToTerraform(struct!.scope),
    submount_access_enabled: cdktf.booleanToTerraform(struct!.submountAccessEnabled),
    suid_enabled: cdktf.booleanToTerraform(struct!.suidEnabled),
  }
}

export interface HpcCacheAccessPolicyTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function hpcCacheAccessPolicyTimeoutsToTerraform(struct?: HpcCacheAccessPolicyTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class HpcCacheAccessPolicy extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: HpcCacheAccessPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_hpc_cache_access_policy',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._hpcCacheId = config.hpcCacheId;
    this._name = config.name;
    this._accessRule = config.accessRule;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // hpc_cache_id - computed: false, optional: false, required: true
  private _hpcCacheId: string;
  public get hpcCacheId() {
    return this.getStringAttribute('hpc_cache_id');
  }
  public set hpcCacheId(value: string) {
    this._hpcCacheId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hpcCacheIdInput() {
    return this._hpcCacheId
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

  // access_rule - computed: false, optional: false, required: true
  private _accessRule: HpcCacheAccessPolicyAccessRule[];
  public get accessRule() {
    return this.interpolationForAttribute('access_rule') as any;
  }
  public set accessRule(value: HpcCacheAccessPolicyAccessRule[]) {
    this._accessRule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessRuleInput() {
    return this._accessRule
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: HpcCacheAccessPolicyTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: HpcCacheAccessPolicyTimeouts ) {
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
      hpc_cache_id: cdktf.stringToTerraform(this._hpcCacheId),
      name: cdktf.stringToTerraform(this._name),
      access_rule: cdktf.listMapper(hpcCacheAccessPolicyAccessRuleToTerraform)(this._accessRule),
      timeouts: hpcCacheAccessPolicyTimeoutsToTerraform(this._timeouts),
    };
  }
}
