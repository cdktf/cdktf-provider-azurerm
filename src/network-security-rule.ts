// https://www.terraform.io/docs/providers/azurerm/r/network_security_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkSecurityRuleConfig extends cdktf.TerraformMetaArguments {
  readonly access: string;
  readonly description?: string;
  readonly destinationAddressPrefix?: string;
  readonly destinationAddressPrefixes?: string[];
  readonly destinationApplicationSecurityGroupIds?: string[];
  readonly destinationPortRange?: string;
  readonly destinationPortRanges?: string[];
  readonly direction: string;
  readonly name: string;
  readonly networkSecurityGroupName: string;
  readonly priority: number;
  readonly protocol: string;
  readonly resourceGroupName: string;
  readonly sourceAddressPrefix?: string;
  readonly sourceAddressPrefixes?: string[];
  readonly sourceApplicationSecurityGroupIds?: string[];
  readonly sourcePortRange?: string;
  readonly sourcePortRanges?: string[];
  /** timeouts block */
  readonly timeouts?: NetworkSecurityRuleTimeouts;
}
export interface NetworkSecurityRuleTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function networkSecurityRuleTimeoutsToTerraform(struct?: NetworkSecurityRuleTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class NetworkSecurityRule extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _access: string;
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
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
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
  private _destinationAddressPrefix?: string;
  public get destinationAddressPrefix() {
    return this.getStringAttribute('destination_address_prefix');
  }
  public set destinationAddressPrefix(value: string ) {
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
  private _destinationAddressPrefixes?: string[];
  public get destinationAddressPrefixes() {
    return this.getListAttribute('destination_address_prefixes');
  }
  public set destinationAddressPrefixes(value: string[] ) {
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
  private _destinationApplicationSecurityGroupIds?: string[];
  public get destinationApplicationSecurityGroupIds() {
    return this.getListAttribute('destination_application_security_group_ids');
  }
  public set destinationApplicationSecurityGroupIds(value: string[] ) {
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
  private _destinationPortRange?: string;
  public get destinationPortRange() {
    return this.getStringAttribute('destination_port_range');
  }
  public set destinationPortRange(value: string ) {
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
  private _destinationPortRanges?: string[];
  public get destinationPortRanges() {
    return this.getListAttribute('destination_port_ranges');
  }
  public set destinationPortRanges(value: string[] ) {
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
  private _direction: string;
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

  // network_security_group_name - computed: false, optional: false, required: true
  private _networkSecurityGroupName: string;
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
  private _priority: number;
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
  private _protocol: string;
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

  // source_address_prefix - computed: false, optional: true, required: false
  private _sourceAddressPrefix?: string;
  public get sourceAddressPrefix() {
    return this.getStringAttribute('source_address_prefix');
  }
  public set sourceAddressPrefix(value: string ) {
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
  private _sourceAddressPrefixes?: string[];
  public get sourceAddressPrefixes() {
    return this.getListAttribute('source_address_prefixes');
  }
  public set sourceAddressPrefixes(value: string[] ) {
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
  private _sourceApplicationSecurityGroupIds?: string[];
  public get sourceApplicationSecurityGroupIds() {
    return this.getListAttribute('source_application_security_group_ids');
  }
  public set sourceApplicationSecurityGroupIds(value: string[] ) {
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
  private _sourcePortRange?: string;
  public get sourcePortRange() {
    return this.getStringAttribute('source_port_range');
  }
  public set sourcePortRange(value: string ) {
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
  private _sourcePortRanges?: string[];
  public get sourcePortRanges() {
    return this.getListAttribute('source_port_ranges');
  }
  public set sourcePortRanges(value: string[] ) {
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
  private _timeouts?: NetworkSecurityRuleTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: NetworkSecurityRuleTimeouts ) {
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
