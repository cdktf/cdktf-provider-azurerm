// https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_nat_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnGatewayNatRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_nat_rule#external_address_space_mappings VpnGatewayNatRule#external_address_space_mappings}
  */
  readonly externalAddressSpaceMappings?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_nat_rule#id VpnGatewayNatRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_nat_rule#internal_address_space_mappings VpnGatewayNatRule#internal_address_space_mappings}
  */
  readonly internalAddressSpaceMappings?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_nat_rule#ip_configuration_id VpnGatewayNatRule#ip_configuration_id}
  */
  readonly ipConfigurationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_nat_rule#mode VpnGatewayNatRule#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_nat_rule#name VpnGatewayNatRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_nat_rule#resource_group_name VpnGatewayNatRule#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_nat_rule#type VpnGatewayNatRule#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_nat_rule#vpn_gateway_id VpnGatewayNatRule#vpn_gateway_id}
  */
  readonly vpnGatewayId: string;
  /**
  * external_mapping block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_nat_rule#external_mapping VpnGatewayNatRule#external_mapping}
  */
  readonly externalMapping?: VpnGatewayNatRuleExternalMapping[] | cdktf.IResolvable;
  /**
  * internal_mapping block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_nat_rule#internal_mapping VpnGatewayNatRule#internal_mapping}
  */
  readonly internalMapping?: VpnGatewayNatRuleInternalMapping[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_nat_rule#timeouts VpnGatewayNatRule#timeouts}
  */
  readonly timeouts?: VpnGatewayNatRuleTimeouts;
}
export interface VpnGatewayNatRuleExternalMapping {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_nat_rule#address_space VpnGatewayNatRule#address_space}
  */
  readonly addressSpace: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_nat_rule#port_range VpnGatewayNatRule#port_range}
  */
  readonly portRange?: string;
}

export function vpnGatewayNatRuleExternalMappingToTerraform(struct?: VpnGatewayNatRuleExternalMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_space: cdktf.stringToTerraform(struct!.addressSpace),
    port_range: cdktf.stringToTerraform(struct!.portRange),
  }
}

export class VpnGatewayNatRuleExternalMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnGatewayNatRuleExternalMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressSpace !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressSpace = this._addressSpace;
    }
    if (this._portRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRange = this._portRange;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnGatewayNatRuleExternalMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressSpace = undefined;
      this._portRange = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressSpace = value.addressSpace;
      this._portRange = value.portRange;
    }
  }

  // address_space - computed: false, optional: false, required: true
  private _addressSpace?: string; 
  public get addressSpace() {
    return this.getStringAttribute('address_space');
  }
  public set addressSpace(value: string) {
    this._addressSpace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressSpaceInput() {
    return this._addressSpace;
  }

  // port_range - computed: false, optional: true, required: false
  private _portRange?: string; 
  public get portRange() {
    return this.getStringAttribute('port_range');
  }
  public set portRange(value: string) {
    this._portRange = value;
  }
  public resetPortRange() {
    this._portRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeInput() {
    return this._portRange;
  }
}

export class VpnGatewayNatRuleExternalMappingList extends cdktf.ComplexList {
  public internalValue? : VpnGatewayNatRuleExternalMapping[] | cdktf.IResolvable

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
  public get(index: number): VpnGatewayNatRuleExternalMappingOutputReference {
    return new VpnGatewayNatRuleExternalMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnGatewayNatRuleInternalMapping {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_nat_rule#address_space VpnGatewayNatRule#address_space}
  */
  readonly addressSpace: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_nat_rule#port_range VpnGatewayNatRule#port_range}
  */
  readonly portRange?: string;
}

export function vpnGatewayNatRuleInternalMappingToTerraform(struct?: VpnGatewayNatRuleInternalMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_space: cdktf.stringToTerraform(struct!.addressSpace),
    port_range: cdktf.stringToTerraform(struct!.portRange),
  }
}

export class VpnGatewayNatRuleInternalMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnGatewayNatRuleInternalMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressSpace !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressSpace = this._addressSpace;
    }
    if (this._portRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRange = this._portRange;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnGatewayNatRuleInternalMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressSpace = undefined;
      this._portRange = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressSpace = value.addressSpace;
      this._portRange = value.portRange;
    }
  }

  // address_space - computed: false, optional: false, required: true
  private _addressSpace?: string; 
  public get addressSpace() {
    return this.getStringAttribute('address_space');
  }
  public set addressSpace(value: string) {
    this._addressSpace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressSpaceInput() {
    return this._addressSpace;
  }

  // port_range - computed: false, optional: true, required: false
  private _portRange?: string; 
  public get portRange() {
    return this.getStringAttribute('port_range');
  }
  public set portRange(value: string) {
    this._portRange = value;
  }
  public resetPortRange() {
    this._portRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeInput() {
    return this._portRange;
  }
}

export class VpnGatewayNatRuleInternalMappingList extends cdktf.ComplexList {
  public internalValue? : VpnGatewayNatRuleInternalMapping[] | cdktf.IResolvable

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
  public get(index: number): VpnGatewayNatRuleInternalMappingOutputReference {
    return new VpnGatewayNatRuleInternalMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnGatewayNatRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_nat_rule#create VpnGatewayNatRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_nat_rule#delete VpnGatewayNatRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_nat_rule#read VpnGatewayNatRule#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_nat_rule#update VpnGatewayNatRule#update}
  */
  readonly update?: string;
}

export function vpnGatewayNatRuleTimeoutsToTerraform(struct?: VpnGatewayNatRuleTimeoutsOutputReference | VpnGatewayNatRuleTimeouts | cdktf.IResolvable): any {
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

export class VpnGatewayNatRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnGatewayNatRuleTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VpnGatewayNatRuleTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_nat_rule azurerm_vpn_gateway_nat_rule}
*/
export class VpnGatewayNatRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_vpn_gateway_nat_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_nat_rule azurerm_vpn_gateway_nat_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnGatewayNatRuleConfig
  */
  public constructor(scope: Construct, id: string, config: VpnGatewayNatRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_vpn_gateway_nat_rule',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '3.50.0',
        providerVersionConstraint: '~> 3.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._externalAddressSpaceMappings = config.externalAddressSpaceMappings;
    this._id = config.id;
    this._internalAddressSpaceMappings = config.internalAddressSpaceMappings;
    this._ipConfigurationId = config.ipConfigurationId;
    this._mode = config.mode;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._type = config.type;
    this._vpnGatewayId = config.vpnGatewayId;
    this._externalMapping.internalValue = config.externalMapping;
    this._internalMapping.internalValue = config.internalMapping;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // external_address_space_mappings - computed: true, optional: true, required: false
  private _externalAddressSpaceMappings?: string[]; 
  public get externalAddressSpaceMappings() {
    return this.getListAttribute('external_address_space_mappings');
  }
  public set externalAddressSpaceMappings(value: string[]) {
    this._externalAddressSpaceMappings = value;
  }
  public resetExternalAddressSpaceMappings() {
    this._externalAddressSpaceMappings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalAddressSpaceMappingsInput() {
    return this._externalAddressSpaceMappings;
  }

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

  // internal_address_space_mappings - computed: true, optional: true, required: false
  private _internalAddressSpaceMappings?: string[]; 
  public get internalAddressSpaceMappings() {
    return this.getListAttribute('internal_address_space_mappings');
  }
  public set internalAddressSpaceMappings(value: string[]) {
    this._internalAddressSpaceMappings = value;
  }
  public resetInternalAddressSpaceMappings() {
    this._internalAddressSpaceMappings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalAddressSpaceMappingsInput() {
    return this._internalAddressSpaceMappings;
  }

  // ip_configuration_id - computed: false, optional: true, required: false
  private _ipConfigurationId?: string; 
  public get ipConfigurationId() {
    return this.getStringAttribute('ip_configuration_id');
  }
  public set ipConfigurationId(value: string) {
    this._ipConfigurationId = value;
  }
  public resetIpConfigurationId() {
    this._ipConfigurationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipConfigurationIdInput() {
    return this._ipConfigurationId;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vpn_gateway_id - computed: false, optional: false, required: true
  private _vpnGatewayId?: string; 
  public get vpnGatewayId() {
    return this.getStringAttribute('vpn_gateway_id');
  }
  public set vpnGatewayId(value: string) {
    this._vpnGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnGatewayIdInput() {
    return this._vpnGatewayId;
  }

  // external_mapping - computed: false, optional: true, required: false
  private _externalMapping = new VpnGatewayNatRuleExternalMappingList(this, "external_mapping", false);
  public get externalMapping() {
    return this._externalMapping;
  }
  public putExternalMapping(value: VpnGatewayNatRuleExternalMapping[] | cdktf.IResolvable) {
    this._externalMapping.internalValue = value;
  }
  public resetExternalMapping() {
    this._externalMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalMappingInput() {
    return this._externalMapping.internalValue;
  }

  // internal_mapping - computed: false, optional: true, required: false
  private _internalMapping = new VpnGatewayNatRuleInternalMappingList(this, "internal_mapping", false);
  public get internalMapping() {
    return this._internalMapping;
  }
  public putInternalMapping(value: VpnGatewayNatRuleInternalMapping[] | cdktf.IResolvable) {
    this._internalMapping.internalValue = value;
  }
  public resetInternalMapping() {
    this._internalMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalMappingInput() {
    return this._internalMapping.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VpnGatewayNatRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VpnGatewayNatRuleTimeouts) {
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
      external_address_space_mappings: cdktf.listMapper(cdktf.stringToTerraform, false)(this._externalAddressSpaceMappings),
      id: cdktf.stringToTerraform(this._id),
      internal_address_space_mappings: cdktf.listMapper(cdktf.stringToTerraform, false)(this._internalAddressSpaceMappings),
      ip_configuration_id: cdktf.stringToTerraform(this._ipConfigurationId),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      type: cdktf.stringToTerraform(this._type),
      vpn_gateway_id: cdktf.stringToTerraform(this._vpnGatewayId),
      external_mapping: cdktf.listMapper(vpnGatewayNatRuleExternalMappingToTerraform, true)(this._externalMapping.internalValue),
      internal_mapping: cdktf.listMapper(vpnGatewayNatRuleInternalMappingToTerraform, true)(this._internalMapping.internalValue),
      timeouts: vpnGatewayNatRuleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
