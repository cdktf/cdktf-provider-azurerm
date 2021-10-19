// https://www.terraform.io/docs/providers/azurerm/d/resources.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermResourcesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/resources.html#name DataAzurermResources#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/resources.html#required_tags DataAzurermResources#required_tags}
  */
  readonly requiredTags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/resources.html#resource_group_name DataAzurermResources#resource_group_name}
  */
  readonly resourceGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/resources.html#type DataAzurermResources#type}
  */
  readonly type?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/resources.html#timeouts DataAzurermResources#timeouts}
  */
  readonly timeouts?: DataAzurermResourcesTimeouts;
}
export class DataAzurermResourcesResources extends cdktf.ComplexComputedList {

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataAzurermResourcesTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/resources.html#read DataAzurermResources#read}
  */
  readonly read?: string;
}

function dataAzurermResourcesTimeoutsToTerraform(struct?: DataAzurermResourcesTimeoutsOutputReference | DataAzurermResourcesTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermResourcesTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/resources.html azurerm_resources}
*/
export class DataAzurermResources extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_resources";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/resources.html azurerm_resources} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermResourcesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAzurermResourcesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'azurerm_resources',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._requiredTags = config.requiredTags;
    this._resourceGroupName = config.resourceGroupName;
    this._type = config.type;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // required_tags - computed: false, optional: true, required: false
  private _requiredTags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get requiredTags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('required_tags') as any;
  }
  public set requiredTags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._requiredTags = value;
  }
  public resetRequiredTags() {
    this._requiredTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredTagsInput() {
    return this._requiredTags
  }

  // resource_group_name - computed: true, optional: true, required: false
  private _resourceGroupName?: string | undefined; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string | undefined) {
    this._resourceGroupName = value;
  }
  public resetResourceGroupName() {
    this._resourceGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName
  }

  // resources - computed: true, optional: false, required: false
  public resources(index: string) {
    return new DataAzurermResourcesResources(this, 'resources', index);
  }

  // type - computed: true, optional: true, required: false
  private _type?: string | undefined; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string | undefined) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermResourcesTimeouts | undefined; 
  private __timeoutsOutput = new DataAzurermResourcesTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataAzurermResourcesTimeouts | undefined) {
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
      name: cdktf.stringToTerraform(this._name),
      required_tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._requiredTags),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      type: cdktf.stringToTerraform(this._type),
      timeouts: dataAzurermResourcesTimeoutsToTerraform(this._timeouts),
    };
  }
}
