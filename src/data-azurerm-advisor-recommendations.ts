// https://www.terraform.io/docs/providers/azurerm/d/advisor_recommendations.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermAdvisorRecommendationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/advisor_recommendations.html#filter_by_category DataAzurermAdvisorRecommendations#filter_by_category}
  */
  readonly filterByCategory?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/advisor_recommendations.html#filter_by_resource_groups DataAzurermAdvisorRecommendations#filter_by_resource_groups}
  */
  readonly filterByResourceGroups?: string[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/advisor_recommendations.html#timeouts DataAzurermAdvisorRecommendations#timeouts}
  */
  readonly timeouts?: DataAzurermAdvisorRecommendationsTimeouts;
}
export class DataAzurermAdvisorRecommendationsRecommendations extends cdktf.ComplexComputedList {

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
    return this.getListAttribute('suppression_names');
  }

  // updated_time - computed: true, optional: false, required: false
  public get updatedTime() {
    return this.getStringAttribute('updated_time');
  }
}
export interface DataAzurermAdvisorRecommendationsTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/advisor_recommendations.html#read DataAzurermAdvisorRecommendations#read}
  */
  readonly read?: string;
}

function dataAzurermAdvisorRecommendationsTimeoutsToTerraform(struct?: DataAzurermAdvisorRecommendationsTimeoutsOutputReference | DataAzurermAdvisorRecommendationsTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermAdvisorRecommendationsTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/advisor_recommendations.html azurerm_advisor_recommendations}
*/
export class DataAzurermAdvisorRecommendations extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_advisor_recommendations";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/advisor_recommendations.html azurerm_advisor_recommendations} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermAdvisorRecommendationsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAzurermAdvisorRecommendationsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'azurerm_advisor_recommendations',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._filterByCategory = config.filterByCategory;
    this._filterByResourceGroups = config.filterByResourceGroups;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filter_by_category - computed: false, optional: true, required: false
  private _filterByCategory?: string[] | undefined; 
  public get filterByCategory() {
    return this.getListAttribute('filter_by_category');
  }
  public set filterByCategory(value: string[] | undefined) {
    this._filterByCategory = value;
  }
  public resetFilterByCategory() {
    this._filterByCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterByCategoryInput() {
    return this._filterByCategory
  }

  // filter_by_resource_groups - computed: false, optional: true, required: false
  private _filterByResourceGroups?: string[] | undefined; 
  public get filterByResourceGroups() {
    return this.getListAttribute('filter_by_resource_groups');
  }
  public set filterByResourceGroups(value: string[] | undefined) {
    this._filterByResourceGroups = value;
  }
  public resetFilterByResourceGroups() {
    this._filterByResourceGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterByResourceGroupsInput() {
    return this._filterByResourceGroups
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // recommendations - computed: true, optional: false, required: false
  public recommendations(index: string) {
    return new DataAzurermAdvisorRecommendationsRecommendations(this, 'recommendations', index);
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermAdvisorRecommendationsTimeouts | undefined; 
  private __timeoutsOutput = new DataAzurermAdvisorRecommendationsTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataAzurermAdvisorRecommendationsTimeouts | undefined) {
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
      filter_by_category: cdktf.listMapper(cdktf.stringToTerraform)(this._filterByCategory),
      filter_by_resource_groups: cdktf.listMapper(cdktf.stringToTerraform)(this._filterByResourceGroups),
      timeouts: dataAzurermAdvisorRecommendationsTimeoutsToTerraform(this._timeouts),
    };
  }
}
