// https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_nfs_target.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HpcCacheNfsTargetConfig extends cdktf.TerraformMetaArguments {
  readonly cacheName: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly targetHostName: string;
  readonly usageModel: string;
  /** namespace_junction block */
  readonly namespaceJunction: HpcCacheNfsTargetNamespaceJunction[];
  /** timeouts block */
  readonly timeouts?: HpcCacheNfsTargetTimeouts;
}
export interface HpcCacheNfsTargetNamespaceJunction {
  readonly accessPolicyName?: string;
  readonly namespacePath: string;
  readonly nfsExport: string;
  readonly targetPath?: string;
}

function hpcCacheNfsTargetNamespaceJunctionToTerraform(struct?: HpcCacheNfsTargetNamespaceJunction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    access_policy_name: cdktf.stringToTerraform(struct!.accessPolicyName),
    namespace_path: cdktf.stringToTerraform(struct!.namespacePath),
    nfs_export: cdktf.stringToTerraform(struct!.nfsExport),
    target_path: cdktf.stringToTerraform(struct!.targetPath),
  }
}

export interface HpcCacheNfsTargetTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function hpcCacheNfsTargetTimeoutsToTerraform(struct?: HpcCacheNfsTargetTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class HpcCacheNfsTarget extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: HpcCacheNfsTargetConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_hpc_cache_nfs_target',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cacheName = config.cacheName;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._targetHostName = config.targetHostName;
    this._usageModel = config.usageModel;
    this._namespaceJunction = config.namespaceJunction;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cache_name - computed: false, optional: false, required: true
  private _cacheName: string;
  public get cacheName() {
    return this.getStringAttribute('cache_name');
  }
  public set cacheName(value: string) {
    this._cacheName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheNameInput() {
    return this._cacheName
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

  // target_host_name - computed: false, optional: false, required: true
  private _targetHostName: string;
  public get targetHostName() {
    return this.getStringAttribute('target_host_name');
  }
  public set targetHostName(value: string) {
    this._targetHostName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetHostNameInput() {
    return this._targetHostName
  }

  // usage_model - computed: false, optional: false, required: true
  private _usageModel: string;
  public get usageModel() {
    return this.getStringAttribute('usage_model');
  }
  public set usageModel(value: string) {
    this._usageModel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usageModelInput() {
    return this._usageModel
  }

  // namespace_junction - computed: false, optional: false, required: true
  private _namespaceJunction: HpcCacheNfsTargetNamespaceJunction[];
  public get namespaceJunction() {
    return this.interpolationForAttribute('namespace_junction') as any;
  }
  public set namespaceJunction(value: HpcCacheNfsTargetNamespaceJunction[]) {
    this._namespaceJunction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceJunctionInput() {
    return this._namespaceJunction
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: HpcCacheNfsTargetTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: HpcCacheNfsTargetTimeouts ) {
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
      cache_name: cdktf.stringToTerraform(this._cacheName),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      target_host_name: cdktf.stringToTerraform(this._targetHostName),
      usage_model: cdktf.stringToTerraform(this._usageModel),
      namespace_junction: cdktf.listMapper(hpcCacheNfsTargetNamespaceJunctionToTerraform)(this._namespaceJunction),
      timeouts: hpcCacheNfsTargetTimeoutsToTerraform(this._timeouts),
    };
  }
}
