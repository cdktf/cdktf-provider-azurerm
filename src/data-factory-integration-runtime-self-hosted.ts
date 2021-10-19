// https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_self_hosted.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFactoryIntegrationRuntimeSelfHostedConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_self_hosted.html#data_factory_name DataFactoryIntegrationRuntimeSelfHosted#data_factory_name}
  */
  readonly dataFactoryName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_self_hosted.html#description DataFactoryIntegrationRuntimeSelfHosted#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_self_hosted.html#name DataFactoryIntegrationRuntimeSelfHosted#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_self_hosted.html#resource_group_name DataFactoryIntegrationRuntimeSelfHosted#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * rbac_authorization block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_self_hosted.html#rbac_authorization DataFactoryIntegrationRuntimeSelfHosted#rbac_authorization}
  */
  readonly rbacAuthorization?: DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_self_hosted.html#timeouts DataFactoryIntegrationRuntimeSelfHosted#timeouts}
  */
  readonly timeouts?: DataFactoryIntegrationRuntimeSelfHostedTimeouts;
}
export interface DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_self_hosted.html#resource_id DataFactoryIntegrationRuntimeSelfHosted#resource_id}
  */
  readonly resourceId: string;
}

function dataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationToTerraform(struct?: DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
  }
}

export interface DataFactoryIntegrationRuntimeSelfHostedTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_self_hosted.html#create DataFactoryIntegrationRuntimeSelfHosted#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_self_hosted.html#delete DataFactoryIntegrationRuntimeSelfHosted#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_self_hosted.html#read DataFactoryIntegrationRuntimeSelfHosted#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_self_hosted.html#update DataFactoryIntegrationRuntimeSelfHosted#update}
  */
  readonly update?: string;
}

function dataFactoryIntegrationRuntimeSelfHostedTimeoutsToTerraform(struct?: DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference | DataFactoryIntegrationRuntimeSelfHostedTimeouts): any {
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

export class DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_self_hosted.html azurerm_data_factory_integration_runtime_self_hosted}
*/
export class DataFactoryIntegrationRuntimeSelfHosted extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_data_factory_integration_runtime_self_hosted";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_self_hosted.html azurerm_data_factory_integration_runtime_self_hosted} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFactoryIntegrationRuntimeSelfHostedConfig
  */
  public constructor(scope: Construct, id: string, config: DataFactoryIntegrationRuntimeSelfHostedConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_factory_integration_runtime_self_hosted',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dataFactoryName = config.dataFactoryName;
    this._description = config.description;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._rbacAuthorization = config.rbacAuthorization;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_key_1 - computed: true, optional: false, required: false
  public get authKey1() {
    return this.getStringAttribute('auth_key_1');
  }

  // auth_key_2 - computed: true, optional: false, required: false
  public get authKey2() {
    return this.getStringAttribute('auth_key_2');
  }

  // data_factory_name - computed: false, optional: false, required: true
  private _dataFactoryName?: string; 
  public get dataFactoryName() {
    return this.getStringAttribute('data_factory_name');
  }
  public set dataFactoryName(value: string) {
    this._dataFactoryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFactoryNameInput() {
    return this._dataFactoryName
  }

  // description - computed: false, optional: true, required: false
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
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

  // rbac_authorization - computed: false, optional: true, required: false
  private _rbacAuthorization?: DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization[] | undefined; 
  public get rbacAuthorization() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('rbac_authorization') as any;
  }
  public set rbacAuthorization(value: DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization[] | undefined) {
    this._rbacAuthorization = value;
  }
  public resetRbacAuthorization() {
    this._rbacAuthorization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rbacAuthorizationInput() {
    return this._rbacAuthorization
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataFactoryIntegrationRuntimeSelfHostedTimeouts | undefined; 
  private __timeoutsOutput = new DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataFactoryIntegrationRuntimeSelfHostedTimeouts | undefined) {
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
      data_factory_name: cdktf.stringToTerraform(this._dataFactoryName),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      rbac_authorization: cdktf.listMapper(dataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationToTerraform)(this._rbacAuthorization),
      timeouts: dataFactoryIntegrationRuntimeSelfHostedTimeoutsToTerraform(this._timeouts),
    };
  }
}
