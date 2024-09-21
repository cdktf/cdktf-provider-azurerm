// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_app_environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContainerAppEnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Application Insights connection string used by Dapr to export Service to Service communication telemetry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_app_environment#dapr_application_insights_connection_string ContainerAppEnvironment#dapr_application_insights_connection_string}
  */
  readonly daprApplicationInsightsConnectionString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_app_environment#id ContainerAppEnvironment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the platform-managed resource group created for the Managed Environment to host infrastructure resources. **Note:** Only valid if a `workload_profile` is specified. If `infrastructure_subnet_id` is specified, this resource group will be created in the same subscription as `infrastructure_subnet_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_app_environment#infrastructure_resource_group_name ContainerAppEnvironment#infrastructure_resource_group_name}
  */
  readonly infrastructureResourceGroupName?: string;
  /**
  * The existing Subnet to use for the Container Apps Control Plane. **NOTE:** The Subnet must have a `/21` or larger address space.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_app_environment#infrastructure_subnet_id ContainerAppEnvironment#infrastructure_subnet_id}
  */
  readonly infrastructureSubnetId?: string;
  /**
  * Should the Container Environment operate in Internal Load Balancing Mode? Defaults to `false`. **Note:** can only be set to `true` if `infrastructure_subnet_id` is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_app_environment#internal_load_balancer_enabled ContainerAppEnvironment#internal_load_balancer_enabled}
  */
  readonly internalLoadBalancerEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_app_environment#location ContainerAppEnvironment#location}
  */
  readonly location: string;
  /**
  * The ID for the Log Analytics Workspace to link this Container Apps Managed Environment to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_app_environment#log_analytics_workspace_id ContainerAppEnvironment#log_analytics_workspace_id}
  */
  readonly logAnalyticsWorkspaceId?: string;
  /**
  * Should mutual transport layer security (mTLS) be enabled? Defaults to `false`. **Note:** This feature is in public preview. Enabling mTLS for your applications may increase response latency and reduce maximum throughput in high-load scenarios.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_app_environment#mutual_tls_enabled ContainerAppEnvironment#mutual_tls_enabled}
  */
  readonly mutualTlsEnabled?: boolean | cdktf.IResolvable;
  /**
  * The name of the Container Apps Managed Environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_app_environment#name ContainerAppEnvironment#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_app_environment#resource_group_name ContainerAppEnvironment#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_app_environment#tags ContainerAppEnvironment#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_app_environment#zone_redundancy_enabled ContainerAppEnvironment#zone_redundancy_enabled}
  */
  readonly zoneRedundancyEnabled?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_app_environment#timeouts ContainerAppEnvironment#timeouts}
  */
  readonly timeouts?: ContainerAppEnvironmentTimeouts;
  /**
  * workload_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_app_environment#workload_profile ContainerAppEnvironment#workload_profile}
  */
  readonly workloadProfile?: ContainerAppEnvironmentWorkloadProfile[] | cdktf.IResolvable;
}
export interface ContainerAppEnvironmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_app_environment#create ContainerAppEnvironment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_app_environment#delete ContainerAppEnvironment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_app_environment#read ContainerAppEnvironment#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_app_environment#update ContainerAppEnvironment#update}
  */
  readonly update?: string;
}

export function containerAppEnvironmentTimeoutsToTerraform(struct?: ContainerAppEnvironmentTimeouts | cdktf.IResolvable): any {
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


export function containerAppEnvironmentTimeoutsToHclTerraform(struct?: ContainerAppEnvironmentTimeouts | cdktf.IResolvable): any {
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

export class ContainerAppEnvironmentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ContainerAppEnvironmentTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ContainerAppEnvironmentTimeouts | cdktf.IResolvable | undefined) {
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
export interface ContainerAppEnvironmentWorkloadProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_app_environment#maximum_count ContainerAppEnvironment#maximum_count}
  */
  readonly maximumCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_app_environment#minimum_count ContainerAppEnvironment#minimum_count}
  */
  readonly minimumCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_app_environment#name ContainerAppEnvironment#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_app_environment#workload_profile_type ContainerAppEnvironment#workload_profile_type}
  */
  readonly workloadProfileType: string;
}

export function containerAppEnvironmentWorkloadProfileToTerraform(struct?: ContainerAppEnvironmentWorkloadProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum_count: cdktf.numberToTerraform(struct!.maximumCount),
    minimum_count: cdktf.numberToTerraform(struct!.minimumCount),
    name: cdktf.stringToTerraform(struct!.name),
    workload_profile_type: cdktf.stringToTerraform(struct!.workloadProfileType),
  }
}


export function containerAppEnvironmentWorkloadProfileToHclTerraform(struct?: ContainerAppEnvironmentWorkloadProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maximum_count: {
      value: cdktf.numberToHclTerraform(struct!.maximumCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_count: {
      value: cdktf.numberToHclTerraform(struct!.minimumCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workload_profile_type: {
      value: cdktf.stringToHclTerraform(struct!.workloadProfileType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerAppEnvironmentWorkloadProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ContainerAppEnvironmentWorkloadProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumCount = this._maximumCount;
    }
    if (this._minimumCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumCount = this._minimumCount;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._workloadProfileType !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadProfileType = this._workloadProfileType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAppEnvironmentWorkloadProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maximumCount = undefined;
      this._minimumCount = undefined;
      this._name = undefined;
      this._workloadProfileType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maximumCount = value.maximumCount;
      this._minimumCount = value.minimumCount;
      this._name = value.name;
      this._workloadProfileType = value.workloadProfileType;
    }
  }

  // maximum_count - computed: false, optional: true, required: false
  private _maximumCount?: number; 
  public get maximumCount() {
    return this.getNumberAttribute('maximum_count');
  }
  public set maximumCount(value: number) {
    this._maximumCount = value;
  }
  public resetMaximumCount() {
    this._maximumCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumCountInput() {
    return this._maximumCount;
  }

  // minimum_count - computed: false, optional: true, required: false
  private _minimumCount?: number; 
  public get minimumCount() {
    return this.getNumberAttribute('minimum_count');
  }
  public set minimumCount(value: number) {
    this._minimumCount = value;
  }
  public resetMinimumCount() {
    this._minimumCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumCountInput() {
    return this._minimumCount;
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

  // workload_profile_type - computed: false, optional: false, required: true
  private _workloadProfileType?: string; 
  public get workloadProfileType() {
    return this.getStringAttribute('workload_profile_type');
  }
  public set workloadProfileType(value: string) {
    this._workloadProfileType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadProfileTypeInput() {
    return this._workloadProfileType;
  }
}

export class ContainerAppEnvironmentWorkloadProfileList extends cdktf.ComplexList {
  public internalValue? : ContainerAppEnvironmentWorkloadProfile[] | cdktf.IResolvable

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
  public get(index: number): ContainerAppEnvironmentWorkloadProfileOutputReference {
    return new ContainerAppEnvironmentWorkloadProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_app_environment azurerm_container_app_environment}
*/
export class ContainerAppEnvironment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_container_app_environment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ContainerAppEnvironment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ContainerAppEnvironment to import
  * @param importFromId The id of the existing ContainerAppEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_app_environment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ContainerAppEnvironment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_container_app_environment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_app_environment azurerm_container_app_environment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContainerAppEnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: ContainerAppEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_container_app_environment',
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
    this._daprApplicationInsightsConnectionString = config.daprApplicationInsightsConnectionString;
    this._id = config.id;
    this._infrastructureResourceGroupName = config.infrastructureResourceGroupName;
    this._infrastructureSubnetId = config.infrastructureSubnetId;
    this._internalLoadBalancerEnabled = config.internalLoadBalancerEnabled;
    this._location = config.location;
    this._logAnalyticsWorkspaceId = config.logAnalyticsWorkspaceId;
    this._mutualTlsEnabled = config.mutualTlsEnabled;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._zoneRedundancyEnabled = config.zoneRedundancyEnabled;
    this._timeouts.internalValue = config.timeouts;
    this._workloadProfile.internalValue = config.workloadProfile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_domain_verification_id - computed: true, optional: false, required: false
  public get customDomainVerificationId() {
    return this.getStringAttribute('custom_domain_verification_id');
  }

  // dapr_application_insights_connection_string - computed: false, optional: true, required: false
  private _daprApplicationInsightsConnectionString?: string; 
  public get daprApplicationInsightsConnectionString() {
    return this.getStringAttribute('dapr_application_insights_connection_string');
  }
  public set daprApplicationInsightsConnectionString(value: string) {
    this._daprApplicationInsightsConnectionString = value;
  }
  public resetDaprApplicationInsightsConnectionString() {
    this._daprApplicationInsightsConnectionString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daprApplicationInsightsConnectionStringInput() {
    return this._daprApplicationInsightsConnectionString;
  }

  // default_domain - computed: true, optional: false, required: false
  public get defaultDomain() {
    return this.getStringAttribute('default_domain');
  }

  // docker_bridge_cidr - computed: true, optional: false, required: false
  public get dockerBridgeCidr() {
    return this.getStringAttribute('docker_bridge_cidr');
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

  // infrastructure_resource_group_name - computed: false, optional: true, required: false
  private _infrastructureResourceGroupName?: string; 
  public get infrastructureResourceGroupName() {
    return this.getStringAttribute('infrastructure_resource_group_name');
  }
  public set infrastructureResourceGroupName(value: string) {
    this._infrastructureResourceGroupName = value;
  }
  public resetInfrastructureResourceGroupName() {
    this._infrastructureResourceGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureResourceGroupNameInput() {
    return this._infrastructureResourceGroupName;
  }

  // infrastructure_subnet_id - computed: false, optional: true, required: false
  private _infrastructureSubnetId?: string; 
  public get infrastructureSubnetId() {
    return this.getStringAttribute('infrastructure_subnet_id');
  }
  public set infrastructureSubnetId(value: string) {
    this._infrastructureSubnetId = value;
  }
  public resetInfrastructureSubnetId() {
    this._infrastructureSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureSubnetIdInput() {
    return this._infrastructureSubnetId;
  }

  // internal_load_balancer_enabled - computed: false, optional: true, required: false
  private _internalLoadBalancerEnabled?: boolean | cdktf.IResolvable; 
  public get internalLoadBalancerEnabled() {
    return this.getBooleanAttribute('internal_load_balancer_enabled');
  }
  public set internalLoadBalancerEnabled(value: boolean | cdktf.IResolvable) {
    this._internalLoadBalancerEnabled = value;
  }
  public resetInternalLoadBalancerEnabled() {
    this._internalLoadBalancerEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalLoadBalancerEnabledInput() {
    return this._internalLoadBalancerEnabled;
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

  // log_analytics_workspace_id - computed: false, optional: true, required: false
  private _logAnalyticsWorkspaceId?: string; 
  public get logAnalyticsWorkspaceId() {
    return this.getStringAttribute('log_analytics_workspace_id');
  }
  public set logAnalyticsWorkspaceId(value: string) {
    this._logAnalyticsWorkspaceId = value;
  }
  public resetLogAnalyticsWorkspaceId() {
    this._logAnalyticsWorkspaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsWorkspaceIdInput() {
    return this._logAnalyticsWorkspaceId;
  }

  // mutual_tls_enabled - computed: false, optional: true, required: false
  private _mutualTlsEnabled?: boolean | cdktf.IResolvable; 
  public get mutualTlsEnabled() {
    return this.getBooleanAttribute('mutual_tls_enabled');
  }
  public set mutualTlsEnabled(value: boolean | cdktf.IResolvable) {
    this._mutualTlsEnabled = value;
  }
  public resetMutualTlsEnabled() {
    this._mutualTlsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mutualTlsEnabledInput() {
    return this._mutualTlsEnabled;
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

  // platform_reserved_cidr - computed: true, optional: false, required: false
  public get platformReservedCidr() {
    return this.getStringAttribute('platform_reserved_cidr');
  }

  // platform_reserved_dns_ip_address - computed: true, optional: false, required: false
  public get platformReservedDnsIpAddress() {
    return this.getStringAttribute('platform_reserved_dns_ip_address');
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

  // static_ip_address - computed: true, optional: false, required: false
  public get staticIpAddress() {
    return this.getStringAttribute('static_ip_address');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // zone_redundancy_enabled - computed: false, optional: true, required: false
  private _zoneRedundancyEnabled?: boolean | cdktf.IResolvable; 
  public get zoneRedundancyEnabled() {
    return this.getBooleanAttribute('zone_redundancy_enabled');
  }
  public set zoneRedundancyEnabled(value: boolean | cdktf.IResolvable) {
    this._zoneRedundancyEnabled = value;
  }
  public resetZoneRedundancyEnabled() {
    this._zoneRedundancyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneRedundancyEnabledInput() {
    return this._zoneRedundancyEnabled;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ContainerAppEnvironmentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ContainerAppEnvironmentTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // workload_profile - computed: false, optional: true, required: false
  private _workloadProfile = new ContainerAppEnvironmentWorkloadProfileList(this, "workload_profile", true);
  public get workloadProfile() {
    return this._workloadProfile;
  }
  public putWorkloadProfile(value: ContainerAppEnvironmentWorkloadProfile[] | cdktf.IResolvable) {
    this._workloadProfile.internalValue = value;
  }
  public resetWorkloadProfile() {
    this._workloadProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadProfileInput() {
    return this._workloadProfile.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dapr_application_insights_connection_string: cdktf.stringToTerraform(this._daprApplicationInsightsConnectionString),
      id: cdktf.stringToTerraform(this._id),
      infrastructure_resource_group_name: cdktf.stringToTerraform(this._infrastructureResourceGroupName),
      infrastructure_subnet_id: cdktf.stringToTerraform(this._infrastructureSubnetId),
      internal_load_balancer_enabled: cdktf.booleanToTerraform(this._internalLoadBalancerEnabled),
      location: cdktf.stringToTerraform(this._location),
      log_analytics_workspace_id: cdktf.stringToTerraform(this._logAnalyticsWorkspaceId),
      mutual_tls_enabled: cdktf.booleanToTerraform(this._mutualTlsEnabled),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      zone_redundancy_enabled: cdktf.booleanToTerraform(this._zoneRedundancyEnabled),
      timeouts: containerAppEnvironmentTimeoutsToTerraform(this._timeouts.internalValue),
      workload_profile: cdktf.listMapper(containerAppEnvironmentWorkloadProfileToTerraform, true)(this._workloadProfile.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dapr_application_insights_connection_string: {
        value: cdktf.stringToHclTerraform(this._daprApplicationInsightsConnectionString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      infrastructure_resource_group_name: {
        value: cdktf.stringToHclTerraform(this._infrastructureResourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      infrastructure_subnet_id: {
        value: cdktf.stringToHclTerraform(this._infrastructureSubnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internal_load_balancer_enabled: {
        value: cdktf.booleanToHclTerraform(this._internalLoadBalancerEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_analytics_workspace_id: {
        value: cdktf.stringToHclTerraform(this._logAnalyticsWorkspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mutual_tls_enabled: {
        value: cdktf.booleanToHclTerraform(this._mutualTlsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      zone_redundancy_enabled: {
        value: cdktf.booleanToHclTerraform(this._zoneRedundancyEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeouts: {
        value: containerAppEnvironmentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ContainerAppEnvironmentTimeouts",
      },
      workload_profile: {
        value: cdktf.listMapperHcl(containerAppEnvironmentWorkloadProfileToHclTerraform, true)(this._workloadProfile.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ContainerAppEnvironmentWorkloadProfileList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
