// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/firewall_nat_rule_collection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallNatRuleCollectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/firewall_nat_rule_collection#action FirewallNatRuleCollection#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/firewall_nat_rule_collection#azure_firewall_name FirewallNatRuleCollection#azure_firewall_name}
  */
  readonly azureFirewallName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/firewall_nat_rule_collection#id FirewallNatRuleCollection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/firewall_nat_rule_collection#name FirewallNatRuleCollection#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/firewall_nat_rule_collection#priority FirewallNatRuleCollection#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/firewall_nat_rule_collection#resource_group_name FirewallNatRuleCollection#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/firewall_nat_rule_collection#rule FirewallNatRuleCollection#rule}
  */
  readonly rule: FirewallNatRuleCollectionRule[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/firewall_nat_rule_collection#timeouts FirewallNatRuleCollection#timeouts}
  */
  readonly timeouts?: FirewallNatRuleCollectionTimeouts;
}
export interface FirewallNatRuleCollectionRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/firewall_nat_rule_collection#description FirewallNatRuleCollection#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/firewall_nat_rule_collection#destination_addresses FirewallNatRuleCollection#destination_addresses}
  */
  readonly destinationAddresses: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/firewall_nat_rule_collection#destination_ports FirewallNatRuleCollection#destination_ports}
  */
  readonly destinationPorts: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/firewall_nat_rule_collection#name FirewallNatRuleCollection#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/firewall_nat_rule_collection#protocols FirewallNatRuleCollection#protocols}
  */
  readonly protocols: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/firewall_nat_rule_collection#source_addresses FirewallNatRuleCollection#source_addresses}
  */
  readonly sourceAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/firewall_nat_rule_collection#source_ip_groups FirewallNatRuleCollection#source_ip_groups}
  */
  readonly sourceIpGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/firewall_nat_rule_collection#translated_address FirewallNatRuleCollection#translated_address}
  */
  readonly translatedAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/firewall_nat_rule_collection#translated_port FirewallNatRuleCollection#translated_port}
  */
  readonly translatedPort: string;
}

export function firewallNatRuleCollectionRuleToTerraform(struct?: FirewallNatRuleCollectionRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    destination_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationAddresses),
    destination_ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationPorts),
    name: cdktf.stringToTerraform(struct!.name),
    protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.protocols),
    source_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceAddresses),
    source_ip_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceIpGroups),
    translated_address: cdktf.stringToTerraform(struct!.translatedAddress),
    translated_port: cdktf.stringToTerraform(struct!.translatedPort),
  }
}


export function firewallNatRuleCollectionRuleToHclTerraform(struct?: FirewallNatRuleCollectionRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinationAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    destination_ports: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinationPorts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocols: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.protocols),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_ip_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceIpGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    translated_address: {
      value: cdktf.stringToHclTerraform(struct!.translatedAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    translated_port: {
      value: cdktf.stringToHclTerraform(struct!.translatedPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallNatRuleCollectionRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallNatRuleCollectionRule | cdktf.IResolvable | undefined {
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
    if (this._translatedPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.translatedPort = this._translatedPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallNatRuleCollectionRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._destinationAddresses = undefined;
      this._destinationPorts = undefined;
      this._name = undefined;
      this._protocols = undefined;
      this._sourceAddresses = undefined;
      this._sourceIpGroups = undefined;
      this._translatedAddress = undefined;
      this._translatedPort = undefined;
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
      this._destinationPorts = value.destinationPorts;
      this._name = value.name;
      this._protocols = value.protocols;
      this._sourceAddresses = value.sourceAddresses;
      this._sourceIpGroups = value.sourceIpGroups;
      this._translatedAddress = value.translatedAddress;
      this._translatedPort = value.translatedPort;
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

  // destination_addresses - computed: false, optional: false, required: true
  private _destinationAddresses?: string[]; 
  public get destinationAddresses() {
    return this.getListAttribute('destination_addresses');
  }
  public set destinationAddresses(value: string[]) {
    this._destinationAddresses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAddressesInput() {
    return this._destinationAddresses;
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

  // translated_address - computed: false, optional: false, required: true
  private _translatedAddress?: string; 
  public get translatedAddress() {
    return this.getStringAttribute('translated_address');
  }
  public set translatedAddress(value: string) {
    this._translatedAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get translatedAddressInput() {
    return this._translatedAddress;
  }

  // translated_port - computed: false, optional: false, required: true
  private _translatedPort?: string; 
  public get translatedPort() {
    return this.getStringAttribute('translated_port');
  }
  public set translatedPort(value: string) {
    this._translatedPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get translatedPortInput() {
    return this._translatedPort;
  }
}

export class FirewallNatRuleCollectionRuleList extends cdktf.ComplexList {
  public internalValue? : FirewallNatRuleCollectionRule[] | cdktf.IResolvable

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
  public get(index: number): FirewallNatRuleCollectionRuleOutputReference {
    return new FirewallNatRuleCollectionRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallNatRuleCollectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/firewall_nat_rule_collection#create FirewallNatRuleCollection#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/firewall_nat_rule_collection#delete FirewallNatRuleCollection#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/firewall_nat_rule_collection#read FirewallNatRuleCollection#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/firewall_nat_rule_collection#update FirewallNatRuleCollection#update}
  */
  readonly update?: string;
}

export function firewallNatRuleCollectionTimeoutsToTerraform(struct?: FirewallNatRuleCollectionTimeouts | cdktf.IResolvable): any {
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


export function firewallNatRuleCollectionTimeoutsToHclTerraform(struct?: FirewallNatRuleCollectionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallNatRuleCollectionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FirewallNatRuleCollectionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FirewallNatRuleCollectionTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/firewall_nat_rule_collection azurerm_firewall_nat_rule_collection}
*/
export class FirewallNatRuleCollection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_firewall_nat_rule_collection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallNatRuleCollection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallNatRuleCollection to import
  * @param importFromId The id of the existing FirewallNatRuleCollection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/firewall_nat_rule_collection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallNatRuleCollection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_firewall_nat_rule_collection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/firewall_nat_rule_collection azurerm_firewall_nat_rule_collection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallNatRuleCollectionConfig
  */
  public constructor(scope: Construct, id: string, config: FirewallNatRuleCollectionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_firewall_nat_rule_collection',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.3.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._azureFirewallName = config.azureFirewallName;
    this._id = config.id;
    this._name = config.name;
    this._priority = config.priority;
    this._resourceGroupName = config.resourceGroupName;
    this._rule.internalValue = config.rule;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // azure_firewall_name - computed: false, optional: false, required: true
  private _azureFirewallName?: string; 
  public get azureFirewallName() {
    return this.getStringAttribute('azure_firewall_name');
  }
  public set azureFirewallName(value: string) {
    this._azureFirewallName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azureFirewallNameInput() {
    return this._azureFirewallName;
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
    return this._resourceGroupName;
  }

  // rule - computed: false, optional: false, required: true
  private _rule = new FirewallNatRuleCollectionRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: FirewallNatRuleCollectionRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FirewallNatRuleCollectionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FirewallNatRuleCollectionTimeouts) {
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
      action: cdktf.stringToTerraform(this._action),
      azure_firewall_name: cdktf.stringToTerraform(this._azureFirewallName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      priority: cdktf.numberToTerraform(this._priority),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      rule: cdktf.listMapper(firewallNatRuleCollectionRuleToTerraform, true)(this._rule.internalValue),
      timeouts: firewallNatRuleCollectionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_firewall_name: {
        value: cdktf.stringToHclTerraform(this._azureFirewallName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule: {
        value: cdktf.listMapperHcl(firewallNatRuleCollectionRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FirewallNatRuleCollectionRuleList",
      },
      timeouts: {
        value: firewallNatRuleCollectionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FirewallNatRuleCollectionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
