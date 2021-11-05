// https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallPolicyRuleCollectionGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group.html#firewall_policy_id FirewallPolicyRuleCollectionGroup#firewall_policy_id}
  */
  readonly firewallPolicyId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group.html#name FirewallPolicyRuleCollectionGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group.html#priority FirewallPolicyRuleCollectionGroup#priority}
  */
  readonly priority: number;
  /**
  * application_rule_collection block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group.html#application_rule_collection FirewallPolicyRuleCollectionGroup#application_rule_collection}
  */
  readonly applicationRuleCollection?: FirewallPolicyRuleCollectionGroupApplicationRuleCollection[];
  /**
  * nat_rule_collection block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group.html#nat_rule_collection FirewallPolicyRuleCollectionGroup#nat_rule_collection}
  */
  readonly natRuleCollection?: FirewallPolicyRuleCollectionGroupNatRuleCollection[];
  /**
  * network_rule_collection block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group.html#network_rule_collection FirewallPolicyRuleCollectionGroup#network_rule_collection}
  */
  readonly networkRuleCollection?: FirewallPolicyRuleCollectionGroupNetworkRuleCollection[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group.html#timeouts FirewallPolicyRuleCollectionGroup#timeouts}
  */
  readonly timeouts?: FirewallPolicyRuleCollectionGroupTimeouts;
}
export interface FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group.html#port FirewallPolicyRuleCollectionGroup#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group.html#type FirewallPolicyRuleCollectionGroup#type}
  */
  readonly type: string;
}

function firewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsToTerraform(struct?: FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group.html#description FirewallPolicyRuleCollectionGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group.html#destination_addresses FirewallPolicyRuleCollectionGroup#destination_addresses}
  */
  readonly destinationAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group.html#destination_fqdn_tags FirewallPolicyRuleCollectionGroup#destination_fqdn_tags}
  */
  readonly destinationFqdnTags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group.html#destination_fqdns FirewallPolicyRuleCollectionGroup#destination_fqdns}
  */
  readonly destinationFqdns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group.html#destination_urls FirewallPolicyRuleCollectionGroup#destination_urls}
  */
  readonly destinationUrls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group.html#name FirewallPolicyRuleCollectionGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group.html#source_addresses FirewallPolicyRuleCollectionGroup#source_addresses}
  */
  readonly sourceAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group.html#source_ip_groups FirewallPolicyRuleCollectionGroup#source_ip_groups}
  */
  readonly sourceIpGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group.html#terminate_tls FirewallPolicyRuleCollectionGroup#terminate_tls}
  */
  readonly terminateTls?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group.html#web_categories FirewallPolicyRuleCollectionGroup#web_categories}
  */
  readonly webCategories?: string[];
  /**
  * protocols block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group.html#protocols FirewallPolicyRuleCollectionGroup#protocols}
  */
  readonly protocols?: FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols[];
}

function firewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleToTerraform(struct?: FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    destination_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.destinationAddresses),
    destination_fqdn_tags: cdktf.listMapper(cdktf.stringToTerraform)(struct!.destinationFqdnTags),
    destination_fqdns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.destinationFqdns),
    destination_urls: cdktf.listMapper(cdktf.stringToTerraform)(struct!.destinationUrls),
    name: cdktf.stringToTerraform(struct!.name),
    source_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sourceAddresses),
    source_ip_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sourceIpGroups),
    terminate_tls: cdktf.booleanToTerraform(struct!.terminateTls),
    web_categories: cdktf.listMapper(cdktf.stringToTerraform)(struct!.webCategories),
    protocols: cdktf.listMapper(firewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsToTerraform)(struct!.protocols),
  }
}

export interface FirewallPolicyRuleCollectionGroupApplicationRuleCollection {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group.html#action FirewallPolicyRuleCollectionGroup#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group.html#name FirewallPolicyRuleCollectionGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group.html#priority FirewallPolicyRuleCollectionGroup#priority}
  */
  readonly priority: number;
  /**
  * rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group.html#rule FirewallPolicyRuleCollectionGroup#rule}
  */
  readonly rule: FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule[];
}

function firewallPolicyRuleCollectionGroupApplicationRuleCollectionToTerraform(struct?: FirewallPolicyRuleCollectionGroupApplicationRuleCollection): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    rule: cdktf.listMapper(firewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleToTerraform)(struct!.rule),
  }
}

export interface FirewallPolicyRuleCollectionGroupNatRuleCollectionRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group.html#destination_address FirewallPolicyRuleCollectionGroup#destination_address}
  */
  readonly destinationAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group.html#destination_ports FirewallPolicyRuleCollectionGroup#destination_ports}
  */
  readonly destinationPorts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group.html#name FirewallPolicyRuleCollectionGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group.html#protocols FirewallPolicyRuleCollectionGroup#protocols}
  */
  readonly protocols: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group.html#source_addresses FirewallPolicyRuleCollectionGroup#source_addresses}
  */
  readonly sourceAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group.html#source_ip_groups FirewallPolicyRuleCollectionGroup#source_ip_groups}
  */
  readonly sourceIpGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group.html#translated_address FirewallPolicyRuleCollectionGroup#translated_address}
  */
  readonly translatedAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group.html#translated_fqdn FirewallPolicyRuleCollectionGroup#translated_fqdn}
  */
  readonly translatedFqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group.html#translated_port FirewallPolicyRuleCollectionGroup#translated_port}
  */
  readonly translatedPort: number;
}

function firewallPolicyRuleCollectionGroupNatRuleCollectionRuleToTerraform(struct?: FirewallPolicyRuleCollectionGroupNatRuleCollectionRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_address: cdktf.stringToTerraform(struct!.destinationAddress),
    destination_ports: cdktf.listMapper(cdktf.stringToTerraform)(struct!.destinationPorts),
    name: cdktf.stringToTerraform(struct!.name),
    protocols: cdktf.listMapper(cdktf.stringToTerraform)(struct!.protocols),
    source_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sourceAddresses),
    source_ip_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sourceIpGroups),
    translated_address: cdktf.stringToTerraform(struct!.translatedAddress),
    translated_fqdn: cdktf.stringToTerraform(struct!.translatedFqdn),
    translated_port: cdktf.numberToTerraform(struct!.translatedPort),
  }
}

export interface FirewallPolicyRuleCollectionGroupNatRuleCollection {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group.html#action FirewallPolicyRuleCollectionGroup#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group.html#name FirewallPolicyRuleCollectionGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group.html#priority FirewallPolicyRuleCollectionGroup#priority}
  */
  readonly priority: number;
  /**
  * rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group.html#rule FirewallPolicyRuleCollectionGroup#rule}
  */
  readonly rule: FirewallPolicyRuleCollectionGroupNatRuleCollectionRule[];
}

function firewallPolicyRuleCollectionGroupNatRuleCollectionToTerraform(struct?: FirewallPolicyRuleCollectionGroupNatRuleCollection): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    rule: cdktf.listMapper(firewallPolicyRuleCollectionGroupNatRuleCollectionRuleToTerraform)(struct!.rule),
  }
}

export interface FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group.html#destination_addresses FirewallPolicyRuleCollectionGroup#destination_addresses}
  */
  readonly destinationAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group.html#destination_fqdns FirewallPolicyRuleCollectionGroup#destination_fqdns}
  */
  readonly destinationFqdns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group.html#destination_ip_groups FirewallPolicyRuleCollectionGroup#destination_ip_groups}
  */
  readonly destinationIpGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group.html#destination_ports FirewallPolicyRuleCollectionGroup#destination_ports}
  */
  readonly destinationPorts: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group.html#name FirewallPolicyRuleCollectionGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group.html#protocols FirewallPolicyRuleCollectionGroup#protocols}
  */
  readonly protocols: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group.html#source_addresses FirewallPolicyRuleCollectionGroup#source_addresses}
  */
  readonly sourceAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group.html#source_ip_groups FirewallPolicyRuleCollectionGroup#source_ip_groups}
  */
  readonly sourceIpGroups?: string[];
}

function firewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleToTerraform(struct?: FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.destinationAddresses),
    destination_fqdns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.destinationFqdns),
    destination_ip_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.destinationIpGroups),
    destination_ports: cdktf.listMapper(cdktf.stringToTerraform)(struct!.destinationPorts),
    name: cdktf.stringToTerraform(struct!.name),
    protocols: cdktf.listMapper(cdktf.stringToTerraform)(struct!.protocols),
    source_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sourceAddresses),
    source_ip_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sourceIpGroups),
  }
}

export interface FirewallPolicyRuleCollectionGroupNetworkRuleCollection {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group.html#action FirewallPolicyRuleCollectionGroup#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group.html#name FirewallPolicyRuleCollectionGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group.html#priority FirewallPolicyRuleCollectionGroup#priority}
  */
  readonly priority: number;
  /**
  * rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group.html#rule FirewallPolicyRuleCollectionGroup#rule}
  */
  readonly rule: FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule[];
}

function firewallPolicyRuleCollectionGroupNetworkRuleCollectionToTerraform(struct?: FirewallPolicyRuleCollectionGroupNetworkRuleCollection): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    rule: cdktf.listMapper(firewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleToTerraform)(struct!.rule),
  }
}

export interface FirewallPolicyRuleCollectionGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group.html#create FirewallPolicyRuleCollectionGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group.html#delete FirewallPolicyRuleCollectionGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group.html#read FirewallPolicyRuleCollectionGroup#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group.html#update FirewallPolicyRuleCollectionGroup#update}
  */
  readonly update?: string;
}

function firewallPolicyRuleCollectionGroupTimeoutsToTerraform(struct?: FirewallPolicyRuleCollectionGroupTimeoutsOutputReference | FirewallPolicyRuleCollectionGroupTimeouts): any {
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

export class FirewallPolicyRuleCollectionGroupTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group.html azurerm_firewall_policy_rule_collection_group}
*/
export class FirewallPolicyRuleCollectionGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_firewall_policy_rule_collection_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group.html azurerm_firewall_policy_rule_collection_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallPolicyRuleCollectionGroupConfig
  */
  public constructor(scope: Construct, id: string, config: FirewallPolicyRuleCollectionGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_firewall_policy_rule_collection_group',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._firewallPolicyId = config.firewallPolicyId;
    this._name = config.name;
    this._priority = config.priority;
    this._applicationRuleCollection = config.applicationRuleCollection;
    this._natRuleCollection = config.natRuleCollection;
    this._networkRuleCollection = config.networkRuleCollection;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // firewall_policy_id - computed: false, optional: false, required: true
  private _firewallPolicyId?: string; 
  public get firewallPolicyId() {
    return this.getStringAttribute('firewall_policy_id');
  }
  public set firewallPolicyId(value: string) {
    this._firewallPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallPolicyIdInput() {
    return this._firewallPolicyId
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

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority
  }

  // application_rule_collection - computed: false, optional: true, required: false
  private _applicationRuleCollection?: FirewallPolicyRuleCollectionGroupApplicationRuleCollection[] | undefined; 
  public get applicationRuleCollection() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('application_rule_collection') as any;
  }
  public set applicationRuleCollection(value: FirewallPolicyRuleCollectionGroupApplicationRuleCollection[] | undefined) {
    this._applicationRuleCollection = value;
  }
  public resetApplicationRuleCollection() {
    this._applicationRuleCollection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationRuleCollectionInput() {
    return this._applicationRuleCollection
  }

  // nat_rule_collection - computed: false, optional: true, required: false
  private _natRuleCollection?: FirewallPolicyRuleCollectionGroupNatRuleCollection[] | undefined; 
  public get natRuleCollection() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('nat_rule_collection') as any;
  }
  public set natRuleCollection(value: FirewallPolicyRuleCollectionGroupNatRuleCollection[] | undefined) {
    this._natRuleCollection = value;
  }
  public resetNatRuleCollection() {
    this._natRuleCollection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natRuleCollectionInput() {
    return this._natRuleCollection
  }

  // network_rule_collection - computed: false, optional: true, required: false
  private _networkRuleCollection?: FirewallPolicyRuleCollectionGroupNetworkRuleCollection[] | undefined; 
  public get networkRuleCollection() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('network_rule_collection') as any;
  }
  public set networkRuleCollection(value: FirewallPolicyRuleCollectionGroupNetworkRuleCollection[] | undefined) {
    this._networkRuleCollection = value;
  }
  public resetNetworkRuleCollection() {
    this._networkRuleCollection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkRuleCollectionInput() {
    return this._networkRuleCollection
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: FirewallPolicyRuleCollectionGroupTimeouts | undefined; 
  private __timeoutsOutput = new FirewallPolicyRuleCollectionGroupTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: FirewallPolicyRuleCollectionGroupTimeouts | undefined) {
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
      firewall_policy_id: cdktf.stringToTerraform(this._firewallPolicyId),
      name: cdktf.stringToTerraform(this._name),
      priority: cdktf.numberToTerraform(this._priority),
      application_rule_collection: cdktf.listMapper(firewallPolicyRuleCollectionGroupApplicationRuleCollectionToTerraform)(this._applicationRuleCollection),
      nat_rule_collection: cdktf.listMapper(firewallPolicyRuleCollectionGroupNatRuleCollectionToTerraform)(this._natRuleCollection),
      network_rule_collection: cdktf.listMapper(firewallPolicyRuleCollectionGroupNetworkRuleCollectionToTerraform)(this._networkRuleCollection),
      timeouts: firewallPolicyRuleCollectionGroupTimeoutsToTerraform(this._timeouts),
    };
  }
}
