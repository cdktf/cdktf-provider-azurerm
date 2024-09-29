// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_sync_server_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageSyncServerEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_sync_server_endpoint#cloud_tiering_enabled StorageSyncServerEndpoint#cloud_tiering_enabled}
  */
  readonly cloudTieringEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_sync_server_endpoint#id StorageSyncServerEndpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_sync_server_endpoint#initial_download_policy StorageSyncServerEndpoint#initial_download_policy}
  */
  readonly initialDownloadPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_sync_server_endpoint#local_cache_mode StorageSyncServerEndpoint#local_cache_mode}
  */
  readonly localCacheMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_sync_server_endpoint#name StorageSyncServerEndpoint#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_sync_server_endpoint#registered_server_id StorageSyncServerEndpoint#registered_server_id}
  */
  readonly registeredServerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_sync_server_endpoint#server_local_path StorageSyncServerEndpoint#server_local_path}
  */
  readonly serverLocalPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_sync_server_endpoint#storage_sync_group_id StorageSyncServerEndpoint#storage_sync_group_id}
  */
  readonly storageSyncGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_sync_server_endpoint#tier_files_older_than_days StorageSyncServerEndpoint#tier_files_older_than_days}
  */
  readonly tierFilesOlderThanDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_sync_server_endpoint#volume_free_space_percent StorageSyncServerEndpoint#volume_free_space_percent}
  */
  readonly volumeFreeSpacePercent?: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_sync_server_endpoint#timeouts StorageSyncServerEndpoint#timeouts}
  */
  readonly timeouts?: StorageSyncServerEndpointTimeouts;
}
export interface StorageSyncServerEndpointTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_sync_server_endpoint#create StorageSyncServerEndpoint#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_sync_server_endpoint#delete StorageSyncServerEndpoint#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_sync_server_endpoint#read StorageSyncServerEndpoint#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_sync_server_endpoint#update StorageSyncServerEndpoint#update}
  */
  readonly update?: string;
}

export function storageSyncServerEndpointTimeoutsToTerraform(struct?: StorageSyncServerEndpointTimeouts | cdktf.IResolvable): any {
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


export function storageSyncServerEndpointTimeoutsToHclTerraform(struct?: StorageSyncServerEndpointTimeouts | cdktf.IResolvable): any {
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

export class StorageSyncServerEndpointTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StorageSyncServerEndpointTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: StorageSyncServerEndpointTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_sync_server_endpoint azurerm_storage_sync_server_endpoint}
*/
export class StorageSyncServerEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_storage_sync_server_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StorageSyncServerEndpoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StorageSyncServerEndpoint to import
  * @param importFromId The id of the existing StorageSyncServerEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_sync_server_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StorageSyncServerEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_storage_sync_server_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_sync_server_endpoint azurerm_storage_sync_server_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageSyncServerEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: StorageSyncServerEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_storage_sync_server_endpoint',
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
    this._cloudTieringEnabled = config.cloudTieringEnabled;
    this._id = config.id;
    this._initialDownloadPolicy = config.initialDownloadPolicy;
    this._localCacheMode = config.localCacheMode;
    this._name = config.name;
    this._registeredServerId = config.registeredServerId;
    this._serverLocalPath = config.serverLocalPath;
    this._storageSyncGroupId = config.storageSyncGroupId;
    this._tierFilesOlderThanDays = config.tierFilesOlderThanDays;
    this._volumeFreeSpacePercent = config.volumeFreeSpacePercent;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_tiering_enabled - computed: false, optional: true, required: false
  private _cloudTieringEnabled?: boolean | cdktf.IResolvable; 
  public get cloudTieringEnabled() {
    return this.getBooleanAttribute('cloud_tiering_enabled');
  }
  public set cloudTieringEnabled(value: boolean | cdktf.IResolvable) {
    this._cloudTieringEnabled = value;
  }
  public resetCloudTieringEnabled() {
    this._cloudTieringEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudTieringEnabledInput() {
    return this._cloudTieringEnabled;
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

  // initial_download_policy - computed: false, optional: true, required: false
  private _initialDownloadPolicy?: string; 
  public get initialDownloadPolicy() {
    return this.getStringAttribute('initial_download_policy');
  }
  public set initialDownloadPolicy(value: string) {
    this._initialDownloadPolicy = value;
  }
  public resetInitialDownloadPolicy() {
    this._initialDownloadPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDownloadPolicyInput() {
    return this._initialDownloadPolicy;
  }

  // local_cache_mode - computed: false, optional: true, required: false
  private _localCacheMode?: string; 
  public get localCacheMode() {
    return this.getStringAttribute('local_cache_mode');
  }
  public set localCacheMode(value: string) {
    this._localCacheMode = value;
  }
  public resetLocalCacheMode() {
    this._localCacheMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localCacheModeInput() {
    return this._localCacheMode;
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

  // registered_server_id - computed: false, optional: false, required: true
  private _registeredServerId?: string; 
  public get registeredServerId() {
    return this.getStringAttribute('registered_server_id');
  }
  public set registeredServerId(value: string) {
    this._registeredServerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registeredServerIdInput() {
    return this._registeredServerId;
  }

  // server_local_path - computed: false, optional: false, required: true
  private _serverLocalPath?: string; 
  public get serverLocalPath() {
    return this.getStringAttribute('server_local_path');
  }
  public set serverLocalPath(value: string) {
    this._serverLocalPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverLocalPathInput() {
    return this._serverLocalPath;
  }

  // storage_sync_group_id - computed: false, optional: false, required: true
  private _storageSyncGroupId?: string; 
  public get storageSyncGroupId() {
    return this.getStringAttribute('storage_sync_group_id');
  }
  public set storageSyncGroupId(value: string) {
    this._storageSyncGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSyncGroupIdInput() {
    return this._storageSyncGroupId;
  }

  // tier_files_older_than_days - computed: false, optional: true, required: false
  private _tierFilesOlderThanDays?: number; 
  public get tierFilesOlderThanDays() {
    return this.getNumberAttribute('tier_files_older_than_days');
  }
  public set tierFilesOlderThanDays(value: number) {
    this._tierFilesOlderThanDays = value;
  }
  public resetTierFilesOlderThanDays() {
    this._tierFilesOlderThanDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tierFilesOlderThanDaysInput() {
    return this._tierFilesOlderThanDays;
  }

  // volume_free_space_percent - computed: false, optional: true, required: false
  private _volumeFreeSpacePercent?: number; 
  public get volumeFreeSpacePercent() {
    return this.getNumberAttribute('volume_free_space_percent');
  }
  public set volumeFreeSpacePercent(value: number) {
    this._volumeFreeSpacePercent = value;
  }
  public resetVolumeFreeSpacePercent() {
    this._volumeFreeSpacePercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeFreeSpacePercentInput() {
    return this._volumeFreeSpacePercent;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new StorageSyncServerEndpointTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: StorageSyncServerEndpointTimeouts) {
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
      cloud_tiering_enabled: cdktf.booleanToTerraform(this._cloudTieringEnabled),
      id: cdktf.stringToTerraform(this._id),
      initial_download_policy: cdktf.stringToTerraform(this._initialDownloadPolicy),
      local_cache_mode: cdktf.stringToTerraform(this._localCacheMode),
      name: cdktf.stringToTerraform(this._name),
      registered_server_id: cdktf.stringToTerraform(this._registeredServerId),
      server_local_path: cdktf.stringToTerraform(this._serverLocalPath),
      storage_sync_group_id: cdktf.stringToTerraform(this._storageSyncGroupId),
      tier_files_older_than_days: cdktf.numberToTerraform(this._tierFilesOlderThanDays),
      volume_free_space_percent: cdktf.numberToTerraform(this._volumeFreeSpacePercent),
      timeouts: storageSyncServerEndpointTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_tiering_enabled: {
        value: cdktf.booleanToHclTerraform(this._cloudTieringEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      initial_download_policy: {
        value: cdktf.stringToHclTerraform(this._initialDownloadPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_cache_mode: {
        value: cdktf.stringToHclTerraform(this._localCacheMode),
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
      registered_server_id: {
        value: cdktf.stringToHclTerraform(this._registeredServerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_local_path: {
        value: cdktf.stringToHclTerraform(this._serverLocalPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_sync_group_id: {
        value: cdktf.stringToHclTerraform(this._storageSyncGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tier_files_older_than_days: {
        value: cdktf.numberToHclTerraform(this._tierFilesOlderThanDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      volume_free_space_percent: {
        value: cdktf.numberToHclTerraform(this._volumeFreeSpacePercent),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeouts: {
        value: storageSyncServerEndpointTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StorageSyncServerEndpointTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
