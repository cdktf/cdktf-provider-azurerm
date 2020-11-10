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

  // data_plane_fqdn - computed: true, optional: false, required: false
  public get dataPlaneFqdn() {
    return this.getStringAttribute('data_plane_fqdn');
  }

  // host_suffix - computed: true, optional: false, required: false
  public get hostSuffix() {
    return this.getStringAttribute('host_suffix');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
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

  // sku_name - computed: false, optional: false, required: true
  private _skuName: string;
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }
  public set skuName(value: string) {
    this._skuName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuNameInput() {
    return this._skuName
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // target_container_host_credentials_base64 - computed: false, optional: false, required: true
  private _targetContainerHostCredentialsBase64: string;
  public get targetContainerHostCredentialsBase64() {
    return this.getStringAttribute('target_container_host_credentials_base64');
  }
  public set targetContainerHostCredentialsBase64(value: string) {
    this._targetContainerHostCredentialsBase64 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetContainerHostCredentialsBase64Input() {
    return this._targetContainerHostCredentialsBase64
  }

  // target_container_host_resource_id - computed: false, optional: false, required: true
  private _targetContainerHostResourceId: string;
  public get targetContainerHostResourceId() {
    return this.getStringAttribute('target_container_host_resource_id');
  }
  public set targetContainerHostResourceId(value: string) {
    this._targetContainerHostResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetContainerHostResourceIdInput() {
    return this._targetContainerHostResourceId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DevspaceControllerTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DevspaceControllerTimeouts ) {
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
