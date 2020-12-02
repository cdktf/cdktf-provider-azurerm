// https://www.terraform.io/docs/providers/azurerm/r/monitor_action_rule_suppression.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface MonitorActionRuleSuppressionConfig extends TerraformMetaArguments {
  readonly description?: string;
  readonly enabled?: boolean;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  /** condition block */
  readonly condition?: MonitorActionRuleSuppressionCondition[];
  /** scope block */
  readonly scope?: MonitorActionRuleSuppressionScope[];
  /** suppression block */
  readonly suppression: MonitorActionRuleSuppressionSuppression[];
  /** timeouts block */
  readonly timeouts?: MonitorActionRuleSuppressionTimeouts;
}
export interface MonitorActionRuleSuppressionConditionAlertContext {
  readonly operator: string;
  readonly values: string[];
}
export interface MonitorActionRuleSuppressionConditionAlertRuleId {
  readonly operator: string;
  readonly values: string[];
}
export interface MonitorActionRuleSuppressionConditionDescription {
  readonly operator: string;
  readonly values: string[];
}
export interface MonitorActionRuleSuppressionConditionMonitor {
  readonly operator: string;
  readonly values: string[];
}
export interface MonitorActionRuleSuppressionConditionMonitorService {
  readonly operator: string;
  readonly values: string[];
}
export interface MonitorActionRuleSuppressionConditionSeverity {
  readonly operator: string;
  readonly values: string[];
}
export interface MonitorActionRuleSuppressionConditionTargetResourceType {
  readonly operator: string;
  readonly values: string[];
}
export interface MonitorActionRuleSuppressionCondition {
  /** alert_context block */
  readonly alertContext?: MonitorActionRuleSuppressionConditionAlertContext[];
  /** alert_rule_id block */
  readonly alertRuleId?: MonitorActionRuleSuppressionConditionAlertRuleId[];
  /** description block */
  readonly description?: MonitorActionRuleSuppressionConditionDescription[];
  /** monitor block */
  readonly monitor?: MonitorActionRuleSuppressionConditionMonitor[];
  /** monitor_service block */
  readonly monitorService?: MonitorActionRuleSuppressionConditionMonitorService[];
  /** severity block */
  readonly severity?: MonitorActionRuleSuppressionConditionSeverity[];
  /** target_resource_type block */
  readonly targetResourceType?: MonitorActionRuleSuppressionConditionTargetResourceType[];
}
export interface MonitorActionRuleSuppressionScope {
  readonly resourceIds: string[];
  readonly type: string;
}
export interface MonitorActionRuleSuppressionSuppressionSchedule {
  readonly endDateUtc: string;
  readonly recurrenceMonthly?: number[];
  readonly recurrenceWeekly?: string[];
  readonly startDateUtc: string;
}
export interface MonitorActionRuleSuppressionSuppression {
  readonly recurrenceType: string;
  /** schedule block */
  readonly schedule?: MonitorActionRuleSuppressionSuppressionSchedule[];
}
export interface MonitorActionRuleSuppressionTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class MonitorActionRuleSuppression extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: MonitorActionRuleSuppressionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_monitor_action_rule_suppression',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._enabled = config.enabled;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._condition = config.condition;
    this._scope = config.scope;
    this._suppression = config.suppression;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean;
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean ) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
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

  // condition - computed: false, optional: true, required: false
  private _condition?: MonitorActionRuleSuppressionCondition[];
  public get condition() {
    return this.interpolationForAttribute('condition') as any;
  }
  public set condition(value: MonitorActionRuleSuppressionCondition[] ) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: MonitorActionRuleSuppressionScope[];
  public get scope() {
    return this.interpolationForAttribute('scope') as any;
  }
  public set scope(value: MonitorActionRuleSuppressionScope[] ) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope
  }

  // suppression - computed: false, optional: false, required: true
  private _suppression: MonitorActionRuleSuppressionSuppression[];
  public get suppression() {
    return this.interpolationForAttribute('suppression') as any;
  }
  public set suppression(value: MonitorActionRuleSuppressionSuppression[]) {
    this._suppression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressionInput() {
    return this._suppression
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MonitorActionRuleSuppressionTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: MonitorActionRuleSuppressionTimeouts ) {
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
      description: this._description,
      enabled: this._enabled,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      tags: this._tags,
      condition: this._condition,
      scope: this._scope,
      suppression: this._suppression,
      timeouts: this._timeouts,
    };
  }
}
