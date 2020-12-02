// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_advisor_recommendations.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataAzurermAdvisorRecommendationsConfig extends TerraformMetaArguments {
  readonly filterByCategory?: string[];
  readonly filterByResourceGroups?: string[];
  /** timeouts block */
  readonly timeouts?: DataAzurermAdvisorRecommendationsTimeouts;
}
export class DataAzurermAdvisorRecommendationsRecommendations extends ComplexComputedList {

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
  readonly read?: string;
}

// Resource

export class DataAzurermAdvisorRecommendations extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _filterByCategory?: string[];
  public get filterByCategory() {
    return this.getListAttribute('filter_by_category');
  }
  public set filterByCategory(value: string[] ) {
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
  private _filterByResourceGroups?: string[];
  public get filterByResourceGroups() {
    return this.getListAttribute('filter_by_resource_groups');
  }
  public set filterByResourceGroups(value: string[] ) {
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
  private _timeouts?: DataAzurermAdvisorRecommendationsTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermAdvisorRecommendationsTimeouts ) {
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
      filter_by_category: this._filterByCategory,
      filter_by_resource_groups: this._filterByResourceGroups,
      timeouts: this._timeouts,
    };
  }
}
