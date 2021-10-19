// https://www.terraform.io/docs/providers/azurerm/r/nat_gateway_public_ip_prefix_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NatGatewayPublicIpPrefixAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/nat_gateway_public_ip_prefix_association.html#nat_gateway_id NatGatewayPublicIpPrefixAssociation#nat_gateway_id}
  */
  readonly natGatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/nat_gateway_public_ip_prefix_association.html#public_ip_prefix_id NatGatewayPublicIpPrefixAssociation#public_ip_prefix_id}
  */
  readonly publicIpPrefixId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/nat_gateway_public_ip_prefix_association.html#timeouts NatGatewayPublicIpPrefixAssociation#timeouts}
  */
  readonly timeouts?: NatGatewayPublicIpPrefixAssociationTimeouts;
}
export interface NatGatewayPublicIpPrefixAssociationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/nat_gateway_public_ip_prefix_association.html#create NatGatewayPublicIpPrefixAssociation#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/nat_gateway_public_ip_prefix_association.html#delete NatGatewayPublicIpPrefixAssociation#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/nat_gateway_public_ip_prefix_association.html#read NatGatewayPublicIpPrefixAssociation#read}
  */
  readonly read?: string;
}

function natGatewayPublicIpPrefixAssociationTimeoutsToTerraform(struct?: NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference | NatGatewayPublicIpPrefixAssociationTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference extends cdktf.ComplexObject {
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/nat_gateway_public_ip_prefix_association.html azurerm_nat_gateway_public_ip_prefix_association}
*/
export class NatGatewayPublicIpPrefixAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_nat_gateway_public_ip_prefix_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/nat_gateway_public_ip_prefix_association.html azurerm_nat_gateway_public_ip_prefix_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NatGatewayPublicIpPrefixAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: NatGatewayPublicIpPrefixAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_nat_gateway_public_ip_prefix_association',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._natGatewayId = config.natGatewayId;
    this._publicIpPrefixId = config.publicIpPrefixId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // nat_gateway_id - computed: false, optional: false, required: true
  private _natGatewayId?: string; 
  public get natGatewayId() {
    return this.getStringAttribute('nat_gateway_id');
  }
  public set natGatewayId(value: string) {
    this._natGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get natGatewayIdInput() {
    return this._natGatewayId
  }

  // public_ip_prefix_id - computed: false, optional: false, required: true
  private _publicIpPrefixId?: string; 
  public get publicIpPrefixId() {
    return this.getStringAttribute('public_ip_prefix_id');
  }
  public set publicIpPrefixId(value: string) {
    this._publicIpPrefixId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpPrefixIdInput() {
    return this._publicIpPrefixId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: NatGatewayPublicIpPrefixAssociationTimeouts | undefined; 
  private __timeoutsOutput = new NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: NatGatewayPublicIpPrefixAssociationTimeouts | undefined) {
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
      nat_gateway_id: cdktf.stringToTerraform(this._natGatewayId),
      public_ip_prefix_id: cdktf.stringToTerraform(this._publicIpPrefixId),
      timeouts: natGatewayPublicIpPrefixAssociationTimeoutsToTerraform(this._timeouts),
    };
  }
}
