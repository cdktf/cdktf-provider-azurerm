// https://www.terraform.io/docs/providers/azurerm/r/network_security_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkSecurityGroupConfig extends cdktf.TerraformMetaArguments {
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly securityRule?: NetworkSecurityGroupSecurityRule[];
  readonly tags?: { [key: string]: string };
  /** timeouts block */
  readonly timeouts?: NetworkSecurityGroupTimeouts;
}
export interface NetworkSecurityGroupSecurityRule {
  readonly access?: string;
  readonly description?: string;
  readonly destinationAddressPrefix?: string;
  readonly destinationAddressPrefixes?: string[];
  readonly destinationApplicationSecurityGroupIds?: string[];
  readonly destinationPortRange?: string;
  readonly destinationPortRanges?: string[];
  readonly direction?: string;
  readonly name?: string;
  readonly priority?: number;
  readonly protocol?: string;
  readonly sourceAddressPrefix?: string;
  readonly sourceAddressPrefixes?: string[];
  readonly sourceApplicationSecurityGroupIds?: string[];
  readonly sourcePortRange?: string;
  readonly sourcePortRanges?: string[];
}

function networkSecurityGroupSecurityRuleToTerraform(struct?: NetworkSecurityGroupSecurityRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    access: cdktf.stringToTerraform(struct!.access),
    description: cdktf.stringToTerraform(struct!.description),
    destination_address_prefix: cdktf.stringToTerraform(struct!.destinationAddressPrefix),
    destination_address_prefixes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.destinationAddressPrefixes),
    destination_application_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.destinationApplicationSecurityGroupIds),
    destination_port_range: cdktf.stringToTerraform(struct!.destinationPortRange),
    destination_port_ranges: cdktf.listMapper(cdktf.stringToTerraform)(struct!.destinationPortRanges),
    direction: cdktf.stringToTerraform(struct!.direction),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    source_address_prefix: cdktf.stringToTerraform(struct!.sourceAddressPrefix),
    source_address_prefixes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sourceAddressPrefixes),
    source_application_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sourceApplicationSecurityGroupIds),
    source_port_range: cdktf.stringToTerraform(struct!.sourcePortRange),
    source_port_ranges: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sourcePortRanges),
  }
}

export interface NetworkSecurityGroupTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function networkSecurityGroupTimeoutsToTerraform(struct?: NetworkSecurityGroupTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class NetworkSecurityGroup extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: NetworkSecurityGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_network_security_group',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._securityRule = config.securityRule;
    this._tags = config.tags;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
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

  // security_rule - computed: true, optional: true, required: false
  private _securityRule?: NetworkSecurityGroupSecurityRule[]
  public get securityRule(): NetworkSecurityGroupSecurityRule[] {
    return this.interpolationForAttribute('security_rule') as any; // Getting the computed value is not yet implemented
  }
  public set securityRule(value: NetworkSecurityGroupSecurityRule[]) {
    this._securityRule = value;
  }
  public resetSecurityRule() {
    this._securityRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityRuleInput() {
    return this._securityRule
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: NetworkSecurityGroupTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: NetworkSecurityGroupTimeouts ) {
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
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      security_rule: cdktf.listMapper(networkSecurityGroupSecurityRuleToTerraform)(this._securityRule),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      timeouts: networkSecurityGroupTimeoutsToTerraform(this._timeouts),
    };
  }
}
