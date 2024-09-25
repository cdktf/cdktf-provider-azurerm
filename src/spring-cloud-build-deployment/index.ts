// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_build_deployment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SpringCloudBuildDeploymentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_build_deployment#addon_json SpringCloudBuildDeployment#addon_json}
  */
  readonly addonJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_build_deployment#application_performance_monitoring_ids SpringCloudBuildDeployment#application_performance_monitoring_ids}
  */
  readonly applicationPerformanceMonitoringIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_build_deployment#build_result_id SpringCloudBuildDeployment#build_result_id}
  */
  readonly buildResultId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_build_deployment#environment_variables SpringCloudBuildDeployment#environment_variables}
  */
  readonly environmentVariables?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_build_deployment#id SpringCloudBuildDeployment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_build_deployment#instance_count SpringCloudBuildDeployment#instance_count}
  */
  readonly instanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_build_deployment#name SpringCloudBuildDeployment#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_build_deployment#spring_cloud_app_id SpringCloudBuildDeployment#spring_cloud_app_id}
  */
  readonly springCloudAppId: string;
  /**
  * quota block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_build_deployment#quota SpringCloudBuildDeployment#quota}
  */
  readonly quota?: SpringCloudBuildDeploymentQuota;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_build_deployment#timeouts SpringCloudBuildDeployment#timeouts}
  */
  readonly timeouts?: SpringCloudBuildDeploymentTimeouts;
}
export interface SpringCloudBuildDeploymentQuota {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_build_deployment#cpu SpringCloudBuildDeployment#cpu}
  */
  readonly cpu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_build_deployment#memory SpringCloudBuildDeployment#memory}
  */
  readonly memory?: string;
}

export function springCloudBuildDeploymentQuotaToTerraform(struct?: SpringCloudBuildDeploymentQuotaOutputReference | SpringCloudBuildDeploymentQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.stringToTerraform(struct!.cpu),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}


export function springCloudBuildDeploymentQuotaToHclTerraform(struct?: SpringCloudBuildDeploymentQuotaOutputReference | SpringCloudBuildDeploymentQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.stringToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory: {
      value: cdktf.stringToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpringCloudBuildDeploymentQuotaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpringCloudBuildDeploymentQuota | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpringCloudBuildDeploymentQuota | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpu = undefined;
      this._memory = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpu = value.cpu;
      this._memory = value.memory;
    }
  }

  // cpu - computed: true, optional: true, required: false
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // memory - computed: true, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }
}
export interface SpringCloudBuildDeploymentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_build_deployment#create SpringCloudBuildDeployment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_build_deployment#delete SpringCloudBuildDeployment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_build_deployment#read SpringCloudBuildDeployment#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_build_deployment#update SpringCloudBuildDeployment#update}
  */
  readonly update?: string;
}

export function springCloudBuildDeploymentTimeoutsToTerraform(struct?: SpringCloudBuildDeploymentTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function springCloudBuildDeploymentTimeoutsToHclTerraform(struct?: SpringCloudBuildDeploymentTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpringCloudBuildDeploymentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpringCloudBuildDeploymentTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpringCloudBuildDeploymentTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_build_deployment azurerm_spring_cloud_build_deployment}
*/
export class SpringCloudBuildDeployment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_spring_cloud_build_deployment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SpringCloudBuildDeployment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SpringCloudBuildDeployment to import
  * @param importFromId The id of the existing SpringCloudBuildDeployment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_build_deployment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SpringCloudBuildDeployment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_spring_cloud_build_deployment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_build_deployment azurerm_spring_cloud_build_deployment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SpringCloudBuildDeploymentConfig
  */
  public constructor(scope: Construct, id: string, config: SpringCloudBuildDeploymentConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_spring_cloud_build_deployment',
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
    this._addonJson = config.addonJson;
    this._applicationPerformanceMonitoringIds = config.applicationPerformanceMonitoringIds;
    this._buildResultId = config.buildResultId;
    this._environmentVariables = config.environmentVariables;
    this._id = config.id;
    this._instanceCount = config.instanceCount;
    this._name = config.name;
    this._springCloudAppId = config.springCloudAppId;
    this._quota.internalValue = config.quota;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addon_json - computed: true, optional: true, required: false
  private _addonJson?: string; 
  public get addonJson() {
    return this.getStringAttribute('addon_json');
  }
  public set addonJson(value: string) {
    this._addonJson = value;
  }
  public resetAddonJson() {
    this._addonJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addonJsonInput() {
    return this._addonJson;
  }

  // application_performance_monitoring_ids - computed: false, optional: true, required: false
  private _applicationPerformanceMonitoringIds?: string[]; 
  public get applicationPerformanceMonitoringIds() {
    return this.getListAttribute('application_performance_monitoring_ids');
  }
  public set applicationPerformanceMonitoringIds(value: string[]) {
    this._applicationPerformanceMonitoringIds = value;
  }
  public resetApplicationPerformanceMonitoringIds() {
    this._applicationPerformanceMonitoringIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationPerformanceMonitoringIdsInput() {
    return this._applicationPerformanceMonitoringIds;
  }

  // build_result_id - computed: false, optional: false, required: true
  private _buildResultId?: string; 
  public get buildResultId() {
    return this.getStringAttribute('build_result_id');
  }
  public set buildResultId(value: string) {
    this._buildResultId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get buildResultIdInput() {
    return this._buildResultId;
  }

  // environment_variables - computed: false, optional: true, required: false
  private _environmentVariables?: { [key: string]: string }; 
  public get environmentVariables() {
    return this.getStringMapAttribute('environment_variables');
  }
  public set environmentVariables(value: { [key: string]: string }) {
    this._environmentVariables = value;
  }
  public resetEnvironmentVariables() {
    this._environmentVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVariablesInput() {
    return this._environmentVariables;
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

  // instance_count - computed: false, optional: true, required: false
  private _instanceCount?: number; 
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number) {
    this._instanceCount = value;
  }
  public resetInstanceCount() {
    this._instanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
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

  // spring_cloud_app_id - computed: false, optional: false, required: true
  private _springCloudAppId?: string; 
  public get springCloudAppId() {
    return this.getStringAttribute('spring_cloud_app_id');
  }
  public set springCloudAppId(value: string) {
    this._springCloudAppId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get springCloudAppIdInput() {
    return this._springCloudAppId;
  }

  // quota - computed: false, optional: true, required: false
  private _quota = new SpringCloudBuildDeploymentQuotaOutputReference(this, "quota");
  public get quota() {
    return this._quota;
  }
  public putQuota(value: SpringCloudBuildDeploymentQuota) {
    this._quota.internalValue = value;
  }
  public resetQuota() {
    this._quota.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaInput() {
    return this._quota.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SpringCloudBuildDeploymentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SpringCloudBuildDeploymentTimeouts) {
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
      addon_json: cdktf.stringToTerraform(this._addonJson),
      application_performance_monitoring_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._applicationPerformanceMonitoringIds),
      build_result_id: cdktf.stringToTerraform(this._buildResultId),
      environment_variables: cdktf.hashMapper(cdktf.stringToTerraform)(this._environmentVariables),
      id: cdktf.stringToTerraform(this._id),
      instance_count: cdktf.numberToTerraform(this._instanceCount),
      name: cdktf.stringToTerraform(this._name),
      spring_cloud_app_id: cdktf.stringToTerraform(this._springCloudAppId),
      quota: springCloudBuildDeploymentQuotaToTerraform(this._quota.internalValue),
      timeouts: springCloudBuildDeploymentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      addon_json: {
        value: cdktf.stringToHclTerraform(this._addonJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_performance_monitoring_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._applicationPerformanceMonitoringIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      build_result_id: {
        value: cdktf.stringToHclTerraform(this._buildResultId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_variables: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._environmentVariables),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_count: {
        value: cdktf.numberToHclTerraform(this._instanceCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spring_cloud_app_id: {
        value: cdktf.stringToHclTerraform(this._springCloudAppId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quota: {
        value: springCloudBuildDeploymentQuotaToHclTerraform(this._quota.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SpringCloudBuildDeploymentQuotaList",
      },
      timeouts: {
        value: springCloudBuildDeploymentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SpringCloudBuildDeploymentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
