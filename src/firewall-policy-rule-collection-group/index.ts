// https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallPolicyRuleCollectionGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group#firewall_policy_id FirewallPolicyRuleCollectionGroup#firewall_policy_id}
  */
  readonly firewallPolicyId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group#id FirewallPolicyRuleCollectionGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group#name FirewallPolicyRuleCollectionGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group#priority FirewallPolicyRuleCollectionGroup#priority}
  */
  readonly priority: number;
  /**
  * application_rule_collection block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group#application_rule_collection FirewallPolicyRuleCollectionGroup#application_rule_collection}
  */
  readonly applicationRuleCollection?: FirewallPolicyRuleCollectionGroupApplicationRuleCollection[] | cdktf.IResolvable;
  /**
  * nat_rule_collection block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group#nat_rule_collection FirewallPolicyRuleCollectionGroup#nat_rule_collection}
  */
  readonly natRuleCollection?: FirewallPolicyRuleCollectionGroupNatRuleCollection[] | cdktf.IResolvable;
  /**
  * network_rule_collection block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group#network_rule_collection FirewallPolicyRuleCollectionGroup#network_rule_collection}
  */
  readonly networkRuleCollection?: FirewallPolicyRuleCollectionGroupNetworkRuleCollection[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group#timeouts FirewallPolicyRuleCollectionGroup#timeouts}
  */
  readonly timeouts?: FirewallPolicyRuleCollectionGroupTimeouts;
}
export interface FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group#port FirewallPolicyRuleCollectionGroup#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group#type FirewallPolicyRuleCollectionGroup#type}
  */
  readonly type: string;
}

export function firewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsToTerraform(struct?: FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._type = value.type;
    }
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference {
    return new FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group#description FirewallPolicyRuleCollectionGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group#destination_addresses FirewallPolicyRuleCollectionGroup#destination_addresses}
  */
  readonly destinationAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group#destination_fqdn_tags FirewallPolicyRuleCollectionGroup#destination_fqdn_tags}
  */
  readonly destinationFqdnTags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group#destination_fqdns FirewallPolicyRuleCollectionGroup#destination_fqdns}
  */
  readonly destinationFqdns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group#destination_urls FirewallPolicyRuleCollectionGroup#destination_urls}
  */
  readonly destinationUrls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group#name FirewallPolicyRuleCollectionGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group#source_addresses FirewallPolicyRuleCollectionGroup#source_addresses}
  */
  readonly sourceAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group#source_ip_groups FirewallPolicyRuleCollectionGroup#source_ip_groups}
  */
  readonly sourceIpGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group#terminate_tls FirewallPolicyRuleCollectionGroup#terminate_tls}
  */
  readonly terminateTls?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group#web_categories FirewallPolicyRuleCollectionGroup#web_categories}
  */
  readonly webCategories?: string[];
  /**
  * protocols block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group#protocols FirewallPolicyRuleCollectionGroup#protocols}
  */
  readonly protocols?: FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols[] | cdktf.IResolvable;
}

export function firewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleToTerraform(struct?: FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    destination_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationAddresses),
    destination_fqdn_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationFqdnTags),
    destination_fqdns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationFqdns),
    destination_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationUrls),
    name: cdktf.stringToTerraform(struct!.name),
    source_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceAddresses),
    source_ip_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceIpGroups),
    terminate_tls: cdktf.booleanToTerraform(struct!.terminateTls),
    web_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.webCategories),
    protocols: cdktf.listMapper(firewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsToTerraform, true)(struct!.protocols),
  }
}

export class FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._destinationAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationAddresses = this._destinationAddresses;
    }
    if (this._destinationFqdnTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationFqdnTags = this._destinationFqdnTags;
    }
    if (this._destinationFqdns !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationFqdns = this._destinationFqdns;
    }
    if (this._destinationUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationUrls = this._destinationUrls;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sourceAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddresses = this._sourceAddresses;
    }
    if (this._sourceIpGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIpGroups = this._sourceIpGroups;
    }
    if (this._terminateTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminateTls = this._terminateTls;
    }
    if (this._webCategories !== undefined) {
      hasAnyValues = true;
      internalValueResult.webCategories = this._webCategories;
    }
    if (this._protocols?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocols = this._protocols?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._destinationAddresses = undefined;
      this._destinationFqdnTags = undefined;
      this._destinationFqdns = undefined;
      this._destinationUrls = undefined;
      this._name = undefined;
      this._sourceAddresses = undefined;
      this._sourceIpGroups = undefined;
      this._terminateTls = undefined;
      this._webCategories = undefined;
      this._protocols.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._destinationAddresses = value.destinationAddresses;
      this._destinationFqdnTags = value.destinationFqdnTags;
      this._destinationFqdns = value.destinationFqdns;
      this._destinationUrls = value.destinationUrls;
      this._name = value.name;
      this._sourceAddresses = value.sourceAddresses;
      this._sourceIpGroups = value.sourceIpGroups;
      this._terminateTls = value.terminateTls;
      this._webCategories = value.webCategories;
      this._protocols.internalValue = value.protocols;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // destination_addresses - computed: false, optional: true, required: false
  private _destinationAddresses?: string[]; 
  public get destinationAddresses() {
    return this.getListAttribute('destination_addresses');
  }
  public set destinationAddresses(value: string[]) {
    this._destinationAddresses = value;
  }
  public resetDestinationAddresses() {
    this._destinationAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAddressesInput() {
    return this._destinationAddresses;
  }

  // destination_fqdn_tags - computed: false, optional: true, required: false
  private _destinationFqdnTags?: string[]; 
  public get destinationFqdnTags() {
    return this.getListAttribute('destination_fqdn_tags');
  }
  public set destinationFqdnTags(value: string[]) {
    this._destinationFqdnTags = value;
  }
  public resetDestinationFqdnTags() {
    this._destinationFqdnTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationFqdnTagsInput() {
    return this._destinationFqdnTags;
  }

  // destination_fqdns - computed: false, optional: true, required: false
  private _destinationFqdns?: string[]; 
  public get destinationFqdns() {
    return this.getListAttribute('destination_fqdns');
  }
  public set destinationFqdns(value: string[]) {
    this._destinationFqdns = value;
  }
  public resetDestinationFqdns() {
    this._destinationFqdns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationFqdnsInput() {
    return this._destinationFqdns;
  }

  // destination_urls - computed: false, optional: true, required: false
  private _destinationUrls?: string[]; 
  public get destinationUrls() {
    return this.getListAttribute('destination_urls');
  }
  public set destinationUrls(value: string[]) {
    this._destinationUrls = value;
  }
  public resetDestinationUrls() {
    this._destinationUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationUrlsInput() {
    return this._destinationUrls;
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
    return this._name;
  }

  // source_addresses - computed: false, optional: true, required: false
  private _sourceAddresses?: string[]; 
  public get sourceAddresses() {
    return this.getListAttribute('source_addresses');
  }
  public set sourceAddresses(value: string[]) {
    this._sourceAddresses = value;
  }
  public resetSourceAddresses() {
    this._sourceAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressesInput() {
    return this._sourceAddresses;
  }

  // source_ip_groups - computed: false, optional: true, required: false
  private _sourceIpGroups?: string[]; 
  public get sourceIpGroups() {
    return this.getListAttribute('source_ip_groups');
  }
  public set sourceIpGroups(value: string[]) {
    this._sourceIpGroups = value;
  }
  public resetSourceIpGroups() {
    this._sourceIpGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpGroupsInput() {
    return this._sourceIpGroups;
  }

  // terminate_tls - computed: false, optional: true, required: false
  private _terminateTls?: boolean | cdktf.IResolvable; 
  public get terminateTls() {
    return this.getBooleanAttribute('terminate_tls');
  }
  public set terminateTls(value: boolean | cdktf.IResolvable) {
    this._terminateTls = value;
  }
  public resetTerminateTls() {
    this._terminateTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminateTlsInput() {
    return this._terminateTls;
  }

  // web_categories - computed: false, optional: true, required: false
  private _webCategories?: string[]; 
  public get webCategories() {
    return this.getListAttribute('web_categories');
  }
  public set webCategories(value: string[]) {
    this._webCategories = value;
  }
  public resetWebCategories() {
    this._webCategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webCategoriesInput() {
    return this._webCategories;
  }

  // protocols - computed: false, optional: true, required: false
  private _protocols = new FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocolsList(this, "protocols", false);
  public get protocols() {
    return this._protocols;
  }
  public putProtocols(value: FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleProtocols[] | cdktf.IResolvable) {
    this._protocols.internalValue = value;
  }
  public resetProtocols() {
    this._protocols.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols.internalValue;
  }
}

export class FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference {
    return new FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicyRuleCollectionGroupApplicationRuleCollection {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group#action FirewallPolicyRuleCollectionGroup#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group#name FirewallPolicyRuleCollectionGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group#priority FirewallPolicyRuleCollectionGroup#priority}
  */
  readonly priority: number;
  /**
  * rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group#rule FirewallPolicyRuleCollectionGroup#rule}
  */
  readonly rule: FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule[] | cdktf.IResolvable;
}

export function firewallPolicyRuleCollectionGroupApplicationRuleCollectionToTerraform(struct?: FirewallPolicyRuleCollectionGroupApplicationRuleCollection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    rule: cdktf.listMapper(firewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleToTerraform, true)(struct!.rule),
  }
}

export class FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FirewallPolicyRuleCollectionGroupApplicationRuleCollection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._rule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyRuleCollectionGroupApplicationRuleCollection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._name = undefined;
      this._priority = undefined;
      this._rule.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._name = value.name;
      this._priority = value.priority;
      this._rule.internalValue = value.rule;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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
    return this._name;
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
    return this._priority;
  }

  // rule - computed: false, optional: false, required: true
  private _rule = new FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: FirewallPolicyRuleCollectionGroupApplicationRuleCollectionRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }
}

export class FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicyRuleCollectionGroupApplicationRuleCollection[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference {
    return new FirewallPolicyRuleCollectionGroupApplicationRuleCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicyRuleCollectionGroupNatRuleCollectionRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group#destination_address FirewallPolicyRuleCollectionGroup#destination_address}
  */
  readonly destinationAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group#destination_ports FirewallPolicyRuleCollectionGroup#destination_ports}
  */
  readonly destinationPorts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group#name FirewallPolicyRuleCollectionGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group#protocols FirewallPolicyRuleCollectionGroup#protocols}
  */
  readonly protocols: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group#source_addresses FirewallPolicyRuleCollectionGroup#source_addresses}
  */
  readonly sourceAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group#source_ip_groups FirewallPolicyRuleCollectionGroup#source_ip_groups}
  */
  readonly sourceIpGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group#translated_address FirewallPolicyRuleCollectionGroup#translated_address}
  */
  readonly translatedAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group#translated_fqdn FirewallPolicyRuleCollectionGroup#translated_fqdn}
  */
  readonly translatedFqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group#translated_port FirewallPolicyRuleCollectionGroup#translated_port}
  */
  readonly translatedPort: number;
}

export function firewallPolicyRuleCollectionGroupNatRuleCollectionRuleToTerraform(struct?: FirewallPolicyRuleCollectionGroupNatRuleCollectionRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_address: cdktf.stringToTerraform(struct!.destinationAddress),
    destination_ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationPorts),
    name: cdktf.stringToTerraform(struct!.name),
    protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.protocols),
    source_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceAddresses),
    source_ip_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceIpGroups),
    translated_address: cdktf.stringToTerraform(struct!.translatedAddress),
    translated_fqdn: cdktf.stringToTerraform(struct!.translatedFqdn),
    translated_port: cdktf.numberToTerraform(struct!.translatedPort),
  }
}

export class FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FirewallPolicyRuleCollectionGroupNatRuleCollectionRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationAddress = this._destinationAddress;
    }
    if (this._destinationPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPorts = this._destinationPorts;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._protocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocols = this._protocols;
    }
    if (this._sourceAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddresses = this._sourceAddresses;
    }
    if (this._sourceIpGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIpGroups = this._sourceIpGroups;
    }
    if (this._translatedAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.translatedAddress = this._translatedAddress;
    }
    if (this._translatedFqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.translatedFqdn = this._translatedFqdn;
    }
    if (this._translatedPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.translatedPort = this._translatedPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyRuleCollectionGroupNatRuleCollectionRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationAddress = undefined;
      this._destinationPorts = undefined;
      this._name = undefined;
      this._protocols = undefined;
      this._sourceAddresses = undefined;
      this._sourceIpGroups = undefined;
      this._translatedAddress = undefined;
      this._translatedFqdn = undefined;
      this._translatedPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationAddress = value.destinationAddress;
      this._destinationPorts = value.destinationPorts;
      this._name = value.name;
      this._protocols = value.protocols;
      this._sourceAddresses = value.sourceAddresses;
      this._sourceIpGroups = value.sourceIpGroups;
      this._translatedAddress = value.translatedAddress;
      this._translatedFqdn = value.translatedFqdn;
      this._translatedPort = value.translatedPort;
    }
  }

  // destination_address - computed: false, optional: true, required: false
  private _destinationAddress?: string; 
  public get destinationAddress() {
    return this.getStringAttribute('destination_address');
  }
  public set destinationAddress(value: string) {
    this._destinationAddress = value;
  }
  public resetDestinationAddress() {
    this._destinationAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAddressInput() {
    return this._destinationAddress;
  }

  // destination_ports - computed: false, optional: true, required: false
  private _destinationPorts?: string[]; 
  public get destinationPorts() {
    return this.getListAttribute('destination_ports');
  }
  public set destinationPorts(value: string[]) {
    this._destinationPorts = value;
  }
  public resetDestinationPorts() {
    this._destinationPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortsInput() {
    return this._destinationPorts;
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
    return this._name;
  }

  // protocols - computed: false, optional: false, required: true
  private _protocols?: string[]; 
  public get protocols() {
    return this.getListAttribute('protocols');
  }
  public set protocols(value: string[]) {
    this._protocols = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }

  // source_addresses - computed: false, optional: true, required: false
  private _sourceAddresses?: string[]; 
  public get sourceAddresses() {
    return this.getListAttribute('source_addresses');
  }
  public set sourceAddresses(value: string[]) {
    this._sourceAddresses = value;
  }
  public resetSourceAddresses() {
    this._sourceAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressesInput() {
    return this._sourceAddresses;
  }

  // source_ip_groups - computed: false, optional: true, required: false
  private _sourceIpGroups?: string[]; 
  public get sourceIpGroups() {
    return this.getListAttribute('source_ip_groups');
  }
  public set sourceIpGroups(value: string[]) {
    this._sourceIpGroups = value;
  }
  public resetSourceIpGroups() {
    this._sourceIpGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpGroupsInput() {
    return this._sourceIpGroups;
  }

  // translated_address - computed: false, optional: true, required: false
  private _translatedAddress?: string; 
  public get translatedAddress() {
    return this.getStringAttribute('translated_address');
  }
  public set translatedAddress(value: string) {
    this._translatedAddress = value;
  }
  public resetTranslatedAddress() {
    this._translatedAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translatedAddressInput() {
    return this._translatedAddress;
  }

  // translated_fqdn - computed: false, optional: true, required: false
  private _translatedFqdn?: string; 
  public get translatedFqdn() {
    return this.getStringAttribute('translated_fqdn');
  }
  public set translatedFqdn(value: string) {
    this._translatedFqdn = value;
  }
  public resetTranslatedFqdn() {
    this._translatedFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translatedFqdnInput() {
    return this._translatedFqdn;
  }

  // translated_port - computed: false, optional: false, required: true
  private _translatedPort?: number; 
  public get translatedPort() {
    return this.getNumberAttribute('translated_port');
  }
  public set translatedPort(value: number) {
    this._translatedPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get translatedPortInput() {
    return this._translatedPort;
  }
}

export class FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicyRuleCollectionGroupNatRuleCollectionRule[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference {
    return new FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicyRuleCollectionGroupNatRuleCollection {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group#action FirewallPolicyRuleCollectionGroup#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group#name FirewallPolicyRuleCollectionGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group#priority FirewallPolicyRuleCollectionGroup#priority}
  */
  readonly priority: number;
  /**
  * rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group#rule FirewallPolicyRuleCollectionGroup#rule}
  */
  readonly rule: FirewallPolicyRuleCollectionGroupNatRuleCollectionRule[] | cdktf.IResolvable;
}

export function firewallPolicyRuleCollectionGroupNatRuleCollectionToTerraform(struct?: FirewallPolicyRuleCollectionGroupNatRuleCollection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    rule: cdktf.listMapper(firewallPolicyRuleCollectionGroupNatRuleCollectionRuleToTerraform, true)(struct!.rule),
  }
}

export class FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FirewallPolicyRuleCollectionGroupNatRuleCollection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._rule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyRuleCollectionGroupNatRuleCollection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._name = undefined;
      this._priority = undefined;
      this._rule.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._name = value.name;
      this._priority = value.priority;
      this._rule.internalValue = value.rule;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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
    return this._name;
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
    return this._priority;
  }

  // rule - computed: false, optional: false, required: true
  private _rule = new FirewallPolicyRuleCollectionGroupNatRuleCollectionRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: FirewallPolicyRuleCollectionGroupNatRuleCollectionRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }
}

export class FirewallPolicyRuleCollectionGroupNatRuleCollectionList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicyRuleCollectionGroupNatRuleCollection[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference {
    return new FirewallPolicyRuleCollectionGroupNatRuleCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group#destination_addresses FirewallPolicyRuleCollectionGroup#destination_addresses}
  */
  readonly destinationAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group#destination_fqdns FirewallPolicyRuleCollectionGroup#destination_fqdns}
  */
  readonly destinationFqdns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group#destination_ip_groups FirewallPolicyRuleCollectionGroup#destination_ip_groups}
  */
  readonly destinationIpGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group#destination_ports FirewallPolicyRuleCollectionGroup#destination_ports}
  */
  readonly destinationPorts: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group#name FirewallPolicyRuleCollectionGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group#protocols FirewallPolicyRuleCollectionGroup#protocols}
  */
  readonly protocols: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group#source_addresses FirewallPolicyRuleCollectionGroup#source_addresses}
  */
  readonly sourceAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group#source_ip_groups FirewallPolicyRuleCollectionGroup#source_ip_groups}
  */
  readonly sourceIpGroups?: string[];
}

export function firewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleToTerraform(struct?: FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationAddresses),
    destination_fqdns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationFqdns),
    destination_ip_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationIpGroups),
    destination_ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationPorts),
    name: cdktf.stringToTerraform(struct!.name),
    protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.protocols),
    source_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceAddresses),
    source_ip_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceIpGroups),
  }
}

export class FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationAddresses = this._destinationAddresses;
    }
    if (this._destinationFqdns !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationFqdns = this._destinationFqdns;
    }
    if (this._destinationIpGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationIpGroups = this._destinationIpGroups;
    }
    if (this._destinationPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPorts = this._destinationPorts;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._protocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocols = this._protocols;
    }
    if (this._sourceAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddresses = this._sourceAddresses;
    }
    if (this._sourceIpGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIpGroups = this._sourceIpGroups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationAddresses = undefined;
      this._destinationFqdns = undefined;
      this._destinationIpGroups = undefined;
      this._destinationPorts = undefined;
      this._name = undefined;
      this._protocols = undefined;
      this._sourceAddresses = undefined;
      this._sourceIpGroups = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationAddresses = value.destinationAddresses;
      this._destinationFqdns = value.destinationFqdns;
      this._destinationIpGroups = value.destinationIpGroups;
      this._destinationPorts = value.destinationPorts;
      this._name = value.name;
      this._protocols = value.protocols;
      this._sourceAddresses = value.sourceAddresses;
      this._sourceIpGroups = value.sourceIpGroups;
    }
  }

  // destination_addresses - computed: false, optional: true, required: false
  private _destinationAddresses?: string[]; 
  public get destinationAddresses() {
    return this.getListAttribute('destination_addresses');
  }
  public set destinationAddresses(value: string[]) {
    this._destinationAddresses = value;
  }
  public resetDestinationAddresses() {
    this._destinationAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAddressesInput() {
    return this._destinationAddresses;
  }

  // destination_fqdns - computed: false, optional: true, required: false
  private _destinationFqdns?: string[]; 
  public get destinationFqdns() {
    return this.getListAttribute('destination_fqdns');
  }
  public set destinationFqdns(value: string[]) {
    this._destinationFqdns = value;
  }
  public resetDestinationFqdns() {
    this._destinationFqdns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationFqdnsInput() {
    return this._destinationFqdns;
  }

  // destination_ip_groups - computed: false, optional: true, required: false
  private _destinationIpGroups?: string[]; 
  public get destinationIpGroups() {
    return this.getListAttribute('destination_ip_groups');
  }
  public set destinationIpGroups(value: string[]) {
    this._destinationIpGroups = value;
  }
  public resetDestinationIpGroups() {
    this._destinationIpGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIpGroupsInput() {
    return this._destinationIpGroups;
  }

  // destination_ports - computed: false, optional: false, required: true
  private _destinationPorts?: string[]; 
  public get destinationPorts() {
    return this.getListAttribute('destination_ports');
  }
  public set destinationPorts(value: string[]) {
    this._destinationPorts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortsInput() {
    return this._destinationPorts;
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
    return this._name;
  }

  // protocols - computed: false, optional: false, required: true
  private _protocols?: string[]; 
  public get protocols() {
    return this.getListAttribute('protocols');
  }
  public set protocols(value: string[]) {
    this._protocols = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }

  // source_addresses - computed: false, optional: true, required: false
  private _sourceAddresses?: string[]; 
  public get sourceAddresses() {
    return this.getListAttribute('source_addresses');
  }
  public set sourceAddresses(value: string[]) {
    this._sourceAddresses = value;
  }
  public resetSourceAddresses() {
    this._sourceAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressesInput() {
    return this._sourceAddresses;
  }

  // source_ip_groups - computed: false, optional: true, required: false
  private _sourceIpGroups?: string[]; 
  public get sourceIpGroups() {
    return this.getListAttribute('source_ip_groups');
  }
  public set sourceIpGroups(value: string[]) {
    this._sourceIpGroups = value;
  }
  public resetSourceIpGroups() {
    this._sourceIpGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpGroupsInput() {
    return this._sourceIpGroups;
  }
}

export class FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference {
    return new FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicyRuleCollectionGroupNetworkRuleCollection {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group#action FirewallPolicyRuleCollectionGroup#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group#name FirewallPolicyRuleCollectionGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group#priority FirewallPolicyRuleCollectionGroup#priority}
  */
  readonly priority: number;
  /**
  * rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group#rule FirewallPolicyRuleCollectionGroup#rule}
  */
  readonly rule: FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule[] | cdktf.IResolvable;
}

export function firewallPolicyRuleCollectionGroupNetworkRuleCollectionToTerraform(struct?: FirewallPolicyRuleCollectionGroupNetworkRuleCollection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    rule: cdktf.listMapper(firewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleToTerraform, true)(struct!.rule),
  }
}

export class FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FirewallPolicyRuleCollectionGroupNetworkRuleCollection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._rule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyRuleCollectionGroupNetworkRuleCollection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._name = undefined;
      this._priority = undefined;
      this._rule.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._name = value.name;
      this._priority = value.priority;
      this._rule.internalValue = value.rule;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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
    return this._name;
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
    return this._priority;
  }

  // rule - computed: false, optional: false, required: true
  private _rule = new FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: FirewallPolicyRuleCollectionGroupNetworkRuleCollectionRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }
}

export class FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicyRuleCollectionGroupNetworkRuleCollection[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference {
    return new FirewallPolicyRuleCollectionGroupNetworkRuleCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicyRuleCollectionGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group#create FirewallPolicyRuleCollectionGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group#delete FirewallPolicyRuleCollectionGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group#read FirewallPolicyRuleCollectionGroup#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group#update FirewallPolicyRuleCollectionGroup#update}
  */
  readonly update?: string;
}

export function firewallPolicyRuleCollectionGroupTimeoutsToTerraform(struct?: FirewallPolicyRuleCollectionGroupTimeoutsOutputReference | FirewallPolicyRuleCollectionGroupTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirewallPolicyRuleCollectionGroupTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: FirewallPolicyRuleCollectionGroupTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group azurerm_firewall_policy_rule_collection_group}
*/
export class FirewallPolicyRuleCollectionGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_firewall_policy_rule_collection_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy_rule_collection_group azurerm_firewall_policy_rule_collection_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallPolicyRuleCollectionGroupConfig
  */
  public constructor(scope: Construct, id: string, config: FirewallPolicyRuleCollectionGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_firewall_policy_rule_collection_group',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '3.44.1',
        providerVersionConstraint: '~> 3.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._firewallPolicyId = config.firewallPolicyId;
    this._id = config.id;
    this._name = config.name;
    this._priority = config.priority;
    this._applicationRuleCollection.internalValue = config.applicationRuleCollection;
    this._natRuleCollection.internalValue = config.natRuleCollection;
    this._networkRuleCollection.internalValue = config.networkRuleCollection;
    this._timeouts.internalValue = config.timeouts;
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
    return this._firewallPolicyId;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
    return this._name;
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
    return this._priority;
  }

  // application_rule_collection - computed: false, optional: true, required: false
  private _applicationRuleCollection = new FirewallPolicyRuleCollectionGroupApplicationRuleCollectionList(this, "application_rule_collection", false);
  public get applicationRuleCollection() {
    return this._applicationRuleCollection;
  }
  public putApplicationRuleCollection(value: FirewallPolicyRuleCollectionGroupApplicationRuleCollection[] | cdktf.IResolvable) {
    this._applicationRuleCollection.internalValue = value;
  }
  public resetApplicationRuleCollection() {
    this._applicationRuleCollection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationRuleCollectionInput() {
    return this._applicationRuleCollection.internalValue;
  }

  // nat_rule_collection - computed: false, optional: true, required: false
  private _natRuleCollection = new FirewallPolicyRuleCollectionGroupNatRuleCollectionList(this, "nat_rule_collection", false);
  public get natRuleCollection() {
    return this._natRuleCollection;
  }
  public putNatRuleCollection(value: FirewallPolicyRuleCollectionGroupNatRuleCollection[] | cdktf.IResolvable) {
    this._natRuleCollection.internalValue = value;
  }
  public resetNatRuleCollection() {
    this._natRuleCollection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natRuleCollectionInput() {
    return this._natRuleCollection.internalValue;
  }

  // network_rule_collection - computed: false, optional: true, required: false
  private _networkRuleCollection = new FirewallPolicyRuleCollectionGroupNetworkRuleCollectionList(this, "network_rule_collection", false);
  public get networkRuleCollection() {
    return this._networkRuleCollection;
  }
  public putNetworkRuleCollection(value: FirewallPolicyRuleCollectionGroupNetworkRuleCollection[] | cdktf.IResolvable) {
    this._networkRuleCollection.internalValue = value;
  }
  public resetNetworkRuleCollection() {
    this._networkRuleCollection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkRuleCollectionInput() {
    return this._networkRuleCollection.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FirewallPolicyRuleCollectionGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FirewallPolicyRuleCollectionGroupTimeouts) {
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
      firewall_policy_id: cdktf.stringToTerraform(this._firewallPolicyId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      priority: cdktf.numberToTerraform(this._priority),
      application_rule_collection: cdktf.listMapper(firewallPolicyRuleCollectionGroupApplicationRuleCollectionToTerraform, true)(this._applicationRuleCollection.internalValue),
      nat_rule_collection: cdktf.listMapper(firewallPolicyRuleCollectionGroupNatRuleCollectionToTerraform, true)(this._natRuleCollection.internalValue),
      network_rule_collection: cdktf.listMapper(firewallPolicyRuleCollectionGroupNetworkRuleCollectionToTerraform, true)(this._networkRuleCollection.internalValue),
      timeouts: firewallPolicyRuleCollectionGroupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
