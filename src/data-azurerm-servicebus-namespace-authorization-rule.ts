// https://www.terraform.io/docs/providers/azurerm/d/servicebus_namespace_authorization_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermServicebusNamespaceAuthorizationRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/servicebus_namespace_authorization_rule.html#name DataAzurermServicebusNamespaceAuthorizationRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/servicebus_namespace_authorization_rule.html#namespace_name DataAzurermServicebusNamespaceAuthorizationRule#namespace_name}
  */
  readonly namespaceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/servicebus_namespace_authorization_rule.html#resource_group_name DataAzurermServicebusNamespaceAuthorizationRule#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/servicebus_namespace_authorization_rule.html#timeouts DataAzurermServicebusNamespaceAuthorizationRule#timeouts}
  */
  readonly timeouts?: DataAzurermServicebusNamespaceAuthorizationRuleTimeouts;
}
export interface DataAzurermServicebusNamespaceAuthorizationRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/servicebus_namespace_authorization_rule.html#read DataAzurermServicebusNamespaceAuthorizationRule#read}
  */
  readonly read?: string;
}

function dataAzurermServicebusNamespaceAuthorizationRuleTimeoutsToTerraform(struct?: DataAzurermServicebusNamespaceAuthorizationRuleTimeoutsOutputReference | DataAzurermServicebusNamespaceAuthorizationRuleTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermServicebusNamespaceAuthorizationRuleTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/servicebus_namespace_authorization_rule.html azurerm_servicebus_namespace_authorization_rule}
*/
export class DataAzurermServicebusNamespaceAuthorizationRule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_servicebus_namespace_authorization_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/servicebus_namespace_authorization_rule.html azurerm_servicebus_namespace_authorization_rule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermServicebusNamespaceAuthorizationRuleConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermServicebusNamespaceAuthorizationRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_servicebus_namespace_authorization_rule',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._namespaceName = config.namespaceName;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermServicebusNamespaceAuthorizationRuleTimeouts | undefined; 
  private __timeoutsOutput = new DataAzurermServicebusNamespaceAuthorizationRuleTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataAzurermServicebusNamespaceAuthorizationRuleTimeouts | undefined) {
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
      name: cdktf.stringToTerraform(this._name),
      namespace_name: cdktf.stringToTerraform(this._namespaceName),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: dataAzurermServicebusNamespaceAuthorizationRuleTimeoutsToTerraform(this._timeouts),
    };
  }
}
