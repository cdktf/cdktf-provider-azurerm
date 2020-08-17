// https://www.terraform.io/docs/providers/azurerm/r/devspace_controller.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DevspaceControllerConfig extends TerraformMetaArguments {
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly skuName: string;
  readonly tags?: { [key: string]: string };
  readonly targetContainerHostCredentialsBase64: string;
  readonly targetContainerHostResourceId: string;
  /** timeouts block */
  readonly timeouts?: DevspaceControllerTimeouts;
}
export interface DevspaceControllerTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class DevspaceController extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DevspaceControllerConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_devspace_controller',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._skuName = config.skuName;
    this._tags = config.tags;
    this._targetContainerHostCredentialsBase64 = config.targetContainerHostCredentialsBase64;
    this._targetContainerHostResourceId = config.targetContainerHostResourceId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_plane_fqdn - computed: true, optional: false, required: true
  public get dataPlaneFqdn() {
    return this.getStringAttribute('data_plane_fqdn');
  }

  // host_suffix - computed: true, optional: false, required: true
  public get hostSuffix() {
    return this.getStringAttribute('host_suffix');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this._location;
  }
  public set location(value: string) {
    this._location = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // sku_name - computed: false, optional: false, required: true
  private _skuName: string;
  public get skuName() {
    return this._skuName;
  }
  public set skuName(value: string) {
    this._skuName = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // target_container_host_credentials_base64 - computed: false, optional: false, required: true
  private _targetContainerHostCredentialsBase64: string;
  public get targetContainerHostCredentialsBase64() {
    return this._targetContainerHostCredentialsBase64;
  }
  public set targetContainerHostCredentialsBase64(value: string) {
    this._targetContainerHostCredentialsBase64 = value;
  }

  // target_container_host_resource_id - computed: false, optional: false, required: true
  private _targetContainerHostResourceId: string;
  public get targetContainerHostResourceId() {
    return this._targetContainerHostResourceId;
  }
  public set targetContainerHostResourceId(value: string) {
    this._targetContainerHostResourceId = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DevspaceControllerTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DevspaceControllerTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      location: this._location,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      sku_name: this._skuName,
      tags: this._tags,
      target_container_host_credentials_base64: this._targetContainerHostCredentialsBase64,
      target_container_host_resource_id: this._targetContainerHostResourceId,
      timeouts: this._timeouts,
    };
  }
}
