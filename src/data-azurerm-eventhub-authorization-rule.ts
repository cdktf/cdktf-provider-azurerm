// https://www.terraform.io/docs/providers/azurerm/d/eventhub_authorization_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermEventhubAuthorizationRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/eventhub_authorization_rule.html#eventhub_name DataAzurermEventhubAuthorizationRule#eventhub_name}
  */
  readonly eventhubName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/eventhub_authorization_rule.html#listen DataAzurermEventhubAuthorizationRule#listen}
  */
  readonly listen?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/eventhub_authorization_rule.html#manage DataAzurermEventhubAuthorizationRule#manage}
  */
  readonly manage?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/eventhub_authorization_rule.html#name DataAzurermEventhubAuthorizationRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/eventhub_authorization_rule.html#namespace_name DataAzurermEventhubAuthorizationRule#namespace_name}
  */
  readonly namespaceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/eventhub_authorization_rule.html#resource_group_name DataAzurermEventhubAuthorizationRule#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/eventhub_authorization_rule.html#send DataAzurermEventhubAuthorizationRule#send}
  */
  readonly send?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/eventhub_authorization_rule.html#timeouts DataAzurermEventhubAuthorizationRule#timeouts}
  */
  readonly timeouts?: DataAzurermEventhubAuthorizationRuleTimeouts;
}
export interface DataAzurermEventhubAuthorizationRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/eventhub_authorization_rule.html#read DataAzurermEventhubAuthorizationRule#read}
  */
  readonly read?: string;
}

function dataAzurermEventhubAuthorizationRuleTimeoutsToTerraform(struct?: DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference | DataAzurermEventhubAuthorizationRuleTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/eventhub_authorization_rule.html azurerm_eventhub_authorization_rule}
*/
export class DataAzurermEventhubAuthorizationRule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_eventhub_authorization_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/eventhub_authorization_rule.html azurerm_eventhub_authorization_rule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermEventhubAuthorizationRuleConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermEventhubAuthorizationRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_eventhub_authorization_rule',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._eventhubName = config.eventhubName;
    this._listen = config.listen;
    this._manage = config.manage;
    this._name = config.name;
    this._namespaceName = config.namespaceName;
    this._resourceGroupName = config.resourceGroupName;
    this._send = config.send;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // eventhub_name - computed: false, optional: false, required: true
  private _eventhubName?: string; 
  public get eventhubName() {
    return this.getStringAttribute('eventhub_name');
  }
  public set eventhubName(value: string) {
    this._eventhubName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventhubNameInput() {
    return this._eventhubName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // listen - computed: false, optional: true, required: false
  private _listen?: boolean | cdktf.IResolvable | undefined; 
  public get listen() {
    return this.getBooleanAttribute('listen') as any;
  }
  public set listen(value: boolean | cdktf.IResolvable | undefined) {
    this._listen = value;
  }
  public resetListen() {
    this._listen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenInput() {
    return this._listen
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // manage - computed: false, optional: true, required: false
  private _manage?: boolean | cdktf.IResolvable | undefined; 
  public get manage() {
    return this.getBooleanAttribute('manage') as any;
  }
  public set manage(value: boolean | cdktf.IResolvable | undefined) {
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
  private _send?: boolean | cdktf.IResolvable | undefined; 
  public get send() {
    return this.getBooleanAttribute('send') as any;
  }
  public set send(value: boolean | cdktf.IResolvable | undefined) {
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
  private _timeouts?: DataAzurermEventhubAuthorizationRuleTimeouts | undefined; 
  private __timeoutsOutput = new DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataAzurermEventhubAuthorizationRuleTimeouts | undefined) {
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
      eventhub_name: cdktf.stringToTerraform(this._eventhubName),
      listen: cdktf.booleanToTerraform(this._listen),
      manage: cdktf.booleanToTerraform(this._manage),
      name: cdktf.stringToTerraform(this._name),
      namespace_name: cdktf.stringToTerraform(this._namespaceName),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      send: cdktf.booleanToTerraform(this._send),
      timeouts: dataAzurermEventhubAuthorizationRuleTimeoutsToTerraform(this._timeouts),
    };
  }
}
