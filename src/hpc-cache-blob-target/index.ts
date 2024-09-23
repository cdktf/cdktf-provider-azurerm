// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache_blob_target
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HpcCacheBlobTargetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache_blob_target#access_policy_name HpcCacheBlobTarget#access_policy_name}
  */
  readonly accessPolicyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache_blob_target#cache_name HpcCacheBlobTarget#cache_name}
  */
  readonly cacheName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache_blob_target#id HpcCacheBlobTarget#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache_blob_target#name HpcCacheBlobTarget#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache_blob_target#namespace_path HpcCacheBlobTarget#namespace_path}
  */
  readonly namespacePath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache_blob_target#resource_group_name HpcCacheBlobTarget#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache_blob_target#storage_container_id HpcCacheBlobTarget#storage_container_id}
  */
  readonly storageContainerId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache_blob_target#timeouts HpcCacheBlobTarget#timeouts}
  */
  readonly timeouts?: HpcCacheBlobTargetTimeouts;
}
export interface HpcCacheBlobTargetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache_blob_target#create HpcCacheBlobTarget#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache_blob_target#delete HpcCacheBlobTarget#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache_blob_target#read HpcCacheBlobTarget#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache_blob_target#update HpcCacheBlobTarget#update}
  */
  readonly update?: string;
}

export function hpcCacheBlobTargetTimeoutsToTerraform(struct?: HpcCacheBlobTargetTimeouts | cdktf.IResolvable): any {
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


export function hpcCacheBlobTargetTimeoutsToHclTerraform(struct?: HpcCacheBlobTargetTimeouts | cdktf.IResolvable): any {
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

export class HpcCacheBlobTargetTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HpcCacheBlobTargetTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HpcCacheBlobTargetTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache_blob_target azurerm_hpc_cache_blob_target}
*/
export class HpcCacheBlobTarget extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_hpc_cache_blob_target";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HpcCacheBlobTarget resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HpcCacheBlobTarget to import
  * @param importFromId The id of the existing HpcCacheBlobTarget that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache_blob_target#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HpcCacheBlobTarget to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_hpc_cache_blob_target", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache_blob_target azurerm_hpc_cache_blob_target} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HpcCacheBlobTargetConfig
  */
  public constructor(scope: Construct, id: string, config: HpcCacheBlobTargetConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_hpc_cache_blob_target',
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
    this._accessPolicyName = config.accessPolicyName;
    this._cacheName = config.cacheName;
    this._id = config.id;
    this._name = config.name;
    this._namespacePath = config.namespacePath;
    this._resourceGroupName = config.resourceGroupName;
    this._storageContainerId = config.storageContainerId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // storage_container_id - computed: false, optional: false, required: true
  private _storageContainerId?: string; 
  public get storageContainerId() {
    return this.getStringAttribute('storage_container_id');
  }
  public set storageContainerId(value: string) {
    this._storageContainerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageContainerIdInput() {
    return this._storageContainerId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new HpcCacheBlobTargetTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: HpcCacheBlobTargetTimeouts) {
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
      access_policy_name: cdktf.stringToTerraform(this._accessPolicyName),
      cache_name: cdktf.stringToTerraform(this._cacheName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      namespace_path: cdktf.stringToTerraform(this._namespacePath),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      storage_container_id: cdktf.stringToTerraform(this._storageContainerId),
      timeouts: hpcCacheBlobTargetTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_policy_name: {
        value: cdktf.stringToHclTerraform(this._accessPolicyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      namespace_path: {
        value: cdktf.stringToHclTerraform(this._namespacePath),
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
      storage_container_id: {
        value: cdktf.stringToHclTerraform(this._storageContainerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: hpcCacheBlobTargetTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "HpcCacheBlobTargetTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
