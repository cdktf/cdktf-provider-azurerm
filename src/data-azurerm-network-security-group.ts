// https://www.terraform.io/docs/providers/azurerm/d/network_security_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermNetworkSecurityGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/network_security_group.html#name DataAzurermNetworkSecurityGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/network_security_group.html#resource_group_name DataAzurermNetworkSecurityGroup#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/network_security_group.html#timeouts DataAzurermNetworkSecurityGroup#timeouts}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/network_security_group.html#read DataAzurermNetworkSecurityGroup#read}
  */
  readonly read?: string;
}

function dataAzurermNetworkSecurityGroupTimeoutsToTerraform(struct?: DataAzurermNetworkSecurityGroupTimeoutsOutputReference | DataAzurermNetworkSecurityGroupTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermNetworkSecurityGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/network_security_group.html azurerm_network_security_group}
*/
export class DataAzurermNetworkSecurityGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_network_security_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/network_security_group.html azurerm_network_security_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermNetworkSecurityGroupConfig
  */
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

  // security_rule - computed: true, optional: false, required: false
  public securityRule(index: string) {
    return new DataAzurermNetworkSecurityGroupSecurityRule(this, 'security_rule', index);
  }

  // tags - computed: true, optional: false, required: false
  public tags(key: string): string {
    return new cdktf.StringMap(this, 'tags').lookup(key);
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermNetworkSecurityGroupTimeouts | undefined; 
  private __timeoutsOutput = new DataAzurermNetworkSecurityGroupTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataAzurermNetworkSecurityGroupTimeouts | undefined) {
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
