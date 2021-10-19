// https://www.terraform.io/docs/providers/azurerm/r/storage_sync_cloud_endpoint.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageSyncCloudEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_sync_cloud_endpoint.html#file_share_name StorageSyncCloudEndpoint#file_share_name}
  */
  readonly fileShareName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_sync_cloud_endpoint.html#name StorageSyncCloudEndpoint#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_sync_cloud_endpoint.html#storage_account_id StorageSyncCloudEndpoint#storage_account_id}
  */
  readonly storageAccountId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_sync_cloud_endpoint.html#storage_account_tenant_id StorageSyncCloudEndpoint#storage_account_tenant_id}
  */
  readonly storageAccountTenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_sync_cloud_endpoint.html#storage_sync_group_id StorageSyncCloudEndpoint#storage_sync_group_id}
  */
  readonly storageSyncGroupId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_sync_cloud_endpoint.html#timeouts StorageSyncCloudEndpoint#timeouts}
  */
  readonly timeouts?: StorageSyncCloudEndpointTimeouts;
}
export interface StorageSyncCloudEndpointTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_sync_cloud_endpoint.html#create StorageSyncCloudEndpoint#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_sync_cloud_endpoint.html#delete StorageSyncCloudEndpoint#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_sync_cloud_endpoint.html#read StorageSyncCloudEndpoint#read}
  */
  readonly read?: string;
}

function storageSyncCloudEndpointTimeoutsToTerraform(struct?: StorageSyncCloudEndpointTimeoutsOutputReference | StorageSyncCloudEndpointTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class StorageSyncCloudEndpointTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/storage_sync_cloud_endpoint.html azurerm_storage_sync_cloud_endpoint}
*/
export class StorageSyncCloudEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_storage_sync_cloud_endpoint";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/storage_sync_cloud_endpoint.html azurerm_storage_sync_cloud_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageSyncCloudEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: StorageSyncCloudEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_storage_sync_cloud_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._fileShareName = config.fileShareName;
    this._name = config.name;
    this._storageAccountId = config.storageAccountId;
    this._storageAccountTenantId = config.storageAccountTenantId;
    this._storageSyncGroupId = config.storageSyncGroupId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // file_share_name - computed: false, optional: false, required: true
  private _fileShareName?: string; 
  public get fileShareName() {
    return this.getStringAttribute('file_share_name');
  }
  public set fileShareName(value: string) {
    this._fileShareName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileShareNameInput() {
    return this._fileShareName
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
    return this._name
  }

  // storage_account_id - computed: false, optional: false, required: true
  private _storageAccountId?: string; 
  public get storageAccountId() {
    return this.getStringAttribute('storage_account_id');
  }
  public set storageAccountId(value: string) {
    this._storageAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountIdInput() {
    return this._storageAccountId
  }

  // storage_account_tenant_id - computed: true, optional: true, required: false
  private _storageAccountTenantId?: string | undefined; 
  public get storageAccountTenantId() {
    return this.getStringAttribute('storage_account_tenant_id');
  }
  public set storageAccountTenantId(value: string | undefined) {
    this._storageAccountTenantId = value;
  }
  public resetStorageAccountTenantId() {
    this._storageAccountTenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountTenantIdInput() {
    return this._storageAccountTenantId
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
    return this._storageSyncGroupId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: StorageSyncCloudEndpointTimeouts | undefined; 
  private __timeoutsOutput = new StorageSyncCloudEndpointTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: StorageSyncCloudEndpointTimeouts | undefined) {
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
      file_share_name: cdktf.stringToTerraform(this._fileShareName),
      name: cdktf.stringToTerraform(this._name),
      storage_account_id: cdktf.stringToTerraform(this._storageAccountId),
      storage_account_tenant_id: cdktf.stringToTerraform(this._storageAccountTenantId),
      storage_sync_group_id: cdktf.stringToTerraform(this._storageSyncGroupId),
      timeouts: storageSyncCloudEndpointTimeoutsToTerraform(this._timeouts),
    };
  }
}
