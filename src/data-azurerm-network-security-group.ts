// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_network_security_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermNetworkSecurityGroupConfig extends cdktf.TerraformMetaArguments {
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermNetworkSecurityGroupTimeouts;
}
export class DataAzurermNetworkSecurityGroupSecurityRule extends cdktf.ComplexComputedList {

  // access - computed: true, optional: false, required: false
  public get access() {
    return this.getStringAttribute('access');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // destination_address_prefix - computed: true, optional: false, required: false
  public get destinationAddressPrefix() {
    return this.getStringAttribute('destination_address_prefix');
  }

  // destination_address_prefixes - computed: true, optional: false, required: false
  public get destinationAddressPrefixes() {
    return this.getListAttribute('destination_address_prefixes');
  }

  // destination_application_security_group_ids - computed: true, optional: false, required: false
  public get destinationApplicationSecurityGroupIds() {
    return this.getListAttribute('destination_application_security_group_ids');
  }

  // destination_port_range - computed: true, optional: false, required: false
  public get destinationPortRange() {
    return this.getStringAttribute('destination_port_range');
  }

  // destination_port_ranges - computed: true, optional: false, required: false
  public get destinationPortRanges() {
    return this.getListAttribute('destination_port_ranges');
  }

  // direction - computed: true, optional: false, required: false
  public get direction() {
    return this.getStringAttribute('direction');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // source_address_prefix - computed: true, optional: false, required: false
  public get sourceAddressPrefix() {
    return this.getStringAttribute('source_address_prefix');
  }

  // source_address_prefixes - computed: true, optional: false, required: false
  public get sourceAddressPrefixes() {
    return this.getListAttribute('source_address_prefixes');
  }

  // source_application_security_group_ids - computed: true, optional: false, required: false
  public get sourceApplicationSecurityGroupIds() {
    return this.getListAttribute('source_application_security_group_ids');
  }

  // source_port_range - computed: true, optional: false, required: false
  public get sourcePortRange() {
    return this.getStringAttribute('source_port_range');
  }

  // source_port_ranges - computed: true, optional: false, required: false
  public get sourcePortRanges() {
    return this.getListAttribute('source_port_ranges');
  }
}
export interface DataAzurermNetworkSecurityGroupTimeouts {
  readonly read?: string;
}

function dataAzurermNetworkSecurityGroupTimeoutsToTerraform(struct?: DataAzurermNetworkSecurityGroupTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


// Resource

export class DataAzurermNetworkSecurityGroup extends cdktf.TerraformDataSource {

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
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
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

  // security_rule - computed: true, optional: false, required: false
  public securityRule(index: string) {
    return new DataAzurermNetworkSecurityGroupSecurityRule(this, 'security_rule', index);
  }

  // tags - computed: true, optional: false, required: false
  public tags(key: string): string {
    return new cdktf.StringMap(this, 'tags').lookup(key);
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermNetworkSecurityGroupTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermNetworkSecurityGroupTimeouts ) {
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
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: dataAzurermNetworkSecurityGroupTimeoutsToTerraform(this._timeouts),
    };
  }
}
