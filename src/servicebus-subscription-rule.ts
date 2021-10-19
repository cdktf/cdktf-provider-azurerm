// https://www.terraform.io/docs/providers/azurerm/r/servicebus_subscription_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServicebusSubscriptionRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_subscription_rule.html#action ServicebusSubscriptionRule#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_subscription_rule.html#filter_type ServicebusSubscriptionRule#filter_type}
  */
  readonly filterType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_subscription_rule.html#name ServicebusSubscriptionRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_subscription_rule.html#namespace_name ServicebusSubscriptionRule#namespace_name}
  */
  readonly namespaceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_subscription_rule.html#resource_group_name ServicebusSubscriptionRule#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_subscription_rule.html#sql_filter ServicebusSubscriptionRule#sql_filter}
  */
  readonly sqlFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_subscription_rule.html#subscription_name ServicebusSubscriptionRule#subscription_name}
  */
  readonly subscriptionName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_subscription_rule.html#topic_name ServicebusSubscriptionRule#topic_name}
  */
  readonly topicName: string;
  /**
  * correlation_filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_subscription_rule.html#correlation_filter ServicebusSubscriptionRule#correlation_filter}
  */
  readonly correlationFilter?: ServicebusSubscriptionRuleCorrelationFilter;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_subscription_rule.html#timeouts ServicebusSubscriptionRule#timeouts}
  */
  readonly timeouts?: ServicebusSubscriptionRuleTimeouts;
}
export interface ServicebusSubscriptionRuleCorrelationFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_subscription_rule.html#content_type ServicebusSubscriptionRule#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_subscription_rule.html#correlation_id ServicebusSubscriptionRule#correlation_id}
  */
  readonly correlationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_subscription_rule.html#label ServicebusSubscriptionRule#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_subscription_rule.html#message_id ServicebusSubscriptionRule#message_id}
  */
  readonly messageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_subscription_rule.html#properties ServicebusSubscriptionRule#properties}
  */
  readonly properties?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_subscription_rule.html#reply_to ServicebusSubscriptionRule#reply_to}
  */
  readonly replyTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_subscription_rule.html#reply_to_session_id ServicebusSubscriptionRule#reply_to_session_id}
  */
  readonly replyToSessionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_subscription_rule.html#session_id ServicebusSubscriptionRule#session_id}
  */
  readonly sessionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_subscription_rule.html#to ServicebusSubscriptionRule#to}
  */
  readonly to?: string;
}

function servicebusSubscriptionRuleCorrelationFilterToTerraform(struct?: ServicebusSubscriptionRuleCorrelationFilterOutputReference | ServicebusSubscriptionRuleCorrelationFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_type: cdktf.stringToTerraform(struct!.contentType),
    correlation_id: cdktf.stringToTerraform(struct!.correlationId),
    label: cdktf.stringToTerraform(struct!.label),
    message_id: cdktf.stringToTerraform(struct!.messageId),
    properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.properties),
    reply_to: cdktf.stringToTerraform(struct!.replyTo),
    reply_to_session_id: cdktf.stringToTerraform(struct!.replyToSessionId),
    session_id: cdktf.stringToTerraform(struct!.sessionId),
    to: cdktf.stringToTerraform(struct!.to),
  }
}

export class ServicebusSubscriptionRuleCorrelationFilterOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string | undefined; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string | undefined) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType
  }

  // correlation_id - computed: false, optional: true, required: false
  private _correlationId?: string | undefined; 
  public get correlationId() {
    return this.getStringAttribute('correlation_id');
  }
  public set correlationId(value: string | undefined) {
    this._correlationId = value;
  }
  public resetCorrelationId() {
    this._correlationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get correlationIdInput() {
    return this._correlationId
  }

  // label - computed: false, optional: true, required: false
  private _label?: string | undefined; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string | undefined) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label
  }

  // message_id - computed: false, optional: true, required: false
  private _messageId?: string | undefined; 
  public get messageId() {
    return this.getStringAttribute('message_id');
  }
  public set messageId(value: string | undefined) {
    this._messageId = value;
  }
  public resetMessageId() {
    this._messageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageIdInput() {
    return this._messageId
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get properties() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('properties') as any;
  }
  public set properties(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties
  }

  // reply_to - computed: false, optional: true, required: false
  private _replyTo?: string | undefined; 
  public get replyTo() {
    return this.getStringAttribute('reply_to');
  }
  public set replyTo(value: string | undefined) {
    this._replyTo = value;
  }
  public resetReplyTo() {
    this._replyTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replyToInput() {
    return this._replyTo
  }

  // reply_to_session_id - computed: false, optional: true, required: false
  private _replyToSessionId?: string | undefined; 
  public get replyToSessionId() {
    return this.getStringAttribute('reply_to_session_id');
  }
  public set replyToSessionId(value: string | undefined) {
    this._replyToSessionId = value;
  }
  public resetReplyToSessionId() {
    this._replyToSessionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replyToSessionIdInput() {
    return this._replyToSessionId
  }

  // session_id - computed: false, optional: true, required: false
  private _sessionId?: string | undefined; 
  public get sessionId() {
    return this.getStringAttribute('session_id');
  }
  public set sessionId(value: string | undefined) {
    this._sessionId = value;
  }
  public resetSessionId() {
    this._sessionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionIdInput() {
    return this._sessionId
  }

  // to - computed: false, optional: true, required: false
  private _to?: string | undefined; 
  public get to() {
    return this.getStringAttribute('to');
  }
  public set to(value: string | undefined) {
    this._to = value;
  }
  public resetTo() {
    this._to = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to
  }
}
export interface ServicebusSubscriptionRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_subscription_rule.html#create ServicebusSubscriptionRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_subscription_rule.html#delete ServicebusSubscriptionRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_subscription_rule.html#read ServicebusSubscriptionRule#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_subscription_rule.html#update ServicebusSubscriptionRule#update}
  */
  readonly update?: string;
}

function servicebusSubscriptionRuleTimeoutsToTerraform(struct?: ServicebusSubscriptionRuleTimeoutsOutputReference | ServicebusSubscriptionRuleTimeouts): any {
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

export class ServicebusSubscriptionRuleTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_subscription_rule.html azurerm_servicebus_subscription_rule}
*/
export class ServicebusSubscriptionRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_servicebus_subscription_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_subscription_rule.html azurerm_servicebus_subscription_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServicebusSubscriptionRuleConfig
  */
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
  private _action?: string | undefined; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string | undefined) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action
  }

  // filter_type - computed: false, optional: false, required: true
  private _filterType?: string; 
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }
  public set filterType(value: string) {
    this._filterType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTypeInput() {
    return this._filterType
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // namespace_name - computed: false, optional: false, required: true
  private _namespaceName?: string; 
  public get namespaceName() {
    return this.getStringAttribute('namespace_name');
  }
  public set namespaceName(value: string) {
    this._namespaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceNameInput() {
    return this._namespaceName
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
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

  // sql_filter - computed: false, optional: true, required: false
  private _sqlFilter?: string | undefined; 
  public get sqlFilter() {
    return this.getStringAttribute('sql_filter');
  }
  public set sqlFilter(value: string | undefined) {
    this._sqlFilter = value;
  }
  public resetSqlFilter() {
    this._sqlFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlFilterInput() {
    return this._sqlFilter
  }

  // subscription_name - computed: false, optional: false, required: true
  private _subscriptionName?: string; 
  public get subscriptionName() {
    return this.getStringAttribute('subscription_name');
  }
  public set subscriptionName(value: string) {
    this._subscriptionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionNameInput() {
    return this._subscriptionName
  }

  // topic_name - computed: false, optional: false, required: true
  private _topicName?: string; 
  public get topicName() {
    return this.getStringAttribute('topic_name');
  }
  public set topicName(value: string) {
    this._topicName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicNameInput() {
    return this._topicName
  }

  // correlation_filter - computed: false, optional: true, required: false
  private _correlationFilter?: ServicebusSubscriptionRuleCorrelationFilter | undefined; 
  private __correlationFilterOutput = new ServicebusSubscriptionRuleCorrelationFilterOutputReference(this as any, "correlation_filter", true);
  public get correlationFilter() {
    return this.__correlationFilterOutput;
  }
  public putCorrelationFilter(value: ServicebusSubscriptionRuleCorrelationFilter | undefined) {
    this._correlationFilter = value;
  }
  public resetCorrelationFilter() {
    this._correlationFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get correlationFilterInput() {
    return this._correlationFilter
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ServicebusSubscriptionRuleTimeouts | undefined; 
  private __timeoutsOutput = new ServicebusSubscriptionRuleTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: ServicebusSubscriptionRuleTimeouts | undefined) {
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
      action: cdktf.stringToTerraform(this._action),
      filter_type: cdktf.stringToTerraform(this._filterType),
      name: cdktf.stringToTerraform(this._name),
      namespace_name: cdktf.stringToTerraform(this._namespaceName),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sql_filter: cdktf.stringToTerraform(this._sqlFilter),
      subscription_name: cdktf.stringToTerraform(this._subscriptionName),
      topic_name: cdktf.stringToTerraform(this._topicName),
      correlation_filter: servicebusSubscriptionRuleCorrelationFilterToTerraform(this._correlationFilter),
      timeouts: servicebusSubscriptionRuleTimeoutsToTerraform(this._timeouts),
    };
  }
}
