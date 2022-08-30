// https://www.terraform.io/docs/providers/azurerm/d/container_registry_scope_map
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermContainerRegistryScopeMapConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/container_registry_scope_map#container_registry_name DataAzurermContainerRegistryScopeMap#container_registry_name}
  */
  readonly containerRegistryName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/container_registry_scope_map#id DataAzurermContainerRegistryScopeMap#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/container_registry_scope_map#name DataAzurermContainerRegistryScopeMap#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/container_registry_scope_map#resource_group_name DataAzurermContainerRegistryScopeMap#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/container_registry_scope_map#timeouts DataAzurermContainerRegistryScopeMap#timeouts}
  */
  readonly timeouts?: DataAzurermContainerRegistryScopeMapTimeouts;
}
export interface DataAzurermContainerRegistryScopeMapTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/container_registry_scope_map#read DataAzurermContainerRegistryScopeMap#read}
  */
  readonly read?: string;
}

export function dataAzurermContainerRegistryScopeMapTimeoutsToTerraform(struct?: DataAzurermContainerRegistryScopeMapTimeoutsOutputReference | DataAzurermContainerRegistryScopeMapTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermContainerRegistryScopeMapTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataAzurermContainerRegistryScopeMapTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermContainerRegistryScopeMapTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/container_registry_scope_map azurerm_container_registry_scope_map}
*/
export class DataAzurermContainerRegistryScopeMap extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_container_registry_scope_map";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/container_registry_scope_map azurerm_container_registry_scope_map} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermContainerRegistryScopeMapConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermContainerRegistryScopeMapConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_container_registry_scope_map',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '3.20.0',
        providerVersionConstraint: '~> 3.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._containerRegistryName = config.containerRegistryName;
    this._id = config.id;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actions - computed: true, optional: false, required: false
  public get actions() {
    return this.getListAttribute('actions');
  }

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
    return this._containerRegistryName;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
    return this._name;
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
    return this._resourceGroupName;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAzurermContainerRegistryScopeMapTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzurermContainerRegistryScopeMapTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      container_registry_name: cdktf.stringToTerraform(this._containerRegistryName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: dataAzurermContainerRegistryScopeMapTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
