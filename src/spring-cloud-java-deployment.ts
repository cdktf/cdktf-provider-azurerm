// https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_java_deployment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SpringCloudJavaDeploymentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_java_deployment.html#cpu SpringCloudJavaDeployment#cpu}
  */
  readonly cpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_java_deployment.html#environment_variables SpringCloudJavaDeployment#environment_variables}
  */
  readonly environmentVariables?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_java_deployment.html#instance_count SpringCloudJavaDeployment#instance_count}
  */
  readonly instanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_java_deployment.html#jvm_options SpringCloudJavaDeployment#jvm_options}
  */
  readonly jvmOptions?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_java_deployment.html#memory_in_gb SpringCloudJavaDeployment#memory_in_gb}
  */
  readonly memoryInGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_java_deployment.html#name SpringCloudJavaDeployment#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_java_deployment.html#runtime_version SpringCloudJavaDeployment#runtime_version}
  */
  readonly runtimeVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_java_deployment.html#spring_cloud_app_id SpringCloudJavaDeployment#spring_cloud_app_id}
  */
  readonly springCloudAppId: string;
  /**
  * quota block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_java_deployment.html#quota SpringCloudJavaDeployment#quota}
  */
  readonly quota?: SpringCloudJavaDeploymentQuota;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_java_deployment.html#timeouts SpringCloudJavaDeployment#timeouts}
  */
  readonly timeouts?: SpringCloudJavaDeploymentTimeouts;
}
export interface SpringCloudJavaDeploymentQuota {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_java_deployment.html#cpu SpringCloudJavaDeployment#cpu}
  */
  readonly cpu?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_java_deployment.html#memory SpringCloudJavaDeployment#memory}
  */
  readonly memory?: string;
}

function springCloudJavaDeploymentQuotaToTerraform(struct?: SpringCloudJavaDeploymentQuotaOutputReference | SpringCloudJavaDeploymentQuota): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.stringToTerraform(struct!.cpu),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}

export class SpringCloudJavaDeploymentQuotaOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // cpu - computed: true, optional: true, required: false
  private _cpu?: string | undefined; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string | undefined) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu
  }

  // memory - computed: true, optional: true, required: false
  private _memory?: string | undefined; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string | undefined) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory
  }
}
export interface SpringCloudJavaDeploymentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_java_deployment.html#create SpringCloudJavaDeployment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_java_deployment.html#delete SpringCloudJavaDeployment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_java_deployment.html#read SpringCloudJavaDeployment#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_java_deployment.html#update SpringCloudJavaDeployment#update}
  */
  readonly update?: string;
}

function springCloudJavaDeploymentTimeoutsToTerraform(struct?: SpringCloudJavaDeploymentTimeoutsOutputReference | SpringCloudJavaDeploymentTimeouts): any {
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

export class SpringCloudJavaDeploymentTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_java_deployment.html azurerm_spring_cloud_java_deployment}
*/
export class SpringCloudJavaDeployment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_spring_cloud_java_deployment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_java_deployment.html azurerm_spring_cloud_java_deployment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SpringCloudJavaDeploymentConfig
  */
  public constructor(scope: Construct, id: string, config: SpringCloudJavaDeploymentConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_spring_cloud_java_deployment',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cpu = config.cpu;
    this._environmentVariables = config.environmentVariables;
    this._instanceCount = config.instanceCount;
    this._jvmOptions = config.jvmOptions;
    this._memoryInGb = config.memoryInGb;
    this._name = config.name;
    this._runtimeVersion = config.runtimeVersion;
    this._springCloudAppId = config.springCloudAppId;
    this._quota = config.quota;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cpu - computed: true, optional: true, required: false
  private _cpu?: number | undefined; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number | undefined) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu
  }

  // environment_variables - computed: false, optional: true, required: false
  private _environmentVariables?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get environmentVariables() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('environment_variables') as any;
  }
  public set environmentVariables(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._environmentVariables = value;
  }
  public resetEnvironmentVariables() {
    this._environmentVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVariablesInput() {
    return this._environmentVariables
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_count - computed: false, optional: true, required: false
  private _instanceCount?: number | undefined; 
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number | undefined) {
    this._instanceCount = value;
  }
  public resetInstanceCount() {
    this._instanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount
  }

  // jvm_options - computed: false, optional: true, required: false
  private _jvmOptions?: string | undefined; 
  public get jvmOptions() {
    return this.getStringAttribute('jvm_options');
  }
  public set jvmOptions(value: string | undefined) {
    this._jvmOptions = value;
  }
  public resetJvmOptions() {
    this._jvmOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jvmOptionsInput() {
    return this._jvmOptions
  }

  // memory_in_gb - computed: true, optional: true, required: false
  private _memoryInGb?: number | undefined; 
  public get memoryInGb() {
    return this.getNumberAttribute('memory_in_gb');
  }
  public set memoryInGb(value: number | undefined) {
    this._memoryInGb = value;
  }
  public resetMemoryInGb() {
    this._memoryInGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInGbInput() {
    return this._memoryInGb
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

  // runtime_version - computed: false, optional: true, required: false
  private _runtimeVersion?: string | undefined; 
  public get runtimeVersion() {
    return this.getStringAttribute('runtime_version');
  }
  public set runtimeVersion(value: string | undefined) {
    this._runtimeVersion = value;
  }
  public resetRuntimeVersion() {
    this._runtimeVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeVersionInput() {
    return this._runtimeVersion
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
    return this._springCloudAppId
  }

  // quota - computed: false, optional: true, required: false
  private _quota?: SpringCloudJavaDeploymentQuota | undefined; 
  private __quotaOutput = new SpringCloudJavaDeploymentQuotaOutputReference(this as any, "quota", true);
  public get quota() {
    return this.__quotaOutput;
  }
  public putQuota(value: SpringCloudJavaDeploymentQuota | undefined) {
    this._quota = value;
  }
  public resetQuota() {
    this._quota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaInput() {
    return this._quota
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SpringCloudJavaDeploymentTimeouts | undefined; 
  private __timeoutsOutput = new SpringCloudJavaDeploymentTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: SpringCloudJavaDeploymentTimeouts | undefined) {
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
      cpu: cdktf.numberToTerraform(this._cpu),
      environment_variables: cdktf.hashMapper(cdktf.anyToTerraform)(this._environmentVariables),
      instance_count: cdktf.numberToTerraform(this._instanceCount),
      jvm_options: cdktf.stringToTerraform(this._jvmOptions),
      memory_in_gb: cdktf.numberToTerraform(this._memoryInGb),
      name: cdktf.stringToTerraform(this._name),
      runtime_version: cdktf.stringToTerraform(this._runtimeVersion),
      spring_cloud_app_id: cdktf.stringToTerraform(this._springCloudAppId),
      quota: springCloudJavaDeploymentQuotaToTerraform(this._quota),
      timeouts: springCloudJavaDeploymentTimeoutsToTerraform(this._timeouts),
    };
  }
}
