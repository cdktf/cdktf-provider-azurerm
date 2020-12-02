// https://www.terraform.io/docs/providers/azurerm/r/log_analytics_storage_insights.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface LogAnalyticsStorageInsightsConfig extends TerraformMetaArguments {
  readonly blobContainerNames?: string[];
  readonly name: string;
  readonly resourceGroupName: string;
  readonly storageAccountId: string;
  readonly storageAccountKey: string;
  readonly tableNames?: string[];
  readonly tags?: { [key: string]: string };
  readonly workspaceId: string;
  /** timeouts block */
  readonly timeouts?: LogAnalyticsStorageInsightsTimeouts;
}
export interface LogAnalyticsStorageInsightsTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class LogAnalyticsStorageInsights extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _blobContainerNames?: string[];
  public get blobContainerNames() {
    return this.getListAttribute('blob_container_names');
  }
  public set blobContainerNames(value: string[] ) {
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

  // storage_account_id - computed: false, optional: false, required: true
  private _storageAccountId: string;
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
  private _storageAccountKey: string;
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
  private _tableNames?: string[];
  public get tableNames() {
    return this.getListAttribute('table_names');
  }
  public set tableNames(value: string[] ) {
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
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
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
  private _workspaceId: string;
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
  private _timeouts?: LogAnalyticsStorageInsightsTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: LogAnalyticsStorageInsightsTimeouts ) {
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
      blob_container_names: this._blobContainerNames,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      storage_account_id: this._storageAccountId,
      storage_account_key: this._storageAccountKey,
      table_names: this._tableNames,
      tags: this._tags,
      workspace_id: this._workspaceId,
      timeouts: this._timeouts,
    };
  }
}
