// https://www.terraform.io/docs/providers/azurerm/r/service_fabric_mesh_secret_value.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceFabricMeshSecretValueConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_mesh_secret_value.html#location ServiceFabricMeshSecretValue#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_mesh_secret_value.html#name ServiceFabricMeshSecretValue#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_mesh_secret_value.html#service_fabric_mesh_secret_id ServiceFabricMeshSecretValue#service_fabric_mesh_secret_id}
  */
  readonly serviceFabricMeshSecretId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_mesh_secret_value.html#tags ServiceFabricMeshSecretValue#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_mesh_secret_value.html#value ServiceFabricMeshSecretValue#value}
  */
  readonly value: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_mesh_secret_value.html#timeouts ServiceFabricMeshSecretValue#timeouts}
  */
  readonly timeouts?: ServiceFabricMeshSecretValueTimeouts;
}
export interface ServiceFabricMeshSecretValueTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_mesh_secret_value.html#create ServiceFabricMeshSecretValue#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_mesh_secret_value.html#delete ServiceFabricMeshSecretValue#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_mesh_secret_value.html#read ServiceFabricMeshSecretValue#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_mesh_secret_value.html#update ServiceFabricMeshSecretValue#update}
  */
  readonly update?: string;
}

function serviceFabricMeshSecretValueTimeoutsToTerraform(struct?: ServiceFabricMeshSecretValueTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_mesh_secret_value.html azurerm_service_fabric_mesh_secret_value}
*/
export class ServiceFabricMeshSecretValue extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_service_fabric_mesh_secret_value";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_mesh_secret_value.html azurerm_service_fabric_mesh_secret_value} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceFabricMeshSecretValueConfig
  */
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
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
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
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      service_fabric_mesh_secret_id: cdktf.stringToTerraform(this._serviceFabricMeshSecretId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      value: cdktf.stringToTerraform(this._value),
      timeouts: serviceFabricMeshSecretValueTimeoutsToTerraform(this._timeouts),
    };
  }
}
