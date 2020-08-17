// https://www.terraform.io/docs/providers/azurerm/r/servicebus_subscription_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ServicebusSubscriptionRuleConfig extends TerraformMetaArguments {
  readonly action?: string;
  readonly filterType: string;
  readonly name: string;
  readonly namespaceName: string;
  readonly resourceGroupName: string;
  readonly sqlFilter?: string;
  readonly subscriptionName: string;
  readonly topicName: string;
  /** correlation_filter block */
  readonly correlationFilter?: ServicebusSubscriptionRuleCorrelationFilter[];
  /** timeouts block */
  readonly timeouts?: ServicebusSubscriptionRuleTimeouts;
}
export interface ServicebusSubscriptionRuleCorrelationFilter {
  readonly contentType?: string;
  readonly correlationId?: string;
  readonly label?: string;
  readonly messageId?: string;
  readonly replyTo?: string;
  readonly replyToSessionId?: string;
  readonly sessionId?: string;
  readonly to?: string;
}
export interface ServicebusSubscriptionRuleTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class ServicebusSubscriptionRule extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ServicebusSubscriptionRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_servicebus_subscription_rule',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._action = config.action;
    this._filterType = config.filterType;
    this._name = config.name;
    this._namespaceName = config.namespaceName;
    this._resourceGroupName = config.resourceGroupName;
    this._sqlFilter = config.sqlFilter;
    this._subscriptionName = config.subscriptionName;
    this._topicName = config.topicName;
    this._correlationFilter = config.correlationFilter;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action?: string;
  public get action() {
    return this._action;
  }
  public set action(value: string | undefined) {
    this._action = value;
  }

  // filter_type - computed: false, optional: false, required: true
  private _filterType: string;
  public get filterType() {
    return this._filterType;
  }
  public set filterType(value: string) {
    this._filterType = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // namespace_name - computed: false, optional: false, required: true
  private _namespaceName: string;
  public get namespaceName() {
    return this._namespaceName;
  }
  public set namespaceName(value: string) {
    this._namespaceName = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // sql_filter - computed: false, optional: true, required: false
  private _sqlFilter?: string;
  public get sqlFilter() {
    return this._sqlFilter;
  }
  public set sqlFilter(value: string | undefined) {
    this._sqlFilter = value;
  }

  // subscription_name - computed: false, optional: false, required: true
  private _subscriptionName: string;
  public get subscriptionName() {
    return this._subscriptionName;
  }
  public set subscriptionName(value: string) {
    this._subscriptionName = value;
  }

  // topic_name - computed: false, optional: false, required: true
  private _topicName: string;
  public get topicName() {
    return this._topicName;
  }
  public set topicName(value: string) {
    this._topicName = value;
  }

  // correlation_filter - computed: false, optional: true, required: false
  private _correlationFilter?: ServicebusSubscriptionRuleCorrelationFilter[];
  public get correlationFilter() {
    return this._correlationFilter;
  }
  public set correlationFilter(value: ServicebusSubscriptionRuleCorrelationFilter[] | undefined) {
    this._correlationFilter = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ServicebusSubscriptionRuleTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ServicebusSubscriptionRuleTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      action: this._action,
      filter_type: this._filterType,
      name: this._name,
      namespace_name: this._namespaceName,
      resource_group_name: this._resourceGroupName,
      sql_filter: this._sqlFilter,
      subscription_name: this._subscriptionName,
      topic_name: this._topicName,
      correlation_filter: this._correlationFilter,
      timeouts: this._timeouts,
    };
  }
}
