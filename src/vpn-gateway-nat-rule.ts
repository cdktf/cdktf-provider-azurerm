// https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_nat_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnGatewayNatRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_nat_rule#external_address_space_mappings VpnGatewayNatRule#external_address_space_mappings}
  */
  readonly externalAddressSpaceMappings: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_nat_rule#internal_address_space_mappings VpnGatewayNatRule#internal_address_space_mappings}
  */
  readonly internalAddressSpaceMappings: string[];
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
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_nat_rule#timeouts VpnGatewayNatRule#timeouts}
  */
  readonly timeouts?: VpnGatewayNatRuleTimeouts;
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

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnGatewayNatRuleTimeouts | undefined {
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

  public set internalValue(value: VpnGatewayNatRuleTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
        providerVersion: '2.99.0',
        providerVersionConstraint: '~> 2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._externalAddressSpaceMappings = config.externalAddressSpaceMappings;
    this._internalAddressSpaceMappings = config.internalAddressSpaceMappings;
    this._ipConfigurationId = config.ipConfigurationId;
    this._mode = config.mode;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._type = config.type;
    this._vpnGatewayId = config.vpnGatewayId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // external_address_space_mappings - computed: false, optional: false, required: true
  private _externalAddressSpaceMappings?: string[]; 
  public get externalAddressSpaceMappings() {
    return cdktf.Fn.tolist(this.getListAttribute('external_address_space_mappings'));
  }
  public set externalAddressSpaceMappings(value: string[]) {
    this._externalAddressSpaceMappings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalAddressSpaceMappingsInput() {
    return this._externalAddressSpaceMappings;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // internal_address_space_mappings - computed: false, optional: false, required: true
  private _internalAddressSpaceMappings?: string[]; 
  public get internalAddressSpaceMappings() {
    return cdktf.Fn.tolist(this.getListAttribute('internal_address_space_mappings'));
  }
  public set internalAddressSpaceMappings(value: string[]) {
    this._internalAddressSpaceMappings = value;
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
      external_address_space_mappings: cdktf.listMapper(cdktf.stringToTerraform)(this._externalAddressSpaceMappings),
      internal_address_space_mappings: cdktf.listMapper(cdktf.stringToTerraform)(this._internalAddressSpaceMappings),
      ip_configuration_id: cdktf.stringToTerraform(this._ipConfigurationId),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      type: cdktf.stringToTerraform(this._type),
      vpn_gateway_id: cdktf.stringToTerraform(this._vpnGatewayId),
      timeouts: vpnGatewayNatRuleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
