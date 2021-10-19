// https://www.terraform.io/docs/providers/azurerm/r/network_security_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkSecurityGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_security_group.html#location NetworkSecurityGroup#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_security_group.html#name NetworkSecurityGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_security_group.html#resource_group_name NetworkSecurityGroup#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_security_group.html#security_rule NetworkSecurityGroup#security_rule}
  */
  readonly securityRule?: NetworkSecurityGroupSecurityRule[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_security_group.html#tags NetworkSecurityGroup#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_security_group.html#timeouts NetworkSecurityGroup#timeouts}
  */
  readonly timeouts?: NetworkSecurityGroupTimeouts;
}
export interface NetworkSecurityGroupSecurityRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_security_group.html#access NetworkSecurityGroup#access}
  */
  readonly access?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_security_group.html#description NetworkSecurityGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_security_group.html#destination_address_prefix NetworkSecurityGroup#destination_address_prefix}
  */
  readonly destinationAddressPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_security_group.html#destination_address_prefixes NetworkSecurityGroup#destination_address_prefixes}
  */
  readonly destinationAddressPrefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_security_group.html#destination_application_security_group_ids NetworkSecurityGroup#destination_application_security_group_ids}
  */
  readonly destinationApplicationSecurityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_security_group.html#destination_port_range NetworkSecurityGroup#destination_port_range}
  */
  readonly destinationPortRange?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_security_group.html#destination_port_ranges NetworkSecurityGroup#destination_port_ranges}
  */
  readonly destinationPortRanges?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_security_group.html#direction NetworkSecurityGroup#direction}
  */
  readonly direction?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_security_group.html#name NetworkSecurityGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_security_group.html#priority NetworkSecurityGroup#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_security_group.html#protocol NetworkSecurityGroup#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_security_group.html#source_address_prefix NetworkSecurityGroup#source_address_prefix}
  */
  readonly sourceAddressPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_security_group.html#source_address_prefixes NetworkSecurityGroup#source_address_prefixes}
  */
  readonly sourceAddressPrefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_security_group.html#source_application_security_group_ids NetworkSecurityGroup#source_application_security_group_ids}
  */
  readonly sourceApplicationSecurityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_security_group.html#source_port_range NetworkSecurityGroup#source_port_range}
  */
  readonly sourcePortRange?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_security_group.html#source_port_ranges NetworkSecurityGroup#source_port_ranges}
  */
  readonly sourcePortRanges?: string[];
}

function networkSecurityGroupSecurityRuleToTerraform(struct?: NetworkSecurityGroupSecurityRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: struct!.access === undefined ? null : cdktf.stringToTerraform(struct!.access),
    description: struct!.description === undefined ? null : cdktf.stringToTerraform(struct!.description),
    destination_address_prefix: struct!.destinationAddressPrefix === undefined ? null : cdktf.stringToTerraform(struct!.destinationAddressPrefix),
    destination_address_prefixes: struct!.destinationAddressPrefixes === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct!.destinationAddressPrefixes),
    destination_application_security_group_ids: struct!.destinationApplicationSecurityGroupIds === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct!.destinationApplicationSecurityGroupIds),
    destination_port_range: struct!.destinationPortRange === undefined ? null : cdktf.stringToTerraform(struct!.destinationPortRange),
    destination_port_ranges: struct!.destinationPortRanges === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct!.destinationPortRanges),
    direction: struct!.direction === undefined ? null : cdktf.stringToTerraform(struct!.direction),
    name: struct!.name === undefined ? null : cdktf.stringToTerraform(struct!.name),
    priority: struct!.priority === undefined ? null : cdktf.numberToTerraform(struct!.priority),
    protocol: struct!.protocol === undefined ? null : cdktf.stringToTerraform(struct!.protocol),
    source_address_prefix: struct!.sourceAddressPrefix === undefined ? null : cdktf.stringToTerraform(struct!.sourceAddressPrefix),
    source_address_prefixes: struct!.sourceAddressPrefixes === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct!.sourceAddressPrefixes),
    source_application_security_group_ids: struct!.sourceApplicationSecurityGroupIds === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct!.sourceApplicationSecurityGroupIds),
    source_port_range: struct!.sourcePortRange === undefined ? null : cdktf.stringToTerraform(struct!.sourcePortRange),
    source_port_ranges: struct!.sourcePortRanges === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct!.sourcePortRanges),
  }
}

export interface NetworkSecurityGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_security_group.html#create NetworkSecurityGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_security_group.html#delete NetworkSecurityGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_security_group.html#read NetworkSecurityGroup#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_security_group.html#update NetworkSecurityGroup#update}
  */
  readonly update?: string;
}

function networkSecurityGroupTimeoutsToTerraform(struct?: NetworkSecurityGroupTimeoutsOutputReference | NetworkSecurityGroupTimeouts): any {
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

export class NetworkSecurityGroupTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/network_security_group.html azurerm_network_security_group}
*/
export class NetworkSecurityGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_network_security_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/network_security_group.html azurerm_network_security_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkSecurityGroupConfig
  */
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
  private _location?: string; 
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

  // security_rule - computed: true, optional: true, required: false
  private _securityRule?: NetworkSecurityGroupSecurityRule[] | undefined; 
  public get securityRule() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('security_rule') as any;
  }
  public set securityRule(value: NetworkSecurityGroupSecurityRule[] | undefined) {
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
  private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
  private _timeouts?: NetworkSecurityGroupTimeouts | undefined; 
  private __timeoutsOutput = new NetworkSecurityGroupTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: NetworkSecurityGroupTimeouts | undefined) {
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
