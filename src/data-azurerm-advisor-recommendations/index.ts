// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/advisor_recommendations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermAdvisorRecommendationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/advisor_recommendations#filter_by_category DataAzurermAdvisorRecommendations#filter_by_category}
  */
  readonly filterByCategory?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/advisor_recommendations#filter_by_resource_groups DataAzurermAdvisorRecommendations#filter_by_resource_groups}
  */
  readonly filterByResourceGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/advisor_recommendations#id DataAzurermAdvisorRecommendations#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/advisor_recommendations#timeouts DataAzurermAdvisorRecommendations#timeouts}
  */
  readonly timeouts?: DataAzurermAdvisorRecommendationsTimeouts;
}
export interface DataAzurermAdvisorRecommendationsRecommendations {
}

export function dataAzurermAdvisorRecommendationsRecommendationsToTerraform(struct?: DataAzurermAdvisorRecommendationsRecommendations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermAdvisorRecommendationsRecommendationsToHclTerraform(struct?: DataAzurermAdvisorRecommendationsRecommendations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermAdvisorRecommendationsRecommendationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermAdvisorRecommendationsRecommendations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermAdvisorRecommendationsRecommendations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // impact - computed: true, optional: false, required: false
  public get impact() {
    return this.getStringAttribute('impact');
  }

  // recommendation_name - computed: true, optional: false, required: false
  public get recommendationName() {
    return this.getStringAttribute('recommendation_name');
  }

  // recommendation_type_id - computed: true, optional: false, required: false
  public get recommendationTypeId() {
    return this.getStringAttribute('recommendation_type_id');
  }

  // resource_name - computed: true, optional: false, required: false
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // suppression_names - computed: true, optional: false, required: false
  public get suppressionNames() {
    return cdktf.Fn.tolist(this.getListAttribute('suppression_names'));
  }

  // updated_time - computed: true, optional: false, required: false
  public get updatedTime() {
    return this.getStringAttribute('updated_time');
  }
}

export class DataAzurermAdvisorRecommendationsRecommendationsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAzurermAdvisorRecommendationsRecommendationsOutputReference {
    return new DataAzurermAdvisorRecommendationsRecommendationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermAdvisorRecommendationsTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/advisor_recommendations#read DataAzurermAdvisorRecommendations#read}
  */
  readonly read?: string;
}

export function dataAzurermAdvisorRecommendationsTimeoutsToTerraform(struct?: DataAzurermAdvisorRecommendationsTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataAzurermAdvisorRecommendationsTimeoutsToHclTerraform(struct?: DataAzurermAdvisorRecommendationsTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAzurermAdvisorRecommendationsTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAzurermAdvisorRecommendationsTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataAzurermAdvisorRecommendationsTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/advisor_recommendations azurerm_advisor_recommendations}
*/
export class DataAzurermAdvisorRecommendations extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_advisor_recommendations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAzurermAdvisorRecommendations resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAzurermAdvisorRecommendations to import
  * @param importFromId The id of the existing DataAzurermAdvisorRecommendations that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/advisor_recommendations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAzurermAdvisorRecommendations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_advisor_recommendations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/advisor_recommendations azurerm_advisor_recommendations} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermAdvisorRecommendationsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAzurermAdvisorRecommendationsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'azurerm_advisor_recommendations',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.3.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filterByCategory = config.filterByCategory;
    this._filterByResourceGroups = config.filterByResourceGroups;
    this._id = config.id;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filter_by_category - computed: false, optional: true, required: false
  private _filterByCategory?: string[]; 
  public get filterByCategory() {
    return cdktf.Fn.tolist(this.getListAttribute('filter_by_category'));
  }
  public set filterByCategory(value: string[]) {
    this._filterByCategory = value;
  }
  public resetFilterByCategory() {
    this._filterByCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterByCategoryInput() {
    return this._filterByCategory;
  }

  // filter_by_resource_groups - computed: false, optional: true, required: false
  private _filterByResourceGroups?: string[]; 
  public get filterByResourceGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('filter_by_resource_groups'));
  }
  public set filterByResourceGroups(value: string[]) {
    this._filterByResourceGroups = value;
  }
  public resetFilterByResourceGroups() {
    this._filterByResourceGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterByResourceGroupsInput() {
    return this._filterByResourceGroups;
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

  // recommendations - computed: true, optional: false, required: false
  private _recommendations = new DataAzurermAdvisorRecommendationsRecommendationsList(this, "recommendations", false);
  public get recommendations() {
    return this._recommendations;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAzurermAdvisorRecommendationsTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzurermAdvisorRecommendationsTimeouts) {
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
      filter_by_category: cdktf.listMapper(cdktf.stringToTerraform, false)(this._filterByCategory),
      filter_by_resource_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._filterByResourceGroups),
      id: cdktf.stringToTerraform(this._id),
      timeouts: dataAzurermAdvisorRecommendationsTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter_by_category: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._filterByCategory),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      filter_by_resource_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._filterByResourceGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dataAzurermAdvisorRecommendationsTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataAzurermAdvisorRecommendationsTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
