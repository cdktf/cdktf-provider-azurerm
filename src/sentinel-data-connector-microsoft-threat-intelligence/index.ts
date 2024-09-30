// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SentinelDataConnectorMicrosoftThreatIntelligenceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#id SentinelDataConnectorMicrosoftThreatIntelligence#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#log_analytics_workspace_id SentinelDataConnectorMicrosoftThreatIntelligence#log_analytics_workspace_id}
  */
  readonly logAnalyticsWorkspaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#microsoft_emerging_threat_feed_lookback_date SentinelDataConnectorMicrosoftThreatIntelligence#microsoft_emerging_threat_feed_lookback_date}
  */
  readonly microsoftEmergingThreatFeedLookbackDate: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#name SentinelDataConnectorMicrosoftThreatIntelligence#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#tenant_id SentinelDataConnectorMicrosoftThreatIntelligence#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#timeouts SentinelDataConnectorMicrosoftThreatIntelligence#timeouts}
  */
  readonly timeouts?: SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts;
}
export interface SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#create SentinelDataConnectorMicrosoftThreatIntelligence#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#delete SentinelDataConnectorMicrosoftThreatIntelligence#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#read SentinelDataConnectorMicrosoftThreatIntelligence#read}
  */
  readonly read?: string;
}

export function sentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsToTerraform(struct?: SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function sentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsToHclTerraform(struct?: SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence azurerm_sentinel_data_connector_microsoft_threat_intelligence}
*/
export class SentinelDataConnectorMicrosoftThreatIntelligence extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_sentinel_data_connector_microsoft_threat_intelligence";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SentinelDataConnectorMicrosoftThreatIntelligence resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SentinelDataConnectorMicrosoftThreatIntelligence to import
  * @param importFromId The id of the existing SentinelDataConnectorMicrosoftThreatIntelligence that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SentinelDataConnectorMicrosoftThreatIntelligence to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_sentinel_data_connector_microsoft_threat_intelligence", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence azurerm_sentinel_data_connector_microsoft_threat_intelligence} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SentinelDataConnectorMicrosoftThreatIntelligenceConfig
  */
  public constructor(scope: Construct, id: string, config: SentinelDataConnectorMicrosoftThreatIntelligenceConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_sentinel_data_connector_microsoft_threat_intelligence',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.3.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._logAnalyticsWorkspaceId = config.logAnalyticsWorkspaceId;
    this._microsoftEmergingThreatFeedLookbackDate = config.microsoftEmergingThreatFeedLookbackDate;
    this._name = config.name;
    this._tenantId = config.tenantId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
    return this._logAnalyticsWorkspaceId;
  }

  // microsoft_emerging_threat_feed_lookback_date - computed: false, optional: false, required: true
  private _microsoftEmergingThreatFeedLookbackDate?: string; 
  public get microsoftEmergingThreatFeedLookbackDate() {
    return this.getStringAttribute('microsoft_emerging_threat_feed_lookback_date');
  }
  public set microsoftEmergingThreatFeedLookbackDate(value: string) {
    this._microsoftEmergingThreatFeedLookbackDate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get microsoftEmergingThreatFeedLookbackDateInput() {
    return this._microsoftEmergingThreatFeedLookbackDate;
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
    return this._name;
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
    return this._tenantId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      log_analytics_workspace_id: cdktf.stringToTerraform(this._logAnalyticsWorkspaceId),
      microsoft_emerging_threat_feed_lookback_date: cdktf.stringToTerraform(this._microsoftEmergingThreatFeedLookbackDate),
      name: cdktf.stringToTerraform(this._name),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      timeouts: sentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_analytics_workspace_id: {
        value: cdktf.stringToHclTerraform(this._logAnalyticsWorkspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      microsoft_emerging_threat_feed_lookback_date: {
        value: cdktf.stringToHclTerraform(this._microsoftEmergingThreatFeedLookbackDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: sentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
