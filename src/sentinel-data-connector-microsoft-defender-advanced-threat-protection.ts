// https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_defender_advanced_threat_protection.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_defender_advanced_threat_protection.html#log_analytics_workspace_id SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection#log_analytics_workspace_id}
  */
  readonly logAnalyticsWorkspaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_defender_advanced_threat_protection.html#name SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_defender_advanced_threat_protection.html#tenant_id SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_defender_advanced_threat_protection.html#timeouts SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection#timeouts}
  */
  readonly timeouts?: SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeouts;
}
export interface SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_defender_advanced_threat_protection.html#create SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_defender_advanced_threat_protection.html#delete SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_defender_advanced_threat_protection.html#read SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection#read}
  */
  readonly read?: string;
}

function sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsToTerraform(struct?: SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_defender_advanced_threat_protection.html azurerm_sentinel_data_connector_microsoft_defender_advanced_threat_protection}
*/
export class SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_sentinel_data_connector_microsoft_defender_advanced_threat_protection";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_defender_advanced_threat_protection.html azurerm_sentinel_data_connector_microsoft_defender_advanced_threat_protection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionConfig
  */
  public constructor(scope: Construct, id: string, config: SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_sentinel_data_connector_microsoft_defender_advanced_threat_protection',
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
    this._tenantId = config.tenantId;
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
  private _timeouts?: SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeouts ) {
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
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      timeouts: sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsToTerraform(this._timeouts),
    };
  }
}
