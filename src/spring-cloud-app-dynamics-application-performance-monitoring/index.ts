// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#agent_account_access_key SpringCloudAppDynamicsApplicationPerformanceMonitoring#agent_account_access_key}
  */
  readonly agentAccountAccessKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#agent_account_name SpringCloudAppDynamicsApplicationPerformanceMonitoring#agent_account_name}
  */
  readonly agentAccountName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#agent_application_name SpringCloudAppDynamicsApplicationPerformanceMonitoring#agent_application_name}
  */
  readonly agentApplicationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#agent_node_name SpringCloudAppDynamicsApplicationPerformanceMonitoring#agent_node_name}
  */
  readonly agentNodeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#agent_tier_name SpringCloudAppDynamicsApplicationPerformanceMonitoring#agent_tier_name}
  */
  readonly agentTierName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#agent_unique_host_id SpringCloudAppDynamicsApplicationPerformanceMonitoring#agent_unique_host_id}
  */
  readonly agentUniqueHostId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#controller_host_name SpringCloudAppDynamicsApplicationPerformanceMonitoring#controller_host_name}
  */
  readonly controllerHostName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#controller_port SpringCloudAppDynamicsApplicationPerformanceMonitoring#controller_port}
  */
  readonly controllerPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#controller_ssl_enabled SpringCloudAppDynamicsApplicationPerformanceMonitoring#controller_ssl_enabled}
  */
  readonly controllerSslEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#globally_enabled SpringCloudAppDynamicsApplicationPerformanceMonitoring#globally_enabled}
  */
  readonly globallyEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#id SpringCloudAppDynamicsApplicationPerformanceMonitoring#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#name SpringCloudAppDynamicsApplicationPerformanceMonitoring#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#spring_cloud_service_id SpringCloudAppDynamicsApplicationPerformanceMonitoring#spring_cloud_service_id}
  */
  readonly springCloudServiceId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#timeouts SpringCloudAppDynamicsApplicationPerformanceMonitoring#timeouts}
  */
  readonly timeouts?: SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts;
}
export interface SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#create SpringCloudAppDynamicsApplicationPerformanceMonitoring#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#delete SpringCloudAppDynamicsApplicationPerformanceMonitoring#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#read SpringCloudAppDynamicsApplicationPerformanceMonitoring#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#update SpringCloudAppDynamicsApplicationPerformanceMonitoring#update}
  */
  readonly update?: string;
}

export function springCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsToTerraform(struct?: SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts | cdktf.IResolvable): any {
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


export function springCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsToHclTerraform(struct?: SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts | cdktf.IResolvable): any {
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

export class SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring azurerm_spring_cloud_app_dynamics_application_performance_monitoring}
*/
export class SpringCloudAppDynamicsApplicationPerformanceMonitoring extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_spring_cloud_app_dynamics_application_performance_monitoring";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SpringCloudAppDynamicsApplicationPerformanceMonitoring resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SpringCloudAppDynamicsApplicationPerformanceMonitoring to import
  * @param importFromId The id of the existing SpringCloudAppDynamicsApplicationPerformanceMonitoring that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SpringCloudAppDynamicsApplicationPerformanceMonitoring to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_spring_cloud_app_dynamics_application_performance_monitoring", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring azurerm_spring_cloud_app_dynamics_application_performance_monitoring} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig
  */
  public constructor(scope: Construct, id: string, config: SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_spring_cloud_app_dynamics_application_performance_monitoring',
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
    this._agentAccountAccessKey = config.agentAccountAccessKey;
    this._agentAccountName = config.agentAccountName;
    this._agentApplicationName = config.agentApplicationName;
    this._agentNodeName = config.agentNodeName;
    this._agentTierName = config.agentTierName;
    this._agentUniqueHostId = config.agentUniqueHostId;
    this._controllerHostName = config.controllerHostName;
    this._controllerPort = config.controllerPort;
    this._controllerSslEnabled = config.controllerSslEnabled;
    this._globallyEnabled = config.globallyEnabled;
    this._id = config.id;
    this._name = config.name;
    this._springCloudServiceId = config.springCloudServiceId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_account_access_key - computed: false, optional: false, required: true
  private _agentAccountAccessKey?: string; 
  public get agentAccountAccessKey() {
    return this.getStringAttribute('agent_account_access_key');
  }
  public set agentAccountAccessKey(value: string) {
    this._agentAccountAccessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentAccountAccessKeyInput() {
    return this._agentAccountAccessKey;
  }

  // agent_account_name - computed: false, optional: false, required: true
  private _agentAccountName?: string; 
  public get agentAccountName() {
    return this.getStringAttribute('agent_account_name');
  }
  public set agentAccountName(value: string) {
    this._agentAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentAccountNameInput() {
    return this._agentAccountName;
  }

  // agent_application_name - computed: false, optional: true, required: false
  private _agentApplicationName?: string; 
  public get agentApplicationName() {
    return this.getStringAttribute('agent_application_name');
  }
  public set agentApplicationName(value: string) {
    this._agentApplicationName = value;
  }
  public resetAgentApplicationName() {
    this._agentApplicationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentApplicationNameInput() {
    return this._agentApplicationName;
  }

  // agent_node_name - computed: false, optional: true, required: false
  private _agentNodeName?: string; 
  public get agentNodeName() {
    return this.getStringAttribute('agent_node_name');
  }
  public set agentNodeName(value: string) {
    this._agentNodeName = value;
  }
  public resetAgentNodeName() {
    this._agentNodeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentNodeNameInput() {
    return this._agentNodeName;
  }

  // agent_tier_name - computed: false, optional: true, required: false
  private _agentTierName?: string; 
  public get agentTierName() {
    return this.getStringAttribute('agent_tier_name');
  }
  public set agentTierName(value: string) {
    this._agentTierName = value;
  }
  public resetAgentTierName() {
    this._agentTierName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentTierNameInput() {
    return this._agentTierName;
  }

  // agent_unique_host_id - computed: false, optional: true, required: false
  private _agentUniqueHostId?: string; 
  public get agentUniqueHostId() {
    return this.getStringAttribute('agent_unique_host_id');
  }
  public set agentUniqueHostId(value: string) {
    this._agentUniqueHostId = value;
  }
  public resetAgentUniqueHostId() {
    this._agentUniqueHostId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentUniqueHostIdInput() {
    return this._agentUniqueHostId;
  }

  // controller_host_name - computed: false, optional: false, required: true
  private _controllerHostName?: string; 
  public get controllerHostName() {
    return this.getStringAttribute('controller_host_name');
  }
  public set controllerHostName(value: string) {
    this._controllerHostName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerHostNameInput() {
    return this._controllerHostName;
  }

  // controller_port - computed: false, optional: true, required: false
  private _controllerPort?: number; 
  public get controllerPort() {
    return this.getNumberAttribute('controller_port');
  }
  public set controllerPort(value: number) {
    this._controllerPort = value;
  }
  public resetControllerPort() {
    this._controllerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerPortInput() {
    return this._controllerPort;
  }

  // controller_ssl_enabled - computed: false, optional: true, required: false
  private _controllerSslEnabled?: boolean | cdktf.IResolvable; 
  public get controllerSslEnabled() {
    return this.getBooleanAttribute('controller_ssl_enabled');
  }
  public set controllerSslEnabled(value: boolean | cdktf.IResolvable) {
    this._controllerSslEnabled = value;
  }
  public resetControllerSslEnabled() {
    this._controllerSslEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerSslEnabledInput() {
    return this._controllerSslEnabled;
  }

  // globally_enabled - computed: false, optional: true, required: false
  private _globallyEnabled?: boolean | cdktf.IResolvable; 
  public get globallyEnabled() {
    return this.getBooleanAttribute('globally_enabled');
  }
  public set globallyEnabled(value: boolean | cdktf.IResolvable) {
    this._globallyEnabled = value;
  }
  public resetGloballyEnabled() {
    this._globallyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globallyEnabledInput() {
    return this._globallyEnabled;
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

  // spring_cloud_service_id - computed: false, optional: false, required: true
  private _springCloudServiceId?: string; 
  public get springCloudServiceId() {
    return this.getStringAttribute('spring_cloud_service_id');
  }
  public set springCloudServiceId(value: string) {
    this._springCloudServiceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get springCloudServiceIdInput() {
    return this._springCloudServiceId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts) {
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
      agent_account_access_key: cdktf.stringToTerraform(this._agentAccountAccessKey),
      agent_account_name: cdktf.stringToTerraform(this._agentAccountName),
      agent_application_name: cdktf.stringToTerraform(this._agentApplicationName),
      agent_node_name: cdktf.stringToTerraform(this._agentNodeName),
      agent_tier_name: cdktf.stringToTerraform(this._agentTierName),
      agent_unique_host_id: cdktf.stringToTerraform(this._agentUniqueHostId),
      controller_host_name: cdktf.stringToTerraform(this._controllerHostName),
      controller_port: cdktf.numberToTerraform(this._controllerPort),
      controller_ssl_enabled: cdktf.booleanToTerraform(this._controllerSslEnabled),
      globally_enabled: cdktf.booleanToTerraform(this._globallyEnabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      spring_cloud_service_id: cdktf.stringToTerraform(this._springCloudServiceId),
      timeouts: springCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent_account_access_key: {
        value: cdktf.stringToHclTerraform(this._agentAccountAccessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      agent_account_name: {
        value: cdktf.stringToHclTerraform(this._agentAccountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      agent_application_name: {
        value: cdktf.stringToHclTerraform(this._agentApplicationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      agent_node_name: {
        value: cdktf.stringToHclTerraform(this._agentNodeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      agent_tier_name: {
        value: cdktf.stringToHclTerraform(this._agentTierName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      agent_unique_host_id: {
        value: cdktf.stringToHclTerraform(this._agentUniqueHostId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      controller_host_name: {
        value: cdktf.stringToHclTerraform(this._controllerHostName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      controller_port: {
        value: cdktf.numberToHclTerraform(this._controllerPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      controller_ssl_enabled: {
        value: cdktf.booleanToHclTerraform(this._controllerSslEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      globally_enabled: {
        value: cdktf.booleanToHclTerraform(this._globallyEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spring_cloud_service_id: {
        value: cdktf.stringToHclTerraform(this._springCloudServiceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: springCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
