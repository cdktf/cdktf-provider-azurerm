// https://www.terraform.io/docs/providers/azurerm/r/log_analytics_storage_insights.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogAnalyticsStorageInsightsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_storage_insights.html#blob_container_names LogAnalyticsStorageInsights#blob_container_names}
  */
  readonly blobContainerNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_storage_insights.html#name LogAnalyticsStorageInsights#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_storage_insights.html#resource_group_name LogAnalyticsStorageInsights#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_storage_insights.html#storage_account_id LogAnalyticsStorageInsights#storage_account_id}
  */
  readonly storageAccountId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_storage_insights.html#storage_account_key LogAnalyticsStorageInsights#storage_account_key}
  */
  readonly storageAccountKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_storage_insights.html#table_names LogAnalyticsStorageInsights#table_names}
  */
  readonly tableNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_storage_insights.html#tags LogAnalyticsStorageInsights#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_storage_insights.html#workspace_id LogAnalyticsStorageInsights#workspace_id}
  */
  readonly workspaceId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_storage_insights.html#timeouts LogAnalyticsStorageInsights#timeouts}
  */
  readonly timeouts?: LogAnalyticsStorageInsightsTimeouts;
}
export interface LogAnalyticsStorageInsightsTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_storage_insights.html#create LogAnalyticsStorageInsights#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_storage_insights.html#delete LogAnalyticsStorageInsights#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_storage_insights.html#read LogAnalyticsStorageInsights#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_storage_insights.html#update LogAnalyticsStorageInsights#update}
  */
  readonly update?: string;
}

function logAnalyticsStorageInsightsTimeoutsToTerraform(struct?: LogAnalyticsStorageInsightsTimeoutsOutputReference | LogAnalyticsStorageInsightsTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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

export class LogAnalyticsStorageInsightsTimeoutsOutputReference extends cdktf.ComplexObject {
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

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_storage_insights.html azurerm_log_analytics_storage_insights}
*/
export class LogAnalyticsStorageInsights extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_log_analytics_storage_insights";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_storage_insights.html azurerm_log_analytics_storage_insights} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogAnalyticsStorageInsightsConfig
  */
  public constructor(scope: Construct, id: string, config: LogAnalyticsStorageInsightsConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_log_analytics_storage_insights',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._blobContainerNames = config.blobContainerNames;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._storageAccountId = config.storageAccountId;
    this._storageAccountKey = config.storageAccountKey;
    this._tableNames = config.tableNames;
    this._tags = config.tags;
    this._workspaceId = config.workspaceId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blob_container_names - computed: false, optional: true, required: false
  private _blobContainerNames?: string[] | undefined; 
  public get blobContainerNames() {
    return this.getListAttribute('blob_container_names');
  }
  public set blobContainerNames(value: string[] | undefined) {
    this._blobContainerNames = value;
  }
  public resetBlobContainerNames() {
    this._blobContainerNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blobContainerNamesInput() {
    return this._blobContainerNames
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
    return this._resourceGroupName
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

  // storage_account_key - computed: false, optional: false, required: true
  private _storageAccountKey?: string; 
  public get storageAccountKey() {
    return this.getStringAttribute('storage_account_key');
  }
  public set storageAccountKey(value: string) {
    this._storageAccountKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountKeyInput() {
    return this._storageAccountKey
  }

  // table_names - computed: false, optional: true, required: false
  private _tableNames?: string[] | undefined; 
  public get tableNames() {
    return this.getListAttribute('table_names');
  }
  public set tableNames(value: string[] | undefined) {
    this._tableNames = value;
  }
  public resetTableNames() {
    this._tableNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNamesInput() {
    return this._tableNames
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LogAnalyticsStorageInsightsTimeouts | undefined; 
  private __timeoutsOutput = new LogAnalyticsStorageInsightsTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: LogAnalyticsStorageInsightsTimeouts | undefined) {
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
      blob_container_names: cdktf.listMapper(cdktf.stringToTerraform)(this._blobContainerNames),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      storage_account_id: cdktf.stringToTerraform(this._storageAccountId),
      storage_account_key: cdktf.stringToTerraform(this._storageAccountKey),
      table_names: cdktf.listMapper(cdktf.stringToTerraform)(this._tableNames),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
      timeouts: logAnalyticsStorageInsightsTimeoutsToTerraform(this._timeouts),
    };
  }
}
