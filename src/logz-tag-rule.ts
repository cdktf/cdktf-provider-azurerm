// https://www.terraform.io/docs/providers/azurerm/r/logz_tag_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogzTagRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logz_tag_rule.html#logz_monitor_id LogzTagRule#logz_monitor_id}
  */
  readonly logzMonitorId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logz_tag_rule.html#send_aad_logs LogzTagRule#send_aad_logs}
  */
  readonly sendAadLogs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logz_tag_rule.html#send_activity_logs LogzTagRule#send_activity_logs}
  */
  readonly sendActivityLogs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logz_tag_rule.html#send_subscription_logs LogzTagRule#send_subscription_logs}
  */
  readonly sendSubscriptionLogs?: boolean | cdktf.IResolvable;
  /**
  * tag_filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logz_tag_rule.html#tag_filter LogzTagRule#tag_filter}
  */
  readonly tagFilter?: LogzTagRuleTagFilter[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logz_tag_rule.html#timeouts LogzTagRule#timeouts}
  */
  readonly timeouts?: LogzTagRuleTimeouts;
}
export interface LogzTagRuleTagFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logz_tag_rule.html#action LogzTagRule#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logz_tag_rule.html#name LogzTagRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logz_tag_rule.html#value LogzTagRule#value}
  */
  readonly value?: string;
}

function logzTagRuleTagFilterToTerraform(struct?: LogzTagRuleTagFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface LogzTagRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logz_tag_rule.html#create LogzTagRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logz_tag_rule.html#delete LogzTagRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logz_tag_rule.html#read LogzTagRule#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logz_tag_rule.html#update LogzTagRule#update}
  */
  readonly update?: string;
}

function logzTagRuleTimeoutsToTerraform(struct?: LogzTagRuleTimeoutsOutputReference | LogzTagRuleTimeouts): any {
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

export class LogzTagRuleTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/logz_tag_rule.html azurerm_logz_tag_rule}
*/
export class LogzTagRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_logz_tag_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/logz_tag_rule.html azurerm_logz_tag_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogzTagRuleConfig
  */
  public constructor(scope: Construct, id: string, config: LogzTagRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_logz_tag_rule',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._logzMonitorId = config.logzMonitorId;
    this._sendAadLogs = config.sendAadLogs;
    this._sendActivityLogs = config.sendActivityLogs;
    this._sendSubscriptionLogs = config.sendSubscriptionLogs;
    this._tagFilter = config.tagFilter;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // logz_monitor_id - computed: false, optional: false, required: true
  private _logzMonitorId?: string; 
  public get logzMonitorId() {
    return this.getStringAttribute('logz_monitor_id');
  }
  public set logzMonitorId(value: string) {
    this._logzMonitorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logzMonitorIdInput() {
    return this._logzMonitorId
  }

  // send_aad_logs - computed: false, optional: true, required: false
  private _sendAadLogs?: boolean | cdktf.IResolvable | undefined; 
  public get sendAadLogs() {
    return this.getBooleanAttribute('send_aad_logs') as any;
  }
  public set sendAadLogs(value: boolean | cdktf.IResolvable | undefined) {
    this._sendAadLogs = value;
  }
  public resetSendAadLogs() {
    this._sendAadLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendAadLogsInput() {
    return this._sendAadLogs
  }

  // send_activity_logs - computed: false, optional: true, required: false
  private _sendActivityLogs?: boolean | cdktf.IResolvable | undefined; 
  public get sendActivityLogs() {
    return this.getBooleanAttribute('send_activity_logs') as any;
  }
  public set sendActivityLogs(value: boolean | cdktf.IResolvable | undefined) {
    this._sendActivityLogs = value;
  }
  public resetSendActivityLogs() {
    this._sendActivityLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendActivityLogsInput() {
    return this._sendActivityLogs
  }

  // send_subscription_logs - computed: false, optional: true, required: false
  private _sendSubscriptionLogs?: boolean | cdktf.IResolvable | undefined; 
  public get sendSubscriptionLogs() {
    return this.getBooleanAttribute('send_subscription_logs') as any;
  }
  public set sendSubscriptionLogs(value: boolean | cdktf.IResolvable | undefined) {
    this._sendSubscriptionLogs = value;
  }
  public resetSendSubscriptionLogs() {
    this._sendSubscriptionLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendSubscriptionLogsInput() {
    return this._sendSubscriptionLogs
  }

  // tag_filter - computed: false, optional: true, required: false
  private _tagFilter?: LogzTagRuleTagFilter[] | undefined; 
  public get tagFilter() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tag_filter') as any;
  }
  public set tagFilter(value: LogzTagRuleTagFilter[] | undefined) {
    this._tagFilter = value;
  }
  public resetTagFilter() {
    this._tagFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagFilterInput() {
    return this._tagFilter
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LogzTagRuleTimeouts | undefined; 
  private __timeoutsOutput = new LogzTagRuleTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: LogzTagRuleTimeouts | undefined) {
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
      logz_monitor_id: cdktf.stringToTerraform(this._logzMonitorId),
      send_aad_logs: cdktf.booleanToTerraform(this._sendAadLogs),
      send_activity_logs: cdktf.booleanToTerraform(this._sendActivityLogs),
      send_subscription_logs: cdktf.booleanToTerraform(this._sendSubscriptionLogs),
      tag_filter: cdktf.listMapper(logzTagRuleTagFilterToTerraform)(this._tagFilter),
      timeouts: logzTagRuleTimeoutsToTerraform(this._timeouts),
    };
  }
}
