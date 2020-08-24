// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_client_config.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAzurermClientConfigConfig extends TerraformMetaArguments {
  /** timeouts block */
  readonly timeouts?: DataAzurermClientConfigTimeouts;
}
export interface DataAzurermClientConfigTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermClientConfig extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermClientConfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'azurerm_client_config',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_id - computed: true, optional: false, required: true
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // object_id - computed: true, optional: false, required: true
  public get objectId() {
    return this.getStringAttribute('object_id');
  }

  // subscription_id - computed: true, optional: false, required: true
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }

  // tenant_id - computed: true, optional: false, required: true
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermClientConfigTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermClientConfigTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      timeouts: this._timeouts,
    };
  }
}
