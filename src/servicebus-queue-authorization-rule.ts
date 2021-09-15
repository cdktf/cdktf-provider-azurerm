// https://www.terraform.io/docs/providers/azurerm/r/servicebus_queue_authorization_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServicebusQueueAuthorizationRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_queue_authorization_rule.html#listen ServicebusQueueAuthorizationRule#listen}
  */
  readonly listen?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_queue_authorization_rule.html#manage ServicebusQueueAuthorizationRule#manage}
  */
  readonly manage?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_queue_authorization_rule.html#name ServicebusQueueAuthorizationRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_queue_authorization_rule.html#namespace_name ServicebusQueueAuthorizationRule#namespace_name}
  */
  readonly namespaceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_queue_authorization_rule.html#queue_name ServicebusQueueAuthorizationRule#queue_name}
  */
  readonly queueName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_queue_authorization_rule.html#resource_group_name ServicebusQueueAuthorizationRule#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_queue_authorization_rule.html#send ServicebusQueueAuthorizationRule#send}
  */
  readonly send?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_queue_authorization_rule.html#timeouts ServicebusQueueAuthorizationRule#timeouts}
  */
  readonly timeouts?: ServicebusQueueAuthorizationRuleTimeouts;
}
export interface ServicebusQueueAuthorizationRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_queue_authorization_rule.html#create ServicebusQueueAuthorizationRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_queue_authorization_rule.html#delete ServicebusQueueAuthorizationRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_queue_authorization_rule.html#read ServicebusQueueAuthorizationRule#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_queue_authorization_rule.html#update ServicebusQueueAuthorizationRule#update}
  */
  readonly update?: string;
}

function servicebusQueueAuthorizationRuleTimeoutsToTerraform(struct?: ServicebusQueueAuthorizationRuleTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_queue_authorization_rule.html azurerm_servicebus_queue_authorization_rule}
*/
export class ServicebusQueueAuthorizationRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_servicebus_queue_authorization_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_queue_authorization_rule.html azurerm_servicebus_queue_authorization_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServicebusQueueAuthorizationRuleConfig
  */
  public constructor(scope: Construct, id: string, config: ServicebusQueueAuthorizationRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_servicebus_queue_authorization_rule',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._listen = config.listen;
    this._manage = config.manage;
    this._name = config.name;
    this._namespaceName = config.namespaceName;
    this._queueName = config.queueName;
    this._resourceGroupName = config.resourceGroupName;
    this._send = config.send;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // listen - computed: false, optional: true, required: false
  private _listen?: boolean | cdktf.IResolvable;
  public get listen() {
    return this.getBooleanAttribute('listen');
  }
  public set listen(value: boolean | cdktf.IResolvable ) {
    this._listen = value;
  }
  public resetListen() {
    this._listen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenInput() {
    return this._listen
  }

  // manage - computed: false, optional: true, required: false
  private _manage?: boolean | cdktf.IResolvable;
  public get manage() {
    return this.getBooleanAttribute('manage');
  }
  public set manage(value: boolean | cdktf.IResolvable ) {
    this._manage = value;
  }
  public resetManage() {
    this._manage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageInput() {
    return this._manage
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

  // namespace_name - computed: false, optional: false, required: true
  private _namespaceName: string;
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

  // primary_connection_string - computed: true, optional: false, required: false
  public get primaryConnectionString() {
    return this.getStringAttribute('primary_connection_string');
  }

  // primary_connection_string_alias - computed: true, optional: false, required: false
  public get primaryConnectionStringAlias() {
    return this.getStringAttribute('primary_connection_string_alias');
  }

  // primary_key - computed: true, optional: false, required: false
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }

  // queue_name - computed: false, optional: false, required: true
  private _queueName: string;
  public get queueName() {
    return this.getStringAttribute('queue_name');
  }
  public set queueName(value: string) {
    this._queueName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queueNameInput() {
    return this._queueName
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

  // secondary_connection_string - computed: true, optional: false, required: false
  public get secondaryConnectionString() {
    return this.getStringAttribute('secondary_connection_string');
  }

  // secondary_connection_string_alias - computed: true, optional: false, required: false
  public get secondaryConnectionStringAlias() {
    return this.getStringAttribute('secondary_connection_string_alias');
  }

  // secondary_key - computed: true, optional: false, required: false
  public get secondaryKey() {
    return this.getStringAttribute('secondary_key');
  }

  // send - computed: false, optional: true, required: false
  private _send?: boolean | cdktf.IResolvable;
  public get send() {
    return this.getBooleanAttribute('send');
  }
  public set send(value: boolean | cdktf.IResolvable ) {
    this._send = value;
  }
  public resetSend() {
    this._send = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendInput() {
    return this._send
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ServicebusQueueAuthorizationRuleTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ServicebusQueueAuthorizationRuleTimeouts ) {
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
      listen: cdktf.booleanToTerraform(this._listen),
      manage: cdktf.booleanToTerraform(this._manage),
      name: cdktf.stringToTerraform(this._name),
      namespace_name: cdktf.stringToTerraform(this._namespaceName),
      queue_name: cdktf.stringToTerraform(this._queueName),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      send: cdktf.booleanToTerraform(this._send),
      timeouts: servicebusQueueAuthorizationRuleTimeoutsToTerraform(this._timeouts),
    };
  }
}
