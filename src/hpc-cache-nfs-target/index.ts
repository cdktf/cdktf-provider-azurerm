// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache_nfs_target
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HpcCacheNfsTargetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache_nfs_target#cache_name HpcCacheNfsTarget#cache_name}
  */
  readonly cacheName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache_nfs_target#id HpcCacheNfsTarget#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache_nfs_target#name HpcCacheNfsTarget#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache_nfs_target#resource_group_name HpcCacheNfsTarget#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache_nfs_target#target_host_name HpcCacheNfsTarget#target_host_name}
  */
  readonly targetHostName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache_nfs_target#usage_model HpcCacheNfsTarget#usage_model}
  */
  readonly usageModel: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache_nfs_target#verification_timer_in_seconds HpcCacheNfsTarget#verification_timer_in_seconds}
  */
  readonly verificationTimerInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache_nfs_target#write_back_timer_in_seconds HpcCacheNfsTarget#write_back_timer_in_seconds}
  */
  readonly writeBackTimerInSeconds?: number;
  /**
  * namespace_junction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache_nfs_target#namespace_junction HpcCacheNfsTarget#namespace_junction}
  */
  readonly namespaceJunction: HpcCacheNfsTargetNamespaceJunction[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache_nfs_target#timeouts HpcCacheNfsTarget#timeouts}
  */
  readonly timeouts?: HpcCacheNfsTargetTimeouts;
}
export interface HpcCacheNfsTargetNamespaceJunction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache_nfs_target#access_policy_name HpcCacheNfsTarget#access_policy_name}
  */
  readonly accessPolicyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache_nfs_target#namespace_path HpcCacheNfsTarget#namespace_path}
  */
  readonly namespacePath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache_nfs_target#nfs_export HpcCacheNfsTarget#nfs_export}
  */
  readonly nfsExport: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache_nfs_target#target_path HpcCacheNfsTarget#target_path}
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


export function hpcCacheNfsTargetNamespaceJunctionToHclTerraform(struct?: HpcCacheNfsTargetNamespaceJunction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_policy_name: {
      value: cdktf.stringToHclTerraform(struct!.accessPolicyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace_path: {
      value: cdktf.stringToHclTerraform(struct!.namespacePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nfs_export: {
      value: cdktf.stringToHclTerraform(struct!.nfsExport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_path: {
      value: cdktf.stringToHclTerraform(struct!.targetPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HpcCacheNfsTargetNamespaceJunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HpcCacheNfsTargetNamespaceJunction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessPolicyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessPolicyName = this._accessPolicyName;
    }
    if (this._namespacePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespacePath = this._namespacePath;
    }
    if (this._nfsExport !== undefined) {
      hasAnyValues = true;
      internalValueResult.nfsExport = this._nfsExport;
    }
    if (this._targetPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPath = this._targetPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HpcCacheNfsTargetNamespaceJunction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessPolicyName = undefined;
      this._namespacePath = undefined;
      this._nfsExport = undefined;
      this._targetPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessPolicyName = value.accessPolicyName;
      this._namespacePath = value.namespacePath;
      this._nfsExport = value.nfsExport;
      this._targetPath = value.targetPath;
    }
  }

  // access_policy_name - computed: false, optional: true, required: false
  private _accessPolicyName?: string; 
  public get accessPolicyName() {
    return this.getStringAttribute('access_policy_name');
  }
  public set accessPolicyName(value: string) {
    this._accessPolicyName = value;
  }
  public resetAccessPolicyName() {
    this._accessPolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPolicyNameInput() {
    return this._accessPolicyName;
  }

  // namespace_path - computed: false, optional: false, required: true
  private _namespacePath?: string; 
  public get namespacePath() {
    return this.getStringAttribute('namespace_path');
  }
  public set namespacePath(value: string) {
    this._namespacePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacePathInput() {
    return this._namespacePath;
  }

  // nfs_export - computed: false, optional: false, required: true
  private _nfsExport?: string; 
  public get nfsExport() {
    return this.getStringAttribute('nfs_export');
  }
  public set nfsExport(value: string) {
    this._nfsExport = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsExportInput() {
    return this._nfsExport;
  }

  // target_path - computed: false, optional: true, required: false
  private _targetPath?: string; 
  public get targetPath() {
    return this.getStringAttribute('target_path');
  }
  public set targetPath(value: string) {
    this._targetPath = value;
  }
  public resetTargetPath() {
    this._targetPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPathInput() {
    return this._targetPath;
  }
}

export class HpcCacheNfsTargetNamespaceJunctionList extends cdktf.ComplexList {
  public internalValue? : HpcCacheNfsTargetNamespaceJunction[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HpcCacheNfsTargetNamespaceJunctionOutputReference {
    return new HpcCacheNfsTargetNamespaceJunctionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HpcCacheNfsTargetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache_nfs_target#create HpcCacheNfsTarget#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache_nfs_target#delete HpcCacheNfsTarget#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache_nfs_target#read HpcCacheNfsTarget#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache_nfs_target#update HpcCacheNfsTarget#update}
  */
  readonly update?: string;
}

export function hpcCacheNfsTargetTimeoutsToTerraform(struct?: HpcCacheNfsTargetTimeouts | cdktf.IResolvable): any {
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


export function hpcCacheNfsTargetTimeoutsToHclTerraform(struct?: HpcCacheNfsTargetTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HpcCacheNfsTargetTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HpcCacheNfsTargetTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: HpcCacheNfsTargetTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache_nfs_target azurerm_hpc_cache_nfs_target}
*/
export class HpcCacheNfsTarget extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_hpc_cache_nfs_target";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HpcCacheNfsTarget resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HpcCacheNfsTarget to import
  * @param importFromId The id of the existing HpcCacheNfsTarget that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache_nfs_target#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HpcCacheNfsTarget to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_hpc_cache_nfs_target", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache_nfs_target azurerm_hpc_cache_nfs_target} Resource
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
        providerVersion: '4.3.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cacheName = config.cacheName;
    this._id = config.id;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._targetHostName = config.targetHostName;
    this._usageModel = config.usageModel;
    this._verificationTimerInSeconds = config.verificationTimerInSeconds;
    this._writeBackTimerInSeconds = config.writeBackTimerInSeconds;
    this._namespaceJunction.internalValue = config.namespaceJunction;
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
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // verification_timer_in_seconds - computed: false, optional: true, required: false
  private _verificationTimerInSeconds?: number; 
  public get verificationTimerInSeconds() {
    return this.getNumberAttribute('verification_timer_in_seconds');
  }
  public set verificationTimerInSeconds(value: number) {
    this._verificationTimerInSeconds = value;
  }
  public resetVerificationTimerInSeconds() {
    this._verificationTimerInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verificationTimerInSecondsInput() {
    return this._verificationTimerInSeconds;
  }

  // write_back_timer_in_seconds - computed: false, optional: true, required: false
  private _writeBackTimerInSeconds?: number; 
  public get writeBackTimerInSeconds() {
    return this.getNumberAttribute('write_back_timer_in_seconds');
  }
  public set writeBackTimerInSeconds(value: number) {
    this._writeBackTimerInSeconds = value;
  }
  public resetWriteBackTimerInSeconds() {
    this._writeBackTimerInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeBackTimerInSecondsInput() {
    return this._writeBackTimerInSeconds;
  }

  // namespace_junction - computed: false, optional: false, required: true
  private _namespaceJunction = new HpcCacheNfsTargetNamespaceJunctionList(this, "namespace_junction", true);
  public get namespaceJunction() {
    return this._namespaceJunction;
  }
  public putNamespaceJunction(value: HpcCacheNfsTargetNamespaceJunction[] | cdktf.IResolvable) {
    this._namespaceJunction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceJunctionInput() {
    return this._namespaceJunction.internalValue;
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      target_host_name: cdktf.stringToTerraform(this._targetHostName),
      usage_model: cdktf.stringToTerraform(this._usageModel),
      verification_timer_in_seconds: cdktf.numberToTerraform(this._verificationTimerInSeconds),
      write_back_timer_in_seconds: cdktf.numberToTerraform(this._writeBackTimerInSeconds),
      namespace_junction: cdktf.listMapper(hpcCacheNfsTargetNamespaceJunctionToTerraform, true)(this._namespaceJunction.internalValue),
      timeouts: hpcCacheNfsTargetTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cache_name: {
        value: cdktf.stringToHclTerraform(this._cacheName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_host_name: {
        value: cdktf.stringToHclTerraform(this._targetHostName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      usage_model: {
        value: cdktf.stringToHclTerraform(this._usageModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verification_timer_in_seconds: {
        value: cdktf.numberToHclTerraform(this._verificationTimerInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      write_back_timer_in_seconds: {
        value: cdktf.numberToHclTerraform(this._writeBackTimerInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      namespace_junction: {
        value: cdktf.listMapperHcl(hpcCacheNfsTargetNamespaceJunctionToHclTerraform, true)(this._namespaceJunction.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "HpcCacheNfsTargetNamespaceJunctionList",
      },
      timeouts: {
        value: hpcCacheNfsTargetTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "HpcCacheNfsTargetTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
