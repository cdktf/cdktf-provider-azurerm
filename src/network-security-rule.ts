// https://www.terraform.io/docs/providers/azurerm/r/network_security_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface NetworkSecurityRuleConfig extends TerraformMetaArguments {
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

// Resource

export class NetworkSecurityRule extends TerraformResource {

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
    return this._access;
  }
  public set access(value: string) {
    this._access = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // destination_address_prefix - computed: false, optional: true, required: false
  private _destinationAddressPrefix?: string;
  public get destinationAddressPrefix() {
    return this._destinationAddressPrefix;
  }
  public set destinationAddressPrefix(value: string | undefined) {
    this._destinationAddressPrefix = value;
  }

  // destination_address_prefixes - computed: false, optional: true, required: false
  private _destinationAddressPrefixes?: string[];
  public get destinationAddressPrefixes() {
    return this._destinationAddressPrefixes;
  }
  public set destinationAddressPrefixes(value: string[] | undefined) {
    this._destinationAddressPrefixes = value;
  }

  // destination_application_security_group_ids - computed: false, optional: true, required: false
  private _destinationApplicationSecurityGroupIds?: string[];
  public get destinationApplicationSecurityGroupIds() {
    return this._destinationApplicationSecurityGroupIds;
  }
  public set destinationApplicationSecurityGroupIds(value: string[] | undefined) {
    this._destinationApplicationSecurityGroupIds = value;
  }

  // destination_port_range - computed: false, optional: true, required: false
  private _destinationPortRange?: string;
  public get destinationPortRange() {
    return this._destinationPortRange;
  }
  public set destinationPortRange(value: string | undefined) {
    this._destinationPortRange = value;
  }

  // destination_port_ranges - computed: false, optional: true, required: false
  private _destinationPortRanges?: string[];
  public get destinationPortRanges() {
    return this._destinationPortRanges;
  }
  public set destinationPortRanges(value: string[] | undefined) {
    this._destinationPortRanges = value;
  }

  // direction - computed: false, optional: false, required: true
  private _direction: string;
  public get direction() {
    return this._direction;
  }
  public set direction(value: string) {
    this._direction = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // network_security_group_name - computed: false, optional: false, required: true
  private _networkSecurityGroupName: string;
  public get networkSecurityGroupName() {
    return this._networkSecurityGroupName;
  }
  public set networkSecurityGroupName(value: string) {
    this._networkSecurityGroupName = value;
  }

  // priority - computed: false, optional: false, required: true
  private _priority: number;
  public get priority() {
    return this._priority;
  }
  public set priority(value: number) {
    this._priority = value;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol: string;
  public get protocol() {
    return this._protocol;
  }
  public set protocol(value: string) {
    this._protocol = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // source_address_prefix - computed: false, optional: true, required: false
  private _sourceAddressPrefix?: string;
  public get sourceAddressPrefix() {
    return this._sourceAddressPrefix;
  }
  public set sourceAddressPrefix(value: string | undefined) {
    this._sourceAddressPrefix = value;
  }

  // source_address_prefixes - computed: false, optional: true, required: false
  private _sourceAddressPrefixes?: string[];
  public get sourceAddressPrefixes() {
    return this._sourceAddressPrefixes;
  }
  public set sourceAddressPrefixes(value: string[] | undefined) {
    this._sourceAddressPrefixes = value;
  }

  // source_application_security_group_ids - computed: false, optional: true, required: false
  private _sourceApplicationSecurityGroupIds?: string[];
  public get sourceApplicationSecurityGroupIds() {
    return this._sourceApplicationSecurityGroupIds;
  }
  public set sourceApplicationSecurityGroupIds(value: string[] | undefined) {
    this._sourceApplicationSecurityGroupIds = value;
  }

  // source_port_range - computed: false, optional: true, required: false
  private _sourcePortRange?: string;
  public get sourcePortRange() {
    return this._sourcePortRange;
  }
  public set sourcePortRange(value: string | undefined) {
    this._sourcePortRange = value;
  }

  // source_port_ranges - computed: false, optional: true, required: false
  private _sourcePortRanges?: string[];
  public get sourcePortRanges() {
    return this._sourcePortRanges;
  }
  public set sourcePortRanges(value: string[] | undefined) {
    this._sourcePortRanges = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: NetworkSecurityRuleTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: NetworkSecurityRuleTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access: this._access,
      description: this._description,
      destination_address_prefix: this._destinationAddressPrefix,
      destination_address_prefixes: this._destinationAddressPrefixes,
      destination_application_security_group_ids: this._destinationApplicationSecurityGroupIds,
      destination_port_range: this._destinationPortRange,
      destination_port_ranges: this._destinationPortRanges,
      direction: this._direction,
      name: this._name,
      network_security_group_name: this._networkSecurityGroupName,
      priority: this._priority,
      protocol: this._protocol,
      resource_group_name: this._resourceGroupName,
      source_address_prefix: this._sourceAddressPrefix,
      source_address_prefixes: this._sourceAddressPrefixes,
      source_application_security_group_ids: this._sourceApplicationSecurityGroupIds,
      source_port_range: this._sourcePortRange,
      source_port_ranges: this._sourcePortRanges,
      timeouts: this._timeouts,
    };
  }
}
