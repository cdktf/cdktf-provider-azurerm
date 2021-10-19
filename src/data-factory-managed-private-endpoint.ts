// https://www.terraform.io/docs/providers/azurerm/r/data_factory_managed_private_endpoint.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFactoryManagedPrivateEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_managed_private_endpoint.html#data_factory_id DataFactoryManagedPrivateEndpoint#data_factory_id}
  */
  readonly dataFactoryId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_managed_private_endpoint.html#name DataFactoryManagedPrivateEndpoint#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_managed_private_endpoint.html#subresource_name DataFactoryManagedPrivateEndpoint#subresource_name}
  */
  readonly subresourceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_managed_private_endpoint.html#target_resource_id DataFactoryManagedPrivateEndpoint#target_resource_id}
  */
  readonly targetResourceId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_managed_private_endpoint.html#timeouts DataFactoryManagedPrivateEndpoint#timeouts}
  */
  readonly timeouts?: DataFactoryManagedPrivateEndpointTimeouts;
}
export interface DataFactoryManagedPrivateEndpointTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_managed_private_endpoint.html#create DataFactoryManagedPrivateEndpoint#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_managed_private_endpoint.html#delete DataFactoryManagedPrivateEndpoint#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_managed_private_endpoint.html#read DataFactoryManagedPrivateEndpoint#read}
  */
  readonly read?: string;
}

function dataFactoryManagedPrivateEndpointTimeoutsToTerraform(struct?: DataFactoryManagedPrivateEndpointTimeoutsOutputReference | DataFactoryManagedPrivateEndpointTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataFactoryManagedPrivateEndpointTimeoutsOutputReference extends cdktf.ComplexObject {
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_managed_private_endpoint.html azurerm_data_factory_managed_private_endpoint}
*/
export class DataFactoryManagedPrivateEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_data_factory_managed_private_endpoint";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_managed_private_endpoint.html azurerm_data_factory_managed_private_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFactoryManagedPrivateEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: DataFactoryManagedPrivateEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_factory_managed_private_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dataFactoryId = config.dataFactoryId;
    this._name = config.name;
    this._subresourceName = config.subresourceName;
    this._targetResourceId = config.targetResourceId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_factory_id - computed: false, optional: false, required: true
  private _dataFactoryId?: string; 
  public get dataFactoryId() {
    return this.getStringAttribute('data_factory_id');
  }
  public set dataFactoryId(value: string) {
    this._dataFactoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFactoryIdInput() {
    return this._dataFactoryId
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

  // subresource_name - computed: false, optional: false, required: true
  private _subresourceName?: string; 
  public get subresourceName() {
    return this.getStringAttribute('subresource_name');
  }
  public set subresourceName(value: string) {
    this._subresourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subresourceNameInput() {
    return this._subresourceName
  }

  // target_resource_id - computed: false, optional: false, required: true
  private _targetResourceId?: string; 
  public get targetResourceId() {
    return this.getStringAttribute('target_resource_id');
  }
  public set targetResourceId(value: string) {
    this._targetResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourceIdInput() {
    return this._targetResourceId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataFactoryManagedPrivateEndpointTimeouts | undefined; 
  private __timeoutsOutput = new DataFactoryManagedPrivateEndpointTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataFactoryManagedPrivateEndpointTimeouts | undefined) {
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
      data_factory_id: cdktf.stringToTerraform(this._dataFactoryId),
      name: cdktf.stringToTerraform(this._name),
      subresource_name: cdktf.stringToTerraform(this._subresourceName),
      target_resource_id: cdktf.stringToTerraform(this._targetResourceId),
      timeouts: dataFactoryManagedPrivateEndpointTimeoutsToTerraform(this._timeouts),
    };
  }
}
