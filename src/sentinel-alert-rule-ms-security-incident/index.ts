// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_ms_security_incident
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SentinelAlertRuleMsSecurityIncidentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_ms_security_incident#alert_rule_template_guid SentinelAlertRuleMsSecurityIncident#alert_rule_template_guid}
  */
  readonly alertRuleTemplateGuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_ms_security_incident#description SentinelAlertRuleMsSecurityIncident#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_ms_security_incident#display_name SentinelAlertRuleMsSecurityIncident#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_ms_security_incident#display_name_exclude_filter SentinelAlertRuleMsSecurityIncident#display_name_exclude_filter}
  */
  readonly displayNameExcludeFilter?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_ms_security_incident#display_name_filter SentinelAlertRuleMsSecurityIncident#display_name_filter}
  */
  readonly displayNameFilter?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_ms_security_incident#enabled SentinelAlertRuleMsSecurityIncident#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_ms_security_incident#id SentinelAlertRuleMsSecurityIncident#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_ms_security_incident#log_analytics_workspace_id SentinelAlertRuleMsSecurityIncident#log_analytics_workspace_id}
  */
  readonly logAnalyticsWorkspaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_ms_security_incident#name SentinelAlertRuleMsSecurityIncident#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_ms_security_incident#product_filter SentinelAlertRuleMsSecurityIncident#product_filter}
  */
  readonly productFilter: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_ms_security_incident#severity_filter SentinelAlertRuleMsSecurityIncident#severity_filter}
  */
  readonly severityFilter: string[];
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_ms_security_incident#timeouts SentinelAlertRuleMsSecurityIncident#timeouts}
  */
  readonly timeouts?: SentinelAlertRuleMsSecurityIncidentTimeouts;
}
export interface SentinelAlertRuleMsSecurityIncidentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_ms_security_incident#create SentinelAlertRuleMsSecurityIncident#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_ms_security_incident#delete SentinelAlertRuleMsSecurityIncident#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_ms_security_incident#read SentinelAlertRuleMsSecurityIncident#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_ms_security_incident#update SentinelAlertRuleMsSecurityIncident#update}
  */
  readonly update?: string;
}

export function sentinelAlertRuleMsSecurityIncidentTimeoutsToTerraform(struct?: SentinelAlertRuleMsSecurityIncidentTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function sentinelAlertRuleMsSecurityIncidentTimeoutsToHclTerraform(struct?: SentinelAlertRuleMsSecurityIncidentTimeouts | cdktf.IResolvable): any {
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
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SentinelAlertRuleMsSecurityIncidentTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SentinelAlertRuleMsSecurityIncidentTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
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
      this._update = value.update;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_ms_security_incident azurerm_sentinel_alert_rule_ms_security_incident}
*/
export class SentinelAlertRuleMsSecurityIncident extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_sentinel_alert_rule_ms_security_incident";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SentinelAlertRuleMsSecurityIncident resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SentinelAlertRuleMsSecurityIncident to import
  * @param importFromId The id of the existing SentinelAlertRuleMsSecurityIncident that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_ms_security_incident#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SentinelAlertRuleMsSecurityIncident to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_sentinel_alert_rule_ms_security_incident", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_ms_security_incident azurerm_sentinel_alert_rule_ms_security_incident} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SentinelAlertRuleMsSecurityIncidentConfig
  */
  public constructor(scope: Construct, id: string, config: SentinelAlertRuleMsSecurityIncidentConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_sentinel_alert_rule_ms_security_incident',
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
    this._alertRuleTemplateGuid = config.alertRuleTemplateGuid;
    this._description = config.description;
    this._displayName = config.displayName;
    this._displayNameExcludeFilter = config.displayNameExcludeFilter;
    this._displayNameFilter = config.displayNameFilter;
    this._enabled = config.enabled;
    this._id = config.id;
    this._logAnalyticsWorkspaceId = config.logAnalyticsWorkspaceId;
    this._name = config.name;
    this._productFilter = config.productFilter;
    this._severityFilter = config.severityFilter;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_rule_template_guid - computed: false, optional: true, required: false
  private _alertRuleTemplateGuid?: string; 
  public get alertRuleTemplateGuid() {
    return this.getStringAttribute('alert_rule_template_guid');
  }
  public set alertRuleTemplateGuid(value: string) {
    this._alertRuleTemplateGuid = value;
  }
  public resetAlertRuleTemplateGuid() {
    this._alertRuleTemplateGuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertRuleTemplateGuidInput() {
    return this._alertRuleTemplateGuid;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // display_name_exclude_filter - computed: false, optional: true, required: false
  private _displayNameExcludeFilter?: string[]; 
  public get displayNameExcludeFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('display_name_exclude_filter'));
  }
  public set displayNameExcludeFilter(value: string[]) {
    this._displayNameExcludeFilter = value;
  }
  public resetDisplayNameExcludeFilter() {
    this._displayNameExcludeFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameExcludeFilterInput() {
    return this._displayNameExcludeFilter;
  }

  // display_name_filter - computed: false, optional: true, required: false
  private _displayNameFilter?: string[]; 
  public get displayNameFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('display_name_filter'));
  }
  public set displayNameFilter(value: string[]) {
    this._displayNameFilter = value;
  }
  public resetDisplayNameFilter() {
    this._displayNameFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameFilterInput() {
    return this._displayNameFilter;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

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

  // product_filter - computed: false, optional: false, required: true
  private _productFilter?: string; 
  public get productFilter() {
    return this.getStringAttribute('product_filter');
  }
  public set productFilter(value: string) {
    this._productFilter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productFilterInput() {
    return this._productFilter;
  }

  // severity_filter - computed: false, optional: false, required: true
  private _severityFilter?: string[]; 
  public get severityFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('severity_filter'));
  }
  public set severityFilter(value: string[]) {
    this._severityFilter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityFilterInput() {
    return this._severityFilter;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SentinelAlertRuleMsSecurityIncidentTimeouts) {
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
      alert_rule_template_guid: cdktf.stringToTerraform(this._alertRuleTemplateGuid),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      display_name_exclude_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(this._displayNameExcludeFilter),
      display_name_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(this._displayNameFilter),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      log_analytics_workspace_id: cdktf.stringToTerraform(this._logAnalyticsWorkspaceId),
      name: cdktf.stringToTerraform(this._name),
      product_filter: cdktf.stringToTerraform(this._productFilter),
      severity_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(this._severityFilter),
      timeouts: sentinelAlertRuleMsSecurityIncidentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alert_rule_template_guid: {
        value: cdktf.stringToHclTerraform(this._alertRuleTemplateGuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name_exclude_filter: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._displayNameExcludeFilter),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      display_name_filter: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._displayNameFilter),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product_filter: {
        value: cdktf.stringToHclTerraform(this._productFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      severity_filter: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._severityFilter),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      timeouts: {
        value: sentinelAlertRuleMsSecurityIncidentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SentinelAlertRuleMsSecurityIncidentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
