// https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_cloud_app_security.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SentinelDataConnectorMicrosoftCloudAppSecurityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_cloud_app_security.html#alerts_enabled SentinelDataConnectorMicrosoftCloudAppSecurity#alerts_enabled}
  */
  readonly alertsEnabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_cloud_app_security.html#discovery_logs_enabled SentinelDataConnectorMicrosoftCloudAppSecurity#discovery_logs_enabled}
  */
  readonly discoveryLogsEnabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_cloud_app_security.html#log_analytics_workspace_id SentinelDataConnectorMicrosoftCloudAppSecurity#log_analytics_workspace_id}
  */
  readonly logAnalyticsWorkspaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_cloud_app_security.html#name SentinelDataConnectorMicrosoftCloudAppSecurity#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_cloud_app_security.html#tenant_id SentinelDataConnectorMicrosoftCloudAppSecurity#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_cloud_app_security.html#timeouts SentinelDataConnectorMicrosoftCloudAppSecurity#timeouts}
  */
  readonly timeouts?: SentinelDataConnectorMicrosoftCloudAppSecurityTimeouts;
}
export interface SentinelDataConnectorMicrosoftCloudAppSecurityTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_cloud_app_security.html#create SentinelDataConnectorMicrosoftCloudAppSecurity#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_cloud_app_security.html#delete SentinelDataConnectorMicrosoftCloudAppSecurity#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_cloud_app_security.html#read SentinelDataConnectorMicrosoftCloudAppSecurity#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_cloud_app_security.html#update SentinelDataConnectorMicrosoftCloudAppSecurity#update}
  */
  readonly update?: string;
}

function sentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsToTerraform(struct?: SentinelDataConnectorMicrosoftCloudAppSecurityTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_cloud_app_security.html azurerm_sentinel_data_connector_microsoft_cloud_app_security}
*/
export class SentinelDataConnectorMicrosoftCloudAppSecurity extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_cloud_app_security.html azurerm_sentinel_data_connector_microsoft_cloud_app_security} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SentinelDataConnectorMicrosoftCloudAppSecurityConfig
  */
  public constructor(scope: Construct, id: string, config: SentinelDataConnectorMicrosoftCloudAppSecurityConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_sentinel_data_connector_microsoft_cloud_app_security',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._alertsEnabled = config.alertsEnabled;
    this._discoveryLogsEnabled = config.discoveryLogsEnabled;
    this._logAnalyticsWorkspaceId = config.logAnalyticsWorkspaceId;
    this._name = config.name;
    this._tenantId = config.tenantId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alerts_enabled - computed: false, optional: true, required: false
  private _alertsEnabled?: boolean;
  public get alertsEnabled() {
    return this.getBooleanAttribute('alerts_enabled');
  }
  public set alertsEnabled(value: boolean ) {
    this._alertsEnabled = value;
  }
  public resetAlertsEnabled() {
    this._alertsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertsEnabledInput() {
    return this._alertsEnabled
  }

  // discovery_logs_enabled - computed: false, optional: true, required: false
  private _discoveryLogsEnabled?: boolean;
  public get discoveryLogsEnabled() {
    return this.getBooleanAttribute('discovery_logs_enabled');
  }
  public set discoveryLogsEnabled(value: boolean ) {
    this._discoveryLogsEnabled = value;
  }
  public resetDiscoveryLogsEnabled() {
    this._discoveryLogsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryLogsEnabledInput() {
    return this._discoveryLogsEnabled
  }

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

  // tenant_id - computed: true, optional: true, required: false
  private _tenantId?: string;
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SentinelDataConnectorMicrosoftCloudAppSecurityTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SentinelDataConnectorMicrosoftCloudAppSecurityTimeouts ) {
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
      alerts_enabled: cdktf.booleanToTerraform(this._alertsEnabled),
      discovery_logs_enabled: cdktf.booleanToTerraform(this._discoveryLogsEnabled),
      log_analytics_workspace_id: cdktf.stringToTerraform(this._logAnalyticsWorkspaceId),
      name: cdktf.stringToTerraform(this._name),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      timeouts: sentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsToTerraform(this._timeouts),
    };
  }
}
