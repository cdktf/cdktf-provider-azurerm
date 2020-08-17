// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_network_security_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";
import { StringMap } from "cdktf";

// Configuration

export interface DataAzurermNetworkSecurityGroupConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermNetworkSecurityGroupTimeouts;
}
export class DataAzurermNetworkSecurityGroupSecurityRule extends ComplexComputedList {

  // access - computed: true, optional: false, required: true
  public get access() {
    return this.getStringAttribute('access');
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // destination_address_prefix - computed: true, optional: false, required: true
  public get destinationAddressPrefix() {
    return this.getStringAttribute('destination_address_prefix');
  }

  // destination_address_prefixes - computed: true, optional: false, required: true
  public get destinationAddressPrefixes() {
    return this.getListAttribute('destination_address_prefixes');
  }

  // destination_application_security_group_ids - computed: true, optional: false, required: true
  public get destinationApplicationSecurityGroupIds() {
    return this.getListAttribute('destination_application_security_group_ids');
  }

  // destination_port_range - computed: true, optional: false, required: true
  public get destinationPortRange() {
    return this.getStringAttribute('destination_port_range');
  }

  // destination_port_ranges - computed: true, optional: false, required: true
  public get destinationPortRanges() {
    return this.getListAttribute('destination_port_ranges');
  }

  // direction - computed: true, optional: false, required: true
  public get direction() {
    return this.getStringAttribute('direction');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // priority - computed: true, optional: false, required: true
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // protocol - computed: true, optional: false, required: true
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // source_address_prefix - computed: true, optional: false, required: true
  public get sourceAddressPrefix() {
    return this.getStringAttribute('source_address_prefix');
  }

  // source_address_prefixes - computed: true, optional: false, required: true
  public get sourceAddressPrefixes() {
    return this.getListAttribute('source_address_prefixes');
  }

  // source_application_security_group_ids - computed: true, optional: false, required: true
  public get sourceApplicationSecurityGroupIds() {
    return this.getListAttribute('source_application_security_group_ids');
  }

  // source_port_range - computed: true, optional: false, required: true
  public get sourcePortRange() {
    return this.getStringAttribute('source_port_range');
  }

  // source_port_ranges - computed: true, optional: false, required: true
  public get sourcePortRanges() {
    return this.getListAttribute('source_port_ranges');
  }
}
export interface DataAzurermNetworkSecurityGroupTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermNetworkSecurityGroup extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermNetworkSecurityGroupConfig) {
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
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
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

  // location - computed: true, optional: false, required: true
  public get location() {
    return this.getStringAttribute('location');
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

  // security_rule - computed: true, optional: false, required: true
  public securityRule(index: string) {
    return new DataAzurermNetworkSecurityGroupSecurityRule(this, 'security_rule', index);
  }

  // tags - computed: true, optional: false, required: true
  public tags(key: string): string {
    return new StringMap(this, 'tags').lookup(key);
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermNetworkSecurityGroupTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermNetworkSecurityGroupTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
