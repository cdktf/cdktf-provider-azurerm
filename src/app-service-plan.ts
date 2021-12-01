// https://www.terraform.io/docs/providers/azurerm/r/app_service_plan.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppServicePlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_plan.html#app_service_environment_id AppServicePlan#app_service_environment_id}
  */
  readonly appServiceEnvironmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_plan.html#is_xenon AppServicePlan#is_xenon}
  */
  readonly isXenon?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_plan.html#kind AppServicePlan#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_plan.html#location AppServicePlan#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_plan.html#maximum_elastic_worker_count AppServicePlan#maximum_elastic_worker_count}
  */
  readonly maximumElasticWorkerCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_plan.html#name AppServicePlan#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_plan.html#per_site_scaling AppServicePlan#per_site_scaling}
  */
  readonly perSiteScaling?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_plan.html#reserved AppServicePlan#reserved}
  */
  readonly reserved?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_plan.html#resource_group_name AppServicePlan#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_plan.html#tags AppServicePlan#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_plan.html#zone_redundant AppServicePlan#zone_redundant}
  */
  readonly zoneRedundant?: boolean | cdktf.IResolvable;
  /**
  * sku block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_plan.html#sku AppServicePlan#sku}
  */
  readonly sku: AppServicePlanSku;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_plan.html#timeouts AppServicePlan#timeouts}
  */
  readonly timeouts?: AppServicePlanTimeouts;
}
export interface AppServicePlanSku {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_plan.html#capacity AppServicePlan#capacity}
  */
  readonly capacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_plan.html#size AppServicePlan#size}
  */
  readonly size: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_plan.html#tier AppServicePlan#tier}
  */
  readonly tier: string;
}

export function appServicePlanSkuToTerraform(struct?: AppServicePlanSkuOutputReference | AppServicePlanSku): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity: cdktf.numberToTerraform(struct!.capacity),
    size: cdktf.stringToTerraform(struct!.size),
    tier: cdktf.stringToTerraform(struct!.tier),
  }
}

export class AppServicePlanSkuOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): AppServicePlanSku | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._capacity) {
      hasAnyValues = true;
      internalValueResult.capacity = this._capacity;
    }
    if (this._size) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._tier) {
      hasAnyValues = true;
      internalValueResult.tier = this._tier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppServicePlanSku | undefined) {
    if (value === undefined) {
      this._capacity = undefined;
      this._size = undefined;
      this._tier = undefined;
    }
    else {
      this._capacity = value.capacity;
      this._size = value.size;
      this._tier = value.tier;
    }
  }

  // capacity - computed: true, optional: true, required: false
  private _capacity?: number; 
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }
  public set capacity(value: number) {
    this._capacity = value;
  }
  public resetCapacity() {
    this._capacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
  }

  // size - computed: false, optional: false, required: true
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // tier - computed: false, optional: false, required: true
  private _tier?: string; 
  public get tier() {
    return this.getStringAttribute('tier');
  }
  public set tier(value: string) {
    this._tier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier;
  }
}
export interface AppServicePlanTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_plan.html#create AppServicePlan#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_plan.html#delete AppServicePlan#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_plan.html#read AppServicePlan#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_plan.html#update AppServicePlan#update}
  */
  readonly update?: string;
}

export function appServicePlanTimeoutsToTerraform(struct?: AppServicePlanTimeoutsOutputReference | AppServicePlanTimeouts): any {
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

export class AppServicePlanTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): AppServicePlanTimeouts | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._create) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppServicePlanTimeouts | undefined) {
    if (value === undefined) {
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else {
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_plan.html azurerm_app_service_plan}
*/
export class AppServicePlan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_app_service_plan";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_plan.html azurerm_app_service_plan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppServicePlanConfig
  */
  public constructor(scope: Construct, id: string, config: AppServicePlanConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_app_service_plan',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._appServiceEnvironmentId = config.appServiceEnvironmentId;
    this._isXenon = config.isXenon;
    this._kind = config.kind;
    this._location = config.location;
    this._maximumElasticWorkerCount = config.maximumElasticWorkerCount;
    this._name = config.name;
    this._perSiteScaling = config.perSiteScaling;
    this._reserved = config.reserved;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._zoneRedundant = config.zoneRedundant;
    this._sku.internalValue = config.sku;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_service_environment_id - computed: false, optional: true, required: false
  private _appServiceEnvironmentId?: string; 
  public get appServiceEnvironmentId() {
    return this.getStringAttribute('app_service_environment_id');
  }
  public set appServiceEnvironmentId(value: string) {
    this._appServiceEnvironmentId = value;
  }
  public resetAppServiceEnvironmentId() {
    this._appServiceEnvironmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appServiceEnvironmentIdInput() {
    return this._appServiceEnvironmentId;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_xenon - computed: false, optional: true, required: false
  private _isXenon?: boolean | cdktf.IResolvable; 
  public get isXenon() {
    return this.getBooleanAttribute('is_xenon') as any;
  }
  public set isXenon(value: boolean | cdktf.IResolvable) {
    this._isXenon = value;
  }
  public resetIsXenon() {
    this._isXenon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isXenonInput() {
    return this._isXenon;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // maximum_elastic_worker_count - computed: true, optional: true, required: false
  private _maximumElasticWorkerCount?: number; 
  public get maximumElasticWorkerCount() {
    return this.getNumberAttribute('maximum_elastic_worker_count');
  }
  public set maximumElasticWorkerCount(value: number) {
    this._maximumElasticWorkerCount = value;
  }
  public resetMaximumElasticWorkerCount() {
    this._maximumElasticWorkerCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumElasticWorkerCountInput() {
    return this._maximumElasticWorkerCount;
  }

  // maximum_number_of_workers - computed: true, optional: false, required: false
  public get maximumNumberOfWorkers() {
    return this.getNumberAttribute('maximum_number_of_workers');
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

  // per_site_scaling - computed: false, optional: true, required: false
  private _perSiteScaling?: boolean | cdktf.IResolvable; 
  public get perSiteScaling() {
    return this.getBooleanAttribute('per_site_scaling') as any;
  }
  public set perSiteScaling(value: boolean | cdktf.IResolvable) {
    this._perSiteScaling = value;
  }
  public resetPerSiteScaling() {
    this._perSiteScaling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSiteScalingInput() {
    return this._perSiteScaling;
  }

  // reserved - computed: false, optional: true, required: false
  private _reserved?: boolean | cdktf.IResolvable; 
  public get reserved() {
    return this.getBooleanAttribute('reserved') as any;
  }
  public set reserved(value: boolean | cdktf.IResolvable) {
    this._reserved = value;
  }
  public resetReserved() {
    this._reserved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedInput() {
    return this._reserved;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // zone_redundant - computed: false, optional: true, required: false
  private _zoneRedundant?: boolean | cdktf.IResolvable; 
  public get zoneRedundant() {
    return this.getBooleanAttribute('zone_redundant') as any;
  }
  public set zoneRedundant(value: boolean | cdktf.IResolvable) {
    this._zoneRedundant = value;
  }
  public resetZoneRedundant() {
    this._zoneRedundant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneRedundantInput() {
    return this._zoneRedundant;
  }

  // sku - computed: false, optional: false, required: true
  private _sku = new AppServicePlanSkuOutputReference(this as any, "sku", true);
  public get sku() {
    return this._sku;
  }
  public putSku(value: AppServicePlanSku) {
    this._sku.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AppServicePlanTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AppServicePlanTimeouts) {
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
      app_service_environment_id: cdktf.stringToTerraform(this._appServiceEnvironmentId),
      is_xenon: cdktf.booleanToTerraform(this._isXenon),
      kind: cdktf.stringToTerraform(this._kind),
      location: cdktf.stringToTerraform(this._location),
      maximum_elastic_worker_count: cdktf.numberToTerraform(this._maximumElasticWorkerCount),
      name: cdktf.stringToTerraform(this._name),
      per_site_scaling: cdktf.booleanToTerraform(this._perSiteScaling),
      reserved: cdktf.booleanToTerraform(this._reserved),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      zone_redundant: cdktf.booleanToTerraform(this._zoneRedundant),
      sku: appServicePlanSkuToTerraform(this._sku.internalValue),
      timeouts: appServicePlanTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
