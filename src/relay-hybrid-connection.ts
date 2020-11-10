// https://www.terraform.io/docs/providers/azurerm/r/relay_hybrid_connection.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface RelayHybridConnectionConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly relayNamespaceName: string;
  readonly requiresClientAuthorization?: boolean;
  readonly resourceGroupName: string;
  readonly userMetadata?: string;
  /** timeouts block */
  readonly timeouts?: RelayHybridConnectionTimeouts;
}
export interface RelayHybridConnectionTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class RelayHybridConnection extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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

  // relay_namespace_name - computed: false, optional: false, required: true
  private _relayNamespaceName: string;
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
  private _requiresClientAuthorization?: boolean;
  public get requiresClientAuthorization() {
    return this.getBooleanAttribute('requires_client_authorization');
  }
  public set requiresClientAuthorization(value: boolean ) {
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

  // user_metadata - computed: false, optional: true, required: false
  private _userMetadata?: string;
  public get userMetadata() {
    return this.getStringAttribute('user_metadata');
  }
  public set userMetadata(value: string ) {
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
  private _timeouts?: RelayHybridConnectionTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: RelayHybridConnectionTimeouts ) {
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
      name: this._name,
      relay_namespace_name: this._relayNamespaceName,
      requires_client_authorization: this._requiresClientAuthorization,
      resource_group_name: this._resourceGroupName,
      user_metadata: this._userMetadata,
      timeouts: this._timeouts,
    };
  }
}
