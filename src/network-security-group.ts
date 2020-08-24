// https://www.terraform.io/docs/providers/azurerm/r/network_security_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface NetworkSecurityGroupConfig extends TerraformMetaArguments {
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
export interface NetworkSecurityGroupTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class NetworkSecurityGroup extends TerraformResource {

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
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this._location;
  }
  public set location(value: string) {
    this._location = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // security_rule - computed: true, optional: true, required: false
  private _securityRule?: NetworkSecurityGroupSecurityRule[]
  public get securityRule(): NetworkSecurityGroupSecurityRule[] | undefined {
    return this._securityRule; // Getting the computed value is not yet implemented
  }
  public set securityRule(value: NetworkSecurityGroupSecurityRule[] | undefined) {
    this._securityRule = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: NetworkSecurityGroupTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: NetworkSecurityGroupTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      location: this._location,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      security_rule: this._securityRule,
      tags: this._tags,
      timeouts: this._timeouts,
    };
  }
}
