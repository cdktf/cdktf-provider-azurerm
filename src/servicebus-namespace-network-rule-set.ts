// https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_network_rule_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServicebusNamespaceNetworkRuleSetConfig extends cdktf.TerraformMetaArguments {
  readonly defaultAction?: string;
  readonly ipRules?: string[];
  readonly namespaceName: string;
  readonly resourceGroupName: string;
  /** network_rules block */
  readonly networkRules?: ServicebusNamespaceNetworkRuleSetNetworkRules[];
  /** timeouts block */
  readonly timeouts?: ServicebusNamespaceNetworkRuleSetTimeouts;
}
export interface ServicebusNamespaceNetworkRuleSetNetworkRules {
  readonly ignoreMissingVnetServiceEndpoint?: boolean;
  readonly subnetId: string;
}

function servicebusNamespaceNetworkRuleSetNetworkRulesToTerraform(struct?: ServicebusNamespaceNetworkRuleSetNetworkRules): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ignore_missing_vnet_service_endpoint: cdktf.booleanToTerraform(struct!.ignoreMissingVnetServiceEndpoint),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}

export interface ServicebusNamespaceNetworkRuleSetTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function servicebusNamespaceNetworkRuleSetTimeoutsToTerraform(struct?: ServicebusNamespaceNetworkRuleSetTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class ServicebusNamespaceNetworkRuleSet extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ServicebusNamespaceNetworkRuleSetConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_servicebus_namespace_network_rule_set',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._defaultAction = config.defaultAction;
    this._ipRules = config.ipRules;
    this._namespaceName = config.namespaceName;
    this._resourceGroupName = config.resourceGroupName;
    this._networkRules = config.networkRules;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_action - computed: false, optional: true, required: false
  private _defaultAction?: string;
  public get defaultAction() {
    return this.getStringAttribute('default_action');
  }
  public set defaultAction(value: string ) {
    this._defaultAction = value;
  }
  public resetDefaultAction() {
    this._defaultAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_rules - computed: false, optional: true, required: false
  private _ipRules?: string[];
  public get ipRules() {
    return this.getListAttribute('ip_rules');
  }
  public set ipRules(value: string[] ) {
    this._ipRules = value;
  }
  public resetIpRules() {
    this._ipRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRulesInput() {
    return this._ipRules
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

  // network_rules - computed: false, optional: true, required: false
  private _networkRules?: ServicebusNamespaceNetworkRuleSetNetworkRules[];
  public get networkRules() {
    return this.interpolationForAttribute('network_rules') as any;
  }
  public set networkRules(value: ServicebusNamespaceNetworkRuleSetNetworkRules[] ) {
    this._networkRules = value;
  }
  public resetNetworkRules() {
    this._networkRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkRulesInput() {
    return this._networkRules
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ServicebusNamespaceNetworkRuleSetTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ServicebusNamespaceNetworkRuleSetTimeouts ) {
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
      default_action: cdktf.stringToTerraform(this._defaultAction),
      ip_rules: cdktf.listMapper(cdktf.stringToTerraform)(this._ipRules),
      namespace_name: cdktf.stringToTerraform(this._namespaceName),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      network_rules: cdktf.listMapper(servicebusNamespaceNetworkRuleSetNetworkRulesToTerraform)(this._networkRules),
      timeouts: servicebusNamespaceNetworkRuleSetTimeoutsToTerraform(this._timeouts),
    };
  }
}
