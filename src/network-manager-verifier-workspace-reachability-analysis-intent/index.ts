/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_manager_verifier_workspace_reachability_analysis_intent
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_manager_verifier_workspace_reachability_analysis_intent#description NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_manager_verifier_workspace_reachability_analysis_intent#destination_resource_id NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent#destination_resource_id}
  */
  readonly destinationResourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_manager_verifier_workspace_reachability_analysis_intent#id NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_manager_verifier_workspace_reachability_analysis_intent#name NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_manager_verifier_workspace_reachability_analysis_intent#source_resource_id NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent#source_resource_id}
  */
  readonly sourceResourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_manager_verifier_workspace_reachability_analysis_intent#verifier_workspace_id NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent#verifier_workspace_id}
  */
  readonly verifierWorkspaceId: string;
  /**
  * ip_traffic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_manager_verifier_workspace_reachability_analysis_intent#ip_traffic NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent#ip_traffic}
  */
  readonly ipTraffic: NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTraffic;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_manager_verifier_workspace_reachability_analysis_intent#timeouts NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent#timeouts}
  */
  readonly timeouts?: NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeouts;
}
export interface NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTraffic {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_manager_verifier_workspace_reachability_analysis_intent#destination_ips NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent#destination_ips}
  */
  readonly destinationIps: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_manager_verifier_workspace_reachability_analysis_intent#destination_ports NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent#destination_ports}
  */
  readonly destinationPorts: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_manager_verifier_workspace_reachability_analysis_intent#protocols NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent#protocols}
  */
  readonly protocols: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_manager_verifier_workspace_reachability_analysis_intent#source_ips NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent#source_ips}
  */
  readonly sourceIps: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_manager_verifier_workspace_reachability_analysis_intent#source_ports NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent#source_ports}
  */
  readonly sourcePorts: string[];
}

export function networkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficToTerraform(struct?: NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference | NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTraffic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationIps),
    destination_ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationPorts),
    protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.protocols),
    source_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceIps),
    source_ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourcePorts),
  }
}


export function networkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficToHclTerraform(struct?: NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference | NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTraffic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinationIps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    destination_ports: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinationPorts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    protocols: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.protocols),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceIps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_ports: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourcePorts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTraffic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationIps = this._destinationIps;
    }
    if (this._destinationPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPorts = this._destinationPorts;
    }
    if (this._protocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocols = this._protocols;
    }
    if (this._sourceIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIps = this._sourceIps;
    }
    if (this._sourcePorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePorts = this._sourcePorts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTraffic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destinationIps = undefined;
      this._destinationPorts = undefined;
      this._protocols = undefined;
      this._sourceIps = undefined;
      this._sourcePorts = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destinationIps = value.destinationIps;
      this._destinationPorts = value.destinationPorts;
      this._protocols = value.protocols;
      this._sourceIps = value.sourceIps;
      this._sourcePorts = value.sourcePorts;
    }
  }

  // destination_ips - computed: false, optional: false, required: true
  private _destinationIps?: string[]; 
  public get destinationIps() {
    return this.getListAttribute('destination_ips');
  }
  public set destinationIps(value: string[]) {
    this._destinationIps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIpsInput() {
    return this._destinationIps;
  }

  // destination_ports - computed: false, optional: false, required: true
  private _destinationPorts?: string[]; 
  public get destinationPorts() {
    return this.getListAttribute('destination_ports');
  }
  public set destinationPorts(value: string[]) {
    this._destinationPorts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortsInput() {
    return this._destinationPorts;
  }

  // protocols - computed: false, optional: false, required: true
  private _protocols?: string[]; 
  public get protocols() {
    return this.getListAttribute('protocols');
  }
  public set protocols(value: string[]) {
    this._protocols = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }

  // source_ips - computed: false, optional: false, required: true
  private _sourceIps?: string[]; 
  public get sourceIps() {
    return this.getListAttribute('source_ips');
  }
  public set sourceIps(value: string[]) {
    this._sourceIps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpsInput() {
    return this._sourceIps;
  }

  // source_ports - computed: false, optional: false, required: true
  private _sourcePorts?: string[]; 
  public get sourcePorts() {
    return this.getListAttribute('source_ports');
  }
  public set sourcePorts(value: string[]) {
    this._sourcePorts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortsInput() {
    return this._sourcePorts;
  }
}
export interface NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_manager_verifier_workspace_reachability_analysis_intent#create NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_manager_verifier_workspace_reachability_analysis_intent#delete NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_manager_verifier_workspace_reachability_analysis_intent#read NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent#read}
  */
  readonly read?: string;
}

export function networkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsToTerraform(struct?: NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function networkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsToHclTerraform(struct?: NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_manager_verifier_workspace_reachability_analysis_intent azurerm_network_manager_verifier_workspace_reachability_analysis_intent}
*/
export class NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_network_manager_verifier_workspace_reachability_analysis_intent";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent to import
  * @param importFromId The id of the existing NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_manager_verifier_workspace_reachability_analysis_intent#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_network_manager_verifier_workspace_reachability_analysis_intent", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_manager_verifier_workspace_reachability_analysis_intent azurerm_network_manager_verifier_workspace_reachability_analysis_intent} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_network_manager_verifier_workspace_reachability_analysis_intent',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.45.1',
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
    this._description = config.description;
    this._destinationResourceId = config.destinationResourceId;
    this._id = config.id;
    this._name = config.name;
    this._sourceResourceId = config.sourceResourceId;
    this._verifierWorkspaceId = config.verifierWorkspaceId;
    this._ipTraffic.internalValue = config.ipTraffic;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // destination_resource_id - computed: false, optional: false, required: true
  private _destinationResourceId?: string; 
  public get destinationResourceId() {
    return this.getStringAttribute('destination_resource_id');
  }
  public set destinationResourceId(value: string) {
    this._destinationResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationResourceIdInput() {
    return this._destinationResourceId;
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

  // source_resource_id - computed: false, optional: false, required: true
  private _sourceResourceId?: string; 
  public get sourceResourceId() {
    return this.getStringAttribute('source_resource_id');
  }
  public set sourceResourceId(value: string) {
    this._sourceResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceResourceIdInput() {
    return this._sourceResourceId;
  }

  // verifier_workspace_id - computed: false, optional: false, required: true
  private _verifierWorkspaceId?: string; 
  public get verifierWorkspaceId() {
    return this.getStringAttribute('verifier_workspace_id');
  }
  public set verifierWorkspaceId(value: string) {
    this._verifierWorkspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get verifierWorkspaceIdInput() {
    return this._verifierWorkspaceId;
  }

  // ip_traffic - computed: false, optional: false, required: true
  private _ipTraffic = new NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference(this, "ip_traffic");
  public get ipTraffic() {
    return this._ipTraffic;
  }
  public putIpTraffic(value: NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTraffic) {
    this._ipTraffic.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipTrafficInput() {
    return this._ipTraffic.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      destination_resource_id: cdktf.stringToTerraform(this._destinationResourceId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      source_resource_id: cdktf.stringToTerraform(this._sourceResourceId),
      verifier_workspace_id: cdktf.stringToTerraform(this._verifierWorkspaceId),
      ip_traffic: networkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficToTerraform(this._ipTraffic.internalValue),
      timeouts: networkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_resource_id: {
        value: cdktf.stringToHclTerraform(this._destinationResourceId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_resource_id: {
        value: cdktf.stringToHclTerraform(this._sourceResourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verifier_workspace_id: {
        value: cdktf.stringToHclTerraform(this._verifierWorkspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_traffic: {
        value: networkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficToHclTerraform(this._ipTraffic.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficList",
      },
      timeouts: {
        value: networkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
