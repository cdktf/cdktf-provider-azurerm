// https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_nfs_target
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HpcCacheNfsTargetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_nfs_target#cache_name HpcCacheNfsTarget#cache_name}
  */
  readonly cacheName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_nfs_target#name HpcCacheNfsTarget#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_nfs_target#resource_group_name HpcCacheNfsTarget#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_nfs_target#target_host_name HpcCacheNfsTarget#target_host_name}
  */
  readonly targetHostName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_nfs_target#usage_model HpcCacheNfsTarget#usage_model}
  */
  readonly usageModel: string;
  /**
  * namespace_junction block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_nfs_target#namespace_junction HpcCacheNfsTarget#namespace_junction}
  */
  readonly namespaceJunction: HpcCacheNfsTargetNamespaceJunction[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_nfs_target#timeouts HpcCacheNfsTarget#timeouts}
  */
  readonly timeouts?: HpcCacheNfsTargetTimeouts;
}
export interface HpcCacheNfsTargetNamespaceJunction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_nfs_target#access_policy_name HpcCacheNfsTarget#access_policy_name}
  */
  readonly accessPolicyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_nfs_target#namespace_path HpcCacheNfsTarget#namespace_path}
  */
  readonly namespacePath: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_nfs_target#nfs_export HpcCacheNfsTarget#nfs_export}
  */
  readonly nfsExport: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_nfs_target#target_path HpcCacheNfsTarget#target_path}
  */
  readonly targetPath?: string;
}

export function hpcCacheNfsTargetNamespaceJunctionToTerraform(struct?: HpcCacheNfsTargetNamespaceJunction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_policy_name: cdktf.stringToTerraform(struct!.accessPolicyName),
    namespace_path: cdktf.stringToTerraform(struct!.namespacePath),
    nfs_export: cdktf.stringToTerraform(struct!.nfsExport),
    target_path: cdktf.stringToTerraform(struct!.targetPath),
  }
}

export interface HpcCacheNfsTargetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_nfs_target#create HpcCacheNfsTarget#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_nfs_target#delete HpcCacheNfsTarget#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_nfs_target#read HpcCacheNfsTarget#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_nfs_target#update HpcCacheNfsTarget#update}
  */
  readonly update?: string;
}

export function hpcCacheNfsTargetTimeoutsToTerraform(struct?: HpcCacheNfsTargetTimeoutsOutputReference | HpcCacheNfsTargetTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class HpcCacheNfsTargetTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HpcCacheNfsTargetTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HpcCacheNfsTargetTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_nfs_target azurerm_hpc_cache_nfs_target}
*/
export class HpcCacheNfsTarget extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_hpc_cache_nfs_target";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_nfs_target azurerm_hpc_cache_nfs_target} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HpcCacheNfsTargetConfig
  */
  public constructor(scope: Construct, id: string, config: HpcCacheNfsTargetConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_hpc_cache_nfs_target',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '2.99.0',
        providerVersionConstraint: '~> 2.0'
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
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cache_name - computed: false, optional: false, required: true
  private _cacheName?: string; 
  public get cacheName() {
    return this.getStringAttribute('cache_name');
  }
  public set cacheName(value: string) {
    this._cacheName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheNameInput() {
    return this._cacheName;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // target_host_name - computed: false, optional: false, required: true
  private _targetHostName?: string; 
  public get targetHostName() {
    return this.getStringAttribute('target_host_name');
  }
  public set targetHostName(value: string) {
    this._targetHostName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetHostNameInput() {
    return this._targetHostName;
  }

  // usage_model - computed: false, optional: false, required: true
  private _usageModel?: string; 
  public get usageModel() {
    return this.getStringAttribute('usage_model');
  }
  public set usageModel(value: string) {
    this._usageModel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usageModelInput() {
    return this._usageModel;
  }

  // namespace_junction - computed: false, optional: false, required: true
  private _namespaceJunction?: HpcCacheNfsTargetNamespaceJunction[] | cdktf.IResolvable; 
  public get namespaceJunction() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('namespace_junction')));
  }
  public set namespaceJunction(value: HpcCacheNfsTargetNamespaceJunction[] | cdktf.IResolvable) {
    this._namespaceJunction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceJunctionInput() {
    return this._namespaceJunction;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new HpcCacheNfsTargetTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: HpcCacheNfsTargetTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
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
      timeouts: hpcCacheNfsTargetTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
