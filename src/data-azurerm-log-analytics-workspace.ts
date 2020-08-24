// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_log_analytics_workspace.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { StringMap } from "cdktf";

// Configuration

export interface DataAzurermLogAnalyticsWorkspaceConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermLogAnalyticsWorkspaceTimeouts;
}
export interface DataAzurermLogAnalyticsWorkspaceTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermLogAnalyticsWorkspace extends TerraformDataSource {

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

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // location - computed: true, optional: false, required: true
  public get location() {
    return this.getStringAttribute('location');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // portal_url - computed: true, optional: false, required: true
  public get portalUrl() {
    return this.getStringAttribute('portal_url');
  }

  // primary_shared_key - computed: true, optional: false, required: true
  public get primarySharedKey() {
    return this.getStringAttribute('primary_shared_key');
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // retention_in_days - computed: true, optional: false, required: true
  public get retentionInDays() {
    return this.getNumberAttribute('retention_in_days');
  }

  // secondary_shared_key - computed: true, optional: false, required: true
  public get secondarySharedKey() {
    return this.getStringAttribute('secondary_shared_key');
  }

  // sku - computed: true, optional: false, required: true
  public get sku() {
    return this.getStringAttribute('sku');
  }

  // tags - computed: true, optional: false, required: true
  public tags(key: string): string {
    return new StringMap(this, 'tags').lookup(key);
  }

  // workspace_id - computed: true, optional: false, required: true
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermLogAnalyticsWorkspaceTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermLogAnalyticsWorkspaceTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
