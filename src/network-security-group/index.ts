// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_security_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkSecurityGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_security_group#id NetworkSecurityGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_security_group#location NetworkSecurityGroup#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_security_group#name NetworkSecurityGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_security_group#resource_group_name NetworkSecurityGroup#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_security_group#security_rule NetworkSecurityGroup#security_rule}
  */
  readonly securityRule?: NetworkSecurityGroupSecurityRule[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_security_group#tags NetworkSecurityGroup#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_security_group#timeouts NetworkSecurityGroup#timeouts}
  */
  readonly timeouts?: NetworkSecurityGroupTimeouts;
}
export interface NetworkSecurityGroupSecurityRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_security_group#access NetworkSecurityGroup#access}
  */
  readonly access?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_security_group#description NetworkSecurityGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_security_group#destination_address_prefix NetworkSecurityGroup#destination_address_prefix}
  */
  readonly destinationAddressPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_security_group#destination_address_prefixes NetworkSecurityGroup#destination_address_prefixes}
  */
  readonly destinationAddressPrefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_security_group#destination_application_security_group_ids NetworkSecurityGroup#destination_application_security_group_ids}
  */
  readonly destinationApplicationSecurityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_security_group#destination_port_range NetworkSecurityGroup#destination_port_range}
  */
  readonly destinationPortRange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_security_group#destination_port_ranges NetworkSecurityGroup#destination_port_ranges}
  */
  readonly destinationPortRanges?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_security_group#direction NetworkSecurityGroup#direction}
  */
  readonly direction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_security_group#name NetworkSecurityGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_security_group#priority NetworkSecurityGroup#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_security_group#protocol NetworkSecurityGroup#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_security_group#source_address_prefix NetworkSecurityGroup#source_address_prefix}
  */
  readonly sourceAddressPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_security_group#source_address_prefixes NetworkSecurityGroup#source_address_prefixes}
  */
  readonly sourceAddressPrefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_security_group#source_application_security_group_ids NetworkSecurityGroup#source_application_security_group_ids}
  */
  readonly sourceApplicationSecurityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_security_group#source_port_range NetworkSecurityGroup#source_port_range}
  */
  readonly sourcePortRange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_security_group#source_port_ranges NetworkSecurityGroup#source_port_ranges}
  */
  readonly sourcePortRanges?: string[];
}

export function networkSecurityGroupSecurityRuleToTerraform(struct?: NetworkSecurityGroupSecurityRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: struct!.access === undefined ? null : cdktf.stringToTerraform(struct!.access),
    description: struct!.description === undefined ? null : cdktf.stringToTerraform(struct!.description),
    destination_address_prefix: struct!.destinationAddressPrefix === undefined ? null : cdktf.stringToTerraform(struct!.destinationAddressPrefix),
    destination_address_prefixes: struct!.destinationAddressPrefixes === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationAddressPrefixes),
    destination_application_security_group_ids: struct!.destinationApplicationSecurityGroupIds === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationApplicationSecurityGroupIds),
    destination_port_range: struct!.destinationPortRange === undefined ? null : cdktf.stringToTerraform(struct!.destinationPortRange),
    destination_port_ranges: struct!.destinationPortRanges === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationPortRanges),
    direction: struct!.direction === undefined ? null : cdktf.stringToTerraform(struct!.direction),
    name: struct!.name === undefined ? null : cdktf.stringToTerraform(struct!.name),
    priority: struct!.priority === undefined ? null : cdktf.numberToTerraform(struct!.priority),
    protocol: struct!.protocol === undefined ? null : cdktf.stringToTerraform(struct!.protocol),
    source_address_prefix: struct!.sourceAddressPrefix === undefined ? null : cdktf.stringToTerraform(struct!.sourceAddressPrefix),
    source_address_prefixes: struct!.sourceAddressPrefixes === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceAddressPrefixes),
    source_application_security_group_ids: struct!.sourceApplicationSecurityGroupIds === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceApplicationSecurityGroupIds),
    source_port_range: struct!.sourcePortRange === undefined ? null : cdktf.stringToTerraform(struct!.sourcePortRange),
    source_port_ranges: struct!.sourcePortRanges === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourcePortRanges),
  }
}


export function networkSecurityGroupSecurityRuleToHclTerraform(struct?: NetworkSecurityGroupSecurityRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access: {
      value: struct!.access === undefined ? null : cdktf.stringToHclTerraform(struct!.access),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: struct!.description === undefined ? null : cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_address_prefix: {
      value: struct!.destinationAddressPrefix === undefined ? null : cdktf.stringToHclTerraform(struct!.destinationAddressPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_address_prefixes: {
      value: struct!.destinationAddressPrefixes === undefined ? null : cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinationAddressPrefixes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    destination_application_security_group_ids: {
      value: struct!.destinationApplicationSecurityGroupIds === undefined ? null : cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinationApplicationSecurityGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    destination_port_range: {
      value: struct!.destinationPortRange === undefined ? null : cdktf.stringToHclTerraform(struct!.destinationPortRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_port_ranges: {
      value: struct!.destinationPortRanges === undefined ? null : cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinationPortRanges),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    direction: {
      value: struct!.direction === undefined ? null : cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: struct!.name === undefined ? null : cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: struct!.priority === undefined ? null : cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: struct!.protocol === undefined ? null : cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_address_prefix: {
      value: struct!.sourceAddressPrefix === undefined ? null : cdktf.stringToHclTerraform(struct!.sourceAddressPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_address_prefixes: {
      value: struct!.sourceAddressPrefixes === undefined ? null : cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceAddressPrefixes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    source_application_security_group_ids: {
      value: struct!.sourceApplicationSecurityGroupIds === undefined ? null : cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceApplicationSecurityGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    source_port_range: {
      value: struct!.sourcePortRange === undefined ? null : cdktf.stringToHclTerraform(struct!.sourcePortRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_port_ranges: {
      value: struct!.sourcePortRanges === undefined ? null : cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourcePortRanges),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityGroupSecurityRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSecurityGroupSecurityRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._access !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._destinationAddressPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationAddressPrefix = this._destinationAddressPrefix;
    }
    if (this._destinationAddressPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationAddressPrefixes = this._destinationAddressPrefixes;
    }
    if (this._destinationApplicationSecurityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationApplicationSecurityGroupIds = this._destinationApplicationSecurityGroupIds;
    }
    if (this._destinationPortRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPortRange = this._destinationPortRange;
    }
    if (this._destinationPortRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPortRanges = this._destinationPortRanges;
    }
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._sourceAddressPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddressPrefix = this._sourceAddressPrefix;
    }
    if (this._sourceAddressPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddressPrefixes = this._sourceAddressPrefixes;
    }
    if (this._sourceApplicationSecurityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceApplicationSecurityGroupIds = this._sourceApplicationSecurityGroupIds;
    }
    if (this._sourcePortRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePortRange = this._sourcePortRange;
    }
    if (this._sourcePortRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePortRanges = this._sourcePortRanges;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityGroupSecurityRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._access = undefined;
      this._description = undefined;
      this._destinationAddressPrefix = undefined;
      this._destinationAddressPrefixes = undefined;
      this._destinationApplicationSecurityGroupIds = undefined;
      this._destinationPortRange = undefined;
      this._destinationPortRanges = undefined;
      this._direction = undefined;
      this._name = undefined;
      this._priority = undefined;
      this._protocol = undefined;
      this._sourceAddressPrefix = undefined;
      this._sourceAddressPrefixes = undefined;
      this._sourceApplicationSecurityGroupIds = undefined;
      this._sourcePortRange = undefined;
      this._sourcePortRanges = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._access = value.access;
      this._description = value.description;
      this._destinationAddressPrefix = value.destinationAddressPrefix;
      this._destinationAddressPrefixes = value.destinationAddressPrefixes;
      this._destinationApplicationSecurityGroupIds = value.destinationApplicationSecurityGroupIds;
      this._destinationPortRange = value.destinationPortRange;
      this._destinationPortRanges = value.destinationPortRanges;
      this._direction = value.direction;
      this._name = value.name;
      this._priority = value.priority;
      this._protocol = value.protocol;
      this._sourceAddressPrefix = value.sourceAddressPrefix;
      this._sourceAddressPrefixes = value.sourceAddressPrefixes;
      this._sourceApplicationSecurityGroupIds = value.sourceApplicationSecurityGroupIds;
      this._sourcePortRange = value.sourcePortRange;
      this._sourcePortRanges = value.sourcePortRanges;
    }
  }

  // access - computed: true, optional: true, required: false
  private _access?: string; 
  public get access() {
    return this.getStringAttribute('access');
  }
  public set access(value: string) {
    this._access = value;
  }
  public resetAccess() {
    this._access = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }

  // description - computed: true, optional: true, required: false
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

  // destination_address_prefix - computed: true, optional: true, required: false
  private _destinationAddressPrefix?: string; 
  public get destinationAddressPrefix() {
    return this.getStringAttribute('destination_address_prefix');
  }
  public set destinationAddressPrefix(value: string) {
    this._destinationAddressPrefix = value;
  }
  public resetDestinationAddressPrefix() {
    this._destinationAddressPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAddressPrefixInput() {
    return this._destinationAddressPrefix;
  }

  // destination_address_prefixes - computed: true, optional: true, required: false
  private _destinationAddressPrefixes?: string[]; 
  public get destinationAddressPrefixes() {
    return cdktf.Fn.tolist(this.getListAttribute('destination_address_prefixes'));
  }
  public set destinationAddressPrefixes(value: string[]) {
    this._destinationAddressPrefixes = value;
  }
  public resetDestinationAddressPrefixes() {
    this._destinationAddressPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAddressPrefixesInput() {
    return this._destinationAddressPrefixes;
  }

  // destination_application_security_group_ids - computed: true, optional: true, required: false
  private _destinationApplicationSecurityGroupIds?: string[]; 
  public get destinationApplicationSecurityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('destination_application_security_group_ids'));
  }
  public set destinationApplicationSecurityGroupIds(value: string[]) {
    this._destinationApplicationSecurityGroupIds = value;
  }
  public resetDestinationApplicationSecurityGroupIds() {
    this._destinationApplicationSecurityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationApplicationSecurityGroupIdsInput() {
    return this._destinationApplicationSecurityGroupIds;
  }

  // destination_port_range - computed: true, optional: true, required: false
  private _destinationPortRange?: string; 
  public get destinationPortRange() {
    return this.getStringAttribute('destination_port_range');
  }
  public set destinationPortRange(value: string) {
    this._destinationPortRange = value;
  }
  public resetDestinationPortRange() {
    this._destinationPortRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortRangeInput() {
    return this._destinationPortRange;
  }

  // destination_port_ranges - computed: true, optional: true, required: false
  private _destinationPortRanges?: string[]; 
  public get destinationPortRanges() {
    return cdktf.Fn.tolist(this.getListAttribute('destination_port_ranges'));
  }
  public set destinationPortRanges(value: string[]) {
    this._destinationPortRanges = value;
  }
  public resetDestinationPortRanges() {
    this._destinationPortRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortRangesInput() {
    return this._destinationPortRanges;
  }

  // direction - computed: true, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // source_address_prefix - computed: true, optional: true, required: false
  private _sourceAddressPrefix?: string; 
  public get sourceAddressPrefix() {
    return this.getStringAttribute('source_address_prefix');
  }
  public set sourceAddressPrefix(value: string) {
    this._sourceAddressPrefix = value;
  }
  public resetSourceAddressPrefix() {
    this._sourceAddressPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressPrefixInput() {
    return this._sourceAddressPrefix;
  }

  // source_address_prefixes - computed: true, optional: true, required: false
  private _sourceAddressPrefixes?: string[]; 
  public get sourceAddressPrefixes() {
    return cdktf.Fn.tolist(this.getListAttribute('source_address_prefixes'));
  }
  public set sourceAddressPrefixes(value: string[]) {
    this._sourceAddressPrefixes = value;
  }
  public resetSourceAddressPrefixes() {
    this._sourceAddressPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressPrefixesInput() {
    return this._sourceAddressPrefixes;
  }

  // source_application_security_group_ids - computed: true, optional: true, required: false
  private _sourceApplicationSecurityGroupIds?: string[]; 
  public get sourceApplicationSecurityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('source_application_security_group_ids'));
  }
  public set sourceApplicationSecurityGroupIds(value: string[]) {
    this._sourceApplicationSecurityGroupIds = value;
  }
  public resetSourceApplicationSecurityGroupIds() {
    this._sourceApplicationSecurityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceApplicationSecurityGroupIdsInput() {
    return this._sourceApplicationSecurityGroupIds;
  }

  // source_port_range - computed: true, optional: true, required: false
  private _sourcePortRange?: string; 
  public get sourcePortRange() {
    return this.getStringAttribute('source_port_range');
  }
  public set sourcePortRange(value: string) {
    this._sourcePortRange = value;
  }
  public resetSourcePortRange() {
    this._sourcePortRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortRangeInput() {
    return this._sourcePortRange;
  }

  // source_port_ranges - computed: true, optional: true, required: false
  private _sourcePortRanges?: string[]; 
  public get sourcePortRanges() {
    return cdktf.Fn.tolist(this.getListAttribute('source_port_ranges'));
  }
  public set sourcePortRanges(value: string[]) {
    this._sourcePortRanges = value;
  }
  public resetSourcePortRanges() {
    this._sourcePortRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortRangesInput() {
    return this._sourcePortRanges;
  }
}

export class NetworkSecurityGroupSecurityRuleList extends cdktf.ComplexList {
  public internalValue? : NetworkSecurityGroupSecurityRule[] | cdktf.IResolvable

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
  public get(index: number): NetworkSecurityGroupSecurityRuleOutputReference {
    return new NetworkSecurityGroupSecurityRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_security_group#create NetworkSecurityGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_security_group#delete NetworkSecurityGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_security_group#read NetworkSecurityGroup#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_security_group#update NetworkSecurityGroup#update}
  */
  readonly update?: string;
}

export function networkSecurityGroupTimeoutsToTerraform(struct?: NetworkSecurityGroupTimeouts | cdktf.IResolvable): any {
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


export function networkSecurityGroupTimeoutsToHclTerraform(struct?: NetworkSecurityGroupTimeouts | cdktf.IResolvable): any {
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

export class NetworkSecurityGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkSecurityGroupTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NetworkSecurityGroupTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_security_group azurerm_network_security_group}
*/
export class NetworkSecurityGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_network_security_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkSecurityGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkSecurityGroup to import
  * @param importFromId The id of the existing NetworkSecurityGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_security_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkSecurityGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_network_security_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_security_group azurerm_network_security_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkSecurityGroupConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkSecurityGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_network_security_group',
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
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._securityRule.internalValue = config.securityRule;
    this._tags = config.tags;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
    return this._location;
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

  // security_rule - computed: true, optional: true, required: false
  private _securityRule = new NetworkSecurityGroupSecurityRuleList(this, "security_rule", true);
  public get securityRule() {
    return this._securityRule;
  }
  public putSecurityRule(value: NetworkSecurityGroupSecurityRule[] | cdktf.IResolvable) {
    this._securityRule.internalValue = value;
  }
  public resetSecurityRule() {
    this._securityRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityRuleInput() {
    return this._securityRule.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetworkSecurityGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetworkSecurityGroupTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      security_rule: cdktf.listMapper(networkSecurityGroupSecurityRuleToTerraform, false)(this._securityRule.internalValue),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      timeouts: networkSecurityGroupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
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
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_rule: {
        value: cdktf.listMapperHcl(networkSecurityGroupSecurityRuleToHclTerraform, false)(this._securityRule.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NetworkSecurityGroupSecurityRuleList",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      timeouts: {
        value: networkSecurityGroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkSecurityGroupTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
