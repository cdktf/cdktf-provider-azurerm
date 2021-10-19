// https://www.terraform.io/docs/providers/azurerm/d/nat_gateway.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermNatGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/nat_gateway.html#name DataAzurermNatGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/nat_gateway.html#public_ip_address_ids DataAzurermNatGateway#public_ip_address_ids}
  */
  readonly publicIpAddressIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/nat_gateway.html#public_ip_prefix_ids DataAzurermNatGateway#public_ip_prefix_ids}
  */
  readonly publicIpPrefixIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/nat_gateway.html#resource_group_name DataAzurermNatGateway#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/nat_gateway.html#timeouts DataAzurermNatGateway#timeouts}
  */
  readonly timeouts?: DataAzurermNatGatewayTimeouts;
}
export interface DataAzurermNatGatewayTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/nat_gateway.html#read DataAzurermNatGateway#read}
  */
  readonly read?: string;
}

function dataAzurermNatGatewayTimeoutsToTerraform(struct?: DataAzurermNatGatewayTimeoutsOutputReference | DataAzurermNatGatewayTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermNatGatewayTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/nat_gateway.html azurerm_nat_gateway}
*/
export class DataAzurermNatGateway extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_nat_gateway";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/nat_gateway.html azurerm_nat_gateway} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermNatGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermNatGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_nat_gateway',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._publicIpAddressIds = config.publicIpAddressIds;
    this._publicIpPrefixIds = config.publicIpPrefixIds;
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

  // idle_timeout_in_minutes - computed: true, optional: false, required: false
  public get idleTimeoutInMinutes() {
    return this.getNumberAttribute('idle_timeout_in_minutes');
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

  // public_ip_address_ids - computed: true, optional: true, required: false
  private _publicIpAddressIds?: string[] | undefined; 
  public get publicIpAddressIds() {
    return this.getListAttribute('public_ip_address_ids');
  }
  public set publicIpAddressIds(value: string[] | undefined) {
    this._publicIpAddressIds = value;
  }
  public resetPublicIpAddressIds() {
    this._publicIpAddressIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpAddressIdsInput() {
    return this._publicIpAddressIds
  }

  // public_ip_prefix_ids - computed: true, optional: true, required: false
  private _publicIpPrefixIds?: string[] | undefined; 
  public get publicIpPrefixIds() {
    return this.getListAttribute('public_ip_prefix_ids');
  }
  public set publicIpPrefixIds(value: string[] | undefined) {
    this._publicIpPrefixIds = value;
  }
  public resetPublicIpPrefixIds() {
    this._publicIpPrefixIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpPrefixIdsInput() {
    return this._publicIpPrefixIds
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

  // resource_guid - computed: true, optional: false, required: false
  public get resourceGuid() {
    return this.getStringAttribute('resource_guid');
  }

  // sku_name - computed: true, optional: false, required: false
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }

  // tags - computed: true, optional: false, required: false
  public tags(key: string): string {
    return new cdktf.StringMap(this, 'tags').lookup(key);
  }

  // zones - computed: true, optional: false, required: false
  public get zones() {
    return this.getListAttribute('zones');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermNatGatewayTimeouts | undefined; 
  private __timeoutsOutput = new DataAzurermNatGatewayTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataAzurermNatGatewayTimeouts | undefined) {
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
      public_ip_address_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._publicIpAddressIds),
      public_ip_prefix_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._publicIpPrefixIds),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: dataAzurermNatGatewayTimeoutsToTerraform(this._timeouts),
    };
  }
}
