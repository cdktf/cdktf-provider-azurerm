// https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_azure_security_center.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SentinelDataConnectorAzureSecurityCenterConfig extends cdktf.TerraformMetaArguments {
  readonly logAnalyticsWorkspaceId: string;
  readonly name: string;
  readonly subscriptionId?: string;
  /** timeouts block */
  readonly timeouts?: SentinelDataConnectorAzureSecurityCenterTimeouts;
}
export interface SentinelDataConnectorAzureSecurityCenterTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
}

function sentinelDataConnectorAzureSecurityCenterTimeoutsToTerraform(struct?: SentinelDataConnectorAzureSecurityCenterTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}


// Resource

export class SentinelDataConnectorAzureSecurityCenter extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SentinelDataConnectorAzureSecurityCenterConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_sentinel_data_connector_azure_security_center',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._logAnalyticsWorkspaceId = config.logAnalyticsWorkspaceId;
    this._name = config.name;
    this._subscriptionId = config.subscriptionId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // log_analytics_workspace_id - computed: false, optional: false, required: true
  private _logAnalyticsWorkspaceId: string;
  public get logAnalyticsWorkspaceId() {
    return this.getStringAttribute('log_analytics_workspace_id');
  }
  public set logAnalyticsWorkspaceId(value: string) {
    this._logAnalyticsWorkspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsWorkspaceIdInput() {
    return this._logAnalyticsWorkspaceId
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

  // subscription_id - computed: true, optional: true, required: false
  private _subscriptionId?: string;
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  public resetSubscriptionId() {
    this._subscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SentinelDataConnectorAzureSecurityCenterTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SentinelDataConnectorAzureSecurityCenterTimeouts ) {
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
      log_analytics_workspace_id: cdktf.stringToTerraform(this._logAnalyticsWorkspaceId),
      name: cdktf.stringToTerraform(this._name),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      timeouts: sentinelDataConnectorAzureSecurityCenterTimeoutsToTerraform(this._timeouts),
    };
  }
}
