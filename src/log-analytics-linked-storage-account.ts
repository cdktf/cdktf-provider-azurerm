// https://www.terraform.io/docs/providers/azurerm/r/log_analytics_linked_storage_account.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogAnalyticsLinkedStorageAccountConfig extends cdktf.TerraformMetaArguments {
  readonly dataSourceType: string;
  readonly resourceGroupName: string;
  readonly storageAccountIds: string[];
  readonly workspaceResourceId: string;
  /** timeouts block */
  readonly timeouts?: LogAnalyticsLinkedStorageAccountTimeouts;
}
export interface LogAnalyticsLinkedStorageAccountTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function logAnalyticsLinkedStorageAccountTimeoutsToTerraform(struct?: LogAnalyticsLinkedStorageAccountTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class LogAnalyticsLinkedStorageAccount extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LogAnalyticsLinkedStorageAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_log_analytics_linked_storage_account',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dataSourceType = config.dataSourceType;
    this._resourceGroupName = config.resourceGroupName;
    this._storageAccountIds = config.storageAccountIds;
    this._workspaceResourceId = config.workspaceResourceId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_source_type - computed: false, optional: false, required: true
  private _dataSourceType: string;
  public get dataSourceType() {
    return this.getStringAttribute('data_source_type');
  }
  public set dataSourceType(value: string) {
    this._dataSourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceTypeInput() {
    return this._dataSourceType
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // storage_account_ids - computed: false, optional: false, required: true
  private _storageAccountIds: string[];
  public get storageAccountIds() {
    return this.getListAttribute('storage_account_ids');
  }
  public set storageAccountIds(value: string[]) {
    this._storageAccountIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountIdsInput() {
    return this._storageAccountIds
  }

  // workspace_resource_id - computed: false, optional: false, required: true
  private _workspaceResourceId: string;
  public get workspaceResourceId() {
    return this.getStringAttribute('workspace_resource_id');
  }
  public set workspaceResourceId(value: string) {
    this._workspaceResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceResourceIdInput() {
    return this._workspaceResourceId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LogAnalyticsLinkedStorageAccountTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: LogAnalyticsLinkedStorageAccountTimeouts ) {
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
      data_source_type: cdktf.stringToTerraform(this._dataSourceType),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      storage_account_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._storageAccountIds),
      workspace_resource_id: cdktf.stringToTerraform(this._workspaceResourceId),
      timeouts: logAnalyticsLinkedStorageAccountTimeoutsToTerraform(this._timeouts),
    };
  }
}
