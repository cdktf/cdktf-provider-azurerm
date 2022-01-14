// https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_network_rule_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServicebusNamespaceNetworkRuleSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_network_rule_set#default_action ServicebusNamespaceNetworkRuleSet#default_action}
  */
  readonly defaultAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_network_rule_set#ip_rules ServicebusNamespaceNetworkRuleSet#ip_rules}
  */
  readonly ipRules?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_network_rule_set#namespace_id ServicebusNamespaceNetworkRuleSet#namespace_id}
  */
  readonly namespaceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_network_rule_set#namespace_name ServicebusNamespaceNetworkRuleSet#namespace_name}
  */
  readonly namespaceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_network_rule_set#resource_group_name ServicebusNamespaceNetworkRuleSet#resource_group_name}
  */
  readonly resourceGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_network_rule_set#trusted_services_allowed ServicebusNamespaceNetworkRuleSet#trusted_services_allowed}
  */
  readonly trustedServicesAllowed?: boolean | cdktf.IResolvable;
  /**
  * network_rules block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_network_rule_set#network_rules ServicebusNamespaceNetworkRuleSet#network_rules}
  */
  readonly networkRules?: ServicebusNamespaceNetworkRuleSetNetworkRules[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_network_rule_set#timeouts ServicebusNamespaceNetworkRuleSet#timeouts}
  */
  readonly timeouts?: ServicebusNamespaceNetworkRuleSetTimeouts;
}
export interface ServicebusNamespaceNetworkRuleSetNetworkRules {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_network_rule_set#ignore_missing_vnet_service_endpoint ServicebusNamespaceNetworkRuleSet#ignore_missing_vnet_service_endpoint}
  */
  readonly ignoreMissingVnetServiceEndpoint?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_network_rule_set#subnet_id ServicebusNamespaceNetworkRuleSet#subnet_id}
  */
  readonly subnetId: string;
}

export function servicebusNamespaceNetworkRuleSetNetworkRulesToTerraform(struct?: ServicebusNamespaceNetworkRuleSetNetworkRules): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_missing_vnet_service_endpoint: cdktf.booleanToTerraform(struct!.ignoreMissingVnetServiceEndpoint),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}

export interface ServicebusNamespaceNetworkRuleSetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_network_rule_set#create ServicebusNamespaceNetworkRuleSet#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_network_rule_set#delete ServicebusNamespaceNetworkRuleSet#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_network_rule_set#read ServicebusNamespaceNetworkRuleSet#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_network_rule_set#update ServicebusNamespaceNetworkRuleSet#update}
  */
  readonly update?: string;
}

export function servicebusNamespaceNetworkRuleSetTimeoutsToTerraform(struct?: ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference | ServicebusNamespaceNetworkRuleSetTimeouts): any {
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

export class ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ServicebusNamespaceNetworkRuleSetTimeouts | undefined {
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

  public set internalValue(value: ServicebusNamespaceNetworkRuleSetTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_network_rule_set azurerm_servicebus_namespace_network_rule_set}
*/
export class ServicebusNamespaceNetworkRuleSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_servicebus_namespace_network_rule_set";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_network_rule_set azurerm_servicebus_namespace_network_rule_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServicebusNamespaceNetworkRuleSetConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ServicebusNamespaceNetworkRuleSetConfig = {}) {
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
    this._namespaceId = config.namespaceId;
    this._namespaceName = config.namespaceName;
    this._resourceGroupName = config.resourceGroupName;
    this._trustedServicesAllowed = config.trustedServicesAllowed;
    this._networkRules = config.networkRules;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_action - computed: false, optional: true, required: false
  private _defaultAction?: string; 
  public get defaultAction() {
    return this.getStringAttribute('default_action');
  }
  public set defaultAction(value: string) {
    this._defaultAction = value;
  }
  public resetDefaultAction() {
    this._defaultAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction;
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
  public set ipRules(value: string[]) {
    this._ipRules = value;
  }
  public resetIpRules() {
    this._ipRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRulesInput() {
    return this._ipRules;
  }

  // namespace_id - computed: true, optional: true, required: false
  private _namespaceId?: string; 
  public get namespaceId() {
    return this.getStringAttribute('namespace_id');
  }
  public set namespaceId(value: string) {
    this._namespaceId = value;
  }
  public resetNamespaceId() {
    this._namespaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceIdInput() {
    return this._namespaceId;
  }

  // namespace_name - computed: true, optional: true, required: false
  private _namespaceName?: string; 
  public get namespaceName() {
    return this.getStringAttribute('namespace_name');
  }
  public set namespaceName(value: string) {
    this._namespaceName = value;
  }
  public resetNamespaceName() {
    this._namespaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceNameInput() {
    return this._namespaceName;
  }

  // resource_group_name - computed: true, optional: true, required: false
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  public resetResourceGroupName() {
    this._resourceGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // trusted_services_allowed - computed: false, optional: true, required: false
  private _trustedServicesAllowed?: boolean | cdktf.IResolvable; 
  public get trustedServicesAllowed() {
    return this.getBooleanAttribute('trusted_services_allowed') as any;
  }
  public set trustedServicesAllowed(value: boolean | cdktf.IResolvable) {
    this._trustedServicesAllowed = value;
  }
  public resetTrustedServicesAllowed() {
    this._trustedServicesAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedServicesAllowedInput() {
    return this._trustedServicesAllowed;
  }

  // network_rules - computed: false, optional: true, required: false
  private _networkRules?: ServicebusNamespaceNetworkRuleSetNetworkRules[]; 
  public get networkRules() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('network_rules') as any;
  }
  public set networkRules(value: ServicebusNamespaceNetworkRuleSetNetworkRules[]) {
    this._networkRules = value;
  }
  public resetNetworkRules() {
    this._networkRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkRulesInput() {
    return this._networkRules;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ServicebusNamespaceNetworkRuleSetTimeouts) {
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
      default_action: cdktf.stringToTerraform(this._defaultAction),
      ip_rules: cdktf.listMapper(cdktf.stringToTerraform)(this._ipRules),
      namespace_id: cdktf.stringToTerraform(this._namespaceId),
      namespace_name: cdktf.stringToTerraform(this._namespaceName),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      trusted_services_allowed: cdktf.booleanToTerraform(this._trustedServicesAllowed),
      network_rules: cdktf.listMapper(servicebusNamespaceNetworkRuleSetNetworkRulesToTerraform)(this._networkRules),
      timeouts: servicebusNamespaceNetworkRuleSetTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
