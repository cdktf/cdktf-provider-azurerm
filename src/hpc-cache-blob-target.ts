// https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_blob_target.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HpcCacheBlobTargetConfig extends cdktf.TerraformMetaArguments {
  readonly cacheName: string;
  readonly name: string;
  readonly namespacePath: string;
  readonly resourceGroupName: string;
  readonly storageContainerId: string;
  /** timeouts block */
  readonly timeouts?: HpcCacheBlobTargetTimeouts;
}
export interface HpcCacheBlobTargetTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function hpcCacheBlobTargetTimeoutsToTerraform(struct?: HpcCacheBlobTargetTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class HpcCacheBlobTarget extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: HpcCacheBlobTargetConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_hpc_cache_blob_target',
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
    this._namespacePath = config.namespacePath;
    this._resourceGroupName = config.resourceGroupName;
    this._storageContainerId = config.storageContainerId;
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

  // namespace_path - computed: false, optional: false, required: true
  private _namespacePath: string;
  public get namespacePath() {
    return this.getStringAttribute('namespace_path');
  }
  public set namespacePath(value: string) {
    this._namespacePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacePathInput() {
    return this._namespacePath
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

  // storage_container_id - computed: false, optional: false, required: true
  private _storageContainerId: string;
  public get storageContainerId() {
    return this.getStringAttribute('storage_container_id');
  }
  public set storageContainerId(value: string) {
    this._storageContainerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageContainerIdInput() {
    return this._storageContainerId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: HpcCacheBlobTargetTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: HpcCacheBlobTargetTimeouts ) {
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
      namespace_path: cdktf.stringToTerraform(this._namespacePath),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      storage_container_id: cdktf.stringToTerraform(this._storageContainerId),
      timeouts: hpcCacheBlobTargetTimeoutsToTerraform(this._timeouts),
    };
  }
}
