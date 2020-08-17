// https://www.terraform.io/docs/providers/azurerm/r/network_interface_backend_address_pool_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface NetworkInterfaceBackendAddressPoolAssociationConfig extends TerraformMetaArguments {
  readonly backendAddressPoolId: string;
  readonly ipConfigurationName: string;
  readonly networkInterfaceId: string;
  /** timeouts block */
  readonly timeouts?: NetworkInterfaceBackendAddressPoolAssociationTimeouts;
}
export interface NetworkInterfaceBackendAddressPoolAssociationTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class NetworkInterfaceBackendAddressPoolAssociation extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: NetworkInterfaceBackendAddressPoolAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_network_interface_backend_address_pool_association',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._backendAddressPoolId = config.backendAddressPoolId;
    this._ipConfigurationName = config.ipConfigurationName;
    this._networkInterfaceId = config.networkInterfaceId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backend_address_pool_id - computed: false, optional: false, required: true
  private _backendAddressPoolId: string;
  public get backendAddressPoolId() {
    return this._backendAddressPoolId;
  }
  public set backendAddressPoolId(value: string) {
    this._backendAddressPoolId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // ip_configuration_name - computed: false, optional: false, required: true
  private _ipConfigurationName: string;
  public get ipConfigurationName() {
    return this._ipConfigurationName;
  }
  public set ipConfigurationName(value: string) {
    this._ipConfigurationName = value;
  }

  // network_interface_id - computed: false, optional: false, required: true
  private _networkInterfaceId: string;
  public get networkInterfaceId() {
    return this._networkInterfaceId;
  }
  public set networkInterfaceId(value: string) {
    this._networkInterfaceId = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: NetworkInterfaceBackendAddressPoolAssociationTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: NetworkInterfaceBackendAddressPoolAssociationTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      backend_address_pool_id: this._backendAddressPoolId,
      ip_configuration_name: this._ipConfigurationName,
      network_interface_id: this._networkInterfaceId,
      timeouts: this._timeouts,
    };
  }
}
