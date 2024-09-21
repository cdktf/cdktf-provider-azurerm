// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iot_security_solution
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IotSecuritySolutionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iot_security_solution#disabled_data_sources IotSecuritySolution#disabled_data_sources}
  */
  readonly disabledDataSources?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iot_security_solution#display_name IotSecuritySolution#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iot_security_solution#enabled IotSecuritySolution#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iot_security_solution#events_to_export IotSecuritySolution#events_to_export}
  */
  readonly eventsToExport?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iot_security_solution#id IotSecuritySolution#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iot_security_solution#iothub_ids IotSecuritySolution#iothub_ids}
  */
  readonly iothubIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iot_security_solution#location IotSecuritySolution#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iot_security_solution#log_analytics_workspace_id IotSecuritySolution#log_analytics_workspace_id}
  */
  readonly logAnalyticsWorkspaceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iot_security_solution#log_unmasked_ips_enabled IotSecuritySolution#log_unmasked_ips_enabled}
  */
  readonly logUnmaskedIpsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iot_security_solution#name IotSecuritySolution#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iot_security_solution#query_for_resources IotSecuritySolution#query_for_resources}
  */
  readonly queryForResources?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iot_security_solution#query_subscription_ids IotSecuritySolution#query_subscription_ids}
  */
  readonly querySubscriptionIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iot_security_solution#resource_group_name IotSecuritySolution#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iot_security_solution#tags IotSecuritySolution#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * additional_workspace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iot_security_solution#additional_workspace IotSecuritySolution#additional_workspace}
  */
  readonly additionalWorkspace?: IotSecuritySolutionAdditionalWorkspace[] | cdktf.IResolvable;
  /**
  * recommendations_enabled block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iot_security_solution#recommendations_enabled IotSecuritySolution#recommendations_enabled}
  */
  readonly recommendationsEnabled?: IotSecuritySolutionRecommendationsEnabled;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iot_security_solution#timeouts IotSecuritySolution#timeouts}
  */
  readonly timeouts?: IotSecuritySolutionTimeouts;
}
export interface IotSecuritySolutionAdditionalWorkspace {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iot_security_solution#data_types IotSecuritySolution#data_types}
  */
  readonly dataTypes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iot_security_solution#workspace_id IotSecuritySolution#workspace_id}
  */
  readonly workspaceId: string;
}

export function iotSecuritySolutionAdditionalWorkspaceToTerraform(struct?: IotSecuritySolutionAdditionalWorkspace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dataTypes),
    workspace_id: cdktf.stringToTerraform(struct!.workspaceId),
  }
}


export function iotSecuritySolutionAdditionalWorkspaceToHclTerraform(struct?: IotSecuritySolutionAdditionalWorkspace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dataTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    workspace_id: {
      value: cdktf.stringToHclTerraform(struct!.workspaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotSecuritySolutionAdditionalWorkspaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IotSecuritySolutionAdditionalWorkspace | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataTypes = this._dataTypes;
    }
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotSecuritySolutionAdditionalWorkspace | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataTypes = undefined;
      this._workspaceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataTypes = value.dataTypes;
      this._workspaceId = value.workspaceId;
    }
  }

  // data_types - computed: false, optional: false, required: true
  private _dataTypes?: string[]; 
  public get dataTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('data_types'));
  }
  public set dataTypes(value: string[]) {
    this._dataTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypesInput() {
    return this._dataTypes;
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }
}

export class IotSecuritySolutionAdditionalWorkspaceList extends cdktf.ComplexList {
  public internalValue? : IotSecuritySolutionAdditionalWorkspace[] | cdktf.IResolvable

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
  public get(index: number): IotSecuritySolutionAdditionalWorkspaceOutputReference {
    return new IotSecuritySolutionAdditionalWorkspaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotSecuritySolutionRecommendationsEnabled {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iot_security_solution#acr_authentication IotSecuritySolution#acr_authentication}
  */
  readonly acrAuthentication?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iot_security_solution#agent_send_unutilized_msg IotSecuritySolution#agent_send_unutilized_msg}
  */
  readonly agentSendUnutilizedMsg?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iot_security_solution#baseline IotSecuritySolution#baseline}
  */
  readonly baseline?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iot_security_solution#edge_hub_mem_optimize IotSecuritySolution#edge_hub_mem_optimize}
  */
  readonly edgeHubMemOptimize?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iot_security_solution#edge_logging_option IotSecuritySolution#edge_logging_option}
  */
  readonly edgeLoggingOption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iot_security_solution#inconsistent_module_settings IotSecuritySolution#inconsistent_module_settings}
  */
  readonly inconsistentModuleSettings?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iot_security_solution#install_agent IotSecuritySolution#install_agent}
  */
  readonly installAgent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iot_security_solution#ip_filter_deny_all IotSecuritySolution#ip_filter_deny_all}
  */
  readonly ipFilterDenyAll?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iot_security_solution#ip_filter_permissive_rule IotSecuritySolution#ip_filter_permissive_rule}
  */
  readonly ipFilterPermissiveRule?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iot_security_solution#open_ports IotSecuritySolution#open_ports}
  */
  readonly openPorts?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iot_security_solution#permissive_firewall_policy IotSecuritySolution#permissive_firewall_policy}
  */
  readonly permissiveFirewallPolicy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iot_security_solution#permissive_input_firewall_rules IotSecuritySolution#permissive_input_firewall_rules}
  */
  readonly permissiveInputFirewallRules?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iot_security_solution#permissive_output_firewall_rules IotSecuritySolution#permissive_output_firewall_rules}
  */
  readonly permissiveOutputFirewallRules?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iot_security_solution#privileged_docker_options IotSecuritySolution#privileged_docker_options}
  */
  readonly privilegedDockerOptions?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iot_security_solution#shared_credentials IotSecuritySolution#shared_credentials}
  */
  readonly sharedCredentials?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iot_security_solution#vulnerable_tls_cipher_suite IotSecuritySolution#vulnerable_tls_cipher_suite}
  */
  readonly vulnerableTlsCipherSuite?: boolean | cdktf.IResolvable;
}

export function iotSecuritySolutionRecommendationsEnabledToTerraform(struct?: IotSecuritySolutionRecommendationsEnabledOutputReference | IotSecuritySolutionRecommendationsEnabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acr_authentication: cdktf.booleanToTerraform(struct!.acrAuthentication),
    agent_send_unutilized_msg: cdktf.booleanToTerraform(struct!.agentSendUnutilizedMsg),
    baseline: cdktf.booleanToTerraform(struct!.baseline),
    edge_hub_mem_optimize: cdktf.booleanToTerraform(struct!.edgeHubMemOptimize),
    edge_logging_option: cdktf.booleanToTerraform(struct!.edgeLoggingOption),
    inconsistent_module_settings: cdktf.booleanToTerraform(struct!.inconsistentModuleSettings),
    install_agent: cdktf.booleanToTerraform(struct!.installAgent),
    ip_filter_deny_all: cdktf.booleanToTerraform(struct!.ipFilterDenyAll),
    ip_filter_permissive_rule: cdktf.booleanToTerraform(struct!.ipFilterPermissiveRule),
    open_ports: cdktf.booleanToTerraform(struct!.openPorts),
    permissive_firewall_policy: cdktf.booleanToTerraform(struct!.permissiveFirewallPolicy),
    permissive_input_firewall_rules: cdktf.booleanToTerraform(struct!.permissiveInputFirewallRules),
    permissive_output_firewall_rules: cdktf.booleanToTerraform(struct!.permissiveOutputFirewallRules),
    privileged_docker_options: cdktf.booleanToTerraform(struct!.privilegedDockerOptions),
    shared_credentials: cdktf.booleanToTerraform(struct!.sharedCredentials),
    vulnerable_tls_cipher_suite: cdktf.booleanToTerraform(struct!.vulnerableTlsCipherSuite),
  }
}


export function iotSecuritySolutionRecommendationsEnabledToHclTerraform(struct?: IotSecuritySolutionRecommendationsEnabledOutputReference | IotSecuritySolutionRecommendationsEnabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acr_authentication: {
      value: cdktf.booleanToHclTerraform(struct!.acrAuthentication),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    agent_send_unutilized_msg: {
      value: cdktf.booleanToHclTerraform(struct!.agentSendUnutilizedMsg),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    baseline: {
      value: cdktf.booleanToHclTerraform(struct!.baseline),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    edge_hub_mem_optimize: {
      value: cdktf.booleanToHclTerraform(struct!.edgeHubMemOptimize),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    edge_logging_option: {
      value: cdktf.booleanToHclTerraform(struct!.edgeLoggingOption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inconsistent_module_settings: {
      value: cdktf.booleanToHclTerraform(struct!.inconsistentModuleSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    install_agent: {
      value: cdktf.booleanToHclTerraform(struct!.installAgent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_filter_deny_all: {
      value: cdktf.booleanToHclTerraform(struct!.ipFilterDenyAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_filter_permissive_rule: {
      value: cdktf.booleanToHclTerraform(struct!.ipFilterPermissiveRule),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    open_ports: {
      value: cdktf.booleanToHclTerraform(struct!.openPorts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    permissive_firewall_policy: {
      value: cdktf.booleanToHclTerraform(struct!.permissiveFirewallPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    permissive_input_firewall_rules: {
      value: cdktf.booleanToHclTerraform(struct!.permissiveInputFirewallRules),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    permissive_output_firewall_rules: {
      value: cdktf.booleanToHclTerraform(struct!.permissiveOutputFirewallRules),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    privileged_docker_options: {
      value: cdktf.booleanToHclTerraform(struct!.privilegedDockerOptions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    shared_credentials: {
      value: cdktf.booleanToHclTerraform(struct!.sharedCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vulnerable_tls_cipher_suite: {
      value: cdktf.booleanToHclTerraform(struct!.vulnerableTlsCipherSuite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotSecuritySolutionRecommendationsEnabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IotSecuritySolutionRecommendationsEnabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acrAuthentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.acrAuthentication = this._acrAuthentication;
    }
    if (this._agentSendUnutilizedMsg !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentSendUnutilizedMsg = this._agentSendUnutilizedMsg;
    }
    if (this._baseline !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseline = this._baseline;
    }
    if (this._edgeHubMemOptimize !== undefined) {
      hasAnyValues = true;
      internalValueResult.edgeHubMemOptimize = this._edgeHubMemOptimize;
    }
    if (this._edgeLoggingOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.edgeLoggingOption = this._edgeLoggingOption;
    }
    if (this._inconsistentModuleSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.inconsistentModuleSettings = this._inconsistentModuleSettings;
    }
    if (this._installAgent !== undefined) {
      hasAnyValues = true;
      internalValueResult.installAgent = this._installAgent;
    }
    if (this._ipFilterDenyAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilterDenyAll = this._ipFilterDenyAll;
    }
    if (this._ipFilterPermissiveRule !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilterPermissiveRule = this._ipFilterPermissiveRule;
    }
    if (this._openPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.openPorts = this._openPorts;
    }
    if (this._permissiveFirewallPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissiveFirewallPolicy = this._permissiveFirewallPolicy;
    }
    if (this._permissiveInputFirewallRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissiveInputFirewallRules = this._permissiveInputFirewallRules;
    }
    if (this._permissiveOutputFirewallRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissiveOutputFirewallRules = this._permissiveOutputFirewallRules;
    }
    if (this._privilegedDockerOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.privilegedDockerOptions = this._privilegedDockerOptions;
    }
    if (this._sharedCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedCredentials = this._sharedCredentials;
    }
    if (this._vulnerableTlsCipherSuite !== undefined) {
      hasAnyValues = true;
      internalValueResult.vulnerableTlsCipherSuite = this._vulnerableTlsCipherSuite;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotSecuritySolutionRecommendationsEnabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acrAuthentication = undefined;
      this._agentSendUnutilizedMsg = undefined;
      this._baseline = undefined;
      this._edgeHubMemOptimize = undefined;
      this._edgeLoggingOption = undefined;
      this._inconsistentModuleSettings = undefined;
      this._installAgent = undefined;
      this._ipFilterDenyAll = undefined;
      this._ipFilterPermissiveRule = undefined;
      this._openPorts = undefined;
      this._permissiveFirewallPolicy = undefined;
      this._permissiveInputFirewallRules = undefined;
      this._permissiveOutputFirewallRules = undefined;
      this._privilegedDockerOptions = undefined;
      this._sharedCredentials = undefined;
      this._vulnerableTlsCipherSuite = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acrAuthentication = value.acrAuthentication;
      this._agentSendUnutilizedMsg = value.agentSendUnutilizedMsg;
      this._baseline = value.baseline;
      this._edgeHubMemOptimize = value.edgeHubMemOptimize;
      this._edgeLoggingOption = value.edgeLoggingOption;
      this._inconsistentModuleSettings = value.inconsistentModuleSettings;
      this._installAgent = value.installAgent;
      this._ipFilterDenyAll = value.ipFilterDenyAll;
      this._ipFilterPermissiveRule = value.ipFilterPermissiveRule;
      this._openPorts = value.openPorts;
      this._permissiveFirewallPolicy = value.permissiveFirewallPolicy;
      this._permissiveInputFirewallRules = value.permissiveInputFirewallRules;
      this._permissiveOutputFirewallRules = value.permissiveOutputFirewallRules;
      this._privilegedDockerOptions = value.privilegedDockerOptions;
      this._sharedCredentials = value.sharedCredentials;
      this._vulnerableTlsCipherSuite = value.vulnerableTlsCipherSuite;
    }
  }

  // acr_authentication - computed: false, optional: true, required: false
  private _acrAuthentication?: boolean | cdktf.IResolvable; 
  public get acrAuthentication() {
    return this.getBooleanAttribute('acr_authentication');
  }
  public set acrAuthentication(value: boolean | cdktf.IResolvable) {
    this._acrAuthentication = value;
  }
  public resetAcrAuthentication() {
    this._acrAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acrAuthenticationInput() {
    return this._acrAuthentication;
  }

  // agent_send_unutilized_msg - computed: false, optional: true, required: false
  private _agentSendUnutilizedMsg?: boolean | cdktf.IResolvable; 
  public get agentSendUnutilizedMsg() {
    return this.getBooleanAttribute('agent_send_unutilized_msg');
  }
  public set agentSendUnutilizedMsg(value: boolean | cdktf.IResolvable) {
    this._agentSendUnutilizedMsg = value;
  }
  public resetAgentSendUnutilizedMsg() {
    this._agentSendUnutilizedMsg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentSendUnutilizedMsgInput() {
    return this._agentSendUnutilizedMsg;
  }

  // baseline - computed: false, optional: true, required: false
  private _baseline?: boolean | cdktf.IResolvable; 
  public get baseline() {
    return this.getBooleanAttribute('baseline');
  }
  public set baseline(value: boolean | cdktf.IResolvable) {
    this._baseline = value;
  }
  public resetBaseline() {
    this._baseline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baselineInput() {
    return this._baseline;
  }

  // edge_hub_mem_optimize - computed: false, optional: true, required: false
  private _edgeHubMemOptimize?: boolean | cdktf.IResolvable; 
  public get edgeHubMemOptimize() {
    return this.getBooleanAttribute('edge_hub_mem_optimize');
  }
  public set edgeHubMemOptimize(value: boolean | cdktf.IResolvable) {
    this._edgeHubMemOptimize = value;
  }
  public resetEdgeHubMemOptimize() {
    this._edgeHubMemOptimize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeHubMemOptimizeInput() {
    return this._edgeHubMemOptimize;
  }

  // edge_logging_option - computed: false, optional: true, required: false
  private _edgeLoggingOption?: boolean | cdktf.IResolvable; 
  public get edgeLoggingOption() {
    return this.getBooleanAttribute('edge_logging_option');
  }
  public set edgeLoggingOption(value: boolean | cdktf.IResolvable) {
    this._edgeLoggingOption = value;
  }
  public resetEdgeLoggingOption() {
    this._edgeLoggingOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeLoggingOptionInput() {
    return this._edgeLoggingOption;
  }

  // inconsistent_module_settings - computed: false, optional: true, required: false
  private _inconsistentModuleSettings?: boolean | cdktf.IResolvable; 
  public get inconsistentModuleSettings() {
    return this.getBooleanAttribute('inconsistent_module_settings');
  }
  public set inconsistentModuleSettings(value: boolean | cdktf.IResolvable) {
    this._inconsistentModuleSettings = value;
  }
  public resetInconsistentModuleSettings() {
    this._inconsistentModuleSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inconsistentModuleSettingsInput() {
    return this._inconsistentModuleSettings;
  }

  // install_agent - computed: false, optional: true, required: false
  private _installAgent?: boolean | cdktf.IResolvable; 
  public get installAgent() {
    return this.getBooleanAttribute('install_agent');
  }
  public set installAgent(value: boolean | cdktf.IResolvable) {
    this._installAgent = value;
  }
  public resetInstallAgent() {
    this._installAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installAgentInput() {
    return this._installAgent;
  }

  // ip_filter_deny_all - computed: false, optional: true, required: false
  private _ipFilterDenyAll?: boolean | cdktf.IResolvable; 
  public get ipFilterDenyAll() {
    return this.getBooleanAttribute('ip_filter_deny_all');
  }
  public set ipFilterDenyAll(value: boolean | cdktf.IResolvable) {
    this._ipFilterDenyAll = value;
  }
  public resetIpFilterDenyAll() {
    this._ipFilterDenyAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFilterDenyAllInput() {
    return this._ipFilterDenyAll;
  }

  // ip_filter_permissive_rule - computed: false, optional: true, required: false
  private _ipFilterPermissiveRule?: boolean | cdktf.IResolvable; 
  public get ipFilterPermissiveRule() {
    return this.getBooleanAttribute('ip_filter_permissive_rule');
  }
  public set ipFilterPermissiveRule(value: boolean | cdktf.IResolvable) {
    this._ipFilterPermissiveRule = value;
  }
  public resetIpFilterPermissiveRule() {
    this._ipFilterPermissiveRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFilterPermissiveRuleInput() {
    return this._ipFilterPermissiveRule;
  }

  // open_ports - computed: false, optional: true, required: false
  private _openPorts?: boolean | cdktf.IResolvable; 
  public get openPorts() {
    return this.getBooleanAttribute('open_ports');
  }
  public set openPorts(value: boolean | cdktf.IResolvable) {
    this._openPorts = value;
  }
  public resetOpenPorts() {
    this._openPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openPortsInput() {
    return this._openPorts;
  }

  // permissive_firewall_policy - computed: false, optional: true, required: false
  private _permissiveFirewallPolicy?: boolean | cdktf.IResolvable; 
  public get permissiveFirewallPolicy() {
    return this.getBooleanAttribute('permissive_firewall_policy');
  }
  public set permissiveFirewallPolicy(value: boolean | cdktf.IResolvable) {
    this._permissiveFirewallPolicy = value;
  }
  public resetPermissiveFirewallPolicy() {
    this._permissiveFirewallPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissiveFirewallPolicyInput() {
    return this._permissiveFirewallPolicy;
  }

  // permissive_input_firewall_rules - computed: false, optional: true, required: false
  private _permissiveInputFirewallRules?: boolean | cdktf.IResolvable; 
  public get permissiveInputFirewallRules() {
    return this.getBooleanAttribute('permissive_input_firewall_rules');
  }
  public set permissiveInputFirewallRules(value: boolean | cdktf.IResolvable) {
    this._permissiveInputFirewallRules = value;
  }
  public resetPermissiveInputFirewallRules() {
    this._permissiveInputFirewallRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissiveInputFirewallRulesInput() {
    return this._permissiveInputFirewallRules;
  }

  // permissive_output_firewall_rules - computed: false, optional: true, required: false
  private _permissiveOutputFirewallRules?: boolean | cdktf.IResolvable; 
  public get permissiveOutputFirewallRules() {
    return this.getBooleanAttribute('permissive_output_firewall_rules');
  }
  public set permissiveOutputFirewallRules(value: boolean | cdktf.IResolvable) {
    this._permissiveOutputFirewallRules = value;
  }
  public resetPermissiveOutputFirewallRules() {
    this._permissiveOutputFirewallRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissiveOutputFirewallRulesInput() {
    return this._permissiveOutputFirewallRules;
  }

  // privileged_docker_options - computed: false, optional: true, required: false
  private _privilegedDockerOptions?: boolean | cdktf.IResolvable; 
  public get privilegedDockerOptions() {
    return this.getBooleanAttribute('privileged_docker_options');
  }
  public set privilegedDockerOptions(value: boolean | cdktf.IResolvable) {
    this._privilegedDockerOptions = value;
  }
  public resetPrivilegedDockerOptions() {
    this._privilegedDockerOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedDockerOptionsInput() {
    return this._privilegedDockerOptions;
  }

  // shared_credentials - computed: false, optional: true, required: false
  private _sharedCredentials?: boolean | cdktf.IResolvable; 
  public get sharedCredentials() {
    return this.getBooleanAttribute('shared_credentials');
  }
  public set sharedCredentials(value: boolean | cdktf.IResolvable) {
    this._sharedCredentials = value;
  }
  public resetSharedCredentials() {
    this._sharedCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedCredentialsInput() {
    return this._sharedCredentials;
  }

  // vulnerable_tls_cipher_suite - computed: false, optional: true, required: false
  private _vulnerableTlsCipherSuite?: boolean | cdktf.IResolvable; 
  public get vulnerableTlsCipherSuite() {
    return this.getBooleanAttribute('vulnerable_tls_cipher_suite');
  }
  public set vulnerableTlsCipherSuite(value: boolean | cdktf.IResolvable) {
    this._vulnerableTlsCipherSuite = value;
  }
  public resetVulnerableTlsCipherSuite() {
    this._vulnerableTlsCipherSuite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnerableTlsCipherSuiteInput() {
    return this._vulnerableTlsCipherSuite;
  }
}
export interface IotSecuritySolutionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iot_security_solution#create IotSecuritySolution#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iot_security_solution#delete IotSecuritySolution#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iot_security_solution#read IotSecuritySolution#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iot_security_solution#update IotSecuritySolution#update}
  */
  readonly update?: string;
}

export function iotSecuritySolutionTimeoutsToTerraform(struct?: IotSecuritySolutionTimeouts | cdktf.IResolvable): any {
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


export function iotSecuritySolutionTimeoutsToHclTerraform(struct?: IotSecuritySolutionTimeouts | cdktf.IResolvable): any {
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

export class IotSecuritySolutionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotSecuritySolutionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IotSecuritySolutionTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iot_security_solution azurerm_iot_security_solution}
*/
export class IotSecuritySolution extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_iot_security_solution";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IotSecuritySolution resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IotSecuritySolution to import
  * @param importFromId The id of the existing IotSecuritySolution that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iot_security_solution#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IotSecuritySolution to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_iot_security_solution", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iot_security_solution azurerm_iot_security_solution} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotSecuritySolutionConfig
  */
  public constructor(scope: Construct, id: string, config: IotSecuritySolutionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_iot_security_solution',
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
    this._disabledDataSources = config.disabledDataSources;
    this._displayName = config.displayName;
    this._enabled = config.enabled;
    this._eventsToExport = config.eventsToExport;
    this._id = config.id;
    this._iothubIds = config.iothubIds;
    this._location = config.location;
    this._logAnalyticsWorkspaceId = config.logAnalyticsWorkspaceId;
    this._logUnmaskedIpsEnabled = config.logUnmaskedIpsEnabled;
    this._name = config.name;
    this._queryForResources = config.queryForResources;
    this._querySubscriptionIds = config.querySubscriptionIds;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._additionalWorkspace.internalValue = config.additionalWorkspace;
    this._recommendationsEnabled.internalValue = config.recommendationsEnabled;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disabled_data_sources - computed: false, optional: true, required: false
  private _disabledDataSources?: string[]; 
  public get disabledDataSources() {
    return cdktf.Fn.tolist(this.getListAttribute('disabled_data_sources'));
  }
  public set disabledDataSources(value: string[]) {
    this._disabledDataSources = value;
  }
  public resetDisabledDataSources() {
    this._disabledDataSources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledDataSourcesInput() {
    return this._disabledDataSources;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // events_to_export - computed: false, optional: true, required: false
  private _eventsToExport?: string[]; 
  public get eventsToExport() {
    return cdktf.Fn.tolist(this.getListAttribute('events_to_export'));
  }
  public set eventsToExport(value: string[]) {
    this._eventsToExport = value;
  }
  public resetEventsToExport() {
    this._eventsToExport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsToExportInput() {
    return this._eventsToExport;
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

  // iothub_ids - computed: false, optional: false, required: true
  private _iothubIds?: string[]; 
  public get iothubIds() {
    return cdktf.Fn.tolist(this.getListAttribute('iothub_ids'));
  }
  public set iothubIds(value: string[]) {
    this._iothubIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iothubIdsInput() {
    return this._iothubIds;
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

  // log_unmasked_ips_enabled - computed: false, optional: true, required: false
  private _logUnmaskedIpsEnabled?: boolean | cdktf.IResolvable; 
  public get logUnmaskedIpsEnabled() {
    return this.getBooleanAttribute('log_unmasked_ips_enabled');
  }
  public set logUnmaskedIpsEnabled(value: boolean | cdktf.IResolvable) {
    this._logUnmaskedIpsEnabled = value;
  }
  public resetLogUnmaskedIpsEnabled() {
    this._logUnmaskedIpsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logUnmaskedIpsEnabledInput() {
    return this._logUnmaskedIpsEnabled;
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

  // query_for_resources - computed: true, optional: true, required: false
  private _queryForResources?: string; 
  public get queryForResources() {
    return this.getStringAttribute('query_for_resources');
  }
  public set queryForResources(value: string) {
    this._queryForResources = value;
  }
  public resetQueryForResources() {
    this._queryForResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryForResourcesInput() {
    return this._queryForResources;
  }

  // query_subscription_ids - computed: true, optional: true, required: false
  private _querySubscriptionIds?: string[]; 
  public get querySubscriptionIds() {
    return cdktf.Fn.tolist(this.getListAttribute('query_subscription_ids'));
  }
  public set querySubscriptionIds(value: string[]) {
    this._querySubscriptionIds = value;
  }
  public resetQuerySubscriptionIds() {
    this._querySubscriptionIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get querySubscriptionIdsInput() {
    return this._querySubscriptionIds;
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

  // additional_workspace - computed: false, optional: true, required: false
  private _additionalWorkspace = new IotSecuritySolutionAdditionalWorkspaceList(this, "additional_workspace", true);
  public get additionalWorkspace() {
    return this._additionalWorkspace;
  }
  public putAdditionalWorkspace(value: IotSecuritySolutionAdditionalWorkspace[] | cdktf.IResolvable) {
    this._additionalWorkspace.internalValue = value;
  }
  public resetAdditionalWorkspace() {
    this._additionalWorkspace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalWorkspaceInput() {
    return this._additionalWorkspace.internalValue;
  }

  // recommendations_enabled - computed: false, optional: true, required: false
  private _recommendationsEnabled = new IotSecuritySolutionRecommendationsEnabledOutputReference(this, "recommendations_enabled");
  public get recommendationsEnabled() {
    return this._recommendationsEnabled;
  }
  public putRecommendationsEnabled(value: IotSecuritySolutionRecommendationsEnabled) {
    this._recommendationsEnabled.internalValue = value;
  }
  public resetRecommendationsEnabled() {
    this._recommendationsEnabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recommendationsEnabledInput() {
    return this._recommendationsEnabled.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new IotSecuritySolutionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: IotSecuritySolutionTimeouts) {
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
      disabled_data_sources: cdktf.listMapper(cdktf.stringToTerraform, false)(this._disabledDataSources),
      display_name: cdktf.stringToTerraform(this._displayName),
      enabled: cdktf.booleanToTerraform(this._enabled),
      events_to_export: cdktf.listMapper(cdktf.stringToTerraform, false)(this._eventsToExport),
      id: cdktf.stringToTerraform(this._id),
      iothub_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._iothubIds),
      location: cdktf.stringToTerraform(this._location),
      log_analytics_workspace_id: cdktf.stringToTerraform(this._logAnalyticsWorkspaceId),
      log_unmasked_ips_enabled: cdktf.booleanToTerraform(this._logUnmaskedIpsEnabled),
      name: cdktf.stringToTerraform(this._name),
      query_for_resources: cdktf.stringToTerraform(this._queryForResources),
      query_subscription_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._querySubscriptionIds),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      additional_workspace: cdktf.listMapper(iotSecuritySolutionAdditionalWorkspaceToTerraform, true)(this._additionalWorkspace.internalValue),
      recommendations_enabled: iotSecuritySolutionRecommendationsEnabledToTerraform(this._recommendationsEnabled.internalValue),
      timeouts: iotSecuritySolutionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disabled_data_sources: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._disabledDataSources),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      events_to_export: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._eventsToExport),
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
      iothub_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._iothubIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      log_unmasked_ips_enabled: {
        value: cdktf.booleanToHclTerraform(this._logUnmaskedIpsEnabled),
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
      query_for_resources: {
        value: cdktf.stringToHclTerraform(this._queryForResources),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_subscription_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._querySubscriptionIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      additional_workspace: {
        value: cdktf.listMapperHcl(iotSecuritySolutionAdditionalWorkspaceToHclTerraform, true)(this._additionalWorkspace.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IotSecuritySolutionAdditionalWorkspaceList",
      },
      recommendations_enabled: {
        value: iotSecuritySolutionRecommendationsEnabledToHclTerraform(this._recommendationsEnabled.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IotSecuritySolutionRecommendationsEnabledList",
      },
      timeouts: {
        value: iotSecuritySolutionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IotSecuritySolutionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
