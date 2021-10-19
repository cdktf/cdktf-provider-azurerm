// https://www.terraform.io/docs/providers/azurerm/r/relay_hybrid_connection.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RelayHybridConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/relay_hybrid_connection.html#name RelayHybridConnection#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/relay_hybrid_connection.html#relay_namespace_name RelayHybridConnection#relay_namespace_name}
  */
  readonly relayNamespaceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/relay_hybrid_connection.html#requires_client_authorization RelayHybridConnection#requires_client_authorization}
  */
  readonly requiresClientAuthorization?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/relay_hybrid_connection.html#resource_group_name RelayHybridConnection#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/relay_hybrid_connection.html#user_metadata RelayHybridConnection#user_metadata}
  */
  readonly userMetadata?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/relay_hybrid_connection.html#timeouts RelayHybridConnection#timeouts}
  */
  readonly timeouts?: RelayHybridConnectionTimeouts;
}
export interface RelayHybridConnectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/relay_hybrid_connection.html#create RelayHybridConnection#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/relay_hybrid_connection.html#delete RelayHybridConnection#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/relay_hybrid_connection.html#read RelayHybridConnection#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/relay_hybrid_connection.html#update RelayHybridConnection#update}
  */
  readonly update?: string;
}

function relayHybridConnectionTimeoutsToTerraform(struct?: RelayHybridConnectionTimeoutsOutputReference | RelayHybridConnectionTimeouts): any {
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

export class RelayHybridConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/relay_hybrid_connection.html azurerm_relay_hybrid_connection}
*/
export class RelayHybridConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_relay_hybrid_connection";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/relay_hybrid_connection.html azurerm_relay_hybrid_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RelayHybridConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: RelayHybridConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_relay_hybrid_connection',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._relayNamespaceName = config.relayNamespaceName;
    this._requiresClientAuthorization = config.requiresClientAuthorization;
    this._resourceGroupName = config.resourceGroupName;
    this._userMetadata = config.userMetadata;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // relay_namespace_name - computed: false, optional: false, required: true
  private _relayNamespaceName?: string; 
  public get relayNamespaceName() {
    return this.getStringAttribute('relay_namespace_name');
  }
  public set relayNamespaceName(value: string) {
    this._relayNamespaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get relayNamespaceNameInput() {
    return this._relayNamespaceName
  }

  // requires_client_authorization - computed: false, optional: true, required: false
  private _requiresClientAuthorization?: boolean | cdktf.IResolvable | undefined; 
  public get requiresClientAuthorization() {
    return this.getBooleanAttribute('requires_client_authorization') as any;
  }
  public set requiresClientAuthorization(value: boolean | cdktf.IResolvable | undefined) {
    this._requiresClientAuthorization = value;
  }
  public resetRequiresClientAuthorization() {
    this._requiresClientAuthorization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiresClientAuthorizationInput() {
    return this._requiresClientAuthorization
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

  // user_metadata - computed: false, optional: true, required: false
  private _userMetadata?: string | undefined; 
  public get userMetadata() {
    return this.getStringAttribute('user_metadata');
  }
  public set userMetadata(value: string | undefined) {
    this._userMetadata = value;
  }
  public resetUserMetadata() {
    this._userMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userMetadataInput() {
    return this._userMetadata
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: RelayHybridConnectionTimeouts | undefined; 
  private __timeoutsOutput = new RelayHybridConnectionTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: RelayHybridConnectionTimeouts | undefined) {
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
      relay_namespace_name: cdktf.stringToTerraform(this._relayNamespaceName),
      requires_client_authorization: cdktf.booleanToTerraform(this._requiresClientAuthorization),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      user_metadata: cdktf.stringToTerraform(this._userMetadata),
      timeouts: relayHybridConnectionTimeoutsToTerraform(this._timeouts),
    };
  }
}
