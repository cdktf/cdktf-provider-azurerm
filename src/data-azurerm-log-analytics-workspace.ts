// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_log_analytics_workspace.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermLogAnalyticsWorkspaceConfig extends cdktf.TerraformMetaArguments {
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermLogAnalyticsWorkspaceTimeouts;
}
export interface DataAzurermLogAnalyticsWorkspaceTimeouts {
  readonly read?: string;
}

function dataAzurermLogAnalyticsWorkspaceTimeoutsToTerraform(struct?: DataAzurermLogAnalyticsWorkspaceTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


// Resource

export class DataAzurermLogAnalyticsWorkspace extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermLogAnalyticsWorkspaceConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_log_analytics_workspace',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // daily_quota_gb - computed: true, optional: false, required: false
  public get dailyQuotaGb() {
    return this.getNumberAttribute('daily_quota_gb');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
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

  // portal_url - computed: true, optional: false, required: false
  public get portalUrl() {
    return this.getStringAttribute('portal_url');
  }

  // primary_shared_key - computed: true, optional: false, required: false
  public get primarySharedKey() {
    return this.getStringAttribute('primary_shared_key');
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

  // retention_in_days - computed: true, optional: false, required: false
  public get retentionInDays() {
    return this.getNumberAttribute('retention_in_days');
  }

  // secondary_shared_key - computed: true, optional: false, required: false
  public get secondarySharedKey() {
    return this.getStringAttribute('secondary_shared_key');
  }

  // sku - computed: true, optional: false, required: false
  public get sku() {
    return this.getStringAttribute('sku');
  }

  // tags - computed: true, optional: false, required: false
  public tags(key: string): string {
    return new cdktf.StringMap(this, 'tags').lookup(key);
  }

  // workspace_id - computed: true, optional: false, required: false
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermLogAnalyticsWorkspaceTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermLogAnalyticsWorkspaceTimeouts ) {
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
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: dataAzurermLogAnalyticsWorkspaceTimeoutsToTerraform(this._timeouts),
    };
  }
}
