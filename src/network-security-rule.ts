// https://www.terraform.io/docs/providers/azurerm/r/network_security_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkSecurityRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_security_rule.html#access NetworkSecurityRule#access}
  */
  readonly access: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_security_rule.html#description NetworkSecurityRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_security_rule.html#destination_address_prefix NetworkSecurityRule#destination_address_prefix}
  */
  readonly destinationAddressPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_security_rule.html#destination_address_prefixes NetworkSecurityRule#destination_address_prefixes}
  */
  readonly destinationAddressPrefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_security_rule.html#destination_application_security_group_ids NetworkSecurityRule#destination_application_security_group_ids}
  */
  readonly destinationApplicationSecurityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_security_rule.html#destination_port_range NetworkSecurityRule#destination_port_range}
  */
  readonly destinationPortRange?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_security_rule.html#destination_port_ranges NetworkSecurityRule#destination_port_ranges}
  */
  readonly destinationPortRanges?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_security_rule.html#direction NetworkSecurityRule#direction}
  */
  readonly direction: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_security_rule.html#name NetworkSecurityRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_security_rule.html#network_security_group_name NetworkSecurityRule#network_security_group_name}
  */
  readonly networkSecurityGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_security_rule.html#priority NetworkSecurityRule#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_security_rule.html#protocol NetworkSecurityRule#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_security_rule.html#resource_group_name NetworkSecurityRule#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_security_rule.html#source_address_prefix NetworkSecurityRule#source_address_prefix}
  */
  readonly sourceAddressPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_security_rule.html#source_address_prefixes NetworkSecurityRule#source_address_prefixes}
  */
  readonly sourceAddressPrefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_security_rule.html#source_application_security_group_ids NetworkSecurityRule#source_application_security_group_ids}
  */
  readonly sourceApplicationSecurityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_security_rule.html#source_port_range NetworkSecurityRule#source_port_range}
  */
  readonly sourcePortRange?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_security_rule.html#source_port_ranges NetworkSecurityRule#source_port_ranges}
  */
  readonly sourcePortRanges?: string[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_security_rule.html#timeouts NetworkSecurityRule#timeouts}
  */
  readonly timeouts?: NetworkSecurityRuleTimeouts;
}
export interface NetworkSecurityRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_security_rule.html#create NetworkSecurityRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_security_rule.html#delete NetworkSecurityRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_security_rule.html#read NetworkSecurityRule#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_security_rule.html#update NetworkSecurityRule#update}
  */
  readonly update?: string;
}

function networkSecurityRuleTimeoutsToTerraform(struct?: NetworkSecurityRuleTimeoutsOutputReference | NetworkSecurityRuleTimeouts): any {
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

export class NetworkSecurityRuleTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/network_security_rule.html azurerm_network_security_rule}
*/
export class NetworkSecurityRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_network_security_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/network_security_rule.html azurerm_network_security_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkSecurityRuleConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkSecurityRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_network_security_rule',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._access = config.access;
    this._description = config.description;
    this._destinationAddressPrefix = config.destinationAddressPrefix;
    this._destinationAddressPrefixes = config.destinationAddressPrefixes;
    this._destinationApplicationSecurityGroupIds = config.destinationApplicationSecurityGroupIds;
    this._destinationPortRange = config.destinationPortRange;
    this._destinationPortRanges = config.destinationPortRanges;
    this._direction = config.direction;
    this._name = config.name;
    this._networkSecurityGroupName = config.networkSecurityGroupName;
    this._priority = config.priority;
    this._protocol = config.protocol;
    this._resourceGroupName = config.resourceGroupName;
    this._sourceAddressPrefix = config.sourceAddressPrefix;
    this._sourceAddressPrefixes = config.sourceAddressPrefixes;
    this._sourceApplicationSecurityGroupIds = config.sourceApplicationSecurityGroupIds;
    this._sourcePortRange = config.sourcePortRange;
    this._sourcePortRanges = config.sourcePortRanges;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access - computed: false, optional: false, required: true
  private _access?: string; 
  public get access() {
    return this.getStringAttribute('access');
  }
  public set access(value: string) {
    this._access = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access
  }

  // description - computed: false, optional: true, required: false
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // destination_address_prefix - computed: false, optional: true, required: false
  private _destinationAddressPrefix?: string | undefined; 
  public get destinationAddressPrefix() {
    return this.getStringAttribute('destination_address_prefix');
  }
  public set destinationAddressPrefix(value: string | undefined) {
    this._destinationAddressPrefix = value;
  }
  public resetDestinationAddressPrefix() {
    this._destinationAddressPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAddressPrefixInput() {
    return this._destinationAddressPrefix
  }

  // destination_address_prefixes - computed: false, optional: true, required: false
  private _destinationAddressPrefixes?: string[] | undefined; 
  public get destinationAddressPrefixes() {
    return this.getListAttribute('destination_address_prefixes');
  }
  public set destinationAddressPrefixes(value: string[] | undefined) {
    this._destinationAddressPrefixes = value;
  }
  public resetDestinationAddressPrefixes() {
    this._destinationAddressPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAddressPrefixesInput() {
    return this._destinationAddressPrefixes
  }

  // destination_application_security_group_ids - computed: false, optional: true, required: false
  private _destinationApplicationSecurityGroupIds?: string[] | undefined; 
  public get destinationApplicationSecurityGroupIds() {
    return this.getListAttribute('destination_application_security_group_ids');
  }
  public set destinationApplicationSecurityGroupIds(value: string[] | undefined) {
    this._destinationApplicationSecurityGroupIds = value;
  }
  public resetDestinationApplicationSecurityGroupIds() {
    this._destinationApplicationSecurityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationApplicationSecurityGroupIdsInput() {
    return this._destinationApplicationSecurityGroupIds
  }

  // destination_port_range - computed: false, optional: true, required: false
  private _destinationPortRange?: string | undefined; 
  public get destinationPortRange() {
    return this.getStringAttribute('destination_port_range');
  }
  public set destinationPortRange(value: string | undefined) {
    this._destinationPortRange = value;
  }
  public resetDestinationPortRange() {
    this._destinationPortRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortRangeInput() {
    return this._destinationPortRange
  }

  // destination_port_ranges - computed: false, optional: true, required: false
  private _destinationPortRanges?: string[] | undefined; 
  public get destinationPortRanges() {
    return this.getListAttribute('destination_port_ranges');
  }
  public set destinationPortRanges(value: string[] | undefined) {
    this._destinationPortRanges = value;
  }
  public resetDestinationPortRanges() {
    this._destinationPortRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortRangesInput() {
    return this._destinationPortRanges
  }

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction
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

  // network_security_group_name - computed: false, optional: false, required: true
  private _networkSecurityGroupName?: string; 
  public get networkSecurityGroupName() {
    return this.getStringAttribute('network_security_group_name');
  }
  public set networkSecurityGroupName(value: string) {
    this._networkSecurityGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSecurityGroupNameInput() {
    return this._networkSecurityGroupName
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

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol
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

  // source_address_prefix - computed: false, optional: true, required: false
  private _sourceAddressPrefix?: string | undefined; 
  public get sourceAddressPrefix() {
    return this.getStringAttribute('source_address_prefix');
  }
  public set sourceAddressPrefix(value: string | undefined) {
    this._sourceAddressPrefix = value;
  }
  public resetSourceAddressPrefix() {
    this._sourceAddressPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressPrefixInput() {
    return this._sourceAddressPrefix
  }

  // source_address_prefixes - computed: false, optional: true, required: false
  private _sourceAddressPrefixes?: string[] | undefined; 
  public get sourceAddressPrefixes() {
    return this.getListAttribute('source_address_prefixes');
  }
  public set sourceAddressPrefixes(value: string[] | undefined) {
    this._sourceAddressPrefixes = value;
  }
  public resetSourceAddressPrefixes() {
    this._sourceAddressPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressPrefixesInput() {
    return this._sourceAddressPrefixes
  }

  // source_application_security_group_ids - computed: false, optional: true, required: false
  private _sourceApplicationSecurityGroupIds?: string[] | undefined; 
  public get sourceApplicationSecurityGroupIds() {
    return this.getListAttribute('source_application_security_group_ids');
  }
  public set sourceApplicationSecurityGroupIds(value: string[] | undefined) {
    this._sourceApplicationSecurityGroupIds = value;
  }
  public resetSourceApplicationSecurityGroupIds() {
    this._sourceApplicationSecurityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceApplicationSecurityGroupIdsInput() {
    return this._sourceApplicationSecurityGroupIds
  }

  // source_port_range - computed: false, optional: true, required: false
  private _sourcePortRange?: string | undefined; 
  public get sourcePortRange() {
    return this.getStringAttribute('source_port_range');
  }
  public set sourcePortRange(value: string | undefined) {
    this._sourcePortRange = value;
  }
  public resetSourcePortRange() {
    this._sourcePortRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortRangeInput() {
    return this._sourcePortRange
  }

  // source_port_ranges - computed: false, optional: true, required: false
  private _sourcePortRanges?: string[] | undefined; 
  public get sourcePortRanges() {
    return this.getListAttribute('source_port_ranges');
  }
  public set sourcePortRanges(value: string[] | undefined) {
    this._sourcePortRanges = value;
  }
  public resetSourcePortRanges() {
    this._sourcePortRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortRangesInput() {
    return this._sourcePortRanges
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: NetworkSecurityRuleTimeouts | undefined; 
  private __timeoutsOutput = new NetworkSecurityRuleTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: NetworkSecurityRuleTimeouts | undefined) {
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
      access: cdktf.stringToTerraform(this._access),
      description: cdktf.stringToTerraform(this._description),
      destination_address_prefix: cdktf.stringToTerraform(this._destinationAddressPrefix),
      destination_address_prefixes: cdktf.listMapper(cdktf.stringToTerraform)(this._destinationAddressPrefixes),
      destination_application_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._destinationApplicationSecurityGroupIds),
      destination_port_range: cdktf.stringToTerraform(this._destinationPortRange),
      destination_port_ranges: cdktf.listMapper(cdktf.stringToTerraform)(this._destinationPortRanges),
      direction: cdktf.stringToTerraform(this._direction),
      name: cdktf.stringToTerraform(this._name),
      network_security_group_name: cdktf.stringToTerraform(this._networkSecurityGroupName),
      priority: cdktf.numberToTerraform(this._priority),
      protocol: cdktf.stringToTerraform(this._protocol),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      source_address_prefix: cdktf.stringToTerraform(this._sourceAddressPrefix),
      source_address_prefixes: cdktf.listMapper(cdktf.stringToTerraform)(this._sourceAddressPrefixes),
      source_application_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._sourceApplicationSecurityGroupIds),
      source_port_range: cdktf.stringToTerraform(this._sourcePortRange),
      source_port_ranges: cdktf.listMapper(cdktf.stringToTerraform)(this._sourcePortRanges),
      timeouts: networkSecurityRuleTimeoutsToTerraform(this._timeouts),
    };
  }
}
