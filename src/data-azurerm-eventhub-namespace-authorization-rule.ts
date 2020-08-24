// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_eventhub_namespace_authorization_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAzurermEventhubNamespaceAuthorizationRuleConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly namespaceName: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermEventhubNamespaceAuthorizationRuleTimeouts;
}
export interface DataAzurermEventhubNamespaceAuthorizationRuleTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermEventhubNamespaceAuthorizationRule extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermEventhubNamespaceAuthorizationRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_eventhub_namespace_authorization_rule',
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
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // listen - computed: true, optional: false, required: true
  public get listen() {
    return this.getBooleanAttribute('listen');
  }

  // manage - computed: true, optional: false, required: true
  public get manage() {
    return this.getBooleanAttribute('manage');
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

  // primary_connection_string - computed: true, optional: false, required: true
  public get primaryConnectionString() {
    return this.getStringAttribute('primary_connection_string');
  }

  // primary_key - computed: true, optional: false, required: true
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // secondary_connection_string - computed: true, optional: false, required: true
  public get secondaryConnectionString() {
    return this.getStringAttribute('secondary_connection_string');
  }

  // secondary_key - computed: true, optional: false, required: true
  public get secondaryKey() {
    return this.getStringAttribute('secondary_key');
  }

  // send - computed: true, optional: false, required: true
  public get send() {
    return this.getBooleanAttribute('send');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermEventhubNamespaceAuthorizationRuleTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermEventhubNamespaceAuthorizationRuleTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      namespace_name: this._namespaceName,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
