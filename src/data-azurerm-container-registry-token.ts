// https://www.terraform.io/docs/providers/azurerm/d/container_registry_token.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermContainerRegistryTokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/container_registry_token.html#container_registry_name DataAzurermContainerRegistryToken#container_registry_name}
  */
  readonly containerRegistryName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/container_registry_token.html#name DataAzurermContainerRegistryToken#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/container_registry_token.html#resource_group_name DataAzurermContainerRegistryToken#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/container_registry_token.html#timeouts DataAzurermContainerRegistryToken#timeouts}
  */
  readonly timeouts?: DataAzurermContainerRegistryTokenTimeouts;
}
export interface DataAzurermContainerRegistryTokenTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/container_registry_token.html#read DataAzurermContainerRegistryToken#read}
  */
  readonly read?: string;
}

function dataAzurermContainerRegistryTokenTimeoutsToTerraform(struct?: DataAzurermContainerRegistryTokenTimeoutsOutputReference | DataAzurermContainerRegistryTokenTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermContainerRegistryTokenTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/container_registry_token.html azurerm_container_registry_token}
*/
export class DataAzurermContainerRegistryToken extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_container_registry_token";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/container_registry_token.html azurerm_container_registry_token} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermContainerRegistryTokenConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermContainerRegistryTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_container_registry_token',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._containerRegistryName = config.containerRegistryName;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // container_registry_name - computed: false, optional: false, required: true
  private _containerRegistryName?: string; 
  public get containerRegistryName() {
    return this.getStringAttribute('container_registry_name');
  }
  public set containerRegistryName(value: string) {
    this._containerRegistryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerRegistryNameInput() {
    return this._containerRegistryName
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
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

  // scope_map_id - computed: true, optional: false, required: false
  public get scopeMapId() {
    return this.getStringAttribute('scope_map_id');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermContainerRegistryTokenTimeouts | undefined; 
  private __timeoutsOutput = new DataAzurermContainerRegistryTokenTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataAzurermContainerRegistryTokenTimeouts | undefined) {
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
      container_registry_name: cdktf.stringToTerraform(this._containerRegistryName),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: dataAzurermContainerRegistryTokenTimeoutsToTerraform(this._timeouts),
    };
  }
}
