/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LabServiceLabConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#description LabServiceLab#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#id LabServiceLab#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#lab_plan_id LabServiceLab#lab_plan_id}
  */
  readonly labPlanId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#location LabServiceLab#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#name LabServiceLab#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#resource_group_name LabServiceLab#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#tags LabServiceLab#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#title LabServiceLab#title}
  */
  readonly title: string;
  /**
  * auto_shutdown block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#auto_shutdown LabServiceLab#auto_shutdown}
  */
  readonly autoShutdown?: LabServiceLabAutoShutdown;
  /**
  * connection_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#connection_setting LabServiceLab#connection_setting}
  */
  readonly connectionSetting: LabServiceLabConnectionSetting;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#network LabServiceLab#network}
  */
  readonly network?: LabServiceLabNetwork;
  /**
  * roster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#roster LabServiceLab#roster}
  */
  readonly roster?: LabServiceLabRoster;
  /**
  * security block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#security LabServiceLab#security}
  */
  readonly security: LabServiceLabSecurity;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#timeouts LabServiceLab#timeouts}
  */
  readonly timeouts?: LabServiceLabTimeouts;
  /**
  * virtual_machine block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#virtual_machine LabServiceLab#virtual_machine}
  */
  readonly virtualMachine: LabServiceLabVirtualMachine;
}
export interface LabServiceLabAutoShutdown {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#disconnect_delay LabServiceLab#disconnect_delay}
  */
  readonly disconnectDelay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#idle_delay LabServiceLab#idle_delay}
  */
  readonly idleDelay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#no_connect_delay LabServiceLab#no_connect_delay}
  */
  readonly noConnectDelay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#shutdown_on_idle LabServiceLab#shutdown_on_idle}
  */
  readonly shutdownOnIdle?: string;
}

export function labServiceLabAutoShutdownToTerraform(struct?: LabServiceLabAutoShutdownOutputReference | LabServiceLabAutoShutdown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disconnect_delay: cdktf.stringToTerraform(struct!.disconnectDelay),
    idle_delay: cdktf.stringToTerraform(struct!.idleDelay),
    no_connect_delay: cdktf.stringToTerraform(struct!.noConnectDelay),
    shutdown_on_idle: cdktf.stringToTerraform(struct!.shutdownOnIdle),
  }
}


export function labServiceLabAutoShutdownToHclTerraform(struct?: LabServiceLabAutoShutdownOutputReference | LabServiceLabAutoShutdown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disconnect_delay: {
      value: cdktf.stringToHclTerraform(struct!.disconnectDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idle_delay: {
      value: cdktf.stringToHclTerraform(struct!.idleDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_connect_delay: {
      value: cdktf.stringToHclTerraform(struct!.noConnectDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shutdown_on_idle: {
      value: cdktf.stringToHclTerraform(struct!.shutdownOnIdle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LabServiceLabAutoShutdownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LabServiceLabAutoShutdown | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disconnectDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.disconnectDelay = this._disconnectDelay;
    }
    if (this._idleDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleDelay = this._idleDelay;
    }
    if (this._noConnectDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.noConnectDelay = this._noConnectDelay;
    }
    if (this._shutdownOnIdle !== undefined) {
      hasAnyValues = true;
      internalValueResult.shutdownOnIdle = this._shutdownOnIdle;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LabServiceLabAutoShutdown | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disconnectDelay = undefined;
      this._idleDelay = undefined;
      this._noConnectDelay = undefined;
      this._shutdownOnIdle = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disconnectDelay = value.disconnectDelay;
      this._idleDelay = value.idleDelay;
      this._noConnectDelay = value.noConnectDelay;
      this._shutdownOnIdle = value.shutdownOnIdle;
    }
  }

  // disconnect_delay - computed: false, optional: true, required: false
  private _disconnectDelay?: string; 
  public get disconnectDelay() {
    return this.getStringAttribute('disconnect_delay');
  }
  public set disconnectDelay(value: string) {
    this._disconnectDelay = value;
  }
  public resetDisconnectDelay() {
    this._disconnectDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disconnectDelayInput() {
    return this._disconnectDelay;
  }

  // idle_delay - computed: false, optional: true, required: false
  private _idleDelay?: string; 
  public get idleDelay() {
    return this.getStringAttribute('idle_delay');
  }
  public set idleDelay(value: string) {
    this._idleDelay = value;
  }
  public resetIdleDelay() {
    this._idleDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleDelayInput() {
    return this._idleDelay;
  }

  // no_connect_delay - computed: false, optional: true, required: false
  private _noConnectDelay?: string; 
  public get noConnectDelay() {
    return this.getStringAttribute('no_connect_delay');
  }
  public set noConnectDelay(value: string) {
    this._noConnectDelay = value;
  }
  public resetNoConnectDelay() {
    this._noConnectDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noConnectDelayInput() {
    return this._noConnectDelay;
  }

  // shutdown_on_idle - computed: false, optional: true, required: false
  private _shutdownOnIdle?: string; 
  public get shutdownOnIdle() {
    return this.getStringAttribute('shutdown_on_idle');
  }
  public set shutdownOnIdle(value: string) {
    this._shutdownOnIdle = value;
  }
  public resetShutdownOnIdle() {
    this._shutdownOnIdle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownOnIdleInput() {
    return this._shutdownOnIdle;
  }
}
export interface LabServiceLabConnectionSetting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#client_rdp_access LabServiceLab#client_rdp_access}
  */
  readonly clientRdpAccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#client_ssh_access LabServiceLab#client_ssh_access}
  */
  readonly clientSshAccess?: string;
}

export function labServiceLabConnectionSettingToTerraform(struct?: LabServiceLabConnectionSettingOutputReference | LabServiceLabConnectionSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_rdp_access: cdktf.stringToTerraform(struct!.clientRdpAccess),
    client_ssh_access: cdktf.stringToTerraform(struct!.clientSshAccess),
  }
}


export function labServiceLabConnectionSettingToHclTerraform(struct?: LabServiceLabConnectionSettingOutputReference | LabServiceLabConnectionSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_rdp_access: {
      value: cdktf.stringToHclTerraform(struct!.clientRdpAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_ssh_access: {
      value: cdktf.stringToHclTerraform(struct!.clientSshAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LabServiceLabConnectionSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LabServiceLabConnectionSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientRdpAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientRdpAccess = this._clientRdpAccess;
    }
    if (this._clientSshAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSshAccess = this._clientSshAccess;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LabServiceLabConnectionSetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientRdpAccess = undefined;
      this._clientSshAccess = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientRdpAccess = value.clientRdpAccess;
      this._clientSshAccess = value.clientSshAccess;
    }
  }

  // client_rdp_access - computed: false, optional: true, required: false
  private _clientRdpAccess?: string; 
  public get clientRdpAccess() {
    return this.getStringAttribute('client_rdp_access');
  }
  public set clientRdpAccess(value: string) {
    this._clientRdpAccess = value;
  }
  public resetClientRdpAccess() {
    this._clientRdpAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientRdpAccessInput() {
    return this._clientRdpAccess;
  }

  // client_ssh_access - computed: false, optional: true, required: false
  private _clientSshAccess?: string; 
  public get clientSshAccess() {
    return this.getStringAttribute('client_ssh_access');
  }
  public set clientSshAccess(value: string) {
    this._clientSshAccess = value;
  }
  public resetClientSshAccess() {
    this._clientSshAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSshAccessInput() {
    return this._clientSshAccess;
  }
}
export interface LabServiceLabNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#subnet_id LabServiceLab#subnet_id}
  */
  readonly subnetId?: string;
}

export function labServiceLabNetworkToTerraform(struct?: LabServiceLabNetworkOutputReference | LabServiceLabNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function labServiceLabNetworkToHclTerraform(struct?: LabServiceLabNetworkOutputReference | LabServiceLabNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LabServiceLabNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LabServiceLabNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LabServiceLabNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._subnetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._subnetId = value.subnetId;
    }
  }

  // load_balancer_id - computed: true, optional: false, required: false
  public get loadBalancerId() {
    return this.getStringAttribute('load_balancer_id');
  }

  // public_ip_id - computed: true, optional: false, required: false
  public get publicIpId() {
    return this.getStringAttribute('public_ip_id');
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }
}
export interface LabServiceLabRoster {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#active_directory_group_id LabServiceLab#active_directory_group_id}
  */
  readonly activeDirectoryGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#lms_instance LabServiceLab#lms_instance}
  */
  readonly lmsInstance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#lti_client_id LabServiceLab#lti_client_id}
  */
  readonly ltiClientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#lti_context_id LabServiceLab#lti_context_id}
  */
  readonly ltiContextId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#lti_roster_endpoint LabServiceLab#lti_roster_endpoint}
  */
  readonly ltiRosterEndpoint?: string;
}

export function labServiceLabRosterToTerraform(struct?: LabServiceLabRosterOutputReference | LabServiceLabRoster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_directory_group_id: cdktf.stringToTerraform(struct!.activeDirectoryGroupId),
    lms_instance: cdktf.stringToTerraform(struct!.lmsInstance),
    lti_client_id: cdktf.stringToTerraform(struct!.ltiClientId),
    lti_context_id: cdktf.stringToTerraform(struct!.ltiContextId),
    lti_roster_endpoint: cdktf.stringToTerraform(struct!.ltiRosterEndpoint),
  }
}


export function labServiceLabRosterToHclTerraform(struct?: LabServiceLabRosterOutputReference | LabServiceLabRoster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_directory_group_id: {
      value: cdktf.stringToHclTerraform(struct!.activeDirectoryGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lms_instance: {
      value: cdktf.stringToHclTerraform(struct!.lmsInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lti_client_id: {
      value: cdktf.stringToHclTerraform(struct!.ltiClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lti_context_id: {
      value: cdktf.stringToHclTerraform(struct!.ltiContextId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lti_roster_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.ltiRosterEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LabServiceLabRosterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LabServiceLabRoster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeDirectoryGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeDirectoryGroupId = this._activeDirectoryGroupId;
    }
    if (this._lmsInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.lmsInstance = this._lmsInstance;
    }
    if (this._ltiClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ltiClientId = this._ltiClientId;
    }
    if (this._ltiContextId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ltiContextId = this._ltiContextId;
    }
    if (this._ltiRosterEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.ltiRosterEndpoint = this._ltiRosterEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LabServiceLabRoster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activeDirectoryGroupId = undefined;
      this._lmsInstance = undefined;
      this._ltiClientId = undefined;
      this._ltiContextId = undefined;
      this._ltiRosterEndpoint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activeDirectoryGroupId = value.activeDirectoryGroupId;
      this._lmsInstance = value.lmsInstance;
      this._ltiClientId = value.ltiClientId;
      this._ltiContextId = value.ltiContextId;
      this._ltiRosterEndpoint = value.ltiRosterEndpoint;
    }
  }

  // active_directory_group_id - computed: false, optional: true, required: false
  private _activeDirectoryGroupId?: string; 
  public get activeDirectoryGroupId() {
    return this.getStringAttribute('active_directory_group_id');
  }
  public set activeDirectoryGroupId(value: string) {
    this._activeDirectoryGroupId = value;
  }
  public resetActiveDirectoryGroupId() {
    this._activeDirectoryGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDirectoryGroupIdInput() {
    return this._activeDirectoryGroupId;
  }

  // lms_instance - computed: false, optional: true, required: false
  private _lmsInstance?: string; 
  public get lmsInstance() {
    return this.getStringAttribute('lms_instance');
  }
  public set lmsInstance(value: string) {
    this._lmsInstance = value;
  }
  public resetLmsInstance() {
    this._lmsInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lmsInstanceInput() {
    return this._lmsInstance;
  }

  // lti_client_id - computed: false, optional: true, required: false
  private _ltiClientId?: string; 
  public get ltiClientId() {
    return this.getStringAttribute('lti_client_id');
  }
  public set ltiClientId(value: string) {
    this._ltiClientId = value;
  }
  public resetLtiClientId() {
    this._ltiClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ltiClientIdInput() {
    return this._ltiClientId;
  }

  // lti_context_id - computed: false, optional: true, required: false
  private _ltiContextId?: string; 
  public get ltiContextId() {
    return this.getStringAttribute('lti_context_id');
  }
  public set ltiContextId(value: string) {
    this._ltiContextId = value;
  }
  public resetLtiContextId() {
    this._ltiContextId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ltiContextIdInput() {
    return this._ltiContextId;
  }

  // lti_roster_endpoint - computed: false, optional: true, required: false
  private _ltiRosterEndpoint?: string; 
  public get ltiRosterEndpoint() {
    return this.getStringAttribute('lti_roster_endpoint');
  }
  public set ltiRosterEndpoint(value: string) {
    this._ltiRosterEndpoint = value;
  }
  public resetLtiRosterEndpoint() {
    this._ltiRosterEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ltiRosterEndpointInput() {
    return this._ltiRosterEndpoint;
  }
}
export interface LabServiceLabSecurity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#open_access_enabled LabServiceLab#open_access_enabled}
  */
  readonly openAccessEnabled: boolean | cdktf.IResolvable;
}

export function labServiceLabSecurityToTerraform(struct?: LabServiceLabSecurityOutputReference | LabServiceLabSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    open_access_enabled: cdktf.booleanToTerraform(struct!.openAccessEnabled),
  }
}


export function labServiceLabSecurityToHclTerraform(struct?: LabServiceLabSecurityOutputReference | LabServiceLabSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    open_access_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.openAccessEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LabServiceLabSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LabServiceLabSecurity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._openAccessEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.openAccessEnabled = this._openAccessEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LabServiceLabSecurity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._openAccessEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._openAccessEnabled = value.openAccessEnabled;
    }
  }

  // open_access_enabled - computed: false, optional: false, required: true
  private _openAccessEnabled?: boolean | cdktf.IResolvable; 
  public get openAccessEnabled() {
    return this.getBooleanAttribute('open_access_enabled');
  }
  public set openAccessEnabled(value: boolean | cdktf.IResolvable) {
    this._openAccessEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get openAccessEnabledInput() {
    return this._openAccessEnabled;
  }

  // registration_code - computed: true, optional: false, required: false
  public get registrationCode() {
    return this.getStringAttribute('registration_code');
  }
}
export interface LabServiceLabTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#create LabServiceLab#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#delete LabServiceLab#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#read LabServiceLab#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#update LabServiceLab#update}
  */
  readonly update?: string;
}

export function labServiceLabTimeoutsToTerraform(struct?: LabServiceLabTimeouts | cdktf.IResolvable): any {
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


export function labServiceLabTimeoutsToHclTerraform(struct?: LabServiceLabTimeouts | cdktf.IResolvable): any {
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

export class LabServiceLabTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LabServiceLabTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LabServiceLabTimeouts | cdktf.IResolvable | undefined) {
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
export interface LabServiceLabVirtualMachineAdminUser {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#password LabServiceLab#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#username LabServiceLab#username}
  */
  readonly username: string;
}

export function labServiceLabVirtualMachineAdminUserToTerraform(struct?: LabServiceLabVirtualMachineAdminUserOutputReference | LabServiceLabVirtualMachineAdminUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function labServiceLabVirtualMachineAdminUserToHclTerraform(struct?: LabServiceLabVirtualMachineAdminUserOutputReference | LabServiceLabVirtualMachineAdminUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LabServiceLabVirtualMachineAdminUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LabServiceLabVirtualMachineAdminUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LabServiceLabVirtualMachineAdminUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface LabServiceLabVirtualMachineImageReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#id LabServiceLab#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#offer LabServiceLab#offer}
  */
  readonly offer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#publisher LabServiceLab#publisher}
  */
  readonly publisher?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#sku LabServiceLab#sku}
  */
  readonly sku?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#version LabServiceLab#version}
  */
  readonly version?: string;
}

export function labServiceLabVirtualMachineImageReferenceToTerraform(struct?: LabServiceLabVirtualMachineImageReferenceOutputReference | LabServiceLabVirtualMachineImageReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    offer: cdktf.stringToTerraform(struct!.offer),
    publisher: cdktf.stringToTerraform(struct!.publisher),
    sku: cdktf.stringToTerraform(struct!.sku),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function labServiceLabVirtualMachineImageReferenceToHclTerraform(struct?: LabServiceLabVirtualMachineImageReferenceOutputReference | LabServiceLabVirtualMachineImageReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    offer: {
      value: cdktf.stringToHclTerraform(struct!.offer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    publisher: {
      value: cdktf.stringToHclTerraform(struct!.publisher),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sku: {
      value: cdktf.stringToHclTerraform(struct!.sku),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LabServiceLabVirtualMachineImageReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LabServiceLabVirtualMachineImageReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._offer !== undefined) {
      hasAnyValues = true;
      internalValueResult.offer = this._offer;
    }
    if (this._publisher !== undefined) {
      hasAnyValues = true;
      internalValueResult.publisher = this._publisher;
    }
    if (this._sku !== undefined) {
      hasAnyValues = true;
      internalValueResult.sku = this._sku;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LabServiceLabVirtualMachineImageReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._offer = undefined;
      this._publisher = undefined;
      this._sku = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._offer = value.offer;
      this._publisher = value.publisher;
      this._sku = value.sku;
      this._version = value.version;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // offer - computed: false, optional: true, required: false
  private _offer?: string; 
  public get offer() {
    return this.getStringAttribute('offer');
  }
  public set offer(value: string) {
    this._offer = value;
  }
  public resetOffer() {
    this._offer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offerInput() {
    return this._offer;
  }

  // publisher - computed: false, optional: true, required: false
  private _publisher?: string; 
  public get publisher() {
    return this.getStringAttribute('publisher');
  }
  public set publisher(value: string) {
    this._publisher = value;
  }
  public resetPublisher() {
    this._publisher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publisherInput() {
    return this._publisher;
  }

  // sku - computed: false, optional: true, required: false
  private _sku?: string; 
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string) {
    this._sku = value;
  }
  public resetSku() {
    this._sku = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface LabServiceLabVirtualMachineNonAdminUser {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#password LabServiceLab#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#username LabServiceLab#username}
  */
  readonly username: string;
}

export function labServiceLabVirtualMachineNonAdminUserToTerraform(struct?: LabServiceLabVirtualMachineNonAdminUserOutputReference | LabServiceLabVirtualMachineNonAdminUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function labServiceLabVirtualMachineNonAdminUserToHclTerraform(struct?: LabServiceLabVirtualMachineNonAdminUserOutputReference | LabServiceLabVirtualMachineNonAdminUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LabServiceLabVirtualMachineNonAdminUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LabServiceLabVirtualMachineNonAdminUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LabServiceLabVirtualMachineNonAdminUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface LabServiceLabVirtualMachineSku {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#capacity LabServiceLab#capacity}
  */
  readonly capacity: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#name LabServiceLab#name}
  */
  readonly name: string;
}

export function labServiceLabVirtualMachineSkuToTerraform(struct?: LabServiceLabVirtualMachineSkuOutputReference | LabServiceLabVirtualMachineSku): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity: cdktf.numberToTerraform(struct!.capacity),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function labServiceLabVirtualMachineSkuToHclTerraform(struct?: LabServiceLabVirtualMachineSkuOutputReference | LabServiceLabVirtualMachineSku): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity: {
      value: cdktf.numberToHclTerraform(struct!.capacity),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LabServiceLabVirtualMachineSkuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LabServiceLabVirtualMachineSku | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacity = this._capacity;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LabServiceLabVirtualMachineSku | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._capacity = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._capacity = value.capacity;
      this._name = value.name;
    }
  }

  // capacity - computed: false, optional: false, required: true
  private _capacity?: number; 
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }
  public set capacity(value: number) {
    this._capacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
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
}
export interface LabServiceLabVirtualMachine {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#additional_capability_gpu_drivers_installed LabServiceLab#additional_capability_gpu_drivers_installed}
  */
  readonly additionalCapabilityGpuDriversInstalled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#create_option LabServiceLab#create_option}
  */
  readonly createOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#shared_password_enabled LabServiceLab#shared_password_enabled}
  */
  readonly sharedPasswordEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#usage_quota LabServiceLab#usage_quota}
  */
  readonly usageQuota?: string;
  /**
  * admin_user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#admin_user LabServiceLab#admin_user}
  */
  readonly adminUser: LabServiceLabVirtualMachineAdminUser;
  /**
  * image_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#image_reference LabServiceLab#image_reference}
  */
  readonly imageReference: LabServiceLabVirtualMachineImageReference;
  /**
  * non_admin_user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#non_admin_user LabServiceLab#non_admin_user}
  */
  readonly nonAdminUser?: LabServiceLabVirtualMachineNonAdminUser;
  /**
  * sku block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#sku LabServiceLab#sku}
  */
  readonly sku: LabServiceLabVirtualMachineSku;
}

export function labServiceLabVirtualMachineToTerraform(struct?: LabServiceLabVirtualMachineOutputReference | LabServiceLabVirtualMachine): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_capability_gpu_drivers_installed: cdktf.booleanToTerraform(struct!.additionalCapabilityGpuDriversInstalled),
    create_option: cdktf.stringToTerraform(struct!.createOption),
    shared_password_enabled: cdktf.booleanToTerraform(struct!.sharedPasswordEnabled),
    usage_quota: cdktf.stringToTerraform(struct!.usageQuota),
    admin_user: labServiceLabVirtualMachineAdminUserToTerraform(struct!.adminUser),
    image_reference: labServiceLabVirtualMachineImageReferenceToTerraform(struct!.imageReference),
    non_admin_user: labServiceLabVirtualMachineNonAdminUserToTerraform(struct!.nonAdminUser),
    sku: labServiceLabVirtualMachineSkuToTerraform(struct!.sku),
  }
}


export function labServiceLabVirtualMachineToHclTerraform(struct?: LabServiceLabVirtualMachineOutputReference | LabServiceLabVirtualMachine): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_capability_gpu_drivers_installed: {
      value: cdktf.booleanToHclTerraform(struct!.additionalCapabilityGpuDriversInstalled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    create_option: {
      value: cdktf.stringToHclTerraform(struct!.createOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared_password_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.sharedPasswordEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    usage_quota: {
      value: cdktf.stringToHclTerraform(struct!.usageQuota),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    admin_user: {
      value: labServiceLabVirtualMachineAdminUserToHclTerraform(struct!.adminUser),
      isBlock: true,
      type: "list",
      storageClassType: "LabServiceLabVirtualMachineAdminUserList",
    },
    image_reference: {
      value: labServiceLabVirtualMachineImageReferenceToHclTerraform(struct!.imageReference),
      isBlock: true,
      type: "list",
      storageClassType: "LabServiceLabVirtualMachineImageReferenceList",
    },
    non_admin_user: {
      value: labServiceLabVirtualMachineNonAdminUserToHclTerraform(struct!.nonAdminUser),
      isBlock: true,
      type: "list",
      storageClassType: "LabServiceLabVirtualMachineNonAdminUserList",
    },
    sku: {
      value: labServiceLabVirtualMachineSkuToHclTerraform(struct!.sku),
      isBlock: true,
      type: "list",
      storageClassType: "LabServiceLabVirtualMachineSkuList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LabServiceLabVirtualMachineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LabServiceLabVirtualMachine | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalCapabilityGpuDriversInstalled !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalCapabilityGpuDriversInstalled = this._additionalCapabilityGpuDriversInstalled;
    }
    if (this._createOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.createOption = this._createOption;
    }
    if (this._sharedPasswordEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedPasswordEnabled = this._sharedPasswordEnabled;
    }
    if (this._usageQuota !== undefined) {
      hasAnyValues = true;
      internalValueResult.usageQuota = this._usageQuota;
    }
    if (this._adminUser?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminUser = this._adminUser?.internalValue;
    }
    if (this._imageReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageReference = this._imageReference?.internalValue;
    }
    if (this._nonAdminUser?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonAdminUser = this._nonAdminUser?.internalValue;
    }
    if (this._sku?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sku = this._sku?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LabServiceLabVirtualMachine | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalCapabilityGpuDriversInstalled = undefined;
      this._createOption = undefined;
      this._sharedPasswordEnabled = undefined;
      this._usageQuota = undefined;
      this._adminUser.internalValue = undefined;
      this._imageReference.internalValue = undefined;
      this._nonAdminUser.internalValue = undefined;
      this._sku.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalCapabilityGpuDriversInstalled = value.additionalCapabilityGpuDriversInstalled;
      this._createOption = value.createOption;
      this._sharedPasswordEnabled = value.sharedPasswordEnabled;
      this._usageQuota = value.usageQuota;
      this._adminUser.internalValue = value.adminUser;
      this._imageReference.internalValue = value.imageReference;
      this._nonAdminUser.internalValue = value.nonAdminUser;
      this._sku.internalValue = value.sku;
    }
  }

  // additional_capability_gpu_drivers_installed - computed: false, optional: true, required: false
  private _additionalCapabilityGpuDriversInstalled?: boolean | cdktf.IResolvable; 
  public get additionalCapabilityGpuDriversInstalled() {
    return this.getBooleanAttribute('additional_capability_gpu_drivers_installed');
  }
  public set additionalCapabilityGpuDriversInstalled(value: boolean | cdktf.IResolvable) {
    this._additionalCapabilityGpuDriversInstalled = value;
  }
  public resetAdditionalCapabilityGpuDriversInstalled() {
    this._additionalCapabilityGpuDriversInstalled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalCapabilityGpuDriversInstalledInput() {
    return this._additionalCapabilityGpuDriversInstalled;
  }

  // create_option - computed: false, optional: true, required: false
  private _createOption?: string; 
  public get createOption() {
    return this.getStringAttribute('create_option');
  }
  public set createOption(value: string) {
    this._createOption = value;
  }
  public resetCreateOption() {
    this._createOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createOptionInput() {
    return this._createOption;
  }

  // shared_password_enabled - computed: false, optional: true, required: false
  private _sharedPasswordEnabled?: boolean | cdktf.IResolvable; 
  public get sharedPasswordEnabled() {
    return this.getBooleanAttribute('shared_password_enabled');
  }
  public set sharedPasswordEnabled(value: boolean | cdktf.IResolvable) {
    this._sharedPasswordEnabled = value;
  }
  public resetSharedPasswordEnabled() {
    this._sharedPasswordEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPasswordEnabledInput() {
    return this._sharedPasswordEnabled;
  }

  // usage_quota - computed: false, optional: true, required: false
  private _usageQuota?: string; 
  public get usageQuota() {
    return this.getStringAttribute('usage_quota');
  }
  public set usageQuota(value: string) {
    this._usageQuota = value;
  }
  public resetUsageQuota() {
    this._usageQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageQuotaInput() {
    return this._usageQuota;
  }

  // admin_user - computed: false, optional: false, required: true
  private _adminUser = new LabServiceLabVirtualMachineAdminUserOutputReference(this, "admin_user");
  public get adminUser() {
    return this._adminUser;
  }
  public putAdminUser(value: LabServiceLabVirtualMachineAdminUser) {
    this._adminUser.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUserInput() {
    return this._adminUser.internalValue;
  }

  // image_reference - computed: false, optional: false, required: true
  private _imageReference = new LabServiceLabVirtualMachineImageReferenceOutputReference(this, "image_reference");
  public get imageReference() {
    return this._imageReference;
  }
  public putImageReference(value: LabServiceLabVirtualMachineImageReference) {
    this._imageReference.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageReferenceInput() {
    return this._imageReference.internalValue;
  }

  // non_admin_user - computed: false, optional: true, required: false
  private _nonAdminUser = new LabServiceLabVirtualMachineNonAdminUserOutputReference(this, "non_admin_user");
  public get nonAdminUser() {
    return this._nonAdminUser;
  }
  public putNonAdminUser(value: LabServiceLabVirtualMachineNonAdminUser) {
    this._nonAdminUser.internalValue = value;
  }
  public resetNonAdminUser() {
    this._nonAdminUser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonAdminUserInput() {
    return this._nonAdminUser.internalValue;
  }

  // sku - computed: false, optional: false, required: true
  private _sku = new LabServiceLabVirtualMachineSkuOutputReference(this, "sku");
  public get sku() {
    return this._sku;
  }
  public putSku(value: LabServiceLabVirtualMachineSku) {
    this._sku.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab azurerm_lab_service_lab}
*/
export class LabServiceLab extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_lab_service_lab";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LabServiceLab resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LabServiceLab to import
  * @param importFromId The id of the existing LabServiceLab that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LabServiceLab to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_lab_service_lab", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/lab_service_lab azurerm_lab_service_lab} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LabServiceLabConfig
  */
  public constructor(scope: Construct, id: string, config: LabServiceLabConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_lab_service_lab',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '3.92.0',
        providerVersionConstraint: '~> 3.10'
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
    this._id = config.id;
    this._labPlanId = config.labPlanId;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._title = config.title;
    this._autoShutdown.internalValue = config.autoShutdown;
    this._connectionSetting.internalValue = config.connectionSetting;
    this._network.internalValue = config.network;
    this._roster.internalValue = config.roster;
    this._security.internalValue = config.security;
    this._timeouts.internalValue = config.timeouts;
    this._virtualMachine.internalValue = config.virtualMachine;
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

  // lab_plan_id - computed: false, optional: true, required: false
  private _labPlanId?: string; 
  public get labPlanId() {
    return this.getStringAttribute('lab_plan_id');
  }
  public set labPlanId(value: string) {
    this._labPlanId = value;
  }
  public resetLabPlanId() {
    this._labPlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labPlanIdInput() {
    return this._labPlanId;
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

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // auto_shutdown - computed: false, optional: true, required: false
  private _autoShutdown = new LabServiceLabAutoShutdownOutputReference(this, "auto_shutdown");
  public get autoShutdown() {
    return this._autoShutdown;
  }
  public putAutoShutdown(value: LabServiceLabAutoShutdown) {
    this._autoShutdown.internalValue = value;
  }
  public resetAutoShutdown() {
    this._autoShutdown.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoShutdownInput() {
    return this._autoShutdown.internalValue;
  }

  // connection_setting - computed: false, optional: false, required: true
  private _connectionSetting = new LabServiceLabConnectionSettingOutputReference(this, "connection_setting");
  public get connectionSetting() {
    return this._connectionSetting;
  }
  public putConnectionSetting(value: LabServiceLabConnectionSetting) {
    this._connectionSetting.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionSettingInput() {
    return this._connectionSetting.internalValue;
  }

  // network - computed: false, optional: true, required: false
  private _network = new LabServiceLabNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: LabServiceLabNetwork) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // roster - computed: false, optional: true, required: false
  private _roster = new LabServiceLabRosterOutputReference(this, "roster");
  public get roster() {
    return this._roster;
  }
  public putRoster(value: LabServiceLabRoster) {
    this._roster.internalValue = value;
  }
  public resetRoster() {
    this._roster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rosterInput() {
    return this._roster.internalValue;
  }

  // security - computed: false, optional: false, required: true
  private _security = new LabServiceLabSecurityOutputReference(this, "security");
  public get security() {
    return this._security;
  }
  public putSecurity(value: LabServiceLabSecurity) {
    this._security.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LabServiceLabTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LabServiceLabTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // virtual_machine - computed: false, optional: false, required: true
  private _virtualMachine = new LabServiceLabVirtualMachineOutputReference(this, "virtual_machine");
  public get virtualMachine() {
    return this._virtualMachine;
  }
  public putVirtualMachine(value: LabServiceLabVirtualMachine) {
    this._virtualMachine.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMachineInput() {
    return this._virtualMachine.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      lab_plan_id: cdktf.stringToTerraform(this._labPlanId),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      title: cdktf.stringToTerraform(this._title),
      auto_shutdown: labServiceLabAutoShutdownToTerraform(this._autoShutdown.internalValue),
      connection_setting: labServiceLabConnectionSettingToTerraform(this._connectionSetting.internalValue),
      network: labServiceLabNetworkToTerraform(this._network.internalValue),
      roster: labServiceLabRosterToTerraform(this._roster.internalValue),
      security: labServiceLabSecurityToTerraform(this._security.internalValue),
      timeouts: labServiceLabTimeoutsToTerraform(this._timeouts.internalValue),
      virtual_machine: labServiceLabVirtualMachineToTerraform(this._virtualMachine.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lab_plan_id: {
        value: cdktf.stringToHclTerraform(this._labPlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
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
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_shutdown: {
        value: labServiceLabAutoShutdownToHclTerraform(this._autoShutdown.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LabServiceLabAutoShutdownList",
      },
      connection_setting: {
        value: labServiceLabConnectionSettingToHclTerraform(this._connectionSetting.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LabServiceLabConnectionSettingList",
      },
      network: {
        value: labServiceLabNetworkToHclTerraform(this._network.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LabServiceLabNetworkList",
      },
      roster: {
        value: labServiceLabRosterToHclTerraform(this._roster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LabServiceLabRosterList",
      },
      security: {
        value: labServiceLabSecurityToHclTerraform(this._security.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LabServiceLabSecurityList",
      },
      timeouts: {
        value: labServiceLabTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LabServiceLabTimeouts",
      },
      virtual_machine: {
        value: labServiceLabVirtualMachineToHclTerraform(this._virtualMachine.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LabServiceLabVirtualMachineList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
