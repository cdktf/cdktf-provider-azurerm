// https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_cloud_app_security.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SentinelDataConnectorMicrosoftCloudAppSecurityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_cloud_app_security.html#alerts_enabled SentinelDataConnectorMicrosoftCloudAppSecurity#alerts_enabled}
  */
  readonly alertsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_cloud_app_security.html#discovery_logs_enabled SentinelDataConnectorMicrosoftCloudAppSecurity#discovery_logs_enabled}
  */
  readonly discoveryLogsEnabled?: boolean | cdktf.IResolvable;
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

function sentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsToTerraform(struct?: SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference | SentinelDataConnectorMicrosoftCloudAppSecurityTimeouts): any {
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

export class SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_cloud_app_security.html azurerm_sentinel_data_connector_microsoft_cloud_app_security}
*/
export class SentinelDataConnectorMicrosoftCloudAppSecurity extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_sentinel_data_connector_microsoft_cloud_app_security";

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
  private _alertsEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get alertsEnabled() {
    return this.getBooleanAttribute('alerts_enabled') as any;
  }
  public set alertsEnabled(value: boolean | cdktf.IResolvable | undefined) {
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
  private _discoveryLogsEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get discoveryLogsEnabled() {
    return this.getBooleanAttribute('discovery_logs_enabled') as any;
  }
  public set discoveryLogsEnabled(value: boolean | cdktf.IResolvable | undefined) {
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
  private _logAnalyticsWorkspaceId?: string; 
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

  // tenant_id - computed: true, optional: true, required: false
  private _tenantId?: string | undefined; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string | undefined) {
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
  private _timeouts?: SentinelDataConnectorMicrosoftCloudAppSecurityTimeouts | undefined; 
  private __timeoutsOutput = new SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: SentinelDataConnectorMicrosoftCloudAppSecurityTimeouts | undefined) {
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
