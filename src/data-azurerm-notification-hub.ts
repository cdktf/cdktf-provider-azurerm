// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_notification_hub.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataAzurermNotificationHubConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly namespaceName: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermNotificationHubTimeouts;
}
export class DataAzurermNotificationHubApnsCredential extends ComplexComputedList {

  // application_mode - computed: true, optional: false, required: true
  public get applicationMode() {
    return this.getStringAttribute('application_mode');
  }

  // bundle_id - computed: true, optional: false, required: true
  public get bundleId() {
    return this.getStringAttribute('bundle_id');
  }

  // key_id - computed: true, optional: false, required: true
  public get keyId() {
    return this.getStringAttribute('key_id');
  }

  // team_id - computed: true, optional: false, required: true
  public get teamId() {
    return this.getStringAttribute('team_id');
  }

  // token - computed: true, optional: false, required: true
  public get token() {
    return this.getStringAttribute('token');
  }
}
export class DataAzurermNotificationHubGcmCredential extends ComplexComputedList {

  // api_key - computed: true, optional: false, required: true
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
}
export interface DataAzurermNotificationHubTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermNotificationHub extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermNotificationHubConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_notification_hub',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._namespaceName = config.namespaceName;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apns_credential - computed: true, optional: false, required: true
  public apnsCredential(index: string) {
    return new DataAzurermNotificationHubApnsCredential(this, 'apns_credential', index);
  }

  // gcm_credential - computed: true, optional: false, required: true
  public gcmCredential(index: string) {
    return new DataAzurermNotificationHubGcmCredential(this, 'gcm_credential', index);
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // location - computed: true, optional: false, required: true
  public get location() {
    return this.getStringAttribute('location');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // namespace_name - computed: false, optional: false, required: true
  private _namespaceName: string;
  public get namespaceName() {
    return this._namespaceName;
  }
  public set namespaceName(value: string) {
    this._namespaceName = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermNotificationHubTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermNotificationHubTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      namespace_name: this._namespaceName,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
