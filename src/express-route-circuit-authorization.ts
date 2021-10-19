// https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_authorization.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExpressRouteCircuitAuthorizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_authorization.html#express_route_circuit_name ExpressRouteCircuitAuthorization#express_route_circuit_name}
  */
  readonly expressRouteCircuitName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_authorization.html#name ExpressRouteCircuitAuthorization#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_authorization.html#resource_group_name ExpressRouteCircuitAuthorization#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_authorization.html#timeouts ExpressRouteCircuitAuthorization#timeouts}
  */
  readonly timeouts?: ExpressRouteCircuitAuthorizationTimeouts;
}
export interface ExpressRouteCircuitAuthorizationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_authorization.html#create ExpressRouteCircuitAuthorization#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_authorization.html#delete ExpressRouteCircuitAuthorization#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_authorization.html#read ExpressRouteCircuitAuthorization#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_authorization.html#update ExpressRouteCircuitAuthorization#update}
  */
  readonly update?: string;
}

function expressRouteCircuitAuthorizationTimeoutsToTerraform(struct?: ExpressRouteCircuitAuthorizationTimeoutsOutputReference | ExpressRouteCircuitAuthorizationTimeouts): any {
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

export class ExpressRouteCircuitAuthorizationTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_authorization.html azurerm_express_route_circuit_authorization}
*/
export class ExpressRouteCircuitAuthorization extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_express_route_circuit_authorization";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_authorization.html azurerm_express_route_circuit_authorization} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExpressRouteCircuitAuthorizationConfig
  */
  public constructor(scope: Construct, id: string, config: ExpressRouteCircuitAuthorizationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_express_route_circuit_authorization',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._expressRouteCircuitName = config.expressRouteCircuitName;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorization_key - computed: true, optional: false, required: false
  public get authorizationKey() {
    return this.getStringAttribute('authorization_key');
  }

  // authorization_use_status - computed: true, optional: false, required: false
  public get authorizationUseStatus() {
    return this.getStringAttribute('authorization_use_status');
  }

  // express_route_circuit_name - computed: false, optional: false, required: true
  private _expressRouteCircuitName?: string; 
  public get expressRouteCircuitName() {
    return this.getStringAttribute('express_route_circuit_name');
  }
  public set expressRouteCircuitName(value: string) {
    this._expressRouteCircuitName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressRouteCircuitNameInput() {
    return this._expressRouteCircuitName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ExpressRouteCircuitAuthorizationTimeouts | undefined; 
  private __timeoutsOutput = new ExpressRouteCircuitAuthorizationTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: ExpressRouteCircuitAuthorizationTimeouts | undefined) {
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
      express_route_circuit_name: cdktf.stringToTerraform(this._expressRouteCircuitName),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: expressRouteCircuitAuthorizationTimeoutsToTerraform(this._timeouts),
    };
  }
}
