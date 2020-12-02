// https://www.terraform.io/docs/providers/azurerm/r/service_fabric_mesh_secret_value.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ServiceFabricMeshSecretValueConfig extends TerraformMetaArguments {
  readonly location: string;
  readonly name: string;
  readonly serviceFabricMeshSecretId: string;
  readonly tags?: { [key: string]: string };
  readonly value: string;
  /** timeouts block */
  readonly timeouts?: ServiceFabricMeshSecretValueTimeouts;
}
export interface ServiceFabricMeshSecretValueTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class ServiceFabricMeshSecretValue extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ServiceFabricMeshSecretValueConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_service_fabric_mesh_secret_value',
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
    this._serviceFabricMeshSecretId = config.serviceFabricMeshSecretId;
    this._tags = config.tags;
    this._value = config.value;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // service_fabric_mesh_secret_id - computed: false, optional: false, required: true
  private _serviceFabricMeshSecretId: string;
  public get serviceFabricMeshSecretId() {
    return this.getStringAttribute('service_fabric_mesh_secret_id');
  }
  public set serviceFabricMeshSecretId(value: string) {
    this._serviceFabricMeshSecretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceFabricMeshSecretIdInput() {
    return this._serviceFabricMeshSecretId
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

  // value - computed: false, optional: false, required: true
  private _value: string;
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ServiceFabricMeshSecretValueTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ServiceFabricMeshSecretValueTimeouts ) {
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
      service_fabric_mesh_secret_id: this._serviceFabricMeshSecretId,
      tags: this._tags,
      value: this._value,
      timeouts: this._timeouts,
    };
  }
}
